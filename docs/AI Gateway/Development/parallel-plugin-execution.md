---
sidebar_position: 4
---



# Parallel Plugin Execution

The plugin system supports both sequential and parallel execution of plugins. This is controlled through two mechanisms:

    - **Priority Levels**: Plugins are executed in order of their priority (lower numbers run first).
    - **Parallel Flag**: Plugins with the same priority can run in parallel if configured to do so.

## Example Configuration
```go
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

## Execution Flow:


    1. Plugins are grouped by priority
    2. Each priority group is executed in order (lowest to highest)
    3. Within each priority group:
        - If there's only one plugin, it runs sequentially
        - If there are multiple plugins and they support parallel execution, they run concurrently

## Plugin Types:


    - **Sequential Plugins** (parallel: false):
        - Need to maintain state
        - Order-dependent operations
        - Example: Rate Limiter

    - **Parallel Plugins** (parallel: true):
        - Stateless operations
        - Order-independent
        - Example: External Validators

This design allows for optimal performance by running independent operations concurrently while maintaining necessary ordering constraints.


