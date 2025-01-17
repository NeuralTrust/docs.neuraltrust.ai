---
sidebar_position: 5
---

# Data Masking

## Overview
The **Data Masking** plugin is a robust security layer designed to protect sensitive information in API responses. It employs a sophisticated combination of **keyword-based masking** and **regular expression pattern matching** to identify and mask sensitive data before it leaves the gateway.

The plugin features an intelligent **fuzzy matching system** that can detect variations of sensitive keywords, making it highly effective at catching potential data leaks even when the sensitive information is slightly modified or misspelled. This is achieved through the implementation of the **Levenshtein distance** algorithm, which calculates string similarity.

The **smart detection system** is case-insensitive and operates with a configurable **similarity threshold** (ranging from 0 to 1). By default, the threshold is set to **0.8**, providing an optimal balance between accurate detection and false positives. This means that words that are 80% similar to protected keywords will be masked, effectively catching common variations like typos or deliberate obfuscation attempts.

## Plugin Design
```go
type DataMaskingPlugin struct {
    logger     *logrus.Logger
    keywords   map[string]string         // map of keyword to mask value
    regexRules map[string]*regexp.Regexp // map of regex pattern to mask value
}

type Config struct {
    Rules []Rule `mapstructure:"rules"`
    SimilarityThreshold float64 `mapstructure:"similarity_threshold"`
}

type Rule struct {
    Pattern     string `mapstructure:"pattern"`      // Keyword or regex pattern
    Type        string `mapstructure:"type"`         // "keyword" or "regex"
    MaskWith    string `mapstructure:"mask_with"`    // Character or string to mask with
    PreserveLen bool   `mapstructure:"preserve_len"` // Whether to preserve the length of masked content
}
```

## How It Works
The plugin processes outgoing responses through a comprehensive masking pipeline. When a response is about to leave the gateway, it undergoes **content analysis**. The system processes the response content in two ways:

1. **Keyword-based Masking**:
   - Content is broken down into words
   - Each word is compared against protected keywords using fuzzy matching
   - Similar words are masked according to the rule configuration
   - Preserves length option maintains the original string length with mask characters

2. **Pattern-based Masking**:
   - Content is matched against regex patterns
   - Matched patterns are masked according to the rule configuration
   - Supports complex pattern matching for structured data like credit card numbers, emails, etc.

The **masking process** is highly configurable, allowing you to:
- Define custom mask characters or strings
- Preserve or modify the length of masked content
- Set different masking rules for different types of sensitive data
- Configure similarity thresholds for fuzzy matching

## Configuration Example
```json
{
    "settings": {
        "similarity_threshold": 0.8,
        "rules": [
            {
                "pattern": "credit_card",
                "type": "keyword",
                "mask_with": "****",
                "preserve_len": true
            },
            {
                "pattern": "\\b\\d{4}[-\\s]?\\d{4}[-\\s]?\\d{4}[-\\s]?\\d{4}\\b",
                "type": "regex",
                "mask_with": "X",
                "preserve_len": true
            },
            {
                "pattern": "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b",
                "type": "regex",
                "mask_with": "[MASKED_EMAIL]",
                "preserve_len": false
            }
        ]
    }
}
```

## Best Practices
When implementing the Data Masking plugin, consider these **important guidelines**:

1. **Rule Definition**:
   - Create specific, well-defined patterns for sensitive data
   - Use keyword rules for simple matches and regex for complex patterns
   - Test patterns thoroughly to ensure they catch all variations of sensitive data

2. **Masking Configuration**:
   - Choose appropriate mask characters that clearly indicate masked content
   - Consider preserving length for structured data (like credit card numbers)
   - Use descriptive masks for different types of data (e.g., [MASKED_EMAIL])

3. **Performance Considerations**:
   - Keep the number of rules manageable
   - Use regex patterns judiciously as they can impact performance
   - Monitor and adjust similarity threshold based on your needs

## Performance Optimization
The plugin is engineered for **high performance** while maintaining robust security. Several optimization strategies are implemented:

1. **Efficient Data Structures**:
   - Uses maps for O(1) keyword lookup
   - Pre-compiles regex patterns during initialization
   - Optimized string manipulation for masking operations

2. **Smart Processing**:
   - Processes content in a single pass where possible
   - Implements efficient fuzzy matching algorithm
   - Maintains minimal memory footprint

3. **Caching and Reuse**:
   - Caches compiled regex patterns
   - Reuses mask strings for similar patterns
   - Optimizes string allocations during masking

The plugin is designed to handle high-throughput scenarios while ensuring sensitive data is properly masked. The implementation balances security requirements with performance considerations, making it suitable for production environments where both data protection and response time are critical. 