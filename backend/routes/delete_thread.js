const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.delete('/',(req,res) =>{
    let threadId = req.body.threadId;
    pool.query('DELETE FROM thread WHERE thread_id = $1',[threadId],(error,result)=>{
        if(error){
            console.log(error)
            res.status(403).json(error);
        } else {
            res.status(200).send('Successfuly delete thread')
        }
    });
});
module.exports = router;