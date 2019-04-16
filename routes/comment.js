const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comment');

//CREATE
commentRouter.post('/', (req, res, next) => {
  const { text, movie_id } = req.body;

  CommentService.createComment(text, movie_id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//READ
commentRouter.get('/', (req, res, next) => {
  const { id } = req.params;

  CommentService.getAllComments()
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

commentRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  CommentService.getComment(id)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//UPDATE
commentRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;

  CommentService.updateComment(id, text)
    .then(data => {
      res.status(200);
      res.json({'data':data});
    })
    .catch(err => {
      res.json({'error':err});
    });
});

//DELEE
commentRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  CommentService.deleteComment(id)
  .then(data => {
    res.status(200);
    res.json({'data':data});
  })
  .catch(err => {
    res.json({'error':err});
  });
});

module.exports = commentRouter;