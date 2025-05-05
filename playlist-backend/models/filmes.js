const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Filme = sequelize.define('Filme', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  titulo: { 
    type: DataTypes.STRING(200), 
    allowNull: false 
  },
  genero: { 
    type: DataTypes.STRING(50), 
    allowNull: false 
  },
  duracao: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  ano_lancamento: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  nota_avaliacao: { 
    type: DataTypes.DECIMAL(10, 2), 
    validate: { min: 0, max: 10 } 
  },
});

module.exports = Filme;
