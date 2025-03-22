---
id: kubernetes-installation
title: Kubernetes Installation
sidebar_position: 2
---

# Installing on Kubernetes

## Prerequisites

Before installing NeuralTrust, ensure you have:

- Kubernetes cluster (v1.20+)
  - Minimum of 3 nodes
  - Each node: 4 vCPUs, 16 GB Memory
  - Total cluster resources: 12+ vCPUs, 48+ GB Memory
- Helm (v3.8+)
- kubectl configured to access your cluster
- OpenAI API key
- HuggingFace token (provided by NeuralTrust)
- Google Container Registry (GCR) service account key (provided by NeuralTrust)

### Required Tools

- `kubectl`: For interacting with the Kubernetes cluster
- `helm`: For deploying Kubernetes applications
- `yq`: For YAML processing
- `jq`: For JSON processing

## Installation Steps

### 1. Environment Setup

First, clone the repository and set up environment files:

```bash
# Clone the repository
git clone https://github.com/NeuralTrust/neuraltrust-helm-charts.git
cd neuraltrust-helm-charts

# Create environment file
cp .env.example .env.dev  # For development
# or
cp .env.example .env.prod # For production
```

### 2. Configure Environment Variables

Required environment variables:

#### Common Variables
- `ENVIRONMENT`: Environment (dev/prod)
- `EMAIL`: Email for Let's Encrypt certificates
- `OPENAI_API_KEY`: OpenAI API key
- `HUGGINGFACE_TOKEN`: HuggingFace token (provided by NeuralTrust)
- `GCR_KEY_FILE`: Path to GCR service account key file

#### Data Plane API Variables
- `DATA_PLANE_API_URL`: Full URL for the Data Plane API
- `DATA_PLANE_API_IMAGE_REPOSITORY`: Docker image repository
- `DATA_PLANE_API_IMAGE_TAG`: Docker image tag
- `DATA_PLANE_API_IMAGE_PULL_POLICY`: Image pull policy
- `DATA_PLANE_JWT_SECRET`: JWT secret for Control Plane authentication

#### Worker Variables
- `WORKER_IMAGE_REPOSITORY`: Docker image repository
- `WORKER_IMAGE_TAG`: Docker image tag
- `WORKER_IMAGE_PULL_POLICY`: Image pull policy

### 3. Run Installation

```bash
# Set environment
export ENVIRONMENT=dev  # or prod

# Run installation script
./install-data-plane.sh
```

The script will:
1. Create namespace (default: neuraltrust)
2. Install cert-manager for SSL certificates
3. Install NGINX Ingress Controller
4. Create required secrets
5. Install ClickHouse database
6. Install Kafka for messaging
7. Deploy Data Plane components

### Installation Options

Skip ingress resources:
```bash
./install-data-plane.sh --skip-ingress
```

Skip cert-manager installation:
```bash
./install-data-plane.sh --skip-cert-manager
```

Or use values file:
```yaml
global:
  ingress:
    enabled: false
    controller:
      enabled: false
  certManager:
    enabled: false
```

## Domain Configuration

### DNS Setup

1. Create a subdomain for your Data Plane API (e.g., `dataplane.yourdomain.com`)

2. Configure CNAME record:
```
dataplane.yourdomain.com.  IN  CNAME  <your-ingress-controller-address>
```

Get ingress controller address:
```bash
kubectl get svc -n neuraltrust ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

3. Alternative: Use A record:
```
dataplane.yourdomain.com.  IN  A  <your-ingress-controller-ip>
```

### TLS/SSL Certificates

The installation automatically configures Let's Encrypt certificates. Ensure:
1. Domain is publicly accessible
2. DNS propagation is complete
3. Valid email address in `EMAIL` variable

> **Note**: For custom certificates, contact NeuralTrust support.

## Connecting to Control Plane

After installation:

1. Log in to NeuralTrust portal
2. Navigate to "Data Plane" section
3. Add new Data Plane connection
4. Enter Data Plane API endpoint
5. Enter JWT secret from installation
6. Save connection

> **Important**: Save the JWT secret displayed during installation for Control Plane connection.

## Upgrading

To upgrade existing installation:

1. Update environment variables as needed
2. Run installation script again:
```bash
./install-data-plane.sh
```

The Helm charts will detect existing installations and perform an upgrade.

## Troubleshooting

Common issues and solutions:

1. **Pod startup failures**
```bash
kubectl logs -n neuraltrust <pod-name>
```

2. **Database connection issues**
```bash
kubectl get pods -n neuraltrust | grep clickhouse
```

3. **API key errors**
- Verify OpenAI API key and HuggingFace token

4. **Ingress issues**
```bash
kubectl get ingress -n neuraltrust
```

5. **Certificate issues**
```bash
kubectl get certificates -n neuraltrust
```

6. **Control Plane connection issues**
- Verify Data Plane API endpoint is accessible
- Confirm JWT token is correct

## Additional Resources

For more information:
- [Slack Community](https://neuraltrust.slack.com)
- [GitHub Issues](https://github.com/NeuralTrust/TrustGate/issues)

For support, contact support@neuraltrust.ai 