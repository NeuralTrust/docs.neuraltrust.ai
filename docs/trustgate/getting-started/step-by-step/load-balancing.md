---
sidebar_position: 7
title: Load Balancing
---

# Load Balancing

Load balancing helps distribute AI model requests across multiple instances for better performance and reliability. TrustGate supports multiple load balancing algorithms and health checking capabilities.

## Configure Load Balancing

### Create an Upstream with Round-Robin Strategy

```bash
# Create an upstream with round-robin load balancing
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

### Create an Upstream with Weighted Round-Robin

```bash
# Create an upstream with weighted distribution
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/upstreams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "weighted-upstream",
    "algorithm": "weighted-round-robin",
    "targets": [
      {
        "host": "api.openai.com",
        "port": 443,
        "protocol": "https",
        "weight": 60,    # 60% of traffic
        "priority": 1,
        "default_model": "gpt-4o-mini",
        "models": ["gpt-3.5-turbo", "gpt-4", "gpt-4o-mini"],
        "credentials": {
          "header_name": "Authorization",
          "header_value": "Bearer your-openai-key"
        }
      },
      {
        "host": "api.anthropic.com",
        "port": 443,
        "protocol": "https",
        "weight": 40,    # 40% of traffic
        "priority": 1,
        "default_model": "claude-3-5-sonnet-20241022",
        "models": ["claude-3-5-sonnet-20241022"],
        "credentials": {
          "header_name": "Authorization",
          "header_value": "Bearer your-anthropic-key"
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

## Create a Service Using the Upstream

```bash
# Create a service that uses the load-balanced upstream
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/services \
  -H "Content-Type: application/json" \
  -d '{
    "name": "load-balanced-service",
    "type": "upstream",
    "description": "Load balanced AI service",
    "upstream_id": "{upstream-id}"
  }'
```

## Configure Routing Rules

```bash
# Create a rule to route traffic to the load-balanced service
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/ai",
    "service_id": "{service-id}",
    "methods": ["POST"],
    "strip_path": true,
    "active": true
  }'
```

## Load Balancing Features

### Supported Algorithms

- **Round Robin**: Distributes requests evenly across all targets
- **Weighted Round Robin**: Distributes traffic based on target weights
- **Least Connections**: Selects the target with the fewest active connections
- **Random**: Selects a target randomly

### Health Checks

TrustGate supports passive health checking:

```json
"health_checks": {
  "passive": true,      // Enable passive health checks
  "threshold": 3,       // Number of failures before marking target as unhealthy
  "interval": 60        // Check interval in seconds
}
```

### Target Configuration

Each target can be configured with:

- **Weight**: Determines traffic distribution (1-100)
- **Priority**: Determines target selection order (lower numbers = higher priority)
- **Protocol**: Supports HTTP/HTTPS
- **Host/Port**: Target service endpoint
- **Path**: Target service path

### Payload Transformation

When using multiple AI providers in an upstream, you need to include fields that cover all providers in your request. The gateway will automatically transform the request for the selected provider.

For example, when load balancing between OpenAI and Anthropic:

```json
{
  "model": "gpt-4",                    // OpenAI model
  "messages": [                        // OpenAI format
    {
      "role": "user",
      "content": "Hello!"
    }
  ],
  "max_tokens": 1000,                  // Common field
  "system": "You are an assistant",    // Anthropic system prompt
  "temperature": 0.7                   // Common field
}
```

The gateway will:
1. Select a target based on the load balancing algorithm
2. Transform the request to match the selected provider's format
3. Remove unnecessary fields for that provider
4. Add any required provider-specific headers

You don't need to handle the transformation yourself - just include all necessary fields in your request, and the gateway will handle the rest based on the provider schemas.

For streaming requests, add `"stream": true` to enable streaming for all providers.

### Priority-Based Fallback

Targets can be assigned different priorities to create fallback chains:

```json
{
  "targets": [
    {
      "host": "api.openai.com",
      "priority": 1,     // Primary target
      "weight": 100
    },
    {
      "host": "api.anthropic.com",
      "priority": 2,     // Fallback target
      "weight": 100
    }
  ]
}
```

When a higher priority target fails:
1. The request automatically fails over to the next priority level
2. Load balancing continues among targets of the same priority
3. Health checks determine when to return to higher priority targets

## Best Practices

1. **Health Checking**
   - Enable passive health checks for automatic failure detection
   - Set appropriate threshold values based on your requirements

2. **Load Distribution**
   - Use weighted distribution for heterogeneous targets
   - Consider target capacity when setting weights

3. **Monitoring**
   - Regularly monitor target health status
   - Review traffic distribution patterns

## Next Steps

After configuring load balancing:

1. [Configure Rate Limiting](./rate-limiting.md) to protect your services