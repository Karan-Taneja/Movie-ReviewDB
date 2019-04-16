const db = require('./db');
const CommentService = {};

CommentService.createComment = (text, movie_id) => db.one('INSERT INTO comments (text, move_id) VALUES ($[text],$[movie_id]) RETURNING id', {text, movie_id});
CommentService.getAllComments = () => db.any('SELECT * FROM comments');
CommentService.getComment = (id) => db.any('SELECT * FROM comments WHERE id=$[id]', {id});
CommentService.updateComment = (id, text) => db.none('UPDATE comments SET text=$[text] WHERE id=$[id]', {id, text});
CommentService.deleteComment = (id) => db.one('DELETE * FROM comments WHERE id=$[id]', {id});

module.exports = CommentService;