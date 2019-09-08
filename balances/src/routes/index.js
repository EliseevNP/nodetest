const Router = require('koa-router');
const balances = require('./balances');

const router = new Router();

router.use('/balances', balances);

module.exports = router;
