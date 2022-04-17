const express = require('express');
const pool = require('../api/database');

const router = express.Router();

// gets all threads of a category from the DB
router.get('/', (req,res) => {
    let cat_id = req.query.cat_id;
    console.log("Getting category with id:"+cat_id);

    pool.query('SELECT thread_id,subject,thread_description,create_date FROM thread WHERE cat_id = $1',[cat_id], (error,results) => {
        if (error) {
            console.log(`SELECT {...} FROM thread Query Error: ${error}`);
        }
        
        res.status(200).json(results.rows);
    })
})

module.exports = router;