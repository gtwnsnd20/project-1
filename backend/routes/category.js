const express = require('express');
const pool = require('../api/database');
//Get categories
const router = express.Router();

router.get('/',(req,res)=>{
    pool.query('SELECT name FROM category',(error,results)=>{
        if(error){
            throw error;
            res.status(403).json(error);
        } else {
            res.status(200).json(results.rows);
        }
    })
});

module.exports = router;