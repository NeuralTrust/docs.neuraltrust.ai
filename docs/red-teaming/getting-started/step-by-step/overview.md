---
sidebar_position: 1
title: Overview
---

# Getting Started with Red Teaming

This guide will walk you through setting up and configuring your first Red Teaming evaluations against your LLM's. By following these steps, you'll learn how to:

1. [Configure NeuralTrust to invoke your LLM](./configure-llm-endpoint.md)
   - How to configure NeuralTrust to invoke your LLM.
   - Configuration options.
2. [Create and run a custom evaluation from your RAG](./create-functional-evaluation-set.md)
   - Create and evaluaiton set.
   - Run the EvaluationSet.
   - Look at the results in the UI.
3. [Create and run a custom attack](./run-custom-attack.md)
   - Create an custom objective attack.
   - Run the attack against your LLM.
   - Look at the results in the UI.
4. [Scan your LLM for complience vulnerabilities](./run-complience-scan.md)
   - Scan your LLM for complience vulnerabilities.
   - Look at the results in the UI.

## Prerequisites

Before you begin, make sure you have:

- A NeuralTrust API key.
- A LLMs endpoint to invoke through an API Restfull.
- NeuralTrust SDK installed. Check the [SDK installation guide](docs/sdks/python-sdk/installation.md) for more information.

## Time to Complete

These guides should take approximately 20 minutes to complete.

## What You'll Build

By the end of these guides, you'll have:

- A custom EvaluationSet from your RAG.
- A custom objective attack against your LLM.
- A complience scan against your LLM.

## Next Steps

Ready to begin? Start with [Configuring your LLM endpoint](./configure-llm-endpoint.md). 
