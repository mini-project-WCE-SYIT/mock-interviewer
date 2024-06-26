const mongoose =require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const crypto = require('crypto');

const userSchema =new mongoose.Schema({
    googleId:{
        type:String
    },
    displayName:{
        type:String
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate:[validator.isEmail,'Please enter valid email address'] 
    },
    // password:{
    //     type:String,
    //     required:[true,'Please enter your password'],
    //     minlength:[6,'Your password must be longer than 6 characters'],
    // }
},{timestamps:true})

// //Encrypting password before saving user
// userSchema.pre('save',async function(next){
//     if(!this.isModified('password')){
//         next();
//     }
//     this.password=await bcrypt.hash(this.password,10);
// })

// //Compare user password
// userSchema.methods.comparePassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password);
// }

// //Return JWT token
// userSchema.methods.getJwtToken = function(){
//     return jwt.sign({id:this._id},process.env.JWT_SECRET,{
//         expiresIn:process.env.JWT_EXPIRES_TIME
//     });
// } 

module.exports = mongoose.model('User',userSchema);