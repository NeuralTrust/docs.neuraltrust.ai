---
sidebar_position: 7
title: Create Rules
---

# Create Rules

This guide will walk you through creating rules in AI Gateway. Rules determine how incoming requests are matched and routed to your services.

## Prerequisites

Before you begin, make sure you have:
- AI Gateway installed and running
- A service configured (see [Add a Service](./add-service.md))
- Access to the Admin API

## Step 1: Plan Your Rules

Decide on your rule configuration:
1. Choose the paths to match
2. Determine allowed HTTP methods
3. Plan path handling (strip path, preserve host)
4. Identify target service

## Step 2: Create a Rule

Create your first rule using the Admin API:

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "{service-id}",
    "path": "/v1/chat/completions",
    "methods": ["POST"],
    "strip_path": false,
    "preserve_host": false
  }'
```

## Step 3: Add Path Matching

Create rules with different path matching patterns:

```bash
# Prefix matching
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "{service-id}",
    "path": "/api/v1/*",
    "methods": ["GET", "POST"],
    "strip_path": true
  }'

# Exact matching
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "{service-id}",
    "path": "=/v1/models",
    "methods": ["GET"]
  }'
```

## Step 4: Configure Headers

Add header matching if needed:

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "{service-id}",
    "path": "/v1/embeddings",
    "methods": ["POST"],
    "headers": {
      "content-type": ["application/json"]
    }
  }'
```

## Step 5: Verify Rules

Check that your rules are properly configured:

```bash
curl http://localhost:8080/api/v1/gateways/{gateway-id}/rules
```

## Step 6: Test the Rules

Test your rule configurations:

```bash
# Test a route
curl -X POST http://your-gateway-domain/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-key" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

## Next Steps

Now that you have configured your rules:
- [Enable Plugins](./enable-plugins.md) for additional functionality
- Learn about [Traffic Management](../concepts/traffic-management.md)
- Explore [Consumer Groups](../concepts/consumer-groups.md)

## Troubleshooting

Common issues and solutions:

1. **Routing Issues**
   - Verify path patterns
   - Check method restrictions
   - Review rule priorities

2. **Path Handling**
   - Check strip_path setting
   - Verify preserve_host
   - Test path transformations

3. **Header Problems**
   - Verify header requirements
   - Check header values
   - Test header matching 