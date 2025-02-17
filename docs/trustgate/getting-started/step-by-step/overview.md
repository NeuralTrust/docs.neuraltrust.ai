---
sidebar_position: 1
title: Overview
---

# Getting Started with AI Gateway

This guide will walk you through setting up and configuring your first AI Gateway instance. By following these steps, you'll learn how to:

1. [Get AI Gateway](./get-ai-gateway.md)
   - Choose your installation method
   - Set up your environment
   - Verify the installation

2. [Create Your First Gateway](./first-gateway.md)
   - Configure a basic gateway
   - Understand gateway settings
   - Test the gateway configuration

3. [Configure an Upstream](./configure-upstream.md)
   - Set up an OpenAI upstream
   - Configure health checks
   - Test the connection

4. [Configure a Service](./add-service.md)
   - Create a service
   - Link it to your upstream
   - Verify the service configuration

5. [Create Rules](./create-rules.md)
   - Define routing rules
   - Configure path matching
   - Test the routing

## Prerequisites

Before you begin, make sure you have:

- Docker installed (for container deployment)
- curl or another HTTP client for testing
- Basic understanding of HTTP and APIs
- Access to an AI model provider (e.g., OpenAI API key)

## Time to Complete

This guide should take approximately 30 minutes to complete.

## What You'll Build

By the end of this guide, you'll have:

- A running AI Gateway instance
- A configured upstream pointing to OpenAI
- A service with proper routing
- Basic security and rate limiting
- Monitoring setup

## Next Steps

Ready to begin? Start with [Installing AI Gateway](./get-ai-gateway.md). 