module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'expressvue',
    user: process.env.DB_USER || 'expressvue',
    password: process.env.DB_PASS || 'expressvue',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './expressvue.sqlite'
    }
  }
}
