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

Rules determine how requests are matched to services through three main matching mechanisms:

### Path Matching
The path matching system provides multiple strategies for routing requests based on URL patterns. **Exact path matching** provides the most precise control, ensuring requests match specific URLs exactly as configured. For more flexible routing, the system supports **prefix matching with wildcards**, allowing a single rule to capture multiple similar paths. More complex routing needs can be addressed using **regular expression patterns**, enabling sophisticated pattern matching for special use cases. The system employs **priority-based selection** when multiple patterns match, ensuring the most specific and appropriate rule is selected for each request.

### Method Matching
Method matching controls how HTTP methods are handled for each route. Rules can be configured to accept **specific HTTP methods**, ensuring endpoints only respond to intended operations. The system supports **multiple method support**, allowing a single rule to handle different types of requests on the same path. Administrators can implement **method restrictions** to limit which HTTP operations are allowed, providing an additional layer of security and control over API access.

### Header Matching
Header matching provides advanced request routing based on HTTP headers. Rules can **match based on headers**, allowing routing decisions to be made on factors like API versions, client types, or custom metadata. The system includes **support for multiple headers**, enabling complex routing scenarios based on combinations of header values. **Regular expression patterns** can be applied to header values, providing flexible matching capabilities for complex header-based routing requirements.

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

When multiple rules match a request, the AI Gateway employs a sophisticated priority system to determine which rule should be applied:

### Exact Match Priority
The system prioritizes precision and specificity in path matching to ensure the most appropriate rule is selected. **Exact paths take precedence** over pattern-based matches, providing the highest level of routing precision. When comparing similar paths, the system follows a length-based hierarchy where **longer paths are preferred over shorter** ones, as they typically represent more specific endpoints. This approach ensures that **more specific matches win** in cases where multiple rules could apply, preventing ambiguous routing situations and maintaining precise control over request handling.

### Method Specificity
HTTP method matching follows a clear hierarchy in determining rule priority. Rules with **method-specific rules** are given higher priority, as they represent more precisely defined routing intentions. At the lowest priority level are rules with **ALL methods**, providing a catch-all mechanism for general routing scenarios. The system ensures that **explicit methods take precedence over wildcards**, allowing for precise method-based routing while maintaining flexibility through wildcard rules when needed. This hierarchical approach to method matching ensures that requests are handled by the most specifically defined rules while still providing fallback options for more general cases.

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