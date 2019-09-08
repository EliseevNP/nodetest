module.exports = {
  id: {
    presence: {
      is: true,
      message: 'id is required'
    },
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 1,
      lessThanOrEqualTo: Number.MAX_SAFE_INTEGER
    }
  }
};