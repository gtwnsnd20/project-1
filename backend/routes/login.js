const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.post('/', (req,res) => {
  userObj = req.body;
  console.log(JSON.stringify(userObj));
  let user_name = userObj.username;
  let pass = userObj.password;
  console.log(user_name)
  pool.query('SELECT username,hashed_password FROM users WHERE username=$1',[user_name],(error,results)=>{//Query server for user
      if(error){//If uname not found, return error
          console.log(`Login Query error: ${error}`);
          res.status(403).json(error);
      } else {
          let data = results.rows[0];
          console.log(data)
          console.log("pass:" +pass + " password:" + data.hashed_password)
          if(pass == data.hashed_password){//If password is correct
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