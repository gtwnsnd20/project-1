const express = require('express');
const pool = require('../api/database');

const router = express.Router();

function validateThread(cat_id,subject,thread_description,user_id){
  return !!(!isNaN(cat_id) && !isNaN(user_id) && subject !="" && thread_description != "");
}

// adds a thread to the DB
router.post('/', (req,res) => {
  let {cat_id, subject,thread_description ,user_id} = req.body;
  console.log(cat_id,subject,thread_description,user_id);

  if (validateThread(cat_id,subject,thread_description,user_id)){
    pool.query('INSERT INTO thread VALUES(DEFAULT,$1,$2,$3,$4)', [cat_id,subject,thread_description,user_id], (error,_results) => {
    if (error) {
      console.log(`INSERT INTO thread Query Error: ${error}`);
    }
    
    res.status(201).send('New thread created successfully!');
  });
  } else {
    console.log('Improper Format')
    res.status(400).send("Improper Format");
  }
  

});

module.exports = router;