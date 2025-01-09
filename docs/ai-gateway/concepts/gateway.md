---
sidebar_position: 1
title: Gateway
---

# Gateway

A gateway in AI Gateway is a logical grouping of configurations that defines how API traffic should be managed, secured, and routed. Each gateway is identified by a unique subdomain and can be configured with its own set of plugins, services, and routing rules.

## Core Components

### 1. Gateway Configuration
A gateway consists of:
- **Name**: A descriptive identifier for the gateway
- **Subdomain**: A unique subdomain for accessing the gateway
- **Status**: The current state of the gateway (e.g., active)
- **Required Plugins**: A chain of plugins that process requests

### 2. Plugin Chain
Plugins are executed in order based on their configuration:
```json
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
            }
        }
    }
}
```

### 3. API Keys
- Secure access control per gateway
- Configurable expiration
- Usage tracking and management

### 4. Upstreams
- Define backend service locations
- Support for multiple targets
- Health checking capabilities
- Load balancing configuration

### 5. Services
- Link to upstream configurations
- Service type definition
- Description and metadata
- Traffic management settings

### 6. Rules
- Path-based routing
- HTTP method filtering
- Path stripping options
- Service mapping

## Gateway Flow

1. **Request Reception**
   - Request arrives at the gateway subdomain
   - API key validation
   - Plugin chain execution

2. **Traffic Processing**
   - Rule matching
   - Service resolution
   - Upstream selection

3. **Request Forwarding**
   - Plugin transformations
   - Load balancing
   - Backend routing

## Example Configuration

```json
{
    "name": "AI Service Gateway",
    "subdomain": "ai-service",
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
                    }
                }
            }
        }
    ]
}
```

## Best Practices

1. **Plugin Configuration**
   - Order plugins by priority
   - Configure appropriate rate limits
   - Enable necessary security plugins
   - Use staging for plugin execution

2. **Service Management**
   - Group related services
   - Configure proper health checks
   - Set appropriate timeouts
   - Use descriptive naming

3. **Rule Organization**
   - Use specific path patterns
   - Configure proper method restrictions
   - Consider path stripping needs
   - Maintain rule priority

4. **Security**
   - Rotate API keys regularly
   - Monitor usage patterns
   - Configure appropriate rate limits
   - Enable request validation

## Next Steps

- [Services](./services.md)
- [Upstreams](./upstreams.md)
- [Rules](./rules.md)
- [Plugins](./plugins.md)