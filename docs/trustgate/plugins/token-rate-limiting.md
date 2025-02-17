---
sidebar_position: 3
title: Token Rate Limiting
---

# Token Rate Limiting

TrustGate implements a token bucket-based rate limiting system specifically designed for AI model interactions. This system manages both the number of requests and the token usage per API key.

## Overview

The token rate limiter operates on two dimensions:
1. **Token Usage**: Controls the total number of tokens consumed
2. **Request Count**: Limits the number of requests per minute

## Configuration

```json
{
  "required_plugins": [
    {
      "name": "token_rate_limiter",
      "enabled": true,
      "settings": {
        "tokens_per_request": 1000,    // Default tokens reserved per request
        "tokens_per_minute": 10000,    // Token replenishment rate
        "bucket_size": 50000,         // Maximum token capacity
        "requests_per_minute": 60     // Maximum requests per minute
      }
    }
  ]
}
```

### Configuration Parameters

- **tokens_per_request**: Default number of tokens reserved for each request when actual usage cannot be determined
- **tokens_per_minute**: Rate at which tokens are replenished (per minute)
- **bucket_size**: Maximum number of tokens that can be accumulated
- **requests_per_minute**: Maximum number of requests allowed per minute

## How It Works

### Token Bucket Algorithm

1. **Pre-Request Phase**:
   - Checks if enough tokens are available in the bucket
   - Reserves tokens for the request
   - Verifies request count limits
   - For streaming requests, deducts tokens immediately

2. **Post-Response Phase**:
   - Calculates actual token usage from the response
   - Updates the bucket with actual consumption
   - Updates request counts
   - Adds rate limit headers to the response

### Token Replenishment

- Tokens are replenished automatically based on the `tokens_per_minute` rate
- Replenishment occurs when checking the bucket state
- Maximum tokens cannot exceed the `bucket_size`
- Request counts reset every minute

## Response Headers

The plugin adds the following headers to track usage:

```
X-Ratelimit-Limit-Tokens: [maximum tokens]
X-Ratelimit-Remaining-Tokens: [tokens remaining]
X-Ratelimit-Reset-Tokens: [seconds until next refill]
X-Ratelimit-Limit-Requests: [maximum requests per minute]
X-Ratelimit-Remaining-Requests: [requests remaining]
X-Ratelimit-Reset-Requests: [seconds until request count reset]
X-Tokens-Consumed: [tokens used in this request]
```

## Rate Limit Response

When limits are exceeded, the plugin returns a 429 status code with details:

```json
{
  "error": "Rate limit exceeded. Not enough tokens available. Required: 1000, Current: 500",
  "retry_after": "30s"
}
```

## Streaming Support

The plugin provides special handling for streaming requests:
- Tokens are reserved and deducted immediately at request time
- Token usage is tracked throughout the stream
- Final token consumption is calculated from the accumulated usage

## Implementation Details

### Storage

- Uses Redis for persistent storage
- Bucket state includes:
  - Current token count
  - Remaining requests
  - Last refill timestamp
- 24-hour TTL on bucket data
- Thread-safe operations with mutex locks

### Key Format

```
token_bucket:{plugin_id}:{api_key}
```

## Best Practices

1. **Token Configuration**
   - Set `tokens_per_request` based on average request size
   - Configure `bucket_size` to handle burst traffic
   - Adjust `tokens_per_minute` based on subscription tiers

2. **Request Limits**
   - Set `requests_per_minute` to prevent rapid small requests
   - Consider both token and request limits for complete protection

3. **Monitoring**
   - Track token consumption patterns using response headers
   - Monitor rate limit responses for capacity planning
   - Implement exponential backoff in clients

## Example Usage

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id} \
  -H "Content-Type: application/json" \
  -d '{
    "required_plugins": [
      {
        "name": "token_rate_limiter",
        "enabled": true,
        "settings": {
          "tokens_per_request": 1000,
          "tokens_per_minute": 10000,
          "bucket_size": 50000,
          "requests_per_minute": 60
        }
      }
    ]
  }'
```
