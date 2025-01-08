---
sidebar_position: 2
---

# Quick Start

This guide will help you get started with Neural Trust quickly using our Python SDK.

## Installation

First, install the Neural Trust Python SDK using pip:

```bash
pip install neuraltrust
```

## Environment Setup

Create a `.env` file in your project root with your Neural Trust credentials:

```plaintext
NEURALTRUST_API_KEY=your_api_key_here
UPSTASH_URL=your_upstash_url    # Optional: Required only for knowledge bases
UPSTASH_TOKEN=your_upstash_token # Optional: Required only for knowledge bases
```

Load these environment variables in your Python code:

```python
import os
from dotenv import load_dotenv
from neuraltrust import NeuralTrust

load_dotenv()
client = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"))
```

## Quick Examples

### Running a Basic Security Scan

```python
# Run a basic security scan
scan_result = client.scanner.scan(
    name="Quick Security Check",
    categories=["off_tone", "data_leak"],
    max_objectives_per_category=5
)

print(f"Scan completed with ID: {scan_result.id}")
```

### Creating and Running an Evaluation Set

```python
# Create a knowledge base
knowledge_base = client.knowledge_base.create(
    type="upstash",
    credentials={
        "UPSTASH_URL": os.getenv("UPSTASH_URL"),
        "UPSTASH_TOKEN": os.getenv("UPSTASH_TOKEN"),
    },
    seed_topics=["Customer Service"]
)

# Create an evaluation set
eval_set = client.evaluation_set.create(
    name="Basic Customer Service Evaluation",
    description="Testing customer service responses"
)

# Generate test cases
test_set = client.testset.create(
    name="Customer Service Tests",
    type="adversarial",
    evaluation_set_id=eval_set.id,
    num_questions=5,
    knowledge_base_id=knowledge_base.id
)

# Run the evaluation
client.evaluation_set.run(id=eval_set.id)
```

### Checking Evaluation Results

```python
# List all evaluation sets
evaluation_sets = client.evaluation_sets.list()

# Get details of a specific evaluation
eval_details = client.evaluation_set.get(id=eval_set.id)
print(f"Evaluation Status: {eval_details.status}")
```

## Next Steps

For more detailed information, check out these guides:

- [Detailed Tracing Guide](../observability/tracing.md)
- [Evaluation Sets Documentation](../red-teaming/evaluation-sets.md)
- [Knowledge Base Guide](../red-teaming/knowledge-bases.md)
- [Test Sets Documentation](../red-teaming/testsets.md)
- [Security Scanning Guide](../sdks/python-sdk/usage/scan.md)
