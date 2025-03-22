---
id: architecture
title: Architecture
sidebar_position: 2
---

# Architecture Overview

NeuralTrust consists of two main components:

1. **Data Plane** - Handles data ingestion, processing, and storage
   - API service for receiving and processing traces
   - ClickHouse database for analytics storage
   - Kafka for message processing
   - Worker service for background processing

2. **Control Plane** - Provides the user interface and API for managing applications
   - Web application for user interaction
   - API service for business logic
   - PostgreSQL database for application data

> **Important**: The Control Plane is managed by NeuralTrust and does not require installation.

## Component Details

### Data Plane Components

The Data Plane runs within your infrastructure and includes:

#### API Service
Gateway for all AI interactions:
- Processes telemetry data
- Routes LLM requests
- Handles authentication
- Manages rate limiting

#### ClickHouse Database
Analytics storage optimized for time-series data:
- 2 shards for horizontal scaling
- 2 replicas per shard
- 100Gi persistent storage
- Time-series optimized queries

#### Kafka Message Queue
Reliable message processing system:
- Ensures message delivery
- Handles event streaming
- Enables async operations
- Provides message persistence

#### Worker Service
Background processing engine:
- AI model interactions
- Data aggregation
- Security checks
- Batch processing

### Control Plane Components

The Control Plane is fully managed by NeuralTrust and includes:

<div class="table-wrapper">

| Component | Purpose | Features |
|-----------|---------|----------|
| **Web Application** | Management interface | • Interactive dashboards<br/>• Configuration management<br/>• Policy editor<br/>• Analytics views |
| **API Service** | Business logic | • Authentication services<br/>• Policy management<br/>• Integration endpoints<br/>• Data processing |
| **PostgreSQL Database** | Data storage | • Application data<br/>• User management<br/>• Configuration storage<br/>• Policy definitions |

</div>

## Network Architecture

### Connectivity Requirements

The NeuralTrust architecture has specific connectivity requirements:

1. **Data Plane API** - This is the only component that requires public internet exposure for:
   - Receiving telemetry data from client applications
   - Allowing Control Plane management access

2. **Internal Components** - These should only be accessible within the Kubernetes cluster:
   - Kafka message queue
   - ClickHouse database
   - Worker service
   - Schema Registry

### Network Diagram

```ascii
Internet
   │
   ▼
┌─────────────────────────────────────────────┐
│                                             │
│  Kubernetes Cluster                         │
│                                             │
│  ┌─────────────┐        ┌───────────────┐   │
│  │             │        │               │   │
│  │ Ingress     │───────▶│ Data Plane    │   │
│  │ Controller  │        │ API           │   │
│  │             │        │               │   │
│  └─────────────┘        └───────┬───────┘   │
│                                 │           │
│                                 ▼           │
│  ┌─────────────┐        ┌───────────────┐   │
│  │             │        │               │   │
│  │ Worker      │◀───────│ Kafka         │   │
│  │ Service     │        │               │   │
│  │             │        └───────────────┘   │
│  └──────┬──────┘                            │
│         │                                   │
│         ▼                                   │
│  ┌─────────────┐                            │
│  │             │                            │
│  │ ClickHouse  │                            │
│  │ Database    │                            │
│  │             │                            │
│  └─────────────┘                            │
│                                             │
└─────────────────────────────────────────────┘
```

### Firewall Requirements

Network access requirements:

**Inbound Traffic**
- Port 443 (HTTPS) to ingress controller
- Required for client application access
- Needed for Control Plane management

**Outbound Traffic**
- Port 443 (HTTPS) from Data Plane API to Control Plane
- Port 443 (HTTPS) from Worker to AI services
- Access to container registries

**Internal Communication**
- Inter-component communication within cluster
- Service mesh traffic
- Database connections

> **Important**: NeuralTrust can provide specific IP ranges for more restrictive firewall rules.

## System Requirements

### Infrastructure Requirements

<div class="table-wrapper">

| Component | Requirement | Details |
|-----------|------------|----------|
| **Kubernetes** | Version | 1.20+ |
| | Nodes | Minimum 3 |
| | CPU/Node | 4 vCPUs |
| | Memory/Node | 16 GB |
| **Storage** | ClickHouse | 100Gi per node |
| | Kafka | 50Gi per broker |
| **Total Resources** | CPU | 12+ vCPUs |
| | Memory | 48+ GB |
| | Storage | 300+ GB |

</div>

### Required Tools

Essential tools for deployment and management:

- `kubectl`: For interacting with the Kubernetes cluster
- `helm` (v3.8+): For deploying Kubernetes applications
- `yq`: For YAML processing
- `jq`: For JSON processing