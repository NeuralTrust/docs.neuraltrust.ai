---
sidebar_position: 3
---

# Create and run a Functional Evaluation Set from RAG

This guide explains how to use the NeuralTrust SDK to create and evaluate a functional evaluation set from a RAG.

## Overview

This script demonstrates how to:

1. Set up a knowledge base
2. Create an evaluation set
3. Generate functional test cases
4. Run evaluations

## Prerequisites

- Upstash credentials (URL and token)

## Environment Setup

First, we need to set up our environment and import required packages:

```python
import os
from dotenv import load_dotenv
from neuraltrust import NeuralTrust

load_dotenv()
```

The script uses `python-dotenv` to load environment variables from a `.env` file. Make sure your `.env` file contains:

```plaintext
NEURALTRUST_API_KEY=your_api_key_here
UPSTASH_URL=your_upstash_url
UPSTASH_TOKEN=your_upstash_token
```

## Initialize NeuralTrust Client

```python
client = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"))
```

## Define Topics

Define the topics for which you want to generate test sets:

```python
topics = [
    "Missed flights",
    "Lost luggage",
]
```

## Main Process

For each topic, the script:

1. Creates a knowledge base:

```python
knowledge_base = client.knowledge_base.create(
    type="upstash",
    credentials={
        "UPSTASH_URL": os.getenv("UPSTASH_URL"),
        "UPSTASH_TOKEN": os.getenv("UPSTASH_TOKEN"),
    },
    seed_topics=[topic],
)
```

2. Creates an evaluation set:

```python
eval_functional = client.evaluation_set.create(
    name="Functional: " + topic,
    description="You are a chatbot that answers questions about the Airline topics.",
)
```

3. Generates functional test cases:
```python
functional_testset = client.testset.create(
    name=topic,
    type="functional",
    evaluation_set_id=eval_functional.id,
    num_questions=10,
    knowledge_base_id=knowledge_base.id,
)
```

4. Runs the evaluation:

```python
client.evaluation_set.run(id=eval_functional.id)
```

Now, you can see the results in the UI.

## Complete Script

```python
import os
from dotenv import load_dotenv
from neuraltrust import NeuralTrust

load_dotenv()

client = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"))

topics = [
    "Missed flights",
    "Lost luggage",
]

knowledge_base = client.knowledge_base.create(
    type="upstash",
    credentials={
    "UPSTASH_URL": os.getenv("UPSTASH_URL"),
    "UPSTASH_TOKEN": os.getenv("UPSTASH_TOKEN"),
},
    seed_topics=topics,
)

eval_functional = client.evaluation_set.create(
    name="Functional: " + topic,
    description="You are a chatbot that answers questions about the Airline topics.",
)

adversarial_testset = client.testset.create(
    name=topic,
    type="functional",
    evaluation_set_id=eval_functional.id,
    num_questions=10,
    knowledge_base_id=knowledge_base.id,
)

client.evaluation_set.run(id=eval_functional.id)
```