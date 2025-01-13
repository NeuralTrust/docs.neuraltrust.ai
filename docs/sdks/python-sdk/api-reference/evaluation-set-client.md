---
sidebar_position: 6
---

# EvaluationSetClient

Client for managing EvaluationSets through the NeuralTrust API. This class provides methods for creating, retrieving, updating, deleting, and running EvaluationSets.

## Methods

### `list()`

```python
def list(
    self,
    *,
    request_options: Optional[RequestOptions] = None
) -> EvaluationSetResponseList
```

Lists all EvaluationSets.

#### Parameters:

- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponseList`: List of EvaluationSets.

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

Creates a new EvaluationSet.

#### Parameters:

- `name` (str): Name of the EvaluationSet.
- `description` (str): Description of the EvaluationSet.
- `scheduler` (Optional[str]): Scheduler of the EvaluationSet.
- `metadata` (Optional[Metadata]): Additional metadata for the EvaluationSet.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponse`: The created EvaluationSet.

### `get()`

```python
def get(
    self,
    id: str,
    *,
    request_options: Optional[RequestOptions] = None
) -> EvaluationSetResponse
```

Retrieves a specific EvaluationSet.

#### Parameters:

- `id` (str): ID of the EvaluationSet to retrieve.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponse`: The requested EvaluationSet.

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

Updates an existing EvaluationSet.

#### Parameters:

- `id` (str): ID of the EvaluationSet to update.
- `name` (str): New name for the EvaluationSet.
- `description` (str): New description for the EvaluationSet.
- `scheduler` (Optional[str]): New scheduler for the EvaluationSet.
- `metadata` (Optional[Metadata]): New metadata for the EvaluationSet.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `EvaluationSetResponse`: The updated EvaluationSet.

### `delete()`

```python
def delete(
    self,
    id: str,
    *,
    request_options: Optional[RequestOptions] = None
) -> None
```

Deletes an EvaluationSet.

#### Parameters:

- `id` (str): ID of the EvaluationSet to delete.
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

Runs an EvaluationSet.

#### Parameters:

- `id` (str): ID of the EvaluationSet to run.
- `evaluation_set_run_id` (Optional[str]): ID for the EvaluationSet run.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

## Usage Example

```python
# Initialize the NeuralTrust client
client = NeuralTrust(api_key="your_api_key_here")

# Create a new EvaluationSet
evaluation_set = client.evaluation_set.create(
    name="Test EvaluationSet",
    description="A test EvaluationSet",
    metadata={"environment": "staging"}
)

# Get an EvaluationSet by ID
retrieved_set = client.evaluation_set.get(id=evaluation_set.id)

# Update an EvaluationSet
updated_set = client.evaluation_set.update(
    id=evaluation_set.id,
    name="Updated TestSet",
    description="An updated test EvaluationSet"
)

# Run an EvaluationSet
client.evaluation_set.run(id=evaluation_set.id)

# List all EvaluationSets
all_sets = client.evaluation_set.list()

# Delete an EvaluationSet
client.evaluation_set.delete(id=evaluation_set.id)
``` 