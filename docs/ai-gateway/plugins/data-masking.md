---
sidebar_position: 5
---

# Data Masking

## Overview
The **Data Masking** plugin is a robust security layer designed to protect sensitive information in both API requests and responses. It employs a sophisticated combination of **keyword-based masking**, **regular expression pattern matching**, and **pre-defined entity detection** to identify and mask sensitive data before it leaves or enters the gateway.

The plugin features an intelligent **fuzzy matching system** that can detect variations of sensitive keywords, making it highly effective at catching potential data leaks even when the sensitive information is slightly modified or misspelled. This is achieved through the implementation of the **Levenshtein distance** algorithm, which calculates string similarity.

The **smart detection system** is case-insensitive and operates with a configurable **similarity threshold** (ranging from 0 to 1). By default, the threshold is set to **0.8**, providing an optimal balance between accurate detection and false positives. This means that words that are 80% similar to protected keywords will be masked, effectively catching common variations like typos or deliberate obfuscation attempts.

## Features
1. **Pre-defined Entity Masking**:
   - Built-in patterns for common sensitive data
   - Financial information (IBAN, SWIFT/BIC, crypto wallets)
   - Personal identifiers (SSN, tax ID)
   - Security credentials (passwords, API keys)
   - Easy enablement of standard protections
   - Customizable masking per entity

2. **Keyword-based Masking**:
   - Fuzzy matching for similar words
   - Configurable similarity threshold
   - Custom mask characters
   - Length preservation options

3. **Pattern-based Masking**:
   - Regular expression support
   - Complex pattern matching
   - Flexible masking rules
   - Support for structured data

4. **Bidirectional Protection**:
   - Request body masking (PreRequest stage)
   - Response body masking (PreResponse stage)
   - Configurable per stage

## Pre-defined Entities
The plugin comes with comprehensive support for various types of sensitive data:

### Financial Information
| Entity Type | Description | Default Mask | Pattern Example |
|------------|-------------|--------------|-----------------|
| credit_card | Credit card numbers | [MASKED_CC] | 4111-2222-3333-4444 |
| iban | International Bank Account Numbers | [MASKED_IBAN] | DE89370400440532013000 |
| swift_bic | SWIFT/BIC codes | [MASKED_BIC] | DEUTDEFF500 |
| bank_account | Bank account numbers | [MASKED_ACCOUNT] | 12345678901234 |
| crypto_wallet | Cryptocurrency addresses | [MASKED_WALLET] | 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa |
| routing_number | Bank routing numbers | [MASKED_ROUTING] | 123456789 |

### Personal Information
| Entity Type | Description | Default Mask | Pattern Example |
|------------|-------------|--------------|-----------------|
| email | Email addresses | [MASKED_EMAIL] | user@example.com |
| phone_number | Phone numbers | [MASKED_PHONE] | +1-555-123-4567 |
| ssn | Social Security Numbers | [MASKED_SSN] | 123-45-6789 |
| tax_id | Tax identification numbers | [MASKED_TAX_ID] | 12-3456789 |

### Security Credentials
| Entity Type | Description | Default Mask | Pattern Example |
|------------|-------------|--------------|-----------------|
| password | Password fields | [MASKED_PASSWORD] | password=secret123 |
| api_key | API keys | [MASKED_API_KEY] | api_key=abc123xyz |
| access_token | Access tokens | [MASKED_TOKEN] | bearer=xyz789abc |

## Plugin Design
```go
type DataMaskingPlugin struct {
    logger     *logrus.Logger
    keywords   map[string]string         // map of keyword to mask value
    regexRules map[string]*regexp.Regexp // map of regex pattern to mask value
}

type Config struct {
    Rules               []Rule          `mapstructure:"rules"`
    SimilarityThreshold float64         `mapstructure:"similarity_threshold"`
    PredefinedEntities  []EntityConfig  `mapstructure:"predefined_entities"`
}

type EntityConfig struct {
    Entity      string `mapstructure:"entity"`      // Pre-defined entity type
    Enabled     bool   `mapstructure:"enabled"`     // Whether to enable this entity
    MaskWith    string `mapstructure:"mask_with"`   // Optional custom mask
    PreserveLen bool   `mapstructure:"preserve_len"` // Whether to preserve length
}
```

## Configuration Example
```json
{
    "settings": {
        "similarity_threshold": 0.8,
        "predefined_entities": [
            {
                "entity": "credit_card",
                "enabled": true,
                "mask_with": "[MASKED_CC]",
                "preserve_len": false
            },
            {
                "entity": "iban",
                "enabled": true,
                "mask_with": "[MASKED_IBAN]",
                "preserve_len": false
            },
            {
                "entity": "swift_bic",
                "enabled": true,
                "mask_with": "[MASKED_BIC]",
                "preserve_len": false
            },
            {
                "entity": "crypto_wallet",
                "enabled": true,
                "mask_with": "[MASKED_WALLET]",
                "preserve_len": false
            }
        ],
        "rules": [
            {
                "pattern": "secret_key",
                "type": "keyword",
                "mask_with": "****",
                "preserve_len": true
            }
        ]
    }
}
```

## Best Practices

### Entity Selection
1. **Financial Data Protection**:
   - Enable IBAN and SWIFT/BIC masking for international transactions
   - Use crypto wallet masking for blockchain-related applications
   - Enable credit card masking for payment processing

2. **Personal Data Compliance**:
   - Enable relevant entities based on regulatory requirements (GDPR, CCPA)
   - Use tax ID masking for financial services
   - Enable SSN masking for healthcare or government services

3. **Security Considerations**:
   - Always mask API keys and access tokens
   - Use password masking for any credential fields
   - Consider preserving length for structured data validation

### Performance Optimization
1. **Rule Organization**:
   - Enable only necessary entities for your use case
   - Use keyword rules for simple matches
   - Use regex patterns for complex formats

2. **Efficiency Settings**:
   - Adjust similarity threshold based on requirements
   - Consider length preservation impact
   - Balance between security and performance

## Performance Considerations
The plugin is engineered for **high performance** while maintaining robust security:

1. **Efficient Processing**:
   - Pre-compiled regex patterns
   - Optimized fuzzy matching algorithm
   - Smart content analysis

2. **Resource Management**:
   - Minimal memory footprint
   - Efficient string operations
   - Cached pattern matching

3. **Scalability**:
   - Parallel processing support
   - Optimized for high throughput
   - Low latency impact

The implementation ensures optimal performance while providing comprehensive data protection, making it suitable for production environments where both security and response time are critical. 