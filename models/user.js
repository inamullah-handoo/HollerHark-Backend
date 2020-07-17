const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
	rToken: {
		type: String,
		required: true,
		default: false,
	},
	eToken: {
		type: String,
		required: true,
	},
	pToken: {
		type: String,
		required: true,
	},
	eActive: {
		type: Boolean,
		default: false,
		required: true,
	},
	pActive: {
		type: Boolean,
		default: false,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},
	phoneno: {
		type: Number,
		unique: true,
		required: true,
	},
	rollno: {
		unique: true,
		type: String,
	},
	school: {
		type: String,
	},
	dept: {
		type: String,
	},
	batch: {
		type: Number,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	categories: {
		type: Array,
	},
});

const User = (module.exports = mongoose.model('User', UserSchema));

// functions
// *********

// get by ID
module.exports.getUserByID = function (id, callback) {
	User.findById(id, callback);
};

// get by rToken
module.exports.getUserByrToken = function (rToken, callback) {
	const query = { rToken: rToken };
	User.findOne(query, callback);
};

// get by eToken
module.exports.getUserByeToken = function (eToken, callback) {
	const query = { eToken: eToken };
	User.findOne(query, callback);
};

// get by pToken
module.exports.getUserBypToken = function (pToken, callback) {
	const query = { pToken: pToken };
	User.findOne(query, callback);
};

// get by email
module.exports.getUserByEmail = function (email, callback) {
	const query = { email: email };
	User.findOne(query, callback);
};

// get by phone no
module.exports.getUserByPhoneno = function (phoneno, callback) {
	const query = { phoneno: phoneno };
	User.findOne(query, callback);
};

// get by roll no
module.exports.getUserByRollno = function (rollno, callback) {
	const query = { rollno: rollno };
	User.findOne(query, callback);
};

// get by role
module.exports.getUserByRole = function (role, callback) {
	const query = { role: role };
	User.find(query, callback);
};

// get workers
module.exports.getWorkers = function (callback) {
	const query = { $or: [{ role: 'Teaching' }, { role: 'Non-Teaching' }] };
	User.find(query, callback);
};

// get by category
module.exports.getUserByCategory = function (category, callback) {
	const query = { categories: category };
	User.find(query, callback);
};

// add user
module.exports.addUser = function (newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
};

// change Password
module.exports.changePassword = function (query, newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			User.updateOne(query, newUser, callback);
		});
	});
};

// compare password for login
module.exports.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) throw err;
		callback(null, isMatch);
	});
};
