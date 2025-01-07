---
sidebar_position: 4
---

# Monitors

Monitoring LLM applications is essential for maintaining performance, controlling costs, and ensuring quality. Through the NeuralTrust platform, you can track key metrics and receive alerts when issues arise.

## Creating a Monitor

![Monitor Creation Interface](./assets/monitor-creation.png)

### Monitor Configuration

1. **Type**
Choose between Metric (static threshold) or Change (time-based comparison) monitoring.

2. **Metric Selection**
- Select from: Messages, Conversations, Dialog Time, or Words per prompt
- Choose evaluation method and time window
- Set alert and warning thresholds

3. **Notifications**
- Add email recipients for alerts
- Set monitor name and priority level

> **Note**: For metric type monitors, NeuralTrust calculates the average/minimum/maximum/sum during the selected period and compares it against your threshold.

## Best Practices

- Start with conservative thresholds based on historical data
- Include only necessary team members in notifications
- Review and adjust monitor settings periodically
- Archive monitors that are no longer needed