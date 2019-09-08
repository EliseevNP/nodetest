const mongoose = require('mongoose');
const mongodbCfg = require('../../config/mongodb')[process.env.NODE_ENV];

mongoose.connect(`mongodb://${mongodbCfg.host}:${mongodbCfg.port}/${mongodbCfg.db_name}`, {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000
}).then(
  () => {
    console.log(`[MONGODB] Connection with '${mongodbCfg.db_name}' database was established`);
    require('../models');
  },
  err => {
    console.log(`[MONGODB] ${err}`);
  }
);

mongoose.connection.on('error', err => {
  console.log(`[MONGODB] ${err}`);
});

mongoose.connection.on('connected', () => {
  console.log(`[MONGODB] Connection established`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`[MONGODB] Connection refused`);
});
