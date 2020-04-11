(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container my-5\">\n  <ng-flash-message></ng-flash-message>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/admin-dashboard.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/admin-dashboard.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-around\">\n    <div class=\"col-md-9\">\n        <app-total-complaints></app-total-complaints>\n        <app-category></app-category>\n    </div>\n    <div class=\"col-md-3\">\n        <app-total-users></app-total-users>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Add Category\n    </div>\n    <div class=\"card-body\">\n        <form #addCategoryForm=\"ngForm\" (ngSubmit)=\"addCategory()\">\n            <div class=\"form-group row m-0\">\n                <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': de.invalid && de.touched}\">Dean</label>\n                <div class=\"col-sm-8\">\n                    <select #de=\"ngModel\" [class.is-invalid]=\"de.invalid && de.touched\" required type=\"text\" [(ngModel)]=\"dean_id\" class=\"form-control\" name=\"dean_id\">\n                        <option *ngFor=\"let de of des\" value=\"{{de.id}}\">{{de.name}}</option>\n                    </select>\n                    <!-- <input #de=\"ngModel\" [ngClass]=\"{'is-invalid': de.invalid && de.touched}\" required type=\"text\" [(ngModel)]=\"dean_id\" name=\"dean_id\" class=\"form-control\"> -->\n                    <small class=\"invalid-feedback\">Dean is required</small>\n                </div>\n            </div>\n            <div class=\"form-group row m-0\">\n                <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': cat.invalid && cat.touched}\">Category</label>\n                <div class=\"col-sm-8\">\n                    <input #cat=\"ngModel\" [ngClass]=\"{'is-invalid': cat.invalid && cat.touched}\" required type=\"text\" [(ngModel)]=\"category\" name=\"category\" class=\"form-control\">\n                    <small class=\"invalid-feedback\">Category is required</small>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button type=\"reset\" class=\"btn btn-success ml-5\" value=\"Clear\">Clear</button>\n                <button [disabled]=\"addCategoryForm.invalid\" type=\"submit\" class=\"btn btn-primary mr-5\" value=\"Submit\">Submit</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/category.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/category.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-6\">\n        <app-add-category></app-add-category>\n    </div>\n    <div class=\"col-md-6\">\n        <app-view-categories></app-view-categories>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Categories\n    </div>\n    <div class=\"card-body\">\n        <table class=\"table text-center\">\n            <thead class=\"thead\">\n                <tr>\n                    <th>S. No.</th>\n                    <th>Dean</th>\n                    <th>Category</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let o of op\">\n                    <td class=\"border-0\" scope=\"row\">{{o.i}}</td>\n                    <td class=\"border-0\">{{o.de}}</td>\n                    <td class=\"border-0\">{{o.cat}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Total Complaints Registered\n    </div>\n    <div class=\"card-body\">\n        <div class=\"card-deck\">\n            <div class=\"card card-stats\">\n                <div class=\"card-header card-header-primary card-header-icon\">\n                    <div class=\"card-icon\">\n                        <h3 class=\"m-0\">{{npy}}</h3>\n                    </div>\n                    <h5 class=\"card-title\">Not Processed Yet</h5>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"stats ml-auto\">\n                        <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/Not Processed Yet&']\">View</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card card-stats\">\n                <div class=\"card-header card-header-primary card-header-icon\">\n                    <div class=\"card-icon\">\n                        <h3 class=\"m-0\">{{ip}}</h3>\n                    </div>\n                    <h5 class=\"card-title\">In Progress</h5>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"stats ml-auto\">\n                        <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/In Progress&']\">View</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card card-stats\">\n                <div class=\"card-header card-header-primary card-header-icon\">\n                    <div class=\"card-icon\">\n                        <h3 class=\"m-0\">{{c}}</h3>\n                    </div>\n                    <h5 class=\"card-title\">Completed</h5>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"stats ml-auto\">\n                        <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/Completed&']\">View</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/total-users/total-users.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/total-users/total-users.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Total Users Registered\n    </div>\n    <div class=\"card-body\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h3 class=\"m-0\">{{st}}</h3>\n                </div>\n                <h5 class=\"card-title\">Student</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/admin/userList/Student']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h3 class=\"m-0\">{{teach}}</h3>\n                </div>\n                <h5 class=\"card-title\">Teaching Faculty</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/admin/userList/Teaching']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h3 class=\"m-0\">{{nont}}</h3>\n                </div>\n                <h5 class=\"card-title\">Non-Teach Faculty</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/admin/userList/Non-Teaching']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h3 class=\"m-0\">{{de}}</h3>\n                </div>\n                <h5 class=\"card-title\">Dean</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-success btn-sm\" [routerLink]=\"['/admin/dean/register']\">Add</button>\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/admin/userList/Dean']\">View</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dean-register/dean-register.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dean-register/dean-register.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card w-50 ml-auto \">\n    <div class=\"card-header card-header-primary\">\n        Enter Dean details\n    </div>\n    <div class=\"card-body\">\n        <form #userRegisterForm=\"ngForm\" (ngSubmit)=\"register()\">\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span for=\"name\"  class=\"input-group-text mr-1\" [ngClass]=\"{'text-danger': nam.invalid && nam.touched}\">Full Name</span>\n                </div>\n                <input #nam=\"ngModel\" [ngClass]=\"{'is-invalid': nam.invalid && nam.touched}\" required type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\">\n                <small class=\"invalid-feedback ml-5\">Enter Full Name</small>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span for=\"email\"  class=\"input-group-text mr-1\" [ngClass]=\"{'text-danger': em.invalid && em.touched}\">Email</span>\n                </div>\n                <input #em=\"ngModel\" [ngClass]=\"{'is-invalid': em.invalid && em.touched}\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\">\n                <small class=\"invalid-feedback ml-5\">Enter valid Email</small>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span for=\"phoneno\"  class=\"input-group-text mr-1\" [ngClass]=\"{'text-danger': ph.invalid && ph.touched}\">Phone No.</span>\n                </div>\n                <input #ph=\"ngModel\" [ngClass]=\"{'is-invalid': ph.invalid && ph.touched}\" required pattern=\"[0-9]{10}\" type=\"tel\" [(ngModel)]=\"phoneno\" class=\"form-control\" name=\"phoneno\">\n                <small class=\"invalid-feedback ml-5\">Enter valid Phone Number</small>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span for=\"school\"  class=\"input-group-text mr-1\" [ngClass]=\"{'text-danger': schl.invalid && schl.touched}\">School</span>\n                </div>\n                <input #schl=\"ngModel\" [ngClass]=\"{'is-invalid': schl.invalid && schl.touched}\" required type=\"text\" [(ngModel)]=\"school\" class=\"form-control\" name=\"school\">\n                <small class=\"invalid-feedback ml-5\">Enter your School</small>\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span for=\"password\"  class=\"input-group-text mr-1\" [ngClass]=\"{'text-danger': pass.invalid && pass.touched}\">Password</span>\n                </div>\n                <input #pass=\"ngModel\" [ngClass]=\"{'is-invalid': pass.invalid && pass.touched}\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\">\n                <small class=\"invalid-feedback ml-5\">Password must contain:\n                    <ul>\n                        <li>1 Uppercase</li>\n                        <li>1 Lowercase</li>\n                        <li>1 Number/Special Character</li>\n                        <li>Minimum 8 Characters</li>\n                    </ul>\n                </small>\n            </div>\n            <button [disabled]=\"userRegisterForm.invalid\" type=\"submit\" class=\"btn btn-primary pull-right ml-5\" value=\"Submit\">Submit</button>\n            <button type=\"reset\" class=\"btn btn-success pull-right\">Clear</button>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-user-details/view-user-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-user-details/view-user-details.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        <span class=\"nav-title\">{{user.name}}</span>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"list-group list-group-flush\">\n            <li *ngIf=\"user.rollno\" class=\"list-group-item\">Roll Number : {{user.rollno}}</li>\n            <li class=\"list-group-item\">Email : {{user.email}}</li>\n            <li class=\"list-group-item\">Phone Number : {{user.phoneno}}</li>\n            <li *ngIf=\"user.school\" class=\"list-group-item\">School : {{user.school}}</li>\n            <li *ngIf=\"user.dept\" class=\"list-group-item\">Department : {{user.dept}}</li>\n            <li *ngIf=\"user.batch\" class=\"list-group-item\">Batch : {{user.batch}}</li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-user-list/view-user-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-user-list/view-user-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #us *ngFor=\"let user of users\" [attr.id]=\"user._id\">\n    <div class=\"alert alert-primary\">\n        <span class=\"h3 m-0\">\n            {{user.name}}\n            <button class=\"btn btn-success btn-sm m-0 mt-1 pull-right align-baseline\" (click)=\"load(us)\">View</button>\n        </span>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/complaint-register/complaint-register.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/complaint-register/complaint-register.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #complaintForm=\"ngForm\" class=\"w-50 ml-auto pb-5\" (ngSubmit)=\"registerComplaint()\">\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span [class.bg-primary]=\"subject.valid || subject.untouched\" [class.bg-danger]=\"subject.invalid && subject.touched\" class=\"input-group-text text-white rounded-left mr-1\">Title</span>\n        </div>\n        <input #subject=\"ngModel\" [class.is-invalid]=\"subject.invalid && subject.touched\" required type=\"text\" [(ngModel)]=\"title\" class=\"form-control\" name=\"title\">\n        <small class=\"invalid-feedback\">Title is required</small>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span [class.bg-primary]=\"cat.valid || cat.untouched\" [class.bg-danger]=\"cat.invalid && cat.touched\" class=\"input-group-text bg-primary text-white rounded-left mr-1\">Category</span>\n        </div>\n        <select #cat=\"ngModel\" [class.is-invalid]=\"cat.invalid && cat.touched\" required type=\"text\" [(ngModel)]=\"category\" class=\"form-control\" name=\"category\">\n            <option *ngFor=\"let cat of categories\" value=\"{{cat}}\">{{cat}}</option>\n        </select>\n        <!-- <input #cat=\"ngModel\" [class.is-invalid]=\"cat.invalid && cat.touched\" required type=\"text\" [(ngModel)]=\"category\" class=\"form-control\" name=\"category\"> -->\n        <small class=\"invalid-feedback\">Category is required</small>\n    </div>\n    <!-- <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span [class.bg-primary]=\"did.valid || did.untouched\" [class.bg-danger]=\"did.invalid && did.touched\" class=\"input-group-text bg-primary text-white rounded-left mr-1\">Dean ID</span>\n        </div>\n        <input #did=\"ngModel\" [class.is-invalid]=\"did.invalid && did.touched\" required type=\"text\" [(ngModel)]=\"dean_id\" class=\"form-control\" name=\"dean_id\">\n        <small class=\"invalid-feedback\">Dean ID is required</small>\n    </div> -->\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span [class.bg-primary]=\"m.valid || m.untouched\" [class.bg-danger]=\"m.invalid && m.touched\" class=\"input-group-text bg-primary text-white rounded-left mr-1\">MSG</span>\n        </div>\n        <input #m=\"ngModel\" [class.is-invalid]=\"m.invalid && m.touched\" required type=\"text\" [(ngModel)]=\"msg\" class=\"form-control\" name=\"msg\">\n        <small class=\"invalid-feedback\">Message is required</small>\n    </div>\n    <button [disabled]=\"complaintForm.invalid\" type=\"submit\" class=\"btn btn-success pull-right\" value=\"Submit\">Submit</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint-list/view-complaint-list.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint-list/view-complaint-list.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #c *ngFor=\"let comp of complaint\" [attr.id]=\"comp.id\">\n    <div class=\"alert alert-primary\">\n        <span class=\"h3 m-0\">\n            {{comp.title}}\n            <button class=\"btn btn-success btn-sm m-0 mt-1 pull-right align-baseline\" (click)=\"load(c)\">View</button>\n        </span>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/change-status/change-status.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/change-status/change-status.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Change Status\n    </div>\n    <div class=\"card-body\">\n        <form #complaintStatusForm=\"ngForm\" (ngSubmit)=\"changeStatus()\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': s.invalid && s.touched}\">Status</label>\n                        <div class=\"col-sm-8\">\n                            <select #s=\"ngModel\" [ngClass]=\"{'is-invalid': s.invalid && s.touched}\" required [(ngModel)]=\"newStatus\" class=\"form-control\" name=\"newStatus\">\n                                <option value=\"In Progress\">In Progress</option>\n                                <option value=\"Completed\">Completed</option>\n                            </select>\n                            <div class=\"invalid-feedback\">Status is required</div>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item text-right\">\n                    <button type=\"reset\" class=\"btn btn-outline-primary mr-3\" (click)=\"view()\">Go back</button>\n                    <button [disabled]=\"complaintStatusForm.invalid\" type=\"submit\" class=\"btn btn-outline-success\" value=\"Submit\">Submit</button>\n                </li>\n            </ul>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary row justify-content-between\">\n        <h3 class=\"col-3 m-0\">{{title}}</h3>\n        <div class=\"col-3\">\n            <button class=\"btn btn-primary m-0\" (click)=\"log()\">View Log</button>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">Category : {{category}}</li>\n            <li class=\"list-group-item\">Status : {{status}}</li>\n            <li *ngIf=\"user_id\" class=\"list-group-item\">User : {{user_id}}</li>\n            <li class=\"list-group-item\">Dean : {{dean_id}}</li>\n            <li class=\"list-group-item\">Worker : {{worker_id}}</li>\n            <li *ngIf=\"deanMsg\" class=\"list-group-item\">Dean Message : {{deanMsg}}</li>\n            <li *ngIf=\"workerMsg\" class=\"list-group-item\">Worker Message : {{workerMsg}}</li>\n            <li *ngIf=\"userMsg\" class=\"list-group-item\">Feedback Message : {{userMsg}}</li>\n            <li class=\"list-group-item\">Message : {{msg}}</li>\n            <li class=\"list-group-item\">Registered Date : {{registeredDate}}</li>\n            <li class=\"list-group-item\">Completed Date : {{completedDate}}</li>\n        </ul>\n        <div *ngIf=\"showBtnDelete || showBtnEdit || showBtnFeedback || showBtnForward || showBtnResponse || showBtnStatus\" class=\"text-right\">\n            <button *ngIf=\"showBtnEdit\" class=\"btn btn-outline-primary mr-3\" (click)=\"modify()\">Edit</button>\n            <button *ngIf=\"showBtnDelete\" class=\"btn btn-outline-danger mr-3\" (click)=\"delete()\">Delete</button>\n            <button *ngIf=\"showBtnForward\" class=\"btn btn-outline-success mr-3\" (click)=\"forward()\">Forward</button>\n            <button *ngIf=\"showBtnResponse\" class=\"btn btn-outline-success mr-3\" (click)=\"response()\">Send Response</button>\n            <button *ngIf=\"showBtnStatus\" class=\"btn btn-outline-success mr-3\" (click)=\"changeStatus()\">Change Status</button>\n            <button *ngIf=\"showBtnFeedback\" class=\"btn btn-outline-success mr-3\" (click)=\"sendFeedback()\">Send Feedback</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Complaint Log\n    </div>\n    <div class=\"card-body px-5\">\n        <div *ngFor=\"let log of data\">\n            {{log}}\n        </div>\n        <button type=\"reset\" class=\"btn btn-outline-primary pull-right\" (click)=\"view()\">Go back</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Forward Complaint\n    </div>\n    <div class=\"card-body\">\n        <form #complaintForwardForm=\"ngForm\" (ngSubmit)=\"forwardComplaint()\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': wid.invalid && wid.touched}\">Worker</label>\n                        <div class=\"col-sm-8\">\n                            <select #wid=\"ngModel\" [ngClass]=\"{'is-invalid': wid.invalid && wid.touched}\" required type=\"text\" [(ngModel)]=\"worker_id\" name=\"worker_id\" class=\"form-control\">\n                                <option *ngFor=\"let worker of workers\" value=\"{{worker.id}}\">\n                                    {{worker.name}}\n                                </option>\n                            </select>\n                            <!-- <input #wid=\"ngModel\" [ngClass]=\"{'is-invalid': wid.invalid && wid.touched}\" required type=\"text\" [(ngModel)]=\"worker_id\" name=\"worker_id\" class=\"form-control\"> -->\n                            <small class=\"invalid-feedback\">Worker is required</small>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': dm.invalid && dm.touched}\">Message</label>\n                        <div class=\"col-sm-8\">\n                            <input #dm=\"ngModel\" [ngClass]=\"{'is-invalid': dm.invalid && dm.touched}\" required type=\"text\" [(ngModel)]=\"deanMsg\" name=\"deanMsg\" class=\"form-control\">\n                            <small class=\"invalid-feedback\">Message is required</small>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item text-right\">\n                    <button type=\"reset\" class=\"btn btn-outline-primary mr-3\" (click)=\"view()\">Go back</button>\n                    <button [disabled]=\"complaintForwardForm.invalid\" type=\"submit\" class=\"btn btn-outline-success\" value=\"Submit\">Submit</button>\n                </li>\n            </ul>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Edit Complaint\n    </div>\n    <div class=\"card-body\">\n        <form #complaintModifyForm=\"ngForm\" (ngSubmit)=\"updateComplaint()\">\n            <ul class=\"list-group mx-2\">\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': subject.invalid && subject.touched}\">Title</label>\n                        <div class=\"col-sm-8\">\n                            <input #subject=\"ngModel\" [ngClass]=\"{'is-invalid': subject.invalid && subject.touched}\" class=\"form-control\" required type=\"text\" [(ngModel)]=\"title\" name=\"title\">\n                            <small class=\"invalid-feedback\">Title is required</small>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': cat.invalid && cat.touched}\">Category</label>\n                        <div class=\"col-sm-8\">\n                            <select #cat=\"ngModel\" [class.is-invalid]=\"cat.invalid && cat.touched\" required type=\"text\" [(ngModel)]=\"category\" class=\"form-control\" name=\"category\">\n                                <option *ngFor=\"let cat of categories\" value=\"{{cat}}\">{{cat}}</option>\n                            </select>\n                            <!-- <input #cat=\"ngModel\" [ngClass]=\"{'is-invalid': cat.invalid && cat.touched}\" required type=\"text\" [(ngModel)]=\"category\" name=\"category\" class=\"form-control\"> -->\n                            <small class=\"invalid-feedback\">Category is required</small>\n                        </div>\n                    </div>\n                </li>\n                <!-- <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': did.invalid && did.touched}\">Dean ID</label>\n                        <div class=\"col-sm-8\">\n                            <input #did=\"ngModel\" [ngClass]=\"{'is-invalid': did.invalid && did.touched}\" required type=\"text\" [(ngModel)]=\"dean_id\" name=\"dean_id\" class=\"form-control\">\n                            <small class=\"invalid-feedback\">Dean ID is required</small>\n                        </div>\n                    </div>\n                </li> -->\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': m.invalid && m.touched}\">Message</label>\n                        <div class=\"col-sm-8\">\n                            <input #m=\"ngModel\" [ngClass]=\"{'is-invalid': m.invalid && m.touched}\" required type=\"text\" [(ngModel)]=\"msg\" name=\"msg\" class=\"form-control\">\n                            <small class=\"invalid-feedback\">Message is required</small>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item text-right\">\n                    <button type=\"reset\" class=\"btn btn-outline-primary mr-3\" (click)=\"view()\">Go back</button>\n                    <button [disabled]=\"complaintModifyForm.invalid\" type=\"submit\" class=\"btn btn-outline-success\" value=\"Submit\">Submit</button>\n                </li>\n            </ul>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Response of Complaint\n    </div>\n    <div class=\"card-body\">\n        <form #complaintResponseForm=\"ngForm\" (ngSubmit)=\"responseComplaint()\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': wm.invalid && wm.touched}\">Message</label>\n                        <div class=\"col-sm-8\">\n                            <input #wm=\"ngModel\" [ngClass]=\"{'is-invalid': wm.invalid && wm.touched}\" required type=\"text\" [(ngModel)]=\"workerMsg\" name=\"workerMsg\" class=\"form-control\">\n                            <span class=\"invalid-feedback\">Message is required</span>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item text-right\">\n                    <button type=\"reset\" class=\"btn btn-outline-primary mr-3\" (click)=\"view()\">Go back</button>\n                    <button [disabled]=\"complaintResponseForm.invalid\" type=\"submit\" class=\"btn btn-outline-success\" value=\"Submit\">Submit</button>\n                </li>\n            </ul>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        Give Feedback\n    </div>\n    <div class=\"card-body\">\n        <form #complaintFeedbackForm=\"ngForm\" (ngSubmit)=\"usersFeedback()\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item py-1\">\n                    <div class=\"form-group row m-0\">\n                        <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': fb.invalid && fb.touched}\">Message</label>\n                        <div class=\"col-sm-8\">\n                            <input #fb=\"ngModel\" [ngClass]=\"{'is-invalid': fb.invalid && fb.touched}\" required type=\"text\" [(ngModel)]=\"userMsg\" name=\"userMsg\" class=\"form-control\">\n                            <div class=\"invalid-feedback\">Message is required</div>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"list-group-item text-right\">\n                    <button type=\"reset\" class=\"btn btn-outline-primary mr-3\" (click)=\"view()\">Go back</button>\n                    <button [disabled]=\"complaintFeedbackForm.invalid\" type=\"submit\" class=\"btn btn-outline-success\" value=\"Submit\">Submit</button>\n                </li>\n            </ul>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/view-complaint.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/view-complaint.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-complaint-details [data]=\"data\" *ngIf=\"displayView\" (displayModify)=\"showModify()\" (displayForward)=\"showForward()\" (displayResponse)=\"showResponse()\" (displayStatus)=\"showStatus()\" (displayFeedback)=\"showFeedback()\" (displayLog)=\"showLog()\"></app-complaint-details>\n<app-modify-complaint [data]=\"data\" *ngIf=\"displayModify\" (displayView)=\"showView()\"></app-modify-complaint>\n<app-forward-complaint *ngIf=\"displayForward\" (displayView)=\"showView()\"></app-forward-complaint>\n<app-response-complaint *ngIf=\"displayResponse\" (displayView)=\"showView()\"></app-response-complaint>\n<app-change-status *ngIf=\"displayStatus\" (displayView)=\"showView()\"></app-change-status>\n<app-send-feedback *ngIf=\"displayFeedback\" (displayView)=\"showView()\"></app-send-feedback>\n<app-complaint-log [data]=\"data.log\" *ngIf=\"displayLog\" (displayView)=\"showView()\"></app-complaint-log>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer p-0\">\n    <div class=\"container border-top border-primary\">\n        <p class=\"pt-2 mb-0\">&copy; 2020 | BGSBU</p>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded-0 px-3\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Holler Hark</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav m-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" href=\"https://www.bgsbu.ac.in\">BGSBU</a>\n            </li>\n            <ng-container *ngIf=\"userAuthService.ifAdmin(); else elseTemplate\">\n                <li *ngIf=\"userAuthService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                    <a class=\"nav-link\" [routerLink]=\"['/user/dashboard']\">Dashboard</a>\n                </li>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <li *ngIf=\"userAuthService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/dashboard']\">Dashboard</a>\n                </li>\n            </ng-template>\n            \n            <li *ngIf=\"userAuthService.loggedIn() && userAuthService.ifAdmin()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/complaint/register']\">Register Complaint</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngIf=\"userAuthService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/user/profile']\">Profile</a>\n            </li>\n            <li *ngIf=\"!userAuthService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/user/login']\">Log In</a>\n            </li>\n            <li *ngIf=\"!userAuthService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/user/register']\">Register</a>\n            </li>\n            <li *ngIf=\"userAuthService.loggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" (click)=\"logOut()\">Log Out</a>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n    <h2>Complaints registered by you:</h2>\n    <div class=\"card-deck text-center mt-5\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h1 class=\"m-2\">{{npy}}</h1>\n                </div>\n                <h5 class=\"card-title\">Not Processed Yet</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/Not Processed Yet&by']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h1 class=\"m-2\">{{ip}}</h1>\n                </div>\n                <h5 class=\"card-title\">In Progress</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/In Progress&by']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h1 class=\"m-2\">{{c}}</h1>\n                </div>\n                <h5 class=\"card-title\">Completed</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/Completed&by']\">View</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/dashboard.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/dashboard.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-between\">\n    <div class=\"col-md-9\">\n        <app-by-dashboard *ngIf=\"by\"></app-by-dashboard>\n        <app-under-dashboard *ngIf=\"under\"></app-under-dashboard>\n    </div>\n    <div *ngIf=\"show\" class=\"col-md-3 p-1\">\n        <button class=\"btn btn-primary\" (click)=\"viewBy()\">View Registered Complaints</button>\n        <button class=\"btn btn-primary\" (click)=\"viewUnder()\">View Complaints Under You</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n    <h2>Complaints registered under you:</h2>\n    <div class=\"card-deck text-center mt-5\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h1 class=\"m-2\">{{npy}}</h1>\n                </div>\n                <h5 class=\"card-title\">Not Processed Yet</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/Not Processed Yet&under']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h1 class=\"m-2\">{{ip}}</h1>\n                </div>\n                <h5 class=\"card-title\">In Progress</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/In Progress&under']\">View</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n                <div class=\"card-icon\">\n                    <h1 class=\"m-2\">{{c}}</h1>\n                </div>\n                <h5 class=\"card-title\">Completed</h5>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"stats ml-auto\">\n                    <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/complaint/list/Completed&under']\">View</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #loginForm=\"ngForm\" class=\"w-50 ml-auto pb-5\" (ngSubmit)=\"login()\">\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"email\" class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': em.valid || em.untouched, 'bg-danger': em.invalid && em.touched}\">Email</span>\n        </div>\n        <input #em=\"ngModel\" [ngClass]=\"{'is-invalid': em.invalid && em.touched}\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\">\n        <div class=\"invalid-feedback\">Email is required</div>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"password\" class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': pass.valid || pass.untouched, 'bg-danger': pass.invalid && pass.touched}\">Password</span>\n        </div>\n        <input #pass=\"ngModel\" [ngClass]=\"{'is-invalid': pass.invalid && pass.touched}\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\">\n        <div class=\"invalid-feedback\">Password must contain:\n            <ul>\n                <li>1 Uppercase</li>\n                <li>1 Lowercase</li>\n                <li>1 Number/Special Character</li>\n                <li>Minimum 8 Characters</li>\n            </ul>\n        </div>\n    </div>\n    <button [disabled]=\"loginForm.invalid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Submit\">Submit</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/change-password/change-password.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/change-password/change-password.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        <span class=\"nav-title\">Change Password</span>\n        <span href=\"#\" *ngIf=\"!show\" class=\"icon pull-right\" (click)=\"load()\">\n            <span class=\"material-icons md-3D\">create</span>\n        </span>\n    </div>\n    <div class=\"card-body\">\n        <form #changePasswordForm=\"ngForm\" (ngSubmit)=\"updatePassword()\">\n            <div *ngIf=\"show\">\n                <div class=\"form-group row m-0\">\n                    <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': pass.invalid && pass.touched}\">Old Password</label>\n                    <div class=\"col-sm-8\">\n                        <input #pass=\"ngModel\" [ngClass]=\"{'is-invalid': pass.invalid && pass.touched}\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" type=\"password\" [(ngModel)]=\"oldPassword\" name=\"oldPassword\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter your Old Password</small>\n                    </div>\n                </div>\n                <div class=\"form-group row m-0\">\n                    <label class=\"col-sm-4 col-form-label text-dark\" [ngClass]=\"{'text-danger': cpass.invalid && cpass.touched}\">New Password</label>\n                    <div class=\"col-sm-8\">\n                        <input #cpass=\"ngModel\" [ngClass]=\"{'is-invalid': cpass.invalid && cpass.touched}\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" type=\"password\" [(ngModel)]=\"newPassword\" name=\"newPassword\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Password must contain:\n                            <ul>\n                                <li>1 Uppercase</li>\n                                <li>1 Lowercase</li>\n                                <li>1 Number/Special Character</li>\n                                <li>Minimum 8 Characters</li>\n                            </ul>\n                        </small>\n                    </div>\n                </div>\n                <div *ngIf=\"show\" class=\"card-footer\">\n                    <button type=\"reset\" class=\"col-sm-4 btn btn-success ml-5\" value=\"Clear\" (click)=clear()>Clear</button>\n                    <button [disabled]=\"changePasswordForm.invalid\" type=\"submit\" class=\"col-sm-4 btn btn-primary mr-5\" value=\"Submit\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/modify-profile/modify-profile.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/modify-profile/modify-profile.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        <span class=\"nav-title\">Modify Profile</span>\n        <span href=\"#\" *ngIf=\"!show\" class=\"icon pull-right\" (click)=\"load()\">\n            <span class=\"material-icons md-3D\">create</span>\n        </span>\n    </div>\n    <div class=\"card-body\">\n        <form #userModifyForm=\"ngForm\" (ngSubmit)=\"updateProfile()\">\n            <div *ngIf=\"show\">\n                <div class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': nam.invalid && nam.touched}\">Full Name</label>\n                    <div class=\"col-sm-8\">\n                        <input #nam=\"ngModel\" [ngClass]=\"{'is-invalid': nam.invalid && nam.touched}\" required type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter your Full Name</small>\n                    </div>\n                </div>\n                <div *ngIf=\"user.rollno\" class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\">Roll Number</label>\n                    <div class=\"col-sm-8\">\n                        <input type=\"text\" readonly [(ngModel)]=\"rollno\" name=\"rollno\" class=\"form-control-plaintext\">\n                    </div>\n                </div>\n                <div class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': em.invalid && em.touched}\">Email</label>\n                    <div class=\"col-sm-8\">\n                        <input #em=\"ngModel\" [ngClass]=\"{'is-invalid': em.invalid && em.touched}\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter valid Email</small>\n                    </div>\n                </div>\n                <div class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': ph.invalid && ph.touched}\">Phone Number</label>\n                    <div class=\"col-sm-8\">\n                        <input #ph=\"ngModel\" [ngClass]=\"{'is-invalid': ph.invalid && ph.touched}\" required type=\"text\" [(ngModel)]=\"phoneno\" name=\"phoneno\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter valid Phone Number</small>\n                    </div>\n                </div>\n                <div *ngIf=\"user.school\" class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': sch.invalid && sch.touched}\">School</label>\n                    <div class=\"col-sm-8\">\n                        <input #sch=\"ngModel\" [ngClass]=\"{'is-invalid': nam.invalid && nam.touched}\" required type=\"text\" [(ngModel)]=\"school\" name=\"school\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter your School</small>\n                    </div>\n                </div>\n                <div *ngIf=\"user.dept\" class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': dep.invalid && dep.touched}\">Department</label>\n                    <div class=\"col-sm-8\">\n                        <input #dep=\"ngModel\" [ngClass]=\"{'is-invalid': dep.invalid && dep.touched}\" required type=\"text\" [(ngModel)]=\"dept\" name=\"dept\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter your Department</small>\n                    </div>\n                </div>\n                <div *ngIf=\"user.batch\" class=\"form-group row m-0\">\n                    <label class=\"col-sm-3 col-form-label text-dark\" [ngClass]=\"{'text-danger': bach.invalid && bach.touched}\">Batch</label>\n                    <div class=\"col-sm-8\">\n                        <input #bach=\"ngModel\" [ngClass]=\"{'is-invalid': bach.invalid && bach.touched}\" required type=\"text\" [(ngModel)]=\"batch\" name=\"batch\" class=\"form-control\">\n                        <small class=\"invalid-feedback\">Enter your Batch</small>\n                    </div>\n                </div>\n                <div *ngIf=\"show\" class=\"card-footer\">\n                    <button type=\"reset\" class=\"btn btn-success ml-5\" value=\"Clear\" (click)=clear()>Clear</button>\n                    <button [disabled]=\"userModifyForm.invalid\" type=\"submit\" class=\"btn btn-primary mr-5\" value=\"Submit\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/profile.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-between\">\n    <app-modify-profile class=\"col-md-6\" [user]=\"user\"></app-modify-profile>\n    <div class=\"col-md-5\">\n        <app-view-profile [user]=\"user\"></app-view-profile>\n        <br>\n        <app-change-password [id]=\"id\"></app-change-password>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/view-profile/view-profile.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/view-profile/view-profile.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"card\">\n    <div class=\"card-header card-header-primary\">\n        <span class=\"nav-title\">{{user.name}}</span>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"list-group list-group-flush\">\n            <li *ngIf=\"user.rollno\" class=\"list-group-item\">Roll Number : {{user.rollno}}</li>\n            <li class=\"list-group-item\">Email : {{user.email}}</li>\n            <li class=\"list-group-item\">Phone Number : {{user.phoneno}}</li>\n            <li *ngIf=\"user.school\" class=\"list-group-item\">School : {{user.school}}</li>\n            <li *ngIf=\"user.dept\" class=\"list-group-item\">Department : {{user.dept}}</li>\n            <li *ngIf=\"user.batch\" class=\"list-group-item\">Batch : {{user.batch}}</li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-register/user-register.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-register/user-register.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #userRegisterForm=\"ngForm\" class=\"w-50 ml-auto pb-5\" (ngSubmit)=\"register()\">\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"role\" class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': cr.valid || cr.untouched, 'bg-danger': cr.invalid && cr.touched}\">Profession</span>\n        </div>\n        <select #cr=\"ngModel\" [ngClass]=\"{'is-invalid': cr.invalid && cr.touched}\" required class=\"form-control\" name=\"role\" [(ngModel)]=\"role\" (change)=\"changeRole()\" required>\n            <option name=\"Student\">Student</option>\n            <option name=\"Teaching\">Teaching</option>\n            <option name=\"Non-Teaching\">Non-Teaching</option>\n        </select>\n        <small class=\"invalid-feedback\">Enter your Profession</small>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"name\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': nam.valid || nam.untouched, 'bg-danger': nam.invalid && nam.touched}\">Full Name</span>\n        </div>\n        <input #nam=\"ngModel\" [ngClass]=\"{'is-invalid': nam.invalid && nam.touched}\" required type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\">\n        <small class=\"invalid-feedback\">Enter your Full Name</small>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"email\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': em.valid || em.untouched, 'bg-danger': em.invalid && em.touched}\">Email</span>\n        </div>\n        <input #em=\"ngModel\" [ngClass]=\"{'is-invalid': em.invalid && em.touched}\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" value=\"email@example.com\" name=\"email\">\n        <small class=\"invalid-feedback\">Enter valid Email</small>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"phoneno\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': ph.valid || ph.untouched, 'bg-danger': ph.invalid && ph.touched}\">Phone No.</span>\n        </div>\n        <input #ph=\"ngModel\" [ngClass]=\"{'is-invalid': ph.invalid && ph.touched}\" required pattern=\"[0-9]{10}\" type=\"tel\" [(ngModel)]=\"phoneno\" class=\"form-control\" name=\"phoneno\">\n        <small class=\"invalid-feedback\">Enter valid Phone Number</small>\n    </div>\n    <div *ngIf=\"show\" class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"rollno\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': rn.valid || rn.untouched, 'bg-danger': rn.invalid && rn.touched}\">Roll No.</span>\n        </div>\n        <input #rn=\"ngModel\" [ngClass]=\"{'is-invalid': rn.invalid && rn.touched}\" required type=\"text\" [(ngModel)]=\"rollno\" class=\"form-control\" name=\"rollno\">\n        <small class=\"invalid-feedback\">Enter your Roll Number</small>\n    </div>\n    <div *ngIf=\"showSchool\" class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"school\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': schl.valid || schl.untouched, 'bg-danger': schl.invalid && schl.touched}\">School</span>\n        </div>\n        <input #schl=\"ngModel\" [ngClass]=\"{'is-invalid': schl.invalid && schl.touched}\" required type=\"text\" [(ngModel)]=\"school\" class=\"form-control\" name=\"school\">\n        <small class=\"invalid-feedback\">Enter your School</small>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"dept\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': dep.valid || dep.untouched, 'bg-danger': dep.invalid && dep.touched}\">Department</span>\n        </div>\n        <input #dep=\"ngModel\" [ngClass]=\"{'is-invalid': dep.invalid && dep.touched}\" required type=\"text\" [(ngModel)]=\"dept\" class=\"form-control\" name=\"dept\">\n        <small class=\"invalid-feedback\">Enter your Department</small>\n    </div>\n    <div *ngIf=\"show\" class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"batch\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': bach.valid || bach.untouched, 'bg-danger': bach.invalid && bach.touched}\">Batch</span>\n        </div>\n        <input #bach=\"ngModel\" [ngClass]=\"{'is-invalid': bach.invalid && bach.touched}\" required type=\"number\" [(ngModel)]=\"batch\" class=\"form-control\" name=\"batch\">\n        <small class=\"invalid-feedback\">Enter your Batch</small>\n    </div>\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span for=\"password\"  class=\"input-group-text text-white mr-1 rounded-left\" [ngClass]=\"{'bg-primary': pass.valid || pass.untouched, 'bg-danger': pass.invalid && pass.touched}\">Password</span>\n        </div>\n        <input #pass=\"ngModel\" [ngClass]=\"{'is-invalid': pass.invalid && pass.touched}\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\">\n        <small class=\"invalid-feedback\">Password must contain:\n            <ul>\n                <li>1 Uppercase</li>\n                <li>1 Lowercase</li>\n                <li>1 Number/Special Character</li>\n                <li>Minimum 8 Characters</li>\n            </ul>\n        </small>\n    </div>\n    <button [disabled]=\"userRegisterForm.invalid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Submit\">Submit</button>\n</form>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/user-register/user-register.component */ "./src/app/components/users/user-register/user-register.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_users_profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/profile/view-profile/view-profile.component */ "./src/app/components/users/profile/view-profile/view-profile.component.ts");
/* harmony import */ var _components_users_profile_modify_profile_modify_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/users/profile/modify-profile/modify-profile.component */ "./src/app/components/users/profile/modify-profile/modify-profile.component.ts");
/* harmony import */ var _components_users_profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/users/profile/change-password/change-password.component */ "./src/app/components/users/profile/change-password/change-password.component.ts");
/* harmony import */ var _components_complaints_complaint_register_complaint_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/complaints/complaint-register/complaint-register.component */ "./src/app/components/complaints/complaint-register/complaint-register.component.ts");
/* harmony import */ var _components_users_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/users/dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var _components_users_dashboard_by_dashboard_by_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/dashboard/by-dashboard/by-dashboard.component */ "./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.ts");
/* harmony import */ var _components_users_dashboard_under_dashboard_under_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users/dashboard/under-dashboard/under-dashboard.component */ "./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.ts");
/* harmony import */ var _components_complaints_view_complaint_list_view_complaint_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/complaints/view-complaint-list/view-complaint-list.component */ "./src/app/components/complaints/view-complaint-list/view-complaint-list.component.ts");
/* harmony import */ var _components_complaints_view_complaint_view_complaint_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/complaints/view-complaint/view-complaint.component */ "./src/app/components/complaints/view-complaint/view-complaint.component.ts");
/* harmony import */ var _components_complaints_view_complaint_complaint_details_complaint_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/complaints/view-complaint/complaint-details/complaint-details.component */ "./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.ts");
/* harmony import */ var _components_complaints_view_complaint_modify_complaint_modify_complaint_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/complaints/view-complaint/modify-complaint/modify-complaint.component */ "./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.ts");
/* harmony import */ var _components_complaints_view_complaint_forward_complaint_forward_complaint_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/complaints/view-complaint/forward-complaint/forward-complaint.component */ "./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.ts");
/* harmony import */ var _components_complaints_view_complaint_response_complaint_response_complaint_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/complaints/view-complaint/response-complaint/response-complaint.component */ "./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.ts");
/* harmony import */ var _components_complaints_view_complaint_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/complaints/view-complaint/change-status/change-status.component */ "./src/app/components/complaints/view-complaint/change-status/change-status.component.ts");
/* harmony import */ var _components_complaints_view_complaint_send_feedback_send_feedback_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/complaints/view-complaint/send-feedback/send-feedback.component */ "./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.ts");
/* harmony import */ var _components_complaints_view_complaint_complaint_log_complaint_log_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/complaints/view-complaint/complaint-log/complaint-log.component */ "./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.ts");
/* harmony import */ var _components_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin/admin-dashboard/admin-dashboard.component */ "./src/app/components/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _components_admin_admin_dashboard_total_complaints_total_complaints_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/admin/admin-dashboard/total-complaints/total-complaints.component */ "./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.ts");
/* harmony import */ var _components_admin_admin_dashboard_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/admin/admin-dashboard/total-users/total-users.component */ "./src/app/components/admin/admin-dashboard/total-users/total-users.component.ts");
/* harmony import */ var _components_admin_admin_dashboard_category_category_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/admin-dashboard/category/category.component */ "./src/app/components/admin/admin-dashboard/category/category.component.ts");
/* harmony import */ var _components_admin_admin_dashboard_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/admin/admin-dashboard/category/add-category/add-category.component */ "./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.ts");
/* harmony import */ var _components_admin_admin_dashboard_category_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/admin/admin-dashboard/category/view-categories/view-categories.component */ "./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.ts");
/* harmony import */ var _components_admin_view_user_list_view_user_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin/view-user-list/view-user-list.component */ "./src/app/components/admin/view-user-list/view-user-list.component.ts");
/* harmony import */ var _components_admin_view_user_details_view_user_details_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin/view-user-details/view-user-details.component */ "./src/app/components/admin/view-user-details/view-user-details.component.ts");
/* harmony import */ var _components_admin_dean_register_dean_register_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/admin/dean-register/dean-register.component */ "./src/app/components/admin/dean-register/dean-register.component.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_42__);











































const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'user/register', component: _components_users_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_11__["UserRegisterComponent"] },
    { path: 'user/login', component: _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'user/profile', component: _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'user/dashboard', component: _components_users_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'admin/dashboard', component: _components_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["AdminDashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'admin/userList/:role', component: _components_admin_view_user_list_view_user_list_component__WEBPACK_IMPORTED_MODULE_35__["ViewUserListComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'admin/user/:id', component: _components_admin_view_user_details_view_user_details_component__WEBPACK_IMPORTED_MODULE_36__["ViewUserDetailsComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'admin/dean/register', component: _components_admin_dean_register_dean_register_component__WEBPACK_IMPORTED_MODULE_37__["DeanRegisterComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'complaint/register', component: _components_complaints_complaint_register_complaint_register_component__WEBPACK_IMPORTED_MODULE_16__["ComplaintRegisterComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'complaint/list/:params', component: _components_complaints_view_complaint_list_view_complaint_list_component__WEBPACK_IMPORTED_MODULE_20__["ViewComplaintListComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: 'complaint/view/:id', component: _components_complaints_view_complaint_view_complaint_component__WEBPACK_IMPORTED_MODULE_21__["ViewComplaintComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]] },
    { path: '**', redirectTo: '/' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_users_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_11__["UserRegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _components_users_profile_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_13__["ViewProfileComponent"],
            _components_users_profile_modify_profile_modify_profile_component__WEBPACK_IMPORTED_MODULE_14__["ModifyProfileComponent"],
            _components_users_profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
            _components_complaints_complaint_register_complaint_register_component__WEBPACK_IMPORTED_MODULE_16__["ComplaintRegisterComponent"],
            _components_users_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
            _components_users_dashboard_by_dashboard_by_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["ByDashboardComponent"],
            _components_users_dashboard_under_dashboard_under_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["UnderDashboardComponent"],
            _components_complaints_view_complaint_list_view_complaint_list_component__WEBPACK_IMPORTED_MODULE_20__["ViewComplaintListComponent"],
            _components_complaints_view_complaint_view_complaint_component__WEBPACK_IMPORTED_MODULE_21__["ViewComplaintComponent"],
            _components_complaints_view_complaint_complaint_details_complaint_details_component__WEBPACK_IMPORTED_MODULE_22__["ComplaintDetailsComponent"],
            _components_complaints_view_complaint_modify_complaint_modify_complaint_component__WEBPACK_IMPORTED_MODULE_23__["ModifyComplaintComponent"],
            _components_complaints_view_complaint_forward_complaint_forward_complaint_component__WEBPACK_IMPORTED_MODULE_24__["ForwardComplaintComponent"],
            _components_complaints_view_complaint_response_complaint_response_complaint_component__WEBPACK_IMPORTED_MODULE_25__["ResponseComplaintComponent"],
            _components_complaints_view_complaint_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_26__["ChangeStatusComponent"],
            _components_complaints_view_complaint_send_feedback_send_feedback_component__WEBPACK_IMPORTED_MODULE_27__["SendFeedbackComponent"],
            _components_complaints_view_complaint_complaint_log_complaint_log_component__WEBPACK_IMPORTED_MODULE_28__["ComplaintLogComponent"],
            _components_admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["AdminDashboardComponent"],
            _components_admin_admin_dashboard_total_complaints_total_complaints_component__WEBPACK_IMPORTED_MODULE_30__["TotalComplaintsComponent"],
            _components_admin_admin_dashboard_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_31__["TotalUsersComponent"],
            _components_admin_admin_dashboard_category_category_component__WEBPACK_IMPORTED_MODULE_32__["CategoryComponent"],
            _components_admin_admin_dashboard_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_33__["AddCategoryComponent"],
            _components_admin_admin_dashboard_category_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_34__["ViewCategoriesComponent"],
            _components_admin_view_user_list_view_user_list_component__WEBPACK_IMPORTED_MODULE_35__["ViewUserListComponent"],
            _components_admin_view_user_details_view_user_details_component__WEBPACK_IMPORTED_MODULE_36__["ViewUserDetailsComponent"],
            _components_admin_dean_register_dean_register_component__WEBPACK_IMPORTED_MODULE_37__["DeanRegisterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_42__["NgFlashMessagesModule"].forRoot()
        ],
        providers: [
            _services_validation_service__WEBPACK_IMPORTED_MODULE_38__["ValidationService"],
            _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_39__["ComplaintAuthService"],
            _services_user_auth_service__WEBPACK_IMPORTED_MODULE_40__["UserAuthService"],
            _guard_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/admin-dashboard.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/admin-dashboard.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/admin-dashboard.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminDashboardComponent = class AdminDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/admin-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/components/admin/admin-dashboard/admin-dashboard.component.css")).default]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let AddCategoryComponent = class AddCategoryComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
        this.userAuthService.getDeanID().subscribe((data) => {
            if (data.success) {
                this.des = data.de;
            }
            else {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: false,
                    timeout: 3000,
                    type: 'danger'
                });
                this.router.navigate(['/complaint/register']);
            }
        });
    }
    addCategory() {
        const cat = {
            dean_id: this.dean_id,
            category: this.category
        };
        this.userAuthService.addCategory(cat).subscribe((data) => {
            if (data.success) {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/admin/dashboard']));
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/dashboard']);
                }
            }
        });
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-category.component.css */ "./src/app/components/admin/admin-dashboard/category/add-category/add-category.component.css")).default]
    })
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/category/category.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/category/category.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/category/category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/category/category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryComponent = class CategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/components/admin/admin-dashboard/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.css ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3J5L3ZpZXctY2F0ZWdvcmllcy92aWV3LWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ViewCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoriesComponent", function() { return ViewCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ViewCategoriesComponent = class ViewCategoriesComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
        this.userAuthService.getCategories().subscribe((data) => {
            if (data.success) {
                let op = [], k = 0;
                for (let i = 0; i < data.de.length; i++) {
                    if (data.cat[i]) {
                        for (let j = 0; j < data.cat[i].length; j++) {
                            let de = data.de[i];
                            let cat = data.cat[i][j];
                            op[k] = { i: k + 1, de, cat };
                            k++;
                        }
                    }
                }
                this.op = op;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/dashboard']);
                }
            }
        });
    }
};
ViewCategoriesComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
ViewCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-categories.component.css */ "./src/app/components/admin/admin-dashboard/category/view-categories/view-categories.component.css")).default]
    })
], ViewCategoriesComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3RvdGFsLWNvbXBsYWludHMvdG90YWwtY29tcGxhaW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TotalComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalComplaintsComponent", function() { return TotalComplaintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let TotalComplaintsComponent = class TotalComplaintsComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
        this.userAuthService.getAllComplaints().subscribe((data) => {
            if (data.success) {
                this.npy = data.npy;
                this.ip = data.ip;
                this.c = data.c;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/dashboard']);
                }
            }
        });
    }
};
TotalComplaintsComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
TotalComplaintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-complaints',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./total-complaints.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./total-complaints.component.css */ "./src/app/components/admin/admin-dashboard/total-complaints/total-complaints.component.css")).default]
    })
], TotalComplaintsComponent);



/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/total-users/total-users.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/total-users/total-users.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3RvdGFsLXVzZXJzL3RvdGFsLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/admin/admin-dashboard/total-users/total-users.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard/total-users/total-users.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TotalUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalUsersComponent", function() { return TotalUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let TotalUsersComponent = class TotalUsersComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
        this.userAuthService.getAllUsers().subscribe((data) => {
            if (data.success) {
                this.st = data.st;
                this.teach = data.teach;
                this.nont = data.nont;
                this.de = data.de;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/dashboard']);
                }
            }
        });
    }
};
TotalUsersComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
TotalUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./total-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-dashboard/total-users/total-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./total-users.component.css */ "./src/app/components/admin/admin-dashboard/total-users/total-users.component.css")).default]
    })
], TotalUsersComponent);



/***/ }),

/***/ "./src/app/components/admin/dean-register/dean-register.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/dean-register/dean-register.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZGVhbi1yZWdpc3Rlci9kZWFuLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/admin/dean-register/dean-register.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/dean-register/dean-register.component.ts ***!
  \***************************************************************************/
/*! exports provided: DeanRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeanRegisterComponent", function() { return DeanRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let DeanRegisterComponent = class DeanRegisterComponent {
    constructor(validationService, userAuthService, router, ngFlashMessageService) {
        this.validationService = validationService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
    }
    register() {
        const user = {
            name: this.name,
            email: this.email,
            phoneno: this.phoneno,
            school: this.school,
            password: this.password,
            role: 'Dean'
        };
        if (!this.validationService.validateRegister(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please fill in all the fields'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/admin/dean/register']);
        }
        else if (!this.validationService.validateEmail(user.email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Enter a valid Email'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/admin/dean/register']);
        }
        else {
            this.userAuthService.registerUser(user).subscribe((data) => {
                if (data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'success'
                    });
                    this.router.navigate(['/admin/dashboard']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/dean/register']);
                }
            });
        }
    }
};
DeanRegisterComponent.ctorParameters = () => [
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] }
];
DeanRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dean-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dean-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/dean-register/dean-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dean-register.component.css */ "./src/app/components/admin/dean-register/dean-register.component.css")).default]
    })
], DeanRegisterComponent);



/***/ }),

/***/ "./src/app/components/admin/view-user-details/view-user-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin/view-user-details/view-user-details.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vdmlldy11c2VyLWRldGFpbHMvdmlldy11c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin/view-user-details/view-user-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/view-user-details/view-user-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserDetailsComponent", function() { return ViewUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ViewUserDetailsComponent = class ViewUserDetailsComponent {
    constructor(userAuthService, router, ngFlashMessageService, route) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.userAuthService.getUserDetails(this.id).subscribe((data) => {
            if (data.success) {
                this.user = data.user;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/user/' + this.id]);
                }
            }
        });
    }
};
ViewUserDetailsComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-user-details/view-user-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-user-details.component.css */ "./src/app/components/admin/view-user-details/view-user-details.component.css")).default]
    })
], ViewUserDetailsComponent);



/***/ }),

/***/ "./src/app/components/admin/view-user-list/view-user-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/view-user-list/view-user-list.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vdmlldy11c2VyLWxpc3Qvdmlldy11c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin/view-user-list/view-user-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/view-user-list/view-user-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserListComponent", function() { return ViewUserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ViewUserListComponent = class ViewUserListComponent {
    constructor(userAuthService, router, ngFlashMessageService, route) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
    }
    ngOnInit() {
        this.role = this.route.snapshot.paramMap.get('role');
        this.userAuthService.adminViewUserList(this.role).subscribe((data) => {
            if (data.success) {
                this.users = data.users;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/admin/userList' + this.role]);
                }
            }
        });
    }
    load(us) {
        let id = us.getAttribute('id');
        this.router.navigate(['/admin/user/' + id]);
    }
};
ViewUserListComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/view-user-list/view-user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-user-list.component.css */ "./src/app/components/admin/view-user-list/view-user-list.component.css")).default]
    })
], ViewUserListComponent);



/***/ }),

/***/ "./src/app/components/complaints/complaint-register/complaint-register.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/complaints/complaint-register/complaint-register.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy9jb21wbGFpbnQtcmVnaXN0ZXIvY29tcGxhaW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/complaints/complaint-register/complaint-register.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/complaints/complaint-register/complaint-register.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComplaintRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintRegisterComponent", function() { return ComplaintRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);







let ComplaintRegisterComponent = class ComplaintRegisterComponent {
    constructor(validationService, complaintAuthService, userAuthService, router, ngFlashMessageService) {
        this.validationService = validationService;
        this.complaintAuthService = complaintAuthService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.registeredDate = Date().substring(0, 24);
    }
    ngOnInit() {
        if (this.userAuthService.ifAdmin()) {
            this.userAuthService.getCatDean().subscribe((data) => {
                if (data.success) {
                    let temp = [], k = 0;
                    for (let i = 0; i < data.cat.length; i++) {
                        for (let j = 0; j < data.cat[i].length; j++) {
                            temp[k] = data.cat[i][j];
                            k++;
                        }
                    }
                    this.categories = temp;
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/complaint/register']);
                }
            });
        }
        else {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['You are not Authorized'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/']);
        }
    }
    registerComplaint() {
        let complaint = {};
        this.userAuthService.getUserID().subscribe((data) => {
            complaint = {
                title: this.title,
                category: this.category,
                msg: this.msg
            };
            if (!this.validationService.validateRegisterComplaint(complaint)) {
                this.ngFlashMessageService.showFlashMessage({
                    messages: ['Please fill in all the fields'],
                    dismissible: false,
                    timeout: 3000,
                    type: 'danger'
                });
                this.router.navigate(['/complaint/register']);
            }
            else {
                this.complaintAuthService.registerComplaint(complaint).subscribe((data) => {
                    if (!data.success) {
                        if (data.unauth) {
                            this.ngFlashMessageService.showFlashMessage({
                                messages: [data.msg],
                                dismissible: false,
                                timeout: 3000,
                                type: 'danger'
                            });
                            this.router.navigate(['/']);
                        }
                        else {
                            this.ngFlashMessageService.showFlashMessage({
                                messages: [data.msg],
                                dismissible: false,
                                timeout: 3000,
                                type: 'danger'
                            });
                            this.router.navigate(['/complaint/register']);
                        }
                    }
                    else {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'success'
                        });
                        this.router.navigate(['/user/dashboard']);
                    }
                });
            }
        });
    }
};
ComplaintRegisterComponent.ctorParameters = () => [
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] },
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintAuthService"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessageService"] }
];
ComplaintRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaint-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complaint-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/complaint-register/complaint-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complaint-register.component.css */ "./src/app/components/complaints/complaint-register/complaint-register.component.css")).default]
    })
], ComplaintRegisterComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint-list/view-complaint-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint-list/view-complaint-list.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC1saXN0L3ZpZXctY29tcGxhaW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint-list/view-complaint-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint-list/view-complaint-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewComplaintListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComplaintListComponent", function() { return ViewComplaintListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ViewComplaintListComponent = class ViewComplaintListComponent {
    constructor(complaintAuthService, router, ngFlashMessageService, route) {
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
    }
    ngOnInit() {
        this.params = (this.route.snapshot.paramMap.get('params')).split('&');
        if (this.params[1] == 'by') {
            this.complaintAuthService.viewByComplaintList(this.params[0]).subscribe((data) => {
                if (data.success) {
                    this.complaint = data.complaints;
                }
                else {
                    if (data.unauth) {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'danger'
                        });
                        this.router.navigate(['/']);
                    }
                    else {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'danger'
                        });
                        this.router.navigate(['complaint/list/' + this.route.snapshot.paramMap.get('params')]);
                    }
                }
            });
        }
        else if (this.params[1] == 'under') {
            this.complaintAuthService.viewUnderComplaintList(this.params[0]).subscribe((data) => {
                if (data.success) {
                    this.complaint = data.complaints;
                }
                else {
                    if (data.unauth) {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'danger'
                        });
                        this.router.navigate(['/']);
                    }
                    else {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'danger'
                        });
                        this.router.navigate(['complaint/list/' + this.route.snapshot.paramMap.get('params')]);
                    }
                }
            });
        }
        else {
            this.complaintAuthService.adminViewComplaintList(this.params[0]).subscribe((data) => {
                if (data.success) {
                    this.complaint = data.comp;
                }
                else {
                    if (data.unauth) {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'danger'
                        });
                        this.router.navigate(['/']);
                    }
                    else {
                        this.ngFlashMessageService.showFlashMessage({
                            messages: [data.msg],
                            dismissible: false,
                            timeout: 3000,
                            type: 'danger'
                        });
                        this.router.navigate(['complaint/list/' + this.route.snapshot.paramMap.get('params')]);
                    }
                }
            });
        }
    }
    load(c) {
        let id = c.getAttribute('id');
        this.router.navigate(['complaint/view/', id]);
    }
};
ViewComplaintListComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewComplaintListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-complaint-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-complaint-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint-list/view-complaint-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-complaint-list.component.css */ "./src/app/components/complaints/view-complaint-list/view-complaint-list.component.css")).default]
    })
], ViewComplaintListComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/change-status/change-status.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/change-status/change-status.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9jaGFuZ2Utc3RhdHVzL2NoYW5nZS1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/change-status/change-status.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/change-status/change-status.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChangeStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStatusComponent", function() { return ChangeStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let ChangeStatusComponent = class ChangeStatusComponent {
    constructor(complaintAuthService, router, ngFlashMessageService, route, validationService) {
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.validationService = validationService;
        this.displayView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
    }
    view() {
        this.displayView.emit();
    }
    changeStatus() {
        const complaint = {
            newStatus: this.newStatus
        };
        this.complaintAuthService.changeStatus(complaint, this.id).subscribe((data) => {
            if (!data.success) {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: false,
                    timeout: 3000,
                    type: 'danger'
                });
                this.router.navigate(['/complaint/view/' + this.id]);
            }
            else {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: false,
                    timeout: 3000,
                    type: 'success'
                });
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/complaint/view/' + this.id]));
                this.displayView.emit();
            }
        });
    }
};
ChangeStatusComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChangeStatusComponent.prototype, "displayView", void 0);
ChangeStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/change-status/change-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-status.component.css */ "./src/app/components/complaints/view-complaint/change-status/change-status.component.css")).default]
    })
], ChangeStatusComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9jb21wbGFpbnQtZGV0YWlscy9jb21wbGFpbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ComplaintDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintDetailsComponent", function() { return ComplaintDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let ComplaintDetailsComponent = class ComplaintDetailsComponent {
    constructor(userAuthService, complaintAuthService, router, route, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.route = route;
        this.ngFlashMessageService = ngFlashMessageService;
        this.displayModify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayForward = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayFeedback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayLog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showBtnEdit = false;
        this.showBtnDelete = false;
        this.showBtnForward = false;
        this.showBtnResponse = false;
        this.showBtnStatus = false;
        this.showBtnFeedback = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.userAuthService.getUserID().subscribe((data) => {
            if (this.data.user_id == data.id) {
                if (this.data.status == 'Not Processed Yet') {
                    this.showBtnEdit = true;
                    this.showBtnDelete = true;
                }
                else if (this.data.status == 'Completed') {
                    this.showBtnFeedback = true;
                }
            }
            else if (this.data.worker_id == data.id && this.data.status != 'Completed') {
                this.showBtnResponse = true;
            }
            else if (this.data.dean_id == data.id) {
                if (this.data.status != 'Completed') {
                    this.showBtnForward = true;
                }
                this.showBtnStatus = true;
            }
        });
        if (this.data) {
            this.userAuthService.getUserName(this.data.dean_id).subscribe((data) => {
                this.dean_id = data.name;
            });
            if (this.data.worker_id != 'Not Forwarded Yet') {
                this.userAuthService.getUserName(this.data.worker_id).subscribe((data) => {
                    this.worker_id = data.name;
                });
            }
            else {
                this.worker_id = this.data.worker_id;
            }
            if (this.data.user_id) {
                this.userAuthService.getUserName(this.data.user_id).subscribe((data) => {
                    this.user_id = data.name;
                });
            }
            else {
                this.worker_id = this.data.worker_id;
            }
            this.title = this.data.title;
            this.category = this.data.category;
            this.status = this.data.status;
            this.deanMsg = this.data.deanMsg;
            this.workerMsg = this.data.workerMsg;
            this.userMsg = this.data.userMsg;
            this.msg = this.data.msg;
            this.registeredDate = this.data.registeredDate;
            this.completedDate = this.data.completedDate;
        }
    }
    modify() {
        this.displayModify.emit();
    }
    forward() {
        this.displayForward.emit();
    }
    response() {
        this.displayResponse.emit();
    }
    changeStatus() {
        this.displayStatus.emit();
    }
    sendFeedback() {
        this.displayFeedback.emit();
    }
    log() {
        this.displayLog.emit();
    }
    delete() {
        if (confirm("Do you want to delete it?")) {
            this.complaintAuthService.deleteComplaint(this.id).subscribe((data) => {
                // console.log(data);
                if (data.success) {
                    alert(data.msg);
                    // this.ngFlashMessageService.showFlashMessage({
                    //   messages: [data.msg], 
                    //   dismissible: false,
                    //   timeout: 3000,
                    //   type: 'success'
                    // });
                    // window.location.replace('/user/dashboard');
                    location.assign('/user/dashboard');
                    // this.router.navigate(['/user/dashboard']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                }
                this.router.navigate(['/complaint/view/' + this.id]);
            });
        }
    }
};
ComplaintDetailsComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComplaintDetailsComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintDetailsComponent.prototype, "displayModify", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintDetailsComponent.prototype, "displayForward", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintDetailsComponent.prototype, "displayResponse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintDetailsComponent.prototype, "displayStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintDetailsComponent.prototype, "displayFeedback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintDetailsComponent.prototype, "displayLog", void 0);
ComplaintDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaint-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complaint-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complaint-details.component.css */ "./src/app/components/complaints/view-complaint/complaint-details/complaint-details.component.css")).default]
    })
], ComplaintDetailsComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9jb21wbGFpbnQtbG9nL2NvbXBsYWludC1sb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComplaintLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintLogComponent", function() { return ComplaintLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ComplaintLogComponent = class ComplaintLogComponent {
    constructor(complaintAuthService, router, ngFlashMessageService, route) {
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.displayView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    view() {
        this.displayView.emit();
    }
};
ComplaintLogComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComplaintLogComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComplaintLogComponent.prototype, "displayView", void 0);
ComplaintLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaint-log',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complaint-log.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complaint-log.component.css */ "./src/app/components/complaints/view-complaint/complaint-log/complaint-log.component.css")).default]
    })
], ComplaintLogComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9mb3J3YXJkLWNvbXBsYWludC9mb3J3YXJkLWNvbXBsYWludC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ForwardComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardComplaintComponent", function() { return ForwardComplaintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);







let ForwardComplaintComponent = class ForwardComplaintComponent {
    constructor(complaintAuthService, userAuthService, router, ngFlashMessageService, route, validationService) {
        this.complaintAuthService = complaintAuthService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.validationService = validationService;
        this.displayView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.userAuthService.getWorkerNameID().subscribe((data) => {
            if (data.success) {
                this.workers = data.users;
            }
            else {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: false,
                    timeout: 3000,
                    type: 'danger'
                });
                this.router.navigate(['/complaint/view/' + this.id]);
            }
        });
    }
    view() {
        this.displayView.emit();
    }
    forwardComplaint() {
        const complaint = {
            worker_id: this.worker_id,
            deanMsg: this.deanMsg
        };
        console.log(complaint);
        if (!this.validationService.validateForwardComplaint(complaint)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Fill in all the fields"],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/complaint/view/' + this.id]);
        }
        else {
            this.complaintAuthService.forwardComplaint(complaint, this.id).subscribe((data) => {
                if (!data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/complaint/view/' + this.id]);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'success'
                    });
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/complaint/view/' + this.id]));
                    this.displayView.emit();
                }
                return false;
            });
        }
    }
};
ForwardComplaintComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ForwardComplaintComponent.prototype, "displayView", void 0);
ForwardComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forward-complaint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forward-complaint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forward-complaint.component.css */ "./src/app/components/complaints/view-complaint/forward-complaint/forward-complaint.component.css")).default]
    })
], ForwardComplaintComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9tb2RpZnktY29tcGxhaW50L21vZGlmeS1jb21wbGFpbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ModifyComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyComplaintComponent", function() { return ModifyComplaintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);







let ModifyComplaintComponent = class ModifyComplaintComponent {
    constructor(userAuthService, complaintAuthService, validationService, router, ngFlashMessageService, route) {
        this.userAuthService = userAuthService;
        this.complaintAuthService = complaintAuthService;
        this.validationService = validationService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.displayView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.data) {
            this.userAuthService.getCatDean().subscribe((data) => {
                if (data.success) {
                    let temp = [], k = 0;
                    for (let i = 0; i < data.cat.length; i++) {
                        for (let j = 0; j < data.cat[i].length; j++) {
                            temp[k] = data.cat[i][j];
                            k++;
                        }
                    }
                    this.categories = temp;
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/complaint/register']);
                }
            });
            this.title = this.data.title;
            this.category = this.data.category;
            this.msg = this.data.msg;
        }
    }
    view() {
        this.displayView.emit();
    }
    updateComplaint() {
        const complaint = {
            title: this.title,
            category: this.category,
            msg: this.msg
        };
        if (!this.validationService.validateRegisterComplaint(complaint)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please fill in all the fields'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/complaint/view/' + this.id]);
        }
        else {
            this.complaintAuthService.modifyComplaint(complaint, this.id).subscribe((data) => {
                if (data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'success'
                    });
                    // this.router.navigate(['/complaint/view/' + this.id]);
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/complaint/view/' + this.id]));
                    this.displayView.emit();
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                }
                this.router.navigate(['/complaint/view/' + this.id]);
            });
        }
    }
};
ModifyComplaintComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintAuthService"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModifyComplaintComponent.prototype, "displayView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModifyComplaintComponent.prototype, "data", void 0);
ModifyComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-complaint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-complaint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-complaint.component.css */ "./src/app/components/complaints/view-complaint/modify-complaint/modify-complaint.component.css")).default]
    })
], ModifyComplaintComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9yZXNwb25zZS1jb21wbGFpbnQvcmVzcG9uc2UtY29tcGxhaW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ResponseComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComplaintComponent", function() { return ResponseComplaintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let ResponseComplaintComponent = class ResponseComplaintComponent {
    constructor(complaintAuthService, router, ngFlashMessageService, route, validationService) {
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.validationService = validationService;
        this.displayView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
    }
    view() {
        this.displayView.emit();
    }
    responseComplaint() {
        const complaint = {
            workerMsg: this.workerMsg
        };
        if (!this.validationService.validateResponseComplaint(complaint)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Fill all the fields"],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/complaint/view/' + this.id]);
        }
        else {
            this.complaintAuthService.responseComplaint(complaint, this.id).subscribe((data) => {
                if (!data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/complaint/view/' + this.id]);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'success'
                    });
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/complaint/view/' + this.id]));
                    this.displayView.emit();
                }
            });
        }
    }
};
ResponseComplaintComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResponseComplaintComponent.prototype, "displayView", void 0);
ResponseComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-response-complaint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./response-complaint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./response-complaint.component.css */ "./src/app/components/complaints/view-complaint/response-complaint/response-complaint.component.css")).default]
    })
], ResponseComplaintComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC9zZW5kLWZlZWRiYWNrL3NlbmQtZmVlZGJhY2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SendFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFeedbackComponent", function() { return SendFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let SendFeedbackComponent = class SendFeedbackComponent {
    constructor(complaintAuthService, router, ngFlashMessageService, route, validationService) {
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.validationService = validationService;
        this.displayView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
    }
    view() {
        this.displayView.emit();
    }
    usersFeedback() {
        const complaint = {
            userMsg: this.userMsg
        };
        this.complaintAuthService.userFeedback(complaint, this.id).subscribe((data) => {
            if (!data.success) {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: false,
                    timeout: 3000,
                    type: 'danger'
                });
                this.router.navigate(['/complaint/view/' + this.id]);
            }
            else {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: false,
                    timeout: 3000,
                    type: 'success'
                });
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/complaint/view/' + this.id]));
                this.displayView.emit();
            }
        });
    }
};
SendFeedbackComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SendFeedbackComponent.prototype, "displayView", void 0);
SendFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./send-feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./send-feedback.component.css */ "./src/app/components/complaints/view-complaint/send-feedback/send-feedback.component.css")).default]
    })
], SendFeedbackComponent);



/***/ }),

/***/ "./src/app/components/complaints/view-complaint/view-complaint.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/view-complaint.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxhaW50cy92aWV3LWNvbXBsYWludC92aWV3LWNvbXBsYWludC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/complaints/view-complaint/view-complaint.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/complaints/view-complaint/view-complaint.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComplaintComponent", function() { return ViewComplaintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/complaint-auth.service */ "./src/app/services/complaint-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ViewComplaintComponent = class ViewComplaintComponent {
    constructor(complaintAuthService, router, ngFlashMessageService, route) {
        this.complaintAuthService = complaintAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.route = route;
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = false;
        this.displayResponse = false;
        this.displayStatus = false;
        this.displayFeedback = false;
        this.displayLog = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.complaintAuthService.viewComplaint(this.id).subscribe((data) => {
            if (data.success) {
                this.data = data.complaint;
                this.displayView = true;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/complaint/view/' + this.id]);
                }
            }
        });
    }
    showModify() {
        this.displayView = false;
        this.displayModify = true;
        this.displayForward = false;
        this.displayResponse = false;
        this.displayStatus = false;
        this.displayFeedback = false;
        this.displayLog = false;
    }
    showView() {
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = false;
        this.displayStatus = false;
        this.displayResponse = false;
        this.displayFeedback = false;
        this.displayLog = false;
        this.ngOnInit();
    }
    showForward() {
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = true;
        this.displayResponse = false;
        this.displayStatus = false;
        this.displayFeedback = false;
        this.displayLog = false;
    }
    showResponse() {
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = false;
        this.displayResponse = true;
        this.displayStatus = false;
        this.displayFeedback = false;
        this.displayLog = false;
    }
    showStatus() {
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = false;
        this.displayResponse = false;
        this.displayStatus = true;
        this.displayFeedback = false;
        this.displayLog = false;
    }
    showFeedback() {
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = false;
        this.displayResponse = false;
        this.displayStatus = false;
        this.displayFeedback = true;
        this.displayLog = false;
    }
    showLog() {
        this.displayView = false;
        this.displayModify = false;
        this.displayForward = false;
        this.displayResponse = false;
        this.displayStatus = false;
        this.displayFeedback = false;
        this.displayLog = true;
    }
};
ViewComplaintComponent.ctorParameters = () => [
    { type: _services_complaint_auth_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-complaint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-complaint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complaints/view-complaint/view-complaint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-complaint.component.css */ "./src/app/components/complaints/view-complaint/view-complaint.component.css")).default]
    })
], ViewComplaintComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
    }
    logOut() {
        this.userAuthService.logOut();
        this.ngFlashMessageService.showFlashMessage({
            messages: ["You are successfully logged out"],
            dismissible: false,
            timeout: 3000,
            type: 'success'
        });
        this.router.navigate(['/user/login']);
        return false;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvZGFzaGJvYXJkL2J5LWRhc2hib2FyZC9ieS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ByDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByDashboardComponent", function() { return ByDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let ByDashboardComponent = class ByDashboardComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.show = false;
    }
    ngOnInit() {
        this.userAuthService.getByDashboard().subscribe((data) => {
            if (data.success) {
                this.npy = data.npy;
                this.ip = data.ip;
                this.c = data.c;
                this.show = true;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.show = false;
                    this.router.navigate(['/user/dashboard']);
                }
            }
        });
    }
};
ByDashboardComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
ByDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-by-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./by-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./by-dashboard.component.css */ "./src/app/components/users/dashboard/by-dashboard/by-dashboard.component.css")).default]
    })
], ByDashboardComponent);



/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
        this.by = true;
        this.under = false;
        this.show = false;
    }
    ngOnInit() {
        this.userAuthService.getUserRole().subscribe((data) => {
            if (data.role == 'Student') {
                this.show = false;
            }
            else {
                this.show = true;
            }
        });
    }
    viewBy() {
        this.by = true;
        this.under = false;
    }
    viewUnder() {
        this.by = false;
        this.under = true;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/users/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvZGFzaGJvYXJkL3VuZGVyLWRhc2hib2FyZC91bmRlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnderDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderDashboardComponent", function() { return UnderDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let UnderDashboardComponent = class UnderDashboardComponent {
    constructor(userAuthService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.show = false;
    }
    ngOnInit() {
        this.userAuthService.getUnderDashboard().subscribe((data) => {
            if (data.success) {
                this.npy = data.npy;
                this.ip = data.ip;
                this.c = data.c;
                this.show = true;
            }
            else {
                if (data.unauth) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.show = false;
                    this.router.navigate(['/user/dashboard']);
                }
            }
        });
    }
};
UnderDashboardComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] }
];
UnderDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-under-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./under-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./under-dashboard.component.css */ "./src/app/components/users/dashboard/under-dashboard/under-dashboard.component.css")).default]
    })
], UnderDashboardComponent);



/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(validationService, userAuthService, router, ngFlashMessageService) {
        this.validationService = validationService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
    }
    login() {
        const user = {
            email: this.email,
            password: this.password
        };
        if (!this.validationService.validateLogin(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please fill in all the fields'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/login']);
        }
        else if (!this.validationService.validateEmail(user.email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Enter a valid email'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/login']);
        }
        else {
            this.userAuthService.authenticateUser(user).subscribe((data) => {
                if (data.success) {
                    this.userAuthService.storeUserData(data.user, data.token);
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'success'
                    });
                    this.router.navigate(['/']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/user/login']);
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/users/profile/change-password/change-password.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/users/profile/change-password/change-password.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/users/profile/change-password/change-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/users/profile/change-password/change-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(userAuthService, validationService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.validationService = validationService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.show = false;
    }
    ngOnInit() {
    }
    load() {
        this.show = true;
    }
    clear() {
        this.oldPassword = null;
        this.newPassword = null;
        this.show = false;
    }
    updatePassword() {
        const passwords = {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
        };
        if (!this.validationService.validateModifyPassword(passwords)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please fill in all the fields'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/profile']);
        }
        else {
            this.userAuthService.updatePassword(passwords, this.id).subscribe((data) => {
                if (!data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/user/profile']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: true,
                        timeout: 3000,
                        type: 'success'
                    });
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/user/profile']));
                }
            });
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangePasswordComponent.prototype, "id", void 0);
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/users/profile/change-password/change-password.component.css")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/components/users/profile/modify-profile/modify-profile.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/users/profile/modify-profile/modify-profile.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS9tb2RpZnktcHJvZmlsZS9tb2RpZnktcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/users/profile/modify-profile/modify-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/users/profile/modify-profile/modify-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModifyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyProfileComponent", function() { return ModifyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let ModifyProfileComponent = class ModifyProfileComponent {
    constructor(userAuthService, validationService, router, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.validationService = validationService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.show = false;
    }
    ngOnInit() {
    }
    load() {
        this.show = true;
        this.id = this.user.id;
        this.name = this.user.name;
        this.email = this.user.email;
        this.phoneno = this.user.phoneno;
        this.rollno = this.user.rollno;
        this.school = this.user.school;
        this.dept = this.user.dept;
        this.batch = this.user.batch;
    }
    clear() {
        this.show = false;
    }
    updateProfile() {
        const user = {
            id: this.id,
            name: this.name,
            email: this.email,
            phoneno: this.phoneno,
            rollno: this.rollno,
            school: this.school,
            dept: this.dept,
            batch: this.batch
        };
        if (!this.validationService.validateModifyUser(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please fill in all the fields'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/profile']);
        }
        else if (!this.validationService.validateEmail(user.email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Enter a valid Email'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/profile']);
        }
        else {
            this.userAuthService.updateProfile(user, user.id).subscribe((data) => {
                if (data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: true,
                        timeout: 3000,
                        type: 'success'
                    });
                    // window.location.reload();
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/user/profile']));
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: true,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/user/profile']);
                }
            });
        }
    }
};
ModifyProfileComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModifyProfileComponent.prototype, "user", void 0);
ModifyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/modify-profile/modify-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-profile.component.css */ "./src/app/components/users/profile/modify-profile/modify-profile.component.css")).default]
    })
], ModifyProfileComponent);



/***/ }),

/***/ "./src/app/components/users/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




let ProfileComponent = class ProfileComponent {
    constructor(userAuthService, ngFlashMessageService) {
        this.userAuthService = userAuthService;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ngOnInit() {
        this.userAuthService.getProfile().subscribe((user) => {
            this.user = user;
            this.id = user.id;
        }, err => {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Something went wrong'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/users/profile/view-profile/view-profile.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/users/profile/view-profile/view-profile.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/users/profile/view-profile/view-profile.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/users/profile/view-profile/view-profile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewProfileComponent = class ViewProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewProfileComponent.prototype, "user", void 0);
ViewProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/view-profile/view-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-profile.component.css */ "./src/app/components/users/profile/view-profile/view-profile.component.css")).default]
    })
], ViewProfileComponent);



/***/ }),

/***/ "./src/app/components/users/user-register/user-register.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/users/user-register/user-register.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/users/user-register/user-register.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/users/user-register/user-register.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let UserRegisterComponent = class UserRegisterComponent {
    constructor(validationService, userAuthService, router, ngFlashMessageService) {
        this.validationService = validationService;
        this.userAuthService = userAuthService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
        this.showSchool = true;
    }
    ngOnInit() {
    }
    changeRole() {
        if (this.role == 'Student') {
            this.show = true;
        }
        else {
            this.show = false;
        }
        if (this.role == 'Non-Teaching') {
            this.showSchool = false;
        }
    }
    register() {
        const user = {
            name: this.name,
            email: this.email,
            phoneno: this.phoneno,
            rollno: this.rollno,
            school: this.school,
            dept: this.dept,
            batch: this.batch,
            password: this.password,
            role: this.role
        };
        if (!this.validationService.validateRegister(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Please fill in all the fields'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/register']);
        }
        else if (!this.validationService.validateEmail(user.email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ['Enter a valid Email'],
                dismissible: false,
                timeout: 3000,
                type: 'danger'
            });
            this.router.navigate(['/user/register']);
        }
        else {
            this.userAuthService.registerUser(user).subscribe((data) => {
                if (data.success) {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'success'
                    });
                    this.router.navigate(['/user/login']);
                }
                else {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [data.msg],
                        dismissible: false,
                        timeout: 3000,
                        type: 'danger'
                    });
                    this.router.navigate(['/user/register']);
                }
            });
        }
    }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] }
];
UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/user-register/user-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-register.component.css */ "./src/app/components/users/user-register/user-register.component.css")).default]
    })
], UserRegisterComponent);



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-auth.service */ "./src/app/services/user-auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(userAuthService, router) {
        this.userAuthService = userAuthService;
        this.router = router;
    }
    canActivate() {
        if (this.userAuthService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/complaint-auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/complaint-auth.service.ts ***!
  \****************************************************/
/*! exports provided: ComplaintAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintAuthService", function() { return ComplaintAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-auth.service */ "./src/app/services/user-auth.service.ts");




let ComplaintAuthService = class ComplaintAuthService {
    constructor(http, userAuthService) {
        this.http = http;
        this.userAuthService = userAuthService;
        this.localhost = 'http://localhost:3000/';
    }
    registerComplaint(complaint) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.post(this.localhost + 'complaint/register', complaint, httpOptions);
    }
    adminViewComplaintList(status) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.get(this.localhost + 'complaint/adminViewList/' + status, httpOptions);
    }
    viewByComplaintList(status) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.get(this.localhost + 'complaint/byViewList/' + status, httpOptions);
    }
    viewUnderComplaintList(status) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.get(this.localhost + 'complaint/underViewList/' + status, httpOptions);
    }
    viewComplaint(id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.get(this.localhost + 'complaint/view/' + id, httpOptions);
    }
    modifyComplaint(complaint, id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.post(this.localhost + 'complaint/edit/' + id, complaint, httpOptions);
    }
    deleteComplaint(id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.delete(this.localhost + 'complaint/delete/' + id, httpOptions);
    }
    forwardComplaint(complaint, id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.post(this.localhost + 'complaint/forward/' + id, complaint, httpOptions);
    }
    responseComplaint(complaint, id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.post(this.localhost + 'complaint/response/' + id, complaint, httpOptions);
    }
    changeStatus(complaint, id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.post(this.localhost + 'complaint/changeStatus/' + id, complaint, httpOptions);
    }
    userFeedback(complaint, id) {
        this.userAuthService.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.userAuthService.authToken
            })
        };
        return this.http.post(this.localhost + 'complaint/feedback/' + id, complaint, httpOptions);
    }
};
ComplaintAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }
];
ComplaintAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComplaintAuthService);



/***/ }),

/***/ "./src/app/services/user-auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-auth.service.ts ***!
  \***********************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");




let UserAuthService = class UserAuthService {
    constructor(http) {
        this.http = http;
        this.localhost = 'http://localhost:3000/';
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    loggedIn() {
        this.loadToken();
        return !this.helper.isTokenExpired(this.authToken);
    }
    ifAdmin() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            if (user.role == "Admin") {
                return false;
            }
            else {
                return true;
            }
        }
        // this.getUserRole().subscribe((data: any) => {
        //   if(data.role == "Admin"){
        //       return false;
        //     }else{
        //       return true;
        //     }
        // });
    }
    registerUser(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (user.role == "Student") {
            return this.http.post(this.localhost + 'users/student/register', user, httpOptions);
        }
        else {
            return this.http.post(this.localhost + 'users/faculty/register', user, httpOptions);
        }
    }
    authenticateUser(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.localhost + 'users/authenticate', user, httpOptions);
    }
    storeUserData(user, token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        this.user = user;
        this.authToken = token;
    }
    loadToken() {
        const token = localStorage.getItem('token');
        this.authToken = token;
    }
    logOut() {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
    getUserID() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/id', httpOptions);
    }
    getUserName(id) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/name/' + id, httpOptions);
    }
    getUserRole() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/role', httpOptions);
    }
    getProfile() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/profile', httpOptions);
    }
    updateProfile(user, id) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.post(this.localhost + 'users/profile/' + id, user, httpOptions);
    }
    updatePassword(passwords, id) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.post(this.localhost + 'users/changePassword/' + id, passwords, httpOptions);
    }
    getByDashboard() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/byDashboard', httpOptions);
    }
    getUnderDashboard() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/underDashboard', httpOptions);
    }
    getAllComplaints() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/admin/complaints', httpOptions);
    }
    getAllUsers() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/admin/users', httpOptions);
    }
    getCategories() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/admin/category/view', httpOptions);
    }
    addCategory(cat) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.post(this.localhost + 'users/admin/category/add', cat, httpOptions);
    }
    adminViewUserList(role) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/adminViewList/' + role, httpOptions);
    }
    getUserDetails(id) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/admin/user/' + id, httpOptions);
    }
    registerDean(user) {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.post(this.localhost + 'users/dean/register', user, httpOptions);
    }
    getCatDean() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/deanCat', httpOptions);
    }
    getDeanID() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/deanID', httpOptions);
    }
    getWorkerNameID() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get(this.localhost + 'users/workerNameID', httpOptions);
    }
};
UserAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserAuthService);



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidationService = class ValidationService {
    constructor() { }
    validateRegister(user) {
        if (user.role == 'Dean') {
            if (!user.name || !user.email || !user.phoneno || !user.school || !user.password) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (!user.name || !user.email || !user.phoneno || !user.dept || !user.password || !user.role) {
            return false;
        }
        else {
            if (user.role == "Student" && (!user.rollno || !user.batch)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateLogin(user) {
        if (!user.email || !user.password) {
            return false;
        }
        else {
            return true;
        }
    }
    validateModifyUser(user) {
        if (!user.name || !user.email || !user.phoneno || !user.school || !user.dept) {
            return false;
        }
        else {
            if (user.role == "Student" && (!user.rollno || !user.batch)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    validateModifyPassword(user) {
        if (!user.oldPassword || !user.newPassword) {
            return false;
        }
        else {
            return true;
        }
    }
    validateRegisterComplaint(complaint) {
        if (!complaint.title || !complaint.category || !complaint.msg) {
            return false;
        }
        else {
            return true;
        }
    }
    validateForwardComplaint(complaint) {
        if (!complaint.worker_id || !complaint.deanMsg) {
            return false;
        }
        else {
            return true;
        }
    }
    validateResponseComplaint(complaint) {
        if (!complaint.workerMsg) {
            return false;
        }
        else {
            return true;
        }
    }
};
ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidationService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\major proj\hollerhark\client-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map