---
sidebar_position: 1
---

# Quick Start

Get started with the NeuralTrust Platform using our TypeScript SDK.

## Installation

Install the NeuralTrust TypeScript SDK using npm or yarn:

```bash
npm install neuraltrust
# or
yarn add neuraltrust
```

## Basic Setup

Initialize the client with your API key:

```typescript
import { NeuralTrust } from 'neuraltrust';

// Initialize with API key
const client = new NeuralTrust({ 
  apiKey: "your_api_key_here" 
});

// Optional: Custom configuration
const client = new NeuralTrust({ 
  apiKey: "your_api_key_here",
  baseUrl: "https://custom.api.url"
});
```

## Tracing

### Creating Basic Traces

```typescript
// Create a root trace
const trace = client.trace({
    conversationId: "conversation_12345678",
    sessionId: "session_12345678",
    channelId: "channel_12345678",
    user: { 
      id: "user_12345678", 
      name: "John Doe" 
    }
});

// Add a message
const message = trace.message("User input: Hello!");
await message.end("Assistant: Hi there!");
```

### Nested Traces (Recommended)

```typescript
const trace = client.trace({
    conversationId: "conversation_12345678",
    sessionId: "session_12345678"
});

// Create a conversation flow
const message = trace.message("What's the weather?");
const router = message.router("Routing request...");
await router.end("Routed to weather service");

const retrieval = router.retrieval("Fetching weather data...");
await retrieval.end("Found weather data for San Francisco");

const generation = retrieval.generation("Generating response...");
await generation.end("The weather is sunny and 75°F");

await message.end("The weather is sunny and 75°F");
```

### Event Types

The SDK supports various event types:
- `MESSAGE`
- `TOOL`
- `AGENT`
- `RETRIEVAL`
- `GENERATION`
- `ROUTER`
- `SYSTEM`
- `CUSTOM`
- `FEEDBACK`

## Evaluation Sets

```typescript
// Create an evaluation set
const evalSet = await client.createEvaluationSet({
    name: "Weather Bot Eval",
    description: "Evaluation set for weather bot responses"
});

// Run evaluation
const results = await client.runEvaluationSet({ 
    id: evalSet.id 
});

// Get results
const evalSet = await client.getEvaluationSet({ 
    id: "eval_set_id" 
});
```

## Knowledge Bases

```typescript
// Create a knowledge base
const kb = await client.createKnowledgeBase({
    type: "upstash",
    credentials: { 
      apiKey: "your_doc_api_key" 
    }
});

// Retrieve a knowledge base
const kb = await client.getKnowledgeBase({ 
    id: "kb_id" 
});
```

## Test Sets

```typescript
// Create a test set
const testset = await client.createTestset({
    name: "Weather Bot Tests",
    type: "adversarial",
    evaluationSetId: "eval_set_id",
    knowledgeBaseId: "kb_id",
    numQuestions: 10
});

// Get test results
const results = await client.getTestset({ 
    id: "testset_id" 
});
```

## Error Handling

```typescript
try {
    const trace = client.trace({
        conversationId: "conversation_12345678"
    });
    const message = await trace.message("Hello!");
} catch (error) {
    console.error("Error creating trace:", error);
}
```

## Environment Variables

Configure the SDK using environment variables:

```bash
NEURALTRUST_API_KEY=your_api_key_here
NEURALTRUST_BASE_URL=https://custom.api.url  # Optional
```

## Next Steps

- [Detailed Tracing Guide](../observability/tracing.md)
- [Evaluation Sets Documentation](../red-team/evaluation-sets.md)
- [Knowledge Base Guide](../red-team/knowledge-bases.md)
- [Test Sets Documentation](../red-team/testsets.md) 
