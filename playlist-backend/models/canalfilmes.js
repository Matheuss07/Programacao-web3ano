const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const CanalFilmes = sequelize.define('CanalFilmes', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
},
  data_recomendacao: { 
    type: DataTypes.DATEONLY, 
    defaultValue: DataTypes.NOW 
},
});

module.exports = CanalFilmes;
