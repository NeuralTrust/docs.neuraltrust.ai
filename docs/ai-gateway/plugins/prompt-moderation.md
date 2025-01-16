---
sidebar_position: 4
---

# Prompt Moderation

## Overview
The **Prompt Moderation** plugin is a sophisticated content filtering system designed to protect your AI gateway from potentially harmful or unwanted content. It employs multiple layers of **content analysis** to ensure comprehensive protection while maintaining high performance.

At its core, the plugin implements content filtering through two primary mechanisms: **keyword-based blocking** and **regular expression pattern matching**. The keyword system is enhanced with **fuzzy matching** capabilities, allowing it to detect not just exact matches but also similar variations of prohibited words. This is particularly effective in catching attempts to circumvent the filter through minor word modifications.

The **smart detection system** utilizes advanced string matching algorithms, specifically the **Levenshtein distance** calculation, to determine word similarity. This approach is **case-insensitive** by default and operates with a configurable **similarity threshold** (ranging from 0 to 1). The default threshold is set to **0.8**, providing a good balance between strict matching and flexibility. This means that words that are 80% similar to blocked keywords will trigger the filter, effectively catching common evasion techniques like character substitutions or misspellings.

## Plugin Design
```go
type PromptModerationPlugin struct {
    logger     *logrus.Logger
    keywords   []string
    regexRules []*regexp.Regexp
}

type Config struct {
    Keywords []string `mapstructure:"keywords"`
    Regex    []string `mapstructure:"regex"`
    Actions  struct {
        Type    string `mapstructure:"type"`
        Message string `mapstructure:"message"`
    } `mapstructure:"actions"`
    SimilarityThreshold float64 `mapstructure:"similarity_threshold"`
}
```

## How It Works
The plugin processes incoming requests through a series of carefully orchestrated steps. When a request arrives at the gateway, it first undergoes **content analysis**. During this phase, the system breaks down the input text into individual words and compares each against the list of **prohibited keywords** using fuzzy matching algorithms.

Simultaneously, the content is evaluated against a set of **regular expression patterns**. These patterns can be used to catch more complex content structures, such as specific phrases, patterns, or formats that might indicate unwanted content. The **regex engine** is optimized to handle these comparisons efficiently, with patterns being compiled once during initialization.

The **validation process** involves two main checks:
1. A **similarity score** is calculated for each word against the keyword list, using the Levenshtein distance algorithm. If any word's similarity score exceeds the configured threshold, the content is flagged.
2. The complete text is matched against each regex pattern in the ruleset. Any successful match triggers the configured **action**.

## Configuration Example
```json
{
    "settings": {
        "keywords": [
            "blocked_word1",
            "blocked_word2"
        ],
        "regex": [
            "pattern1.*",
            "pattern2.*"
        ],
        "actions": {
            "type": "block",
            "message": "Content blocked: %s"
        },
        "similarity_threshold": 0.8
    }
}
```

## Best Practices
When implementing the Prompt Moderation plugin, several **key considerations** should guide your configuration. First, your **keyword list** should be comprehensive yet precise. Include terms that clearly indicate unwanted content, but avoid overly common words that might lead to **false positives**.

The **similarity threshold** is a crucial setting that requires careful tuning. A threshold above **0.8** provides strict matching, suitable for environments where content control is paramount. Lower thresholds increase detection sensitivity but may generate more false positives. We recommend starting with the default 0.8 threshold and adjusting based on your specific needs.

Regular expression patterns should be crafted thoughtfully. While powerful, complex **regex patterns** can impact performance. Focus on patterns that target specific content structures you want to block, and test them thoroughly before deployment.

## Performance Optimization
The plugin is designed with **performance** in mind, implementing several optimization strategies. Regular expression patterns are **compiled once** during plugin initialization, eliminating the overhead of repeated compilation during request processing. The **Levenshtein distance** calculation, while computationally intensive, is optimized for efficiency and operates on individual words rather than the entire content body.

String comparisons are implemented using **memory-efficient algorithms**, and the plugin maintains a **minimal memory footprint** by storing only essential pattern data. The **case-insensitive matching** is implemented at the comparison level, avoiding the need for multiple pattern variations. 

The plugin is designed to be **highly efficient** and **low-latency**, ensuring that it can handle a large number of requests without compromising performance. The **Levenshtein distance** calculation is optimized for speed, and the plugin maintains a **minimal memory footprint** by storing only essential pattern data. The **case-insensitive matching** is implemented at the comparison level, avoiding the need for multiple pattern variations. 