const constraints = require('../constraints');
const Router = require('koa-router');
const models = require('../models');
const validateMiddleware = require('../middlewares/validate');

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
      ctx.body = await models.Balance.findOne({ id: ctx.params.id }, {balance: 1, _id: 0}).exec();
      ctx.status = 200;
    } catch (err) {
      console.log(`[SERVER][GET /balances/:id] ${err}`);
      ctx.status = 500;
    }
  }
);

module.exports = router.routes();
