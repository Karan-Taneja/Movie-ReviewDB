const db = require('./db');
const MovieService = {};

MovieService.addMovie = (title, genre_id, img_url) => db.one('INSERT INTO movies (title, genre_id, img_url) VALUES ($[title], $[genre_id], $[img_url])', {title, genre_id, img_url});

MovieService.getAllMovies = () => db.any('SELECT * FROM movies');
MovieService.getMovieById = (id) => db.any('SELECT * FROM movies WHERE movies.id=$[id]',{id});
MovieService.getMovieRatings = (id) => db.any('SELECT movies.title, ratings.stars FROM movies JOIN ratings on movies.id = ratings.movie_id WHERE movies.id = $[id]', {id});
MovieService.getMovieComments = (id) => db.any('SELECT movies.title, comments.text FROM movies JOIN comments on movies.id = comments.movie_id WHERE movies.id = $[id]', {id});

MovieService.updateMovie = (id, title, genre_id, img_url) => {
  return db.one('UPDATE movies SET title=$[title], genre_id=$[genre_id], img_url=$[img_url] WHERE movies.id=$[id]',
  {id, title, genre_id, img_url});
};
MovieService.deleteMovie = (id) => db.one('DELETE * FROM movies WHERE movies.id=$[id]',{id});

module.exports = MovieService;