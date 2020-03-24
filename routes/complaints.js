const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Complaint = require('../models/complaint');

// complaint registration
router.post('/register', passport.authenticate('jwt', { session: false }), (req,res) => {
    if(req.user.role != "Admin"){
        let newComplaint = new Complaint({
            title: req.body.title,
            category: req.body.category,
            user_id: req.user._id,
            dean_id: req.body.dean_id,
            worker_id: "Not Forwarded Yet",
            deanMsg: null,
            workerMsg: null,
            userMsg: null,
            status: "Not Processed Yet",
            msg: req.body.msg,
            registeredDate: req.body.registeredDate,
            completedDate: "Not Completed Yet"
        });

        // save complaint in db
        newComplaint.save(newComplaint, (err, complaint) => {
            if(err){
                res.json({success: false, msg: 'Failed to register your complaint'});
            }else{
                res.json({success: true, msg: 'Complaint successfully registered'});
            }
        });
    }else{
        res.json({success: false, unauth: true, msg: 'Only users can register a complaint'});
    }
});

// view complaint list (by)
router.get('/byViewList/:status', passport.authenticate('jwt', { session: false }), (req,res) => {
    if(req.user.role == 'Admin'){
        res.json({success: false, unauth: true, msg: 'You are not authorized'})
    }else{
        Complaint.getComplaintByUser_id(req.user._id, (err, complaints) => {
            if(err){
                req.json({success: false, msg: 'Something went wrong'});
            }else{
                if(!complaints[0]){
                    res.json({success: false, msg: 'No complaints found'});
                }else{
                    let comp = [];
                    for(i=0, j=0; i<complaints.length; i++){
                        if(complaints[i].status == req.params.status){
                            comp[j] = {title: complaints[i].title, id: complaints[i]._id};
                            j++;
                        }
                    }
                    if(!comp[0]){
                      res.json({success: false, msg: 'No complaints found'});
                    }else{
                      res.json({success: true, complaints: comp});
                    }
                }
            }
        });
    }
});

// view complaint list (under)
router.get('/underViewList/:status', passport.authenticate('jwt', { session: false }), (req,res) => {
    if(req.user.role == 'Admin' || req.user.role == 'Student'){
        res.json({success: false, unauth: true, msg: 'You are not authorized'})
    }else{
        if(req.user.role == 'Dean'){
            Complaint.getComplaintByDean_id(req.user._id, (err, complaints) => {
                if(err){
                    req.json({success: false, msg: 'Something went wrong'});
                }else{
                    if(!complaints[0]){
                        res.json({success: false, msg: 'No complaints found'});
                    }else{
                        let comp = [];
                        for(i=0, j=0; i<complaints.length; i++){
                            if(complaints[i].status == req.params.status){
                                comp[j] = {title: complaints[i].title, id: complaints[i]._id};
                                j++;
                            }
                        }
                        if(!comp[0]){
                          res.json({success: false, msg: 'No complaints found'});
                        }else{
                          res.json({success: true, complaints: comp});
                        }
                    }
                }
            });
        }else if(req.user.role == 'Teaching' || req.user.role == 'Non-Teaching'){
            Complaint.getComplaintByWorker_id(req.user._id, (err, complaints) => {
                if(err){
                    req.json({success: false, msg: 'Something went wrong'});
                }else{
                    if(!complaints[0]){
                        res.json({success: false, msg: 'No complaints found'});
                    }else{
                        let comp = [];
                        for(i=0, j=0; i<complaints.length; i++){
                            if(complaints[i].status == req.params.status){
                                comp[j] = {title: complaints[i].title, id: complaints[i]._id};
                                j++;
                            }
                        }
                        if(!comp[0]){
                          res.json({success: false, msg: 'No complaints found'});
                        }else{
                          res.json({success: true, complaints: comp});
                        }
                    }
                }
            });
        }
    }
});

// view complaint
router.get('/view/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err, complaint) => {
        if(err){
            res.json({success: false, msg: 'Something went wrong'});
        }else{
            if(!complaint){
                res.json({success: false, msg: 'Complaint not found'});
            }else{
                if(req.user._id == complaint.user_id){
                    res.json({success: true, complaint : {
                        title: complaint.title,
                        category: complaint.category,
                        status: complaint.status,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: complaint.worker_id,
                        userMsg: complaint.userMsg,
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    }});
                }else if(req.user._id == complaint.dean_id){
                    res.json({success: true, complaint : {
                        title: complaint.title,
                        category: complaint.category,
                        status: complaint.status,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: complaint.worker_id,
                        deanMsg: complaint.deanMsg,
                        workerMsg: complaint.workerMsg,
                        userMsg: complaint.userMsg,
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    }});
                }else if(req.user._id == complaint.worker_id){
                    res.json({success: true, complaint : {
                        title: complaint.title,
                        category: complaint.category,
                        status: complaint.status,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: complaint.worker_id,
                        deanMsg: complaint.deanMsg,
                        workerMsg: complaint.workerMsg,
                        userMsg: complaint.userMsg,
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    }});
                }else{
                    res.json({success: false, unauth:true, msg: 'You are not authorised'});
                }
            }
        }
    });
});

// edit complaint
router.post('/edit/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    let query = {_id: req.params.id};

    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err, complaint) => {
        if(err){
            res.json({success: false, msg: 'Something went wrong'});
        }else{
            if(!complaint){
                res.json({success: false, msg: 'Complaint not found'});
            }else{
                if(req.user._id == complaint.user_id && complaint.status == 'Not Processed Yet'){
                    let editComplaint = {
                        title: req.body.title,
                        category: req.body.category,
                        user_id: req.user._id,
                        dean_id: req.body.dean_id,
                        worker_id: complaint.worker_id,
                        deanMsg: complaint.deanMsg,
                        workerMsg: complaint.workerMsg,
                        userMsg: complaint.userMsg,
                        status: complaint.status,
                        msg: req.body.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    };
                    // update complaint in db
                    Complaint.updateOne(query, editComplaint, (err) => {
                        if(err){
                            res.json({success: false, msg: 'Failed to update your complaint'});
                        }else{
                            res.json({success: true, msg: 'Complaint successfully updated'});
                        }
                    });
                }else{
                    if(req.user._id != complaint.user_id){
                        res.json({success: false, msg: 'You are not authorized to make changes to this complaint'});
                    }else if(complaint.status != 'Not Processed Yet'){
                        res.json({success: false, msg: 'You can\'t make changes to this complaint'});
                    }
                }
            }
        }
    });
});

// delete complaint
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    let query = {_id: req.params.id};

    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err, complaint) => {
        if(err){
            res.json({success: false, msg: 'Failed to delete your complaint'});
        }else{
            if(!complaint){
                res.json({success: false, msg: 'Complaint not found'});
            }else{
                if(req.user._id == complaint.user_id){
                    // remove from db
                    Complaint.deleteOne(query, (err) => {
                        if(err){
                            res.json({success: false, msg: 'Failed to delete your complaint'});
                        }else{
                            res.json({success: true, msg: 'Complaint successfully deleted'});
                        }
                    });
                }else{
                    res.json({success: false, msg: 'You are not authorized to delete this complaint'});
                }
            }
        }
    });
});

// forward complaint to worker by dean
router.post('/forward/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    let query = {_id: req.params.id};

    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err, complaint) => {
        if(err){
            res.json({success: false, msg: 'Something went wrong'});
        }else{
            if(!complaint){
                res.json({success: false, msg: 'Complaint not found'});
            }else{
                if(req.user._id == complaint.dean_id){
                    let forwardComplaint = {
                        title: complaint.title,
                        category: complaint.category,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: req.body.worker_id,
                        deanMsg: req.body.deanMsg,
                        workerMsg: complaint.workerMsg,
                        userMsg: complaint.userMsg,
                        status: "In Progress",
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    };
                    // update worker id and dean msg to complaint in db
                    Complaint.updateOne(query, forwardComplaint, (err) => {
                        if(err){
                            res.json({success: false, msg: 'Failed to forward the complaint'});
                        }else{
                            res.json({success: true, msg: 'Complaint successfully forwarded'});
                        }
                    });
                }else{
                    res.json({success: false, msg: 'You are not authorized to forward this complaint'});
                }
            }
        }
    });
});

// response of complaint by worker to dean
router.post('/response/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    let query = {_id: req.params.id};

    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err, complaint) => {
        if(err){
            res.json({success: false, msg: 'Something went wrong'});
        }else{
            if(!complaint){
                res.json({success: false, msg: 'Complaint not found'});
            }else{
                if(req.user._id == complaint.worker_id){
                    let responseComplaint = {
                        title: complaint.title,
                        category: complaint.category,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: complaint.worker_id,
                        deanMsg: complaint.deanMsg,
                        workerMsg: req.body.workerMsg,
                        userMsg: complaint.userMsg,
                        status: complaint.status,
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    };
                    // update worker msg to complaint in db
                    Complaint.updateOne(query, responseComplaint, (err) => {
                        if(err){
                            res.json({success: false, msg: 'Failed to respond back'});
                        }else{
                            res.json({success: true, msg: 'Response successfully given'});
                        }
                    });
                }else{
                    res.json({success: false, msg: 'You are not authorized to respond to this complaint'});
                }
            }
        }
    });
});

// change status of complaint (only dean)
router.post('/changeStatus/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err, complaint) => {
        if(err){
            res.json({success: false, msg: 'Something went wrong'});
        }else{
            if(!complaint){
                res.json({success: false, msg: 'Complaint not found'});
            }else{
                if(req.user._id == complaint.dean_id){
                    var completedDate;
                    if(req.body.newStatus == 'Completed'){
                        completedDate = Date();
                    }else{
                        completedDate = 'Not Completed Yet';
                    }
                    let changeStatusComplaint = {
                        title: complaint.title,
                        category: complaint.category,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: complaint.worker_id,
                        deanMsg: complaint.deanMsg,
                        workerMsg: complaint.workerMsg,
                        userMsg: complaint.userMsg,
                        status: req.body.newStatus,
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: completedDate
                    };

                    let query = {_id: req.params.id}

                    // update complaint status to complaint in db
                    Complaint.updateOne(query, changeStatusComplaint, (err) => {
                        if(err){
                            res.json({success: false, msg: 'Failed to change the status'});
                        }else{
                            res.json({success: true, msg: 'Complaint status successfully changed'});
                        }
                    });
                }else{
                    res.json({success: false, msg: 'You are not authorized to change status of this complaint'});
                }
            }
        }
    });
});

// user's feedback after their complaint is completed
router.post('/feedback/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
    // find complaint in db
    Complaint.getComplaintByID(req.params.id, (err,complaint) => {
        if(err){
            res.json({success: false, msg:'Something went wrong'});
        }else{
            if(req.user._id == complaint.user_id){
                if(complaint.completedDate != 'Not Completed Yet'){
                    let feedbackComplaint = {
                        title: complaint.title,
                        category: complaint.category,
                        user_id: complaint.user_id,
                        dean_id: complaint.dean_id,
                        worker_id: complaint.worker_id,
                        deanMsg: complaint.deanMsg,
                        workerMsg: complaint.workerMsg,
                        userMsg: req.body.userMsg,
                        status: complaint.status,
                        msg: complaint.msg,
                        registeredDate: complaint.registeredDate,
                        completedDate: complaint.completedDate
                    };

                    let query = {_id: req.params.id};

                    // update userMsg to complaint in db
                    Complaint.updateOne(query, feedbackComplaint, (err) => {
                        if(err){
                            res.json({success: false, msg: 'Failed to send feedback'});
                        }else{
                            res.json({success: true, msg: 'Feedback successfully send'});
                        }
                    });
                }else{
                    res.json({success: false, msg: 'Feedback can be send only when it is completed'});
                }
            }else{
                res.json({success: false, msg: 'You are not authorised'});
            }
        }
    });
});


module.exports = router;
