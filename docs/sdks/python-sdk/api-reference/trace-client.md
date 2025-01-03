---
sidebar_position: 7
---

# TraceClient

Client for interacting with the NeuralTrust Trace API. This class provides functionality for creating and managing traces of interactions and events in the NeuralTrust system.

## Constructor

```python
TraceClient(*, client_wrapper: SyncClientWrapper)
```

### Parameters:

- `client_wrapper` (SyncClientWrapper): The client wrapper instance for making HTTP requests.

## Methods

### `trace()`

```python
def trace(
    *,
    conversation_id: str,
    interaction_id: str,
    type: str,
    task: TraceTask,
    session_id: Optional[str] = OMIT,
    channel_id: Optional[str] = OMIT,
    input: Optional[str] = OMIT,
    output: Optional[str] = OMIT,
    feedback_tag: Optional[TraceFeedbackTag] = OMIT,
    feedback_text: Optional[str] = OMIT,
    start_timestamp: Optional[str] = OMIT,
    end_timestamp: Optional[str] = OMIT,
    latency: Optional[int] = OMIT,
    custom: Optional[str] = OMIT,
    user: Optional[User] = OMIT,
    metadata: Optional[Metadata] = OMIT,
    request_options: Optional[RequestOptions] = None
) -> TraceResponse
```

Creates a new trace entry in the system.

#### Parameters:

- `conversation_id` (str): Unique identifier for the conversation.
- `interaction_id` (str): Unique identifier for the interaction.
- `type` (str): Type of trace being recorded.
- `task` (TraceTask): Task to perform.
- `session_id` (Optional[str]): Session identifier.
- `channel_id` (Optional[str]): Channel identifier.
- `input` (Optional[str]): Content to retrieve or generate.
- `output` (Optional[str]): Generated content.
- `feedback_tag` (Optional[TraceFeedbackTag]): Feedback tag for the trace.
- `feedback_text` (Optional[str]): Feedback text content.
- `start_timestamp` (Optional[str]): Start timestamp of the trace.
- `end_timestamp` (Optional[str]): End timestamp of the trace.
- `latency` (Optional[int]): Latency of the trace in milliseconds.
- `custom` (Optional[str]): Custom data to include with the trace.
- `user` (Optional[User]): User associated with the trace.
- `metadata` (Optional[Metadata]): Additional metadata for the trace.
- `request_options` (Optional[RequestOptions]): Request-specific configuration.

#### Returns:

- `TraceResponse`: Response containing the trace information.

#### Raises:

- `MethodNotAllowedError`: When the HTTP method is not allowed.
- `ApiError`: When an API error occurs.

## Usage Example

```python
from neuraltrust import NeuralTrustApi
from neuraltrust.types import User, Metadata

# Initialize the client
client = NeuralTrustApi(api_key="YOUR_API_KEY")

# Create a trace
response = client.trace.trace(
    conversation_id="conv123",
    interaction_id="int456",
    type="message",
    task="retrieval",
    user=User(id="user123", name="John Doe"),
    metadata={"app_version": "1.0.0"}
)
```

## Async Support

The TraceClient also provides an async version `AsyncTraceClient` with identical methods but supporting asynchronous operations.

### Async Usage Example

```python
import asyncio
from neuraltrust import AsyncNeuralTrustApi

async def main():
    client = AsyncNeuralTrustApi(api_key="YOUR_API_KEY")
    
    response = await client.trace.trace(
        conversation_id="conv123",
        interaction_id="int456",
        type="message",
        task="retrieval"
    )

asyncio.run(main())
``` 