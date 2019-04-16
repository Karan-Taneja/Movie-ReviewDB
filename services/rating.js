const db = require('./db');
const RatingService = {};

RatingService.addRating = (stars, movie_id) => db.one('INSERT INTO ratings (stars, movie_id) VALUES ($[stars], $[movie_id]);', {stars, movie_id});
RatingService.getAllRatings = () => db.any('SELECT * FROM ratings;');
RatingService.updateRating = (id, stars) => db.none('UPDATE ratings SET stars=$[stars] WHERE id=$[id];', {id, stars});
RatingService.deleteRating = (id) => db.one('DELETE * FROM ratings WHERE id=$[id];', {id});

module.exports = RatingService;