module.exports = {
  production: {
    host: process.env.RABBIT_HOST || 'localhost',
    port: process.env.RABBIT_PORT || 5672
  },
  development: {
    host: process.env.RABBIT_HOST || 'localhost',
    port: process.env.RABBIT_PORT || 5672
  }
};