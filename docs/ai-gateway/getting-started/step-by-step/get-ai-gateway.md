---
sidebar_position: 3
title: Get AI Gateway
---

# Get AI Gateway

There are several ways to install and run NeuralTrust AI Gateway. Choose the method that best suits your needs:

## Docker Installation

The quickest way to get started with NeuralTrust AI Gateway is using Docker:

```bash
docker pull neuraltrust/ai-gateway
docker run -d --name neuraltrust-gateway \
  -e "LICENSE_KEY=your-license-key" \
  -p 8000:8000 \
  -p 8001:8001 \
  neuraltrust/ai-gateway
```

## Kubernetes Installation

For production deployments, we recommend using Kubernetes:

```bash
helm repo add neuraltrust https://charts.neuraltrust.ai
helm repo update
helm install my-gateway neuraltrust/ai-gateway \
  --set license.key=your-license-key
```

## Local Development Setup

For local development and testing:

```bash
# Clone the repository
git clone https://github.com/neuraltrust/ai-gateway
cd ai-gateway

# Install dependencies
npm install

# Start the gateway
npm start
```

## Verify Installation

Once installed, verify your installation is working:

```bash
curl http://localhost:8001/status
```

You should see a JSON response with the gateway's status information.

## Next Steps

After installing NeuralTrust AI Gateway:

1. [Set up Authentication](./key-authentication.md)
2. [Configure Rate Limiting](./rate-limiting.md)
