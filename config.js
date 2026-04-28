// Configuration file

module.exports = {
  development: {
    port: 3000,
    env: 'development',
    debug: true
  },
  production: {
    port: 8080,
    env: 'production',
    debug: false
  },
  database: {
    host: 'localhost',
    port: 5432,
    name: 'kingtone_db'
  }
};