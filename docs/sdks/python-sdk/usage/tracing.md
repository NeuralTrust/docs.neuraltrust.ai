---
sidebar_position: 2
---

# Tracing

This guide demonstrates how to use Neural Trust's tracing functionality to monitor and analyze conversations in your AI application.

## Setup and Initialization

First, we need to set up our environment and initialize the Neural Trust client:

```python
import os
from dotenv import load_dotenv
from neuraltrust import Metadata, NeuralTrust, User

# Load environment variables
load_dotenv()

# Initialize the Neural Trust client with async support
client = NeuralTrust(
    api_key=os.getenv("NEURALTRUST_API_KEY"), 
    async_client=True
)
```

## Creating a Trace

A trace represents the overall context of a conversation:

```python
trace = client.trace(
    conversation_id="conversation_12345678",
    session_id="session_12345678",
    channel_id="channel_12345678",
    user=User(id="user_12345678", name="John Doe"),
    metadata=Metadata(id="metadata_12345678", name="John Doe"),
    custom={"key": "value"},
)
```

## Message Handling

Messages are the top-level components of a conversation:

```python
message = trace.message(input="Hello, how are you?")
```

### Generation Tracking

Track AI-generated responses:

```python
generation = message.generation(input="Hello, how are you?")
generation.end("I am fine, thank you!")
```

### Router Implementation

Handle routing logic:

```python
router = message.router(input="Hello, how are you?")
```

### Retrieval Operations

Track data retrieval operations:

```python
retrieval = router.retrieval(input="Hello, how are you?")
retrieval.end([{"chunk": "Hello, how are you?"}])
```

### Agent Interactions

Monitor agent responses:

```python
agent = retrieval.agent(input="Hello, how are you?")
agent.end("I am fine, thank you!")
```

### Completing the Message

Finally, close the message trace:

```python
message.end("I am fine, thank you!")
```

## Complete Script

Here's the complete script for reference:

```python
import os
from dotenv import load_dotenv
from neuraltrust import Metadata, NeuralTrust, User

load_dotenv()

client = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"), async_client=True)

trace = client.trace(
    conversation_id="conversation_12345678",
    session_id="session_12345678",
    channel_id="channel_12345678",
    user=User(id="user_12345678", name="John Doe"),
    metadata=Metadata(id="metadata_12345678", name="John Doe"),
    custom={"key": "value"},
)

message = trace.message(input="Hello, how are you?")

generation = message.generation(input="Hello, how are you?")
generation.end("I am fine, thank you!")

router = message.router(input="Hello, how are you?")

retrieval = router.retrieval(input="Hello, how are you?")
retrieval.end([{"chunk": "Hello, how are you?"}])

agent = retrieval.agent(input="Hello, how are you?")
agent.end("I am fine, thank you!")

message.end("I am fine, thank you!")
```

This script demonstrates a complete flow of tracing various components in a conversation, from initialization to message completion. Each step is tracked and can be analyzed through the Neural Trust platform.

The tracing functionality helps you monitor:
- Overall conversation context
- Individual messages
- AI-generated responses
- Routing decisions
- Data retrieval operations
- Agent interactions

This information can be valuable for debugging, monitoring, and improving your AI application's performance and behavior.
