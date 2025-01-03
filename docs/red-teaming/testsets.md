---
sidebar_position: 3
---

# Test Sets

Test Sets are a fundamental component of the NeuralTrust platform that enable you to create and manage collections of test cases for AI model evaluation. They work in conjunction with Evaluation Sets to provide comprehensive testing capabilities.

With Test Sets, you can:

- Create collections of test cases with specific testing objectives
- Generate test cases automatically from knowledge bases
- Organize tests by type (functional, security, compliance, etc.)
- Reuse test cases across multiple evaluation sets
- Track test results and metrics over time

Test Sets are particularly useful for:

- Systematic testing of model capabilities
- Security and vulnerability assessment
- Compliance verification
- Performance benchmarking
- Regression testing

## Test Set API Methods

```python
from neuraltrust import NeuralTrustApi

client = NeuralTrustApi(api_key="YOUR_API_KEY")

# List all test sets
client.testset.list()

# Create a new test set
client.testset.create(
    name="My Test Set",
    type="functional",
    evaluation_set_id="eval-123",
    knowledge_base_id="kb-456",
    num_questions=10
)

# Get a specific test set
client.testset.get(id="testset_123")

# Delete a test set
client.testset.delete(id="testset_123")
```
