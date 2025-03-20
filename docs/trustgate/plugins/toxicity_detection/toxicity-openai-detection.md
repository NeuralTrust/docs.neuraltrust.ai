---
sidebar_position: 6
---

# OpenAI Toxicity Detection

## Technical Overview
The OpenAI Toxicity Detection plugin implements real-time content moderation using OpenAI's moderation API. It processes both text and image content through a multi-stage analysis pipeline.

### Core Components

1. **Content Extractor**
   - Processes multiple message types
   - Handles text and image URL content
   - Supports structured message formats
   - Maintains content context

2. **Moderation Engine**
   - Real-time API integration
   - Batch processing capability
   - Configurable thresholds
   - Category-specific scoring

3. **Response Analyzer**
   - Score evaluation
   - Threshold comparison
   - Category aggregation
   - Detailed violation reporting

## Implementation Details

### Message Processing
The plugin processes messages in the following format:
```json
{
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "message content"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://example.com/image.jpg"
                    }
                }
            ]
        }
    ]
}
```

### Content Types
1. **Text Content**
   - Direct text analysis
   - Multi-message support
   - UTF-8 encoding
   - Length validation

2. **Image Content**
   - URL-based processing
   - Image format validation
   - Size restrictions
   - Accessibility checks

### Moderation Categories

The plugin supports comprehensive content analysis across multiple categories:

| Category | Description | Implementation Details |
|----------|-------------|------------------------|
| Sexual | Sexual content detection | - Base category scoring  \n- Sub-category detection  \n- Context analysis |
| Violence | Violence and threats | - Direct violence detection  \n- Graphic content analysis  \n- Threat assessment |
| Hate | Hate speech and bias | - Bias detection  \n- Discriminatory content  \n- Hate speech patterns |
| Self-harm | Self-harm content | - Intent detection  \n- Instruction filtering  \n- Risk assessment |
| Harassment | Harassment detection | - Personal attacks  \n- Threatening behavior  \n- Bullying patterns |
| Illicit | Illegal activity | - Criminal content  \n- Prohibited activities  \n- Legal compliance |

### API Integration

The plugin integrates with OpenAI's moderation API:

1. **Request Formation**
```json
{
    "input": [
        {
            "type": "text",
            "text": "content to moderate"
        }
    ],
    "model": "omni-moderation-latest"
}
```

2. **Response Processing**
```json
{
    "id": "modr-123",
    "model": "omni-moderation-latest",
    "results": [
        {
            "flagged": true,
            "categories": {
                "sexual": false,
                "violence": true
            },
            "category_scores": {
                "sexual": 0.01,
                "violence": 0.92
            }
        }
    ]
}
```

### Error Handling

The plugin implements comprehensive error handling:

1. **Configuration Validation**
   - API key verification
   - Action type validation
   - Threshold validation
   - Category validation

2. **Runtime Error Handling**
   - API connection errors
   - Response parsing errors
   - Timeout handling
   - Rate limit management

3. **Content Processing Errors**
   - Invalid content format
   - Missing required fields
   - Size limit violations
   - Encoding issues

### Performance Optimizations

1. **Request Processing**
   - Batch message processing
   - Efficient JSON parsing
   - Minimal memory allocation
   - Request pooling

2. **Response Handling**
   - Streaming response processing
   - Efficient score calculation
   - Early termination
   - Result caching

## Configuration Reference

### Required Settings
```json
{
    "openai_key": "YOUR_API_KEY",
    "actions": {
        "type": "block",
        "message": "Content violation detected"
    },
    "categories": ["sexual", "violence", "hate"],
    "thresholds": {
        "sexual": 0.3,
        "violence": 0.5,
        "hate": 0.4
    }
}
```

### Advanced Options
- Custom error messages
- Category-specific actions
- Threshold adjustments
- Logging configuration

## Monitoring and Metrics

The plugin provides detailed monitoring capabilities:
- Request/response logging
- Category score tracking
- Error rate monitoring
- Performance metrics

## Features
| Feature | Capabilities |
|---------|-------------|
| Multi-Category Detection | • Comprehensive content analysis across multiple categories (sexual, violence, hate, etc.)  <br/>• Real-time detection with configurable sensitivity levels  <br/>• Customizable thresholds per category |
| Flexible Actions | • Configurable response actions  <br/>• Custom error messages  <br/>• Block or allow decisions |
| OpenAI Integration | • Powered by OpenAI's moderation API  <br/>• Real-time content analysis  <br/>• High accuracy detection |
| Request Stage Processing | • Pre-request content analysis  <br/>• Configurable priority in plugin chain  <br/>• Non-blocking architecture |

## How It Works

### Content Analysis
The plugin analyzes incoming requests by examining both text and image content for various types of toxic or inappropriate material. For text content, it processes the content directly through OpenAI's moderation API. For images, it can analyze image URLs provided in the request. The results are evaluated against configured thresholds:

```json
// Example Request Content - Text
{
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Let's discuss this topic respectfully"
                }
            ]
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


This configuration:

• Focuses solely on **violence detection**

• Sets a moderate threshold of **0.5** for violent content

• Provides a **specific error message** for violent content

• Enables warning-level **logging** for **monitoring**

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


## Performance Considerations

The Toxicity Detection plugin uses a straightforward **HTTP client** implementation to interact with OpenAI's moderation API. The plugin processes requests sequentially, making direct API calls to OpenAI's moderation endpoint for each incoming request. The implementation includes comprehensive **logging** at various levels (debug, info, error) to help track and diagnose the plugin's behavior.

The plugin performs efficient **JSON processing** by unmarshaling only the required fields from the request and response bodies. It concatenates multiple messages with newlines when needed and processes them in a single API call to OpenAI, which helps reduce the number of API requests when handling multi-message content.

The plugin's architecture is designed to be **lightweight**, with minimal memory overhead as it doesn't maintain any state between requests. However, be aware that each request will incur the latency of an HTTP call to OpenAI's API. Consider this when planning your rate limits and timeout configurations, as the total processing time will largely depend on OpenAI's API response time. 