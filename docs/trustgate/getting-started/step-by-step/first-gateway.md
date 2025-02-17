---
sidebar_position: 4
title: Create Your First Gateway
---

# Create Your First Gateway

After installing AI Gateway, the next step is to create your first gateway instance. This guide will walk you through creating and configuring a basic gateway.

## Gateway Overview

A gateway is the core entity in AI Gateway that:
- Handles incoming requests
- Manages plugins
- Controls routing
- Provides monitoring

## Create a Gateway

Use the Admin API to create your first gateway:

```bash
# Create a gateway
curl -X POST http://localhost:8080/api/v1/gateways \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-first-gateway",
    "subdomain": "api",
    "required_plugins": [
        {
            "name": "rate_limiter",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "limits": {
                    "global": {
                        "limit": 15,
                        "window": "1m"
                    },
                    "per_ip": {
                        "limit": 5,
                        "window": "1m"
                    },
                    "per_user": {
                        "limit": 5,
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

### Verify Gateway Creation

Check if your gateway was created successfully:

```bash
# Get gateway details
curl http://localhost:8080/api/v1/gateways/{gateway-id}

# List all gateways
curl http://localhost:8080/api/v1/gateways
```

## Gateway Configuration

### Basic Settings

Key configuration options:

1. **Name and Subdomain**
   ```json
   {
     "name": "my-first-gateway",
     "subdomain": "api"
   }
   ```

2. **Required Plugins**
   The `required_plugins` array defines plugins that are automatically executed for all requests passing through the gateway. These plugins are essential for implementing gateway-wide policies and controls.

   **Key Aspects of Required Plugins:**
   - **Global Execution**: Required plugins run for every request, regardless of the route or service
   - **Execution Order**: Plugins are executed in order of their priority (lower numbers execute first)
   
   **Example Configuration:**
   ```json
   {
     "required_plugins": [
       {
          "name": "rate_limiter",
          "enabled": true,
          "stage": "pre_request",  // Executes before request processing
          "priority": 1,           // Lower number = higher priority
          "settings": {
              "limits": {
                  "global": {
                      "limit": 15,    // Maximum requests
                      "window": "1m"  // Time window (1 minute)
                  },
                  "per_ip": {         // IP-based limiting
                      "limit": 5,
                      "window": "1m"
                  },
                  "per_user": {       // User-based limiting
                      "limit": 5,
                      "window": "1m"
                  }
              },
              "actions": {
                  "type": "reject",        // Action when limit exceeded
                  "retry_after": "60"      // Retry delay in seconds
              }
          }
        }
     ]
   }
   ```

   **Common Use Cases:**
   - Rate Limiting: Control request volumes
   - Authentication: Verify request credentials
   - Logging: Track all gateway traffic
   - Monitoring: Collect metrics for all requests
   - Security: Apply security policies uniformly

## Test Your Gateway

### Create an API Key

```bash
# Create a test API key
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/keys \
  -H "Content-Type: application/json" \
  -d '{
    "name": "test-key",
    "expires_at": "2027-12-31T23:59:59Z"
  }'
```

## Best Practices

1. **Naming Conventions**
   - Use descriptive gateway names
   - Keep subdomains simple

2. **Plugin Configuration**
   - Start with essential plugins
   - Configure reasonable limits

3. **Security**
   - Enable authentication
   - Set up rate limiting

## Next Steps

Now that your gateway is running, you can:

1. [Configure an Upstream](./configure-upstream.md)

## Additional Resources
- [Gateway Concepts](../../concepts/gateway.md)
- [Plugin System](../../concepts/plugins.md)
- [Rate Limiting](./rate-limiting.md) 