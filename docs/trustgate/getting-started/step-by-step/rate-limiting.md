---
sidebar_position: 8
title: Rate Limiting
---

# Rate Limiting

TrustGate provides two types of rate limiting: request-based and token-based rate limiting. These help protect your AI models from overuse and ensure fair resource distribution.

## Request-Based Rate Limiting

Configure the rate limiter plugin with multiple limit types:

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

### Configuration Options

- **Limit Types**:
  - `global`: Total requests across all users
  - `per_ip`: Requests from each IP address
  - `per_user`: Requests per API key

- **Window Settings**:
  - Use time units: `s` (seconds), `m` (minutes), `h` (hours)
  - Example: `"window": "1m"` for one-minute window

- **Actions**:
  - `reject`: Block requests when limit exceeded
  - `retry_after`: Time in seconds before retrying

## Token-Based Rate Limiting

For AI model requests, use token-based rate limiting to control token consumption:

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id} \
  -H "Content-Type: application/json" \
  -d '{
    "required_plugins": [
      {
        "name": "token_rate_limiter",
        "enabled": true,
        "settings": {
          "tokens_per_request": 20,
          "tokens_per_minute": 100,
          "bucket_size": 1000,
          "requests_per_minute": 60
        }
      }
    ]
  }'
```

### Token Limiter Settings

- **tokens_per_request**: Maximum tokens per single request
- **tokens_per_minute**: Total tokens allowed per minute
- **bucket_size**: Maximum token burst capacity
- **requests_per_minute**: Maximum number of requests per minute

## Monitoring Rate Limits

The gateway includes rate limit information in response headers:

### Request-Based Headers
```
X-RateLimit-Limit-Minute: 60
X-RateLimit-Remaining-Minute: 59
X-RateLimit-Reset-Minute: 52
```

### Token-Based Headers
```
X-RateLimit-Limit-Tokens: 1000
X-RateLimit-Remaining-Tokens: 900
X-RateLimit-Reset-Tokens: 45
X-Tokens-Consumed: 100
```

## Rate Limit Response

When a rate limit is exceeded, you'll receive a 429 (Too Many Requests) response:

```json
{
  "error": "Rate limit exceeded",
  "retry_after": 60
}
```

## Best Practices

1. **Layered Rate Limiting**
   - Use both request and token limits for AI endpoints
   - Configure global, IP, and user-based limits

2. **Window Sizing**
   - Use shorter windows (1m) for precise control
   - Use longer windows (1h) for overall quotas

3. **Monitoring**
   - Watch rate limit headers to track usage
   - Implement client-side rate limiting

## Next Steps

After configuring rate limiting:

1. [Configure Load Balancing](./load-balancing.md) for high availability
