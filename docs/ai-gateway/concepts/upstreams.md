---
sidebar_position: 3
title: Upstreams
---

# Upstreams

An upstream represents a virtual hostname that can be used to load balance incoming requests across multiple services (targets). In AI Gateway, upstreams define where and how requests are forwarded to backend AI services.

## Upstream Structure

An upstream consists of:
- Name: A unique identifier for the upstream
- Algorithm: Load balancing algorithm to use
- Targets: List of backend services
- Health Checks: Configuration for monitoring target health

## Load Balancing

AI Gateway provides several load balancing algorithms:

1. **Round-Robin**
   - Distributes requests sequentially
   - Equal distribution across targets
   - Simple and predictable

2. **Weighted Round-Robin**
   - Distribution based on target weights
   - Higher weights receive more traffic
   - Useful for heterogeneous targets

3. **Least Connections**
   - Routes to least busy target
   - Based on active connections
   - Prevents target overload

## Health Checking

Upstreams support two types of health checks:

### Active Health Checks
- Proactive target testing
- Regular interval checks
- Automatic target removal
- Configurable thresholds

### Passive Health Checks
- Based on request results
- Tracks failures and successes
- Gradual target recovery
- Automatic circuit breaking

## Target Management

Targets represent the actual backend instances:

1. **Target Properties**
   - Host and port
   - Weight for load balancing
   - Priority for failover
   - Health check settings

2. **Target States**
   - Healthy: Receiving traffic
   - Unhealthy: Removed from pool
   - Draining: Finishing existing requests
   - Disabled: Manually removed

## Best Practices

1. **Load Balancing**
   - Choose appropriate algorithms
   - Set proper target weights
   - Configure connection limits
   - Plan for scaling

2. **Health Checks**
   - Enable both check types
   - Set appropriate thresholds
   - Configure check intervals
   - Define recovery behavior

3. **Target Management**
   - Maintain adequate capacity
   - Plan for failover
   - Consider geographic distribution
   - Document target roles

## Next Steps

- [Learn about Services](./services.md)
- [Configure Rules](./rules.md)
- [Understand Traffic Management](./traffic-management.md) 