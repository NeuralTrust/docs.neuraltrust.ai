---
sidebar_position: 3
---

# Go SDK

NeuralTrust Go SDK documentation.

## Installation

```bash
go get github.com/neuraltrust/neuraltrust-go
```

## Quick Start

```go
package main

import (
    "context"
    "log"
    nt "github.com/neuraltrust/neuraltrust-go"
)

func main() {
    client := nt.NewClient("your_api_key")

    // Secure an LLM request
    resp, err := client.Secure(context.Background(), &nt.SecureRequest{
        Provider: "openai",
        Model:    "gpt-4",
        Messages: []nt.Message{
            {Role: "user", Content: "Hello, world!"},
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    // Access monitoring
    metrics, err := client.Metrics.GetRecent(context.Background())
    if err != nil {
        log.Fatal(err)
    }

    // Configure alerts
    alert, err := client.Alerts.Create(context.Background(), &nt.AlertConfig{
        Name: "High Error Rate",
        Condition: nt.AlertCondition{
            Metric:    "error_rate",
            Threshold: 0.05,
        },
    })
}
``` 