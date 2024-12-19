---
sidebar_position: 4
---







# Traffic Management

The gateway supports two methods of traffic distribution across multiple target endpoints:
Round-Robin Distribution

## Round-Robin Distribution
When multiple targets are specified without weights, requests are distributed evenly across all targets in a round-robin fashion. This is useful for basic load balancing.

Example rule with round-robin distribution:
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
## Weighted Distribution

For more precise traffic control, you can specify percentage-based weights. The weights must sum to 100%. This is particularly useful for:

    Canary deployments
    A/B testing
    Gradual traffic migration
    Blue/Green deployments

Example rule with weighted distribution:
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