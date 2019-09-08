const constraints = require('../constraints');
const Router = require('koa-router');
const models = require('../models');
const validateMiddleware = require( '../middlewares/validate');
const communicator = require('../communicator');

const router = new Router();

router.get('/:id',
  (ctx, next) => {
    ctx.paramsConstraints = {
      id: constraints.id
    };
    return next();
  },
  validateMiddleware,
  async (ctx) => {
    try {
      let result = await models.User.findOne({ id: ctx.params.id }, {id: 1, name: 1, age: 1, _id: 0}).exec();
      result = await new Promise((resolve, reject) => {
        communicator.sendRequest('balances', 'getBalanceById', { balanceId: ctx.params.id }, async (response) => {
          result = Object.assign({id: result.id, name: result.name, age: result.age}, { balance: response.balance });
          resolve(result);
        });
      });
      ctx.body = result;
      ctx.status = 200;
    } catch (err) {
      console.log(`[SERVER][GET /users/:id] ${err}`);
      ctx.status = 500;
    }
  }
);

module.exports = router.routes();
