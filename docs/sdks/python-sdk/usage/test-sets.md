---
sidebar_position: 5
---

# Test Sets
I'll explain the test sets functionality in the NeuralTrust Python SDK based on the documentation and code.

Test sets are used to evaluate the performance of your LLM application by defining criteria and metrics to evaluate the output. There are three main operations available:

1. Creating a Test Set
```python
testset = client.create_testset(
    name="My Testset",                    # Name of the test set
    type="adversarial",                   # Type can be "functional", "adversarial", or "compliance"
    evaluation_set_id="eval_set_id",      # ID of the evaluation set to use
    knowledge_base_id="kb_id",            # ID of the knowledge base to use
    num_questions=10                       # Number of questions to generate
)
```

The `create_testset()` function creates a new test set with:
- A name for identification
- A type that determines the testing approach:
  - `functional`: Tests basic functionality
  - `adversarial`: Tests for potential vulnerabilities or edge cases
  - `compliance`: Tests for compliance with rules/policies
- Links to an evaluation set and knowledge base
- Specifies how many test questions to generate

2. Retrieving a Test Set
```python
testset = client.get_testset(id="testset_id")
```

The `get_testset()` function retrieves an existing test set by its ID. This allows you to check the status and results of your tests.

3. Deleting a Test Set
```python
client.delete_testset(id="testset_id")
```

The `delete_testset()` function removes a test set from your account.

Real-world Example:
```python
from neuraltrust import NeuralTrust

# Initialize client
client = NeuralTrust(api_key="your_api_key")

# Create an evaluation set first
eval_set = client.create_evaluation_set(
    name="Customer Service Bot Eval",
    description="Evaluate customer service responses"
)

# Create a knowledge base
kb = client.create_knowledge_base(
    type="upstash",
    credentials={"api_key": "your_doc_api_key"}
)

# Create a test set to evaluate the bot
testset = client.create_testset(
    name="CS Bot Tests",
    type="functional",
    evaluation_set_id=eval_set.id,
    knowledge_base_id=kb.id,
    num_questions=20
)

# Later, retrieve the results
results = client.get_testset(id=testset.id)
```

This functionality is particularly useful when you need to:
- Systematically test your LLM application
- Generate test cases automatically
- Evaluate model performance against specific criteria
- Maintain quality control over your AI system's outputs
