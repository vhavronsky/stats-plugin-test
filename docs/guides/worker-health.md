---
title: Monitoring Worker Health
---

# Monitoring Worker Health

Maintaining visibility into your Local AI Worker's operational state is essential for ensuring reliable task processing.

## Why Health Monitoring Matters

{% admonition type="info" %}
In local deployments, hardware resource constraints or network shifts can cause service interruptions. Regular health monitoring allows your orchestrator to automatically restart or reroute traffic before failures impact users.
{% /admonition %}

Health monitoring enables you to:
- Detect resource exhaustion or hanging processes.
- Implement automated recovery scripts.
- Provide real-time status updates in your management dashboard.

## Using the Health Endpoint

The `/health` endpoint is a lightweight check that confirms the service is running and capable of accepting requests. This endpoint requires no authentication.

```bash
curl -X GET "https://example.com/health"
```

The response returns a simple status indicator:

```json
{
  "status": "healthy"
}
```

## Automating Health Checks

Most production deployments use a sidecar container or a cron job to poll this endpoint every 30-60 seconds. If the endpoint returns anything other than a `200 OK` or if the status field indicates a problem, the instance should be flagged for investigation.

### Resources

- [Test Stats API Reference](/apis/openapi.yaml)
