//Middleware that sets headers for CORS
const corsHeaders = (req,res, next) =>{
    const origin = (req.headers.Origin == 'http://localhost:3000')//Set origin of frontend
    console.log("Using Cors Headers")
    res.setHeader('Access=Control-Allow-Origin', origin);
    res.setHeader('Access=Control-Allow-Methods', "GET", "POST", "OPTIONS", "PUT", "DELETE");//Set allowed methods. Allowed OPTIONS since that is method used by pre-flight check
    res.setHeader('Access=Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access=Control-Allow-Credentials',true);
    next()
}
module.exports = corsHeaders;