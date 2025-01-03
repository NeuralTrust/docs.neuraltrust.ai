---
sidebar_position: 1
---

# Installation

You can install the Neural Trust Python SDK using pip or other package managers with access to [PyPI](https://pypi.org/project/neuraltrust/):

```bash
pip install neuraltrust
```

You can also install the SDK from source:

```bash
git clone https://github.com/neuraltrust/neuraltrust-python.git
cd neuraltrust-python
pip install .
```

## Validate Installation

You can validate the installation by running the following command:

```bash
python -c "import neuraltrust; print(neuraltrust.__version__)"
```

This should print the version of the SDK installed.

## Check connection

You can check if the SDK is connected to the NeuralTrust API by running the following script:

```python
from neuraltrust import NeuralTrustApi

client = NeuralTrustApi(api_key="YOUR_API_KEY")

evaluation_sets = client.evaluation_sets.list()

print(evaluation_sets)
```

This should print a list of evaluation sets. If you don't have any evaluation sets, you can create one by running the following script:

```python
evaluation_set = client.evaluation_set.create(name="My Evaluation Set")

print(evaluation_set)
```
