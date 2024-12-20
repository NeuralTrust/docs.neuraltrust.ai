---
sidebar_position: 4
---

# Java SDK

NeuralTrust Java SDK documentation.

## Installation

### Maven
```xml
<dependency>
    <groupId>ai.neuraltrust</groupId>
    <artifactId>neuraltrust-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Gradle
```groovy
implementation 'ai.neuraltrust:neuraltrust-sdk:1.0.0'
```

## Quick Start

```java
import ai.neuraltrust.NeuralTrust;
import ai.neuraltrust.models.*;

public class QuickStart {
    public static void main(String[] args) {
        NeuralTrust nt = new NeuralTrust("your_api_key");

        // Secure an LLM request
        SecureRequest request = SecureRequest.builder()
            .provider("openai")
            .model("gpt-4")
            .message(Message.builder()
                .role("user")
                .content("Hello, world!")
                .build())
            .build();

        SecureResponse response = nt.secure(request);

        // Access monitoring
        Metrics metrics = nt.metrics().getRecent();

        // Configure alerts
        AlertConfig alertConfig = AlertConfig.builder()
            .name("High Error Rate")
            .condition(AlertCondition.builder()
                .metric("error_rate")
                .threshold(0.05)
                .build())
            .build();

        Alert alert = nt.alerts().create(alertConfig);
    }
}
```

## Error Handling

```java
try {
    SecureResponse response = nt.secure(request);
} catch (NeuralTrustException e) {
    System.err.println("Error: " + e.getMessage());
    System.err.println("Code: " + e.getCode());
}
``` 