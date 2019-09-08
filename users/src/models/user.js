const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: Number, min: 1, max: Number.MAX_SAFE_INTEGER },
  name: { type: String, default: '' },
  age: { type: Number, min: 18, max: 100 }
});

module.exports = mongoose.model('User', UserSchema);