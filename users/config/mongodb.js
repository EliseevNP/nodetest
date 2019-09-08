module.exports = {
  production: {
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    db_name: process.env.MONGO_DB_NAME || 'temp_users'
  },
  development: {
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    db_name: process.env.MONGO_DB_NAME || 'temp_users_dev'
  }
};