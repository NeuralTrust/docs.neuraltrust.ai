---
sidebar_position: 6
---

# EvaluationSetClient

Client for managing evaluation sets through the NeuralTrust API. This class provides methods for creating, retrieving, updating, deleting, and running evaluation sets.

## Methods

### `list()`

```python
def list(
    self,
    *,
    request_options: Optional[RequestOptions] = None
) -> EvaluationSetResponseList
```

Lists all evaluation sets.

#### Parameters:

- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponseList`: List of evaluation sets.

### `create()`

```python
def create(
    self,
    *,
    name: str,
    description: str,
    scheduler: Optional[str] = OMIT,
    metadata: Optional[Metadata] = OMIT,
    request_options: Optional[RequestOptions] = None
) -> EvaluationSetResponse
```

Creates a new evaluation set.

#### Parameters:

- `name` (str): Name of the evaluation set.
- `description` (str): Description of the evaluation set.
- `scheduler` (Optional[str]): Scheduler of the evaluation set.
- `metadata` (Optional[Metadata]): Additional metadata for the evaluation set.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponse`: The created evaluation set.

### `get()`

```python
def get(
    self,
    id: str,
    *,
    request_options: Optional[RequestOptions] = None
) -> EvaluationSetResponse
```

Retrieves a specific evaluation set.

#### Parameters:

- `id` (str): ID of the evaluation set to retrieve.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponse`: The requested evaluation set.

### `update()`

```python
def update(
    self,
    id: str,
    *,
    name: str,
    description: str,
    scheduler: Optional[str] = OMIT,
    metadata: Optional[Metadata] = OMIT,
    request_options: Optional[RequestOptions] = None
) -> EvaluationSetResponse
```

Updates an existing evaluation set.

#### Parameters:

- `id` (str): ID of the evaluation set to update.
- `name` (str): New name for the evaluation set.
- `description` (str): New description for the evaluation set.
- `scheduler` (Optional[str]): New scheduler for the evaluation set.
- `metadata` (Optional[Metadata]): New metadata for the evaluation set.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponse`: The updated evaluation set.

### `delete()`

```python
def delete(
    self,
    id: str,
    *,
    request_options: Optional[RequestOptions] = None
) -> None
```

Deletes an evaluation set.

#### Parameters:

- `id` (str): ID of the evaluation set to delete.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

### `run()`

```python
def run(
    self,
    id: str,
    *,
    evaluation_set_run_id: Optional[str] = OMIT,
    request_options: Optional[RequestOptions] = None
) -> None
```

Runs an evaluation set.

#### Parameters:

- `id` (str): ID of the evaluation set to run.
- `evaluation_set_run_id` (Optional[str]): ID for the evaluation set run.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

## Usage Example

```python
# Initialize the NeuralTrust client
client = NeuralTrust(api_key="your_api_key_here")

# Create a new evaluation set
evaluation_set = client.evaluation_set.create(
    name="Test Evaluation Set",
    description="A test evaluation set",
    metadata={"environment": "staging"}
)

# Get an evaluation set by ID
retrieved_set = client.evaluation_set.get(id=evaluation_set.id)

# Update an evaluation set
updated_set = client.evaluation_set.update(
    id=evaluation_set.id,
    name="Updated Test Set",
    description="An updated test evaluation set"
)

# Run an evaluation set
client.evaluation_set.run(id=evaluation_set.id)

# List all evaluation sets
all_sets = client.evaluation_set.list()

# Delete an evaluation set
client.evaluation_set.delete(id=evaluation_set.id)
``` 