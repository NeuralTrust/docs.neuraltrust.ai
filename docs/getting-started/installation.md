---
sidebar_position: 3
---

# Installation

Detailed installation instructions for NeuralTrust.

## SDK Installation

### Node.js

```bash
npm install @neuraltrust/sdk
# or
yarn add @neuraltrust/sdk
```

### Python

```bash
pip install neuraltrust
```

### Go

```bash
go get github.com/neuraltrust/neuraltrust-go
```

### Java

```xml
<dependency>
  <groupId>ai.neuraltrust</groupId>
  <artifactId>neuraltrust-sdk</artifactId>
  <version>1.0.0</version>
</dependency>
```

## Configuration

Create a configuration file `.neuraltrust.json`:

```json
{
  "apiKey": "your-api-key",
  "environment": "production",
  "projectId": "your-project-id"
}
```

## Environment Variables

```bash
NEURALTRUST_API_KEY=your-api-key
NEURALTRUST_PROJECT_ID=your-project-id
NEURALTRUST_ENVIRONMENT=production
``` 