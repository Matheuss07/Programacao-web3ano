const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Playlist = sequelize.define('Playlist', {
  id: {  
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true
  },
  nome: {
     type: DataTypes.STRING(200) 
  },
  data_criacao: {
     type: DataTypes.DATEONLY 
  },
});

module.exports = Playlist;
