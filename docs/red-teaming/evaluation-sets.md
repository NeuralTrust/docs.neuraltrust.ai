---
sidebar_position: 2
---

# Evaluation Sets

Evaluation Sets provide structured testing and validation for LLM applications.

## Usage

```typescript
import { NeuralTrust } from 'neuraltrust';

const client = new NeuralTrust({ apiKey: "your_api_key_here" });

// Create an evaluation set
const evalSet = await client.createEvaluationSet({
    name: "My Eval Set",
    description: "A test evaluation set"
});

// Run evaluation
const results = await client.runEvaluationSet({ 
    id: evalSet.id 
});

// Get results
const evalResults = await client.getEvaluationSet({ 
    id: "eval_set_id" 
});

// Delete set
await client.deleteEvaluationSet({ 
    id: "eval_set_id" 
});
```

## Features

### Test Management
- Create and organize test cases
- Define success criteria
- Set evaluation parameters
- Track test results

### Metrics
- Response accuracy
- Performance metrics
- Security scores
- Compliance validation

### Integration
- Automated testing
- CI/CD pipeline support
- Results reporting
- Historical tracking
