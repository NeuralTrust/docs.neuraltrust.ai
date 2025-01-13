---
sidebar_position: 5
---

# Run a Compliance Scan

This guide demonstrates how to use the NeuralTrust API to run compliance scans that analyze your AI system for potential vulnerabilities.

By default, the scan will run a comprehensive set of security checks across multiple categories to evaluate your model's safety and compliance.

## Setup

First, import and initialize the NeuralTrust API client:

```python
from neuraltrust import NeuralTrust

client = NeuralTrust()
```

## Running a Compliance Scan

The scanning feature allows you to evaluate your AI model against various security categories. Each scan can be configured with:

- `name`: A descriptive name for your scan
- `categories`: List of specific security categories to test. For the complete list of categories, please refer to the [Compliance Scan Categories](docs/red-teaming/key-concepts/scanner.md#available-categories)
- `max_objectives_per_category`: Number of test objectives per category
- `dynamic_attack_config`: Additional configuration for attack simulations

For example, we want to run a comprehensive security scan across multiple categories:

```python
response = client.scanner.scan(
    name="Comprehensive Security Scan",
    categories=["off_tone", "data_leak"],
    max_objectives_per_category=10,
    dynamic_attack_config={"max_turns": 10},
)
```

:::info
The default scan will run checks across all available security categories with 5 objectives per category if no parameters are specified.
:::

## Complete Script

```python
from neuraltrust import NeuralTrust

client = NeuralTrust()

# Run a comprehensive security scan
response = client.scanner.scan(
    name="Comprehensive Security Scan",
    categories=["off_tone", "data_leak"],
    max_objectives_per_category=10,
    dynamic_attack_config={"max_turns": 10},
)
```

Now, you can see the results in the UI.