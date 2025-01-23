---
sidebar_position: 6
---

# Toxicity Detection

## Overview
The **Toxicity Detection** plugin is a sophisticated content moderation layer designed to analyze and filter potentially harmful or inappropriate content in API requests. It leverages OpenAI's moderation API to detect various categories of toxic content and can be configured to take specific actions when such content is detected.



**Categories available in the [OpenAI Moderation API](https://platform.openai.com/docs/guides/moderation) for content analysis:**

| Sexual Content/Harassment | Violence              | Hate Speech         |
|----------------|-----------------------|--------------------   |
| sexual         | violence              | hate   |
| sexual/minors  | self-harm             | hate/threatening |
| harassment     | self-harm/intent      |  illicit|
| harassment/threatening      | violence/graphic      | -  |
|   -     | self-harm/instructions|  -|
| -     | illicit/violent      | -  |

Each category can be individually configured with specific thresholds, allowing for fine-grained control over content moderation policies.

For detailed information about each category and how the OpenAI Moderation API works, please refer to the [OpenAI Moderation Guide](https://platform.openai.com/docs/guides/moderation).

## Features
1. **Multi-Category Detection**:

   • Sexual content detection

   • Violence detection

   • Hate speech detection

   • Customizable thresholds per category

2. **Flexible Actions**:

   • Configurable response actions

   • Custom error messages

   • Block or allow decisions

3. **OpenAI Integration**:

   • Powered by OpenAI's moderation API

   • Real-time content analysis

   • High accuracy detection

4. **Request Stage Processing**:
   • Pre-request content analysis

   • Configurable priority in plugin chain

   • Non-blocking architecture

## How It Works

### Content Analysis
The plugin analyzes incoming requests by examining the content for various types of toxic or inappropriate material. It processes the content through OpenAI's moderation API and evaluates the results against configured thresholds:

```json
// Example Request Content
{
    "messages": [
        {
            "role": "user",
            "content": "Let's discuss this topic respectfully"
        }
    ]
}

// OpenAI Moderation API Response (Internal)
{
    "results": [
        {
            "category_scores": {
                "sexual": 0.0001,
                "violence": 0.0002,
                "hate": 0.0001
            }
        }
    ]
}
```

### Threshold Evaluation
Each category has its own configurable threshold. Content is blocked if any category's score exceeds its threshold:

```json
{
    "thresholds": {
        "sexual": 0.3,    // Block if sexual content score > 0.3
        "violence": 0.5,  // Block if violence score > 0.5
        "hate": 0.4      // Block if hate speech score > 0.4
    }
}
```

### Action Execution
Based on the evaluation results, the plugin can take configured actions:

```json
{
    "actions": {
        "type": "block",
        "message": "Content contains inappropriate content."
    }
}
```

## Configuration Examples

### Basic Configuration
A simple configuration that enables toxicity detection with default settings:

```json
{
    "name": "toxicity_detection",
    "enabled": true,
    "stage": "pre_request",
    "priority": 1,
    "settings": {
        "openai_key": "${OPENAI_API_KEY}",
        "actions": {
            "type": "block",
            "message": "Content contains inappropriate content."
        },
        "categories": [
            "sexual",
            "violence",
            "hate"
        ],
        "thresholds": {
            "sexual": 0.3,
            "violence": 0.5,
            "hate": 0.4
        }
    }
}
```

Key components of the basic configuration:

<h4 align="center"><strong><u>Plugin Settings</u></strong></h4>

| Property | Description | Required | Default |
|----------|-------------|----------|---------|
| `name` | Plugin identifier | Yes | "toxicity_detection" |
| `enabled` | Enable/disable plugin | Yes | true |
| `stage` | Processing stage | Yes | "pre_request" |
| `priority` | Plugin execution priority | Yes | 1 |

<h4 align="center"><strong><u>Category Thresholds</u></strong></h4>

| Category | Description | Default Threshold | Impact |
|----------|-------------|------------------|---------|
| `sexual` | Sexual content detection | 0.3 | Lower values = stricter filtering |
| `violence` | Violence detection | 0.5 | Higher values = more permissive |
| `hate` | Hate speech detection | 0.4 | Balance based on needs |

### Advanced Configuration
Extended configuration with custom thresholds and actions:

```json
{
    "name": "toxicity_detection",
    "enabled": true,
    "stage": "pre_request",
    "priority": 1,
    "settings": {
        "openai_key": "${OPENAI_API_KEY}",
        "actions": {
            "type": "block",
            "message": "Your message was blocked due to inappropriate content. Please revise and try again.",
            "log_level": "warning"
        },
        "categories": [
            "sexual",
            "violence",
            "hate"
        ],
        "thresholds": {
            "sexual": 0.2,
            "violence": 0.3,
            "hate": 0.25
        }
    }
}
```

The advanced configuration adds:

• Custom error messages provide detailed **feedback** to users when their content is blocked. These messages can be tailored to explain the specific **reason** for rejection while maintaining a professional tone. The customization allows organizations to align error messaging with their **communication** style and content policies.

• The configuration demonstrates **enhanced content moderation** by implementing **more restrictive thresholds** across all categories. These example thresholds (**0.2** for sexual content, **0.3** for violence, and **0.25** for hate speech) illustrate potential settings, but should be **carefully customized** based on your specific **use case** and **requirements**.

• The implementation includes **warning-level** logging capabilities that enhance monitoring by tracking blocked content attempts. This system provides comprehensive **visibility** into filter performance and effectiveness over time. Additionally, the logging system assists administrators in **fine-tuning** thresholds based on real-world usage patterns and results.

### Violence Detection Example
When you need to specifically focus on preventing violent content while allowing other types of content to pass through, you can configure the plugin to only check for violence. This is particularly useful for platforms that prioritize non-violent communication or need to maintain a safe environment for sensitive audiences.

```json
{
    "name": "toxicity_detection",
    "enabled": true,
    "stage": "pre_request",
    "priority": 1,
    "settings": {
        "openai_key": "${OPENAI_API_KEY}",
        "actions": {
            "type": "block",
            "message": "Your message was blocked because it contains violent content. Please revise your message to avoid violent language.",
            "log_level": "warning"
        },
        "categories": [
            "violence"
        ],
        "thresholds": {
            "violence": 0.5
        }
    }
}
```

This configuration:
• Focuses solely on violence detection
• Sets a moderate threshold of 0.5 for violent content
• Provides a specific error message for violent content
• Enables warning-level logging for monitoring

## Best Practices

### Threshold Configuration
1. **Content Policy Alignment**:

   • Set thresholds according to your content policy

   • Consider your audience and use case

   • Test thresholds with sample content

2. **Category Selection**:

   • Enable relevant categories for your use case

   • Consider regulatory requirements

   • Balance between safety and usability

3. **Performance Considerations**:

   • Set appropriate plugin priority

   • Consider API rate limits

   • Monitor response times

### Security Considerations
1. **API Key Management**:

   • Secure storage of OpenAI API key

   • Regular key rotation

   • Access control for configuration changes

2. **Logging and Monitoring**:

   • Enable appropriate logging

   • Monitor blocked content patterns

   • Regular threshold adjustments

### Example Usage

The following example demonstrates how to set up and test a toxicity detection gateway that moderates **sexual**, **violent**, and **hate speech** content using curl commands. We'll first create a gateway with the toxicity detection plugin configured, then test it with two different scenarios: one with safe content and another with content that should be blocked. This example uses default thresholds for all three categories (**sexual: 0.3**, **violence: 0.5**, **hate: 0.4**) and demonstrates both successful and blocked requests, helping you understand how the plugin behaves in real-world situations.

```bash
# Create a gateway with toxicity detection
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Toxicity Detection Gateway",
    "subdomain": "toxicity-test",
    "required_plugins": [
        {
            "name": "toxicity_detection",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "openai_key": "${OPENAI_API_KEY}",
                "actions": {
                    "type": "block",
                    "message": "Content contains inappropriate content."
                },
                "categories": ["sexual", "violence", "hate"],
                "thresholds": {
                    "sexual": 0.3,
                    "violence": 0.5,
                    "hate": 0.4
                }
            }
        }
    ]
}'

# Test with safe content
curl -X POST "http://localhost:8081/post" \
  -H "Host: toxicity-test.example.com" \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
        {
            "role": "user",
            "content": "Let us discuss dating and relationships in a respectful way"
        }
    ]
}'

# Test with inappropriate content (will be blocked)
curl -X POST "http://localhost:8081/post" \
  -H "Host: toxicity-test.example.com" \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
        {
            "role": "user",
            "content": "I will brutally murder you"
        }
    ]
}'
```

## Performance Considerations

The Toxicity Detection plugin employs **asynchronous** processing to ensure optimal performance during content analysis. By running moderation checks in parallel with other operations, the plugin minimizes the impact on request processing times. This design allows for efficient handling of multiple requests while maintaining **responsiveness** in high-traffic scenarios.

To optimize resource utilization, the plugin implements intelligent **caching** mechanisms and **rate limiting**. The caching system stores recent moderation results to prevent redundant API calls for similar content, while rate limiting ensures balanced usage of the OpenAI API. These optimizations help maintain consistent performance while managing costs and resource consumption.

The plugin's architecture is designed with **scalability** in mind, typically adding only 100-300ms to request processing time. This minimal latency is achieved through efficient memory management and optimized threshold configurations. The system's **throughput** remains stable even under heavy loads, making it suitable for production environments where performance is critical. 