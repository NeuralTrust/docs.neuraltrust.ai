---
sidebar_position: 4
---

# Consumer Groups (Enterprise Edition)

Consumer Groups are an enterprise feature that allows you to organize and manage API consumers with shared configurations and rate limits.

## Overview

Each consumer group can have its own:
- Plugin configurations
- Rate limits
- API key management
- Access controls

## Key Features

- **Group-Level Plugin Configuration**: Apply plugins specifically to group members
- **API Key Management**: Generate and manage API keys for group members
- **Advanced Rate Limiting**: Set rate limits per group, per IP, and per user

## Implementation

### Creating a Consumer Group

```bash
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/consumer-groups" \
-H "Content-Type: application/json" \
-d '{
  "name": "Premium Users",
  "required_plugins": [
    {
      "name": "advanced_rate_limiter",
      "enabled": true,
      "stage": "pre_request",
      "priority": 1,
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
  ]
}'
```

### Managing API Keys

```bash
# Generate an API Key
curl -X POST "http://localhost:8080/api/v1/gateways/{gateway_id}/consumer-groups/{group_id}/keys" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "user123"
  }'

# Use the API Key
curl "http://api.example.com/endpoint" \
  -H "Authorization: Bearer {api_key}"
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/v1/gateways/:gateway_id/consumer-groups` | Create a new consumer group |
| GET    | `/api/v1/gateways/:gateway_id/consumer-groups` | List all consumer groups |
| GET    | `/api/v1/gateways/:gateway_id/consumer-groups/:group_id` | Get a specific consumer group |
| PUT    | `/api/v1/gateways/:gateway_id/consumer-groups/:group_id` | Update a consumer group |
| DELETE | `/api/v1/gateways/:gateway_id/consumer-groups/:group_id` | Delete a consumer group |
| POST   | `/api/v1/gateways/:gateway_id/consumer-groups/:group_id/keys` | Create an API key |
| GET    | `/api/v1/gateways/:gateway_id/consumer-groups/:group_id/keys` | List API keys |
| DELETE | `/api/v1/gateways/:gateway_id/consumer-groups/:group_id/keys/:key_id` | Delete an API key |

## Advanced Configuration

### Advanced Rate Limiter Plugin

```json
{
  "name": "advanced_rate_limiter",
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

## Best Practices

1. **Hierarchical Rate Limiting**: Configure gateway-level rate limits for basic protection and consumer group limits for fine-grained control
2. **API Key Management**: Regularly rotate API keys and set appropriate expiration times
3. **Monitoring**: Use the logging features to monitor group usage and adjust limits accordingly

