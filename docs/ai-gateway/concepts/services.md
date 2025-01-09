---
sidebar_position: 2
title: Services
---

# Services

In AI Gateway, a service is an entity representing an external upstream API or AI model endpoint. For example, an OpenAI API endpoint, an Anthropic Claude service, or your own custom AI model service.

The main attribute of a service is its upstream configuration, which defines where and how the AI Gateway should forward requests.

## Service and Route Interaction

Services, in conjunction with routes, let you expose your AI models and services to clients with AI Gateway. The gateway abstracts the service from the clients by using routes. Since the client always calls the route, changes to the services (like switching AI model providers or versions) don't impact how clients make the call. Routes also allow the same service to be used by multiple clients and apply different policies based on the route used.

## Service Types

AI Gateway supports different types of services that help you integrate and manage various AI model endpoints. The two main service types are:

1. **Upstream Services**

These services provide direct connections to your backend AI models and infrastructure. They offer robust features including:
   - Direct connection to backend AI models, allowing you to integrate your own hosted models and AI services
   - Load balanced distribution across multiple target endpoints to optimize performance and resource utilization
   - Built-in health checking capabilities to monitor service availability and performance
   - Automatic failover support to maintain high availability when issues occur

2. **Proxy Services** 

These services act as intermediaries to external AI providers, adding important management capabilities:
   - Seamless proxy requests to external AI providers like OpenAI, Anthropic, and others
   - Comprehensive authentication and rate limiting to control access and usage
   - Powerful request and response transformation capabilities to modify payloads as needed
   - Intelligent response caching when possible to improve performance and reduce costs

## Best Practices

1. **Service Design**
   - Choose appropriate service types
   - Plan service boundaries
   - Consider service dependencies
   - Design for resilience

2. **Service Organization**
   - Group related services
   - Use clear naming conventions
   - Document service relationships
   - Maintain service hierarchy

3. **Security**
   - Configure appropriate timeouts
   - Set up retry policies
   - Enable health checks
   - Implement rate limiting

## Next Steps

- [Learn about Upstreams](./upstreams.md)
- [Configure Routes](./routes.md)
- [Understand Traffic Management](./traffic-management.md)