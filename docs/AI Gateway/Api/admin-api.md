---
sidebar_position: 4
---



# Admin API (Port 8080)

1. Create a tenant:
```bash
curl -X POST http://localhost:8080/api/v1/tenants \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Company",
    "subdomain": "testcompany",
    "tier": "pro",
    "enabled_plugins": ["rate_limiter"],
    "required_plugins": {
      "security_validator": {
        "name": "security_validator",
        "enabled": true,
        "priority": 1,
        "stage": "pre_request",
        "settings": {
          "required_headers": ["X-Request-ID"]
        }
      }
    }
  }'
```


2. Create a forwarding rule:


```bash
curl -X POST http://localhost:8080/api/v1/tenants/{tenant_id}/rules \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -d '{
    "path": "/v1/chat/completions",
    "target": "https://api.openai.com",
    "methods": ["POST"],
    "strip_path": true,
    "plugin_chain": [
      {
        "name": "rate_limiter",
        "enabled": true,
        "priority": 1,
        "stage": "pre_request",
        "settings": {
          "limit": 100,
          "window": "1m"
        }
      }
    ]
  }'
```


## Proxy API (Port 8081)
Forward requests through the proxy::

    ```bash
curl -X POST http://testcompany.example.com:8081/v1/chat/completions \
  -H "Authorization: Bearer {api_key}" \
  -H "Content-Type: application/json" \
  -H "X-Request-ID: req-123" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
    ```




