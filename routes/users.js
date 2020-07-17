const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const { body, validationResult } = require('express-validator');

const User = require('../models/user');
const Complaint = require('../models/complaint');

const website = 'http://localhost:3000/';

// email dependency
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var options = {
	auth: {
		api_user: 'inamullah.javid.100@gmail.com',
		api_key: '327428@sendgrid',
	},
};
var client = nodemailer.createTransport(sgTransport(options));

// sms dependency
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
	apiKey: '8111d20e',
	apiSecret: 'Zvg0RlPV7hWpwJl3',
});

// student registration
router.post(
	'/student/register',
	[
		body([
			'name',
			'email',
			'phoneno',
			'rollno',
			'school',
			'dept',
			'batch',
			'password',
		]).notEmpty(),
		body(['email']).isEmail(),
	],
	(req, res) => {
		let newUser = new User({
			name: req.body.name,
			email: req.body.email,
			phoneno: req.body.phoneno,
			rollno: req.body.rollno,
			school: req.body.school,
			dept: req.body.dept,
			batch: req.body.batch,
			password: req.body.password,
			role: 'Student',
			categories: null,
		});
		newUser.eToken = newUser.pToken = jwt.sign({ newUser }, config.secret, {
			expiresIn: 1800, // 30 mins
		});

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.json({ success: false, msg: 'Fill all the fields' });
		} else {
			User.getUserByEmail(newUser.email, (err, user) => {
				if (err) throw err;
				if (user) {
					res.json({
						success: false,
						msg: 'A User has already registered with same email',
					});
				} else {
					User.getUserByPhoneno(newUser.phoneno, (err, user) => {
						if (err) throw err;
						if (user) {
							res.json({
								success: false,
								msg:
									'A User has already registered with same phone number',
							});
						} else {
							User.getUserByRollno(
								newUser.rollno,
								(err, user) => {
									if (err) throw err;
									if (user) {
										res.json({
											success: false,
											msg:
												'A User has already registered with same roll number',
										});
									} else {
										User.addUser(newUser, (err, user) => {
											if (err) {
												res.json({
													success: false,
													msg: 'Failed to register',
													err,
												});
											} else {
												// send email
												var email = {
													from:
														'inamullah.javid.100@gmail.com',
													to: newUser.email,
													subject:
														'Email verification (Holler Hark)',
													text:
														'Please visit "' +
														website +
														'users/activate/email/' +
														newUser.eToken +
														'" to verify your email account with Holler Hark',
													html:
														'Please click <a href="' +
														website +
														'users/activate/email' +
														newUser.eToken +
														'">here</a> to verify your email account with Holler Hark',
												};
												// console.log(email);

												client.sendMail(
													email,
													function (err, info) {
														if (err) {
															console.log(err);
														} else {
															// send sms
															const from =
																'Holler Hark';
															const to =
																'91' +
																newUser.phoneno;
															const text =
																'Please visit "' +
																website +
																'users/activate/phone/' +
																newUser.pToken +
																'" to verify your phone number with Holler Hark';
															// console.log(text);

															nexmo.message.sendSms(
																from,
																to,
																text,
																(
																	err,
																	responseData
																) => {
																	if (err) {
																		console.log(
																			err
																		);
																	} else {
																		if (
																			responseData
																				.messages[0][
																				'status'
																			] ===
																			'0'
																		) {
																			res.json(
																				{
																					success: true,
																					msg:
																						'An Email and SMS has been sent for email and phone num verification',
																				}
																			);
																		} else {
																			res.json(
																				{
																					success: false,
																					msg:
																						'Something went wrong',
																				}
																			);
																		}
																	}
																}
															);
														}
													}
												);
											}
										});
									}
								}
							);
						}
					});
				}
			});
		}
	}
);

// faculty (teaching and non-teaching) register
router.post(
	'/faculty/register',
	[
		body(['name', 'email', 'phoneno', 'password', 'role']).notEmpty(),
		body(['email']).isEmail(),
	],
	(req, res) => {
		let newUser = new User({
			name: req.body.name,
			email: req.body.email,
			phoneno: req.body.phoneno,
			rollno: null,
			school: req.body.school,
			batch: null,
			dept: req.body.dept,
			password: req.body.password,
			role: req.body.role,
			categories: null,
		});
		newUser.eToken = newUser.pToken = jwt.sign({ newUser }, config.secret, {
			expiresIn: 1800, // 30 mins
		});

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.json({ success: false, msg: 'Fill all the fields' });
		} else {
			User.getUserByEmail(newUser.email, (err, user) => {
				if (err) throw err;
				if (user) {
					res.json({
						success: false,
						msg: 'A User has already registered with same email',
					});
				} else {
					User.getUserByPhoneno(newUser.phoneno, (err, user) => {
						if (err) throw err;
						if (user) {
							res.json({
								success: false,
								msg:
									'A User has already registered with same phone number',
							});
						} else {
							User.addUser(newUser, (err, user) => {
								if (err) {
									res.json({
										success: false,
										msg: 'Failed to register',
									});
								} else {
									// send email
									var email = {
										from: 'inamullah.javid.100@gmail.com',
										to: newUser.email,
										subject:
											'Email verification (Holler Hark)',
										text:
											'Please visit "' +
											website +
											'users/activate/email/' +
											newUser.eToken +
											'" to verify your email account with Holler Hark',
										html:
											'Please click <a href="' +
											website +
											'users/activate/email' +
											newUser.eToken +
											'">here</a> to verify your email account with Holler Hark',
									};
									// console.log(email);

									client.sendMail(email, function (
										err,
										info
									) {
										if (err) {
											console.log(err);
										} else {
											// send sms
											const from = 'Holler Hark';
											const to = '91' + newUser.phoneno;
											const text =
												'Please visit "' +
												website +
												'users/activate/phone/' +
												newUser.pToken +
												'" to verify your phone number with Holler Hark';
											// console.log(text);

											nexmo.message.sendSms(
												from,
												to,
												text,
												(err, responseData) => {
													if (err) {
														console.log(err);
													} else {
														if (
															responseData
																.messages[0][
																'status'
															] === '0'
														) {
															res.json({
																success: true,
																msg:
																	'An Email and SMS has been sent for email and phone num verification',
															});
														} else {
															res.json({
																success: false,
																msg:
																	'Something went wrong',
															});
														}
													}
												}
											);
										}
									});
								}
							});
						}
					});
				}
			});
		}
	}
);

// activate email account
router.get('/activate/email/:token', (req, res) => {
	const token = req.params.token;
	User.getUserByeToken(token, (err, user) => {
		if (err) {
			res.json({ success: false, msg: 'Something went wrong!' });
		} else if (!user) {
			res.json({ success: false, msg: 'No user found' });
		} else {
			jwt.verify(token, config.secret, (err, decoded) => {
				if (err) {
					res.json({ success: false, msg: 'Invalid token' });
				} else {
					let activeProfile = {
						eToken: false,
						pToken: user.pToken,
						rToken: user.rToken,
						eActive: true,
						pActive: user.pActive,
						name: user.name,
						email: user.email,
						phoneno: user.phoneno,
						dept: user.dept,
						rollno: user.rollno,
						school: user.school,
						batch: user.batch,
						password: user.password,
						role: user.role,
						categories: user.categories,
					};
					User.updateOne({ eToken: token }, activeProfile, (err) => {
						if (err) {
							res.json({
								success: false,
								msg: 'Something went wrong',
							});
						} else {
							res.json({
								success: true,
								msg: 'Email Account activated',
							});
						}
					});
				}
			});
		}
	});
});

// activate phone number
router.get('/activate/phone/:token', (req, res) => {
	const token = req.params.token;
	User.getUserBypToken(token, (err, user) => {
		if (err) {
			res.json({ success: false, msg: 'Something went wrong!' });
		} else if (!user) {
			res.json({ success: false, msg: 'No user found' });
		} else {
			jwt.verify(token, config.secret, (err, decoded) => {
				if (err) {
					res.json({ success: false, msg: 'Invalid token' });
				} else {
					let activeProfile = {
						eToken: user.eToken,
						pToken: false,
						rToken: user.rToken,
						eActive: user.eActive,
						pActive: true,
						name: user.name,
						email: user.email,
						phoneno: user.phoneno,
						dept: user.dept,
						rollno: user.rollno,
						school: user.school,
						batch: user.batch,
						password: user.password,
						role: user.role,
						categories: user.categories,
					};
					User.updateOne({ pToken: token }, activeProfile, (err) => {
						if (err) {
							res.json({
								success: false,
								msg: 'Something went wrong',
							});
						} else {
							res.json({
								success: true,
								msg: 'Phone number activated',
							});
						}
					});
				}
			});
		}
	});
});

// forgot password
router.post('/forgotpassword', (req, res) => {
	const email = req.body.email;
	User.getUserByEmail(email, (err, user) => {
		if (err) {
			res.json({ success: false, msg: 'Something went wrong!' });
		} else if (!user) {
			res.json({ success: false, msg: 'No user found' });
		} else {
			let forgotUser = {
				eToken: user.eToken,
				pToken: user.pToken,
				eActive: user.eActive,
				pActive: user.pActive,
				name: user.name,
				email: user.email,
				phoneno: user.phoneno,
				dept: user.dept,
				rollno: user.rollno,
				school: user.school,
				batch: user.batch,
				password: user.password,
				role: user.role,
				categories: user.categories,
			};
			forgotUser.rToken = jwt.sign({ forgotUser }, config.secret, {
				expiresIn: 1800, // 30 mins
			});
			User.updateOne({ email: email }, forgotUser, (err, user) => {
				if (err) {
					res.json({
						success: false,
						msg: 'Something went wrong, please try again.',
					});
				} else {
					var email = {
						from: 'inamullah.javid.100@gmail.com',
						to: forgotUser.email,
						subject: 'Password Reset (Holler Hark)',
						text:
							'Please visit "' +
							website +
							'resetpassword/' +
							forgotUser.rToken +
							'" to reset your account password with Holler Hark',
						html:
							'Please click <a href="' +
							website +
							'resetpassword/' +
							forgotUser.rToken +
							'">here</a> to reset your account password with Holler Hark',
					};

					client.sendMail(email, function (err, info) {
						if (err) {
							console.log(err);
						} else {
							console.log('Message sent: ' + info);
						}
					});
					// console.log(forgotUser.token);

					res.json({
						success: true,
						msg: 'An Email has been sent with password reset link',
					});
				}
			});
		}
	});
});

// reset password
router.get('/resetpassword/:token', (req, res) => {
	User.getUserByrToken(req.params.token, (err, user) => {
		if (err) {
			res.json({ success: false, msg: 'Something went wrong!' });
		} else if (!user) {
			res.json({ success: false, msg: 'No user found' });
		} else {
			jwt.verify(req.params.token, config.secret, (err, decoded) => {
				if (err) {
					res.json({ success: false, msg: 'Invalid token' });
				} else {
					res.json({ success: true, msg: 'Enter new password' });
				}
			});
		}
	});
});

// reset password
router.post('/resetpassword/:token', (req, res) => {
	User.getUserByrToken(req.params.token, (err, user) => {
		if (err) {
			res.json({ success: false, msg: 'Something went wrong!' });
		} else if (!user) {
			res.json({ success: false, msg: 'No user found' });
		} else {
			jwt.verify(req.params.token, config.secret, (err, decoded) => {
				if (err) {
					res.json({ success: false, msg: 'Invalid token' });
				} else {
					let resetUser = {
						eToken: user.eToken,
						pToken: user.pToken,
						eActive: user.eActive,
						pActive: user.pActive,
						rToken: false,
						active: user.active,
						name: user.name,
						email: user.email,
						phoneno: user.phoneno,
						dept: user.dept,
						rollno: user.rollno,
						school: user.school,
						batch: user.batch,
						password: req.body.newPassword,
						role: user.role,
						categories: user.categories,
					};
					let query = { rToken: req.params.token };
					User.changePassword(query, resetUser, (err) => {
						if (err) {
							res.json({
								success: false,
								msg:
									'Something went wrong. Please try again later.',
							});
						} else {
							res.json({
								success: true,
								msg: 'Password reset complete.',
							});
						}
					});
				}
			});
		}
	});
});

// authentication/login
router.post(
	'/authenticate',
	[body(['email', 'password']).notEmpty(), body(['email']).isEmail()],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.json({
				success: false,
				msg: 'Fill in all the fields properly',
			});
		} else {
			const email = req.body.email;
			const password = req.body.password;

			User.getUserByEmail(email, (err, user) => {
				if (err) throw err;
				if (!user) {
					return res.json({ success: false, msg: 'User not found' });
				} else {
					User.comparePassword(
						password,
						user.password,
						(err, isMatch) => {
							if (err) throw err;
							if (isMatch) {
								// if (user.eActive && user.pActive) {
								if (true) {
									const token = jwt.sign(
										{ user },
										config.secret,
										{
											expiresIn: 86400, // 24 hrs
										}
									);
									res.json({
										success: true,
										token: 'bearer ' + token,
										user: {
											id: user._id,
											name: user.name,
											email: user.email,
											phoneno: user.phoneno,
											rollno: user.rollno,
											school: user.school,
											dept: user.dept,
											batch: user.batch,
											role: user.role,
										},
										msg: 'You are successfully logged in',
									});
								} else {
									res.json({
										success: false,
										msg: 'Email or Phone not verified!',
									});
								}
							} else {
								res.json({
									success: false,
									msg: 'Wrong password',
								});
							}
						}
					);
				}
			});
		}
	}
);

// logged in user id
router.get(
	'/id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		res.json({ id: req.user._id });
	}
);

// user name
router.get(
	'/name/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		User.getUserByID(req.params.id, (err, user) => {
			if (err) throw err;
			if (!user) {
				res.json({ success: false, msg: 'User not found' });
			} else {
				res.json({ success: true, name: user.name });
			}
		});
	}
);

// logged in user role
router.get(
	'/role',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		res.json({ role: req.user.role });
	}
);

// profile
router.get(
	'/profile',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		res.json(
			(user = {
				id: req.user._id,
				name: req.user.name,
				email: req.user.email,
				phoneno: req.user.phoneno,
				rollno: req.user.rollno,
				school: req.user.school,
				dept: req.user.dept,
				batch: req.user.batch,
			})
		);
	}
);

// modify profile
router.post(
	'/profile/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['name', 'email', 'phoneno']).notEmpty(), body(['email']).isEmail()],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.json({
				success: false,
				msg: 'Fill in all the fields properly',
			});
		} else {
			User.getUserByID(req.params.id, (err, user) => {
				if (err) throw err;
				if (user) {
					if (req.params.id == user._id) {
						let modifyProfile = {};
						if (req.user.role == 'Student') {
							modifyProfile = {
								eToken: user.eToken,
								pToken: user.pToken,
								eActive: user.eActive,
								pActive: user.pActive,
								rToken: user.rToken,
								name: req.body.name,
								email: req.body.email,
								phoneno: req.body.phoneno,
								dept: req.body.dept,
								rollno: user.rollno,
								school: req.body.school,
								batch: req.body.batch,
								password: user.password,
								role: user.role,
								categories: null,
							};
						} else if (req.user.role == 'Dean') {
							modifyProfile = {
								eToken: user.eToken,
								pToken: user.pToken,
								eActive: user.eActive,
								pActive: user.pActive,
								rToken: user.rToken,
								name: req.body.name,
								email: req.body.email,
								phoneno: req.body.phoneno,
								dept: null,
								rollno: null,
								school: req.body.school,
								batch: null,
								password: user.password,
								role: user.role,
								categories: user.categories,
							};
						} else if (
							req.user.role == 'Teaching' ||
							req.user.role == 'Non-Teaching'
						) {
							modifyProfile = {
								eToken: user.eToken,
								pToken: user.pToken,
								eActive: user.eActive,
								pActive: user.pActive,
								rToken: user.rToken,
								name: req.body.name,
								email: req.body.email,
								phoneno: req.body.phoneno,
								dept: req.body.dept,
								rollno: null,
								school: req.body.school,
								batch: null,
								password: user.password,
								role: user.role,
								categories: null,
							};
						} else if (req.user.role == 'Admin') {
							modifyProfile = {
								eToken: user.eToken,
								pToken: user.pToken,
								eActive: user.eActive,
								pActive: user.pActive,
								rToken: user.rToken,
								name: req.body.name,
								email: req.body.email,
								phoneno: req.body.phoneno,
								dept: null,
								rollno: null,
								school: null,
								batch: null,
								password: user.password,
								role: user.role,
								categories: null,
							};
						}

						let query = { _id: req.params.id };

						User.getUserByEmail(
							modifyProfile.email,
							(err, user) => {
								if (err) throw err;
								if (user) {
									if (req.user.email == modifyProfile.email) {
										User.getUserByPhoneno(
											modifyProfile.phoneno,
											(err, user) => {
												if (err) throw err;
												if (user) {
													if (
														req.user.phoneno ==
														modifyProfile.phoneno
													) {
														// update profile on db
														User.updateOne(
															query,
															modifyProfile,
															(err) => {
																if (err) {
																	res.json({
																		success: false,
																		msg:
																			'Unable to make changes to you profile',
																	});
																} else {
																	res.json({
																		success: true,
																		msg:
																			'Changes succesfully made to your profile',
																	});
																}
															}
														);
													} else {
														res.json({
															success: false,
															msg:
																'A User has already registered with same phone number',
														});
													}
												} else {
													// update profile on db
													User.updateOne(
														query,
														modifyProfile,
														(err) => {
															if (err) {
																res.json({
																	success: false,
																	msg:
																		'Unable to make changes to you profile',
																});
															} else {
																res.json({
																	success: true,
																	msg:
																		'Changes succesfully made to your profile',
																});
															}
														}
													);
												}
											}
										);
									} else {
										res.json({
											success: false,
											msg:
												'A User has already registered with same email',
										});
									}
								} else {
									User.getUserByPhoneno(
										modifyProfile.phoneno,
										(err, user) => {
											if (err) throw err;
											if (user) {
												if (
													req.user.phoneno ==
													modifyProfile.phoneno
												) {
													// update profile on db
													User.updateOne(
														query,
														modifyProfile,
														(err) => {
															if (err) {
																res.json({
																	success: false,
																	msg:
																		'Unable to make changes to you profile',
																});
															} else {
																res.json({
																	success: true,
																	msg:
																		'Changes succesfully made to your profile',
																});
															}
														}
													);
												} else {
													res.json({
														success: false,
														msg:
															'A User has already registered with same phone number',
													});
												}
											} else {
												// update profile on db
												User.updateOne(
													query,
													modifyProfile,
													(err) => {
														if (err) {
															res.json({
																success: false,
																msg:
																	'Unable to make changes to you profile',
															});
														} else {
															res.json({
																success: true,
																msg:
																	'Changes succesfully made to your profile',
															});
														}
													}
												);
											}
										}
									);
								}
							}
						);
					} else {
						res.json({
							success: false,
							msg: 'You are not authorised',
						});
					}
				} else {
					res.json({ success: false, msg: 'User not found' });
				}
			});
		}
	}
);

// change password
router.post(
	'/changePassword/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['oldPassword', 'newPassword']).notEmpty()],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.json({
				success: false,
				msg: 'Fill in all the fields properly',
			});
		} else {
			User.getUserByID(req.params.id, (err, user) => {
				if (err) throw err;
				if (req.params.id == user._id) {
					if (!user) {
						return res.json({
							success: false,
							msg: 'User not found',
						});
					} else {
						const oldPassword = req.body.oldPassword;
						const newPassword = req.body.newPassword;

						// check password
						User.comparePassword(
							oldPassword,
							user.password,
							(err, isMatch) => {
								if (err) throw err;
								if (isMatch) {
									let modifyProfile = {
										eToken: user.eToken,
										pToken: user.pToken,
										eActive: user.eActive,
										pActive: user.pActive,
										rToken: user.rToken,
										name: user.name,
										email: user.email,
										phoneno: user.phoneno,
										dept: user.dept,
										rollno: user.rollno,
										school: user.school,
										batch: user.batch,
										password: newPassword,
										role: user.role,
										categories: user.categories,
									};

									let query = { _id: req.params.id };

									// update profile on db
									User.changePassword(
										query,
										modifyProfile,
										(err) => {
											if (err) {
												res.json({
													success: false,
													msg:
														'Unable to change your password',
												});
											} else {
												res.json({
													success: true,
													msg:
														'Password successfully changed',
												});
											}
										}
									);
								} else {
									res.json({
										success: false,
										msg: 'Wrong password',
									});
								}
							}
						);
					}
				} else {
					res.json({
						success: false,
						msg: 'You are not authorised to make changes',
					});
				}
			});
		}
	}
);

// dashboard (by)
router.get(
	'/byDashboard',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		} else {
			Complaint.getComplaintByUser_id(req.user._id, (err, complaints) => {
				if (err) {
					res.json({ success: false, msg: 'Something went wrong!' });
				} else {
					if (!complaints[0]) {
						res.json({
							success: false,
							msg: 'No complaints registered by you',
						});
					} else {
						let npy = 0,
							ip = 0,
							c = 0;
						for (i = 0; i < complaints.length; i++) {
							if (complaints[i].status == 'Not Processed Yet') {
								npy++;
							} else if (complaints[i].status == 'In Progress') {
								ip++;
							} else if (complaints[i].status == 'Completed') {
								c++;
							}
						}
						res.json({ success: true, npy, ip, c });
					}
				}
			});
		}
	}
);

// dashboard (under)
router.get(
	'/underDashboard',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Student' || req.user.role == 'Admin') {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		} else {
			if (req.user.role == 'Dean') {
				Complaint.getComplaintByDean_id(
					req.user._id,
					(err, complaints) => {
						if (err) {
							res.json({
								success: false,
								msg: 'Something went wrong!',
							});
						} else {
							if (!complaints[0]) {
								res.json({
									success: false,
									msg: 'No complaints registered under you',
								});
							} else {
								let npy = 0,
									ip = 0,
									c = 0;
								for (i = 0; i < complaints.length; i++) {
									if (
										complaints[i].status ==
										'Not Processed Yet'
									) {
										npy++;
									} else if (
										complaints[i].status == 'In Progress'
									) {
										ip++;
									} else if (
										complaints[i].status == 'Completed'
									) {
										c++;
									}
								}
								res.json({ success: true, npy, ip, c });
							}
						}
					}
				);
			} else if (
				req.user.role == 'Teaching' ||
				req.user.role == 'Non-Teaching'
			) {
				Complaint.getComplaintByWorker_id(
					req.user._id,
					(err, complaints) => {
						if (err) {
							res.json({
								success: false,
								msg: 'Something went wrong!',
							});
						} else {
							if (!complaints[0]) {
								res.json({
									success: false,
									msg: 'No complaints registered under you',
								});
							} else {
								let npy = 0,
									ip = 0,
									c = 0;
								for (i = 0; i < complaints.length; i++) {
									if (
										complaints[i].status ==
										'Not Processed Yet'
									) {
										npy++;
									} else if (
										complaints[i].status == 'In Progress'
									) {
										ip++;
									} else if (
										complaints[i].status == 'Completed'
									) {
										c++;
									}
								}
								res.json({ success: true, npy, ip, c });
							}
						}
					}
				);
			}
		}
	}
);

// admin dashboard

// view total number of complaints
router.get(
	'/admin/complaints',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			Complaint.find({}, (err, complaints) => {
				if (err) {
					res.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!complaints[0]) {
						res.json({
							success: false,
							msg: 'No complaints found',
						});
					} else {
						let npy = 0,
							ip = 0,
							c = 0;
						for (i = 0; i < complaints.length; i++) {
							if (complaints[i].status == 'Not Processed Yet') {
								npy++;
							} else if (complaints[i].status == 'In Progress') {
								ip++;
							} else if (complaints[i].status == 'Completed') {
								c++;
							}
						}
						res.json({ success: true, npy, ip, c });
					}
				}
			});
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// view total number of users
router.get(
	'/admin/users',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			User.find({}, (err, users) => {
				if (err) {
					res.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!users[0]) {
						res.json({ success: false, msg: 'No users found' });
					} else {
						let st = 0,
							teach = 0,
							nont = 0,
							de = 0;
						for (i = 0; i < users.length; i++) {
							if (users[i].role == 'Student') {
								st++;
							} else if (users[i].role == 'Dean') {
								de++;
							} else if (users[i].role == 'Teaching') {
								teach++;
							} else if (users[i].role == 'Non-Teaching') {
								nont++;
							}
						}
						res.json({ success: true, st, teach, nont, de });
					}
				}
			});
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// dean registration
router.post(
	'/dean/register',
	passport.authenticate('jwt', { session: false }),
	[
		body(['name', 'email', 'phoneno', 'school', 'password']).notEmpty(),
		body(['email']).isEmail(),
	],
	(req, res) => {
		if (req.user.role == 'Admin') {
			let newUser = new User({
				eToken: user.eToken,
				pToken: user.pToken,
				eActive: user.eActive,
				pActive: user.pActive,
				rToken: user.rToken,
				name: req.body.name,
				email: req.body.email,
				phoneno: req.body.phoneno,
				dept: null,
				rollno: null,
				school: req.body.school,
				batch: null,
				password: req.body.password,
				role: 'Dean',
				categories: [],
			});
			newUser.eToken = newUser.pToken = jwt.sign(
				{ newUser },
				config.secret,
				{
					expiresIn: 1800, // 30 mins
				}
			);

			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				res.json({ success: false, msg: 'Fill all the fields' });
			} else {
				User.getUserByEmail(newUser.email, (err, user) => {
					if (err) throw err;
					if (user) {
						res.json({
							success: false,
							msg:
								'A User has already registered with same email',
						});
					} else {
						User.getUserByPhoneno(newUser.phoneno, (err, user) => {
							if (err) throw err;
							if (user) {
								res.json({
									success: false,
									msg:
										'A User has already registered with same phone number',
								});
							} else {
								User.addUser(newUser, (err, user) => {
									if (err) {
										res.json({
											success: false,
											msg: 'Failed to register',
										});
									} else {
										// send email
										var email = {
											from:
												'inamullah.javid.100@gmail.com',
											to: newUser.email,
											subject:
												'Email verification (Holler Hark)',
											text:
												'Please visit "' +
												website +
												'users/activate/email/' +
												newUser.eToken +
												'" to verify your email account with Holler Hark',
											html:
												'Please click <a href="' +
												website +
												'users/activate/email' +
												newUser.eToken +
												'">here</a> to verify your email account with Holler Hark',
										};
										// console.log(email);

										client.sendMail(email, function (
											err,
											info
										) {
											if (err) {
												console.log(err);
											} else {
												// send sms
												const from = 'Holler Hark';
												const to =
													'91' + newUser.phoneno;
												const text =
													'Please visit "' +
													website +
													'users/activate/phone/' +
													newUser.pToken +
													'" to verify your phone number with Holler Hark';
												// console.log(text);

												nexmo.message.sendSms(
													from,
													to,
													text,
													(err, responseData) => {
														if (err) {
															console.log(err);
														} else {
															if (
																responseData
																	.messages[0][
																	'status'
																] === '0'
															) {
																res.json({
																	success: true,
																	msg:
																		'An Email and SMS has been sent for email and phone num verification',
																});
															} else {
																res.json({
																	success: false,
																	msg:
																		'Something went wrong',
																});
															}
														}
													}
												);
											}
										});
									}
								});
							}
						});
					}
				});
			}
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// add category to dean
router.post(
	'/admin/category/add',
	passport.authenticate('jwt', { session: false }),
	[body(['category', 'dean_id']).notEmpty()],
	(req, res) => {
		if ((req.user.role = 'Admin')) {
			User.getUserByID(req.body.dean_id, (err, user) => {
				if (err) {
					res.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!user) {
						res.json({ success: false, msg: 'No user found' });
					} else {
						if (user.role == 'Dean') {
							User.getUserByCategory(
								req.body.category,
								(err, users) => {
									if (err) {
										res.json({
											success: false,
											msg: 'Something went wrong',
										});
									} else {
										if (users[0]) {
											res.json({
												success: false,
												msg:
													'A user already has the given category',
												name: users[0].name,
											});
										} else {
											const errors = validationResult(
												req
											);

											if (!errors.isEmpty()) {
												res.json({
													success: false,
													msg:
														'Please fill all the fields',
												});
											} else {
												let cat;
												if (user.categories) {
													user.categories.push(
														req.body.category
													);
													cat = user.categories;
												} else {
													cat = [req.body.category];
												}

												let modifyProfile = {
													eToken: user.eToken,
													pToken: user.pToken,
													eActive: user.eActive,
													pActive: user.pActive,
													rToken: user.rToken,
													name: user.name,
													email: user.email,
													phoneno: user.phoneno,
													dept: null,
													rollno: null,
													school: user.school,
													batch: null,
													password: user.password,
													role: user.role,
													categories: cat,
												};

												let query = {
													_id: req.body.dean_id,
												};

												User.updateOne(
													query,
													modifyProfile,
													(err) => {
														if (err) {
															res.json({
																success: false,
																msg:
																	'Not able to update category',
															});
														} else {
															res.json({
																success: true,
																msg:
																	'Category updated',
															});
														}
													}
												);
											}
										}
									}
								}
							);
						} else {
							res.json({
								success: false,
								msg: 'User is not a Dean',
							});
						}
					}
				}
			});
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// view categories
router.get(
	'/admin/category/view',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			User.getUserByRole('Dean', (err, user) => {
				if (err) {
					res.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!user[0]) {
						res.json({ success: false, msg: 'No user found' });
					} else {
						let de = [],
							cat = [];
						for (i = 0; i < user.length; i++) {
							de[i] = user[i].name;
							cat[i] = user[i].categories;
						}
						res.json({ success: true, de, cat });
					}
				}
			});
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// view user list (admin view)
router.get(
	'/adminViewList/:role',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			User.getUserByRole(req.params.role, (err, users) => {
				if (err) {
					req.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!users[0]) {
						res.json({ success: false, msg: 'No users found' });
					} else {
						res.json({ success: true, users });
					}
				}
			});
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// admin view user
router.get(
	'/admin/user/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			User.getUserByID(req.params.id, (err, user) => {
				if (err) {
					res.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!user) {
						res.json({ success: false, msg: 'No user found' });
					} else {
						res.json({
							success: true,
							user: {
								name: user.name,
								email: user.email,
								phoneno: user.phoneno,
								rollno: user.rollno,
								school: user.school,
								dept: user.dept,
								batch: user.batch,
							},
						});
					}
				}
			});
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// send category
router.get(
	'/deanCat',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		User.getUserByRole('Dean', (err, user) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!user[0]) {
					res.json({ success: false, msg: 'No user found' });
				} else {
					let cat = [];
					for (i = 0; i < user.length; i++) {
						cat[i] = user[i].categories;
					}
					res.json({ success: true, cat });
				}
			}
		});
	}
);

// send dean id
router.get(
	'/deanID',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		User.getUserByRole('Dean', (err, user) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!user[0]) {
					res.json({ success: false, msg: 'No user found' });
				} else {
					let de = [];
					for (i = 0; i < user.length; i++) {
						de[i] = { name: user[i].name, id: user[i]._id };
					}
					res.json({ success: true, de });
				}
			}
		});
	}
);

// send worker name
router.get(
	'/workerNameID',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		User.getWorkers((err, user) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!user[0]) {
					res.json({ success: false, msg: 'No user found' });
				} else {
					let users = [];
					for (i = 0; i < user.length; i++) {
						users[i] = { id: user[i]._id, name: user[i].name };
					}
					res.json({ success: true, users });
				}
			}
		});
	}
);

module.exports = router;
