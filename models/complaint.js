const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ComplaintSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    dean_id:{
        type: String,
        required: true
    },
    worker_id:{
        type: String,
        required: true
    },
    deanMsg:{
        type: String
    },
    workerMsg:{
        type: String
    },
    userMsg:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    },
    registeredDate:{
        type: String,
        required: true
    },
    completedDate:{
        type: String
    }
});

const Complaint = module.exports = mongoose.model('Complaint', ComplaintSchema);

// functions
// *********

// get by ID
module.exports.getComplaintByID = function(id,callback){
    Complaint.findById(id, callback);
}

// get by category
module.exports.getComplaintByCategory = function(category,callback){
    const query = {category: category};
    Complaint.find(query, callback);
}

// get by user_id
module.exports.getComplaintByUser_id = function(user_id,callback){
    const query = {user_id: user_id};
    Complaint.find(query, callback);
}

// get by dean_id
module.exports.getComplaintByDean_id = function(dean_id,callback){
    const query = {dean_id: dean_id};
    Complaint.find(query, callback);
}

// get by worker_id
module.exports.getComplaintByWorker_id = function(worker_id,callback){
    const query = {worker_id: worker_id};
    Complaint.find(query, callback);
}

// get by status
module.exports.getComplaintByStatus = function(status,callback){
    const query = {status: status};
    Complaint.find(query, callback);
}
