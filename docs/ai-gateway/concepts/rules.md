---
sidebar_position: 4
title: Rules
---

# Rules

A rule in AI Gateway determines how incoming requests are matched and forwarded to services. Rules act as the traffic routing configuration that maps incoming requests to the appropriate services based on paths, methods, and other conditions.

## Rule Components

A rule consists of:
- Path: The URL path pattern to match
- Service ID: The service that will handle matched requests
- Methods: Allowed HTTP methods
- Strip Path: Whether to remove the matched path prefix
- Active: Whether the rule is currently active

## Rule Matching

Rules determine how requests are matched to services:

1. **Path Matching**
   - Exact path matching
   - Prefix matching with wildcards
   - Regular expression patterns
   - Priority-based selection

2. **Method Matching**
   - Specific HTTP methods
   - Multiple method support
   - Method restrictions

3. **Header Matching**
   - Match based on headers
   - Support for multiple headers
   - Regular expression patterns

## Path Handling

Rules provide several path handling options:

### Strip Path
When enabled, removes the matched portion of the path before forwarding:
```
Request: /api/v1/chat/completions
Matched Path: /api/v1
Forwarded Path: /chat/completions
```

### Preserve Host
Controls whether to forward the original Host header to the upstream service.

## Rule Priority

When multiple rules match a request:

1. **Exact Match Priority**
   - Exact paths take precedence
   - Longer paths preferred over shorter
   - More specific matches win

2. **Method Specificity**
   - Method-specific rules preferred
   - ALL methods lowest priority
   - Explicit methods over wildcards

## Best Practices

1. **Path Design**
   - Use clear path hierarchies
   - Consider versioning in paths
   - Document path patterns
   - Keep paths consistent

2. **Method Configuration**
   - Restrict to needed methods
   - Document method requirements
   - Consider security implications
   - Use appropriate verbs

3. **Rule Organization**
   - Group related rules
   - Maintain clear priorities
   - Document rule purposes
   - Keep rules simple

## Next Steps

- [Learn about Services](./services.md)
- [Understand Plugins](./plugins.md)
- [Configure Consumer Groups](./consumer-groups.md) 