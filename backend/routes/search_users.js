const express = require('express');
const pool = require('../api/database');
const router = express.Router()

router.get('/',(req,res)=>{
    let terms = req.query.terms;
    terms = "%" + terms + "%"//Add wildcards
    pool.query('select user_id,username,email,role_name,register_date,last_login from users JOIN roles ON users.role_id = roles.role_id WHERE LOWER(username) LIKE LOWER($1) ORDER BY username;', [terms], (error,results)=>{
        if (error) {
            console.log(`SELECT {...} FROM thread Query Error: ${error}`);
        }
        console.log(results.rows)
        res.status(200).json(results.rows);
    })
})
module.exports = router;