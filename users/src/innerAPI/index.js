module.exports = {
  getUserById: async (ctx) => {
    return await models.User.findOne({ id: ctx.params.id }, {id: 1, name: 1, age: 1, _id: 0}).exec();
  },
  getUsers: async (ctx) => {
    return await models.User.findOne({}, {id: 1, name: 1, age: 1, _id: 0}).exec();
  }
}