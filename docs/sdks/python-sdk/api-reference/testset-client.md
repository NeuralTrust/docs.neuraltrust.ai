---
sidebar_position: 5
---

# TestsetClient

Client for managing testsets through the NeuralTrust API. This class provides methods for creating, retrieving, listing, and deleting testsets.

## Methods

### `list()`

```python
def list(
    self, 
    *, 
    request_options: Optional[RequestOptions] = None
) -> TestsetResponseList
```

Lists all available testsets.

#### Parameters:

- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `TestsetResponseList`: List of testset responses.

### `create()`

```python
def create(
    self,
    *,
    name: str,
    type: TestsetType,
    evaluation_set_id: str,
    knowledge_base_id: str,
    num_questions: int,
    request_options: Optional[RequestOptions] = None
) -> TestsetResponse
```

Creates a new testset.

#### Parameters:

- `name` (str): Name of the testset.
- `type` (TestsetType): Type of the testset.
- `evaluation_set_id` (str): ID of the evaluation set.
- `knowledge_base_id` (str): ID of the knowledge base.
- `num_questions` (int): Number of questions in the testset.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `TestsetResponse`: The created testset response.

### `get()`

```python
def get(
    self, 
    id: str, 
    *, 
    request_options: Optional[RequestOptions] = None
) -> TestsetResponse
```

Retrieves a specific testset by ID.

#### Parameters:

- `id` (str): ID of the testset to retrieve.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `TestsetResponse`: The requested testset response.

### `delete()`

```python
def delete(
    self, 
    id: str, 
    *, 
    request_options: Optional[RequestOptions] = None
) -> None
```

Deletes a specific testset by ID.

#### Parameters:

- `id` (str): ID of the testset to delete.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `None`

## Usage Example

```python
# Initialize the NeuralTrust client
client = NeuralTrust(api_key="your_api_key_here")

# List all testsets
testsets = client.testset.list()

# Create a new testset
new_testset = client.testset.create(
    name="My Test Set",
    type="functional",
    evaluation_set_id="eval_123",
    knowledge_base_id="kb_456",
    num_questions=10
)

# Get a specific testset
testset = client.testset.get(id="testset_123")

# Delete a testset
client.testset.delete(id="testset_123")
``` 