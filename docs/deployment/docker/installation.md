---
id: docker-installation
title: Docker Installation
sidebar_position: 2
---

# Installing with Docker

## Prerequisites

Before installing NeuralTrust with Docker, ensure you have:

- Docker Engine 20.10+
- Docker Compose v2.0+
- 4GB RAM minimum
- 10GB disk space
- OpenAI API key (for AI model access)
- HuggingFace token (provided by NeuralTrust)

## Quick Start

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/NeuralTrust/TrustGate.git
cd TrustGate

# Clone environment file
cp .env.example .env
```

### 2. Configure Environment

Edit the `.env` file with your configuration:

```bash
# Core settings
ENVIRONMENT=production
DOMAIN=your-domain.com
LOG_LEVEL=info

# API Keys
OPENAI_API_KEY=your-openai-key
HUGGINGFACE_TOKEN=your-hf-token

# Security settings
ENABLE_RATE_LIMITING=true
ENABLE_AUTH=true
```

### 3. Start the Services

```bash
# For production deployment
docker compose -f docker-compose.prod.yaml up -d

# For development
docker compose up -d
```

## Architecture Components

The deployment consists of two main APIs:

1. **Admin API** (Port 8080)
   - Gateway management
   - Configuration management
   - API key management
   - Plugin configuration

2. **Proxy API** (Port 8081)
   - Request routing
   - Load balancing
   - Plugin execution

## Monitoring

Enable monitoring in your configuration:

```yaml
# config.yaml
metrics:
  enabled: true                # Enable metrics collection
  enable_latency: true        # Basic latency metrics
  enable_upstream: true       # Upstream latency tracking
  enable_connections: true    # Connection tracking
  enable_per_route: true     # Per-route metrics
```

### Available Metrics

| Metric | Description |
|--------|-------------|
| `trustgate_requests_total` | Request counts by gateway, method, and status |
| `trustgate_latency_ms` | Overall request processing time |
| `trustgate_detailed_latency_ms` | Granular latency by service/route |
| `trustgate_upstream_latency_ms` | Upstream service latency |
| `trustgate_connections` | Active connection tracking |

## Plugin System

NeuralTrust includes several built-in plugins:

### Rate Limiting
- Basic rate limiter
- Token rate limiter

### Prompt Moderation
- Data masking (entities, keywords, regex)
- Prompt moderation (keywords, regex)

### Toxicity Detection
- OpenAI Moderation API
- Azure Content Safety API

### Other Plugins
- External API calls
- Custom integrations

## Managing the Deployment

Common management commands:

```bash
# View logs
docker compose logs -f [service]

# Restart services
docker compose restart [service]

# Stop all services
docker compose down

# Update to latest version
docker compose pull
docker compose up -d
```

## Troubleshooting

Common issues and solutions:

1. **Service Status**
```bash
docker compose ps
```

2. **View Logs**
```bash
docker compose logs -f [service]
```

3. **Check Configuration**
```bash
docker compose config
```

4. **Resource Usage**
```bash
docker stats
```

5. **Network Issues**
```bash
# Test internal connectivity
docker compose exec api ping proxy
```

## Security Features

The deployment includes:

- Authentication and authorization
- Rate limiting and token management
- CORS protection
- SQL injection prevention
- Cross-site injection protection
- Prompt moderation and jailbreak protection

## Additional Resources

For more information:
- [Slack Community](https://neuraltrust.slack.com)
- [GitHub Issues](https://github.com/NeuralTrust/TrustGate/issues)

For support, contact support@neuraltrust.ai 