---
title: Role-Based Access Control Server
description: Ocean Protocol - Tools for the Web3 Data Economy
---
# Role-Based Access Control Server

This is the Ocean role-based access control (RBAC) server. It currently works with [Keycloak](https://www.keycloak.org/) but has been designed to expand to other identity management services.

## Getting started

In order to start user the RBAC server:

1. Clone this repository:

```Bash
git clone https://github.com/oceanprotocol/RBAC-Server.git
cd RBAC-Server
```

2. Install the dependancies:

```Bash
npm install
```

3. Build the service

```Bash
npm run build
```

4. Start the server

```Bash
npm run start
```

## Running in Docker

1. Replace the KEYCLOAK_URL in the Dockerfile with the correct URL for your hosting of keycloak.
2. Run the following command to build the RBAC service in a Docker container:

```Bash
npm run build:docker
```

3. Next, run the following command to start running the RBAC service in the Docker container:

```Bash
npm run start:docker
```

4. Now you are ready to send requests to the RBAC server via postman. Make sure to replace the URL to `http://localhost:49160` in your requests.

## Sending Keycloak requests

### Step 1

- Download and install [Postman](https://www.postman.com/downloads/)

### Step 2

- Send a POST request to `https://keycloak-int.data-marketplace.io/auth/realms/marketplace/protocol/openid-connect/token`

Use the following body for the request:

Format: `x-www-form-urlencoded`

```
client_id:portal
username:jamie@ocean.com
password:test
grant_type:password
```

The response will contain an access token, for example:

```JSON
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJDWVdQTTJLY1NKUjJtV0o2ZFBqZTVKVmZ5YTZnZXdhVElVZDBabUoyWndFIn0.eyJleHAiOjE2MjAwMzc2MzEsImlhdCI6MTYyMDAzNzMzMSwianRpIjoiNjdmZGRlNGYtNzM4Mi00N2U2LWE2Y2EtMjc3YzcyZDA0MzYwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pby9hdXRoL3JlYWxtcy9tYXJrZXRwbGFjZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkZDM2NDVlZi0zN2Q5LTQzMzQtOWEzYy1jMjczNTRkYmNkMWMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3J0YWwiLCJzZXNzaW9uX3N0YXRlIjoiOGMwM2VhZmQtODMzZi00MWNlLWEwYzMtOWZlZDQ4ZDA2YWQxIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL3BvcnRhbC1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pbyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJwdWJsaXNoZXIiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiamFtaWUgb2NlYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqYW1pZUBvY2Vhbi5jb20iLCJnaXZlbl9uYW1lIjoiamFtaWUiLCJmYW1pbHlfbmFtZSI6Im9jZWFuIiwiZW1haWwiOiJqYW1pZUBvY2Vhbi5jb20ifQ.Yyom-e4n5ut8TFsbZMX_dleg6mvKfktHJe5M2LVPSqVWzjw_bxqYSB9zvg0cW2LFc5M7KT8yc-oHCaQJ52Htwjo94aoy3SpiVWeWv_Y9wz6F-uMipAO2FjWZ9K8NjgGYmbD8Lx0E05QA7S_W_jV09Jj8D5ywUOoqRo0xR6kLS3Fqtuu46pmX8TAGIw8UT3zXctQOqt6XvBFtq-5DMnfRNscBK0XzScPJ-UWIKlrc0LpmzS_ss7bi14lrn2WkTEmxW2BmmB6erGrXYXeJt7DahNRN9azai0rVXrIPsuYTBbBX7V2oreLXF8XeWZ5MYB7cz8Ib1y6_MKGYSdSikuEvEQ",
    "expires_in": 300,
    "refresh_expires_in": 1800,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1ZTE4NWQ3OC1iMGEyLTQwY2QtYWJhMS0wZTA3ODlhYjU4NTIifQ.eyJleHAiOjE2MjAwMzkxMzEsImlhdCI6MTYyMDAzNzMzMSwianRpIjoiNzNmYmVlODEtYTZkYy00ODQ4LWFkNWYtNTdmYWM5Zjg4M2MyIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pby9hdXRoL3JlYWxtcy9tYXJrZXRwbGFjZSIsImF1ZCI6Imh0dHBzOi8va2V5Y2xvYWstaW50LmRhdGEtbWFya2V0cGxhY2UuaW8vYXV0aC9yZWFsbXMvbWFya2V0cGxhY2UiLCJzdWIiOiJkZDM2NDVlZi0zN2Q5LTQzMzQtOWEzYy1jMjczNTRkYmNkMWMiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoicG9ydGFsIiwic2Vzc2lvbl9zdGF0ZSI6IjhjMDNlYWZkLTgzM2YtNDFjZS1hMGMzLTlmZWQ0OGQwNmFkMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCJ9.ZtVpuzOAkeiAsjcZOskfqOeCPoaPKdS6-6ObfWBdSTE",
    "token_type": "Bearer",
    "not-before-policy": 0,
    "session_state": "8c03eafd-833f-41ce-a0c3-9fed48d06ad1",
    "scope": "profile email"
}
```

### Step 3

- Now send a `POST` request to this URL: `http://localhost:3000`

The body of the request should be in the following format:

```JSON
{
     "eventType": "publish",
     "component": "market",
     "authService": "keycloak",
     "credentials": {
              "type": "3BoxProfile",
              "token": "<INSERT ACCESS_TOKEN FROM STEP 2>"
     }
}
```

Make sure to insert the token that you have recieved from Keycloak in step 2.

## Sending Address requests

You can find out the permission of the user using their address by sending a POST request in this format:

```JSON
{
     "eventType": "consume",
     "component": "market" ,
     "authService": "address",
     "credentials": {
              "address":"0xETHEURM_ADRESS"
     }
}
```

If you are running the RBAC server locally the POST request should be sent to: `http://localhost:3000`

## Sending JSON requests

If you want to check if an address is currently in an allow or deny json list you can send a POST request in the following format:

```JSON
{
     "authService": "json",
     "credentials": {
              "address":"0x2dc7656ec7db88b098defb751b7401b5f6d8976f"
     }
}
```

If you are running the RBAC server locally the POST request should be sent to: `http://localhost:3000`

## Setting Default Auth Service

You can change the default auth service in the .env file e.g. `DEFAULT_AUTH_SERVICE = "keycloak"`. This is the auth service that will be used if no `authService` is defined within the request.

## Sending Test requests

- Download and install [Postman](https://www.postman.com/downloads/)

- Send a POST request to `http://localhost:3000`

- Use one of the following JSON snippets as the body of the request:

```JSON
{
     "eventType": "publish",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "address",
              "token": "0x0123456789"
     }
}
```

```JSON
{
     "eventType": "publish",
     "component": "provider" ,
     "authService": "test",
     "credentials": {
              "type": "Oauth2",
              "token": "0N2JK21J7I55U7HK8459J2N34506J43K"
     }
}
```

```JSON
{
     "eventType": "delete",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "address",
              "token": "0x0123456789"
     }
}
```

```JSON
{
     "eventType": "publish",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{
     "eventType": "delete",
     "component": "provider" ,
     "authService": "test",
     "credentials": {
              "type": "Oauth2",
              "token": "0N2JK21J7I55U7HK8459J2N34506J43K"
     }
}
```

```JSON
{
     "eventType": "consume",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{
     "eventType": "publish",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "Ldap",
              "token": "NJKJ7I5UHK45JNJ43K"
     }
}
```

```JSON
{
     "eventType": "publish",
     "component": "provider" ,
     "authService": "test",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{
     "eventType": "delete",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{
     "eventType": "consume",
     "component": "market" ,
     "authService": "test",
     "credentials": {
              "type": "Ldap",
              "token": "NJKJ7I5UHK45JNJ43K"
     }
}
```
