const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const balance = new Schema({
	id: { type: Number, min: 1, max: Number.MAX_SAFE_INTEGER },
  balance: { type: Number, min: 0, max: Number.MAX_SAFE_INTEGER }
});

module.exports = mongoose.model('Balance', balance);