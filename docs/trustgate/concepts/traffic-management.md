---
sidebar_position: 6
---

# Traffic Management

The AI Gateway provides advanced traffic management capabilities to control how requests are distributed across multiple targets, enabling sophisticated load balancing, testing, and deployment strategies.

## Distribution Methods

### Round-Robin Distribution

Requests are distributed evenly across all targets in a sequential, circular order. This is the default method when no weights are specified.

```bash
curl -X POST http://localhost:8080/api/v1/tenants/{tenant_id}/rules \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/api/*",
    "targets": [
      {"url": "https://api1.example.com"},
      {"url": "https://api2.example.com"},
      {"url": "https://api3.example.com"}
    ],
    "methods": ["GET", "POST"],
    "strip_path": true
  }'
```

### Weighted Distribution

Enables percentage-based traffic distribution across targets. Useful for:
- Canary deployments
- A/B testing
- Gradual migrations
- Blue/Green deployments

```bash
curl -X POST http://localhost:8080/api/v1/tenants/{tenant_id}/rules \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/api/*",
    "targets": [
      {
        "url": "https://production.example.com",
        "weight": 90
      },
      {
        "url": "https://canary.example.com",
        "weight": 10
      }
    ],
    "methods": ["GET", "POST"],
    "strip_path": true
  }'
```

## Technical Implementation

### Architecture
The traffic management system is built on a robust distributed architecture. At its core, it **uses Redis for distributed counter management**, ensuring accurate and consistent traffic distribution across multiple gateway instances. This distributed approach enables the system to maintain precise traffic control even in high-scale environments with multiple gateway nodes. The architecture **ensures consistent distribution across gateway instances**, preventing traffic imbalances and maintaining configured weights accurately. The system also **includes automatic fallback mechanisms** that activate when components experience issues, ensuring continuous operation even during partial system failures.

### Features

The system implements several key features to ensure reliable traffic management:

The **distributed counters** system forms the foundation of accurate traffic distribution. It employs sophisticated **Redis-based counter management** to track and control request distribution across targets. The system implements intelligent **TTL to prevent memory leaks**, automatically cleaning up stale data and ensuring efficient resource utilization. An **automatic cleanup** mechanism runs periodically to maintain system health and prevent resource exhaustion.

Robust **fallback mechanisms** ensure system reliability under various conditions. The system intelligently **defaults to round-robin** distribution if weights don't sum to 100%, ensuring continued operation even with misconfigured weights. During Redis failures, the system employs **random selection** as a fallback strategy, maintaining service availability. Sophisticated **automatic error recovery** procedures help the system return to normal operation once issues are resolved.

Comprehensive **health checks** monitor the status of all system components. The system performs **active target health monitoring** through regular checks of all configured targets. When issues are detected, **automatic failing target removal** ensures that traffic is only routed to healthy instances. The system also manages **health status restoration**, carefully reintroducing recovered targets to the traffic pool to maintain system stability.

## Use Cases

### Canary Deployments
```json
{
  "targets": [
    {
      "url": "https://stable.example.com",
      "weight": 95
    },
    {
      "url": "https://canary.example.com",
      "weight": 5
    }
  ]
}
```

### A/B Testing
```json
{
  "targets": [
    {
      "url": "https://variant-a.example.com",
      "weight": 50
    },
    {
      "url": "https://variant-b.example.com",
      "weight": 50
    }
  ]
}
```

### Blue/Green Deployment
```json
{
  "targets": [
    {
      "url": "https://blue.example.com",
      "weight": 100
    },
    {
      "url": "https://green.example.com",
      "weight": 0
    }
  ]
}
```

## Best Practices

1. **Gradual Rollouts**
   - Start with small weights for new versions
   - Gradually increase based on monitoring
   - Have rollback plans ready

2. **Monitoring**
   - Track error rates per target
   - Monitor response times
   - Set up alerts for anomalies

3. **Health Checks**
   - Configure appropriate timeouts
   - Set realistic health thresholds
   - Monitor health check logs