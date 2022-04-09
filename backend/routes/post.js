const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.get('/', (req,res) => {
  let thread_id = req.query.thread_id;
  console.log(thread_id);

  pool.query('SELECT user_id,content,post_date FROM post WHERE thread_id=$1', [thread_id], (error,results) => {
    if (error) {
      console.log(error)
      res.status(403).json(error);
    } else {
      res.status(200).json(results.rows);
    }
  });

});

module.exports = router;