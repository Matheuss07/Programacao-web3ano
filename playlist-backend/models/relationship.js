const Usuario = require('./usuario');
const Filme = require('./filme');
const Canal = require('./canal');
const CanalFilmes = require('./canal_filmes');
const Playlist = require('./playlist');
const PlaylistFilmes = require('./playlist_filmes');
const Comentario = require('./comentario');

// Usuário e Playlist
Usuario.hasMany(Playlist, { foreignKey: 'id_usuario' });
Playlist.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Playlist e PlaylistFilmes
Playlist.hasMany(PlaylistFilmes, { foreignKey: 'id_playlist' });
PlaylistFilmes.belongsTo(Playlist, { foreignKey: 'id_playlist' });

// Filme e PlaylistFilmes
Filme.hasMany(PlaylistFilmes, { foreignKey: 'id_filme' });
PlaylistFilmes.belongsTo(Filme, { foreignKey: 'id_filme' });

// Canal e PlaylistFilmes
Canal.hasMany(PlaylistFilmes, { foreignKey: 'id_canal' });
PlaylistFilmes.belongsTo(Canal, { foreignKey: 'id_canal' });

// Canal e CanalFilmes
Canal.hasMany(CanalFilmes, { foreignKey: 'id_canal' });
CanalFilmes.belongsTo(Canal, { foreignKey: 'id_canal' });

// Filme e CanalFilmes
Filme.hasMany(CanalFilmes, { foreignKey: 'id_filme' });
CanalFilmes.belongsTo(Filme, { foreignKey: 'id_filme' });

// Usuário e Comentário
Usuario.hasMany(Comentario, { foreignKey: 'id_usuario' });
Comentario.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Filme e Comentário
Filme.hasMany(Comentario, { foreignKey: 'id_filme' });
Comentario.belongsTo(Filme, { foreignKey: 'id_filme' });

module.exports = () => {};
