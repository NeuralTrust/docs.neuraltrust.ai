---
sidebar_position: 2
---

# Plugin System

The AI Gateway uses a flexible plugin system to extend and customize functionality. Plugins are modular components that can be enabled and configured to add features like rate limiting, authentication, request/response modification, and external service integration. The plugin architecture follows a stage-based execution model, allowing plugins to process requests and responses at different points in the request lifecycle. This extensible design makes it easy to add new capabilities while maintaining a clean separation of concerns.

## Overview

Plugins can enhance and extend the AI Gateway's functionality in various ways:
- Modify requests and responses by transforming payloads, adding headers, or changing parameters
- Implement security controls like rate limiting, authentication, and input validation
- Add monitoring capabilities through logging, metrics collection, and alerting
- Integrate with external services for additional validation, enrichment, or business logic

The plugin system's flexible architecture allows you to easily add custom plugins to meet your specific needs.

## Plugin Architecture

### Execution Stages

1. **Pre-Request**: Before the request reaches the LLM - used for request validation, transformation, rate limiting, and authentication
2. **Post-Request**: After receiving the LLM response - enables response modification, logging, metrics collection
3. **Error**: Handles error conditions - provides custom error handling, fallbacks, and recovery logic

### Execution Modes

The plugin system supports both sequential and parallel execution:

- **Priority Levels**: Plugins are executed in order of their priority (lower numbers run first)
- **Parallel Flag**: Plugins with the same priority can run in parallel if configured to do so

### Plugin Chain

The plugin chain defines the order and configuration of plugins that process each request:

- **Ordered Execution**: Plugins run in sequence based on priority
- **Conditional Logic**: Plugins can implement conditions to control execution flow
- **State Sharing**: Plugins can share state and context through the request context
- **Error Handling**: Each plugin can implement custom error handling logic

### Core Plugin Types

The AI Gateway includes several built-in plugin types:

- **Security Plugins**: Rate limiting, authentication, input validation
- **Transform Plugins**: Request/response modification, payload transformation
- **Integration Plugins**: External API calls, service mesh integration
- **Observability Plugins**: Logging, metrics, tracing, alerting

## Configuration

### Basic Plugin Setup
The example above shows a basic plugin configuration where a single rate limiter plugin is enabled. The configuration specifies the plugin name, whether it's enabled, which execution stage it runs in, and plugin-specific settings. In this case, the rate limiter is configured to allow 100 requests per minute window. Each plugin requires its own configuration block within the plugins array, allowing you to enable and configure multiple plugins as needed.

```json
{
  "plugins": [
    {
      "name": "rate_limiter",
      "enabled": true,
      "stage": "pre_request",
      "config": {
        "limit": 100,
        "window": "1m"
      }
    }
  ]
}
```

### Parallel Execution Setup
For parallel execution, plugins can be configured to run simultaneously when they share the same priority level and have the `parallel` flag set to true. This is particularly useful for operations that don't depend on each other's results and can be executed independently, improving overall request processing time. In the example below, the `external_validator` and `content_validator` plugins are configured to run in parallel (priority: 2) after the `rate_limiter` (priority: 1) completes. This configuration optimizes performance by running independent validation tasks concurrently while ensuring that critical sequential operations like rate limiting are performed first.

```json
"plugin_chain": [
    {
        "name": "rate_limiter",
        "enabled": true,
        "parallel": false,  // Must run sequentially
        "priority": 1      // Runs first
    },
    {
        "name": "external_validator",
        "enabled": true,
        "parallel": true,   // Can run in parallel
        "priority": 2      // Runs after rate_limiter
    },
    {
        "name": "content_validator",
        "enabled": true,
        "parallel": true,   // Can run in parallel
        "priority": 2      // Runs alongside external_validator
    }
]
```

## Execution Flow

1. Plugins are grouped by priority
2. Each priority group is executed in order (lowest to highest)
3. Within each priority group:
   - If there's only one plugin, it runs sequentially
   - If there are multiple plugins and they support parallel execution, they run concurrently

## Plugin Types

### Sequential Plugins (parallel: false)
- Need to maintain state
- Order-dependent operations
- Examples:
  - Rate Limiter
  - Authentication
  - Session Management

### Parallel Plugins (parallel: true)
- Stateless operations
- Order-independent
- Examples:
  - Content Validators
  - External API Calls
  - Logging/Monitoring

## Built-in Plugins

1. **Rate Limiter**
The Rate Limiter plugin provides request rate limiting functionality based on configurable windows and limits. It helps protect your API endpoints from abuse by controlling the number of requests allowed within specified time periods.

Key features:
- Redis-backed distributed rate limiting
- Configurable limits per time window
- Support for multiple rate limit tiers
- Customizable rate limit exceeded actions

Example configuration:

```json
{
  "name": "rate_limiter",
  "enabled": true,
  "priority": 1,
  "parallel": false,
  "config": {
    "limit": 100,
    "window": "1m"
  }
}
```

2. **Content Filter**
The Content Filter plugin provides request and response content validation capabilities. It helps maintain content quality and security by filtering out unwanted patterns, sensitive information, or malicious content before it reaches your API endpoints.

Key features:
- Pattern-based content filtering
- Support for regular expressions
- Configurable actions on matches
- Pre-request and post-response filtering

The plugin can be configured to scan both incoming requests and outgoing responses for specific patterns. When a match is found, it can either reject the request, redact the matched content, or log the incident based on the configured action.

```json
{
  "name": "content_filter",
  "enabled": true,
  "priority": 2,
  "parallel": true,
  "config": {
    "banned_patterns": ["pattern1", "pattern2"],
    "action": "reject"
  }
}
```

## Creating Custom Plugins

To create a custom plugin, you need to implement the `Plugin` interface. This interface defines the methods that must be implemented by any plugin:
```go
type Plugin interface {
    Name() string
    Stage() string
    Priority() int
    SupportsParallel() bool
    Execute(ctx context.Context, data *PluginData) error
}
```

## Best Practices

1. **Priority Assignment**
   - Lower numbers for critical plugins
   - Group related plugins with same priority
   - Consider dependencies when setting priorities

2. **Parallel Execution**
   - Use for independent operations
   - Ensure thread safety
   - Monitor performance impact

3. **Error Handling**
   - Implement proper fallbacks
   - Log errors appropriately
   - Consider retry strategies

