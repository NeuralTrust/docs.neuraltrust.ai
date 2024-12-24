---
sidebar_position: 6
---

# Development

## Prerequisites

1. Go 1.22+
2. Docker and Docker Compose
3. Redis

## Project Structure
```
.
├── cmd/
│   └── gateway/          # Application entry points
├── internal/
│   ├── cache/           # Redis cache implementation
│   ├── middleware/      # HTTP middleware
│   ├── plugins/         # Plugin implementations
│   ├── proxy/           # Request forwarding logic
│   ├── types/           # Common types
│   └── server/          # HTTP server implementation
├── scripts/             # Development and test scripts
├── config.yaml          # Configuration file
└── docker-compose.yaml  # Redis setup
```
