const express = require('express');
const pool = require('../api/database');

const router = express.Router();

// gets all threads of a category from the DB
router.get('/', (req,res) => {
    let cat_id = req.query.cat_id;
    console.log(cat_id);

    pool.query('select user_id,username,email,role_name,register_date,last_login from users JOIN roles ON users.role_id = roles.role_id;', (error,results) => {
        if (error) {
            console.log(`SELECT {...} FROM thread Query Error: ${error}`);
        }
        
        res.status(200).json(results.rows);
    })
})

module.exports = router;