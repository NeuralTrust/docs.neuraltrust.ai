---
sidebar_position: 4
---

# Prompt Moderation

## Overview
The **Prompt Moderation** plugin is a sophisticated content filtering system designed to protect your AI gateway from potentially harmful or unwanted content. It employs multiple layers of **content analysis** to ensure comprehensive protection while maintaining high performance.

At its core, the plugin implements content filtering through two primary mechanisms: **keyword-based blocking** and **regular expression pattern matching**. The keyword system is enhanced with **fuzzy matching** capabilities, allowing it to detect not just exact matches but also similar variations of prohibited words. This is particularly effective in catching attempts to circumvent the filter through minor word modifications.

The **smart detection system** utilizes advanced string matching algorithms, specifically the **Levenshtein distance** calculation, to determine word similarity. This approach is **case-insensitive** by default and operates with a configurable **similarity threshold** (ranging from 0 to 1). The default threshold is set to **0.8**, providing a good balance between strict matching and flexibility. This means that words that are 80% similar to blocked keywords will trigger the filter, effectively catching common evasion techniques like character substitutions or misspellings.

## Features
1. **Keyword-based Blocking**:
   - Fuzzy matching for similar words
   - Configurable similarity threshold
   - Case-insensitive matching

2. **Pattern-based Blocking**:
   - Regular expression support
   - Complex pattern matching
   - Pre-compiled patterns for performance
   - Support for common attack patterns

3. **Action Configuration**:
   - Customizable block messages
   - Configurable response codes
   - Detailed error reporting
   - Logging and monitoring


## Configuration Examples

### Basic Configuration
The basic configuration provides essential content filtering with commonly needed protections:

```json
{
    "settings": {
        "similarity_threshold": 0.8,
        "keywords": [
            "hack",
            "exploit",
            "vulnerability"
        ],
        "regex": [
            "password.*dump",
            "sql.*injection"
        ],
        "actions": {
            "type": "block",
            "message": "Content blocked due to prohibited content: %s"
        }
    }
}
```

Key components of the basic configuration:

<h4 align="center"><strong><u>Similarity Threshold</u></strong></h4>

| Value Range | Description | Impact |
|------------|-------------|---------|
| 0 to 1 (0.8 default) | Determines how closely strings must match | Controls matching sensitivity |
| Higher values (&gt;0.8) | Requires closer matches | Reduces false positives |
| Lower values (&lt;0.8) | Allows more variation | Catches more variations |

### Security-Focused Configuration
For environments requiring strict security controls:

```json
{
    "settings": {
        "similarity_threshold": 0.8,
        "keywords": [
            "hack",
            "exploit",
            "vulnerability",
            "injection",
            "overflow",
            "backdoor"
        ],
        "regex": [
            "CVE-\\d{4}-\\d{4,7}",
            "password.*dump",
            "sql.*injection",
            "(union|select|delete|drop|update|insert).*table",
            "exec.*\\(.*\\)",
            "system\\(.*\\)"
        ],
        "actions": {
            "type": "block",
            "message": "Security violation detected: %s. This incident will be logged."
        }
    }
}
```

### AI Safety Configuration
Specifically designed for AI model protection:

```json
{
    "settings": {
        "similarity_threshold": 0.8,
        "keywords": [
            "jailbreak",
            "bypass",
            "ignore previous",
            "ignore rules",
            "system prompt"
        ],
        "regex": [
            "you\\s+are\\s+now\\s+.*",
            "ignore\\s+all\\s+.*instructions",
            "disregard\\s+.*safety",
            "\\{\\{.*\\}\\}",
            "<.*>.*</.*>"
        ],
        "actions": {
            "type": "block",
            "message": "Prompt rejected: Potential safety bypass attempt detected."
        }
    }
}
```

## Example Use Cases

### 1. Content Moderation
The **keyword-based** blocking feature is particularly effective for content **moderation** in AI systems where users might try to bypass filters using creative spelling. For instance, if you configure the plugin with the keyword "hack" and a similarity threshold of 0.8, it will catch variations like "h4ck", "hakk", or "h@ck". This is especially useful in educational platforms where you want to prevent discussions about hacking while allowing legitimate security discussions. The **fuzzy** matching capability means that even if someone tries to evade **detection** by using "hacc" or "haccc", the system will still identify and block these attempts, making it significantly more difficult to circumvent the protection.

First, create a gateway to protect hacking:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prompt Moderation Gateway",
    "subdomain": "prompt-mod-test",
    "required_plugins": [
        {
            "name": "prompt_moderation",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "similarity_threshold": 0.5,
                "keywords": [
                    "hack",
                    "exploit",
                    "vulnerability"
                ],
                "regex": [
                    "password.*dump",
                    "sql.*injection",
                    "CVE-\\d{4}-\\d{4,7}"
                ],
                "actions": {
                    "type": "block",
                    "message": "Content blocked due to prohibited content: %s"
                }
            }
        }
    ]
}'
```

Then test with clean content (should pass):
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: prompt-mod-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me about machine learning"}'

# Expected Response: 200 OK
```

Test with blocked content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: prompt-mod-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to hacking into a system"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked due to prohibited content: hack"
```

### 2. CVE Protection
Complex pattern matching combines multiple rules to create sophisticated content filters. For example, in a security context, you might want to prevent any attempts to discuss specific vulnerabilities or exploits. The system can detect and block CVE numbers and related security discussions using regex patterns like "CVE-\\d{4}-\\d{4,7}" combined with keywords like "exploit" or "vulnerability". This comprehensive approach helps prevent the AI from inadvertently providing information about security vulnerabilities.

First, create a the gateway to protect CVE numbers:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "CVE Protection Gateway",
    "subdomain": "cve-protection-test",
    "required_plugins": [
        {
            "name": "prompt_moderation",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "similarity_threshold": 0.8,
                "keywords": [
                    "exploit",
                    "vulnerability",
                    "security bug"
                ],
                "regex": [
                    "CVE-\\d{4}-\\d{4,7}",
                    "vulnerability.*found",
                    "security.*patch"
                ],
                "actions": {
                    "type": "block",
                    "message": "Security information blocked: %s"
                }
            }
        }
    ]
}'
```

Test with clean content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: cve-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me about software development"}'

# Expected Response: 200 OK
```

Test with CVE pattern:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: cve-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me about CVE-2024-1234"}'

# Expected Response: 403 Forbidden
# Message: "Security information blocked: CVE-2024-1234"
```

### 3. SQL Injection Prevention
Pattern-based blocking using regular expressions provides powerful protection against structured threats and known attack patterns. Consider a scenario where you want to prevent users from attempting to extract sensitive information through SQL injection. By implementing a regex pattern like "(select|union|drop).*from.*where", the system can detect and block sophisticated SQL injection attempts even when they're disguised within natural language.

First, create a gateway with SQL injection protection:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "SQL Protection Gateway",
    "subdomain": "sql-protection-test",
    "required_plugins": [
        {
            "name": "prompt_moderation",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "similarity_threshold": 0.8,
                "keywords": [
                    "sql",
                    "injection",
                    "database"
                ],
                "regex": [
                    "sql.*injection",
                    "(union|select|delete|drop|update|insert).*table",
                    "from.*where.*password"
                ],
                "actions": {
                    "type": "block",
                    "message": "SQL injection attempt blocked: %s"
                }
            }
        }
    ]
}'
```

Test with clean content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: sql-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "What is a database?"}'

# Expected Response: 200 OK
```

Test with SQL injection pattern:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: sql-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to perform sql injection attacks"}'

# Expected Response: 403 Forbidden
# Message: "SQL injection attempt blocked: sql.*injection"
```

### 4. Cryptocurrency Scam Prevention
The fuzzy matching capability is particularly powerful when dealing with intentional misspellings and character substitutions. In a real-world scenario, if you're protecting against cryptocurrency scams, you might block variations of cryptocurrency terms and common scam phrases.

First, create a gateway with crypto scam protection:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Crypto Protection Gateway",
    "subdomain": "crypto-protection-test",
    "required_plugins": [
        {
            "name": "prompt_moderation",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "similarity_threshold": 0.8,
                "keywords": [
                    "ethereum",
                    "bitcoin",
                    "crypto",
                    "moonshot",
                    "pump"
                ],
                "regex": [
                    "\\d+x.*gains",
                    "invest.*crypto",
                    "buy.*(btc|eth|coin)"
                ],
                "actions": {
                    "type": "block",
                    "message": "Cryptocurrency discussion blocked: %s"
                }
            }
        }
    ]
}'
```

Test with clean content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: crypto-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me about traditional banking"}'

# Expected Response: 200 OK
```

Test with crypto scam pattern:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: crypto-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to invest in eth3reum for 100x gains"}'

# Expected Response: 403 Forbidden
# Message: "Cryptocurrency discussion blocked: ethereum (similarity: 0.85)"
```

### 5. Financial Advice Protection
Complex pattern matching combines multiple rules to create sophisticated content filters for preventing unauthorized financial advice.

First, create a gateway with financial advice protection:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Financial Protection Gateway",
    "subdomain": "finance-protection-test",
    "required_plugins": [
        {
            "name": "prompt_moderation",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "similarity_threshold": 0.8,
                "keywords": [
                    "invest",
                    "trading",
                    "portfolio",
                    "stocks",
                    "options"
                ],
                "regex": [
                    "invest.*\\$\\d+",
                    "buy.*(stock|option|share)",
                    "trade.*(strategy|tip)",
                    "market.*timing"
                ],
                "actions": {
                    "type": "block",
                    "message": "Financial advice request blocked: %s"
                }
            }
        }
    ]
}'
```

Test with clean content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: finance-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "What is a bank account?"}'

# Expected Response: 200 OK
```

Test with financial advice pattern:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: finance-protection-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to invest $1000 for maximum gains"}'

# Expected Response: 403 Forbidden
# Message: "Financial advice request blocked: invest.*\\$\\d+"
```

### 6. Custom Error Messages
The action configuration feature allows you to customize how the system responds to detected threats with context-aware messages.

First, create a gateway with custom error messages:
```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Custom Error Gateway",
    "subdomain": "custom-error-test",
    "required_plugins": [
        {
            "name": "prompt_moderation",
            "enabled": true,
            "stage": "pre_request",
            "priority": 1,
            "settings": {
                "similarity_threshold": 0.8,
                "keywords": [
                    "hack",
                    "exploit",
                    "bypass"
                ],
                "regex": [
                    "security.*bypass",
                    "password.*crack",
                    "system.*hack"
                ],
                "actions": {
                    "type": "block",
                    "message": "Security policy violation #SEC-%d (Corporate Policy 4.2.1). This attempt has been logged and reported. Detected: %s"
                }
            }
        }
    ]
}'
```

Test with clean content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: custom-error-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to improve system security?"}'

# Expected Response: 200 OK
```

Test with security violation:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: custom-error-test.example.com" \
    -H "X-API-Key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to bypass system security"}'

# Expected Response: 403 Forbidden
# Message: "Security policy violation #SEC-123 (Corporate Policy 4.2.1). This attempt has been logged and reported. Detected: security.*bypass"
```

## Best Practices

### 1. Keyword Selection

• Start with a focused list of clearly harmful terms

• Avoid overly common words that may cause false positives

• Consider language variations and common misspellings

• Regularly update keywords based on new threats

### 2. Pattern Crafting

• Use specific regex patterns targeting known attack vectors

• Test patterns thoroughly before deployment

• Consider performance impact of complex patterns

• Document pattern purposes for maintenance

### 3. Threshold Tuning

• Start with the default 0.8 threshold

• Increase threshold for stricter matching

• Lower threshold to catch more variations

• Monitor false positive/negative rates

### 4. Performance Optimization

• Keep keyword lists focused and relevant

• Use simple regex patterns where possible

• Monitor processing times

• Cache compiled patterns

## Performance Considerations

The Prompt Moderation plugin delivers exceptional performance through a sophisticated architecture that combines efficient **pattern compilation** and string matching capabilities. At initialization, all regex patterns are compiled once and stored in memory, enabling quick access and efficient pattern matching throughout the plugin's lifecycle. The string matching system leverages optimized **Levenshtein distance** calculations and smart word tokenization, while maintaining memory-efficient string comparisons. This comprehensive approach ensures that pattern matching operations are executed with minimal computational overhead, making the plugin ideal for high-throughput environments where performance is critical.

The plugin's resource management strategy is built around maintaining minimal memory footprint and optimal **CPU utilization**. Through intelligent caching mechanisms and efficient data structures, the system achieves consistent performance while scaling linearly with increasing workloads. The architecture supports **concurrent processing** with low latency, enabling seamless handling of multiple requests simultaneously. This scalability-focused design, combined with pre-compiled patterns and optimized algorithms, ensures the plugin can handle growing demands while maintaining robust content filtering capabilities across distributed operations.