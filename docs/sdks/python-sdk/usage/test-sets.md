---
sidebar_position: 5
---

# Test Sets

Test sets are used to evaluate the performance of your LLM application. They allow you to define a set of criteria and metrics to evaluate the output of your application.

```python
# Create a testset
testset = client.create_testset(name="My Testset", type="adversarial", evaluation_set_id="eval_set_id", knowledge_base_id="kb_id", num_questions=10)

# Get a testset
testset = client.get_testset(id="testset_id")

# Delete a testset
client.delete_testset(id="testset_id")
```