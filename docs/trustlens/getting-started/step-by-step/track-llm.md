---
sidebar_position: 2
title: Track your LLM
---

# Track your LLM

This guide demonstrates how to use Neural Trust's tracing functionality to monitor and analyze conversations in your AI application.

You can see all the tracked messages and responses in the UI. Just go to **Traces** and you will see all the traces.

## Setup and Initialization

First, we need to set up our environment and initialize the Neural Trust client:

```python
import os
from dotenv import load_dotenv
from neuraltrust import Metadata, NeuralTrust, User

# Load environment variables
load_dotenv()

client = NeuralTrust(
    api_key=os.getenv("NEURALTRUST_API_KEY"),
)
```

## Creating a Trace

A trace represents the overall context of a conversation. It acts as a container for all the interactions and events that occur during a conversation session:

```python
trace = client.trace(
    conversation_id="conversation_12345678",  # Unique identifier for this conversation
    session_id="session_12345678",           # Identifier for the user's session
    channel_id="channel_12345678",           # Identifier for the communication channel
    user=User(id="user_12345678", name="John Doe"),  # User information
    metadata=Metadata(id="metadata_12345678", name="John Doe"),  # Additional metadata
    custom={"key": "value"},  # Any custom data you want to track
)
```

## Message Handling

Messages are the top-level components of a conversation. They represent individual interactions between the user and the system:

```python
# Start tracking a new message in the conversation
message = trace.message(input="Hello, how are you?")
```

### Generation Tracking

Track AI-generated responses. This is useful for monitoring the actual outputs produced by your LLM:

```python
# Track the LLM's generation process
generation = message.generation(input="Hello, how are you?")
generation.end("I am fine, thank you!")  # Record the generated response
```

### Router Implementation

Handle routing logic. Use this when your system needs to make decisions about how to process a message:

```python
# Track routing decisions in your application
router = message.router(input="Hello, how are you?")
```

### Retrieval Operations

Track data retrieval operations. This is particularly useful when your system needs to fetch information from a knowledge base or external source:

```python
# Track when and what information is being retrieved
retrieval = router.retrieval(input="Hello, how are you?")
retrieval.end([{"chunk": "Hello, how are you?"}])  # Record the retrieved information
```

### Agent Interactions

Monitor agent responses. Use this when tracking autonomous agent actions and decisions:

```python
# Track agent behavior and responses
agent = retrieval.agent(input="Hello, how are you?")
agent.end("I am fine, thank you!")  # Record the agent's response
```

### Completing the Message

Finally, close the message trace by recording the final response:

```python
# Record the final response and complete the message trace
message.end("I am fine, thank you!")
```

## Example tracking

For example, we want to track a conversation between a user and an LLM.

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

For more information, check the [Tracing](docs/sdks/python-sdk/api-reference/trace-class.md) guide.