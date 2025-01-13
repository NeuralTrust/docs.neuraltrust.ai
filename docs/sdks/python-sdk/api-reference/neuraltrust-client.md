---
sidebar_position: 1
---

# NeuralTrust

Main client for interacting with the NeuralTrust API. This class provides the main interface for interacting with NeuralTrust services, handling authentication and providing access to various API endpoints.

## Constructor

```python
NeuralTrust(
    api_key: Optional[str] = None,
    base_url: Optional[str] = None,
    timeout: Optional[float] = None,
    follow_redirects: bool = True,
    sdk_version: str = "v1",
    async_client: bool = False
)
```

### Parameters:

- `api_key` (Optional[str]): API key for authentication. If not provided, will look for NEURALTRUST_API_KEY environment variable.
- `base_url` (Optional[str]): Base URL for the API. If not provided, will look for NEURALTRUST_BASE_URL environment variable or use default.
- `timeout` (Optional[float]): Timeout in seconds for API requests.
- `follow_redirects` (bool): Whether to follow HTTP redirects. Defaults to True.
- `sdk_version` (str): Version of the SDK to use. Defaults to "v1".
- `async_client` (bool): Whether to use async client. Defaults to False.

## Properties

### `api_key`

- Type: `str`
- Description: Get or set the API key used for authentication.

### `base_url`
- Type: `str`
- Description: Get or set the base URL for API requests.

### `evaluation_set`

- Type: `EvaluationSetClient`
- Description: Access to EvaluationSet related operations.

### `scanner`

- Type: `ScannerClient`
- Description: Access to scanner related operations.

### `testset`

- Type: `TestsetClient`
- Description: Access to testset related operations.

### `knowledge_base`

- Type: `KnowledgeBaseClient`
- Description: Access to knowledge base related operations.

## Methods

### `trace()`

```python
def trace(
    trace_id: Optional[str] = None,
    conversation_id: Optional[str] = None,
    session_id: Optional[str] = None,
    channel_id: Optional[str] = None,
    user: Optional[User] = None,
    metadata: Optional[Metadata] = None,
    custom: Optional[dict] = None
) -> "_Trace"
```

Creates a new Trace object for tracking events and interactions.

#### Parameters:

- `trace_id` (Optional[str]): Unique identifier for this trace.
- `conversation_id` (Optional[str]): The conversation ID. If not provided, a new UUID will be generated.
- `session_id` (Optional[str]): The session ID.
- `channel_id` (Optional[str]): The channel ID.
- `user` (Optional[User]): The user associated with the trace.
- `metadata` (Optional[Metadata]): Additional metadata for the trace.
- `custom` (Optional[dict]): Custom data to include with the trace.

#### Returns:

- `_Trace`: A new Trace object.

## Usage Example

```python
# Initialize the client
client = NeuralTrust(api_key="your_api_key_here")

# Create a trace
trace = client.trace(
    conversation_id="conv123",
    user=User(id="user123", name="John Doe"),
    metadata={"app_version": "1.0.0"}
)

# Use the trace to record events
trace.message("Hello").end("Response")
```
