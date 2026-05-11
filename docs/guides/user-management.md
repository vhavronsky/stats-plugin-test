---
title: Managing Users
---

# Managing Users

Manage access and track users interacting with your Local AI Worker. This guide covers how to retrieve user details and list all registered users.

## User Resource Overview

The `User` resource represents an account that can interact with the Local AI Worker. Every user is defined by a unique identifier and an email address.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the user. |
| `email` | `string` | The user's registered email address. |

## Listing Users

You can retrieve a list of all users currently registered with the worker. This is useful for auditing access or displaying a directory of users.

### Example Request

```bash
curl -X GET https://example.com/users
```

### Example Response

```json
[
  {
    "id": "usr_123",
    "email": "jane.doe@example.com"
  },
  {
    "id": "usr_456",
    "email": "john.smith@example.com"
  }
]
```

## Retrieving a Single User

To get detailed information about a specific user, use their unique `id`.

{% admonition type="info" %}
Ensure you have the correct user ID before making this request. IDs are typically UUIDs or custom strings like `usr_123`.
{% /admonition %}

### Example Request

{% code-group %}
```bash {% title="cURL" %}
curl -X GET https://example.com/users/usr_123
```

```javascript {% title="Node.js" %}
const response = await fetch('https://example.com/users/usr_123');
const user = await response.json();
console.log(user);
```
{% /code-group %}

### Example Response

```json
{
  "id": "usr_123",
  "email": "jane.doe@example.com"
}
```

---

### Resources
- [User Management API Reference](/apis/openapi-secondary.yaml)
