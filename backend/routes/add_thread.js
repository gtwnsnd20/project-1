const express = require('express');
const pool = require('../api/database');

const router = express.Router();

function validateThread(cat_id,subject,user_id){
  return !!(!isNaN(cat_id) && !isNaN(user_id) && subject !="");
}

// adds a thread to the DB
router.post('/', (req,res) => {
  let {cat_id, subject, user_id} = req.body;
  console.log(cat_id,subject,user_id);
  console.log(!isNaN(user_id))
  if (validateThread(cat_id,subject,user_id)){
    pool.query('INSERT INTO thread VALUES(DEFAULT,$1,$2,$3)', [cat_id,subject,user_id], (error,_results) => {
    if (error) {
      console.log(`INSERT INTO thread Query Error: ${error}`);
    }
    
    res.status(201).send('New thread created successfully!');
  });
  } else {
    res.status(403).send("Improper Format");
  }
  

});

module.exports = router;