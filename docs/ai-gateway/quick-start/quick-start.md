---
sidebar_position: 1
---

# Quick Start Guide

Get started with AI Gateway in minutes. This guide will help you set up and run your first AI Gateway instance.

## Prerequisites

- Go 1.21+
- Docker and Docker Compose

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ai-gateway/ai-gateway.git
    cd ai-gateway
    ```
2. There is a config.yaml file in the root of the repository. You can modify it to your needs.
    ```yaml
    server:
        admin_port: 8080
        proxy_port: 8081
        base_domain: example.com

    redis:
        host: localhost
        port: 6379
        password: ""
        db: 0

    database:
        host: localhost
        port: 5432
        user: postgres
        password: postgres
        dbname: ai_gateway
        ssl_mode: disable 
    ```
3. Start Redis:

    ```bash
    docker-compose up -d
    ```

4. Start the servers.

    ```bash
    ./scripts/run_local.sh
    ```

## Basic Configuration

### 1. Create a Gateway with Advanced Rate Limiting

```bash
curl -X POST http://localhost:8080/api/v1/gateways \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Multi Rate Limited Gateway",
    "subdomain": "multirate",
    "tier": "basic",
    "enabled_plugins": ["advanced_rate_limiter"],
    "required_plugins": [
        {
            "name": "advanced_rate_limiter",
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

### 2. Create an API Key

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/keys \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Key"
}'
```

### 3. Create Forwarding Rules with Load Balancing

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/api",
    "targets": [
      {
        "url": "https://api1.example.com",
        "weight": 70
      },
      {
        "url": "https://api2.example.com",
        "weight": 30
      }
    ],
    "methods": ["GET", "POST"],
    "strip_path": true
}'
```

## Using the Gateway

### Make Requests

Test different rate limit types:

```bash
# Test IP-based rate limit
curl -X GET "http://multirate.example.com:8081/api" \
  -H "Authorization: Bearer {api_key}" \
  -H "X-Real-IP: 192.168.1.1"

# Test user-based rate limit
curl -X GET "http://multirate.example.com:8081/api" \
  -H "Authorization: Bearer {api_key}" \
  -H "X-User-ID: user123" \
  -H "X-Real-IP: 192.168.1.2"
```

> **Note**: You can find a complete test script for this example at <a class="link-blue" href="https://github.com/NeuralTrust/ai-gateway-ce/blob/main/scripts/test_rate_limiter.sh">`scripts/test_rate_limiter.sh`</a>. This script automates the testing of different rate limit types and provides colored output for better visibility.

## Key Features

### Advanced Rate Limiting
- Global rate limits
- Per-IP limits
- Per-user limits
- Configurable windows and actions

### Load Balancing
- Weighted distribution
- Multiple target support
- Automatic failover

### Plugin System
- Pre and post request processing
- Sequential and parallel execution
- Built-in plugins for common tasks

## Next Steps

- [Plugin System Documentation](../concepts/plugin-system.md)
- [Traffic Management Guide](../concepts/traffic-management.md)
- [Rate Limiting Configuration](../concepts/rate-limiting.md)
- [Consumer Groups (Enterprise)](../concepts/consumer-groups.md)


