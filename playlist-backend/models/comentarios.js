const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Comentario = sequelize.define('Comentario', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  texto: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  data_comentario: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },
  avaliacao: { 
    type: DataTypes.DECIMAL(10, 2), 
    validate: { min: 0, max: 10 } 
  },
});

module.exports = Comentario;
