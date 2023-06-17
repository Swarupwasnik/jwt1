const jwt=require('jsonwebtoken');
const SECERT_KEY = process.env.SECERT_KEY;


const auth=(req,res,next)=>{
    try{
        let token=req.header.authorization;
if(token){
token=token.spilt(" ")[i];
let user=jwt.verify(token,SECERT_KEY);
req.userId=user.id;

} else{
   return res.status(404).json({message:"Unauthorized user"});
        }
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({message:"unauthorized user"});
    }
   
}

module.exports=auth;