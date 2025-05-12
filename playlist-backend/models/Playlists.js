import { DataTypes } from 'sequelize';

export default (sequelize) => {
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
      type: DataTypes.DATE
    }
  });

  return Playlist;
};
