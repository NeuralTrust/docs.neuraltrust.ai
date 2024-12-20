---
sidebar_position: 1
---

# Python SDK

NeuralTrust Python SDK documentation.

## Installation

```bash
pip install neuraltrust
```

## Quick Start

```python
from neuraltrust import NeuralTrust

nt = NeuralTrust(api_key="your_api_key")

# Secure an LLM request
response = nt.secure({
    "provider": "openai",
    "model": "gpt-4",
    "messages": [
        {"role": "user", "content": "Hello, world!"}
    ]
})

# Access monitoring
metrics = nt.metrics.get_recent()

# Configure alerts
nt.alerts.create(
    name="High Error Rate",
    condition={
        "metric": "error_rate",
        "threshold": 0.05
    }
)
```

## Error Handling

```python
from neuraltrust.exceptions import NeuralTrustError

try:
    response = nt.secure({"prompt": "Hello"})
except NeuralTrustError as e:
    print(f"Error: {e.message}")
    print(f"Code: {e.code}")
``` 