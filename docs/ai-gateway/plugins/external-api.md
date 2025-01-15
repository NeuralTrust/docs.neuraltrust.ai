---
sidebar_position: 1
title: External API Plugin
---

# External API

The External API plugin enables TrustGate to integrate with external validation and transformation services through HTTP endpoints. This plugin is particularly useful for implementing custom validation logic, content moderation, or data transformation workflows.

## Overview

The External API plugin allows you to:
- Make HTTP requests to external services during request processing
- Transform request data using field mappings
- Apply conditional logic based on external service responses
- Customize request headers and timeout settings

## Configuration

```json
{
  "name": "external_api",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "endpoint": "https://api.example.com/validate",
    "method": "POST",
    "timeout": "5s",
    "headers": {
      "Authorization": "Bearer your-token",
      "Custom-Header": "value"
    },
    "field_maps": [
      {
        "source": "input",
        "destination": "text"
      }
    ],
    "conditions": [
      {
        "field": "result.is_valid",
        "operator": "eq",
        "value": false,
        "stop_flow": true,
        "message": "Content validation failed"
      }
    ]
  }
}
```

### Configuration Parameters

#### Required Settings

- **endpoint**: The URL of the external service
- **stage**: Must be set to `pre_request`

#### Optional Settings

- **method**: HTTP method to use (default: "POST")
- **timeout**: Request timeout duration (default: "5s")
- **headers**: Custom headers to include in the request
- **field_maps**: Rules for mapping request fields to external API fields
- **conditions**: Validation rules based on the external API response

## Field Mapping

Field mappings define how request data is transformed before being sent to the external service:

```json
"field_maps": [
  {
    "source": "input",      // Field from the original request
    "destination": "text"   // Field name in the external API request
  }
]
```

## Conditions

Conditions define validation rules based on the external service's response:

```json
"conditions": [
  {
    "field": "result.is_valid",  // Response field to check (supports dot notation)
    "operator": "eq",            // Operator (eq, neq)
    "value": false,              // Expected value
    "stop_flow": true,           // Whether to block the request if condition matches
    "message": "Validation failed"  // Error message if request is blocked
  }
]
```

### Available Operators

- **eq**: Equal to
- **neq**: Not equal to
- **gt**: Greater than
- **lt**: Less than

## Response Handling

The plugin processes the external API response and:
1. Evaluates all configured conditions
2. Returns an error if any condition with `stop_flow: true` is met
3. Includes the response body in the plugin response for downstream processing

### Error Response

When validation fails, the plugin returns:

```json
{
  "statusCode": 422,
  "message": "Validation failed"
}
```

## Example: Content Moderation

```json
{
  "name": "external_api",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "endpoint": "https://moderation.example.com/check",
    "timeout": "3s",
    "headers": {
      "Authorization": "Bearer ${MODERATION_API_KEY}"
    },
    "field_maps": [
      {
        "source": "input",
        "destination": "content"
      }
    ],
    "conditions": [
      {
        "field": "moderation.flagged",
        "operator": "eq",
        "value": true,
        "stop_flow": true,
        "message": "Content violates content policy"
      }
    ]
  }
}
```

## Example: Custom Validation

```json
{
  "name": "external_api",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "endpoint": "https://validator.internal/check",
    "method": "POST",
    "timeout": "2s",
    "field_maps": [
      {
        "source": "input",
        "destination": "prompt"
      }
    ],
    "conditions": [
      {
        "field": "validation.score",
        "operator": "eq",
        "value": 0,
        "stop_flow": true,
        "message": "Input validation failed"
      }
    ]
  }
}
```

## Best Practices

1. **Timeout Configuration**
   - Set appropriate timeouts based on external service SLAs
   - Consider the impact on request latency
   - Use shorter timeouts for critical paths

2. **Error Handling**
   - Provide clear error messages in conditions
   - Consider fallback behavior when external service is unavailable
   - Monitor external service reliability

3. **Security**
   - Use environment variables for sensitive headers
   - Validate external service certificates
   - Implement proper authentication

4. **Performance**
   - Keep field mappings minimal
   - Use efficient condition evaluations
   - Monitor external service response times
