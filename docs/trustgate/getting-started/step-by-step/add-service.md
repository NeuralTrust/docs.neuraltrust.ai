---
sidebar_position: 6
title: Configure a Service
---

# Configure a Service

This guide will walk you through adding your first service in AI Gateway. A service represents your backend API or AI model endpoint that you want to expose through the gateway.

## Prerequisites

Before you begin, make sure you have:
- AI Gateway installed and running
- An upstream configured (see [Configure an Upstream](./configure-upstream.md))
- Access to the Admin API

## Step 1: Plan Your Service

Decide on your service configuration:
1. Choose a meaningful name for your service
2. Determine which upstream to use
3. Plan your service type (e.g., OpenAI, Anthropic, Custom)
4. Identify required plugins

## Step 2: Create the Service

Create your service using the Admin API:

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/services \
  -H "Content-Type: application/json" \
  -d '{
    "name": "openai-service",
    "upstream_id": "{upstream-id}",
    "type": "openai",
    "description": "OpenAI API Service"
  }'
```

## Step 3: Verify Configuration

Check that your service is properly configured:

```bash
curl http://localhost:8080/api/v1/gateways/{gateway-id}/services/{service-id}
```


## Next Steps

Now that you have configured your service:
- [Create Rules](./create-rules.md) to route traffic to your service

## Troubleshooting

Common issues and solutions:

1. **Connection Issues**
   - Verify upstream is healthy
   - Check timeout settings
   - Review network connectivity
