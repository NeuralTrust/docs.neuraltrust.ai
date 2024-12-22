---
sidebar_position: 4
---

# Test Sets

Test Sets provide automated testing and validation for LLM applications.

## Usage

```typescript
import { NeuralTrust } from 'neuraltrust';

const client = new NeuralTrust({ apiKey: "your_api_key_here" });

// Create a test set
const testset = await client.createTestset({
    name: "My Testset",
    type: "adversarial",
    evaluationSetId: "eval_set_id",
    knowledgeBaseId: "kb_id",
    numQuestions: 10
});

// Get test results
const results = await client.getTestset({ 
    id: "testset_id" 
});

// Delete test set
await client.deleteTestset({ 
    id: "testset_id" 
});
```

## Features

### Test Types
- Functional testing
- Security testing
- Performance testing
- Compliance testing

### Automation
- Test generation
- Result analysis
- Report creation
- Trend tracking

### Integration
- CI/CD pipeline support
- Automated workflows
- Results notification
- Historical analysis
