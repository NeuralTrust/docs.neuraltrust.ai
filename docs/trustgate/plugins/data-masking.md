---
sidebar_position: 5
---

# Data Masking

## Overview
The Data Masking plugin provides comprehensive protection for sensitive data by detecting and masking various types of information in requests and responses.

## Predefined Entities

### Financial Information
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `credit_card` | Credit card numbers | `[MASKED_CC]` | 4111-1111-1111-1111 |
| `cvv` | Card verification values | `[MASKED_CVV]` | CVV: 123 |
| `bank_account` | Bank account numbers | `[MASKED_ACCOUNT]` | 12345678901234 |
| `iban` | International Bank Account Numbers | `[MASKED_IBAN]` | GB29NWBK60161331926819 |
| `swift_bic` | SWIFT/BIC codes | `[MASKED_BIC]` | BOFAUS3N |
| `routing_number` | Bank routing numbers | `[MASKED_ROUTING]` | 021000021 |
| `stripe_key` | Stripe API keys | `[MASKED_API_KEY]` | sk_test_1234567890 |

### Personal Identification
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `ssn` | Social Security Numbers | `[MASKED_SSN]` | 123-45-6789 |
| `drivers_license` | Driver's license numbers | `[MASKED_LICENSE]` | D123-4567-8901 |
| `passport` | Passport numbers | `[MASKED_PASSPORT]` | A12345678 |
| `tax_id` | Tax identification numbers | `[MASKED_TAX_ID]` | 12-3456789 |

### Contact Information
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `email` | Email addresses | `[MASKED_EMAIL]` | user@example.com |
| `phone_number` | Phone numbers | `[MASKED_PHONE]` | +1-234-567-8900 |
| `address` | Physical addresses | `[MASKED_ADDRESS]` | 123 Main St |
| `zip_code` | Postal codes | `[MASKED_ZIP]` | 12345-6789 |

### Technical Identifiers
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `ip_address` | IPv4 addresses | `[MASKED_IP]` | 192.168.1.1 |
| `ip6_address` | IPv6 addresses | `[MASKED_IP6]` | 2001:db8::1 |
| `mac_address` | MAC addresses | `[MASKED_MAC]` | 00:1A:2B:3C:4D:5E |
| `uuid` | Universal Unique Identifiers | `[MASKED_UUID]` | 550e8400-e29b-41d4-a716-446655440000 |
| `device_imei` | Device IMEI numbers | `[MASKED_IMEI]` | 123456789012345 |
| `vehicle_vin` | Vehicle identification numbers | `[MASKED_VIN]` | 1HGCM82633A123456 |

### Authentication & Security
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `password` | Password fields | `[MASKED_PASSWORD]` | password=secret123 |
| `api_key` | API keys | `[MASKED_API_KEY]` | api_key=abcd1234 |
| `access_token` | Access tokens | `[MASKED_TOKEN]` | Bearer xyz789 |
| `jwt_token` | JWT tokens | `[MASKED_JWT_TOKEN]` | eyJhbGc... |

### Cryptocurrency
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `crypto_wallet` | Cryptocurrency wallet addresses | `[MASKED_WALLET]` | 0x71C7656EC7ab88b098defB751B7401B5f6d8976F |

### International Identifiers

#### European
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `spanish_dni` | Spanish national ID | `[MASKED_DNI]` | 12345678A |
| `spanish_nie` | Spanish foreigner ID | `[MASKED_NIE]` | X1234567L |
| `spanish_cif` | Spanish company tax ID | `[MASKED_CIF]` | B12345678 |
| `spanish_nss` | Spanish social security | `[MASKED_NSS]` | 12 34567890 12 |
| `spanish_iban` | Spanish IBAN | `[MASKED_ES_IBAN]` | ES91 2100 0418 4502 0005 1332 |
| `french_nir` | French social security | `[MASKED_FR_NIR]` | 1 84 12 76 451 089 46 |
| `italian_cf` | Italian fiscal code | `[MASKED_IT_CF]` | RSSMRA85T10A562S |
| `german_id` | German ID | `[MASKED_DE_ID]` | L01X00T47H |

#### Latin American
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `brazilian_cpf` | Brazilian individual taxpayer | `[MASKED_BR_CPF]` | 123.456.789-09 |
| `brazilian_cnpj` | Brazilian company registry | `[MASKED_BR_CNPJ]` | 12.345.678/0001-95 |
| `mexican_curp` | Mexican personal ID | `[MASKED_MX_CURP]` | BADD110313HCMLNS09 |
| `mexican_rfc` | Mexican tax ID | `[MASKED_MX_RFC]` | VECJ880326XXX |
| `argentine_dni` | Argentine national ID | `[MASKED_DNI]` | 12345678 |
| `chilean_rut` | Chilean tax ID | `[MASKED_RUT]` | 12.345.678-9 |
| `colombian_cc` | Colombian citizen ID | `[MASKED_CC]` | 12345678 |
| `peruvian_dni` | Peruvian national ID | `[MASKED_DNI]` | 12345678 |

### Other
| Entity Type | Description | Default Mask | Example Pattern |
|------------|-------------|--------------|-----------------|
| `us_medicare` | US Medicare ID | `[MASKED_MEDICARE]` | 1234-567-890A |
| `isin` | International Securities ID | `[MASKED_ISIN]` | US0378331005 |
| `date` | Date formats | `[MASKED_DATE]` | 2024-03-14 |

## Configuration Examples

### Basic Configuration
```json
{
  "name": "data_masking",
  "enabled": true,
  "settings": {
    "apply_all": true,
    "similarity_threshold": 0.8,
    "max_edit_distance": 1
  }
}
```

### Selective Entity Configuration
```json
{
  "name": "data_masking",
  "enabled": true,
  "settings": {
    "apply_all": false,
    "predefined_entities": [
      {
        "entity": "credit_card",
        "enabled": true,
        "mask_with": "[MASKED_CC]"
      },
      {
        "entity": "email",
        "enabled": true,
        "mask_with": "[MASKED_EMAIL]"
      },
      {
        "entity": "ssn",
        "enabled": true
      }
    ]
  }
}
```

### Custom Rules Configuration
```json
{
  "name": "data_masking",
  "enabled": true,
  "settings": {
    "apply_all": false,
    "rules": [
      {
        "type": "regex",
        "pattern": "\\b\\d{6}\\b",
        "mask_with": "[MASKED_PIN]"
      },
      {
        "type": "keyword",
        "pattern": "internal-secret",
        "mask_with": "[MASKED_SECRET]"
      }
    ]
  }
}
```

### Combined Configuration
```json
{
  "name": "data_masking",
  "enabled": true,
  "settings": {
    "apply_all": false,
    "predefined_entities": [
      {
        "entity": "credit_card",
        "enabled": true
      },
      {
        "entity": "ssn",
        "enabled": true
      }
    ],
    "rules": [
      {
        "type": "regex",
        "pattern": "custom-[A-Z]{3}\\d{4}",
        "mask_with": "[MASKED_CUSTOM]"
      }
    ],
    "similarity_threshold": 0.8,
    "max_edit_distance": 1
  }
}
```

### Configuration Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `apply_all` | boolean | Enable all predefined entities | false |
| `similarity_threshold` | float | Threshold for fuzzy matching (0.0-1.0) | 0.8 |
| `max_edit_distance` | integer | Maximum allowed character differences | 1 |
| `predefined_entities` | array | List of predefined entities to enable | [] |
| `rules` | array | Custom masking rules | [] |

#### Predefined Entity Options
| Parameter | Type | Description | Required |
|-----------|------|-------------|-----------|
| `entity` | string | Entity type from predefined list | Yes |
| `enabled` | boolean | Enable/disable this entity | Yes |
| `mask_with` | string | Custom mask to apply | No |

#### Custom Rule Options
| Parameter | Type | Description | Required |
|-----------|------|-------------|-----------|
| `type` | string | "regex" or "keyword" | Yes |
| `pattern` | string | Pattern to match | Yes |
| `mask_with` | string | Mask to apply | No |

## Technical Overview
The Data Masking plugin implements sophisticated pattern matching and text processing to identify and mask sensitive information in both requests and responses.

### Core Components

1. **Pattern Detection Engine**
   - Pre-compiled regex patterns
   - Keyword matching system
   - Fuzzy matching support
   - Pattern variant generation

2. **Content Processor**
   - JSON data handling
   - Plain text processing
   - Streaming support
   - Character encoding handling

3. **Masking System**
   - Configurable mask patterns
   - Context-aware masking
   - Format preservation
   - Custom mask rules

## Implementation Details

### Pattern Matching System
The plugin uses multiple matching strategies:

1. **Exact Pattern Matching**
   - Regular expression based
   - Pre-compiled patterns
   - Optimized execution
   - Cache-friendly design

2. **Fuzzy Matching**
   - Similarity threshold control
   - Edit distance calculation
   - Character substitution handling
   - Pattern variants support

### Content Processing Pipeline

1. **Input Processing**
   - Content type detection
   - Encoding validation
   - Size verification
   - Format parsing

2. **Pattern Application**
   - Priority-based scanning
   - Multi-pattern matching
   - Context preservation
   - Performance optimization

3. **Masking Execution**
   - Format-specific masking
   - Character preservation
   - Length maintenance
   - Context awareness

## Performance Optimization

### Pattern Compilation
- Pre-compiled regex patterns
- Pattern caching
- Optimized matching order
- Early termination

### Content Processing
- Streaming processing
- Chunked analysis
- Buffer management
- Memory efficiency

## Security Considerations
1. **Mask Selection**
   - Use meaningful masks
   - Maintain data format
   - Consider data context
   - Regular security review

2. **Pattern Testing**
   - Comprehensive test cases
   - Edge case validation
   - Performance testing
   - Security validation
