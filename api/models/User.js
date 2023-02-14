import mongoose from "mongoose";

const { Schema } = mongoose

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    skills: []
 ,
    city :
    {
       type: String,
    
    }
    ,
    address : {
        type: String,

    }
    
});
export default mongoose.model("User", UserSchema)