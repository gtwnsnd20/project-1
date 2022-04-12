const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.post('/',(req,res)=>{
    let name = req.body.catName;
    console.log(req.body);
    console.log(name);
    pool.query('INSERT INTO category VALUES (DEFAULT,$1)',[name],(error,result)=>{
        if (error) {
            console.log(`INSERT INTO Category Query Error: ${error}`);
          }
      
          res.status(201).send('New category created successfully!');
    })
})
module.exports = router;