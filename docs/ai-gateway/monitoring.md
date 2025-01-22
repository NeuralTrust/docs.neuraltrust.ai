---
sidebar_position: 5
title: Monitoring
---

# Monitoring TrustGate

TrustGate provides comprehensive monitoring capabilities through a Prometheus metrics endpoint. This guide explains how to access and interpret these metrics to monitor your gateway's performance and health.

## Configuration

Metrics collection can be configured in your TrustGate configuration file:

```yaml
server:
  admin_port: 8080
  metrics_port: 9090  # Port where metrics are exposed
  proxy_port: 8081
  base_domain: example.com

metrics:
  enabled: true               # Enable/disable all metrics
  enable_latency: true       # Basic latency metrics
  enable_upstream: true      # Upstream latency (high cardinality)
  enable_connections: true   # Connection tracking
  enable_per_route: true    # Per-route metrics (high cardinality)
  enable_detailed_status: true # Detailed status codes
```

Each metric type can be individually enabled or disabled to control cardinality and resource usage. High-cardinality metrics like per-route and upstream latency should be enabled with caution in large deployments.

## Metrics Endpoint

TrustGate exposes metrics at the `/metrics` endpoint in Prometheus format. These metrics provide insights into request processing, latency, connections, and overall system health.

## Available Metrics

### Connection Metrics

```
# HELP trustgate_connections Number of active connections
# TYPE trustgate_connections gauge
```

This gauge metric tracks the number of active connections to your gateway. It includes the following labels:
- `gateway_id`: Unique identifier for the gateway instance
- `state`: Connection state (e.g., "active")

### Request Metrics

```
# HELP trustgate_requests_total Total number of requests processed
# TYPE trustgate_requests_total counter
```

This counter tracks the total number of requests processed by the gateway with labels for:
- `gateway_id`: Gateway instance identifier
- `method`: HTTP method (GET, POST, etc.)
- `status`: HTTP status code category (2xx, 4xx, 5xx)

### Latency Metrics

TrustGate provides three types of latency histograms:

1. **Overall Request Latency**
```
# HELP trustgate_latency_ms Request latency in milliseconds
# TYPE trustgate_latency_ms histogram
```

2. **Detailed Route/Service Latency**
```
# HELP trustgate_detailed_latency_ms Detailed request latency by service and route
# TYPE trustgate_detailed_latency_ms histogram
```

3. **Upstream Service Latency**
```
# HELP trustgate_upstream_latency_ms Upstream service latency in milliseconds
# TYPE trustgate_upstream_latency_ms histogram
```

All latency metrics include bucket ranges from 5ms to 30s and provide:
- `gateway_id`: Gateway instance identifier
- `route`: Route ID (for detailed and upstream metrics)
- `service`: Service ID (for detailed and upstream metrics)
- `type`: Request path (for overall latency)

### Prometheus Handler Metrics

```
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served
# TYPE promhttp_metric_handler_requests_in_flight gauge

# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code
# TYPE promhttp_metric_handler_requests_total counter
```

These metrics provide information about the Prometheus metrics endpoint itself.

## Monitoring Setup

### Prometheus Configuration

Add TrustGate as a target in your Prometheus configuration:

```yaml
scrape_configs:
  - job_name: 'trustgate'
    static_configs:
      - targets: ['localhost:8080']
    metrics_path: '/metrics'
```

### Grafana Dashboard

Create a Grafana dashboard to visualize key metrics:

1. **Request Overview**
   - Total requests by status code
   - Request rate over time
   - Active connections

2. **Latency Metrics**
   - Overall request latency (p50, p90, p99)
   - Service-specific latency
   - Upstream latency distribution

3. **Service Health**
   - Success rate by service
   - Error rate by route
   - Connection status

## Example PromQL Queries

### Request Rate
```promql
rate(trustgate_requests_total{status="2xx"}[5m])
```

### 95th Percentile Latency
```promql
histogram_quantile(0.95, sum(rate(trustgate_detailed_latency_ms_bucket{}[5m])) by (le, service))
```

### Error Rate
```promql
sum(rate(trustgate_requests_total{status=~"4xx|5xx"}[5m])) by (status)
```

### Active Connections
```promql
trustgate_connections{state="active"}
```

## Best Practices

1. **Alert Configuration**
   - Set up alerts for high error rates
   - Monitor latency thresholds
   - Track connection limits
   - Watch for request spikes

2. **Dashboard Organization**
   - Group related metrics
   - Use appropriate time ranges
   - Include service-level views
   - Add error tracking panels

3. **Metric Collection**
   - Set appropriate scrape intervals
   - Configure retention periods
   - Monitor metric cardinality
   - Use label aggregation

4. **Performance Monitoring**
   - Track latency trends
   - Monitor resource usage
   - Watch for bottlenecks
   - Analyze traffic patterns

## Troubleshooting

Common monitoring issues and solutions:

1. **High Latency**
   - Check upstream service latency
   - Review connection pooling
   - Monitor resource usage
   - Analyze request patterns

2. **Error Spikes**
   - Check service health
   - Review error logs
   - Monitor rate limits
   - Verify configurations

3. **Connection Issues**
   - Check network connectivity
   - Review connection limits
   - Monitor timeout settings
   - Verify DNS resolution

## Next Steps

- Set up Prometheus and Grafana
- Configure alerting rules
- Create custom dashboards
- Implement logging integration 