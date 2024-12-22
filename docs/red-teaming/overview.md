---
sidebar_position: 1
---

# Overview

NeuralTrust's Red Team tools help evaluate, test, and secure your LLM applications through comprehensive testing and analysis.

## Components

### Evaluation Sets
- Structured test scenarios
- Performance metrics
- Quality assessments
- Automated evaluations

### Knowledge Bases
- Document management
- Context validation
- Data security testing
- Information retrieval testing

### Test Sets
- Adversarial testing
- Security validation
- Compliance checking
- Performance benchmarking

## Getting Started

```typescript
import { NeuralTrust } from 'neuraltrust';

const client = new NeuralTrust({ 
  apiKey: "your_api_key_here" 
});

// Create and run tests
const evalSet = await client.createEvaluationSet({
  name: "Security Test Suite",
  description: "Comprehensive security validation"
});

const testset = await client.createTestset({
  name: "Adversarial Tests",
  type: "adversarial",
  evaluationSetId: evalSet.id
});
``` 