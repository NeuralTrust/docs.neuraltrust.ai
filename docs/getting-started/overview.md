---
sidebar_position: 1
---
# Welcome to NeuralTrust

Welcome to NeuralTrust's developer documentation. Learn how to secure, monitor, and protect your AI applications.

NeuralTrust is a comprehensive AI security and observability platform that helps organizations:
- **Secure** their AI applications with advanced prompt guarding and access controls
- **Monitor** AI interactions in real-time with detailed analytics and logging
- **Protect** against prompt injection attacks and unauthorized usage
- **Optimize** AI costs through intelligent traffic management and rate limiting

:::info
Ready to begin? Check out our **[Quick Start Guide](./quickstart.md)**.
:::

## Core Features

### 🛡️ **[AI Gateway](../ai-gateway/introduction.md)**

**What is an AI Gateway?**

An AI Gateway is a dedicated layer that acts as the "front door" for all your AI traffic. It intercepts and manages incoming requests, enforces security policies, and provides intelligent routing and monitoring. By consolidating key functions—like authentication, prompt guarding, rate limiting, and analytics—into one central interface, an AI Gateway ensures that your AI services remain both secure and highly available. 


<!-- Paragraph referencing the AI Gateway Quick Start link -->
If you're ready to explore our AI Gateway, check out the **[AI Gateway Quick Start](../ai-gateway/quickstart.md)**. This step-by-step guide walks you through the initial setup process to ensure your AI application is secure from day one.

<table align="center" style={{border: "none"}}>
  <thead>
    <tr>
      <th></th>
      <th>Community Edition</th>
      <th>Enterprise Edition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" ><a href="../ai-gateway/introduction" style={{fontSize: "1.6em", color: "#2E5EAA"}}>**AI Gateway**</a></td>
    </tr>
    <tr>
      <td> Azure Prompt Guard</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:</td>
    </tr>
    <tr>
      <td> GCP Prompt Guard</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:</td>
    </tr>
    <tr>
      <td> AWS Prompt Guard</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:</td>
    </tr>
    <tr>
      <td>NeuralTrust Prompt Guard</td>
      <td align="center" style={{backgroundColor: "#cd6155", fontcolor:"#641e16"}}>:x:</td>
      <td align="center" style={{backgroundColor: "lightgreen", fontcolor:"darkgreen"}}>:white_check_mark:️</td>
    </tr>
  </tbody>
</table>

#### **[Concepts](../ai-gateway/concepts)**

##### **[Forwarding Rules](../ai-gateway/concepts/forwarding-rules.md)**

In the AI Gateway, **forwarding rules** define how your incoming AI-related requests are routed. Essentially, they tell the gateway:

- Which path or endpoint triggers a certain route  
- Which target service those requests should go to (such as OpenAI, Anthropic, or any custom API)  
- Which HTTP methods (GET, POST, etc.) are allowed  
- How to handle headers, retries, load balancing, and any plugin features (like rate limiting)


##### **[Plugins System](../ai-gateway/concepts/plugin-system.md)**

 The AI Gateway's **plugins system** is a way to customize and extend how requests and responses flow through your AI Gateway. Imagine it as "add-ons" or "hooks" that run before or after the AI model processes a request. Each plugin can focus on a particular task: security, rate limiting, logging, or any custom logic you need.

1. **Pre-Request Stage:**  
   Plugins run here before your request is passed on to the AI model. This is useful for:  
   - Authentication checks  
   - [Rate Limiting](../ai-gateway/plugins/rate-limiting.md)  
   - Data transformations (e.g., formatting prompts)

2. **Post-Request Stage:**  
   Plugins run here right after the AI model responds. Common use-cases:  
   - Filtering or censoring sensitive content  
   - Adding additional metadata  
   - Logging the results somewhere

3. **Error Handling Stage:**  
   If anything goes wrong (e.g., network issues, model errors, or internal exceptions), plugins can intercept these errors to log or handle them in a particular way.



##### **[Traffic Management](../ai-gateway/concepts/traffic-management.md)**

The AI Gateway's **[Traffic Management](../ai-gateway/concepts/traffic-management.md)** capabilities allow you to control and distribute requests across multiple AI model endpoints. This is essential for:

- Load balancing across model providers
- Implementing canary deployments
- Conducting A/B testing
- Managing gradual migrations
- Orchestrating blue/green deployments

Key features include:

1. **Round-Robin Distribution**  
   Automatically distributes requests evenly across all configured targets in a sequential order.

2. **Weighted Distribution**  
   Enables percentage-based traffic splitting between endpoints, giving you precise control over request routing.

3. **Health Checks**  
   Actively monitors target health and automatically removes failing endpoints from the rotation.

4. **Distributed Architecture**  
   Uses Redis-based counters to ensure consistent distribution across multiple gateway instances.

5. **Fallback Mechanisms**  
   Includes automatic error recovery and failover options if primary targets become unavailable.


##### **[Consumer Groups](../ai-gateway/concepts/consumer-groups.md)**


The AI Gateway's **Consumer Groups** feature (Enterprise Edition) provides a powerful way to organize and manage API consumers with shared configurations and rate limits. This feature helps you:

1. **Group-Level Management**
   - Apply plugin configurations specifically to group members
   - Set unified rate limits for the entire group
   - Manage API keys at the group level
   - Control access permissions collectively

2. **Advanced Rate Limiting**
   - Set limits per group as a whole
   - Configure limits per IP address
   - Define limits per individual user
   - Customize rate limiting windows and actions

3. **API Key Management**
   - Generate and distribute API keys for group members
   - Track and monitor key usage
   - Revoke access when needed
   - Set key expiration policies

4. **Access Controls**
   - Define which endpoints group members can access
   - Set permissions and restrictions
   - Implement role-based access control
   - Manage authentication requirements

This enterprise feature is particularly useful for organizations that need to manage multiple API consumers with similar requirements or want to implement tiered access levels (e.g., "Basic", "Premium", "Enterprise" tiers).





##### **[Benchmark](../ai-gateway/benchmark.md)**

The AI Gateway includes comprehensive benchmarking capabilities to help you understand, optimize and compare performance across different configurations and environments. Key features include:

1. **Automated Testing**
   - Built-in benchmark script for comprehensive testing
   - Automatically verifies dependencies and configures test environment
   - Executes multiple benchmark scenarios
   - Customizable via environment variables

2. **Performance Metrics**
   - High throughput (25,500+ requests/second)
   - Low latency (7.8ms average response time)
   - Excellent reliability (100% success rate)
   - Detailed latency distribution analysis

3. **Flexible Testing Options**
   - Automated script for comprehensive testing
   - Manual testing support using 'hey' benchmarking tool
   - Customizable concurrent users and test duration
   - Support for various load patterns

4. **Detailed Results**
   - Complete performance statistics
   - Latency distribution breakdowns
   - Throughput measurements
   - Success rate monitoring

5. **Performance Comparison**
   - Compare metrics across different gateway configurations
   - Evaluate performance between deployment environments
   - Analyze impact of plugin changes
   - Benchmark against different hardware specifications

The benchmark tools help ensure optimal gateway performance, identify potential bottlenecks before deployment to production, and make data-driven decisions when comparing different setups.


### 🎯 **[Red Teaming](../red-teaming/overview.md)**

NeuralTrust provides comprehensive red teaming capabilities to systematically evaluate both the security and functional aspects of your LLM applications. Our tools help identify vulnerabilities, assess model behavior, validate functional capabilities, and ensure compliance with security standards.

Key Features:

1. 🔍 **Functional Evaluation**
   - Task performance testing
   - Edge case identification
   - Response consistency checks
   - Domain expertise validation
   - Instruction following assessment

2. 📋 **[Compliance Scanner](../red-teaming/scanner.md)**
   - Automated compliance checks
   - Toxicity detection
   - Policy adherence validation
   - Output quality monitoring

3. 📊 **[Evaluation Framework](../red-teaming/evaluation-sets.md)**
   - Customizable evaluation criteria
   - Response quality metrics
   - Comparative analysis
   - Performance benchmarking
   - Statistical reporting

4. 🎯 **[Domain-Specific Testing](../red-teaming/scanner.md#attack-endpoint)**
   - Industry-specific test scenarios
   - Custom evaluation criteria
   - Specialized knowledge validation
   - Context-aware testing

5. ⚡ **Automated Evaluation Pipeline**
   - Scheduled testing runs
   - Continuous model monitoring
   - Automated regression detection
   - Performance trend analysis
   - Alert notifications for issues

### 📈 **[Observability](../observability/overview.md)**

NeuralTrust provides comprehensive observability tools designed specifically for LLM applications, helping organizations monitor, track, and analyze AI behavior in production environments. Our observability suite addresses unique challenges that traditional monitoring solutions don't cover, from model unpredictability to compliance requirements.

Key Features:

1. 📊 **[Analytics](../observability/analytics.md)**
   - User interaction patterns analysis
   - Performance metrics tracking
   - Usage statistics and trends
   - Automatic topic classification
   - Cost and efficiency metrics

2. 🔍 **[Traces](../observability/tracing.md)**
   - End-to-end request tracking
   - Input/output logging
   - Model version control
   - Chain of thought recording
   - Compliance audit trails

3. 🔔 **[Monitors](../observability/monitors.md)**
   - Performance degradation detection
   - Safety alignment checks
   - Response quality monitoring
   - Cost anomaly detection
   - Automated incident alerts

These tools ensure your LLM applications remain reliable, safe, and aligned with business objectives while maintaining full visibility into their operation.

### 🛠️ SDKs & Libraries
- [Python SDK](../sdks/python-sdk/installation.md)
