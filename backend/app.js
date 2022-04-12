// import modules
const express = require('express');
const checkToken = require('./middleware/auth');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');


//app
const app = express();
const port = 3001;
dotenv.config();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());


// routes
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const logoutRoute = require('./routes/logout');
const getCategoriesRoute = require('./routes/get_categories');
const getThreadsRoute = require('./routes/get_threads');
const getPostsRoute = require('./routes/get_posts');
const addThreadRoute = require('./routes/add_thread');
const addPostRoute = require('./routes/add_post');
const deletePostRoute = require('./routes/delete_post');
const deleteThreadRoute = require('./routes/delete_thread');
const deleteUserRoute = require('./routes/delete_user');
const addCategoryRoute = require('./routes/add_category');


//Routes that can be accessed by anyone
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);
app.use('/get-categories', getCategoriesRoute);
app.use('/get-threads', getThreadsRoute);
app.use('/get-posts', getPostsRoute);

//Routes that require being Logged in
app.use('/add-thread', checkToken, addThreadRoute);
app.use('user/add-post', checkToken, addPostRoute);

//Routes that require admin Priveleges
app.use('/delete-post',deletePostRoute);
app.use('/delete-thread',deleteThreadRoute);
app.use('/delete-user',deleteUserRoute);
app.use('/add-category',addCategoryRoute);


// listener
app.listen(port, () => {
  console.log('Express is listening on http://localhost:%s', port);
})

module.exports = app;