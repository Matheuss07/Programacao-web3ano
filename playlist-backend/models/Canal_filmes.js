import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const CanalFilme = sequelize.define('CanalFilme', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    data_recomendacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return CanalFilme;
};
