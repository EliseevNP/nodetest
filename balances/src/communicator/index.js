const Communicator = require('serivce-communicator');
const rabbitmqCfg = require('../../config/rabbitmq')[process.env.NODE_ENV];

module.exports = new Communicator({
  transport: {
    type: 'AMQP',
    host: rabbitmqCfg.host,
    port: rabbitmqCfg.port
  }
});