---
sidebar_position: 5
---

# Alerts

Configure and manage alerts for your LLM applications.

## Alert Types

### Performance Alerts
- High latency
- Error rate spikes
- Queue buildup
- Token usage limits

### Security Alerts
- Prompt injection attempts
- Unusual usage patterns
- Authentication failures
- Data leakage detection

## Alert Configuration

```javascript
const alert = await nt.alerts.create({
  name: 'High Error Rate',
  condition: {
    metric: 'error_rate',
    threshold: 0.05,
    window: '5m'
  },
  notifications: {
    email: ['team@example.com'],
    slack: 'webhook_url',
    pagerduty: 'routing_key'
  }
});
```

## Alert Management

```javascript
// List active alerts
const alerts = await nt.alerts.list();

// Update alert
await nt.alerts.update('alert_id', {
  enabled: false
});

// Delete alert
await nt.alerts.delete('alert_id');
``` 