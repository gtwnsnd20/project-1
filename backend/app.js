//  import modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//app

// database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'));

// middleware

// routes

// port

// listener
