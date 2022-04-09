config = process.env;
const jwt = require('jsonwebtoken');

function checkToken (req,res, next){
    const authcookie = req.cookies.access_token//Get cookie from request
    console.log(authcookie)
    jwt.verify(authcookie,config.TOKEN_SECRET,(error,data)=>{//Verify and decrypt the jwt token held within the cookie
        if(error){
            console.log("Error processing Cookie"+ error);
            res.sendStatus(403).json(error);

        } else if(data.user){
            let lifeSpan = config.life_span;
            const now = new Date()
            let lifeLeft = data.exp - now.getTime();
            if(lifeLeft < (lifeSpan*0.75)){//Check if if token will expire in less then 3/4 of it's original time
                //Command to renew cookie.
            }
            console.log("JWT:"+JSON.stringify(data));
            return next();
        }
    })
}
module.exports = checkToken;