const jwt = require('jsonwebtoken');
config = process.env;
function get_jwt_data (cookies){
    let authcookie = cookies.access_token
    //console.log(authcookie)
    jwt.verify(authcookie,config.TOKEN_SECRET,(error,data)=>{//Verify and decrypt the jwt token held within the cookie
        if(error){
            console.log("Error processing Cookie"+ error);
        } 
    
        return(data);
    })
}
module.exports=get_jwt_data;