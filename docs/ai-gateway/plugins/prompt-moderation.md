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

   • Fuzzy matching for similar words

   • Configurable similarity threshold 

   • Case-insensitive matching

2. **Pattern-based Blocking**:

   • Regular expression support

   • Complex pattern matching 

   • Pre-compiled patterns for performance

   • Support for common attack patterns

3. **Action Configuration**:

   • Customizable block messages

   • Configurable response codes 

   • Detailed error reporting

   • Logging and monitoring


## Configuration Examples

### Basic Configuration
The basic configuration provides essential **content filtering** with commonly needed **protections**. This configuration is ideal for getting started with **content moderation** and can be easily adapted to most use cases. The **similarity threshold** of 0.8 provides a good balance between catching variations and avoiding false positives, while the initial set of **keywords** targets common **security threats**.


 The **regex patterns** are designed to catch structured attacks like SQL injection attempts and password dumps. This setup can effectively protect your AI system from basic **attack vectors** while being simple to understand and maintain. The configuration uses a straightforward blocking action with a clear error message that includes the matched pattern, making it easy to troubleshoot and refine the rules based on actual usage patterns.

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
For environments requiring strict **security** controls, this configuration implements a comprehensive **defense** strategy with multiple layers of **protection**. The higher similarity threshold of 0.9 minimizes false positives while still catching deliberate **evasion** attempts. The expanded keyword list covers a broad spectrum of security threats, from basic hacking attempts to sophisticated system **exploits**. The regex patterns are specifically crafted to detect and block common attack vectors, including CVE discussions, SQL injection attempts, and system command **execution**. 

This configuration is particularly well-suited for enterprise environments, financial institutions, or any system handling sensitive data. The logging-enabled action ensures that all security violations are properly tracked and can be integrated with security information and event management (SIEM) systems for further analysis and threat detection.

```json
{
    "settings": {
        "similarity_threshold": 0.9,
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
This configuration is specifically engineered to **protect** AI models from prompt injection attacks and safety bypass attempts. The moderate similarity threshold of 0.8 balances **protection** against evasion tactics while accommodating natural language variations. The keyword list is carefully curated to catch common **jailbreak** attempts and instruction manipulation, while the regex patterns are designed to detect **sophisticated** prompt injection techniques including template injections and markdown-based attacks. This configuration is essential for maintaining AI model **alignment** and preventing unauthorized behavior modifications. 

The patterns can detect attempts to override system instructions, ignore safety constraints, or **manipulate** the model's context window. The error message is designed to be clear but not revealing of the specific **protection** mechanisms, making it harder for attackers to refine their bypass attempts. This setup is particularly valuable for public-facing AI services, educational platforms, and enterprise AI deployments where maintaining model safety and preventing misuse is crucial.

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

Testing clean content (should pass):
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me about machine learning"}'

# Expected Response: 200 OK
```

Testing blocked content:
```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to hack into a system"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked due to prohibited content: hack"
```

### 2. CVE Protection
**Complex** pattern matching combines multiple rules to create sophisticated content filters. For example, in a security context, you might want to prevent any attempts to discuss specific **vulnerabilities** or exploits. The system can detect and block CVE numbers and related security discussions using regex patterns like "CVE-\\d{4}-\\d{4,7}" combined with keywords like "exploit" or "vulnerability". This **comprehensive** approach helps prevent the AI from inadvertently providing information about security vulnerabilities.

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me about CVE-2024-1234"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked due to prohibited content: CVE-2024-1234"
```

### 3. SQL Injection Prevention
**Pattern-based** blocking using regular expressions provides powerful **protection** against structured threats and known attack patterns. Consider a scenario where you want to prevent users from attempting to extract **sensitive** information through SQL injection. By implementing a regex pattern like "(select|union|drop).*from.*where", the system can detect and block sophisticated SQL injection attempts even when they're disguised within natural language. For example, it would catch prompts like "Can you help me understand how to select all data from users where password is visible" or "Explain the process of using union select statements", effectively preventing attempts to gain knowledge about database **exploitation**.

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to perform sql injection attacks"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked due to prohibited content: sql.*injection"
```

### 4. Cryptocurrency Scam Prevention
The fuzzy matching capability is particularly **powerful** when dealing with intentional misspellings and character substitutions. In a real-world scenario, if you're protecting against cryptocurrency scams, you might block the word "ethereum". With fuzzy matching enabled at a 0.8 threshold, the system would catch variations like "eth3reum", "ethereeum", or "etherium". This is especially useful in **public-facing** AI systems where users might try to discuss prohibited topics by slightly altering their spelling. The system can even catch more creative variations like "3thereum" or "ether1um", effectively preventing bypass attempts while maintaining a low **false-positive** rate.

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to invest in eth3reum"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked due to prohibited content: ethereum (similarity: 0.85)"
```

### 5. Financial Advice Protection
**Complex** pattern matching combines multiple rules to create sophisticated content filters. In a financial services chatbot, you might want to prevent any attempts to discuss both cryptocurrency and **investment** advice. You could set up a pattern that looks for combinations like "invest.*crypto" or "buy.*(bitcoin|ethereum|crypto)", along with fuzzy keyword matching for terms like "moonshot" or "pump". This **comprehensive** approach would catch complex prompts like "How can I invest $1000 in crypt0 for maximum gains" or "Tell me about buying b1tc0in and timing the market", effectively preventing the AI from providing potentially regulated financial advice.

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to invest $1000 in crypt0 for maximum gains"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked: Financial advice policy violation detected."
```

### 6. Custom Error Messages
The action **configuration** feature allows you to customize how the system responds to detected threats with context-aware messages. For instance, in a corporate environment, you might configure the plugin to respond differently based on the type of violation. When a potential security threat is detected, you could set up a response that includes a ticket number and compliance reference like "Content blocked: Security policy violation #SEC-123 (Corporate Policy 4.2.1). This attempt has been logged and reported." For educational content, you might use a more **instructive** message like "Content blocked: The requested topic violates our acceptable use policy. Please refer to our AI usage guidelines at docs.example.com/ai-guidelines for more information about permitted topics."

```bash
curl -X POST "http://localhost:8081/post" \
    -H "Host: your-subdomain.example.com" \
    -H "X-API-Key: your-api-key" \
    -H "Content-Type: application/json" \
    -d '{"prompt": "How to bypass system security"}'

# Expected Response: 403 Forbidden
# Message: "Content blocked: Security policy violation #SEC-123 (Corporate Policy 4.2.1). This attempt has been logged and reported."
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

The Prompt Moderation plugin achieves exceptional performance through its sophisticated optimization strategies, beginning with the pre-compilation of all regex patterns during initialization to eliminate repeated compilation overhead. The system employs memory-efficient algorithms for string comparisons and implements smart word tokenization to minimize processing time. The Levenshtein distance calculation, while computationally intensive, is optimized to operate on individual words rather than entire content bodies, significantly reducing the processing overhead. Additionally, the plugin maintains a minimal memory footprint by storing only essential pattern data and implementing case-insensitive matching at the comparison level, avoiding the need for multiple pattern variations.

In production environments processing millions of requests daily, the plugin demonstrates remarkable scalability and consistent performance. When processing a typical request against hundreds of keywords and dozens of regex patterns, the system maintains sub-10ms response times through efficient concurrent processing and optimized pattern matching algorithms. The architecture supports linear performance scaling as the number of rules increases, utilizing intelligent caching mechanisms and parallel processing capabilities to handle high-throughput scenarios. This optimization ensures that even complex configurations with extensive rulesets can process thousands of requests per second while maintaining consistent low latency and efficient resource utilization across distributed systems.