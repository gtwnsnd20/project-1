const express = require('express');
const pool = require('../api/database');

const router = express.Router();

// gets all categories from the DB
router.get('/', (_req,res) => {
    pool.query('SELECT * FROM category', (error,results) => {
        if (error) {
            console.log(`SELECT * FROM category Query Error: ${error}`);
        }
        
        res.status(200).json(results.rows);
    })
});

module.exports = router;