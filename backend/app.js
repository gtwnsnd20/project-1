//  import modules
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const sessions = require('express-session');

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
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const categoryRouter = require('./routes/category');
const threadRouter = require('./routes/thread');

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/category', categoryRouter);
app.use('/thread', threadRouter)

// listener
app.listen(port, () => {
  console.log('Express is listening on http://localhost:%s', port);
})

module.exports = app;