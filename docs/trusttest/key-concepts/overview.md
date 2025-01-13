---
sidebar_position: 1
---

# Key Components

NeuralTrust defines the following components to support the above use cases:

![RedTeaming Components](./assets/evaluation-sets-schema.svg)

## [EvaluationSets](./evaluation-sets.md)
Set of a TestSets, evaluation criteria, runs and results. Each EvaluationSet defines specific test scenarios, success metrics, and evaluation parameters needed to thoroughly assess model behavior. These sets can be customized for different testing objectives, from security validation to functional performance evaluation. EvaluationSets can be scheduled to run automatically at defined intervals, enabling continuous monitoring and assessment of model performance over time.

## [TestSet](./testsets.md)
Set of prompts and expected model responses pairs used in testing. Defines a conversation or a single query-response pair from your LLM application.

## [KnowledgeBase](./knowledge-bases.md)
Information source that provides the foundation for model testing and validation. These repositories contain verified reference data, domain expertise, testing patterns, and compliance requirements. Knowledge bases help ensure that evaluations are grounded in accurate information and align with industry standards and security policies.