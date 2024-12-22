---
sidebar_position: 4
---

# Benchmark

The AI Gateway has been tested under high load conditions to ensure optimal performance. This guide explains how to run benchmarks and interpret the results.

## Running Benchmarks

There are two methods to benchmark the gateway:

### 1. Automated Benchmark Script

Use our automated benchmark script for comprehensive testing:

```bash
./scripts/benchmark.sh
```

The script automatically:
- Verifies dependencies
- Creates a test gateway
- Configures forwarding rules
- Executes multiple benchmark scenarios

#### Configuration

Customize the benchmark using environment variables:

```bash
export ADMIN_URL="http://localhost:8080/api/v1"  # Admin API endpoint
export PROXY_URL="http://localhost:8081"         # Proxy endpoint
export CONCURRENT_USERS=50                       # Number of concurrent users
export DURATION="30s"                           # Test duration
```

### 2. Manual Testing

For custom benchmarks, use [hey](https://github.com/rakyll/hey):

1. Install hey:
```bash
go install github.com/rakyll/hey@latest
```

2. Run custom benchmarks:
```bash
# Set your gateway URL and API key
export GATEWAY_URL="http://localhost:8080"
export API_KEY="your-api-key"

# Run benchmark
hey -n 100000 -c 50 \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -m POST \
    -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hi"}]}' \
    "$GATEWAY_URL/v1/chat/completions"
```

## Performance Results

Recent benchmark results show impressive performance:

```
Summary:
  Total:        3.9210 secs
  Slowest:      0.1347 secs
  Fastest:      0.0004 secs
  Average:      0.0078 secs
  Requests/sec: 25503.4763

  Total data:   4900000 bytes
  Size/request: 49 bytes

Latency distribution:
  10% in 0.0047 secs
  25% in 0.0059 secs
  50% in 0.0073 secs
  75% in 0.0090 secs
  90% in 0.0109 secs
  95% in 0.0123 secs
  99% in 0.0158 secs
```

### Key Metrics

| Metric | Value | Description |
|--------|-------|-------------|
| Throughput | 25,500 req/s | Requests processed per second |
| Avg Latency | 7.8ms | Average response time |
| P99 Latency | 15.8ms | 99th percentile response time |
| Success Rate | 100% | Percentage of successful requests |

### Performance Characteristics

The gateway demonstrates:
- **Low Latency**: 90% of requests complete under 11ms
- **High Throughput**: Exceeds 25k requests per second
- **Stability**: Minimal performance variance
- **Reliability**: No failed requests during testing

## Notes

- Results were obtained in controlled conditions
- Actual performance may vary based on:
  - Network conditions
  - Hardware specifications
  - Specific use cases
  - Load patterns

## Best Practices

1. **Environment Setup**
   - Use production-grade hardware
   - Ensure sufficient network bandwidth
   - Configure appropriate system limits

2. **Test Configuration**
   - Start with lower concurrency
   - Gradually increase load
   - Monitor system resources

3. **Results Analysis**
   - Focus on P95 and P99 latencies
   - Monitor error rates
   - Check resource utilization
