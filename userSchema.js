const mongoose = require('mongoose');

// Making SchemaType:

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    content:[{
        type: Object
    }],
    counter:{
        create:{
            type:Number,
            default:0
        },
        update:{
            type:Number,
            default:0
        }
    }
})


const User = mongoose.model("User", userSchema);
module.exports = User;