const express = require('express');
const pool = require('../api/database');
const router = express.Router()

router.get('/',(req,res)=>{
    console.log("Hello");
    let terms = req.query.terms;
    terms = "%" + terms + "%"//Add wildcards
    console.log(terms);
    pool.query("SELECT thread_id,subject,thread_description,create_date FROM thread WHERE LOWER(subject) LIKE LOWER($1) UNION SELECT thread_id,subject,thread_description,create_date FROM thread WHERE LOWER(thread_description) LIKE LOWER($1)",[terms], (error,results)=>{
        if (error) {
            console.log(`SELECT {...} FROM thread Query Error: ${error}`);
        }
        console.log(results.rows)
        res.status(200).json(results.rows);
    })
})
module.exports = router;

//Search thread subject as wells as thread_description
//SELECT thread_id,subject,thread_description,create_date FROM thread WHERE LOWER(subject) LIKE LOWER($1) UNION SELECT thread_id,subject,thread_description,create_date FROM thread WHERE LOWER(thread_description) LIKE LOWER($1)

//Search just thread subject
//SELECT thread_id,subject,thread_description,create_date FROM thread WHERE LOWER(subject) LIKE LOWER($1)