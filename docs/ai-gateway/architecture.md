---
sidebar_position: 2
---

# Architecture


The gateway consists of two main components:

    1. Admin API (Port 8080) - For tenant and configuration management
    2. Proxy API (Port 8081) - For handling and forwarding requests

## Components

    1. Admin Server: Manages tenants, API keys, and forwarding rules
    2. Proxy Server: Handles request forwarding and plugin execution
    3. Redis: Stores configuration and state
    4. Plugin System: Modular system for request/response processing
