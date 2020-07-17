const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const { body, validationResult } = require('express-validator');

const Complaint = require('../models/complaint');
const User = require('../models/user');

// sms dependency
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
	apiKey: '8111d20e',
	apiSecret: 'Zvg0RlPV7hWpwJl3',
});

// complaint registration
router.post(
	'/register',
	passport.authenticate('jwt', { session: false }),
	[body(['title', 'category', 'msg']).notEmpty()],
	(req, res) => {
		if (req.user.role != 'Admin') {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				res.json({ success: false, msg: 'Please fill all the fields' });
			} else {
				User.getUserByCategory(req.body.category, (err, users) => {
					if (err) {
						res.json({
							success: false,
							msg: 'Something wen wrong',
						});
					} else {
						let newComplaint = new Complaint({
							title: req.body.title,
							category: req.body.category,
							user_id: req.user._id,
							dean_id: users[0]._id,
							worker_id: 'Not Forwarded Yet',
							deanMsg: null,
							workerMsg: null,
							userMsg: null,
							status: 'Not Processed Yet',
							msg: req.body.msg,
							registeredDate: Date().substring(0, 24),
							completedDate: 'Not Completed Yet',
							log: [
								'[ ' +
									Date().substring(0, 24) +
									' ] Registered By: ' +
									req.user.name,
							],
						});

						// console.log(newComplaint);
						// save complaint in db
						newComplaint.save(newComplaint, (err, complaint) => {
							if (err) {
								res.json({
									success: false,
									msg: 'Failed to register your complaint',
								});
							} else {
								// send sms
								const from1 = 'Holler Hark';
								const to1 = '91' + req.user.phoneno;
								const text1 = 'Your complaint is registered.';
								nexmo.message.sendSms(
									from1,
									to1,
									text1,
									(err, responseData) => {
										if (err) {
											res.json({
												success: false,
												msg: 'Something went wrong',
											});
										} else {
											if (
												responseData.messages[0][
													'status'
												] !== '0'
											) {
												res.json({
													success: false,
													msg: 'Something went wrong',
												});
											} else {
												console.log('Sent 1');
											}
										}
									}
								);
								// send sms
								const from2 = 'Holler Hark';
								const to2 = '91' + users[0].phoneno;
								const text2 =
									'A complaint has been registered under you.';
								nexmo.message.sendSms(
									from2,
									to2,
									text2,
									(err, responseData) => {
										if (err) {
											res.json({
												success: false,
												msg: 'Something went wrong',
											});
										} else {
											if (
												responseData.messages[0][
													'status'
												] !== '0'
											) {
												res.json({
													success: false,
													msg: 'Something went wrong',
												});
											} else {
												console.log('Sent 2');
											}
										}
									}
								);
								res.json({
									success: true,
									msg: 'Complaint successfully registered',
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
				msg: 'Only users can register a complaint',
			});
		}
	}
);

// view complaint list (admin view)
router.get(
	'/adminViewList/:status',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin') {
			Complaint.getComplaintByStatus(
				req.params.status,
				(err, complaints) => {
					if (err) {
						req.json({
							success: false,
							msg: 'Something went wrong',
						});
					} else {
						if (!complaints[0]) {
							res.json({
								success: false,
								msg: 'No complaints found',
							});
						} else {
							let comp = [];
							for (i = 0; i < complaints.length; i++) {
								comp[i] = {
									title: complaints[i].title,
									id: complaints[i]._id,
								};
							}
							res.json({ success: true, comp });
						}
					}
				}
			);
		} else {
			res.json({
				success: false,
				unauth: true,
				msg: 'You are not authorized',
			});
		}
	}
);

// view complaint list (by)
router.get(
	'/byViewList/:status',
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
					req.json({ success: false, msg: 'Something went wrong' });
				} else {
					if (!complaints[0]) {
						res.json({
							success: false,
							msg: 'No complaints found',
						});
					} else {
						let comp = [];
						for (i = 0, j = 0; i < complaints.length; i++) {
							if (complaints[i].status == req.params.status) {
								comp[j] = {
									title: complaints[i].title,
									id: complaints[i]._id,
								};
								j++;
							}
						}
						if (!comp[0]) {
							res.json({
								success: false,
								msg: 'No complaints found',
							});
						} else {
							res.json({ success: true, complaints: comp });
						}
					}
				}
			});
		}
	}
);

// view complaint list (under)
router.get(
	'/underViewList/:status',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		if (req.user.role == 'Admin' || req.user.role == 'Student') {
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
							req.json({
								success: false,
								msg: 'Something went wrong',
							});
						} else {
							if (!complaints[0]) {
								res.json({
									success: false,
									msg: 'No complaints found',
								});
							} else {
								let comp = [];
								for (i = 0, j = 0; i < complaints.length; i++) {
									if (
										complaints[i].status ==
										req.params.status
									) {
										comp[j] = {
											title: complaints[i].title,
											id: complaints[i]._id,
										};
										j++;
									}
								}
								if (!comp[0]) {
									res.json({
										success: false,
										msg: 'No complaints found',
									});
								} else {
									res.json({
										success: true,
										complaints: comp,
									});
								}
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
							req.json({
								success: false,
								msg: 'Something went wrong',
							});
						} else {
							if (!complaints[0]) {
								res.json({
									success: false,
									msg: 'No complaints found',
								});
							} else {
								let comp = [];
								for (i = 0, j = 0; i < complaints.length; i++) {
									if (
										complaints[i].status ==
										req.params.status
									) {
										comp[j] = {
											title: complaints[i].title,
											id: complaints[i]._id,
										};
										j++;
									}
								}
								if (!comp[0]) {
									res.json({
										success: false,
										msg: 'No complaints found',
									});
								} else {
									res.json({
										success: true,
										complaints: comp,
									});
								}
							}
						}
					}
				);
			}
		}
	}
);

// view complaint
router.get(
	'/view/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!complaint) {
					res.json({ success: false, msg: 'Complaint not found' });
				} else {
					if (req.user._id == complaint.user_id) {
						res.json({
							success: true,
							complaint: {
								title: complaint.title,
								category: complaint.category,
								status: complaint.status,
								user_id: complaint.user_id,
								dean_id: complaint.dean_id,
								worker_id: complaint.worker_id,
								userMsg: complaint.userMsg,
								msg: complaint.msg,
								registeredDate: complaint.registeredDate,
								completedDate: complaint.completedDate,
								log: complaint.log,
							},
						});
					} else if (req.user._id == complaint.dean_id) {
						res.json({
							success: true,
							complaint: {
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
								completedDate: complaint.completedDate,
								log: complaint.log,
							},
						});
					} else if (req.user._id == complaint.worker_id) {
						res.json({
							success: true,
							complaint: {
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
								completedDate: complaint.completedDate,
								log: complaint.log,
							},
						});
					} else if (req.user.role == 'Admin') {
						res.json({
							success: true,
							complaint: {
								title: complaint.title,
								category: complaint.category,
								status: complaint.status,
								user_id: complaint.user_id,
								dean_id: complaint.dean_id,
								worker_id: complaint.worker_id,
								msg: complaint.msg,
								registeredDate: complaint.registeredDate,
								completedDate: complaint.completedDate,
								log: complaint.log,
							},
						});
					} else {
						res.json({
							success: false,
							unauth: true,
							msg: 'You are not authorised',
						});
					}
				}
			}
		});
	}
);

// edit complaint
router.post(
	'/edit/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['title', 'category', 'msg']).notEmpty()],
	(req, res) => {
		let query = { _id: req.params.id };

		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!complaint) {
					res.json({ success: false, msg: 'Complaint not found' });
				} else {
					if (
						req.user._id == complaint.user_id &&
						complaint.status == 'Not Processed Yet'
					) {
						const errors = validationResult(req);
						if (!errors.isEmpty()) {
							res.json({
								success: false,
								msg: 'Please fill all the fields',
								errors,
							});
						} else {
							User.getUserByCategory(
								req.body.category,
								(err, users) => {
									if (err) {
										res.json({
											success: false,
											msg: 'Something wen wrong',
										});
									} else {
										complaint.log.push(
											'[ ' +
												Date().substring(0, 24) +
												' ] Complaint Modified'
										);
										let editComplaint = {
											title: req.body.title,
											category: req.body.category,
											user_id: req.user._id,
											dean_id: users[0]._id,
											worker_id: complaint.worker_id,
											deanMsg: complaint.deanMsg,
											workerMsg: complaint.workerMsg,
											userMsg: complaint.userMsg,
											status: complaint.status,
											msg: req.body.msg,
											registeredDate:
												complaint.registeredDate,
											completedDate:
												complaint.completedDate,
											log: complaint.log,
										};
										// res.json({editComplaint, log: complaint.log})
										// update complaint in db
										Complaint.updateOne(
											query,
											editComplaint,
											(err) => {
												if (err) {
													res.json({
														success: false,
														msg:
															'Failed to update your complaint',
													});
												} else {
													// send sms
													const from1 = 'Holler Hark';
													const to1 =
														'91' + req.user.phoneno;
													const text1 =
														'Your complaint has been modified.';
													nexmo.message.sendSms(
														from1,
														to1,
														text1,
														(err, responseData) => {
															if (err) {
																res.json({
																	success: false,
																	msg:
																		'Something went wrong',
																});
															} else {
																if (
																	responseData
																		.messages[0][
																		'status'
																	] !== '0'
																) {
																	res.json({
																		success: false,
																		msg:
																			'Something went wrong',
																	});
																} else {
																	console.log(
																		'Sent 1'
																	);
																}
															}
														}
													);
													// send sms
													const from2 = 'Holler Hark';
													const to2 =
														'91' + users[0].phoneno;
													const text2 =
														'A complaint under you has been modified.';
													nexmo.message.sendSms(
														from2,
														to2,
														text2,
														(err, responseData) => {
															if (err) {
																res.json({
																	success: false,
																	msg:
																		'Something went wrong',
																});
															} else {
																if (
																	responseData
																		.messages[0][
																		'status'
																	] !== '0'
																) {
																	res.json({
																		success: false,
																		msg:
																			'Something went wrong',
																	});
																} else {
																	console.log(
																		'Sent 2'
																	);
																}
															}
														}
													);
													res.json({
														success: true,
														msg:
															'Complaint successfully updated',
													});
												}
											}
										);
									}
								}
							);
						}
					} else {
						if (req.user._id != complaint.user_id) {
							res.json({
								success: false,
								msg:
									'You are not authorized to make changes to this complaint',
							});
						} else if (complaint.status != 'Not Processed Yet') {
							res.json({
								success: false,
								msg: "You can't make changes to this complaint",
							});
						}
					}
				}
			}
		});
	}
);

// delete complaint
router.delete(
	'/delete/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		let query = { _id: req.params.id };

		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({
					success: false,
					msg: 'Failed to delete your complaint',
				});
			} else {
				if (!complaint) {
					res.json({ success: false, msg: 'Complaint not found' });
				} else {
					if (req.user._id == complaint.user_id) {
						// remove from db
						Complaint.deleteOne(query, (err) => {
							if (err) {
								res.json({
									success: false,
									msg: 'Failed to delete your complaint',
								});
							} else {
								// send sms
								const from1 = 'Holler Hark';
								const to1 = '91' + req.user.phoneno;
								const text1 =
									'Your complaint has been deleted.';
								nexmo.message.sendSms(
									from1,
									to1,
									text1,
									(err, responseData) => {
										if (err) {
											res.json({
												success: false,
												msg: 'Something went wrong',
											});
										} else {
											if (
												responseData.messages[0][
													'status'
												] !== '0'
											) {
												res.json({
													success: false,
													msg: 'Something went wrong',
												});
											} else {
												console.log('Sent 1');
											}
										}
									}
								);
								// send sms
								const from2 = 'Holler Hark';
								const to2 = '91' + users[0].phoneno;
								const text2 =
									'A complaint under you has been deleted.';
								nexmo.message.sendSms(
									from2,
									to2,
									text2,
									(err, responseData) => {
										if (err) {
											res.json({
												success: false,
												msg: 'Something went wrong',
											});
										} else {
											if (
												responseData.messages[0][
													'status'
												] !== '0'
											) {
												res.json({
													success: false,
													msg: 'Something went wrong',
												});
											} else {
												console.log('Sent 2');
											}
										}
									}
								);
								res.json({
									success: true,
									msg: 'Complaint successfully deleted',
								});
							}
						});
					} else {
						res.json({
							success: false,
							msg:
								'You are not authorized to delete this complaint',
						});
					}
				}
			}
		});
	}
);

// forward complaint to worker by dean
router.post(
	'/forward/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['worker_id', 'deanMsg']).notEmpty()],
	(req, res) => {
		let query = { _id: req.params.id };

		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!complaint) {
					res.json({ success: false, msg: 'Complaint not found' });
				} else {
					if (req.user._id == complaint.dean_id) {
						const errors = validationResult(req);
						if (!errors.isEmpty()) {
							res.json({
								success: false,
								msg: 'Please fill all the fields',
							});
						} else {
							User.getUserByID(
								req.body.worker_id,
								(err, user) => {
									if (err) throw err;
									if (!user) {
										res.json({
											success: false,
											msg: 'Something went wrong',
										});
									} else {
										complaint.log.push(
											'[ ' +
												Date().substring(0, 24) +
												' ] Complaint Forwarded To: ' +
												user.name
										);
										let forwardComplaint = {
											title: complaint.title,
											category: complaint.category,
											user_id: complaint.user_id,
											dean_id: complaint.dean_id,
											worker_id: req.body.worker_id,
											deanMsg: req.body.deanMsg,
											workerMsg: complaint.workerMsg,
											userMsg: complaint.userMsg,
											status: 'In Progress',
											msg: complaint.msg,
											registeredDate:
												complaint.registeredDate,
											completedDate:
												complaint.completedDate,
											log: complaint.log,
										};
										// update worker id and dean msg to complaint in db
										Complaint.updateOne(
											query,
											forwardComplaint,
											(err) => {
												if (err) {
													res.json({
														success: false,
														msg:
															'Failed to forward the complaint',
													});
												} else {
													// send sms
													const from1 = 'Holler Hark';
													const to1 =
														'91' + req.user.phoneno;
													const text1 =
														'Complaint has been forwarded.';
													nexmo.message.sendSms(
														from1,
														to1,
														text1,
														(err, responseData) => {
															if (err) {
																res.json({
																	success: false,
																	msg:
																		'Something went wrong',
																});
															} else {
																if (
																	responseData
																		.messages[0][
																		'status'
																	] !== '0'
																) {
																	res.json({
																		success: false,
																		msg:
																			'Something went wrong',
																	});
																} else {
																	console.log(
																		'Sent 1'
																	);
																}
															}
														}
													);
													// send sms
													const from2 = 'Holler Hark';
													const to2 =
														'91' + user[0].phoneno;
													const text2 =
														'A complaint has been forwarded to you.';
													nexmo.message.sendSms(
														from2,
														to2,
														text2,
														(err, responseData) => {
															if (err) {
																res.json({
																	success: false,
																	msg:
																		'Something went wrong',
																});
															} else {
																if (
																	responseData
																		.messages[0][
																		'status'
																	] !== '0'
																) {
																	res.json({
																		success: false,
																		msg:
																			'Something went wrong',
																	});
																} else {
																	console.log(
																		'Sent 2'
																	);
																}
															}
														}
													);
													res.json({
														success: true,
														msg:
															'Complaint successfully forwarded',
													});
												}
											}
										);
									}
								}
							);
						}
					} else {
						res.json({
							success: false,
							msg:
								'You are not authorized to forward this complaint',
						});
					}
				}
			}
		});
	}
);

// response of complaint by worker to dean
router.post(
	'/response/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['workerMsg']).notEmpty()],
	(req, res) => {
		let query = { _id: req.params.id };

		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!complaint) {
					res.json({ success: false, msg: 'Complaint not found' });
				} else {
					if (req.user._id == complaint.worker_id) {
						const errors = validationResult(req);
						if (!errors.isEmpty()) {
							res.json({
								success: false,
								msg: 'Please fill all the fields',
							});
						} else {
							complaint.log.push(
								'[ ' +
									Date().substring(0, 24) +
									' ] Response to Forwarded Complaint '
							);
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
								completedDate: complaint.completedDate,
								log: complaint.log,
							};
							// update worker msg to complaint in db
							Complaint.updateOne(
								query,
								responseComplaint,
								(err) => {
									if (err) {
										res.json({
											success: false,
											msg: 'Failed to respond back',
										});
									} else {
										res.json({
											success: true,
											msg: 'Response successfully given',
										});
									}
								}
							);
						}
					} else {
						res.json({
							success: false,
							msg:
								'You are not authorized to respond to this complaint',
						});
					}
				}
			}
		});
	}
);

// change status of complaint (only dean)
router.post(
	'/changeStatus/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['newStatus']).notEmpty()],
	(req, res) => {
		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			} else {
				if (!complaint) {
					res.json({ success: false, msg: 'Complaint not found' });
				} else {
					if (req.user._id == complaint.dean_id) {
						const errors = validationResult(req);
						if (!errors.isEmpty()) {
							res.json({
								success: false,
								msg: 'Please fill all the fields',
							});
						} else {
							var completedDate;
							if (req.body.newStatus == 'Completed') {
								completedDate = Date();
							} else {
								completedDate = 'Not Completed Yet';
							}
							complaint.log.push(
								'[ ' +
									Date().substring(0, 24) +
									' ] Complaint Status changed to : ' +
									req.body.newStatus
							);
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
								completedDate: completedDate,
								log: complaint.log,
							};

							let query = { _id: req.params.id };

							// update complaint status to complaint in db
							Complaint.updateOne(
								query,
								changeStatusComplaint,
								(err) => {
									if (err) {
										res.json({
											success: false,
											msg: 'Failed to change the status',
										});
									} else {
										res.json({
											success: true,
											msg:
												'Complaint status successfully changed',
										});
									}
								}
							);
						}
					} else {
						res.json({
							success: false,
							msg:
								'You are not authorized to change status of this complaint',
						});
					}
				}
			}
		});
	}
);

// user's feedback after their complaint is completed
router.post(
	'/feedback/:id',
	passport.authenticate('jwt', { session: false }),
	[body(['userMsg']).notEmpty()],
	(req, res) => {
		// find complaint in db
		Complaint.getComplaintByID(req.params.id, (err, complaint) => {
			if (err) {
				res.json({ success: false, msg: 'Something went wrong' });
			}
			if (!complaint) {
				res.json({ success: false, msg: 'Complaint not found' });
			} else {
				if (req.user._id == complaint.user_id) {
					if (complaint.completedDate != 'Not Completed Yet') {
						const errors = validationResult(req);
						if (!errors.isEmpty()) {
							res.json({
								success: false,
								msg: 'Please fill all the fields',
							});
						} else {
							complaint.log.push(
								'[ ' +
									Date().substring(0, 24) +
									' ] Complaint Feedback Send'
							);
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
								completedDate: complaint.completedDate,
								log: complaint.log,
							};

							let query = { _id: req.params.id };

							// update userMsg to complaint in db
							Complaint.updateOne(
								query,
								feedbackComplaint,
								(err) => {
									if (err) {
										res.json({
											success: false,
											msg: 'Failed to send feedback',
										});
									} else {
										res.json({
											success: true,
											msg: 'Feedback successfully send',
										});
									}
								}
							);
						}
					} else {
						res.json({
							success: false,
							msg:
								'Feedback can be send only when it is completed',
						});
					}
				} else {
					res.json({ success: false, msg: 'You are not authorised' });
				}
			}
		});
	}
);

module.exports = router;
