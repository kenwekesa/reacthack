import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

import { handleError } from "../utils/errors.js"




export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
  
      req.user = user;
      next();
    });
  };


  export const authenticateUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

export const login = async (req, res, next) =>
{
    try
    {
       const user =await User.findOne({username: req.body.username})

       if(!user){return next("User could not be found.")}

       const passwordCorrect =await bcrypt.compare(req.body.password, user.password)

       if(!passwordCorrect){return next(handleError(401, 'Wrong username or password'))}

       const token = jwt.sign({id: user._id, isAdmin: user.isAdmin},process.env.JWT)
       const {password, isAdmin, ...Otherdetails} = user._doc

       
       res.cookie("access_token", token, {httpOnly: true} ).
       status(200).json({details:{...Otherdetails}, isAdmin})
    }
    catch(err)
    {
        next(err)
    }
}

export const register = async (req, res, next) =>
{
    try
    {
        
        const salt = bcrypt.genSaltSync(10)
        const hashed_pass = bcrypt.hashSync(req.body.password, salt)
       const newUser = new User(
        {...req.body,
         
         password: hashed_pass
        }
       )

       await newUser.save()
       res.status(201).send("New user created successfully")
    }
    catch(err)
    {
        next(err)
    }
}