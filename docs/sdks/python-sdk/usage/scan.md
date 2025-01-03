---
sidebar_position: 3
---

# Compliance scann

This guide demonstrates how to use the Neural Trust scanning capabilities to analyze your AI system for potential vulnerabilities.

## Basic Setup

First, import and initialize the Neural Trust API client:

```python
from neuraltrust import NeuralTrustApi

client = NeuralTrustApi()
```

## Running Scans

### Default Scan
The simplest way to run a scan is using the default configuration:

```python
response = client.scanner.scan()
```

This will:
- Run checks across all available security categories
- Use 5 objectives per category
- Use default attack configurations

### Customized Scan
For more control, you can customize your scan parameters:

```python
response = client.scanner.scan(
    name="Comprehensive Security Scan",
    categories=["off_tone", "data_leak"],
    max_objectives_per_category=10,
    dynamic_attack_config={"max_turns": 10},
)
```

#### Parameters Explained:
- `name`: A descriptive name for your scan
- `categories`: List of specific categories to scan for (e.g., "off_tone", "data_leak")
- `max_objectives_per_category`: Maximum number of test objectives per category
- `dynamic_attack_config`: Additional configuration for attack simulations
  - `max_turns`: Maximum conversation turns for attack attempts

## Complete Script

Here's the complete script for reference:

```python
from neuraltrust import NeuralTrustApi

# Initialize the client
client = NeuralTrustApi()

# Default scan, using all categories, 5 objectives per category
response = client.scanner.scan()

# Example using a subset of scan categories, max 10 turns for conversation attack
response = client.scanner.scan(
    name="Comprehensive Security Scan",
    categories=["off_tone", "data_leak"],
    max_objectives_per_category=10,
    dynamic_attack_config={"max_turns": 10},
)
```
