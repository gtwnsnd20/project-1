const express = require('express');
const pool = require('../api/database');

const router = express.Router();

function validateCategory(catName){
    return !!(catName)
}

router.post('/',(req,res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers','Origin' ,'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,set-cookie,cookies');
    let name = req.body.catName;
    console.log(req.body);
    console.log(name);
    if (validateCategory(name)){
          pool.query('INSERT INTO category VALUES (DEFAULT,$1)',[name],(error,result)=>{
        if (error) {
            console.log(`INSERT INTO Category Query Error: ${error}`);
        }
          res.status(201).send('New category created successfully!');
    })
    } else {
        res.status(403).send("Improper Form")
    }
  
})
module.exports = router;