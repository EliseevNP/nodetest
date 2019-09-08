module.exports = {
  production: {
    externalAPI: {
      port: process.env.EXTERNAL_PORT || 3001
    }
  },
  development: {
    externalAPI: {
      port: process.env.EXTERNAL_PORT || 5001
    }
  }
};