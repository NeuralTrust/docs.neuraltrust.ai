---
sidebar_position: 7
---

# Azure Toxicity Detection

## Overview
The **Azure Toxicity Detection**  plugin is an advanced content moderation layer that leverages Azure's Content Safety API [Azure Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview) to analyze and filter potentially harmful content in both text and images. This plugin provides comprehensive content analysis across multiple categories and supports both text-based and image-based content moderation.

The plugin features a sophisticated multi-category detection system that can identify various types of inappropriate content, with configurable severity levels for each category:

| Category | Description |
|----------|-------------|
| Hate | Content expressing hatred or discrimination |
| Violence | Content depicting or promoting violence |
| SelfHarm | Content related to self-harm behaviors |
| Sexual | Sexually explicit or inappropriate content |

Each category can be individually configured with specific severity thresholds, allowing for fine-grained control over content moderation policies. The plugin supports two output types for severity levels:



<table>
  <tr>
    <th>Severity Level Description</th>
    <th>FourSeverityLevels</th>
    <th>EightSeverityLevels</th>
  </tr>
  <tr>
    <td rowspan="2">Safety/Very Low Risk Content</td>
    <td rowspan="2">0</td>
    <td rowspan="1"> 0 </td>
  </tr>
  <tr>
    <td>1</td>
  </tr>
    <tr>
    <td rowspan="2">Low Risk Content</td>
    <td rowspan="2">2</td>
    <td rowspan="1"> 2 </td>
  </tr>
  <tr>
    <td>3</td>
  </tr>

  <tr>
    <td rowspan="2">Medium Risk Content</td>
    <td rowspan="2">4</td>
    <td rowspan="1"> 4 </td>
  </tr>
  <tr>
    <td>5</td>
  </tr>
  <tr>
    <td rowspan="2">High Risk Content</td>
    <td rowspan="2">6</td>
    <td rowspan="1"> 6 </td>
  </tr>
  <tr>
    <td>7</td>
  </tr>
  
</table>


## Features

### Content Analysis Capabilities
The Azure Toxicity Detection plugin offers comprehensive content analysis features:

• **Multi-Modal Analysis**: Supports both text and image content analysis, enabling comprehensive content screening across different media types. The plugin processes text inputs for harmful language and analyzes images for inappropriate visual content, providing a unified moderation solution for mixed-media applications

• **Configurable Categories**: Flexible category selection and threshold configuration, allowing for tailored content moderation policies

• **Severity Level Control**: Two output types for different granularity needs, providing flexibility in how content is evaluated and acted upon

• **Custom Actions**: Configurable response actions and error messages, allowing for tailored responses to detected content violations

• **Content Path Specification**: Flexible content extraction from various request formats, enabling precise content extraction from different request types

### Performance and Integration
The Azure Toxicity Detection plugin is engineered for seamless **integration** and highly efficient **operation** in production environments. It provides **real-time** content evaluation capabilities through its immediate analysis system, allowing for instant moderation decisions. The plugin implements configurable endpoints that enable separate processing paths for both text and image content, ensuring optimal handling of different content types. This architecture supports rapid content screening while maintaining high performance standards.

The plugin delivers comprehensive analysis results through detailed **response** data that includes precise **severity** scores across all configured categories. These detailed insights enable informed **decision-making** based on content risk levels. Additionally, the system incorporates robust **error** handling and logging mechanisms that ensure reliable operation even under challenging conditions, maintaining system stability while providing clear visibility into the moderation process. The combination of detailed analytics and dependable error management makes the plugin a reliable choice for content moderation needs.

## Configuration

### Basic Configuration
Here's a basic configuration example that enables both text and image content moderation:

```json
{
    "name": "toxicity_azure",
    "enabled": true,
    "stage": "pre_request",
    "priority": 1,
    "settings": {
        "api_key": "${AZURE_API_KEY}",
        "endpoints": {
            "text": "https://your-region.api.cognitive.microsoft.com/contentsafety/text/analyze",
            "image": "https://your-region.api.cognitive.microsoft.com/contentsafety/image/analyze"
        },
        "output_type": "FourSeverityLevels",
        "content_types": [
            {
                "type": "text",
                "path": "text"
            },
            {
                "type": "image",
                "path": "image_data"
            }
        ],
        "actions": {
            "type": "block",
            "message": "Content violates safety guidelines"
        },
        "category_severity": {
            "Hate": 2,
            "Violence": 2,
            "SelfHarm": 2,
            "Sexual": 2
        }
    }
}
```

This basic configuration establishes a comprehensive **content moderation** setup that processes both text and image content through Azure's Content Safety API. It operates at the **pre-request** stage with priority 1, ensuring content is analyzed before reaching your application. The configuration uses the **FourSeverityLevels** system with a conservative threshold of 2 across all categories, meaning it will flag content that presents even low-risk concerns. The content_types setting enables the plugin to extract content from specific JSON paths in the request body, with 'text' being extracted from the 'text' field and image content from the 'image_data' field. When violations are detected, the plugin blocks the request and returns a clear **violation message**, providing immediate feedback to users about content policy violations.

### Configuration Parameters

#### **_Essential Settings_**
• <code>API_KEY</code>: Your Azure Content Safety API key

• <code>ENDPOINTS</code>: Configuration for text and image analysis endpoints

  • <code>TEXT</code>: Azure endpoint for text content analysis

  • <code>IMAGE</code>: Azure endpoint for image content analysis

• <code>OUTPUT_TYPE</code>: Severity level format ("FourSeverityLevels" or "EightSeverityLevels")

#### **_Content Type Configuration_**
• <code>CONTENT_TYPES</code>: Array of content type configurations

  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;• <code>TYPE</code>: Content type ("text" or "image")

  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;• <code>PATH</code>: JSON path to extract content from request

#### **_Category Settings_**
• <code>CATEGORY_SEVERITY</code>: Threshold configuration for each category

  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;• Values for FourSeverityLevels: 0, 2, 4, or 6

  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;• Values for EightSeverityLevels: 0 to 7

#### **_Action Configuration_**
• <code>ACTIONS</code>: Response configuration for detected violations

  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;• <code>TYPE</code>: Action type (e.g., "block")

  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;• <code>MESSAGE</code>: Custom error message

### Advanced Configuration
Here's an example of a more detailed configuration with custom severity levels:

```json
{
    "name": "toxicity_azure",
    "enabled": true,
    "stage": "pre_request",
    "priority": 1,
    "settings": {
        "api_key": "${AZURE_API_KEY}",
        "endpoints": {
            "text": "${AZURE_TEXT_ENDPOINT}",
            "image": "${AZURE_IMAGE_ENDPOINT}"
        },
        "output_type": "EightSeverityLevels",
        "content_types": [
            {
                "type": "text",
                "path": "text"
            },
            {
                "type": "image",
                "path": "image_data"
            }
        ],
        "actions": {
            "type": "block",
            "message": "Content violates our community guidelines"
        },
        "category_severity": {
            "Hate": 3,
            "Violence": 4,
            "SelfHarm": 2,
            "Sexual": 5
        }
    }
}
```

## Usage Examples

### Text Content Analysis
Here's an example of analyzing text content:

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "text": "This is a test message for content analysis"
    }'
```

### Image Content Analysis
Example of analyzing an image:

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "image_data": "BASE64_ENCODED_IMAGE_CONTENT"
    }'
```

## Response Format
The plugin provides detailed analysis results in its response:

```json
{
    "analysis_results": [
        {
            "category": "Hate",
            "severity": 1,
            "severityLevel": 2
        },
        {
            "category": "Violence",
            "severity": 0,
            "severityLevel": 2
        }
    ],
    "is_blocked": false,
    "blocked_categories": []
}
```

## Best Practices

### Configuration Guidelines
When configuring the Azure Toxicity Detection plugin, consider these practices:

• **API Key Security**: Always use environment variables for the API key. Store sensitive credentials in a secure environment file (.env) and never commit them to version control. Implement proper key rotation and access control policies.

• **Endpoint Configuration**: Use region-specific endpoints for better performance. Choose the Azure endpoint closest to your application's geographic location. Consider implementing endpoint failover for high availability scenarios.

• **Severity Thresholds**: Start with conservative thresholds and adjust based on needs. Monitor false positives and gradually tune thresholds based on real usage patterns. Document threshold changes and their impact on detection accuracy.

• **Content Paths**: Configure precise content paths to ensure accurate content extraction. Map your application's content structure carefully and validate path configurations. Regularly test path configurations with different content types.

### Performance Optimization
To optimize the plugin's performance:

• **Request Size**: Keep image sizes reasonable to improve response times. Implement client-side image compression before upload. Consider setting maximum size limits and providing feedback to users when exceeded.

• **Content Type Selection**: Only enable needed content types. Disable unused content type analyzers to reduce processing overhead. Review and update enabled content types based on your application's requirements.
    
• **Category Selection**: Configure only necessary categories for analysis. Focus on categories relevant to your use case to minimize processing time. Regularly review category effectiveness and remove unused ones.

• **Error Handling**: Implement appropriate error handling in your application. Set up retry mechanisms for transient failures and graceful degradation. Provide meaningful error messages to end users while logging detailed information for debugging.

## Error Handling
The plugin provides detailed error information in case of issues:

• **Invalid Configuration**: Clear error messages for configuration problems. Includes specific validation errors for each configuration parameter. Provides guidance on how to correct common configuration mistakes.

• **API Errors**: Detailed Azure API error responses. Includes error codes, descriptions, and recommended actions. Maintains correlation IDs for tracking issues across systems.

• **Content Extraction**: Specific errors for content extraction issues. Details about file format problems, encoding issues, or size limitations. Suggests appropriate content formatting requirements.

• **Threshold Violations**: Detailed information about blocked content. Includes specific categories and severity scores that triggered the block. Provides context for content moderation decisions.
