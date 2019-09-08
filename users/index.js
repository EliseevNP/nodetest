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

models.User.deleteMany({}, () => {
  models.User.insertMany([
    { id: 1, name: 'Ivan Ivanov', age: 20 },
    { id: 2, name: 'Petr Petrov', age: 18 },
    { id: 3, name: 'Andrew Andreev', age: 54 },
    { id: 4, name: 'Maria Kurbatova', age: 32 },
    { id: 5, name: 'Varvara Kolchugina', age: 19 },
    { id: 6, name: 'Roman Romanov', age: 47 },
    { id: 7, name: 'Artyom Sergeev', age: 60 },
    { id: 8, name: 'Alex Kopilov', age: 30 },
    { id: 9, name: 'Marat Chenaev', age: 64 },
    { id: 10, name: 'Anton Zaharov', age: 19 }
  ], () => {
    models.User.find((err, res) => {
      console.log('[MONGODB] Database contain now:\n', JSON.stringify(res, null, 4));
    });
  });
});

communicator.init().then(() => {
  communicator.createService({
    name: 'users',
    handlers: innerAPI
  });
  communicator.startAllServices();
});