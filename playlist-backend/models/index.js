import Sequelize from 'sequelize';
import pg from 'pg';
import Usuario from './usuarios.js';
import Filme from './filmes.js';
import Canal from './canais.js';
import CanalFilme from './canal_filmes.js';
import Playlist from './playlists.js';
import PlaylistFilme from './playlist_filmes.js';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialectModule: pg
});

const models = {
  Usuario: Usuario(sequelize),
  Filme: Filme(sequelize),
  Canal: Canal(sequelize),
  CanalFilme: CanalFilme(sequelize),
  Playlist: Playlist(sequelize),
  PlaylistFilme: PlaylistFilme(sequelize)
};

// Relacionamentos
models.Usuario.hasMany(models.Playlist, { foreignKey: 'id_usuario' });
models.Playlist.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });

models.Canal.belongsToMany(models.Filme, {
  through: models.CanalFilme,
  foreignKey: 'id_canal',
  otherKey: 'id_filme'
});
models.Filme.belongsToMany(models.Canal, {
  through: models.CanalFilme,
  foreignKey: 'id_filme',
  otherKey: 'id_canal'
});

models.Playlist.belongsToMany(models.Filme, {
  through: models.PlaylistFilme,
  foreignKey: 'id_playlist',
  otherKey: 'id_filme'
});
models.Filme.belongsToMany(models.Playlist, {
  through: models.PlaylistFilme,
  foreignKey: 'id_filme',
  otherKey: 'id_playlist'
});

export { sequelize };
export default models;
