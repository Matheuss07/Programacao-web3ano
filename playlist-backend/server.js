import sequelize from './config/database.js';

  (async () => {
    try {
      await sequelize.authenticate();
      console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
      await sequelize.sync({alter:true});
      console.log('modelos ok');
    } catch (error) {
      console.error('❌ Não foi possível conectar ao banco de dados:', error);
    } finally {
      await sequelize.close();
    }
  })();