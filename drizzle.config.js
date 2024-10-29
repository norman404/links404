if (process.env.NODE_ENV !== 'production') {
  process.loadEnvFile()
}

const config = {
  schema: './models/index.js',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  }
}

module.exports = config
