# Bloglist

The frontend and backend run together from this directory:

```bash
npm run install:all
npm run dev
```

The frontend is available at `http://localhost:5173` and the API at
`http://localhost:3001`.

For a production build:

```bash
npm run build
npm start
```

Copy `server/.env.example` to `server/.env` and set the MongoDB URI and JWT
secret for the local environment. Do not commit `server/.env`.
