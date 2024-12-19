---
sidebar_position: 4
---

# Proxy API (Port 8081)
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




