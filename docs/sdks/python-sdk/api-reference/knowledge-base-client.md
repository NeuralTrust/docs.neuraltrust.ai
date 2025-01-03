---
sidebar_position: 8
---

# KnowledgeBaseClient

Client for interacting with NeuralTrust Knowledge Base API endpoints. This class provides methods for creating, retrieving, and deleting knowledge bases.

## Methods

### `create()`

```python
def create(
    *,
    type: str,
    credentials: Dict[str, Optional[Any]],
    seed_topics: Optional[Sequence[str]] = None,
    request_options: Optional[RequestOptions] = None
) -> KnowledgeBaseResponse
```

Creates a new knowledge base.

#### Parameters:

- `type` (str): Type of the knowledge base
- `credentials` (Dict[str, Optional[Any]]): Credentials of the knowledge base
- `seed_topics` (Optional[Sequence[str]]): Seed topics of the knowledge base
- `request_options` (Optional[RequestOptions]): Request-specific configuration

#### Returns:

- `KnowledgeBaseResponse`: Response containing the created knowledge base information

### `get()`

```python
def get(
    id: str,
    *,
    request_options: Optional[RequestOptions] = None
) -> KnowledgeBaseResponse
```

Retrieves a knowledge base by ID.

#### Parameters:

- `id` (str): ID of the knowledge base to retrieve
- `request_options` (Optional[RequestOptions]): Request-specific configuration

#### Returns:

- `KnowledgeBaseResponse`: Response containing the knowledge base information

### `delete()`

```python
def delete(
    id: str,
    *,
    request_options: Optional[RequestOptions] = None
) -> KnowledgeBaseResponse
```

Deletes a knowledge base by ID.

#### Parameters:

- `id` (str): ID of the knowledge base to delete
- `request_options` (Optional[RequestOptions]): Request-specific configuration

#### Returns:

- `KnowledgeBaseResponse`: Response containing the deleted knowledge base information

## Usage Example

```python
# Initialize the NeuralTrust client
client = NeuralTrust(api_key="your_api_key_here")

# Create a new knowledge base
knowledge_base = client.knowledge_base.create(
    type="document",
    credentials={"api_key": "your_credentials"},
    seed_topics=["AI", "Machine Learning"]
)

# Get a knowledge base by ID
kb = client.knowledge_base.get(id="kb_123")

# Delete a knowledge base
deleted_kb = client.knowledge_base.delete(id="kb_123")
``` 