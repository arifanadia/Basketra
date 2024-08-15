const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 


const UserScheme = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required : [true , "Email is Required"],
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required : [true , "Password is Required"],
        minlength: 6
    },
})

UserScheme.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('User', UserScheme);

module.exports = User;