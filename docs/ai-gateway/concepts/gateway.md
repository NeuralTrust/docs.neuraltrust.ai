---
sidebar_position: 1
title: Gateway
---

# Gateway

A gateway in AI Gateway is a logical grouping of configurations that defines how API traffic should be managed, secured, and routed. Each gateway is identified by a unique subdomain and can be configured with its own set of plugins, services, and routing rules.

## Core Components

### 1. Gateway Configuration
A gateway consists of:
- **Name**: A descriptive identifier for the gateway
- **Subdomain**: A unique subdomain for accessing the gateway
- **Status**: The current state of the gateway (e.g., active)
- **Required Plugins**: A chain of plugins that process requests

### 2. Plugin Chain
Plugins are executed in order based on their configuration:
```json
{
    "name": "rate_limiter",
    "enabled": true,
    "stage": "pre_request",
    "priority": 1,
    "settings": {
        "limits": {
            "global": {
                "limit": 15,
                "window": "1m"
            },
            "per_ip": {
                "limit": 5,
                "window": "1m"
            }
        }
    }
}
```

### 3. API Keys

Secure access control per gateway provides a robust authentication mechanism where each gateway maintains its own isolated set of API keys. This allows for granular access control to specific endpoints, with support for different access levels and permissions that can be scoped to specific services or routes within the gateway.

Configurable expiration enables flexible key lifecycle management through custom expiration dates for each API key. The system supports automatic key rotation capabilities to maintain security, implements grace periods for smooth key transitions, and provides configurable warning notifications before keys expire to prevent service disruption.

Usage **tracking** and **management** delivers comprehensive visibility into API key usage through detailed analytics and usage patterns. The system tracks request volumes and accessed endpoints, monitors rate limit consumption, and enables usage report exports for billing and auditing purposes. Additionally, it includes intelligent monitoring to detect anomalous usage patterns that might indicate security concerns.

### 4. Upstreams

**Backend service locations** form the foundation of upstream configuration in the AI Gateway. Each upstream represents a destination endpoint where requests will be routed, complete with its own unique URL, protocol settings, and connection parameters. These locations can be configured with specific timeouts, TLS settings, and other connection-specific parameters to ensure optimal communication with backend services.

The **Gateway** provides robust support **for multiple target configurations** within a single upstream definition. This enables advanced traffic distribution patterns, allowing requests to be intelligently routed across multiple backend instances. Each target can be assigned specific weights for traffic distribution, enabling gradual rollouts, A/B testing, or load distribution across different service tiers.

**Health checking capabilities** ensure the reliability and availability of upstream services. The Gateway continuously monitors the health of each upstream target through configurable health checks, which can include periodic HTTP requests, TCP connection tests, or custom health check protocols. When an upstream target fails its health checks, the Gateway automatically removes it from the active target pool until it recovers, ensuring that requests are only routed to healthy instances.

**Load balancing configuration** provides sophisticated traffic distribution across multiple upstream targets. The Gateway supports various load balancing algorithms including round-robin, least connections, and weighted distribution. These can be fine-tuned with parameters such as connection limits, retry policies, and circuit breaker settings to optimize request distribution and handle failure scenarios gracefully.

### 5. Services

The **link to upstream configurations** serves as a crucial connection point between services and their corresponding backend systems. This linkage defines how services communicate with their upstream providers, establishing the necessary routing paths, authentication methods, and connection parameters. Each service can be linked to one or more upstream configurations, enabling flexible routing strategies and failover mechanisms.

The **service type definition** categorizes and determines the behavior and capabilities of each service within the gateway. Service types can range from REST APIs to gRPC services, GraphQL endpoints, or specialized AI model endpoints. The type definition influences how the gateway handles requests, transforms payloads, and manages protocol-specific features for each service.

Comprehensive **description and metadata** provide essential documentation and contextual information about each service. This includes detailed service specifications, version information, ownership details, and any special handling requirements. Well-maintained metadata helps in service discovery, troubleshooting, and maintaining a clear overview of the gateway's service ecosystem.

**Traffic management settings** control how requests flow through each service, enabling fine-grained control over service behavior and performance. These settings encompass rate limiting configurations, circuit breaker parameters, timeout values, and retry policies. They allow administrators to optimize service performance, protect backend resources, and ensure reliable operation under varying load conditions.

### 6. Rules

**Path-based routing** forms the foundation of the gateway's request handling system. It enables precise control over how incoming requests are directed through the gateway based on their URL paths. This routing mechanism supports various matching patterns, including exact matches, wildcards, and parameterized paths, allowing for flexible and granular control over request routing. Administrators can create sophisticated routing hierarchies that map different URL patterns to specific backend services.

**HTTP method filtering** provides an additional layer of request control by allowing or restricting specific HTTP methods for each route. This capability ensures that endpoints only accept appropriate HTTP methods (GET, POST, PUT, DELETE, etc.) as defined in the service specifications. Method filtering helps maintain API consistency and security by preventing unauthorized operations and ensuring that each endpoint adheres to its intended REST semantics.

**Path stripping options** offer flexibility in how the gateway handles URL paths when forwarding requests to backend services. When enabled, this feature can remove specified path prefixes before forwarding the request, allowing backend services to receive cleaned-up URLs that match their expected routing structure. This is particularly useful when gateway routes need to be structured differently from backend service endpoints, enabling seamless URL transformation without requiring changes to the backend services.

**Service mapping** creates the essential connections between incoming requests and their designated backend services. This mapping system defines how different paths and methods are associated with specific services registered in the gateway. It supports complex routing scenarios, including routing to multiple services based on path patterns, implementing API versioning through path prefixes, and managing service transitions through gradual traffic shifting.

## Gateway Flow

The gateway processes requests through three main stages, each handling distinct aspects of request processing:

### 1. Request Reception
The journey begins when a **request arrives at the gateway subdomain**. This initial touchpoint is where the gateway first encounters incoming traffic and begins its processing pipeline. The system immediately initiates **API key validation**, a crucial security step that verifies the authenticity and permissions of the incoming request. This validation process checks not only the key's existence but also its associated permissions and current validity status.

Following successful authentication, the gateway moves to **plugin chain execution**. This phase involves running each configured pre-request plugin in sequence, following their defined priority order. These plugins can perform various operations, from rate limiting to request validation, each having the capability to modify, enrich, or even reject the request based on configured rules.

### 2. Traffic Processing
Once the request passes initial validation, the gateway begins its core processing phase. First, it performs **rule matching**, a sophisticated process that evaluates the incoming request against defined routing rules. The system analyzes multiple factors including the request path, HTTP method, and headers to determine the most appropriate routing rule.

After matching the rule, the gateway proceeds with **service resolution**. This crucial step identifies which backend service should handle the request, loading all necessary service-specific configurations and parameters. The resolution process takes into account factors such as service availability, version requirements, and specific routing rules.

The final step in this phase is **upstream selection**, where the gateway determines the specific backend instance that will handle the request. This selection process considers various factors including current load, instance health, and any defined routing weights or rules.

### 3. Request Forwarding
The final stage focuses on delivering the request to its destination. It begins with **plugin transformations**, where the request may be modified or enhanced based on the configured plugin chain. These transformations can include header modifications, payload transformations, or additional security measures.

The gateway then handles **load balancing** across available upstream targets. This process ensures optimal distribution of traffic while considering factors such as target health, current capacity, and configured routing weights. The system may also implement retry logic if initial forwarding attempts fail.

Finally, the gateway manages **backend routing**, delivering the transformed request to the selected upstream service. This step includes handling the response from the backend, applying any necessary response transformations, and ensuring proper error handling before returning the final response to the client.

## Example Configuration

```json
{
    "name": "AI Service Gateway",
    "subdomain": "ai-service",
    "required_plugins": [
        {
            "name": "rate_limiter",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "limits": {
                    "global": {
                        "limit": 15,
                        "window": "1m"
                    }
                }
            }
        }
    ]
}
```

## Best Practices

1. **Plugin Configuration**
   - Order plugins by priority
   - Configure appropriate rate limits
   - Enable necessary security plugins
   - Use staging for plugin execution

2. **Service Management**
   - Group related services
   - Configure proper health checks
   - Set appropriate timeouts
   - Use descriptive naming

3. **Rule Organization**
   - Use specific path patterns
   - Configure proper method restrictions
   - Consider path stripping needs
   - Maintain rule priority

4. **Security**
   - Rotate API keys regularly
   - Monitor usage patterns
   - Configure appropriate rate limits
   - Enable request validation

## Next Steps

- [Services](./services.md)
- [Upstreams](./upstreams.md)
- [Rules](./rules.md)
- [Plugins](./plugins.md)