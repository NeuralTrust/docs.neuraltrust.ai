---
sidebar_position: 1
sidebar_label: "Overview"
---

# NeuralTrust AI Gateway

**NeuralTrust AI Gateway** is a robust security and management layer for Large Language Model (LLM) interactions. It provides comprehensive protection, monitoring, and governance for AI applications while enabling organizations to safely deploy and scale their LLM-powered solutions with confidence.

## What is an AI Gateway?

An AI Gateway can be viewed as a specialized system similar to an API Gateway, but designed specifically for Agents and LLM workloads. Traditional API Gateways act as middlemen between clients and multiple backend services—handling important tasks like:
:::tip
Set up your AI Gateway in minutes with our [quickstart guide](./quickstart.md)
:::

- Routing (which service should get the request)  
- Load balancing (distributing traffic evenly across services)  
- Authentication and authorization (verifying request access)  
- Rate limiting (controlling the number of requests per second)  
- Request and response transformations (converting data formats, injecting or stripping fields, etc.)


![AI Gateway](./ai-gateway.png) 
<!-- Centered image showing the architectural overview of the AI Gateway -->
<div align="center">
  <img src="./ai-gateway.png" alt="AI Gateway Overview"  />
</div>
<!-- This section introduces the key differentiators of AI Gateways compared to traditional API Gateways -->

## Why use an AI Gateway?

When working with AI Agents, additional considerations come into play. This is where an AI Gateway excels:

1. **AI Model Routing:** Instead of sending requests to microservices, the AI Gateway helps direct requests to the most suitable AI model (e.g., choosing between a fast model or a more accurate model, or automatically picking a specialized LLM for a certain use case).

2. **Contextual Pre- and Post-Processing:** The AI Gateway can handle tasks such as prompt formatting before a request hits the model (pre-processing), and sanitization or compliance checks after the model generates a response (post-processing). 

3. **Performance Observability:** Much like an API Gateway, the AI Gateway provides real-time metrics—but focuses on AI-specific patterns. It captures performance data such as token usage, response latencies, and relevant evaluations or scoring that reflect model performance.

4. **Security, Compliance, and Governance:** Especially for large language models, ensuring compliance with data protection and usage policies is key. An AI Gateway can integrate with policy engines or red-team scanning tools to proactively guard against misuse or data leaks.

5. **Scalability for AI Workloads:** AI workloads can be extremely large and unpredictable in size. The AI Gateway helps orchestrate resources dynamically, scaling up multiple instances of a model or switching to a larger model tier when needed.

In short, if an API Gateway is the “traffic cop” for ordinary web services, an AI Gateway is the “AI traffic dispatcher” that ensures your AI models are accessible, compliant, and performant. This allows you to build AI-powered applications with the same control and confidence you have for any well-managed API environment.


