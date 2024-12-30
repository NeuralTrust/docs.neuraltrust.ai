---
sidebar_position: 4
---

# Knowledge Bases

Knowledge bases are used to store and retrieve information from your LLM application. They allow you to define a set of criteria and metrics to evaluate the output of your application.

```python
# Create a knowledge base
kb = client.create_knowledge_base(type="upstash", credentials={"api_key": "your_doc_api_key"})

# Get a knowledge base
kb = client.get_knowledge_base(id="kb_id")

# Delete a knowledge base
client.delete_knowledge_base(id="kb_id")
```