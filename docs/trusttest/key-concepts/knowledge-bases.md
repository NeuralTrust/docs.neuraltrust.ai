---
sidebar_position: 4
---

# KnowledgeBase

KnowledgeBase are a powerful feature of the NeuralTrust platform that allow you to create and manage specialized knowledge repositories for AI model testing and evaluation. They provide a structured way to organize domain-specific information that can be used to enhance your model testing capabilities.

:::tip
Knowledge bases typically serve as vector databases used for Retrieval-Augmented Generation (RAG).
:::

With Knowledge Bases, you can:

- Create specialized knowledge repositories for different domains
- Seed knowledge bases with initial topics and data
- Use knowledge bases to generate more targeted and relevant test cases
- Manage credentials and access controls for different knowledge sources
- Integrate with various data sources and knowledge systems

Knowledge Bases are particularly useful for:

- Domain-specific testing of AI models
- Generating contextually relevant test cases
- Maintaining consistent testing knowledge across teams
- Supporting specialized compliance and security testing scenarios

## Supported Knowledge Base Types

NeuralTrust currently supports the following knowledge base types:

- **Upstash** - Vector database for real-time data storage and retrieval
- **Azure AI Search** - Cognitive search service for fast and sophisticated data indexing
- **Company Documents** - Support for PDF documents and other company materials
  - Automatically indexes and processes PDF content
  - Maintains document hierarchy and relationships
  - Extracts key information and metadata

For more information on how to use Knowledge Bases, please refer to the [Knowledge Bases](docs/sdks/python-sdk/api-reference/knowledge-base-client.md) documentation.
