# Authentication Endpoints

Provider offers an alternative to signing each request, by allowing users to generate auth tokens. The generated auth token can be used until its expiration in all supported requests. Simply omit the signature parameter and add the AuthToken request header based on a created token.

Please note that if a signature parameter exists, it will take precedence over the AuthToken headers. All routes that support a signature parameter support the replacement, with the exception of auth-related ones (createAuthToken and deleteAuthToken need to be signed).

### Create Auth Token

#### GET /api/services/createAuthToken

Allows the user to create an auth token.

Parameters

```
address: String object containing consumer's address (optional)
nonce: Integer, Nonce (required)
signature: String object containg user signature (signed message)
 The signature is based on hashing the following parameters:
   address + nonce
expiration: valid future UTC timestamp (required)
```

Returns: Created auth token.

Example:

```
GET /api/services/createAuthToken?address=<your_address>&&nonce=<your_nonce>&&expiration=<expiration>&signature=<your_signature>
```

Inside the angular brackets, the user should provide the valid values for the request.

Response:

```
{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjAwNTMxMjksImFkZHJlc3MiOiIweEE3OGRlYjJGYTc5NDYzOTQ1QzI0Nzk5MTA3NUUyYTBlOThCYTdBMDkifQ.QaRqYeSYxZpnFayzPmUkj8TORHHJ_vRY-GL88ZBFM0o"}
```

#### Delete Auth Token

#### DELETE /api/services/deleteAuthToken

Allows the user to delete an existing auth token before it naturally expires.

Parameters

```
address: String object containing consumer's address (optional)
nonce: Integer, Nonce (required)
signature: String object containg user signature (signed message)
  The signature is based on hashing the following parameters:
  address + nonce
token: token to be expired
```

Returns: Success message if token is successfully deleted. If the token is not found or already expired, returns an error message.

Example:

```
DELETE /api/services/deleteAuthToken?address=<your_address>&&nonce=<your_nonce>&&token=<your_token>&signature=<your_signature>
```

Inside the angular brackets, the user should provide the valid values for the request.

Response:

```
{"success": "Token has been deactivated."}
```
