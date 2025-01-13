---
sidebar_position: 5
title: Configure an Upstream
---

# Configure an Upstream

This guide will walk you through configuring your first upstream in AI Gateway. An upstream defines how requests are distributed across multiple AI providers and models.

## Prerequisites

Before you begin, make sure you have:
- AI Gateway installed and running
- Access to the Admin API
- API keys for your AI providers (e.g., OpenAI, Anthropic)

## Step 1: Plan Your Upstream

Decide on your upstream configuration:
1. Choose which AI providers you want to use
2. Identify the models for each provider
3. Determine load balancing weights
4. Plan your routing strategy

## Step 2: Create the Upstream

Create an upstream with multiple AI providers:

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/upstreams \
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
        "default_model": "gpt-4o-mini",
        "models": ["gpt-3.5-turbo", "gpt-4", "gpt-4o-mini"],
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
        "default_model": "claude-3-5-sonnet-20241022",
        "models": ["claude-3-5-sonnet-20241022"],
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

### Understanding the Configuration

1. **Provider Configuration**
   - `path`: The endpoint path for the provider
   - `provider`: The AI provider name
   - `weight`: Load balancing weight (1-100)
   - `priority`: Failover priority (lower numbers = higher priority)
   - `default_model`: Default model to use when none specified
   - `models`: List of supported models for this provider

2. **Load Balancing Strategy**
   - `algorithm`: Determines how requests are distributed
     - `round-robin`: Rotates through providers sequentially
     - `weighted`: Uses provider weights to distribute traffic
   - `weight`: Higher weights receive proportionally more traffic
     - Example: weight 50/50 splits traffic equally
     - Example: weight 70/30 sends 70% to first provider
   - Multiple providers can serve the same model type
     - Requests for "gpt-4" could go to either provider
     - Helps with redundancy and cost optimization

3. **Fallback Strategy**
   - `priority`: Controls the failover sequence
     - Priority 1 providers are tried first
     - Higher numbers are used as backups
   - Health checks determine availability
     - Unhealthy providers are skipped
     - Traffic automatically routes to healthy providers
   - Model availability affects routing
     - If requested model isn't available, tries next provider
     - Falls back to provider's default model if specified

4. **Authentication**
   - `credentials`: Provider API keys
   - `headers`: Additional required headers

5. **Health Checking**
   - `passive`: Enable passive health checks
   - `threshold`: Number of failures before marking unhealthy
   - `interval`: Time between health checks in seconds
   - Affects both load balancing and failover
     - Unhealthy providers are removed from rotation
     - Automatically restored when health returns

## Step 3: Verify Configuration

Check that your upstream is properly configured:

```bash
curl http://localhost:8080/api/v1/gateways/{gateway-id}/upstreams/{upstream-id}
```


## Next Steps

Now that you have configured your upstream:
- [Configure a Service](./add-service.md) to use this upstream

## Additional Resources

- [Gateway Concepts](../concepts/gateway.md)
- [Plugin System](../concepts/plugins.md)
- [Rate Limiting](./rate-limiting.md) 

## Troubleshooting

Common issues and solutions:

1. **Provider Issues**
   - Verify API keys are valid
   - Check provider endpoints
   - Confirm model availability
