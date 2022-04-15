const express = require('express');
//const bcrypt = require("bcryptjs")
const pool = require('../api/database');
const router = express.Router();
const jwt = require('jsonwebtoken');
const one_day = 24 * 60 * 60 * 1000;

function validateRegister(username,password,email){
  return !!(username && password && email);
}

router.post('/', (req,res) => {
  let {username, password, email} = req.body;
  console.log([username,password,email]);
  if (validateRegister(username,password,email)){
    pool.query('SELECT * FROM users WHERE username=$1', [username], (error,results) => { // Query to check for username already taken
      if(error) {
        console.log(`User Table Check Query error: ${error}`);
        res.status(403).json(error);
        console.log("-----------------------------------------------------------------------")
      }
      console.log(results.rows)
      if(results.rowCount > 0){ //Throws error if username found in DB
        res.status(409).send('Username already taken');
      } else { // Else insert new user
        //hashPassword = bcrypt.hashSync(password,10);
        //console.log(hashPassword);
        pool.query('INSERT INTO users VALUES(DEFAULT,$1,$2,$3) RETURNING *', [username,password,email], (error2,results2) => { // Query to insert new user
          if(error2){
            console.log(`Registration Query error: ${error2}`);
              res.status(403).send("Query Error");
          }
          console.log(results2.rows)
          console.log(results2.rows[0])
          let user_id = results2.rows[0].user_id;
          let isAdmin = results2.rows[0].admin;
          const token = jwt.sign({user:username,userid:user_id,isadmin:isAdmin},process.env.TOKEN_SECRET,{expiresIn: '24h'});
          res.status(200).cookie("access_token", [token,username, isAdmin],  {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: one_day
        }).json([token,username,user_id,isAdmin]);
        });
      }
  });
  } else {//What to do if invalid register form
    res.status(403).send("Improper Form");
  }

});

module.exports = router;