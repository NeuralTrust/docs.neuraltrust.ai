---
sidebar_position: 2
---

# Trace

Class for creating and managing traces in the NeuralTrust system. This class captures details about interactions or events, including metadata, timing information, and content.

## Constructor

```python
Trace(
    client: TraceClient,
    trace_id: Optional[str] = None,
    interaction_id: Optional[str] = None,
    conversation_id: Optional[str] = None,
    channel_id: Optional[str] = None,
    session_id: Optional[str] = None,
    user: Optional[User] = None,
    metadata: Optional[Metadata] = None,
    custom: Optional[dict] = None
)
```

### Parameters:

- `client` (TraceClient): The TraceClient instance used to send traces
- `trace_id` (Optional[str]): Unique identifier for this specific trace
- `interaction_id` (Optional[str]): ID that can be shared across multiple related traces
- `conversation_id` (Optional[str]): Unique identifier for the conversation
- `channel_id` (Optional[str]): Optional identifier for the communication channel
- `session_id` (Optional[str]): Optional identifier for the user session
- `user` (Optional[User]): Optional User object containing user information
- `metadata` (Optional[Metadata]): Optional metadata dictionary
- `custom` (Optional[dict]): Optional custom data dictionary

## Methods

### `message()`

```python
def message(input: str) -> "Trace"
```

Start a message trace.

#### Parameters:

- `input` (str): The input message to trace

#### Returns:

- `Trace`: A new Trace object initialized with the message event

### `tool()`

```python
def tool(input: str, parent_id: Optional[str] = None) -> "Trace"
```

Start a tool trace.

#### Parameters:

- `input` (str): The input for the tool event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized with the tool event

### `agent()`

```python
def agent(input: str, parent_id: Optional[str] = None) -> "Trace"
```

Start an agent trace.

#### Parameters:

- `input` (str): The input for the agent event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized with the agent event

### `retrieval()`

```python
def retrieval(input: str, parent_id: Optional[str] = None) -> "Trace"
```

Start a retrieval trace.

#### Parameters:

- `input` (str): The input for the retrieval event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized with the retrieval event

### `generation()`

```python
def generation(input: str, parent_id: Optional[str] = None) -> "Trace"
```

Start a generation trace.

#### Parameters:

- `input` (str): The input for the generation event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized with the generation event

### `router()`

```python
def router(input: str, parent_id: Optional[str] = None) -> "Trace"
```

Start and automatically end a router trace.

#### Parameters:

- `input` (str): The input for the router event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized and completed with the router event

### `event()`

```python
def event(input: str, parent_id: Optional[str] = None) -> "Trace"
```

Record a custom event trace.

#### Parameters:

- `input` (str): The input for the custom event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized and completed with the custom event

### `system()`

```python
def system(prompt: Union[str, object], parent_id: Optional[str] = None) -> "Trace"
```

Record a system trace.

#### Parameters:

- `prompt` (Union[str, object]): The input for the system event
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized and completed with the system event

### `feedback()`

```python
def feedback(
    feedback_tag: FeedbackTag,
    feedback_text: str,
    parent_id: Optional[str] = None
) -> "Trace"
```

Record a feedback trace.

#### Parameters:

- `feedback_tag` (FeedbackTag): The type/category of feedback being provided
- `feedback_text` (str): The actual feedback content
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: A new Trace object initialized and completed with the feedback event

### `end()`

```python
def end(output: Union[str, object]) -> "Trace"
```

End the current trace and record its output.

#### Parameters:

- `output` (Union[str, object]): The output/result of the trace

#### Returns:

- `Trace`: The current Trace object with completed trace data

### `send()`

```python
def send(
    event_type: EventType,
    input: str,
    output: Optional[str] = None,
    latency: Optional[int] = None,
    start_timestamp: Optional[int] = None,
    end_timestamp: Optional[int] = None,
    parent_id: Optional[str] = None
) -> "Trace"
```

Send an atomic event to NeuralTrust.

#### Parameters:

- `event_type` (EventType): The type of event being recorded
- `input` (str): The input data for the event
- `output` (Optional[str]): Optional output data for the event
- `latency` (Optional[int]): Optional processing time in milliseconds
- `start_timestamp` (Optional[int]): Optional event start time in milliseconds
- `end_timestamp` (Optional[int]): Optional event end time in milliseconds
- `parent_id` (Optional[str]): The ID of the parent trace

#### Returns:

- `Trace`: The current Trace object with the recorded event data

## Usage Example

```python
# Create a trace
trace = client.trace(conversation_id="conv123")

# Record a message event
messageTrace = trace.message("User input")
response = messageTrace.end("Bot response")

# Record a tool event
toolTrace = trace.tool("Processing data", parent_id=messageTrace.trace_id)
result = toolTrace.end("Data processed")

# Send feedback
trace.feedback(FeedbackTag.POSITIVE, "Great response!", parent_id=messageTrace.trace_id)
```