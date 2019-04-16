const db = require('./db');
const GenreService = {};

GenreService.addGenre = (name) => db.one('INSERT INTO genres (name) VALUES ($[name]) RETURNING id;', { name });

GenreService.getAllGenres = () => db.any('SELECT * FROM genres;');
GenreService.getGenreByName = (name) => db.one('SELECT * FROM genres WHERE name=$[name];', { name });
GenreService.getMoviesByGenre = (name) => db.any('SELECT movies.title JOIN movies ON movies.genre_id = genres.id WHERE genres.name = $[name];', { name });

GenreService.deleteGenre = (name) => db.one('DELETE * FROM genres WHERE name=$[name];', { name });

module.exports = GenreService;