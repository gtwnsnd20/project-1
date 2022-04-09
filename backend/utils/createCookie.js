const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
dotenv.config();
function createCookie(userName){
    const token = jwt.sign({username:userName},process.env.TOKEN_SECRET,{expiresIn: '24h'});
    return (createCookie("access_token", token,{
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))

}