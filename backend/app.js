//  import modules
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const sessions = require('express-session');
const checkToken = require('./routes/auth');

//app
const app = express();
const port = 3001;
const oneDay = 1000 * 60 * 60 * 24;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(sessions({
  secret: "project1risecretkey",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

// routes
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const getCategoriesRoute = require('./routes/get_categories');
const getThreadsRoute = require('./routes/get_threads');
const getPostsRoute = require('./routes/get_posts');
const addThreadRoute = require('./routes/add_thread');
const addPostRoute = require('./routes/add_post');

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/get-categories', getCategoriesRoute);
app.use('/get-threads', getThreadsRoute);
app.use('/get-posts', getPostsRoute);
app.use('/add-thread', addThreadRoute);
app.use('/add-post', addPostRoute);


// listener
app.listen(port, () => {
  console.log('Express is listening on http://localhost:%s', port);
})

module.exports = app;