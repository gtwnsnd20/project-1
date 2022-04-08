const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.get('/', (req,res) => {
  
  pool.query('SELECT user_id,content,post_date FROM thread WHERE thread_id=$1', [thread_id], (error,results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results.rows);
    }
  });

});

module.exports = router;