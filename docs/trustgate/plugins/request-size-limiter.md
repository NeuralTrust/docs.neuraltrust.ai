---
sidebar_position: 10
title: Request Size Limiter
---

# Request Size Limiter

## Technical Overview
The Request Size Limiter plugin provides precise control over HTTP request sizes through multi-component analysis and enforcement. It implements efficient size checking without buffering entire requests.

### Core Components

1. **Size Analysis Engine**
   - Streaming size calculation
   - Header count tracking
   - Content-Length validation
   - Transfer-Encoding handling

2. **Limit Enforcement**
   - Early request termination
   - Partial request handling
   - Chunked transfer support
   - Multi-part form handling

3. **Resource Management**
   - Memory usage control
   - Buffer management
   - Connection handling
   - Timeout enforcement

## Size Control Mechanisms

### Header Control
- **Size Calculation**
  - Individual header sizes
  - Total header size
  - Header count tracking
  - Name-value pair analysis
  
- **Limit Enforcement**
  - Pre-parse rejection
  - Progressive checking
  - Early termination
  - Buffer management

### Body Control
- **Size Tracking**
  - Streaming measurement
  - Chunk size validation
  - Content-Length verification
  - Multi-part boundaries
  
- **Transfer Handling**
  - Chunked encoding
  - Content-Length
  - Multi-part forms
  - Raw body data

### URL Control
- **Length Calculation**
  - Path length
  - Query string size
  - Fragment size
  - Total URL length

## Processing Pipeline

1. **Request Reception**
   - Initial size check
   - Header processing
   - Body streaming
   - Resource allocation

2. **Size Validation**
   - Progressive checking
   - Limit comparison
   - Resource monitoring
   - Error detection

3. **Limit Enforcement**
   - Request termination
   - Error response
   - Resource cleanup
   - Logging

## Performance Optimization

### Memory Management
- No complete buffering
- Streaming processing
- Buffer pooling
- Resource limits

### Processing Efficiency
- Early rejection
- Progressive checking
- Minimal copying
- Zero allocations

### Connection Handling
- Keep-alive support
- Connection termination
- Timeout management
- Resource cleanup

## Error Handling

### Size Violations
- Header size exceeded
- Body size exceeded
- URL length exceeded
- Header count exceeded

### Protocol Errors
- Invalid Content-Length
- Malformed chunks
- Invalid headers
- Protocol violations

### Resource Errors
- Memory limits
- Connection timeouts
- System resources
- Network errors

## Features
- Configurable size limits
- Multiple request part checking
- Customizable error responses
- Byte-level precision
- Header count limiting

## Size Limits
The plugin can limit:

| Request Part | Description | Default |
|-------------|-------------|----------|
| Headers | Total headers size | 8KB |
| Body | Request body size | 1MB |
| URL | URL length | 2KB |
| Header Count | Number of headers | 100 |

## Configuration

```json
{
  "name": "request_size_limiter",
  "enabled": true,
  "stage": "pre_request",
  "settings": {
    "max_header_size": 8192,
    "max_body_size": 1048576,
    "max_url_length": 2048,
    "max_header_count": 100,
    "error_message": "Request size exceeds limit"
  }
}
```

### Configuration Parameters

| Parameter | Type | Description | Required | Default |
|-----------|------|-------------|-----------|----------|
| max_header_size | number | Maximum headers size in bytes | No | 8192 |
| max_body_size | number | Maximum body size in bytes | No | 1048576 |
| max_url_length | number | Maximum URL length in bytes | No | 2048 |
| max_header_count | number | Maximum number of headers | No | 100 |
| error_message | string | Custom error message | No | "Request size exceeds limit" |

## Usage Example

```bash
curl -X POST "http://localhost:8080/api/v1/gateways" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Size Limited Gateway",
    "subdomain": "size-limited",
    "required_plugins": [
      {
        "name": "request_size_limiter",
        "enabled": true,
        "stage": "pre_request",
        "settings": {
          "max_header_size": 8192,
          "max_body_size": 1048576,
          "max_url_length": 2048,
          "max_header_count": 100
        }
      }
    ]
  }'
```

## Best Practices

1. **Size Limit Selection**
   - Set limits based on requirements
   - Consider application needs
   - Monitor rejection rates

2. **Header Count Limits**
   - Set reasonable header limits
   - Account for standard headers
   - Consider proxy headers

3. **Error Handling**
   - Use clear error messages
   - Log rejected requests
   - Monitor trends

4. **Performance Tuning**
   - Adjust limits based on usage
   - Monitor resource usage
   - Balance security vs usability

## Performance Considerations
- Constant-time size checking
- Minimal memory overhead
- Early request rejection
- Efficient header counting
- No request buffering needed 