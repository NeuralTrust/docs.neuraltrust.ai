---
sidebar_position: 1
---

# Functional EvaluationSet Generation

This guide explains how to use the NeuralTrust SDK to create and evaluate TestSet for conversational AI applications.

## Overview

This script demonstrates how to:

1. Set up a knowledge base
2. Create an EvaluationSet
3. Generate adversarial test cases
4. Run evaluations

## Prerequisites

- NeuralTrust API key
- Upstash credentials (URL and token)
- Python environment with required packages

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

Define the topics for which you want to generate TestSet:

```python
topics = [
    "Paquetes Vacacionales y Reservas de Hoteles",
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

2. Creates an EvaluationSet:

```python
eval_functional = client.evaluation_set.create(
    name="Adversarial: " + topic,
    description="Eres un agente de AirTrust encargado de responder preguntas a los clientes de AirTrust.",
)
```

3. Generates adversarial test cases:
```python
adversarial_testset = client.testset.create(
    name=topic,
    type="adversarial",
    evaluation_set_id=eval_functional.id,
    num_questions=8,
    knowledge_base_id=knowledge_base.id,
)
```

4. Runs the evaluation:

```python
client.evaluation_set.run(id=eval_functional.id)
```

## Complete Script

```python
import os
from dotenv import load_dotenv
from neuraltrust import NeuralTrust

load_dotenv()

client = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"))

topics = [
    "Paquetes Vacacionales y Reservas de Hoteles",
]

for topic in topics:
    try:
        knowledge_base = client.knowledge_base.create(
            type="upstash",
            credentials={
                "UPSTASH_URL": os.getenv("UPSTASH_URL"),
                "UPSTASH_TOKEN": os.getenv("UPSTASH_TOKEN"),
            },
            seed_topics=[topic],
        )

        eval_functional = client.evaluation_set.create(
            name="Adversarial: " + topic,
            description="Eres un agente de AirTrust encargado de responder preguntas a los clientes de AirTrust.",
        )

        print("Generating adversarial testset for " + topic)
        adversarial_testset = client.testset.create(
            name=topic,
            type="adversarial",
            evaluation_set_id=eval_functional.id,
            num_questions=8,
            knowledge_base_id=knowledge_base.id,
        )

        client.evaluation_set.run(id=eval_functional.id)

        print(f"Successfully processed {topic}")
    except Exception:
        import traceback
        traceback.print_exc()

print("All topics have been processed.")
```

This script can be used to automatically generate and evaluate TestSet for your conversational AI applications, helping ensure robust performance across different scenarios.
