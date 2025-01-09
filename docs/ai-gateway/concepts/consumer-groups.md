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

Plugins applied to a consumer group affect all consumers in that group:

1. **Rate Limiting**
   - Shared quotas across group
   - Group-specific limits
   - Override individual limits

2. **Authentication**
   - Group-wide authentication
   - Shared credentials
   - Access control policies

3. **Usage Control**
   - Aggregate quotas
   - Group-level policies
   - Resource allocation

## Plugin Inheritance

Consumer groups follow a specific plugin inheritance pattern:

1. **Priority Order**
   - Consumer-specific plugins
   - Consumer group plugins
   - Route plugins
   - Service plugins
   - Gateway plugins

2. **Plugin Merging**
   - More specific settings override general ones
   - Group settings can be overridden
   - Multiple groups handling

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

