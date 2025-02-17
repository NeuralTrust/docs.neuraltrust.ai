---
sidebar_position: 7
title: Consumer Groups
---

# Consumer Groups

A consumer group in AI Gateway allows you to organize and manage consumers (API users) collectively. This enables you to apply plugins and policies to multiple consumers at once, making it easier to manage access control and rate limiting for different types of users.

## Group Structure

A consumer group consists of:
- Name: A unique identifier for the group
- Consumers: List of consumers in the group
- Plugins: Plugins applied to all consumers in the group

## Group-level Plugins

Plugins applied to a consumer group affect all consumers in that group, providing efficient management of shared configurations:

### Rate Limiting
Rate limiting at the group level provides sophisticated traffic control mechanisms. The system implements **shared quotas across group** members, allowing for efficient resource allocation and preventing any single consumer from monopolizing resources. **Group-specific limits** can be configured to match different service tiers or business requirements, enabling granular control over API usage. The system also supports the ability to **override individual limits** when necessary, providing flexibility while maintaining group-level control. This hierarchical approach to rate limiting ensures fair resource distribution while accommodating specific needs of individual consumers.

### Authentication
Group-level authentication streamlines access management across multiple consumers. The system supports **group-wide authentication** mechanisms that apply uniformly to all group members, simplifying security management. **Shared credentials** can be configured for the entire group, reducing administrative overhead while maintaining security. Sophisticated **access control policies** can be implemented at the group level, enabling consistent security rules across all group members. This centralized approach to authentication ensures consistent security practices while simplifying management of multiple consumers.

### Usage Control
Usage control at the group level enables comprehensive resource management. The system implements **aggregate quotas** that apply across all group members, allowing for efficient resource allocation and monitoring. **Group-level policies** can be established to govern various aspects of API usage, from access patterns to resource consumption. Sophisticated **resource allocation** mechanisms ensure fair distribution of resources among group members while maintaining overall system stability. This approach to usage control provides both flexibility and control in managing API consumption across multiple consumers.

## Plugin Inheritance

Consumer groups follow a specific plugin inheritance pattern that ensures proper configuration precedence and flexibility:

### Priority Order
The system implements a sophisticated hierarchical inheritance model for plugin configurations. At the most granular level, **consumer-specific plugins** take highest precedence, allowing for individual customization when needed. Next in the hierarchy are **consumer group plugins**, which provide shared configurations for all members of a group. **Route plugins** follow in precedence, enabling path-specific behavior across all consumers. **Service plugins** provide the next layer of configuration, applying to all routes within a service. Finally, **gateway plugins** establish the baseline configuration that applies across the entire system. This carefully structured hierarchy ensures that configurations can be appropriately scoped while maintaining a clear order of precedence.

### Plugin Merging
The plugin merging system implements intelligent configuration combination rules. Following the principle that **more specific settings override general ones**, the system ensures that lower-level configurations can customize or override higher-level defaults when necessary. While **group settings can be overridden** by more specific configurations, they still provide a powerful way to establish default behavior for all group members. The system also includes sophisticated **multiple groups handling** capabilities, allowing for complex scenarios where consumers might belong to multiple groups with potentially overlapping configurations. This merging strategy provides both flexibility and predictability in how different levels of configuration interact.

This inheritance model creates a powerful and flexible system for managing plugin configurations across different scopes while maintaining clear rules about how these configurations combine and override each other. The hierarchical approach ensures that administrators can implement both broad policies and specific customizations as needed, while the merging rules provide predictable and manageable behavior when configurations from different levels interact.

## Use Cases

Common consumer group scenarios:

1. **Tiered Access**
   - Premium tier with higher limits
   - Standard tier with basic access
   - Trial tier with restrictions

2. **Team Organization**
   - Development teams
   - Testing environments
   - Production access

## Best Practices

1. **Group Organization**
   - Use logical groupings
   - Keep groups focused
   - Document group purposes
   - Maintain clear hierarchy

2. **Plugin Configuration**
   - Configure appropriate limits
   - Set sensible defaults
   - Document overrides
   - Plan resource allocation

3. **Access Control**
   - Regular access review
   - Document permissions
   - Audit group membership
   - Maintain security

## Next Steps

- [Learn about Plugins](./plugins.md)
- [Understand Services](./services.md)
- [Configure Rules](./rules.md)

