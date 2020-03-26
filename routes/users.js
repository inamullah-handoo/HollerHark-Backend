const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const { body, validationResult } = require('express-validator');

const User = require('../models/user');
const Complaint = require('../models/complaint');

// student registration
router.post('/student/register', [
    body(['name', 'email', 'phoneno', 'rollno', 'school', 'dept', 'batch', 'password']).notEmpty(),
    body(['email']).isEmail()
], (req,res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phoneno: req.body.phoneno,
        rollno: req.body.rollno,
        school: req.body.school,
        dept: req.body.dept,
        batch: req.body.batch,
        password: req.body.password,
        role: "Student"
    });

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.json({success: false, msg: 'Fill all the fields'});
    }else{
        User.getUserByEmail(newUser.email, (err, user) => {
            if(err) throw err;
            if(user){
                res.json({success: false, msg: 'A User has already registered with same email'});
            }else{
                User.getUserByPhoneno(newUser.phoneno, (err, user) => {
                    if(err) throw err;
                    if(user){
                        res.json({success: false, msg: 'A User has already registered with same phone number'});
                    }else{
                        User.getUserByRollno(newUser.rollno, (err, user) => {
                            if(err) throw err;
                            if(user){
                                res.json({success: false, msg: 'A User has already registered with same roll number'});
                            }else{
                                User.addUser(newUser, (err, user) => {
                                    if(err){
                                        res.json({success: false, msg: 'Failed to register'});
                                    }else{
                                        res.json({success: true, msg: 'User registered'});
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

// faculty (teaching and non-teaching) register
router.post('/faculty/register', [
    body(['name', 'email', 'phoneno', 'password', 'role']).notEmpty(),
    body(['email']).isEmail()
], (req,res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phoneno: req.body.phoneno,
        rollno: null,
        school: req.body.school,
        batch: null,
        dept: req.body.dept,
        password: req.body.password,
        role: req.body.role
    });

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.json({success: false, msg: 'Fill all the fields'});
    }else{
        User.getUserByEmail(newUser.email, (err, user) => {
            if(err) throw err;
            if(user){
                res.json({success: false, msg: 'A User has already registered with same email'});
            }else{
                User.getUserByPhoneno(newUser.phoneno, (err, user) => {
                    if(err) throw err;
                    if(user){
                        res.json({success: false, msg: 'A User has already registered with same phone number'});
                    }else{
                        User.addUser(newUser, (err, user) => {
                            if(err){
                                res.json({success: false, msg: 'Failed to register'});
                            }else{
                                res.json({success: true, msg: 'User registered'});
                            }
                        });
                    }
                });
            }
        });
    }
});

// dean register by admin only
router.post('/dean/register', passport.authenticate('jwt', { session: false }), [
    body(['name', 'email', 'phoneno', 'school', 'password']).notEmpty(),
    body(['email']).isEmail()
], (req,res) => {
    if(req.user.role == 'Admin'){
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phoneno: req.body.phoneno,
            dept: null,
            rollno: null,
            school: req.body.school,
            batch: null,
            password: req.body.password,
            role: "Dean"
        });

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.json({success: false, msg: 'Fill all the fields'});
        }else{
            User.getUserByEmail(newUser.email, (err, user) => {
                if(err) throw err;
                if(user){
                    res.json({success: false, msg: 'A User has already registered with same email'});
                }else{
                    User.getUserByPhoneno(newUser.phoneno, (err, user) => {
                        if(err) throw err;
                        if(user){
                            res.json({success: false, msg: 'A User has already registered with same phone number'});
                        }else{
                            User.addUser(newUser, (err, user) => {
                                if(err){
                                    res.json({success: false, msg: 'Failed to register'});
                                }else{
                                    res.json({success: true, msg: 'User registered'});
                                }
                            });
                        }
                    });
                }
            });
        }
    }else{
        res.json({success: false, msg: 'You are not authorized'});
    }
});

// authentication/login
router.post('/authenticate', [
    body(['email', 'password']).notEmpty(),
    body(['email']).isEmail()
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({success: false, msg: 'Fill in all the fields properly'});
    }else{
        const email = req.body.email;
        const password = req.body.password;
    
        User.getUserByEmail(email, (err, user) => {
            if(err) throw err;
            if(!user){
                return res.json({success: false, msg: 'User not found'});
            }else{
                User.comparePassword(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch){
                        const token = jwt.sign({ user }, config.secret, {
                            expiresIn: 86400 // 24 hrs
                        });
    
                        res.json({success: true, token: 'bearer '+token, user: {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            phoneno: user.phoneno,
                            rollno: user.rollno,
                            school: user.school,
                            dept: user.dept,
                            batch: user.batch,
                            role: user.role
                        }, msg:'You are successfully logged in'})
                    }else{
                        res.json({success: false, msg: 'Wrong password'});
                    }
                });
            }
        });
    }
});

// logged in user id
router.get('/id', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.json({id: req.user._id});
});

// user name
router.get('/name/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    User.getUserByID(req.params.id, (err,user) => {
        if(err) throw err;
        if(!user){
            res.json({success: false, msg: 'User not found'});
        }else{
            res.json({success: true, name: user.name});
        }
    });
});

// logged in user role
router.get('/role', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.json({role: req.user.role});
});

// profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.json(user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        phoneno: req.user.phoneno,
        rollno: req.user.rollno,
        school: req.user.school,
        dept: req.user.dept,
        batch: req.user.batch
    });
});

// modify profile
router.post('/profile/:id', passport.authenticate('jwt', { session: false }), [
    body(['name', 'email', 'phoneno']).notEmpty(),
    body(['email']).isEmail()
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({success: false, msg: 'Fill in all the fields properly'});
    }else{
        User.getUserByID(req.params.id, (err, user) => {
            if(err) throw err;
            if(user){
                if(req.params.id == user._id){
                    let modifyProfile = {};
                    if(req.user.role == 'Student'){
                        modifyProfile = {
                            name: req.body.name,
                            email: req.body.email,
                            phoneno: req.body.phoneno,
                            dept: req.body.dept,
                            rollno: user.rollno,
                            school: req.body.school,
                            batch: req.body.batch,
                            password: user.password,
                            role: user.role
                        }
                    }else if(req.user.role == 'Dean'){
                        modifyProfile = {
                            name: req.body.name,
                            email: req.body.email,
                            phoneno: req.body.phoneno,
                            dept: null,
                            rollno: null,
                            school: req.body.school,
                            batch: null,
                            password: user.password,
                            role: user.role
                        }
                    }else if(req.user.role == 'Teaching' || req.user.role == 'Non-Teaching'){
                        modifyProfile = {
                            name: req.body.name,
                            email: req.body.email,
                            phoneno: req.body.phoneno,
                            dept: req.body.dept,
                            rollno: null,
                            school: req.body.school,
                            batch: null,
                            password: user.password,
                            role: user.role
                        }
                    }else if(req.user.role == 'Admin'){
                        modifyProfile = {
                            name: req.body.name,
                            email: req.body.email,
                            phoneno: req.body.phoneno,
                            dept: null,
                            rollno: null,
                            school: null,
                            batch: null,
                            password: user.password,
                            role: user.role
                        }
                    }
    
                    let query = {_id: req.params.id};
    
                    User.getUserByEmail(modifyProfile.email, (err, user) => {
                        if(err) throw err;
                        if(user){
                            if(req.user.email == modifyProfile.email){
                                User.getUserByPhoneno(modifyProfile.phoneno, (err, user) => {
                                    if(err) throw err;
                                    if(user){
                                        if(req.user.phoneno == modifyProfile.phoneno){
                                            // update profile on db
                                            User.updateOne(query, modifyProfile, (err) => {
                                                if(err){
                                                    res.json({success: false, msg: 'Unable to make changes to you profile'});
                                                }else{
                                                    res.json({success: true, msg: 'Changes succesfully made to your profile'});
                                                }
                                            });
                                        }else{
                                            res.json({success: false, msg: 'A User has already registered with same phone number'});
                                        }
                                    }else{
                                        // update profile on db
                                        User.updateOne(query, modifyProfile, (err) => {
                                            if(err){
                                                res.json({success: false, msg: 'Unable to make changes to you profile'});
                                            }else{
                                                res.json({success: true, msg: 'Changes succesfully made to your profile'});
                                            }
                                        });
                                    }
                                });
                            }else{
                                res.json({success: false, msg: 'A User has already registered with same email'});
                            }
                        }else{
                            User.getUserByPhoneno(modifyProfile.phoneno, (err, user) => {
                                if(err) throw err;
                                if(user){
                                    if(req.user.phoneno == modifyProfile.phoneno){
                                        // update profile on db
                                        User.updateOne(query, modifyProfile, (err) => {
                                            if(err){
                                                res.json({success: false, msg: 'Unable to make changes to you profile'});
                                            }else{
                                                res.json({success: true, msg: 'Changes succesfully made to your profile'});
                                            }
                                        });
                                    }else{
                                        res.json({success: false, msg: 'A User has already registered with same phone number'});
                                    }
                                }else{
                                    // update profile on db
                                    User.updateOne(query, modifyProfile, (err) => {
                                        if(err){
                                            res.json({success: false, msg: 'Unable to make changes to you profile'});
                                        }else{
                                            res.json({success: true, msg: 'Changes succesfully made to your profile'});
                                        }
                                    });
                                }
                            });
                        }
                    });
    
                }else{
                    res.json({success: false, msg: 'You are not authorised'});
                }
            }else{
                res.json({success: false, msg: 'User not found'});
            }
        });
    }
});

// change password
router.post('/changePassword/:id', passport.authenticate('jwt', { session: false }), [
    body(['oldPassword', 'newPassword']).notEmpty()
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({success: false, msg: 'Fill in all the fields properly'});
    }else{
        User.getUserByID(req.params.id, (err, user) => {
            if(err) throw err;
            if(req.params.id == user._id){
                if(!user){
                    return res.json({success: false, msg: 'User not found'});
                }else{
                    const oldPassword = req.body.oldPassword;
                    const newPassword = req.body.newPassword;
    
                    // check password
                    User.comparePassword(oldPassword, user.password, (err, isMatch) => {
                        if(err) throw err;
                        if(isMatch){
                            let modifyProfile = {
                                name: user.name,
                                email: user.email,
                                phoneno: user.phoneno,
                                dept: user.dept,
                                rollno: user.rollno,
                                school: user.school,
                                batch: user.batch,
                                password: newPassword,
                                role: user.role
                            }
    
                            let query = {_id: req.params.id};
    
                            // update profile on db
                            User.changePassword(query, modifyProfile, (err) => {
                                if(err){
                                    res.json({success: false, msg: 'Unable to change your password'});
                                }else{
                                    res.json({success: true, msg: 'Password successfully changed'});
                                }
                            });
                        }else{
                            res.json({success: false, msg: 'Wrong password'});
                        }
                    });
                }
            }else{
                res.json({success: false, msg: 'You are not authorised to make changes'});
            }
        });
    }
});

// dashboard (by)
router.get('/byDashboard', passport.authenticate('jwt', { session: false }), (req,res) => {
    if(req.user.role == 'Admin'){
        res.json({success: false, unauth: true, msg: 'You are not authorized'});
    }else{
        Complaint.getComplaintByUser_id(req.user._id, (err, complaints) => {
            if(err){
                res.json({success: false, msg: 'Something went wrong!'});
            }else{
                if(!complaints[0]){
                res.json({success: false, msg: 'No complaints registered by you'});
                }else{
                    let npy = 0, ip = 0, c = 0;
                    for(i=0; i<complaints.length; i++){
                        if(complaints[i].status == 'Not Processed Yet'){
                            npy++;
                        }else if(complaints[i].status == 'In Progress'){
                            ip++;
                        }else if(complaints[i].status == 'Completed'){
                            c++;
                        }
                    }
                    res.json({success: true, npy, ip, c});
                }
            }
        });
    }
});

// dashboard (under)
router.get('/underDashboard', passport.authenticate('jwt', { session: false }), (req,res) => {
    if(req.user.role == 'Student' || req.user.role == 'Admin'){
        res.json({success: false, unauth: true, msg: 'You are not authorized'});
    }else{
        if(req.user.role == 'Dean'){
            Complaint.getComplaintByDean_id(req.user._id, (err, complaints) => {
                if(err){
                    res.json({success: false, msg: 'Something went wrong!'});
                }else{
                    if(!complaints[0]){
                    res.json({success: false, msg: 'No complaints registered under you'});
                    }else{
                        let npy = 0, ip = 0, c = 0;
                        for(i=0; i<complaints.length; i++){
                            if(complaints[i].status == 'Not Processed Yet'){
                                npy++;
                            }else if(complaints[i].status == 'In Progress'){
                                ip++;
                            }else if(complaints[i].status == 'Completed'){
                                c++;
                            }
                        }
                        res.json({success: true, npy, ip, c});
                    }
                }
            });
        }else if(req.user.role == 'Teaching' || req.user.role == 'Non-Teaching'){
            Complaint.getComplaintByWorker_id(req.user._id, (err, complaints) => {
                if(err){
                    res.json({success: false, msg: 'Something went wrong!'});
                }else{
                    if(!complaints[0]){
                    res.json({success: false, msg: 'No complaints registered under you'});
                    }else{
                        let npy = 0, ip = 0, c = 0;
                        for(i=0; i<complaints.length; i++){
                            if(complaints[i].status == 'Not Processed Yet'){
                                npy++;
                            }else if(complaints[i].status == 'In Progress'){
                                ip++;
                            }else if(complaints[i].status == 'Completed'){
                                c++;
                            }
                        }
                        res.json({success: true, npy, ip, c});
                    }
                }
            });
        }
    }
});


// dashboard
// router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req,res) => {
//     Complaint.getComplaintByUser_id(req.user._id, (err, uComplaints) => {
//         if(err) throw err;
//         if(!uComplaints[0]){
//             if(req.user.role == 'Dean'){
//                 Complaint.getComplaintByDean_id(req.user._id, (err, dComplaints) => {
//                     if(err) throw err;
//                     if(!dComplaints[0]){
//                         res.json({success: false, msg: 'No complaints at all'});
//                     }else{
//                         res.json({success: true, dComplaints, msg: 'No complaints registered by you'});
//                     }
//                 });
//             }else if(req.user.role == 'Teaching' || req.user.role == 'Non-Teaching'){
//                 Complaint.getComplaintByWorker_id(req.user._id, (err, wComplaints) => {
//                     if(err) throw err;
//                     if(!wComplaints[0]){
//                         res.json({success: false, msg: 'No complaints at all'});
//                     }else{
//                         res.json({success: true, wComplaints, msg: 'No complaints registered by you'});
//                     }
//                 });
//             }else{
//                 res.json({success: false, msg: 'No complaints registered by you'});
//             }
//         }else{
//             if(req.user.role == 'Dean'){
//                 Complaint.getComplaintByDean_id(req.user._id, (err, dComplaints) => {
//                     if(err) throw err;
//                     if(!dComplaints[0]){
//                         res.json({success: true, uComplaints, msg: 'No complaints registered under you'});
//                     }else{
//                         res.json({success: true, uComplaints, dComplaints});
//                     }
//                 });
//             }else if(req.user.role == 'Teaching' || req.user.role == 'Non-Teaching'){
//                 Complaint.getComplaintByWorker_id(req.user._id, (err, wComplaints) => {
//                     if(err) throw err;
//                     if(!wComplaints[0]){
//                         res.json({success: true, uComplaints, msg: 'No complaints forwarded to you'});
//                     }else{
//                         res.json({success: true, uComplaints, wComplaints});
//                     }
//                 });
//             }
//             else{
//                 res.json({success: true, uComplaints});
//             }
//         }
//     });
// });

module.exports = router;
