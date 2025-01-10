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

## Step 3: Configure Service Options

Set additional service options:

```bash
curl -X PATCH http://localhost:8080/api/v1/gateways/{gateway-id}/services/{service-id} \
  -H "Content-Type: application/json" \
  -d '{
    "connect_timeout": 60000,
    "write_timeout": 60000,
    "read_timeout": 60000,
    "retries": 5
  }'
```

## Step 4: Add Authentication

Configure service authentication (if required):

```bash
curl -X POST http://localhost:8080/api/v1/gateways/{gateway-id}/services/{service-id}/plugins \
  -H "Content-Type: application/json" \
  -d '{
    "name": "key-auth",
    "config": {
      "key_names": ["x-api-key"]
    }
  }'
```

## Step 5: Verify Configuration

Check that your service is properly configured:

```bash
curl http://localhost:8080/api/v1/gateways/{gateway-id}/services/{service-id}
```

## Step 6: Test the Service

Verify that the service is working:

```bash
curl http://localhost:8080/api/v1/gateways/{gateway-id}/services/{service-id}/health
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

2. **Authentication Problems**
   - Verify API keys
   - Check plugin configuration
   - Review access policies

3. **Performance Issues**
   - Check timeout values
   - Verify retry settings
   - Monitor service health 