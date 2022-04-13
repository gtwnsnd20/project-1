const express = require('express');
const pool = require('../api/database');

const router = express.Router();

// gets all posts of a thread from the DB
router.get('/', (req,res) => {
  let thread_id = req.query.thread_id;
  console.log(thread_id);

  pool.query('SELECT username,post.user_id,content,post_date FROM post JOIN users ON users.user_id = post.user_id WHERE thread_id=$1', [thread_id], (error,results) => {
    if (error) {
      console.log(`SELECT {...} FROM post Query Error: ${error}`);
    }

    res.status(200).json(results.rows);
  });

});

module.exports = router;