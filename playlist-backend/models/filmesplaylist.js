const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const PlaylistFilmes = sequelize.define('PlaylistFilmes', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  assistido: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: false 
  },
  tempo_assistido: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
  data_visualizacao: { 
    type: DataTypes.DATEONLY 
  },
  nota_avaliacao_usuario: { 
    type: DataTypes.INTEGER, 
    validate: { min: 1, max: 5 } 
  },
});

module.exports = PlaylistFilmes;
