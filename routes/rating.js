const express = require('express');
const ratingRouter = express.Router();
const RatingService = require('../services/rating');

//CREATE
ratingRouter.post('/', (req, res, next) => {
  const { stars, movie_id } = req.body;

  RatingService.addRating(stars, movie_id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//READ
ratingRouter.get('/', (req, res, next) => {

  RatingService.getAllRatings()
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//UPDATE
ratingRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { stars } = req.body;

  RatingService.updateRating(id, stars)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//DELETE
ratingRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  RatingService.deleteRating(id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

module.exports = ratingRouter;