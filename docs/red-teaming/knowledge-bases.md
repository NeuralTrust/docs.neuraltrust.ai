---
sidebar_position: 3
---

# Knowledge Bases

Knowledge Bases provide managed storage and validation for LLM context and testing data.

## Usage

```typescript
import { NeuralTrust } from 'neuraltrust';

const client = new NeuralTrust({ apiKey: "your_api_key_here" });

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

// Delete a knowledge base
await client.deleteKnowledgeBase({ 
    id: "kb_id" 
});
```

## Features

### Document Management
- Upload and organize documents
- Version control
- Access management
- Content validation

### Integration
- Vector embeddings
- Semantic search
- Context retrieval
- Data synchronization

### Security
- Access controls
- Data encryption
- Audit logging
- Compliance tracking
