const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ceubank', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Para desativar o log de SQL no console
});

module.exports = sequelize;



