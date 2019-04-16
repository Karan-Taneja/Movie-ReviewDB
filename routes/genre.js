const express = require('express');
const genreRouter = express.Router();
const GenreService = require('../services/genre');

//CREATE
genreRouter.post('/', (req, res, next) => {
  const { name } = req.body;

  GenreService.addGenre(name)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//READ
genreRouter.get('/', (req, res, next) => {
  GenreService.getAllGenres()
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

genreRouter.get('/:name', (req, res, next) => {
  const { name } = req.params;

  GenreService.getGenreByName(name)
  .then(data => {
    res.status(200);
    res.json({'data':data});
  })
  .catch(err => {
    res.json({'error':err});
  });

});

genreRouter.get('/:name/movies', (req, res, next) => {
  const { name } = req.params;

  GenreService.getMoviesByGenre(name)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//DELETE
genreRouter.delete('/:name', (req, res, next) => {
  const { name } = req.params;

  GenreService.deleteGenre(name)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

module.exports = genreRouter;