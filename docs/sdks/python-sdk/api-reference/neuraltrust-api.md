---
sidebar_position: 3
---

# NeuralTrustApi

Main client for interacting with the NeuralTrust API. This class provides synchronous access to various NeuralTrust services, handling authentication and request configuration.

## Constructor

```python
NeuralTrustApi(
    api_key: str,
    base_url: Optional[str] = None,
    environment: NeuralTrustApiEnvironment = NeuralTrustApiEnvironment.DEFAULT,
    timeout: Optional[float] = None,
    follow_redirects: Optional[bool] = True,
    httpx_client: Optional[httpx.Client] = None
)
```

### Parameters:

- `api_key` (str): API key for authentication.
- `base_url` (Optional[str]): Base URL for the API. If not provided, will use the environment URL.
- `environment` (NeuralTrustApiEnvironment): The environment to use for requests. Defaults to NeuralTrustApiEnvironment.DEFAULT.
- `timeout` (Optional[float]): Timeout in seconds for API requests. Defaults to 60 seconds if no custom httpx client is provided.
- `follow_redirects` (Optional[bool]): Whether to follow HTTP redirects. Defaults to True.
- `httpx_client` (Optional[httpx.Client]): Custom httpx client for making requests. If not provided, a default client will be created.

## Properties

### `trace`

- Type: `TraceClient`
- Description: Access to trace related operations.

### `evaluation_set`

- Type: `EvaluationSetClient`
- Description: Access to evaluation set related operations.

### `testset`

- Type: `TestsetClient`
- Description: Access to testset related operations.

### `knowledge_base`

- Type: `KnowledgeBaseClient`
- Description: Access to knowledge base related operations.

### `scanner`

- Type: `ScannerClient`
- Description: Access to scanner related operations.

## Usage Example

```python
from neuraltrust import NeuralTrustApi

# Initialize the client
client = NeuralTrustApi(
    api_key="your_api_key_here",
    timeout=30,  # Optional: custom timeout in seconds
)

# Access different services
trace_client = client.trace
evaluation_client = client.evaluation_set
testset_client = client.testset
knowledge_base_client = client.knowledge_base
scanner_client = client.scanner
```

## AsyncNeuralTrustApi

For asynchronous operations, use the `AsyncNeuralTrustApi` class which has the same interface but works with `async/await` patterns. The constructor accepts an `httpx.AsyncClient` instead of `httpx.Client` and returns async versions of all service clients.

```python
from neuraltrust import AsyncNeuralTrustApi

# Initialize the async client
client = AsyncNeuralTrustApi(
    api_key="your_api_key_here"
)

# Use async clients
async_trace_client = client.trace
async_evaluation_client = client.evaluation_set
# etc.
```