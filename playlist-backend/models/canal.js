const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Canal = sequelize.define('Canal', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  nome: { 
    type: DataTypes.STRING(100), 
    allowNull: false 
  },
  data_criacao: { 
    type: DataTypes.DATEONLY, 
    allowNull: false 
  },
  genero_tema: { 
    type: DataTypes.STRING(50), 
    allowNull: false 
  },
});

module.exports = Canal;
