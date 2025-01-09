---
sidebar_position: 8
title: Rate Limiting
---

# Rate Limiting

Rate limiting helps protect your AI models from overuse and ensures fair resource distribution among consumers.

## Enable Rate Limiting

Enable the rate limiting plugin globally or for specific services:

```bash
# Enable globally
curl -X POST http://localhost:8001/plugins \
  --data name=rate-limiting \
  --data config.minute=60 \
  --data config.hour=1000

# Enable for a specific service
curl -X POST http://localhost:8001/services/openai-service/plugins \
  --data name=rate-limiting \
  --data config.minute=30 \
  --data config.hour=500
```

## Advanced Configuration

Configure rate limits based on different criteria:

```bash
# Rate limit by consumer
curl -X POST http://localhost:8001/plugins \
  --data name=rate-limiting \
  --data config.minute=100 \
  --data config.limit_by=consumer

# Rate limit by IP address
curl -X POST http://localhost:8001/plugins \
  --data name=rate-limiting \
  --data config.minute=50 \
  --data config.limit_by=ip

# Rate limit with multiple windows
curl -X POST http://localhost:8001/plugins \
  --data name=rate-limiting \
  --data config.second=10 \
  --data config.minute=500 \
  --data config.hour=5000
```

## Token-Based Rate Limiting

For AI models, you can limit based on token usage:

```bash
# Limit tokens per minute
curl -X POST http://localhost:8001/plugins \
  --data name=ai-rate-limiting \
  --data config.tokens_per_minute=100000

# Limit tokens per hour with burst capacity
curl -X POST http://localhost:8001/plugins \
  --data name=ai-rate-limiting \
  --data config.tokens_per_hour=1000000 \
  --data config.burst_multiplier=1.5
```

## Monitoring Rate Limits

Check current rate limit status:

```bash
# Get rate limit headers in response
curl -i http://localhost:8000/v1/chat/completions \
  -H "apikey: your-key-here"

# Response headers include:
# X-RateLimit-Limit-Minute
# X-RateLimit-Remaining-Minute
# X-RateLimit-Reset
```

## Next Steps

After configuring rate limiting:

1. [Set up Proxy Caching](./proxy-caching.md) to improve response times
2. [Configure Authentication](./key-authentication.md) for secure access
3. [Add Load Balancing](./load-balancing.md) for high availability
