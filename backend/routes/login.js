const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.post('/', (req,res) => {
  let userObj = req.body;
  console.log(JSON.stringify(userObj));
  let username = userObj.username;
  let password = userObj.password;
  console.log(username);
  pool.query('SELECT username,password FROM users WHERE username=$1',[username],(error,results)=>{//Query server for user
      if(error){//If uname not found, return error
          console.log(`Login Query error: ${error}`);
          res.status(403).json(error);
      } else {
          let data = results.rows[0];
          console.log(data);
          console.log("password:" + password);
          if(password == data.password){//If password is correct
              console.log("Password is correct")
              res.status(200).json();
          }   else {//Send status for password incorrect
              console.log("Password is incorrect")
              res.status(403).json();//send password incorrect
          }
      }
  })
});

module.exports = router;