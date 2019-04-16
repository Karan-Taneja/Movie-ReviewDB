const express = require('express');
const movieRouter = express.Router();
const MovieService = require('../services/movie');

//CREATE
movieRouter.post('/', (req, res, next) => {
  const { title, genre_id, img_url } = req.body;

  MovieService.addMovie(title, genre_id, img_url)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//READ
movieRouter.get('/', (req, res, next) => {
  MovieService.getAllMovies()
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

movieRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  MovieService.getMovieById(id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

movieRouter.get('/:id/ratings', (req, res, next) => {
  const { id } = req.params;

  MovieService.getMovieRatings(id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

movieRouter.get('/:id/comments', (req, res, next) => {
  const { id } = req.params;

  MovieService.getMovieComments(id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//UPDATE
movieRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, genre_id, img_url } = req.body;

  MovieService.updateMovie(id, title, genre_id, img_url)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//DELETE
movieRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  MovieService.deleteMovie(id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

module.exports = movieRouter;