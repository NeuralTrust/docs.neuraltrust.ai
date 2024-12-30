---
sidebar_position: 2
---

# Tracing

The NeuralTrust SDK supports various types of events that can be sent during tracing. Here are the different event types and their usage:

    1. retrieval: Used for trace the RAG retrieval chunks.
    2. router: Used for trace the route in the chain of thought.
    3. event: Used for custom events.
    4. system: Used for trace the system-prompt in the chain of thought.
    5. generation: Used for trace the text generation, this is the final output of the chain of thought.

Here's how you can use these event types in your traces:

```python
from neuraltrust import EventType

# Create a trace
trace = client.trace(trace_id="trace_1234", conversation_id="conversation_1234", session_id="session_1234", channel_id="channel_1234")

# Add events to the trace
trace.retrieval("What's the weather like today?")
# End the trace with the final output
trace.end([{"chunk": "The weather today is sunny with a high of 75°F.", "score": 0.95}])

# Alternatively, you can send events in an atomic way
trace.send(
    event_type=EventType.RETRIEVAL, 
    input="What's the weather like today?", 
    output=[{"chunk": "The weather today is sunny with a high of 75°F.", "score": 0.95}], 
    latency=100
)
```
Each event type allows you to capture different aspects of your application's behavior, enabling comprehensive tracing and analysis. 