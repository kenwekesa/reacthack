import User from "../models/User.js";

import bcrypt from 'bcryptjs'



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
export const createUser = async(req, res) => {
    try {
        const new_User = new User(req.body)

        const saved_User = await new_User.save()
        res.status(200).json("User successfully signed up!")
    } catch (error) {

        res.status(500).json(error)

    }
}

export const viewUser = async(req, res) => {

    try {

        const User = await User.findById(req.params.id)
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json(error)

    }

}

export const viewUsers = async(req, res) => {

    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)

    }
}

export const updateUser = async(req, res) => {


    try {
        const updated_User = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json("User updated successfully")
    } catch (error) {

        res.status(500).json(error)

    }
}

export const deleteUser = async(req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User is deleted")
    } catch (error) {

    }
}


export const getUserByTrain = async(req, res) => {



    try {

        const User = await User.findOne({$and: [{trainId: req.params.trainId},{date: req.params.travel_date}]});
        res.status(200).json(User)

    } catch (error) {

        console.log(error);
        res.status(500).json(error)

    }


}

export const getUserByDate = async(req, res) => {



    try {

        const User = await User.find({date: req.params.travel_date});
        res.status(200).json(User)

    } catch (error) {

        console.log(error);
        res.status(500).json(error)

    }


}