config = process.env;
const jwt = require('jsonwebtoken');

//Check to see if user is admin
function isAdmin(req,res, next){
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', 'true');

    res.header('Access-Control-Allow-Headers','Origin' ,'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,set-cookie');
    console.log(req.cookies);
    if (req.cookies.access_token){//Check if cookie exists
        const data = checkToken(req.cookies.access_token,res)//Check jwt token and retrieve contents
        console.log("Gonna check if admin");
        if (data && data.isAdmin){//Run next route if user is admin
            console.log("They are a admin")
            return next();
        } else {
            res.status(401).send("Must be admin");
        }
    }
    res.sendStatus(403)
}

//Check to see if user is logged in
function isUser(req ,res, next){
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', 'true');

    res.header('Access-Control-Allow-Headers','Origin' ,'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,set-cookie');
    
    console.log("<----Checking if user---->")
    //console.log(res)
    console.log(req.cookies);
    if (req.cookies.access_token){//Check if cookie exists
        const data = checkToken(req.cookies.access_token,res)//Check jwt token and retrieve contents
        console.log(data)
        console.log("Gonna check if user");
        if(data){//If jwt was valid run next route
            return next()
        }
    }
    
    res.sendStatus(403)
}
 
//Check jwt token to see if it is valid
function checkToken (authcookie,res){
    console.log("^^^^^^^^^^VERIFYING JWT TOKEN^^^^^^^^^^")
    return jwt.verify(authcookie,config.TOKEN_SECRET,(error,data)=>{//Verify and decrypt the jwt token held within the cookie
        if(error){//If jwt token cannot be verified
            console.log("Error processing Cookie"+ error);
            res.sendStatus(403).send("Invalid user");
        } else if(data.user){//run after jwt token is decrypted and verified
            let lifeSpan = config.life_span;
            const now = new Date()
            let lifeLeft = data.exp - now.getTime();
            if(lifeLeft < (lifeSpan*0.75)){//Check if if token will expire in less then 3/4 of it's original time
                //Command to renew cookie.
            }
            console.log("JWT:"+JSON.stringify(data));
            return data;
        }
        return null;
    });
}
module.exports = {isAdmin,isUser};