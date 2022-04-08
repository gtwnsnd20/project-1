const express = require('express');
const pool = require('../api/database');

const router = express.Router();
//route for getting threads of a specific subject
router.get('/',(req,res)=>{
/*     let data = req.body;
    console.log(JSON.stringify(data)) */
    let cat_id = req.query.cat_id;
    console.log(cat_id);
    pool.query('SELECT subject,create_date FROM thread WHERE cat_id = $1',[cat_id], (error,results) =>{
        if (error){
            console.log(error)
            res.status(403).json(error);
        } else {
            res.status(200).json(results.rows);
        }
    })
})

module.exports = router;