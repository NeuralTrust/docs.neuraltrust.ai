---
sidebar_position: 3
---

# Open AI Token-Based Rate Limiting

This guide demonstrates how to implement token-based rate limiting in TrustGate to effectively manage AI model usage and costs. Unlike traditional request-based rate limiting, token-based rate limiting considers the actual token consumption of each request, providing more granular control over API usage.

## Prerequisites

- TrustGate installed and running
- Access to an AI provider (e.g., OpenAI) API key
- Basic understanding of rate limiting concepts

## Step 1: Create a Gateway with Token Rate Limiter

First, create a gateway with the token rate limiter plugin enabled:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "OpenAI Token Rate Limiter",
    "subdomain": "your-subdomain",
    "required_plugins": [
      {
        "name": "token_rate_limiter",
        "enabled": true,
        "settings": {
          "tokens_per_request": 20,     # Maximum tokens per single request
          "tokens_per_minute": 100,     # Token budget per minute
          "bucket_size": 1000,          # Maximum token bucket capacity
          "requests_per_minute": 60     # Maximum requests per minute
        }
      }
    ]
  }'
```

### Configuration Parameters

- **tokens_per_request**: Maximum number of tokens allowed in a single request
- **tokens_per_minute**: Total token budget allocated per minute
- **bucket_size**: Maximum capacity of the token bucket
- **requests_per_minute**: Maximum number of requests allowed per minute

## Step 2: Configure an Upstream

Set up an upstream that connects to your AI provider:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/upstreams" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ai-upstream",
    "algorithm": "round-robin",
    "targets": [{
      "path": "/v1/chat/completions",
      "provider": "openai",
      "weight": 100,
      "models": ["gpt-3.5-turbo", "gpt-4"],
      "default_model": "gpt-3.5-turbo",
      "credentials": {
        "header_name": "Authorization",
        "header_value": "Bearer your-api-key"
      }
    }]
  }'
```

## Step 3: Create a Service

Create a service that uses the upstream:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/services" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ai-service",
    "type": "upstream",
    "description": "AI API Service",
    "upstream_id": "{upstream_id}",
    "retries": 3
  }'
```

## Step 4: Add a Rule

Configure a rule to route requests to your service:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/rules" \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/v1",
    "service_id": "{service_id}",
    "methods": ["POST"],
    "strip_path": false,
    "active": true
  }'
```

## Step 5: Generate an API Key

Create an API key for authentication:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/keys" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "test-key",
    "expires_at": "2024-12-31T23:59:59Z"
  }'
```

## Using the Rate-Limited API

When making requests to your rate-limited API, you'll receive headers indicating your current rate limit status:

```bash
curl -X POST "http://localhost:8081/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Host: your-subdomain.example.com" \
  -H "X-Api-Key: your-api-key" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ]
  }'
```

### Response Headers

The API returns several headers to help you track your rate limit status:

- **X-RateLimit-Limit-Tokens**: Total token budget per minute
- **X-RateLimit-Remaining-Tokens**: Remaining tokens in the current window
- **X-RateLimit-Reset-Tokens**: Time until token budget resets (in seconds)
- **X-RateLimit-Limit-Requests**: Maximum requests per minute
- **X-RateLimit-Remaining-Requests**: Remaining requests in the current window
- **X-RateLimit-Reset-Requests**: Time until request count resets (in seconds)
- **X-Tokens-Consumed**: Number of tokens consumed by the current request

## Best Practices

1. **Set Appropriate Limits**
   - Consider your AI model's pricing
   - Account for both input and output tokens
   - Leave headroom for burst traffic

2. **Monitor Usage**
   - Track token consumption patterns
   - Watch for rate limit errors
   - Adjust limits based on actual usage

3. **Handle Rate Limit Errors**
   - Implement exponential backoff
   - Queue requests when approaching limits
   - Provide clear feedback to users

4. **Optimize Token Usage**
   - Compress prompts where possible
   - Use efficient model configurations
   - Implement client-side token estimation

## Troubleshooting

If you encounter rate limit errors, check:

1. Current rate limit status using response headers
2. Token consumption patterns in your requests
3. Plugin configuration in the gateway
4. Time until rate limits reset

## Next Steps

- Implement monitoring for rate limit metrics
- Set up alerts for high token usage
- Configure multiple rate limit tiers
- Add fallback providers for high availability 