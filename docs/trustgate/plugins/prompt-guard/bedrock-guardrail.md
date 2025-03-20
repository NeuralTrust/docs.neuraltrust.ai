---
sidebar_position: 1
---

# AWS Bedrock Guardrail

## Overview
The **AWS Bedrock Guardrail** plugin is a robust content filtering system that leverages Amazon Bedrock's guardrail capabilities to protect your AI gateway. It provides comprehensive content moderation through Amazon's pre-trained models and customizable guardrails, ensuring that content passing through your gateway adheres to specified policies and guidelines.

The plugin integrates seamlessly with AWS Bedrock's guardrail system, which offers three primary types of protection:
- **Topic Policy**: Controls allowed and disallowed topics
- **Content Policy**: Filters potentially harmful or inappropriate content
- **Sensitive Information Policy**: Detects and protects against exposure of sensitive data

Each policy type can be configured through AWS Bedrock's guardrail configuration, making this plugin highly flexible and adaptable to various use cases and security requirements.

## Features
1. **Topic-based Filtering**:
   - Block specific topics or subject matters
   - Customizable topic policies
   - Fine-grained control over allowed content

2. **Content Moderation**:
   - Detection of harmful content
   - Customizable content policies
   - Multiple filter types for different content categories

3. **PII Protection**:
   - Detection of sensitive information
   - Protection against data leakage
   - Customizable PII entity types

4. **Action Configuration**:
   - Customizable block messages
   - Detailed error reporting
   - Comprehensive logging

## Configuration Examples

### Basic Configuration
The basic configuration provides essential content filtering with a specified guardrail:

```json
{
    "settings": {
        "guardrail_id": "<your-guardrail-id>",
        "version": "1",
        "actions": {
            "message": "%s"
        }
    }
}
```

Key components of the basic configuration:

<h4 align="center"><strong><u>Configuration Parameters</u></strong></h4>

| Parameter | Description | Required |
|-----------|-------------|----------|
| guardrail_id | AWS Bedrock Guardrail identifier | Yes |
| version | Guardrail version (defaults to "1") | No |
| actions.message | Custom message template for blocked content | No |

### Security-Focused Configuration
For environments requiring strict security controls:

```json
{
    "settings": {
        "guardrail_id": "<your-guardrail-id>",
        "version": "2",
        "actions": {
            "message": "Security violation detected: %s. This incident has been logged."
        }
    }
}
```

## Example Use Cases

### 1. Content Moderation Gateway
Create a gateway that moderates content using AWS Bedrock's guardrails:

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bedrock Guardrail Gateway",
    "subdomain": "bedrock-guard",
    "required_plugins": [
        {
            "name": "bedrock_guardrail",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "guardrail_id": "<your-guardrail-id>",
                "version": "1",
                "actions": {
                    "message": "%s"
                }
            }
        }
    ]
}'
```

Test with safe content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: bedrock-guard.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: text/plain" \
    -d "The latest deployment includes performance improvements and bug fixes."

# Expected Response: 200 OK
```

Test with policy violation:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: bedrock-guard.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: text/plain" \
    -d "I dont like obama"

# Expected Response: 403 Forbidden
# Message: "Content blocked: Potentially harmful content detected"
```

### 2. Topic Policy Protection
The topic policy feature allows you to control which subjects or topics are allowed or denied in the content. When a topic is blocked, the plugin will return a specific error message indicating which topic violated the policy.

Example configuration focusing on topic policies:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Topic Protection Gateway",
    "subdomain": "topic-protection",
    "required_plugins": [
        {
            "name": "bedrock_guardrail",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "guardrail_id": "<your-guardrail-id>",
                "version": "1",
                "actions": {
                    "message": "Topic policy violation"
                }
            }
        }
    ]
}'
```

### 3. Sensitive Information Protection
The plugin can detect and block content containing sensitive information such as PII (Personally Identifiable Information):

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "PII Protection Gateway",
    "subdomain": "pii-protection",
    "required_plugins": [
        {
            "name": "bedrock_guardrail",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "guardrail_id": "<your-guardrail-id>",
                "version": "1",
                "actions": {
                    "message": "Sensitive information detected"
                }
            }
        }
    ]
}'
```

## Best Practices

### 1. Guardrail Configuration

• Use appropriate guardrail IDs for your use case

• Test guardrails thoroughly before deployment

• Keep guardrail versions consistent across environments

### 2. Error Handling

• Implement descriptive error messages

• Log policy violations appropriately

• Review and update policies regularly

### 3. Performance Optimization

• Use appropriate AWS region for reduced latency

## Performance Considerations

The AWS Bedrock Guardrail plugin is designed for optimal performance while providing robust content filtering capabilities. The plugin maintains a single AWS client instance per plugin instance, reducing the overhead of creating new connections for each request. The implementation includes efficient error handling and logging mechanisms to ensure reliable operation in production environments.

Key performance features include:
- Efficient AWS client management
- Optimized request handling
- Comprehensive logging for debugging
- Minimal memory footprint
- Fast response times for content evaluation

The plugin's architecture supports concurrent processing with low latency, making it suitable for high-throughput environments. The integration with AWS Bedrock's guardrail system ensures that content evaluation is performed quickly and efficiently, with minimal impact on overall system performance. 