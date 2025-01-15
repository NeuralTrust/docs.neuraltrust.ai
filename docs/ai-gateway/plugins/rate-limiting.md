---
sidebar_position: 2
title: Rate Limiting
---

# Rate Limiting

TrustGate implements a sophisticated rate limiting system that operates at multiple levels and supports various limiting strategies.

## Rate Limiter Architecture

The rate limiter operates in the `pre_request` stage and evaluates limits in the following order:
1. Per-IP limits
2. Per-User limits
3. Global limits

### Basic Configuration

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id} \
  -H "Content-Type: application/json" \
  -d '{
    "required_plugins": [
      {
        "name": "rate_limiter",
        "enabled": true,
        "stage": "pre_request",
        "priority": 1,
        "settings": {
          "limits": {
            "global": {
              "limit": 15,
              "window": "1m"
            },
            "per_ip": {
              "limit": 5,
              "window": "1m"
            },
            "per_user": {
              "limit": 5,
              "window": "1m"
            }
          },
          "actions": {
            "type": "reject",
            "retry_after": "60"
          }
        }
      }
    ]
  }'
```

## Limit Types

### 1. Per-IP Limiting
```json
"per_ip": {
  "limit": 5,
  "window": "1m"
}
```
- Tracks requests by IP address
- Supports multiple IP headers for proxy environments:
  - `X-Real-IP`
  - `X-Forwarded-For`
  - `X-Original-Forwarded-For`
  - `True-Client-IP`
  - `CF-Connecting-IP`

### 2. Per-User Limiting
```json
"per_user": {
  "limit": 5,
  "window": "1m"
}
```
- Tracks requests by user identifier
- Supports multiple user ID headers:
  - `X-User-ID`
  - `X-User-Id`
  - `X-UserID`
  - `User-ID`
- Falls back to "anonymous" if no user ID is found

### 3. Global Limiting
```json
"global": {
  "limit": 15,
  "window": "1m"
}
```
- Applies to all requests across the gateway
- Used for overall traffic control

## Window Configuration

The `window` parameter supports any valid duration string:
- `s`: seconds (e.g., "30s")
- `m`: minutes (e.g., "5m")
- `h`: hours (e.g., "1h")
- `d`: days (e.g., "1d")

Example combinations:
```json
{
  "limits": {
    "per_ip": {
      "limit": 30,
      "window": "30s"
    },
    "per_user": {
      "limit": 100,
      "window": "1h"
    },
    "global": {
      "limit": 1000,
      "window": "1d"
    }
  }
}
```

## Action Configuration

```json
"actions": {
  "type": "reject",
  "retry_after": "60"
}
```

- **type**: 
  - `reject`: Returns 429 status with retry information
  - `block`: Similar to reject but for permanent blocks
- **retry_after**: Seconds to wait before retrying

## Response Headers

The rate limiter adds the following headers to each response:

### Per Limit Type Headers
```
X-RateLimit-{type}-Limit: [maximum requests]
X-RateLimit-{type}-Remaining: [requests remaining]
X-RateLimit-{type}-Reset: [reset timestamp]
```
Where `{type}` is one of:
- `global`
- `per_ip`
- `per_user`

### Rate Limit Exceeded Response
```json
{
  "error": "per_ip rate limit exceeded",
  "retry_after": "60"
}
```

## Implementation Details

### Storage and Tracking
- Uses Redis sorted sets for tracking
- Key format: `ratelimit:{level}:{id}:{limit_type}:{key}`
- Automatic cleanup of expired entries
- Thread-safe operations

### Counter Implementation
```go
requestID := fmt.Sprintf("%d:%s", now.Unix(), uuid.New().String())
pipe := redis.Pipeline()
pipe.ZRemRangeByScore(ctx, key, "0", windowStart)
pipe.ZAdd(ctx, key, &redis.Z{
    Score:  float64(now.Unix()),
    Member: requestID,
})
pipe.Expire(ctx, key, window)
```

## Best Practices

1. **Layered Protection**
   - Configure all three limit types
   - Use shorter windows for per-IP limits
   - Use longer windows for global limits

2. **Header Configuration**
   - Ensure proper forwarding of IP headers in proxy setups
   - Configure user ID headers for accurate user tracking

3. **Window Sizing**
   - Per-IP: 10s-1m windows for abuse prevention
   - Per-User: 1m-1h windows for fair usage
   - Global: 1m-24h windows for capacity planning

4. **Monitoring**
   - Track rate limit headers for usage patterns
   - Monitor 429 responses for limit adjustments
   - Implement client-side backoff strategies
