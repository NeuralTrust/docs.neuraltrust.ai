---
title: Balancing AI Providers
sidebar_position: 4
---

# Load Balancing Between AI Providers

This guide demonstrates how to set up load balancing between multiple AI providers in TrustGate. By distributing traffic across different providers, you can improve reliability, optimize costs, and ensure high availability for your AI applications.

## Prerequisites

- TrustGate installed and running
- API keys for multiple providers (e.g., OpenAI and Anthropic)
- Basic understanding of load balancing concepts

## Step 1: Create a Gateway

First, create a gateway that will handle the load balancing:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "multi-provider-gateway",
    "subdomain": "your-subdomain"
  }'
```

## Step 2: Configure Multi-Provider Upstream

Set up an upstream that includes multiple AI providers. This example demonstrates load balancing between OpenAI and Anthropic:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/upstreams" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ai-providers-upstream",
    "algorithm": "round-robin",
    "targets": [
      {
        "path": "/v1/chat/completions",
        "provider": "openai",
        "weight": 50,
        "priority": 1,
        "default_model": "gpt-4",
        "models": ["gpt-3.5-turbo", "gpt-4"],
        "credentials": {
          "header_name": "Authorization",
          "header_value": "Bearer your-openai-key"
        }
      },
      {
        "path": "/v1/messages",
        "provider": "anthropic",
        "weight": 50,
        "priority": 1,
        "default_model": "claude-3-sonnet",
        "models": ["claude-3-sonnet"],
        "headers": {
          "anthropic-version": "2023-06-01"
        },
        "credentials": {
          "header_name": "x-api-key",
          "header_value": "your-anthropic-key"
        }
      }
    ],
    "health_checks": {
      "passive": true,
      "threshold": 3,
      "interval": 60
    }
  }'
```

### Configuration Parameters

- **algorithm**: Load balancing algorithm (e.g., round-robin)
- **weight**: Relative traffic distribution weight for each target
- **priority**: Failover priority (lower numbers have higher priority)
- **path**: Provider-specific API endpoint path
- **provider**: AI provider identifier
- **models**: List of supported models for each provider
- **default_model**: Default model when none is specified
- **headers**: Provider-specific headers
- **credentials**: Authentication credentials for each provider

## Step 3: Create a Service

Create a service that uses the multi-provider upstream:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/services" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ai-chat-service",
    "description": "Load balanced AI chat completion service",
    "upstream_id": "{upstream_id}",
    "type": "upstream",
    "tags": ["ai", "chat"]
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
    "expires_at": "2026-01-01T00:00:00Z"
  }'
```

## Using the Load Balanced API

When making requests to your load-balanced API, TrustGate automatically handles provider selection and request transformation:

```bash
curl -X POST "http://localhost:8081/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Host: your-subdomain.example.com" \
  -H "X-Api-Key: your-api-key" \
  -d '{
    "model": "gpt-4",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ],
    "max_tokens": 1020,
    "system": "You are an assistant",
    "stream": true
  }'
```

:::info

When using multiple providers in an upstream, you need to include fields that cover all providers in your request. The gateway will automatically transform the request for the selected provider.

For example, when load balancing between OpenAI and Anthropic:

```json
{
  "model": "gpt-4",
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ],
  "max_tokens": 1020,
  "system": "You are an assistant"
}
```

```text
The fields in this request serve different purposes:
- `model` and `messages`: OpenAI format
- `system`: Anthropic system prompt
- `max_tokens`: Common field for both providers

The gateway will:
1. Select a target based on the load balancing algorithm
2. Transform the request to match the selected provider's format
3. Remove unnecessary fields for that provider
4. Add any required provider-specific headers
5. Use the default model for the selected provider if different from the request

You don't need to handle the transformation yourself - just include all necessary fields in your request, and the gateway will handle the rest based on the provider schemas.

For streaming requests, add `"stream": true` to enable streaming for all providers.

```
:::

### Response Headers

The API returns headers indicating which provider was selected:

- **X-Selected-Provider**: The provider that handled the request

## Load Balancing Features

1. **Weighted Distribution**
   - Configure traffic distribution using weights
   - Adjust weights based on provider costs or performance

2. **Failover Support**
   - Set priority levels for providers
   - Automatic failover when primary provider fails
   - Health checks for provider availability

3. **Request Transformation**
   - Automatic conversion between provider formats
   - Model name mapping
   - Request/response adaptation

4. **Health Monitoring**
   - Passive health checks
   - Configurable failure thresholds
   - Automatic provider recovery

## Best Practices

1. **Provider Selection**
   - Choose complementary providers
   - Consider provider strengths and pricing
   - Match models across providers

2. **Load Distribution**
   - Balance cost vs. performance
   - Monitor provider quotas
   - Adjust weights based on usage patterns

3. **Error Handling**
   - Implement proper fallback logic
   - Monitor provider errors
   - Set appropriate timeouts

4. **Request Design**
   - Use provider-agnostic request format
   - Include all required fields for both providers
   - Handle provider-specific features gracefully

## Troubleshooting

If you encounter issues:

1. Check provider selection headers
2. Verify provider health status
3. Review load balancing configuration
4. Monitor provider error responses

## Next Steps

- Set up monitoring for provider metrics
- Configure provider-specific rate limits
- Implement cost optimization strategies
- Add more providers for redundancy 