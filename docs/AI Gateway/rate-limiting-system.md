---
sidebar_position: 3
---

# Rate Limiting System

## Overview
The gateway implements a sophisticated rate limiting system with:

    - Hierarchical Rate Limiting
        - Gateway-level limits (applies to all routes)
        - Rule-level limits (specific to routes)
        - Cascading evaluation: rule limits → gateway limits

    - Performance Optimizations
        - In-memory config caching
        - Periodic Redis checks (configurable)
        - Memory cleanup for inactive gateways
        - Thread-safe operations

    - Configuration Persistence
        - Configs stored in Redis
        - Survives gateway restarts
        - Automatic config reloading

    - Memory Management
        - Automatic cleanup of unused configs
        - Configurable cleanup intervals
        - Last access tracking
        - Prevention of memory leaks

## Rate Limiter Design
```go
type RateLimiter struct {
    configs         map[string]RateLimiterConfig // In-memory cache
    lastConfigCheck map[string]time.Time         // Track last config check
    lastAccess      map[string]time.Time         // Track last access
    configTTL       time.Duration                // Config refresh interval
    cleanupInterval time.Duration                // Cleanup frequency
    maxIdleTime     time.Duration                // Max time to keep unused configs
}
```

## Flow 


    1. Request arrives at gateway
    2. Gateway identifies target service
    3. Rate limiter checks:
        - Rule-specific limits
        - Gateway-wide limits
    4. Request processed or rate limited
    5. Periodic cleanup of unused configs

## Configuration Example 
```go
{
    "gateway": {
        "enabled": true,
        "limits": {
            "global": {
                "limit": 5,
                "window": "1m"
            }
        }
    },
    "rule": {
        "enabled": true,
        "limits": {
            "global": {
                "limit": 3,
                "window": "10s"
            }
        }
    }
}
```
## Performance Considerations


    - In-memory caching for fast access
    - Periodic Redis checks to reduce latency
    - Automatic cleanup to prevent memory leaks
    - Thread-safe operations with minimal lock contention
