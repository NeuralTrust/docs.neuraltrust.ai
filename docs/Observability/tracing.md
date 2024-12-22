---
sidebar_position: 1
---

# Tracing

Comprehensive tracing capabilities for monitoring and debugging your LLM applications.

## Overview

The tracing system captures detailed information about your LLM application's behavior and performance. This includes:

- Message flows
- Tool usage
- Agent interactions
- Data retrievals
- Response generations
- System events
- Custom events
- User feedback

## Basic Usage

Create a trace and add events:

```typescript
// Initialize a trace
const trace = client.trace({
    conversationId: "conv_123",
    sessionId: "session_123"
});

// Add a message event
const message = trace.message("User: What's the weather?");
await message.end("Bot: It's sunny!");
```

## Event Types

### Core Events

1. **MESSAGE** - Root-level conversation events
```typescript
const message = trace.message("User input");
await message.end("Bot response");
```

2. **TOOL** - External tool usage
```typescript
const tool = message.tool("Calling weather API");
await tool.end("API response received");
```

3. **GENERATION** - LLM generations
```typescript
const generation = message.generation("Generating response");
await generation.end("Response generated");
```

### Additional Events

- **AGENT**: Track agent decisions
- **RETRIEVAL**: Document/data retrievals
- **ROUTER**: Request routing
- **SYSTEM**: System events
- **CUSTOM**: Custom event types
- **FEEDBACK**: User feedback

## Nested Tracing (Recommended)

Create hierarchical traces to track complex flows:

```typescript
// Create parent trace
const message = trace.message("Weather request");

// Add child traces
const retrieval = message.retrieval("Fetching data");
await retrieval.end("Data retrieved");

const generation = retrieval.generation("Creating response");
await generation.end("Response ready");

// End parent trace
await message.end("Request completed");
```

## Additional Features

### Metadata
```typescript
const trace = client.trace({
    conversationId: "conv_123",
    metadata: {
        version: "1.0.0",
        environment: "production"
    }
});
```

### User Context
```typescript
const trace = client.trace({
    conversationId: "conv_123",
    user: {
        id: "user_123",
        name: "John Doe"
    }
});
```

## Best Practices

1. **Use Nested Tracing**
   - Creates clear request hierarchy
   - Automatically manages relationships
   - Simplifies debugging

2. **Add Context**
   - Include relevant metadata
   - Add user information
   - Track environment details

3. **Handle Errors**
   - Use try/catch blocks
   - End traces properly
   - Include error information

## Error Handling Example

```typescript
try {
    const trace = client.trace({
        conversationId: "conv_123",
        metadata: { version: "1.0.0" }
    });

    const message = trace.message("Processing request");
    
    try {
        // Your processing logic here
        await message.end("Success");
    } catch (error) {
        await message.end(`Error: ${error.message}`);
        throw error;
    }
} catch (error) {
    console.error("Trace error:", error);
}
```

## Next Steps

- [Platform Overview](../getting-started/quickstart.md)
- [Knowledge Base Guide](../red-teaming/knowledge-bases.md)
- [Evaluation Sets](../red-teaming/evaluation-sets.md)