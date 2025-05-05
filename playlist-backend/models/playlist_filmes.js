import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const PlaylistFilme = sequelize.define('PlaylistFilme', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  return PlaylistFilme;
};
