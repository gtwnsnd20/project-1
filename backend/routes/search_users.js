const express = require('express');
const pool = require('../api/database');
const router = express.Router()

router.get('/',(req,res)=>{
    console.log("Hello");
    let terms = req.query.terms;
    terms = "%" + terms + "%"//Add wildcards
    console.log(terms)
    pool.query('select user_id,username,email,role_name,register_date,last_login from users JOIN roles ON users.role_id = roles.role_id WHERE username LIKE $1 ORDER BY username;', [terms], (error,results)=>{
        if (error) {
            console.log(`SELECT {...} FROM thread Query Error: ${error}`);
        }
        console.log(results.rows)
        res.status(200).json(results.rows);
    })
})
module.exports = router;