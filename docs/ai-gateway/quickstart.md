---
sidebar_position: 1
---

# Quickstart Guide

## Overview
The AI Gateway acts as an intelligent proxy server designed specifically for AI workloads. It provides advanced rate limiting, load balancing, and monitoring capabilities optimized for Large Language Models (LLMs) and other AI services.

## Installation & Setup

### Basic Setup
```bash
git clone https://github.com/ai-gateway/ai-gateway.git
cd ai-gateway
```

The setup process is straightforward and focuses on AI-specific configurations out of the box.

### Configuration Structure
```yaml
server:
    admin_port: 8080    # Port for administrative API
    proxy_port: 8081    # Main proxy port for AI traffic
    base_domain: example.com

redis:
    host: localhost     # Redis for high-performance rate limiting
    port: 6379
    password: ""
    db: 0

database:
    host: localhost     # PostgreSQL for configuration storage
    port: 5432
    user: postgres
    password: postgres
    dbname: ai_gateway
    ssl_mode: disable 
```

This configuration is optimized for AI workloads, using Redis for real-time rate limiting and PostgreSQL for persistent configuration storage.

## Gateway Configuration

### Creating a Gateway Instance
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

The rate limiter is specifically designed for AI workloads with:
- Global limits for overall API capacity
- Per-IP limits to prevent abuse
- Per-user limits for fair resource allocation
- Token-based quotas for LLM interactions

### API Key Management
```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway_id}/keys \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Key"
}'
```

API keys include metadata specific to AI usage tracking, including token consumption and model access patterns.

### Load Balancing Configuration
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

Our intelligent routing system considers:
- Model performance requirements
- Cost optimization across different AI providers
- Response time requirements
- Token quota management

## Testing the Setup

### Rate Limit Testing
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
After completing the basic setup, explore these advanced features:

<div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px"
}}>
    <a href="./concepts/forwarding-rules" style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "8px",
        textDecoration: "none", 
        color: "inherit",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
        <h3>🔄 Forwarding Rules</h3>
        <p>Learn about intelligent request routing and traffic management for AI workloads</p>
    </a>

    <a href="./concepts/plugin-system" style={{
        padding: "20px",
        border: "1px solid #eee", 
        borderRadius: "8px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
        <h3>🔌 Plugin System</h3>
        <p>Explore AI-specific security and monitoring capabilities through our plugin architecture</p>
    </a>

    <a href="./concepts/traffic-management" style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "8px",
        textDecoration: "none",
        color: "inherit", 
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
        <h3>🚦 Traffic Management</h3>
        <p>Optimize your LLM workloads with advanced traffic management features</p>
    </a>

    <a href="./concepts/consumer-groups" style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "8px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
        <h3>👥 Consumer Groups (Enterprise)</h3>
        <p>Manage access control and usage policies for different user groups</p>
    </a>
</div>