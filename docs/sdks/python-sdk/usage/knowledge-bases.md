---
sidebar_position: 4
---

# Knowledge Bases
Let me explain the knowledge bases functionality in the NeuralTrust Python SDK based on the documentation and code.

The knowledge bases in NeuralTrust are used to store and retrieve information for LLM applications. Here are the main functions available:

1. Creating a Knowledge Base:
```python
kb = client.create_knowledge_base(
    type="upstash",  # The type of knowledge base storage
    credentials={     # Authentication credentials for the storage
        "api_key": "your_doc_api_key"
    }
)
```

You can also include seed topics when creating a knowledge base:
```python
kb = client.create_knowledge_base(
    type="upstash",
    credentials={
        'UPSTASH_URL': "https://your-upstash-url",
        "UPSTASH_TOKEN": "your-upstash-token"
    },
    seed_topics=["Topic 1", "Topic 2"]  # Initial topics to populate the knowledge base
)
```

2. Retrieving a Knowledge Base:
```python
# Get an existing knowledge base by its ID
kb = client.get_knowledge_base(id="kb_id")
```

3. Deleting a Knowledge Base:
```python
# Delete a knowledge base by its ID
client.delete_knowledge_base(id="kb_id")
```

The knowledge base functionality is particularly useful when:
- You need to store structured information for your LLM application
- You want to maintain a persistent knowledge store
- You need to evaluate LLM outputs against a known set of information
- You want to use RAG (Retrieval Augmented Generation) capabilities

The response from creating or getting a knowledge base includes an ID that you can use for future operations or when creating testsets that need to reference the knowledge base.

Example usage with a testset:
```python
# Create a knowledge base
kb = client.create_knowledge_base(
    type="upstash",
    credentials={"api_key": "your_api_key"}
)

# Use the knowledge base ID when creating a testset
testset = client.create_testset(
    name="My Testset",
    type="functional",
    evaluation_set_id="eval_set_id",
    knowledge_base_id=kb.id,  # Reference the knowledge base
    num_questions=10
)
```

Currently, the SDK supports Upstash as a knowledge base storage type, but the system is designed to be extensible to other storage types in the future.
