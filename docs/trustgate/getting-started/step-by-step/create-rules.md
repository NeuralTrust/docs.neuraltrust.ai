---
sidebar_position: 7
title: Create Rules
---

# Create Rules

This guide will walk you through creating rules in TrustGate. Rules determine how incoming requests are matched and routed to your services.

## Prerequisites

Before you begin, make sure you have:
- TrustGate installed and running
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
# Exact matching
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
    "path": "/v1/chat/*",
    "methods": ["POST"],
    "strip_path": true,
    "preserve_host": true
  }'
```

## Step 4: Create a Rule with token rate limiting enabled at rule level:

```bash
# Token rate limiting
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/rules \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "{service-id}",
    "path": "/limited/chat/completions",
    "methods": ["POST"],
    "strip_path": false,
    "preserve_host": false,
    "plugins_chain": [
      {
        "name": "token_rate_limiter",
        "enabled": true,
        "settings": {
          "tokens_per_request": 20,
          "tokens_per_minute": 100,
          "bucket_size": 1000,
          "requests_per_minute": 60
        }
      }
    ]
  }'
```

## Step 5: Verify Rules

Check that your rules are properly configured:

```bash
curl http://localhost:8080/api/v1/gateways/{gateway-id}/rules
```

## Step 6: Test the Rules

Test your rule configurations:

**Host Header:** You need to set the `Host` header to the subdomain of your gateway in case you are running locally.

**API Key:** You need to set the `x-api-key` header to the API key of your gateway, that you created in the [first gateway](./first-gateway.md) step.

:::note
You can also test the rule by sending a request to the `/limited/chat/completions` path. If you have enabled the token rate limiting plugin at rule level, you need to add `stream_options` if you want to stream the response.
:::

```bash
# Test a route
curl -X POST http://localhost:8080/limited/chat/completions \
  -H "Content-Type: application/json" \
  -H "Host: my-first-gateway.example.com" \
  -H "x-api-key: your-key" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello"}],
    "stream": true,
    "stream_options": {
      "include_usage": true
    },
    "max_tokens": 1024
  }'
```

## Next Steps

Now that you have configured your rules, read more about:
- Learn about [Load Balancing](./load-balancing.md)
- Explore [Rate Limiting](./rate-limiting.md)

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