import { Sequelize } from 'sequelize';
    import dotenv from 'dotenv'//arquivos que vc instalou dependencias

    dotenv.config(); // Carrega as variáveis de ambiente

    const sequelize = new Sequelize(
      process.env.playlist,
      process.env.aluno,
      process.env.aluno,
      {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT
      }
    );

    export default sequelize;
