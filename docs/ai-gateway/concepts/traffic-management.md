---
sidebar_position: 4
---

# Traffic Management

The AI Gateway provides advanced traffic management capabilities to control how requests are distributed across multiple targets.

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
- Uses Redis for distributed counter management
- Ensures consistent distribution across gateway instances
- Includes automatic fallback mechanisms

### Features
1. **Distributed Counters**
   - Redis-based counter management
   - TTL to prevent memory leaks
   - Automatic cleanup

2. **Fallback Mechanisms**
   - Defaults to round-robin if weights don't sum to 100%
   - Random selection during Redis failures
   - Automatic error recovery

3. **Health Checks**
   - Active target health monitoring
   - Automatic failing target removal
   - Health status restoration

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