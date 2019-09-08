const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

let models = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const newModel = require('./' + file);
    models[file.slice(0, 1).toUpperCase() + file.slice(1, -3)] = newModel;
  });

console.log('[MONGODB] Models was initialized');

module.exports = models;