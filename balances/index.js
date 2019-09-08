require('./src/mongodb');
const Koa = require('koa');
const serverCfg = require('./config/server')[process.env.NODE_ENV];
const router = require('./src/routes');
const errorHandler = require('./src/middlewares/error-handler');
const communicator = require('./src/communicator');
const innerAPI = require('./src/innerAPI');

// Create API for frontend
const app = new Koa();
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(serverCfg.externalAPI.port, () => {
  console.log('[SERVER] Listening on port: ' + serverCfg.externalAPI.port);
});

// Fill database (in a real application the code below should be removed)
const models = require('./src/models');

models.Balance.deleteMany({}, () => {
  models.Balance.insertMany([
		{id: 1, balance: 100},
		{id: 2, balance: 10040},
		{id: 3, balance: 28900},
		{id: 4, balance: 500},
		{id: 5, balance: 3500},
		{id: 6, balance: 123123},
		{id: 7, balance: 321},
		{id: 8, balance: 12455},
		{id: 9, balance: 76865},
		{id: 10, balance: 32874384}
  ], () => {
    models.Balance.find((err, res) => {
      console.log('[MONGODB] Database contain now:\n', JSON.stringify(res, null, 4));
    });
  });
});

communicator.init().then(() => {
  communicator.createService({
    name: 'balances',
    handlers: innerAPI
  });
  communicator.startAllServices();
});



