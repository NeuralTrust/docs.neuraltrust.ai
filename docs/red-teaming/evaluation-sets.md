---
sidebar_position: 2
---

# Evaluation Sets

Evaluation Sets are a core feature of the NeuralTrust platform that allow you to systematically test and evaluate AI models. They provide a structured way to organize and automate collections of tests to assess model performance, safety, and compliance.

With Evaluation Sets, you can:

- Create reusable test collections for consistent model evaluation
- Schedule automated evaluations to run on a regular basis (daily, weekly, etc.)
- Track model performance and safety metrics over time
- Add custom metadata to organize and categorize your evaluation sets
- Run evaluations on-demand or automatically through the API

Evaluation Sets are particularly useful for:

- Quality assurance testing of AI models
- Continuous monitoring of model behavior
- Compliance verification and documentation
- Regression testing after model updates

## Evaluation Set API Methods

```python
from neuraltrust import NeuralTrustApi

client = NeuralTrustApi(api_key="YOUR_API_KEY")

# List all evaluation sets
client.evaluation_set.list()

# Create a new evaluation set
client.evaluation_set.create(name="My Set", description="...")

# Get a specific evaluation set
client.evaluation_set.get(id="evaluation_set_123")

# Update an existing evaluation set
client.evaluation_set.update(id="evaluation_set_123", ...)

# Delete an evaluation set
client.evaluation_set.delete(id="evaluation_set_123")

# Run an evaluation set
client.evaluation_set.run(id="evaluation_set_123")
```