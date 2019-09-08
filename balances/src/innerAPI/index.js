const models = require('../models');

module.exports = {
  getBalanceById: async (ctx) => {
    return await models.Balance.findOne({ id: ctx.balanceId }, {balance: 1, _id: 0}).exec();
  },
  getBalances: async (_ctx) => {
    return await models.Balance.findOne({}, {balance: 1, _id: 0}).exec();
  }
};