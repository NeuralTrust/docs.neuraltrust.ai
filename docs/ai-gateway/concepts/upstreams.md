---
sidebar_position: 3
title: Upstreams
---

# Upstreams

An upstream represents a virtual hostname that can be used to load balance incoming requests across multiple services (targets). In AI Gateway, upstreams define where and how requests are forwarded to backend AI services.

## Upstream Structure

An upstream consists of:
- **Name**: A unique identifier for the upstream
- **Algorithm**: Load balancing algorithm to use
- **Targets**: List of backend services
- **Health Checks**: Configuration for monitoring target health

## Load Balancing

AI Gateway provides several load balancing algorithms:

1. **Round-Robin**
   Round-robin is the simplest and most straightforward load balancing algorithm. It **distributes incoming requests sequentially** across all available targets in a circular order. Each target receives an **equal distribution** of the traffic, making this approach **simple and predictable**. This algorithm is ideal for scenarios where all targets have similar capacity and performance characteristics, as it ensures an even distribution of load across the entire upstream group.

2. **Weighted Round-Robin**
   Weighted round-robin builds on the basic round-robin algorithm by allowing you to assign different weights to each target. The algorithm distributes traffic proportionally based on these weights, giving more requests to targets with higher weights. This provides fine-grained control over load distribution, which is especially valuable when your targets have different capacities or processing capabilities.

   - The algorithm enables **distribution based on target weights**
   - Targets with **higher weights receive more traffic**
   - This approach is particularly **useful for heterogeneous targets**

3. **Least Connections**
The least connections algorithm implements an intelligent load distribution strategy that dynamically **routes to the least busy target** in the upstream group. This sophisticated approach continuously monitors and evaluates the load across all available targets in real-time. Unlike simpler algorithms, it maintains an accurate count of active connections to each target, using this information to make informed routing decisions that optimize resource utilization across the entire system.

By tracking **active connections**, the system implements a dynamic decision-making process that goes beyond simple round-robin distribution. When a new request arrives, the algorithm evaluates the current connection count across all targets and automatically directs the request to the target with the lowest number of active connections. This real-time evaluation ensures that traffic is distributed optimally based on actual server load rather than predetermined patterns or weights.

This intelligent routing mechanism effectively **prevents target overload** by naturally distributing traffic to less busy servers. The approach is particularly valuable in scenarios with varying request processing times or where targets might experience different levels of load. The algorithm continuously adapts to changing conditions, taking into account both new connection requests and completed connections, making it especially effective for handling long-lived connections or scenarios where request processing times vary significantly between different requests. This adaptive nature ensures that no single target becomes overwhelmed while others remain underutilized.

## Health Checking

Upstreams support two types of health checks that work in tandem to ensure optimal system reliability and performance:

### Active Health Checks

Active health checking implements a **proactive target testing** strategy that continuously monitors the health of upstream targets. The system performs regular, scheduled health checks by sending test requests to each target at **regular interval checks**, allowing for early detection of potential issues before they impact user traffic. These checks are highly configurable and can be customized to match your specific service requirements.

The system implements **automatic target removal** when health checks fail, seamlessly removing problematic targets from the active pool without disrupting service. This automated response helps maintain system stability by preventing requests from being routed to malfunctioning targets. The removal process is governed by **configurable thresholds** that determine how many failed checks must occur before a target is considered unhealthy, as well as how many successful checks are required before it can rejoin the active pool. These thresholds can be fine-tuned based on your specific reliability requirements and tolerance for false positives.

### Passive Health Checks

Passive health checking provides continuous monitoring by being **based on request results** from actual traffic patterns. Unlike active checks, passive monitoring analyzes real user requests to detect issues, providing insights into actual service behavior under real-world conditions. The system carefully **tracks failures and successes** of each request, building a comprehensive picture of target health based on actual performance data.

The passive system implements a **gradual target recovery** mechanism that carefully reintroduces previously failed targets back into the rotation. This careful approach prevents sudden traffic spikes to recovering targets and helps ensure stability during recovery phases. The system also features sophisticated **automatic circuit breaking** capabilities that can quickly respond to degraded performance or increased error rates. When certain error thresholds are exceeded, the circuit breaker trips, temporarily removing the affected target from the pool to prevent cascade failures and allow time for recovery.

The combination of both active and passive health checking creates a robust monitoring system that can quickly detect and respond to issues while maintaining optimal service availability. This dual approach ensures that problems are caught both through proactive testing and real-world usage patterns, providing comprehensive protection against service disruptions.

## Target Management

Targets represent the actual backend instances that handle incoming requests. The management of these targets is crucial for maintaining a reliable and efficient system. Let's explore the key aspects of target management:

### 1. Target Properties

The foundation of target management lies in properly configuring essential target properties. Each target requires a specific **host and port** configuration that defines its network location and access point. These basic connection parameters ensure the gateway can establish and maintain reliable connections to the backend service.

The **weight for load balancing** property allows fine-grained control over traffic distribution. By assigning different weights to targets, administrators can influence how much traffic each target receives, enabling sophisticated load distribution strategies that account for varying server capacities and processing capabilities.

Target **priority for failover** settings determine the order in which targets are selected when failures occur. This hierarchical approach to failover ensures that traffic is redirected to the most appropriate backup targets when issues arise, maintaining service continuity while respecting operational preferences and infrastructure capabilities.

Comprehensive **health check settings** for each target enable customized monitoring approaches. These settings can be tailored to match the specific characteristics and requirements of each backend service, ensuring accurate health assessment and appropriate response to service degradation.

### 2. Target States

Target states represent the operational status of backend instances and determine how they participate in request handling. A target in the **Healthy** state actively receives traffic and participates fully in the load balancing rotation. These targets have passed all health checks and are operating within expected parameters, making them eligible to handle incoming requests.

When a target fails health checks or exhibits problematic behavior, it enters an **Unhealthy** state and is automatically removed from the pool. This state change prevents new requests from being routed to problematic targets while the underlying issues are investigated and resolved, protecting overall system stability.

The **Draining** state represents a graceful transition phase where a target is preparing to be removed from service. In this state, the target continues to process existing requests but doesn't accept new ones, ensuring smooth maintenance operations and preventing request interruption. This controlled withdrawal process is essential for maintaining service quality during target removal or maintenance.

Targets can also be **Disabled** through manual intervention, allowing administrators to explicitly remove targets from the active pool. This state is useful for planned maintenance, testing, or when specific targets need to be temporarily excluded from service without affecting the overall system operation.

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