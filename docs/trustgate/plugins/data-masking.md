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

## How It Works

### 1. JSON Data Processing
The plugin intelligently handles JSON data in both requests and responses. It recursively traverses JSON objects and arrays to find and mask sensitive data at any nesting level:

```json
// Input
{
    "user": {
        "email": "john.doe@example.com",
        "credit_card": "4111-2222-3333-4444",
        "secret_key": "my-secret-api-key",
        "addresses": [
            {
                "billing": {
                    "card": "5555-6666-7777-8888",
                    "ssn": "123-45-6789"
                }
            }
        ]
    }
}

// Output
{
    "user": {
        "email": "[MASKED_EMAIL]",
        "credit_card": "[MASKED_CC]",
        "secret_key": "[MASKED_KEY]",
        "addresses": [
            {
                "billing": {
                    "card": "[MASKED_CC]",
                    "ssn": "[MASKED_SSN]"
                }
            }
        ]
    }
}
```

To enable this type of masking, configure the predefined entities in your settings:

```json
{
    "settings": {
        "predefined_entities": [
            {
                "entity": "credit_card",
                "enabled": true,
                "mask_with": "[MASKED_CC]"
            },
            {
                "entity": "ssn",
                "enabled": true,
                "mask_with": "[MASKED_SSN]"
            },
            {
                "entity": "email",
                "enabled": true,
                "mask_with": "[MASKED_EMAIL]"
            }
        ]
    }
}
```

### 2. Fuzzy Matching
The plugin uses Levenshtein distance to detect similar keywords and variations. This is particularly useful for catching attempts to bypass the masking by slightly modifying sensitive field names:

```json
// Input - Various attempts to bypass detection
{
    "sekret_key": "sensitive-data",
    "secret-key": "another-secret",
    "secretKey": "third-secret",
    "s3cretKey": "fourth-secret",
    "SecretKey123": "fifth-secret"
}

// Output - All variations detected with similarity threshold of 0.8
{
    "sekret_key": "[MASKED_KEY]",
    "secret-key": "[MASKED_KEY]",
    "secretKey": "[MASKED_KEY]",
    "s3cretKey": "[MASKED_KEY]",
    "SecretKey123": "[MASKED_KEY]"
}
```

Configure fuzzy matching with custom rules and similarity threshold:

```json
{
    "settings": {
        "similarity_threshold": 0.8,
        "rules": [
            {
                "pattern": "secret_key",
                "type": "keyword",
                "mask_with": "[MASKED_KEY]",
                "fuzzy_match": true
            }
        ]
    }
}
```

### 3. Pattern Matching
The plugin supports sophisticated pattern matching through regular expressions, which is essential for detecting structured data formats:

```json
// Input with various formats
{
    "payment_info": {
        "card_numbers": [
            "4111-2222-3333-4444",
            "4111 2222 3333 4444",
            "4111222233334444"
        ],
        "iban_numbers": [
            "DE89 3704 0044 0532 0130 00",
            "DE89370400440532013000",
            "GB29NWBK60161331926819"
        ],
        "phone_contacts": [
            "+1 (555) 123-4567",
            "555.123.4567",
            "+44 20 7123 4567"
        ]
    }
}

// Output - All formats detected and masked appropriately
{
    "payment_info": {
        "card_numbers": [
            "[MASKED_CC]",
            "[MASKED_CC]",
            "[MASKED_CC]"
        ],
        "iban_numbers": [
            "[MASKED_IBAN]",
            "[MASKED_IBAN]",
            "[MASKED_IBAN]"
        ],
        "phone_contacts": [
            "[MASKED_PHONE]",
            "[MASKED_PHONE]",
            "[MASKED_PHONE]"
        ]
    }
}
```

Configure pattern matching with custom regex patterns:

```json
{
    "settings": {
        "rules": [
            {
                "pattern": "\\b\\d{4}[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{4}\\b",
                "type": "regex",
                "mask_with": "[MASKED_CC]"
            },
            {
                "pattern": "\\b[A-Z]{2}\\d{2}[A-Z0-9]{4}\\d{7}([A-Z0-9]?){0,16}\\b",
                "type": "regex",
                "mask_with": "[MASKED_IBAN]"
            },
            {
                "pattern": "\\+?\\d{1,4}[-.\\s]?\\(?\\d{1,4}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}",
                "type": "regex",
                "mask_with": "[MASKED_PHONE]"
            }
        ]
    }
}
```

### 4. Length Preservation
When working with systems that validate field lengths, you can configure the plugin to preserve the original length of masked data:

```json
// Input
{
    "credit_card": "4111222233334444",
    "ssn": "123-45-6789"
}

// Output with length preservation enabled
{
    "credit_card": "****************",  // 16 characters
    "ssn": "***********"              // 11 characters
}
```

Configure length preservation in your settings:

```json
{
    "settings": {
        "predefined_entities": [
            {
                "entity": "credit_card",
                "enabled": true,
                "mask_with": "*",
                "preserve_len": true
            },
            {
                "entity": "ssn",
                "enabled": true,
                "mask_with": "*",
                "preserve_len": true
            }
        ]
    }
}
```

## Configuration Examples

### Basic Configuration
The basic configuration provides a straightforward way to enable essential data masking features. It focuses on commonly needed protections without complex customization:

```json
{
    "settings": {
        // Global similarity threshold for fuzzy matching
        "similarity_threshold": 0.8,
        
        // List of pre-defined entities to enable
        "predefined_entities": [
            {
                // Enable credit card number masking
                "entity": "credit_card",
                "enabled": true,
                "mask_with": "[MASKED_CC]",
                "preserve_len": false
            },
            {
                // Enable email address masking
                "entity": "email",
                "enabled": true,
                "mask_with": "[MASKED_EMAIL]",
                "preserve_len": false
            }
        ]
    }
}
```

Key components of the basic configuration:


<h4 align="center"><strong><u>Similarity Threshold</u></strong></h4>

| Value Range | Description | Impact |
|------------|-------------|---------|
| 0 to 1 (0.8 recommended) | Determines how closely strings must match to be considered similar | Controls matching sensitivity |
| Higher values (&gt;0.8) | Requires closer matches between strings | Reduces false positives but may miss variations |
| Lower values (&lt;0.8) | Allows more variation between strings | Catches more variations but may increase false positives |

<h4 align="center"><strong><u>Predefined Entities</u></strong></h4>

<table align="center">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>entity</code></td>
      <td>The type of data to mask (from predefined list)</td>
    </tr>
    <tr>
      <td><code>enabled</code></td>
      <td>Whether this entity type is active</td>
    </tr>
    <tr>
      <td><code>mask_with</code></td>
      <td>The replacement text for matched data</td>
    </tr>
    <tr>
      <td><code>preserve_len</code></td>
      <td>Whether to keep original string length</td>
    </tr>
  </tbody>
</table>

Example of what this configuration will catch:
```json
// Input
{
    "customer": {
        "email": "alice@company.com",
        "payment": {
            "cc_number": "4111-2222-3333-4444"
        }
    }
}

// Output
{
    "customer": {
        "email": "[MASKED_EMAIL]",
        "payment": {
            "cc_number": "[MASKED_CC]"
        }
    }
}
```


The predefined entities configuration accepts several properties: The **entity** property (type: string) specifies which type of sensitive data to mask from the predefined list, with values like **"credit_card"**, **"email"**, or **"ssn"**. The **enabled** property (type: boolean) controls whether masking is active for this entity type using **true** or **false**. The **mask_with** property (type: string) defines the text that will replace the sensitive data when masked, such as **"[MASKED_CC]"** or **"[MASKED_EMAIL]"**. Finally, the **preserve_len** property (type: boolean) determines whether to maintain the original string length using the mask character, set to either **true** or **false**.

### Advanced Configuration with Custom Rules
The advanced configuration extends the basic setup with custom rules and more sophisticated pattern matching:

```json
{
    "settings": {
        // Global fuzzy matching threshold
        "similarity_threshold": 0.8,
        
        // Pre-defined entities (same as basic config)
        "predefined_entities": [
            {
                "entity": "credit_card",
                "enabled": true,
                "mask_with": "[MASKED_CC]",
                "preserve_len": false
            }
        ],
        
        // Custom masking rules
        "rules": [
            {
                // Keyword-based rule for secret keys
                "pattern": "secret_key",
                "type": "keyword",
                "mask_with": "[MASKED_KEY]",
                "preserve_len": false,
                "fuzzy_match": true,
                "case_sensitive": false
            },
            {
                // Regex-based rule for passwords
                "pattern": "(?i)password=\\S+",
                "type": "regex",
                "mask_with": "[MASKED_PASSWORD]",
                "preserve_len": false
            },
            {
                // Custom pattern for internal IDs
                "pattern": "INT-\\d{6}",
                "type": "regex",
                "mask_with": "[MASKED_ID]",
                "preserve_len": true
            }
        ],
        
        // Additional advanced settings
        "settings": {
            "mask_unknown_types": true,
            "recursive_search": true,
            "max_depth": 10
        }
    }
}
```

Key components of the advanced configuration:

<h4 align="center"><strong><u>Custom Rules Properties</u></strong></h4>

| Property | Description | Default Value | Example |
|----------|-------------|---------------|---------|
| `pattern` | The text or regex pattern to match | "secret_key" | "password=\\S+", "INT-\\d{6}" |
| `type` | The type of pattern matching to use | "keyword" | "keyword", "regex" |
| `mask_with` | Replacement text for matched data | "[MASKED]" | "[MASKED_KEY]", "[MASKED_PASSWORD]" |
| `preserve_len` | Whether to maintain string length | false | true, false |
| `fuzzy_match` | Enable Levenshtein distance matching | false | true, false |
| `case_sensitive` | Whether matching is case-sensitive | false | true, false |

2. **Rule Types**
   - **Keyword Rules** 
     ```json
     {
         "pattern": "secret_key",
         "type": "keyword",
         "fuzzy_match": true
     }
     ```
     - Matches exact or similar words
     - Supports fuzzy matching
     - Good for field names and known terms

   - **Regex Rules**
     ```json
     {
         "pattern": "(?i)password=\\S+",
         "type": "regex"
     }
     ```
     - Matches complex patterns
     - More powerful but computationally intensive
     - Good for structured data formats

Example of what this advanced configuration will catch:
```json
// Input
{
    "api_config": {
        "sekret_key": "abcd1234",
        "password": "password=mysecret123",
        "internal_id": "INT-123456"
    },
    "payment": {
        "cc_number": "4111-2222-3333-4444"
    }
}

// Output
{
    "api_config": {
        "sekret_key": "[MASKED_KEY]",
        "password": "[MASKED_PASSWORD]",
        "internal_id": "[MASKED_ID]"
    },
    "payment": {
        "cc_number": "[MASKED_CC]"
    }
}
```

The advanced configuration provides several benefits:

   • Combines predefined entities with custom rules

   • Supports both simple keyword and complex regex patterns 

   • Provides flexibility for special cases and exceptions

## Best Practices

### Entity Selection
1. **Financial Data Protection**:
   - Enable IBAN and SWIFT/BIC masking for international transactions
   - Enable credit card masking for payment processing

2. **Personal Data Compliance**:
   - Enable relevant entities based on regulatory requirements (GDPR, CCPA)
   - Use tax ID masking for financial services
   - Enable SSN masking for healthcare or government services

3. **Security Considerations**:
   - Always mask API keys and access tokens
   - Use password masking for any credential fields

### Performance Optimization
1. **Rule Organization**:
   - Enable only necessary entities for your use case
   - Use keyword rules for simple matches
   - Use regex patterns for complex formats

2. **Efficiency Settings**:
   - Adjust similarity threshold based on requirements
   - Consider length preservation impact
   - Balance between security and performance

### Performance Considerations

The Data Masking plugin prioritizes **performance** and **security** through sophisticated optimizations. The processing engine uses pre-compiled regex patterns and optimized algorithms with intelligent caching for rapid pattern matching. Memory efficiency is achieved through zero-copy operations and strategic buffer management, while CPU resources are utilized effectively through parallel processing and smart algorithms. The plugin delivers **sub-millisecond processing** with linear scaling, supported by efficient thread pooling and I/O optimization. Through careful optimization at every level, from memory operations to concurrent processing, it provides robust security with minimal performance impact. The architecture handles streaming data and high-concurrency scenarios efficiently, making it ideal for organizations processing sensitive data at scale while meeting strict security and performance requirements.