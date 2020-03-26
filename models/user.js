const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneno:{
        type: Number,
        required: true
    },
    rollno:{
        type: String
    },
    school:{
        type: String
    },
    dept:{
        type: String
    },
    batch:{
        type: Number
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

// functions
// *********

// get by ID
module.exports.getUserByID = function(id,callback){
    User.findById(id, callback);
}

// get by email
module.exports.getUserByEmail = function(email,callback){
    const query = {email: email};
    User.findOne(query, callback);
}

// get by phone no
module.exports.getUserByPhoneno = function(phoneno,callback){
    const query = {phoneno: phoneno};
    User.findOne(query, callback);
}

// get by roll no
module.exports.getUserByRollno = function(rollno,callback){
    const query = {rollno: rollno};
    User.findOne(query, callback);
}

// get by role
module.exports.getUserByRole = function(role,callback){
    const query = {role: role};
    User.find(query, callback);
}

// add user
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// change Password
module.exports.changePassword = function(query, newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            User.updateOne(query, newUser, callback);
        });
    });
}

// compare password for login
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err,isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}