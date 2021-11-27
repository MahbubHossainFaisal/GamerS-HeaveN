import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";
import User from '../models/userModel.js';


const protect = asyncHandler(async(req,res,next) =>{
   let token;
   // console.log(req.headers.authorization)
   
    //console.log(token)
   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       
        try{
            
           token = req.headers.authorization.split(' ')[1]  
           // to get the token without Bearer name in the 1st index of the array
        
           const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
            
           req.user = await User.findById(decode.id).select('-password') 
           //find user by id , while returning don't return the password
        next();

        } catch(err){
             
           console.log(err)
           res.status(401)
           throw new Error('Not authorized, token failed!')
        }
   }
   if(!token){
       res.status(401)
       throw new Error('Not authorized, no token!')
   }
   
})

export { protect };
