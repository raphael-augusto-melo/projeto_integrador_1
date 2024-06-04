const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('tb_usuarios', {
  name: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
  rg: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  telefone: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  renda: { type: DataTypes.FLOAT, allowNull: true },
  senha: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

module.exports = User;