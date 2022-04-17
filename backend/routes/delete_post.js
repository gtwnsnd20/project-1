const express = require('express');
const pool = require('../api/database');

const router = express.Router();

router.delete('/', (req,res) => {
     let postid = req.query.post_id;
     console.log("Attempting to delete post with ID:"+postid)
    pool.query('DELETE FROM post WHERE post_id=$1', [postid], (error,results) => {
        if(error){
            console.log(`Error deleting post id:${postid}: ${error}`)
            res.status(409).json(error);//Send status code 409(conflict)
        } else {
            console.log(results)
            res.status(200).send("Success");
        }
    });
});

module.exports = router;