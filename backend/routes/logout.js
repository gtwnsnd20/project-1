const express = require('express');
const router = express.Router();

router.get('/',(_req,res)=>{
    res.clearCookie('access_token'); // Delete cookie
    res.end();
})

module.exports = router;