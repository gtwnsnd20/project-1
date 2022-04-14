const express = require('express');
const pool = require('../api/database');
//const bcrypt = require('bcryptjs'); Encryption
const jwt = require('jsonwebtoken');

const router = express.Router();
const one_day = 24 * 60 * 60 * 1000;

router.post('/', (req,res) => {
    console.log("Login")
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers','Origin' ,'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,set-cookie,cookies');
    let {username, password} = req.body;
    console.log([username,password]);

    pool.query('SELECT username,password,user_id,role_id FROM users WHERE username=$1', [username], (error,results) => {
        if (error) {
            console.log(`Login Query error: ${error}`);
            res.status(403).json(error);
        }

        if (results.rowCount == 0){ // If username not found, return error
            res.status(400).json();
        } else {
            let data = results.rows[0];
            console.log(data);
            if(data.password == password){ // Send status for correct password and JWT token
                console.log("Password is correct")
                // Create JWT token
                let admin = false;
                if (results.rows[0].role_id == 2){
                    admin = true;
                }
                const token = jwt.sign({user:data.username,userid:data.user_id,isadmin:admin},process.env.TOKEN_SECRET,{expiresIn: '24h'});
                res.status(200).cookie("access_token", [token,username,results.isadmin],  {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: one_day
                }).json([token,{user:data.username,userid:data.user_id,isadmin:admin}]);
            } else { // Send status for incorrect password
                console.log("Password is incorrect");
                res.status(400).json();
            }
        }
    })
});

module.exports = router;