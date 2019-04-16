//MODULES
const express = require('express');
const bodyParser = require('body-parser');

//ROUTERS
const movieRouter = require('./routes/movie');
const genreRouter = require('./routes/genre');
const commentRouter = require('./routes/comment');
const ratingRouter = require('./routes/rating');

//APP
const app = express();

//ROUTERS & MIDDLEWARE
app.use(bodyParser.json());
app.use('/movie', movieRouter);
app.use('/genre', genreRouter);
app.use('/comment', commentRouter);
app.use('/rating', ratingRouter);

//TEST ROUTE
app.get('/', (req, res) => {
    res.json({'test': true})
});

//ETC.
app.listen(process.env.PORT || 5001, () => {
    console.log(`listening on port ${process.env.PORT || 5001}`)
})