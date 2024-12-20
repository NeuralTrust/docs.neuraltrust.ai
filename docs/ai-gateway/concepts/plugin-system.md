---
sidebar_position: 2
---

# Plugin System

The AI Gateway uses a flexible plugin system to extend and customize functionality.

## Overview

Plugins can:
- Modify requests and responses
- Implement security controls
- Add monitoring capabilities
- Integrate with external services

## Plugin Architecture

### Execution Stages

1. **Pre-Request**: Before the request reaches the LLM
2. **Post-Request**: After receiving the LLM response
3. **Error**: Handles error conditions

### Execution Modes

The plugin system supports both sequential and parallel execution:

- **Priority Levels**: Plugins are executed in order of their priority (lower numbers run first)
- **Parallel Flag**: Plugins with the same priority can run in parallel if configured to do so

## Configuration

### Basic Plugin Setup

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

