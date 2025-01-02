---
sidebar_position: 3
---


# Evaluation Sets Overview

Evaluation sets are used to assess the performance of your LLM application against defined criteria and metrics. They help you systematically test and measure your application's output quality.

Here are the key functions and how they work:

## 1. Creating an Evaluation Set

```python
eval_set = client.create_evaluation_set(
    name="My Eval Set", 
    description="A test evaluation set"
)
```

This function:
- Creates a new evaluation set with a custom name and description
- Returns an `EvaluationSetResponse` object containing the ID of the created set
- Used to organize your test cases into logical groups
- Parameters:
  - `name`: String identifier for the evaluation set
  - `description`: Detailed description of what this evaluation set tests

## 2. Running an Evaluation Set

```python
eval_set = client.run_evaluation_set(id="eval_set_id")
```

This function:
- Executes all test cases within the specified evaluation set
- Collects performance metrics and results
- Returns the evaluation results
- Parameters:
  - `id`: The unique identifier of the evaluation set to run

Example with configuration:
```python
# Run with custom scheduler
eval_set = client.create_evaluation_set(
    name="Scheduled Tests",
    description="Tests that run on a schedule",
    scheduler="0 0 * * *"  # Runs daily at midnight
)

# Run the evaluation
results = client.run_evaluation_set(id=eval_set.id)
```

## 3. Getting Evaluation Set Details

```python
eval_set = client.get_evaluation_set(id="eval_set_id")
```

This function:
- Retrieves detailed information about a specific evaluation set
- Returns information including:
  - Configuration
  - Test cases
  - Historical results
  - Performance metrics
- Parameters:
  - `id`: The unique identifier of the evaluation set to retrieve

## 4. Deleting an Evaluation Set

```python
client.delete_evaluation_set(id="eval_set_id")
```

This function:
- Permanently removes an evaluation set
- Deletes all associated:
  - Test cases
  - Historical results
  - Configuration
- Parameters:
  - `id`: The unique identifier of the evaluation set to delete

## Real-World Example

Here's a complete example showing how to use evaluation sets:

```python
from neuraltrust import NeuralTrust

# Initialize the client
client = NeuralTrust(api_key="your_api_key")

# Create an evaluation set for testing customer service responses
eval_set = client.create_evaluation_set(
    name="Customer Service Quality",
    description="Evaluates response quality, accuracy, and tone for customer inquiries"
)

# Store the evaluation set ID
eval_set_id = eval_set.id

# Run the evaluation
results = client.run_evaluation_set(id=eval_set_id)

# Get detailed results
details = client.get_evaluation_set(id=eval_set_id)

# Once no longer needed
client.delete_evaluation_set(id=eval_set_id)
```

The evaluation sets can be used in conjunction with testsets and knowledge bases to create comprehensive testing scenarios for your LLM applications. They help ensure your AI responses maintain quality and consistency across different use cases.
