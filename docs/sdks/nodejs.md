---
sidebar_position: 2
---

# Node.js SDK

NeuralTrust Node.js SDK documentation.

## Installation

```bash
npm install @neuraltrust/sdk
# or
yarn add @neuraltrust/sdk
```

## Quick Start

```javascript
import { NeuralTrust } from '@neuraltrust/sdk';

const nt = new NeuralTrust({
  apiKey: 'your_api_key'
});

// Secure an LLM request
const response = await nt.secure({
  provider: 'openai',
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Hello, world!' }
  ]
});

// Access monitoring
const metrics = await nt.metrics.getRecent();

// Configure alerts
await nt.alerts.create({
  name: 'High Error Rate',
  condition: {
    metric: 'error_rate',
    threshold: 0.05
  }
});
```

## Error Handling

```javascript
try {
  const response = await nt.secure({ prompt: 'Hello' });
} catch (error) {
  if (error instanceof NeuralTrustError) {
    console.error('Error:', error.message);
    console.error('Code:', error.code);
  }
}
``` 