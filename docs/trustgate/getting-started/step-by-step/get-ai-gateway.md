---
sidebar_position: 3
title: Get AI Gateway
---

# Get AI Gateway

TrustGate is available in Open Source. This guide covers the installation methods for the Open Source version.

## Quick Start with Docker Compose

The fastest way to get started with TrustGate is using Docker Compose:

```bash
# Clone the repository
git clone https://github.com/NeuralTrust/TrustGate.git
cd TrustGate

# Start the services
docker compose -f docker-compose.prod.yaml up -d
```

## Docker Installation

For a simple Docker container setup:

```bash
# Pull the latest image
docker pull neuraltrust/trustgate

# Run the container
docker run -d --name trustgate \
  -p 8080:8080 \  # Admin API
  -p 8081:8081 \  # Proxy API
  neuraltrust/trustgate
```

## Kubernetes Installation

For production deployments, we recommend using Kubernetes with our official Helm charts:

```bash
# Add the TrustGate Helm repository
git clone https://github.com/NeuralTrust/trustgate-helm-charts.git
cd trustgate-helm-charts

# Run the deployment script for a guided installation
./deploy-shared.sh
```

The Helm charts repository provides:
- Production-grade deployment configurations
- High availability setup
- Built-in monitoring and scaling
- Automated TLS certificate management
- Comprehensive documentation

For detailed installation instructions and configuration options, please visit:
[TrustGate Helm Charts Repository](https://github.com/NeuralTrust/trustgate-helm-charts)

## Local Development Setup

For local development and testing:

```bash
# Clone the repository
git clone https://github.com/NeuralTrust/TrustGate.git
cd TrustGate

# Start dependencies
docker compose up -d redis postgres

# Run the servers
./scripts/run_local.sh
```

## Next Steps

After installing TrustGate:

1. [Create your first Gateway](./first-gateway.md)

## Need Help?

- Join our [Slack Community](https://neuraltrustcommunity.slack.com/join/shared_invite/zt-2xl47cag6-_HFNpltIULnA3wh4R6AqBg)
- Report issues on [GitHub](https://github.com/neuraltrust/TrustGate/issues)