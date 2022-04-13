const express = require('express');
const pool = require('../api/database');

const router = express.Router();

//validate post
function validePost(content){
  return !!(content);
}

// adds a post to the DB
router.post('/', (req,res) => {
  let {thread_id, user_id, content} = req.body;
  console.log("Content:"+content+"*");

  pool.query('INSERT INTO post VALUES(DEFAULT,$1,$2,$3)', [thread_id,user_id,content], (error,_results) => {
    if (error) {
      console.log(`INSERT INTO post Query Error: ${error}`);
      res.status(403).json(error);
    } else if (validePost(req.body.content)){
      res.status(201).send('New post created successfully!');
    } else {
      res.status(403).json();
    }
    
    
  });
});

module.exports = router;