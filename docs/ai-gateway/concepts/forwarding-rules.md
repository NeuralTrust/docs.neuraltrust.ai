---
sidebar_position: 1
---

# Forwarding Rules

Forwarding rules are a core feature of the AI Gateway that define how incoming requests are routed to various AI providers.

## Overview

Each forwarding rule specifies:
- Path matching patterns
- Target endpoints
- HTTP methods
- Header configurations
- Plugin chains
- Load balancing settings

## Rule Structure

```json
{
  "id": "uuid",
  "gateway_id": "gateway-uuid",
  "path": "/v1/chat/completions",
  "targets": [
    {"url": "https://api.openai.com"}
  ],
  "methods": ["POST"],
  "headers": {},
  "strip_path": false,
  "preserve_host": false,
  "retry_attempts": 0,
  "plugin_chain": [],
  "active": true,
  "public": false
}
```

## Automatic Rule Generation

For gateways of type "models", the system automatically generates appropriate forwarding rules based on the configured provider:

### OpenAI Provider
```json
{
  "path": "/v1/chat/completions",
  "targets": [{"url": "https://api.openai.com"}],
  "methods": ["POST"]
},
{
  "path": "/v1/completions",
  "targets": [{"url": "https://api.openai.com"}],
  "methods": ["POST"]
},
{
  "path": "/v1/embeddings",
  "targets": [{"url": "https://api.openai.com"}],
  "methods": ["POST"]
}
```

### Anthropic Provider
```json
{
  "path": "/v1/complete",
  "targets": [{"url": "https://api.anthropic.com"}],
  "methods": ["POST"]
},
{
  "path": "/v1/messages",
  "targets": [{"url": "https://api.anthropic.com"}],
  "methods": ["POST"]
}
```

## Custom Rules

Create custom rules for specialized routing needs:

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/custom/endpoint",
    "targets": [
      {
        "url": "https://primary-api.example.com",
        "weight": 80
      },
      {
        "url": "https://backup-api.example.com",
        "weight": 20
      }
    ],
    "methods": ["GET", "POST"],
    "headers": {
      "X-Custom-Header": "value"
    },
    "strip_path": true,
    "retry_attempts": 3,
    "plugin_chain": [
      {
        "name": "rate_limiter",
        "enabled": true,
        "priority": 1,
        "settings": {
          "limit": 100,
          "window": "1m"
        }
      }
    ]
  }'
```

## Configuration Options

### Path Matching
- Exact matches: `/v1/chat/completions`
- Wildcards: `/api/*`
- Parameters: `/users/:id`

### Target Configuration
- Single endpoint
- Multiple endpoints with weights
- Load balancing options
- Health checks

### HTTP Methods
- Supported: GET, POST, PUT, DELETE, PATCH
- Method-specific configurations
- Method restrictions

### Header Management
- Required headers
- Header transformations
- Header preservation

### Retry Policy
```json
{
  "retry_attempts": 3,
  "retry_interval": "1s",
  "retry_on": [500, 502, 503, 504]
}
```

## Best Practices

1. **Path Design**
   - Use clear, hierarchical paths
   - Consider versioning
   - Plan for future endpoints

2. **Security**
   - Limit exposed methods
   - Configure appropriate headers
   - Use HTTPS for targets

3. **Performance**
   - Enable path stripping when needed
   - Configure proper retry policies
   - Use load balancing for high availability

4. **Monitoring**
   - Track rule usage
   - Monitor target health
   - Set up alerts for failures

