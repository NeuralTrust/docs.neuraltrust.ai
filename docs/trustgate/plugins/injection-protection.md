---
sidebar_position: 8
title: Injection Protection
---

# Injection Protection

## Technical Overview
The Injection Protection plugin implements a multi-layered defense system to detect and block various injection attacks. It operates in the pre-request stage and analyzes all parts of incoming HTTP requests.

### Core Components

1. **Pattern Detection Engine**
   - Pre-compiled regular expressions for performance
   - Case-insensitive pattern matching
   - Support for complex attack patterns
   - Custom pattern registration

2. **Request Analyzer**
   - Multi-part request analysis (headers, query, body)
   - JSON and form-data parsing
   - Recursive object traversal
   - UTF-8 encoding support

3. **Attack Detection System**
   - Real-time pattern matching
   - Concurrent request processing
   - Early termination on detection
   - Detailed attack logging

## Attack Detection Details

### SQL Injection Detection
- **Union-based Attacks**
  - UNION SELECT statements
  - Stacked queries
  - Comment-based injections
  
- **Error-based Attacks**
  - Type conversion attacks
  - XPATH errors
  - Syntax errors
  
- **Time-based Attacks**
  - SLEEP() functions
  - BENCHMARK() calls
  - Heavy queries

### Command Injection Detection
- **Shell Commands**
  - System command execution
  - Process spawning
  - Command chaining
  
- **Shell Shock Patterns**
  - Environment variables
  - Function definitions
  - Command substitution

- **Command Separators**
  - Semicolons
  - Pipes
  - Backticks

### Path Traversal Detection
- **Directory Navigation**
  - Parent directory references
  - Absolute paths
  - Symbolic links
  
- **Encoding Variations**
  - URL encoding
  - Double encoding
  - Unicode variants

### SSRF Detection
- **URL Schemes**
  - File protocol
  - HTTP/HTTPS
  - Data URIs
  
- **Internal Access**
  - Localhost references
  - Private IP ranges
  - DNS rebinding

## Processing Pipeline

1. **Request Parsing**
   - Header extraction
   - Query parameter parsing
   - Body deserialization
   - Content type handling

2. **Pattern Matching**
   - Regular expression evaluation
   - Custom pattern checking
   - Threshold validation
   - Attack categorization

3. **Decision Making**
   - Threat scoring
   - Action determination
   - Response generation
   - Error handling

4. **Response Generation**
   - Status code selection
   - Error message formatting
   - Header modification
   - Logging and metrics

## Configuration Details

### Pattern Types
1. **Predefined Patterns**
   - Built-in security rules
   - Common attack signatures
   - Updated regularly
   - Performance optimized

2. **Custom Patterns**
   - User-defined rules
   - Regular expressions
   - Pattern descriptions
   - Priority settings

### Content Analysis
1. **Header Analysis**
   - Key-value pair checking
   - Size validation
   - Encoding verification
   - Protocol compliance

2. **Query Analysis**
   - Parameter inspection
   - Value validation
   - Encoding checks
   - Length limits

3. **Body Analysis**
   - Content parsing
   - Deep object inspection
   - Array handling
   - Size validation

## Performance Optimization

### Pattern Matching
- Pre-compiled patterns
- Early termination
- Memory efficient
- CPU optimized

### Request Processing
- Concurrent handling
- Buffered reading
- Streaming support
- Resource limits

### Memory Management
- Zero-copy where possible
- Buffer pooling
- Garbage collection friendly
- Memory limits

## Error Handling

### Types of Errors
1. **Validation Errors**
   - Invalid patterns
   - Malformed requests
   - Size violations
   - Encoding issues

2. **Runtime Errors**
   - Timeout errors
   - Resource exhaustion
   - System errors
   - Network issues

3. **Security Events**
   - Attack detection
   - Pattern matches
   - Threshold violations
   - Policy breaches

### Error Responses
- Detailed error codes
- Custom messages
- Logging integration
- Metrics collection

## Features
- Multiple attack type detection (SQL, NoSQL, Command, Path Traversal, etc.)
- Configurable blocking actions
- Pattern-based detection with regular expressions
- Support for custom patterns
- Request content analysis (headers, path, query, body)

## Attack Types
The plugin detects the following types of attacks:

| Attack Type | Description | Example Pattern |
|-------------|-------------|-----------------|
| SQL | SQL injection attempts | `UNION SELECT`, `DROP TABLE` |
| NoSQL | MongoDB injection patterns | `$where`, `$regex` |
| Command | Shell command injection | `system()`, `exec()` |
| Path Traversal | Directory traversal attempts | `../`, `..\\` |
| LDAP | LDAP injection patterns | `(cn=*)`, `(|(cn=*))` |
| XML | XML injection and XXE | `<!ENTITY`, `SYSTEM` |
| SSRF | Server-side request forgery | `file://`, `dict://` |
| File Inclusion | Local/Remote file inclusion | `include()`, `require()` |
| Template | Template injection attempts | `{{.}}`, `${...}` |
| XPath | XPath injection patterns | `//`, `contains()` |
| Header | HTTP header injection | `\r\n`, `\n\n` |

## Configuration

```json
{
  "name": "injection_protection",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "content_to_check": ["headers", "path_and_query", "body"],
    "action": "block",
    "status_code": 400,
    "error_message": "Potential security threat detected",
    "predefined_injections": [
      {
        "type": "sql",
        "enabled": true
      },
      {
        "type": "command",
        "enabled": true
      }
    ],
    "custom_patterns": [
      {
        "name": "custom_pattern",
        "pattern": "malicious.*pattern",
        "description": "Custom malicious pattern"
      }
    ]
  }
}
```

### Configuration Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|-----------|
| content_to_check | array | Request parts to analyze | Yes |
| action | string | Action to take when attack detected | Yes |
| status_code | number | HTTP status code for blocked requests | No |
| error_message | string | Custom error message | No |
| predefined_injections | array | List of enabled attack types | Yes |
| custom_patterns | array | Custom regex patterns | No |

## Usage Example

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Protected Gateway",
    "subdomain": "protected",
    "required_plugins": [
      {
        "name": "injection_protection",
        "enabled": true,
        "stage": "pre_request",
        "settings": {
          "content_to_check": ["headers", "path_and_query", "body"],
          "action": "block",
          "status_code": 400,
          "predefined_injections": [
            {
              "type": "sql",
              "enabled": true
            },
            {
              "type": "command",
              "enabled": true
            }
          ]
        }
      }
    ]
  }'
```

## Best Practices

1. **Enable Multiple Attack Types**
   - Enable relevant attack types for your application
   - Consider your application's attack surface
   - Balance security vs false positives

2. **Content Selection**
   - Check all relevant request parts
   - Consider performance impact
   - Monitor for false positives

3. **Custom Patterns**
   - Keep patterns specific and targeted
   - Test thoroughly before deployment
   - Document pattern purposes

4. **Error Messages**
   - Use informative but safe messages
   - Avoid revealing system details
   - Log detailed information internally

## Performance Considerations
- Uses pre-compiled regex patterns
- Efficient request parsing
- Minimal memory footprint
- Linear scaling with request size
- Concurrent processing support 