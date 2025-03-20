---
sidebar_position: 8
title: Rate Limiting
---

# Rate Limiting

TrustGate provides two complementary rate limiting mechanisms: request-based and token-based rate limiting. These systems work together to protect your AI models and ensure fair resource distribution.

## Request-Based Rate Limiting

The request-based rate limiter implements a sliding window algorithm using Redis for distributed rate limiting. It supports multiple limit types that can be applied simultaneously.

### Limit Types

1. **Per IP Limiting (`per_ip`)**
   - Tracks requests by client IP address
   - Supports multiple IP headers for proxy environments:
     - `X-Real-IP`
     - `X-Forwarded-For`
     - `X-Original-Forwarded-For`
     - `True-Client-IP`
     - `CF-Connecting-IP`

2. **Per User Limiting (`per_user`)**
   - Tracks requests by user identifier
   - Supported user ID headers:
     - `X-User-ID`
     - `X-User-Id`
     - `X-UserID`
     - `User-ID`
   - Falls back to "anonymous" if no user ID found

3. **Global Limiting (`global`)**
   - Applies across all users
   - Controls total gateway throughput

### Configuration Example

```json
{
  "name": "rate_limiter",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "limits": {
      "global": {
        "limit": 1000,
        "window": "1m"
      },
      "per_ip": {
        "limit": 100,
        "window": "1m"
      },
      "per_user": {
        "limit": 50,
        "window": "1m"
      }
    },
    "actions": {
      "type": "reject",
      "retry_after": "60"
    }
  }
}
```

### Window Configuration
- Uses sliding window algorithm
- Supports time units: `s` (seconds), `m` (minutes), `h` (hours)
- Example durations:
  - `"1m"`: One minute window
  - `"1h"`: One hour window
  - `"24h"`: One day window

### Limit Processing Order
The rate limiter checks limits in the following order:
1. Per IP limits
2. Per User limits
3. Global limits

If any limit is exceeded, the request is rejected immediately.

## Token-Based Rate Limiting

Token-based rate limiting is specifically designed for AI model interactions, controlling the number of tokens consumed rather than just request counts.

### Configuration Example

```json
{
  "name": "token_rate_limiter",
  "enabled": true,
  "settings": {
    "tokens_per_request": 1000,    // Maximum tokens per request
    "tokens_per_minute": 10000,    // Token replenishment rate
    "bucket_size": 50000,         // Maximum token capacity
    "requests_per_minute": 60     // Request count limit
  }
}
```

### Token Bucket Algorithm
The token bucket algorithm provides smooth rate limiting for AI model interactions. Think of it as a bucket that:
- Has a maximum capacity (`bucket_size`)
- Fills at a constant rate (`tokens_per_minute`)
- Drains tokens as requests are processed

#### How It Works

1. **Token Accumulation**
   - Tokens are added to the bucket at a constant rate (`tokens_per_minute`)
   - The bucket can hold up to `bucket_size` tokens
   - If the bucket is full, new tokens are discarded

2. **Request Processing**
   - Each request consumes a number of tokens
   - The actual consumption is based on the request size
   - If insufficient tokens, request is rejected
   - Default consumption is `tokens_per_request` if actual usage can't be determined

3. **Burst Handling**
   - The bucket size allows for temporary bursts of traffic
   - Example: with settings:
     ```json
     {
       "tokens_per_minute": 10000,    // 10k tokens per minute
       "bucket_size": 50000,          // Can burst up to 50k tokens
       "tokens_per_request": 1000     // Each request needs 1k tokens
     }
     ```
   - Normal rate: 10 requests/minute (1k tokens each)
   - Burst capacity: Up to 50 requests if bucket is full

#### Visual Example
```
Bucket Capacity: 50,000 tokens
│
├─ Full Bucket (50,000 tokens)
│  └─ Can handle burst of 50 requests
│
├─ Normal Operation (10,000 tokens/minute)
│  ├─ Tokens added: 166/second
│  └─ Supports: 10 requests/minute
│
└─ Empty Bucket (0 tokens)
   └─ Must wait for token replenishment
```

#### Advantages
1. **Smooth Rate Limiting**
   - Natural traffic shaping
   - Prevents sharp cutoffs
   - Allows for burst handling

2. **Fair Resource Distribution**
   - Tokens correspond to actual resource usage
   - Large requests consume more tokens
   - Small requests consume fewer tokens

3. **Predictable Capacity**
   - Clear maximum burst size
   - Known replenishment rate
   - Easy capacity planning

4. **Flexible Configuration**
   - Adjustable bucket size for burst handling
   - Configurable replenishment rate
   - Custom tokens per request

## Response Headers

### Request Rate Limit Headers
```