---
title: Getting Started
---

# Getting Started

Learn how to interact with your Local AI Worker. This guide walks you through the basics of setting up and verifying your connection to the worker.

## Introduction

The Local AI Worker is designed to handle AI tasks locally on your infrastructure. By using our API, you can monitor the health of the worker and manage users who have access to its resources.

## Prerequisites

Before you begin, ensure you have the following:

- A running instance of the Local AI Worker.
- A tool for making HTTP requests (like `curl` or Postman).
- The base URL for your worker instance (default is `https://example.com`).

## Making Your First Call

The simplest way to verify that your Local AI Worker is running correctly is to call the health endpoint. This endpoint requires no authentication and returns the current status of the worker.

### Check Worker Health

Run the following command in your terminal:

```bash
curl -X GET https://example.com/health
```

The response will be a JSON object indicating the status:

```json
{
  "status": "up"
}
```

If you receive a "200 OK" response, your worker is ready to process requests.

---

### Resources
- [Health API Reference](/apis/openapi.yaml)
