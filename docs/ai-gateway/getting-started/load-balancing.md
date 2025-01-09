---
sidebar_position: 7
title: Load Balancing
---

# Load Balancing

Load balancing helps distribute AI model requests across multiple instances for better performance and reliability.

## Configure Upstream Targets

Set up upstream targets for load balancing:

```bash
# Create an upstream
curl -X POST http://localhost:8001/upstreams \
  --data name=openai-upstream \
  --data algorithm=round-robin

# Add targets to the upstream
curl -X POST http://localhost:8001/upstreams/openai-upstream/targets \
  --data target=api.openai.com:443 \
  --data weight=100

curl -X POST http://localhost:8001/upstreams/openai-upstream/targets \
  --data target=api2.openai.com:443 \
  --data weight=100
```

## Load Balancing Algorithms

Choose from different load balancing algorithms:

```bash
# Round Robin balancing
curl -X POST http://localhost:8001/upstreams \
  --data name=ai-upstream \
  --data algorithm=round-robin

# Least Connections
curl -X POST http://localhost:8001/upstreams \
  --data name=ai-upstream \
  --data algorithm=least-connections

# Hash-based balancing
curl -X POST http://localhost:8001/upstreams \
  --data name=ai-upstream \
  --data algorithm=consistent-hashing \
  --data hash_on=header \
  --data hash_on_header=user-id
```

## Health Checks

Configure health checks for targets:

```bash
# Add active health checks
curl -X PATCH http://localhost:8001/upstreams/ai-upstream \
  --data healthchecks.active.http_path=/health \
  --data healthchecks.active.healthy.interval=5 \
  --data healthchecks.active.unhealthy.interval=5

# Add passive health checks
curl -X PATCH http://localhost:8001/upstreams/ai-upstream \
  --data healthchecks.passive.healthy.successes=3 \
  --data healthchecks.passive.unhealthy.http_failures=3
```

## Target Weight and Priority

Adjust target weights and priorities:

```bash
# Update target weight
curl -X POST http://localhost:8001/upstreams/ai-upstream/targets \
  --data target=api1.example.com:443 \
  --data weight=200

# Set backup target
curl -X POST http://localhost:8001/upstreams/ai-upstream/targets \
  --data target=backup-api.example.com:443 \
  --data weight=100 \
  --data backup=true
```

## Monitoring

Monitor load balancer status:

```bash
# Check upstream status
curl -X GET http://localhost:8001/upstreams/ai-upstream/health

# Check target status
curl -X GET http://localhost:8001/upstreams/ai-upstream/targets

# Get load balancer metrics
curl -X GET http://localhost:8001/metrics
```

## Next Steps

After configuring load balancing:

1. [Set up Rate Limiting](./rate-limiting.md) to protect your services
2. [Configure Authentication](./key-authentication.md) for secure access
3. [Add Proxy Caching](./proxy-caching.md) to improve performance
