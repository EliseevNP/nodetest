module.exports = {
  production: {
    externalAPI: {
      port: process.env.EXTERNAL_PORT || 3000
    }
  },
  development: {
    externalAPI: {
      port: process.env.EXTERNAL_PORT || 5000
    }
  }
};