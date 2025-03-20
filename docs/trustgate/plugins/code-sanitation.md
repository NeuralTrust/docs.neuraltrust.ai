---
sidebar_position: 9
title: Code Sanitation
---

# Code Sanitation

## Technical Overview
The Code Sanitation plugin implements a sophisticated code pattern detection and sanitization system. It analyzes incoming requests for potentially malicious code patterns across multiple programming languages and can either block or sanitize detected patterns.

### Core Components

1. **Language Pattern Engine**
   - Language-specific pattern detection
   - Contextual code analysis
   - Pattern overlap handling
   - Syntax-aware detection

2. **Sanitization System**
   - Pattern replacement
   - Context-aware sanitization
   - Character encoding handling
   - Preservation of code structure

3. **Pattern Registry**
   - Per-language pattern sets
   - Pattern priority handling
   - Pattern conflict resolution
   - Dynamic pattern updates

## Language-Specific Detection

### JavaScript Detection
- **Function Execution**
  - eval() and Function constructors
  - setTimeout/setInterval with strings
  - Dynamic code generation
  
- **DOM Manipulation**
  - innerHTML assignments
  - document.write calls
  - Script injection patterns
  
- **Event Handlers**
  - on* attribute injection
  - addEventListener patterns
  - Event handler strings

### Python Detection
- **Code Execution**
  - exec() and eval() calls
  - compile() function usage
  - __import__ patterns
  
- **Shell Commands**
  - os.system calls
  - subprocess.Popen
  - Command string formation

### Shell Command Detection
- **Command Execution**
  - Direct command execution
  - Shell metacharacters
  - Command substitution
  
- **File Operations**
  - File read/write operations
  - Directory manipulation
  - Permission changes

## Processing Pipeline

1. **Content Analysis**
   - Language detection
   - Context determination
   - Pattern application
   - Sanitization planning

2. **Pattern Application**
   - Pattern matching
   - Priority enforcement
   - Overlap resolution
   - Result aggregation

3. **Sanitization Process**
   - Character replacement
   - Structure preservation
   - Context validation
   - Output verification

## Performance Optimization

### Pattern Matching
- Optimized regex compilation
- Pattern caching
- Early termination
- Partial matching

### Content Processing
- Streaming processing
- Chunked analysis
- Memory efficient
- CPU optimization

### Sanitization
- In-place modification
- Buffer reuse
- Minimal allocations
- Efficient replacements

## Error Handling

### Detection Errors
- Pattern conflicts
- Invalid patterns
- Encoding issues
- Context errors

### Sanitization Errors
- Invalid replacements
- Structure corruption
- Encoding problems
- Context violations

### Response Handling
- Detailed error reporting
- Context preservation
- Recovery options
- Logging integration

## Features
- Multi-language code pattern detection
- Configurable actions (block or sanitize)
- Support for custom patterns
- Content type filtering
- Comprehensive logging

## Supported Languages
The plugin supports pattern detection for:

| Language | Description | Example Patterns |
|----------|-------------|------------------|
| JavaScript | Client-side scripting | `eval()`, `Function()` |
| Python | Server-side code | `exec()`, `eval()` |
| PHP | Web application code | `eval()`, `system()` |
| SQL | Database queries | `UNION SELECT`, `DROP TABLE` |
| Shell | Command execution | `system()`, `exec()` |
| Java | JVM-based code | `Runtime.exec()` |
| C# | .NET code | `Process.Start()` |
| Ruby | Ruby code | `eval()`, `exec()` |
| HTML | Markup injection | `<script>`, `onerror=` |

## Configuration

```json
{
  "name": "code_sanitation",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "languages": [
      {
        "language": "javascript",
        "enabled": true
      },
      {
        "language": "python",
        "enabled": true
      }
    ],
    "content_to_check": ["headers", "path_and_query", "body"],
    "action": "block",
    "status_code": 400,
    "error_message": "Code injection detected",
    "sanitize_char": "X"
  }
}
```

### Configuration Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|-----------|
| languages | array | Languages to check | Yes |
| content_to_check | array | Request parts to analyze | Yes |
| action | string | "block" or "sanitize" | Yes |
| status_code | number | HTTP status code for blocked requests | No |
| error_message | string | Custom error message | No |
| sanitize_char | string | Character for sanitization | No |

## Usage Example

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sanitized Gateway",
    "subdomain": "sanitized",
    "required_plugins": [
      {
        "name": "code_sanitation",
        "enabled": true,
        "stage": "pre_request",
        "settings": {
          "languages": [
            {
              "language": "javascript",
              "enabled": true
            }
          ],
          "content_to_check": ["body"],
          "action": "block",
          "status_code": 400
        }
      }
    ]
  }'
```

## Best Practices

1. **Language Selection**
   - Enable only needed languages
   - Consider application context
   - Monitor false positive rates

2. **Action Selection**
   - Use "block" for high-security needs
   - Use "sanitize" for content filtering
   - Consider user experience impact

3. **Content Selection**
   - Check relevant request parts
   - Balance security vs performance
   - Monitor sanitization results

4. **Pattern Updates**
   - Keep patterns up to date
   - Test new patterns thoroughly
   - Document pattern changes

## Performance Considerations
- Pre-compiled regex patterns
- Efficient string matching
- Minimal memory usage
- Fast pattern matching
- Concurrent processing support 