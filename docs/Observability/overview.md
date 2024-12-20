---
sidebar_position: 1
---

# Observability Overview

Monitor, track, and analyze your LLM applications with NeuralTrust's observability tools.

## Features

- Real-time metrics
- Detailed logging
- Request tracing
- Performance analytics
- Cost tracking
- Usage insights

## Dashboard

Access your metrics through our comprehensive dashboard:
- Request volumes
- Response times
- Error rates
- Token usage
- Cost analysis

## Integration

```javascript
const nt = new NeuralTrust({
  observability: {
    metrics: true,
    logging: true,
    tracing: true,
    alerting: true
  }
});
``` 