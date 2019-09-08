const Router = require('koa-router');
const users = require('./users');

const router = new Router();

router.use('/users', users);

module.exports = router;
