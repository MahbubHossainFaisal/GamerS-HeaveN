import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';
//@description : auth user and get the token
//@route: GET /api/users/login
//@acess: Public route

const authUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body;
    
    //authenticate user
    const user = await User.findOne({email})

    if(user && (await user.matchPasswords(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(401) //unAuthorized
        throw new Error('Invalid user or password')
    }
})

export { authUser };
