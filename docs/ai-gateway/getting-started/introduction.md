---
sidebar_position: 1
sidebar_label: "Overview"
---

# Trust Gate 

**Trust Gate** is a robust security and management layer for Large Language Model (LLM) interactions. It provides comprehensive protection, monitoring, and governance for AI applications while enabling organizations to safely deploy and scale their LLM-powered solutions with confidence.

## What is Trust Gate?

**TrustGate** functions as a specialized system akin to an API Gateway, but it’s purpose-built for managing Agents and LLM workloads. While traditional API Gateways serve as intermediaries between clients and backend services, handling key operational tasks, AI Gateways take on these responsibilities with a focus on AI-specific needs:

### Key Features of an AI Gateway:

- **Routing:** Directs requests to the appropriate service or model.
- **Load Balancing:** Ensures even traffic distribution across models or services.
- **Authentication and Authorization:** Validates access to ensure secure operations.
- **Rate Limiting:** Controls request volumes to prevent overloading.
- **Token Rate Limiting:** Controls the rate at which tokens are consumed.
- **Request and Response Transformation:** Modifies data formats, adds or removes fields, and optimizes communication between systems.

:::tip
Set up your AI Gateway in minutes with our [step-by-step guide](/category/step-by-step-guide)
:::

## Architecture Overview

The AI Gateway architecture consists of several key components working together to provide secure and efficient AI model access:

<div className="text-center">
  <img 
    src="/img/architecture.svg" 
    alt="AI Gateway Architecture" 
    width="100%" 
    style={{
      maxWidth: '800px',
      margin: '0 auto',
      display: 'block'
    }} 
  />
</div>

### Key Components:

1. **Control Plane**
   - Admin API: Manages configuration, gateways, upstreams, services, rules, and API keys
   - Config Store: Maintains gateway settings and routing rules
2. **Data Plane**
   - Proxy API: Handles real-time request processing
   - Plugin System: Executes custom logic and transformations
   - Rate Limiter: Controls request volumes and quotas
   - Token Rate Limiter: Controls the rate at which tokens are consumed
3. **Integration Points**
   - Load Balancer: Distributes incoming traffic with configurable strategies
   - AI Model Providers: Connects to various LLM services
   - Client Applications: Various systems consuming AI services

## Why use an AI Gateway?

When working with AI Agents, additional considerations come into play. This is where an AI Gateway excels:

1. **AI Model Routing:** Instead of sending requests to microservices, the AI Gateway helps direct requests to the most suitable AI model (e.g., choosing between a fast model or a more accurate model, or automatically picking a specialized LLM for a certain use case).

2. **Contextual Pre- and Post-Processing:** The AI Gateway can handle tasks such as prompt formatting before a request hits the model (pre-processing), and sanitization or compliance checks after the model generates a response (post-processing). 

3. **Performance Observability:** Much like an API Gateway, the AI Gateway provides real-time metrics—but focuses on AI-specific patterns. It captures performance data such as token usage and response latencies.

4. **Security, Compliance, and Governance:** Especially for large language models, ensuring compliance with data protection and usage policies is key. An AI Gateway can integrate with policy engines tools to proactively guard against misuse or data leaks.

5. **Scalability for AI Workloads:** AI workloads can be extremely large and unpredictable in size. The AI Gateway helps orchestrate resources dynamically, scaling up multiple instances of a model or switching to a larger model tier when needed.

In short, if an API Gateway is the "traffic cop" for ordinary web services, an AI Gateway is the "AI traffic dispatcher" that ensures your AI models are accessible, compliant, and performant. This allows you to build AI-powered applications with the same control and confidence you have for any well-managed API environment.


