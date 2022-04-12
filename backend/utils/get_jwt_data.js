function checkToken (authcookie){
    console.log(authcookie)
    jwt.verify(authcookie,config.TOKEN_SECRET,(error,data)=>{//Verify and decrypt the jwt token held within the cookie
        if(error){
            console.log("Error processing Cookie"+ error);
            res.sendStatus(403).json(error);
        } 
        return({data});
    })
}