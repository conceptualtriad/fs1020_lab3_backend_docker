# Scratchpad

### POST /users (new user)

```JSON
{
  "name": "Some Name",
  "password": "password",
  "email": "address@email.com"
}
```

### POST /contact_form/entries (new entry)

```JSON
{
  "name": "some string",
  "email": "address@email.com",
  "phoneNumber": "2343331234",
  "content": "User's message goes here"
}
```

### POST /users/auth (log in and provide token)

```JSON
{
  "email": "address@email.com",
  "password": "password"
}
```

### GET /entries (get entries, with valid bearer token)

```JSON
{
}
```

### GET /users route for testing

```JavaScript
aoo.get('/', (req, res) => {
  return res.status(200).json(users)
})
```

### GET / route at base URL for testing

```JavaScript
app.get('/', (req, res) => res.status(200).json('Hello Course Project!'))
```
