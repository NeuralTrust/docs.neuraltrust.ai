---
sidebar_position: 3
---

# Evaluation Sets

Evaluation sets are used to evaluate the performance of your LLM application. They allow you to define a set of criteria and metrics to evaluate the output of your application.

## Evaluation Sets
```python
# Run evaluation set
eval_set = client.run_evaluation_set(id="eval_set_id")

# Create an evaluation set
eval_set = client.create_evaluation_set(name="My Eval Set", description="A test evaluation set")

# Get an evaluation set
eval_set = client.get_evaluation_set(id="eval_set_id")

# Delete an evaluation set
client.delete_evaluation_set(id="eval_set_id")
```