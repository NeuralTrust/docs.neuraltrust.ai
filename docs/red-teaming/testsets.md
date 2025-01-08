---
sidebar_position: 3
---

# Test Sets

<<<<<<< Updated upstream
Test Sets are a fundamental component of the NeuralTrust platform that enable you to create and manage collections of test cases for AI model evaluation. Each test set contains multiple query-response pairs, where each pair consists of:

- **Query**: The prompt or input that will be sent to the LLM (e.g., "What is the capital of France?")
- **Expected Response**: The correct or desired response that the LLM should provide (e.g., "The capital of France is Paris.")

A single test set can contain dozens or hundreds of these query-response pairs, allowing you to thoroughly test your LLM across a wide range of scenarios. Test sets support both single-turn interactions and multi-turn conversations, enabling you to test:

- Simple question-answer pairs
- Complex dialogue scenarios with context
- Multi-turn conversations where previous interactions matter
- Conversation memory and context retention
- Chat history dependent responses

These test sets work in conjunction with Evaluation Sets to provide comprehensive testing capabilities for your LLM applications.

With Test Sets, you can:

- Create large collections of query-response pairs with specific testing objectives
- Generate multiple test cases automatically from knowledge bases
- Organize sets of tests by type (functional, security, compliance, etc.)
- Reuse test cases across multiple evaluation sets
- Track how well your LLM responses match the expected responses over time
- Test conversation flows and multi-turn interactions

Test Sets are particularly useful for:

- Systematic testing of model capabilities and accuracy across many scenarios
- Security and vulnerability assessment through multiple adversarial prompts
- Compliance verification with expected response patterns at scale
- Performance benchmarking against a comprehensive set of known good responses
- Regression testing to ensure model behavior remains consistent across updates
- Validation of contextual understanding in conversations

## Test Set API Methods

=======
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

>>>>>>> Stashed changes
```python
from neuraltrust import NeuralTrustApi

client = NeuralTrustApi(api_key="YOUR_API_KEY")

# List all test sets
client.testset.list()

# Create a new test set
<<<<<<< Updated upstream
# num_questions parameter determines how many query-response pairs 
# will be generated from the knowledge base
=======
>>>>>>> Stashed changes
client.testset.create(
    name="My Test Set",
    type="functional",
    evaluation_set_id="eval-123",
    knowledge_base_id="kb-456",
<<<<<<< Updated upstream
    num_questions=10  # Will generate 10 query-response pairs
=======
    num_questions=10
>>>>>>> Stashed changes
)

# Get a specific test set
client.testset.get(id="testset_123")

# Delete a test set
client.testset.delete(id="testset_123")
```
<<<<<<< Updated upstream

For more information, see the [Test Sets API Reference](docs/sdks/python-sdk/api-reference/testset-client.md).
=======
>>>>>>> Stashed changes
