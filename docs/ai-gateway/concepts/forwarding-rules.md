---
sidebar_position: 1
---

# Forwarding Rules

Forwarding rules are a core feature of the AI Gateway that define how incoming requests are routed to various AI providers. Each rule is uniquely identified by a UUID and contains essential routing configuration including path patterns, HTTP methods, headers, and plugin chains.



## Rule Structure
The rule structure defines how requests are matched and routed through the AI Gateway. Let's examine each field in detail:

### Core Fields
- `id`: A unique UUID identifying the forwarding rule
- `gateway_id`: References the gateway this rule belongs to
- `path`: The URL path pattern to match incoming requests (e.g., `/v1/chat/completions`)
- `targets`: Array of destination endpoints where requests will be forwarded
  - `url`: The base URL of the target API endpoint
- `methods`: Array of allowed HTTP methods for this rule

### Behavior Controls  
- `strip_path`: When true, removes the matched path prefix before forwarding
- `preserve_host`: When true, keeps the original Host header instead of rewriting it
- `retry_attempts`: Number of times to retry failed requests
- `active`: Enables/disables the rule without deletion
- `public`: Controls whether the rule is accessible without authentication

### Advanced Configuration
- `headers`: Custom header modifications for forwarded requests
- `plugin_chain`: Ordered list of plugins to process requests/responses

This structure allows for flexible routing configurations while maintaining security and reliability. Rules can be as simple as basic forwarding or complex with multiple plugins and header transformations.

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
When using OpenAI as a provider, the AI Gateway automatically generates forwarding rules for their core API endpoints. These rules cover the essential OpenAI endpoints including chat completions, text completions, and embeddings:

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
For Anthropic provider configurations, the AI Gateway creates default forwarding rules that map to Anthropic's primary API services. The generated rules enable access to Anthropic's core functionalities, including their messages API for Claude interactions and their completions endpoint:


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

Create custom rules for specialized routing needs by using the rules API endpoint. Custom rules allow you to define granular routing behaviors including:

- Multiple target endpoints with weighted load balancing
- Custom header modifications and path stripping
- Retry policies for failed requests
- Integration with the plugin system for additional functionality

Here's how to create a custom rule:

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

