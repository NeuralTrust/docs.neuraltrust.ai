---
sidebar_position: 1
---

# Quick Start

1. Clone the repository:

    ```bash
    git clone https://github.com/ai-gateway/ai-gateway.git
    cd ai-gateway
    ```
2. Create config.yaml:
    ```yaml
        server:
        admin_port: 8080
        proxy_port: 8081
        base_domain: "example.com"
        redis:
        host: "localhost"
        port: 6379
        password: ""
        db: 0
    ```
3. Start Redis:

    ```bash
    docker-compose up -d
    ```

4. Start the servers.

    ```bash
    ./scripts/run_local.sh
    ```


