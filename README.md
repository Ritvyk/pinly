# Pinly, Shorten URLs Faster...

> Short urls and access them fastly using Pinly API however this is a fullstack APP.

## Quick Start

Add DB , MONDO_DB_PW and PORT fields in **.env** file in your root and add config variables on heroku.

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5500 and client on http://localhost:3000
```

## Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

## App Info

### Author

Ritvik
[Ritvik](https://ritvyk.netlify.app)

### Version

1.0.0

### License

This project is licensed under the MIT License
