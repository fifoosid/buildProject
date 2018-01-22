webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Layouts/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n    -webkit-box-align: start !important;\r\n        -ms-flex-align: start !important;\r\n            align-items: flex-start !important;\r\n    font-size: 90%;\r\n    background-color: #292B2C;\r\n    color:#fff;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-wrap: wrap !important;\r\n        flex-wrap: wrap !important;\r\n    height: 3.5em;\r\n    width: 100%;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\np {\r\n    font-weight: 200;\r\n    font-size: 80%;\r\n    margin: 0;\r\n    padding-left: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <p>This site was made by me, Filip Siderov for the  Front End course at FMI</p>\r\n  <p>You visited this site at {{ date }}</p>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/Layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/Layouts/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Layouts/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.navbar-header  > a {\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color: white;\r\n    font-size: 110%;\r\n}\r\n\r\n.navbar-header > span {\r\n    color: #ECEEEF;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    font-weight: bold;\r\n    font-size: 120%;\r\n}\r\n\r\n.navbar-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.navbar-header > span:hover {\r\n    color: #d1d1d1;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-ul-flex {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.flex {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.container-fluid > * {\r\n    margin-left: 3em;\r\n}\r\n\r\n.navbar-nav > * {\r\n    margin-left: 1em;\r\n}\r\n\r\n.nav-link {\r\n    text-align: center;\r\n}\r\n\r\n@media(max-width: 500px) {\r\n    .flex {\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n    .navbar-header {\r\n        margin-left: 0 !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\" ng-controller=\"HeaderController\">\r\n  <div class=\"container-fluid flex\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"header-name\" href=\"\" [routerLink]=\"['/']\">\r\n        <span>PhotoTreasure</span>\r\n      </a>\r\n    </div>\r\n    <ul class=\"navbar-nav mr-auto nav-ul-flex\">\r\n\r\n      <li class=\"nav-item\"\r\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\"\r\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/top-photos']\" href=\"#\">Top photos</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\"\r\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:false}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/search']\" href=\"#\">Search</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Layouts/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.loading = true;
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav',
            template: __webpack_require__("../../../../../src/app/Layouts/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Layouts/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".broken {\r\n    z-index: -1 !important;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/Images/broken_lens.jpg") + ") left center no-repeat;\r\n    background-size: contain;\r\n    position: absolute;\r\n    top: 56px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: calc(100% - 106px);\r\n    -webkit-filter: blur(3px) opacity(65%);\r\n            filter: blur(3px) opacity(65%);\r\n}\r\n\r\n.error-message {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding-top: 30vh;\r\n    z-index: 99 !important;\r\n    opacity: 1 !important;\r\n    font-weight: 700;\r\n    color: #000000;\r\n    -webkit-filter: contrast(175%) contrast(200%);\r\n            filter: contrast(175%) contrast(200%);;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"broken\">\n</div>\n<h2 class=\"error-message\">OOPS, Error 404(Page not found)</h2>\n"

/***/ }),

/***/ "../../../../../src/app/Layouts/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/Layouts/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Layouts/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrapper {\r\n    width: 100%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.logo {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 20em;\r\n    height: 5em;\r\n}\r\n\r\n.google {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Images/google_logo.png") + ");\r\n}\r\n\r\n.px {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Images/500px_logo.png") + ");\r\n}\r\n\r\n.example {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    margin-top: 3em;\r\n}\r\n\r\n.example > a > input{\r\n    cursor: pointer;\r\n}\r\n\r\n.you-text {\r\n    font-weight: 100;\r\n}\r\n\r\n.welcome-text {\r\n    font-size: 4em;\r\n    font-weight: 800;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n@media(max-width: 500px)\r\n{\r\n    .welcome-text {\r\n        font-size: 2.9em;\r\n    }\r\n    \r\n    .you-text {\r\n        display: none;\r\n    }\r\n\r\n    .example {\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n        display: -webkit-inline-box;\r\n        display: -ms-inline-flexbox;\r\n        display: inline-flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    .example > a {\r\n        margin-bottom: .5em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\r\n\r\n  <h1 class=\"center-text you-text\">Hey you, if you are wondering where to go and capture the best photos, you are officially</h1>  \r\n  <h1 class=\"center-text welcome-text\">Welcome to PhotoTreasure</h1>\r\n  <p class=\"center-text margin-top-big\">The place where your photos come alive, now with integrated 500px and Google maps APIs</p>\r\n  <p class=\"center-text\">This great app created for my Front End course is here, beacause of the great work done by:</p>\r\n\r\n  <div class=\"flex wrapper margin-top-big\">\r\n\r\n    <div class=\"img-wrapper\"> \r\n      <div class=\"google logo\"></div>\r\n    </div>\r\n\r\n    <div class=\"img-wrapper\">\r\n      <div class=\"px logo\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"example\">\r\n\r\n    <a href=\"\"  [routerLink]=\"['/photo/104824015']\">\r\n      <input type=\"button\" class=\"btn btn-info\" value=\"Example 1\">\r\n    </a>\r\n\r\n    <a href=\"\"  [routerLink]=\"['/photo/240989725']\">\r\n      <input type=\"button\" class=\"btn btn-info\" value=\"Example 2\">\r\n    </a>\r\n\r\n    <a href=\"\"  [routerLink]=\"['/photo/243348515']\">\r\n      <input type=\"button\" class=\"btn btn-info\" value=\"Example 3\">\r\n    </a>\r\n\r\n    <a href=\"\"  [routerLink]=\"['/photo/240963281']\">\r\n      <input type=\"button\" class=\"btn btn-info\" value=\"Example 4\">\r\n    </a>\r\n\r\n    <a href=\"\"  [routerLink]=\"['/photo/184250823']\">\r\n      <input type=\"button\" class=\"btn btn-info\" value=\"Example 5\">\r\n    </a>\r\n    \r\n    <a href=\"\"  [routerLink]=\"['/photo/80293209']\">\r\n      <input type=\"button\" class=\"btn btn-info\" value=\"Comments Example\">\r\n    </a>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Layouts/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'welcome',
            template: __webpack_require__("../../../../../src/app/Layouts/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-top {\r\n    padding: .5em 1.3em;\r\n    display: none;\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 4em;\r\n    right: 2.5em;\r\n    border-radius: 11px;\r\n    z-index: 99;\r\n    cursor: pointer;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- top button -->\r\n<input type=\"button\" class=\"btn btn-warning btn-top\" value=\"Top\" (click)=\"scrollToTopButton()\">\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onscroll = function () {
            _this.autoShowButton();
        };
    };
    AppComponent.prototype.scrollToTopButton = function () {
        $("html").animate({ scrollTop: 0 }, 'fast', 'swing');
    };
    AppComponent.prototype.autoShowButton = function () {
        var button = $('.btn-top');
        if (document.documentElement.scrollTop > 400) {
            $('.btn-top').show();
        }
        else {
            $('.btn-top').hide();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layouts_nav_nav_component__ = __webpack_require__("../../../../../src/app/Layouts/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Layouts_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/Layouts/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Layouts_footer_footer_component__ = __webpack_require__("../../../../../src/app/Layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__photos_photo_photo_component__ = __webpack_require__("../../../../../src/app/photos/photo/photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__photos_photos_photos_component__ = __webpack_require__("../../../../../src/app/photos/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__photos_view_photo_view_photo_component__ = __webpack_require__("../../../../../src/app/photos/view-photo/view-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__google_maps_google_maps_component__ = __webpack_require__("../../../../../src/app/google-maps/google-maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Layouts_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/Layouts/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//infinite scroll


//timeAgo pipe

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Layouts_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Layouts_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Layouts_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__photos_photo_photo_component__["a" /* PhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__photos_photos_photos_component__["a" /* PhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__photos_view_photo_view_photo_component__["a" /* ViewPhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__google_maps_google_maps_component__["a" /* GoogleMapsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_14__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Layouts_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__["TimeAgoPipe"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                //infinite scroll:
                __WEBPACK_IMPORTED_MODULE_16_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                //Router
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__Layouts_welcome_welcome_component__["a" /* WelcomeComponent */] },
                    { path: 'top-photos', component: __WEBPACK_IMPORTED_MODULE_10__photos_photos_photos_component__["a" /* PhotosComponent */] },
                    { path: 'photo/:id', component: __WEBPACK_IMPORTED_MODULE_11__photos_view_photo_view_photo_component__["a" /* ViewPhotoComponent */] },
                    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */] },
                    { path: 'search/:key', component: __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */] },
                    { path: 'search/:key/:author', component: __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */] },
                    { path: '404', component: __WEBPACK_IMPORTED_MODULE_17__Layouts_not_found_not_found_component__["a" /* NotFoundComponent */] },
                    { path: '**', redirectTo: '/404', pathMatch: 'full' }
                ]),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\r\n    margin-top: .5em;\r\n    color: #7c7c7c;\r\n}\r\n\r\n#add {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.comment-info {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.name-date {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    margin-right: .5em;\r\n    margin-bottom: .5em;\r\n}\r\n\r\n.comments-wrapper {\r\n    height: 21em;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 row\">\n  <div class=\"form-container col-md-6\">\n    <h2 id=\"add\">Add Comment</h2>\n    <hr>\n    <br>\n    <form [formGroup]=\"commentsForm\" (ngSubmit)=\"addComment(commentsForm.value)\">\n      \n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Enter your name\">\n        <div *ngIf=\"commentsForm.get('name').touched && commentsForm.get('name').invalid\" class=\"alert alert-danger\">Name is required and must at least 3 charachters.</div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"body\">Comment:</label>\n        <textarea name=\"body\" cols=\"30\" rows=\"10\"\n          formControlName=\"body\"\n          class=\"form-control\"\n          placeholder=\"Enter your comment here\"></textarea>\n          <div *ngIf=\"commentsForm.get('body').touched && commentsForm.get('body').invalid\" class=\"alert alert-danger\">The body of the comment must be at least 5 charachters long.</div>\n      </div>\n  \n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Comment\" [disabled]=\"!commentsForm.valid\">\n      </div>\n  \n    </form>\n  </div>\n  \n  <div class=\"col-md-6\">\n    <div class=\"comment-info\">\n        <h2>Comments</h2>\n        <!-- No pipe for pluralization :( -->\n        <span *ngIf=\"numOfComments != 1\">{{ numOfComments || 0 }} comments</span>\n        <span *ngIf=\"numOfComments == 1\">{{ numOfComments }} comment</span>\n    </div>\n\n    <hr>\n    <br>\n\n    <div class=\"comments-wrapper\">\n      <div class=\"comments-wrapper\"\n      infiniteScroll\n      [infiniteScrollDistance]=\"2\"\n      [infiniteScrollThrottle]=\"500\"\n      (scrolled)=\"onScroll()\"\n      [scrollWindow]=\"false\">\n\n        <div *ngFor=\"let comment of comments\" class=\"comment\">\n          <div class=\"name-date\">\n            <div class=\"flex\">\n              <h4>{{comment.user?.firstname + \" \" + comment.user?.lastname}}</h4>\n              <h4 *ngIf=\"comment.user.username\">({{ comment.user?.username }})</h4>\n            </div>\n              <p>{{ comment?.created_at | timeAgo }}</p>\n          </div>\n          <div class=\"body\">\n            {{comment?.body}}\n          </div>\n          <hr>\n        </div>  \n\n      </div>\n\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_get_comments_service__ = __webpack_require__("../../../../../src/app/services/comments/get-comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = (function () {
    function CommentsComponent(formBuilder, http, commentsService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.commentsService = commentsService;
        this.commentsURL = '../../assets/comments.json';
        this.comments = [];
        this.page = 1;
        this.commentsForm = formBuilder.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)])],
            'body': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5)])],
            'id': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.photoId = location.pathname.split('/')[location.pathname.split.length];
        this.getComments();
    };
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        //check for end of pages:
        if (this.page > this.total_pages)
            return;
        this.commentsService.getComments(this.photoId, this.page)
            .subscribe(function (comments) {
            //get comments
            comments.comments.forEach(function (element) {
                _this.comments.push(element);
            });
            //get total number of comments
            _this.numOfComments = comments.total_items;
            //get the number of all pages
            _this.total_pages = comments.total_pages;
            //change page
            _this.page++;
        }, function (error) { return console.log("Sorry, there was a problem with the back-end API"); });
    };
    CommentsComponent.prototype.addComment = function (comment) {
        var newComment = {
            'user': {
                'firstname': comment.name,
                'lastname': '',
            },
            'created_at': new Date,
            'body': comment.body,
            'id': this.photoId
        };
        //TODO: Make post request with the comment, instead of logging it in the console
        this.comments.push(newComment);
        this.numOfComments++;
    };
    CommentsComponent.prototype.onScroll = function () {
        this.getComments();
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'comments-form',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_comments_get_comments_service__["a" /* GetCommentsService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__services_comments_get_comments_service__["a" /* GetCommentsService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/google-maps/google-maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\r\n    margin: 5em 3em;\r\n}\r\n\r\n#map {\r\n    position: relative;\r\n    overflow: hidden;\r\n    height: 35vh;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-maps/google-maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\r\n    <h2>Location, where the photo was taken:</h2> <br>\r\n    <div id=\"map\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/google-maps/google-maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    GoogleMapsComponent.prototype.ngAfterContentInit = function () {
        //Init map
        this.initMap();
    };
    GoogleMapsComponent.prototype.initMap = function () {
        //Cast string params to number
        this.lat = Number(this.lat);
        this.lng = Number(this.lng);
        //Init map
        var uluru = { lat: this.lat, lng: this.lng }; //TODO: change coordinates, to come from the info in image
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleMapsComponent.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleMapsComponent.prototype, "lng", void 0);
    GoogleMapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'google-maps',
            template: __webpack_require__("../../../../../src/app/google-maps/google-maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/google-maps/google-maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/photos/photo/photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-flex {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.blur-effect-container {\r\n    position: relative;\r\n}\r\n\r\nimg {\r\n    opacity: 1;\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    transition: .6s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n.middle {\r\n    transition: .6s ease;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n\r\n.text {\r\n    background-color: #444444;\r\n    color: white;\r\n    font-size: 16px;\r\n    padding: 16px 12px;\r\n}\r\n\r\n.blur-effect-container:hover img {\r\n    opacity: 0.3;\r\n}\r\n  \r\n.blur-effect-container:hover .middle {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.image-wrapper-small {\r\n    width: 23em;\r\n    height: 23em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\nimg {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\na {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@media(max-width: 500px)\r\n{\r\n    .image-wrapper-small {\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos/photo/photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-wrapper-small flex blur-effect-container\">\r\n  <a href=\"/photo/{{ image.id }}\">\r\n\r\n    <img class=\"image-flex\" src=\"{{ image['images'][0]['url'] }}\" alt=\"\" (click)=\"onClick()\">\r\n    \r\n    <div class=\"middle\">\r\n      <div class=\"text\">\r\n        By {{image.user.username}}\r\n      </div>\r\n    </div>\r\n\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/photos/photo/photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoComponent = (function () {
    function PhotoComponent() {
        this.imageTags = [];
        this.notifyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PhotoComponent.prototype.onClick = function () {
        this.notifyClick.emit("You just presed my photo");
    };
    PhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PhotoComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PhotoComponent.prototype, "notifyClick", void 0);
    PhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo',
            template: __webpack_require__("../../../../../src/app/photos/photo/photo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photos/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/photos/photos/photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-container {\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    padding: 0 2em;\r\n}\r\n\r\n.image-container > div {\r\n    margin-left: 2em;\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n    font-size: 150%;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n@media(max-width: 500px)\r\n{\r\n    .image-container > div {\r\n        margin-left: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"image-container flex\">\r\n  <div class=\"container jumbotron header\">\r\n    Here is the best photo selection from our editors:\r\n  </div>\r\n\r\n  \r\n  <!-- iterate over images -->\r\n\r\n  <div *ngFor=\"let image of images\">\r\n    <photo [image]=\"image\"></photo>\r\n  </div>\r\n\r\n\r\n\r\n  \r\n\r\n</div>\r\n\r\n<!-- spinner -->\r\n<spinner></spinner>\r\n\r\n<!-- scroll event -->\r\n<div class=\"search-results\"\r\ninfiniteScroll\r\n[infiniteScrollDistance]=\"0.2\"\r\n[infiniteScrollThrottle]=\"700\"\r\n(scrolled)=\"serviceDecorator()\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/photos/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_images_service__ = __webpack_require__("../../../../../src/app/services/get-images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Iimage } from './../image';



var PhotosComponent = (function () {
    function PhotosComponent(imageService, location) {
        this.imageService = imageService;
        this.location = location;
        this.images = [];
        this.page = 1;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.serviceDecorator();
    };
    PhotosComponent.prototype.onScroll = function () {
        this.imageService.getImages(this.page);
    };
    PhotosComponent.prototype.serviceDecorator = function () {
        var _this = this;
        if (this.maxPage < this.page)
            return;
        this.imageService.getImages(this.page)
            .subscribe(function (images) {
            if (_this.page > 1) {
                images.photos.forEach(function (element) {
                    _this.images.push(element);
                });
            }
            else {
                _this.images = images.photos;
            }
            //set next page
            _this.page++;
            //get the number of pages with results
            _this.maxPage = images.total_pages;
        }, function (error) { return _this.errorMessage = error; });
    };
    PhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__("../../../../../src/app/photos/photos/photos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photos/photos/photos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_get_images_service__["a" /* ImagesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_images_service__["a" /* ImagesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/photos/view-photo/view-photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner-wrapper {\r\n    margin-top: 40vh;\r\n}\r\n\r\n.margin-bottom {\r\n    margin-bottom: 4em;\r\n}\r\n\r\n.custom-container {\r\n    margin: 2em 3em 0 3em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.captions {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.image-container {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 54em;\r\n}\r\n\r\n.image {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.user-image-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 5em;\r\n    height: 5em;\r\n}\r\n\r\n.user-image {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.author {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: space-around;\r\n        -ms-flex-align: space-around;\r\n            align-items: space-around;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    width: stretch;\r\n}\r\n\r\n.author-name {\r\n    padding-bottom: 3.5em;\r\n    padding-right: 1em;\r\n}\r\n\r\n.list-group {\r\n    padding-top: 1em;\r\n}\r\n\r\ncomments-form {\r\n    width: 100%;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .custom-container {\r\n        margin: 0;\r\n    }\r\n    \r\n    .image-container {\r\n        margin: 2em 0 !important; \r\n    }\r\n\r\n    .user-image-wrapper {\r\n        width: 3em;\r\n        height: 3em;\r\n    }\r\n\r\n    .author-name {\r\n        padding-bottom: 1.5em;\r\n        padding-right: 1em;\r\n    }\r\n\r\n    .captions {\r\n        margin: .5em\r\n    }\r\n}\r\n\r\n@media(max-width: 1300px) {\r\n    .custom-container {\r\n        -webkit-box-pack: center !important;\r\n            -ms-flex-pack: center !important;\r\n                justify-content: center !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos/view-photo/view-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- spinner -->\r\n<div *ngIf=\"loading\" class=\"spinner-wrapper\">\r\n    <spinner ></spinner>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!loading\" class=\"margin-bottom\">\r\n    <div class=\"custom-container\">\r\n        <div class=\"image-container\">\r\n            <img class=\"image\" src=\"{{ image?.image_url }}\" alt=\"\">\r\n        </div>\r\n    \r\n        <div class=\"captions\">\r\n            <div class=\"tags\" *ngIf=\"tags\">\r\n                <div>Tags:</div>\r\n                <ul>\r\n                    <li *ngFor=\"let tag of tagsArray\">{{ tag }}</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"author\">\r\n                \r\n                <ul class=\"list-group\">\r\n                    \r\n                    <li *ngIf=\"image?.name\" class=\"list-group-item\">Name: &nbsp; <b>{{ image?.name }}</b></li>\r\n                    <li *ngIf=\"image?.camera\" class=\"list-group-item\">Photo made with: &nbsp; <b>{{ image?.camera }}</b></li>\r\n                    <li *ngIf=\"image?.lens\" class=\"list-group-item\">Lens: &nbsp; <b>{{ image?.lens }}</b></li>\r\n                    <li *ngIf=\"image?.focal_length\" class=\"list-group-item\">Focal length: &nbsp; <b>{{ image?.focal_length }}mm</b></li>\r\n                    <li *ngIf=\"image?.aperture\" class=\"list-group-item\">Aperture: &nbsp; <b>{{ image?.aperture }}</b></li>\r\n                    <li *ngIf=\"image?.shutter_speed\" class=\"list-group-item\">Shutter speed: &nbsp; <b>{{ image?.shutter_speed }}s</b></li>\r\n                    <li *ngIf=\"image?.iso\" class=\"list-group-item\">ISO: &nbsp; <b>{{ image?.iso }}</b></li>\r\n                    <li *ngIf=\"image?.rating\" class=\"list-group-item\">Rating: &nbsp; <b>{{ image?.rating }}/100</b></li>\r\n                    <li *ngIf=\"image?.sales_count > 0\" class=\"list-group-item\">Sales: &nbsp; <b>{{ image?.sales_count }}</b></li>\r\n                    <li *ngIf=\"image?.user\" class=\"list-group-item\">\r\n                            <span class=\"author-name\">\r\n                                Photo, posted by {{ user?.fullname }}\r\n                            </span>\r\n                            <div class=\"user-image-wrapper\">\r\n                                <img class=\"user-image\" src=\"{{ user?.userpic_url }}\" alt=\"User Image\">\r\n                            </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n    \r\n    <google-maps lat=\"{{image?.latitude}}\" lng=\"{{image?.longitude}}\"></google-maps>\r\n    \r\n    <div class=\"container\">\r\n        <comments-form></comments-form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/photos/view-photo/view-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_images_service__ = __webpack_require__("../../../../../src/app/services/get-images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Iimage } from '../image';

var ViewPhotoComponent = (function () {
    function ViewPhotoComponent(imageService, route) {
        this.imageService = imageService;
        this.route = route;
        this.loading = true;
    }
    ViewPhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get image:
        this.route.params.subscribe(function (param) { return _this.imageId = Number(param['id']); });
        //make request and subscribe to observable
        this.imageService.getImage(this.imageId)
            .subscribe(function (image) {
            _this.image = image['photo'];
            //get user:
            _this.user = _this.image['user'];
            //hide loader:
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    ViewPhotoComponent.prototype.sendSubscribeMail = function () {
    };
    ViewPhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-photo',
            template: __webpack_require__("../../../../../src/app/photos/view-photo/view-photo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photos/view-photo/view-photo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_get_images_service__["a" /* ImagesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_images_service__["a" /* ImagesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ViewPhotoComponent);
    return ViewPhotoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\r\n    margin-top: 2em;\r\n    padding-left: 2em;\r\n}\r\n\r\n.search-button {\r\n    margin-top: 1em;\r\n}\r\n\r\n.flex {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.custom-container {\r\n    margin: 2em 3em 0 3em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    margin-bottom: 4em;\r\n}\r\n\r\n@media(max-width: 500px) {\r\n    .form-group {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    }\r\n    .form {\r\n        padding: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- search form -->\r\n<div class=\"col-md-12 form\">\r\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"search(rForm.value)\">\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"key\">Search photos</label>\r\n        <!-- <input *ngIf=\"emptySearch\" type=\"text\" class=\"form-control\" placeholder=\"Nature, landscape, macro...\"> -->\r\n        <input type=\"text\" formControlName=\"key\" class=\"form-control\" placeholder=\"Christmas, Snow..\" [ngModel]=\"searchKey ? searchKey : ''\">\r\n        <div *ngIf=\"rForm.get('key').touched && rForm.get('key').invalid\" class=\"alert alert-danger\">This field is required and must have minimum 3 charachters.</div>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"author\">Author</label>\r\n        <input type=\"text\" formControlName=\"author\" class=\"form-control\" placeholder=\"Santa, Rudolf..\" [ngModel]=\"authorKey ? authorKey : ''\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">        \r\n        <input class=\"btn btn-primary search-button\" type=\"submit\" value=\"Search\" [disabled]=\"!rForm.valid\">\r\n      </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n<!-- image results -->\r\n<div class=\"custom-container flex\">\r\n  <div *ngFor=\"let image of images\">\r\n    <photo [image]=\"image\"></photo>\r\n  </div>\r\n</div>\r\n\r\n<!-- scroll event -->\r\n<div class=\"search-results\"\r\ninfiniteScroll\r\n[infiniteScrollDistance]=\"0.4\"\r\n[infiniteScrollThrottle]=\"700\"\r\n(scrolled)=\"makeSearch()\">\r\n</div>\r\n\r\n<!-- spinner -->\r\n<spinner *ngIf=\"loading\"></spinner>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_images_service__ = __webpack_require__("../../../../../src/app/services/get-images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Iimage } from '../photos/image';



var SearchComponent = (function () {
    function SearchComponent(imageService, router, route, formBuilder) {
        this.imageService = imageService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.images = [];
        this.page = 1;
        this.loading = true;
        this.rForm = formBuilder.group({
            'key': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(3)])],
            'author': ''
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagesSubscription = this.route.params.subscribe(function (params) {
            _this.searchKey = params.key;
            _this.authorKey = params.author;
            if (_this.searchKey === '') {
                _this.imageService.getImages(_this.page)
                    .subscribe(function (images) {
                    _this.images = images;
                    //next page
                    _this.page++;
                }, function (error) { return _this.errorMessage = error; });
                return;
            } //load editors choice
            else {
                _this.subscribeToImagesService();
            }
        });
    };
    SearchComponent.prototype.subscribeToImagesService = function () {
        var _this = this;
        this.imageService.search(this.searchKey, this.page)
            .subscribe(function (images) {
            if (_this.totalPages < _this.page) {
                _this.loading = false;
                return;
            }
            if (images.total_pages === 1) {
                _this.loading = false;
            }
            images.photos.forEach(function (element) {
                _this.images.push(element);
            });
            //change page
            _this.page++;
            //get all pages
            _this.totalPages = images.total_pages;
            //save last search
            _this.lastSearchKey = _this.searchKey;
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchComponent.prototype.makeSearch = function () {
        this.subscribeToImagesService();
    };
    SearchComponent.prototype.search = function (search) {
        this.images = [];
        this.page = 1;
        this.totalPages = 1;
        this.router.navigate(["/search/" + search.key + "/" + search.author]);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_get_images_service__["a" /* ImagesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_images_service__["a" /* ImagesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/comments/get-comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCommentsService = (function () {
    function GetCommentsService(http) {
        this.http = http;
        this.url = 'https://api.500px.com/v1/';
        this.endpoint = 'photos/';
        this.comments = '/comments';
    }
    GetCommentsService.prototype.getComments = function (id, page) {
        return this.http.get(this.url + this.endpoint + id + this.comments, {
            params: {
                consumer_key: 'd2668CjrDpLSiF6a3DPcq06Ryb0NYTIpni36B0Li',
                page: page.toString()
            }
        })
            .do(function (data) {
            return JSON.stringify(data);
        })
            .catch(this.handleRequestError);
    };
    GetCommentsService.prototype.handleRequestError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    GetCommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetCommentsService);
    return GetCommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/get-images.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Iimage } from './../photos/image';






var ImagesService = (function () {
    function ImagesService(http) {
        this.http = http;
        this.url = 'https://api.500px.com/v1/';
        this.photos = 'photos?';
        this.photo = 'photos/';
        this._search = "photos/search?term=";
    }
    ImagesService.prototype.getImages = function (page) {
        return this.http.get(this.url + this.photos, {
            params: {
                page: page.toString(),
                consumer_key: 'd2668CjrDpLSiF6a3DPcq06Ryb0NYTIpni36B0Li',
                feature: 'popular',
                image_size: '440'
            }
        })
            .do(function (data) {
            return JSON.stringify(data);
        })
            .catch(this.handleRequestError);
    };
    ImagesService.prototype.getImage = function (id) {
        return this.http.get(this.url + this.photo + id.toString() + '?', {
            params: {
                consumer_key: 'd2668CjrDpLSiF6a3DPcq06Ryb0NYTIpni36B0Li',
                image_size: '2048',
                sort: 'rating',
                sort_direction: 'desc'
            }
        })
            .do(function (image) {
            return JSON.stringify(image);
        })
            .catch(this.handleRequestError);
    };
    ImagesService.prototype.search = function (term, page) {
        return this.http.get(this.url + this._search, {
            params: {
                page: page.toString(),
                consumer_key: 'd2668CjrDpLSiF6a3DPcq06Ryb0NYTIpni36B0Li',
                term: term,
                image_size: '440'
            }
        })
            .do(function (images) {
            return JSON.stringify(images);
        })
            .catch(this.handleRequestError);
    };
    ImagesService.prototype.handleRequestError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    ImagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\r\n    margin: 60px auto;\r\n    width: 50px;\r\n    height: 40px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  .spinner > div {\r\n    background-color: #333;\r\n    height: 100%;\r\n    width: 6px;\r\n    display: inline-block;\r\n    \r\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n  }\r\n  \r\n  .spinner .rect2 {\r\n    -webkit-animation-delay: -1.1s;\r\n    animation-delay: -1.1s;\r\n  }\r\n  \r\n  .spinner .rect3 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  .spinner .rect4 {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n  }\r\n  \r\n  .spinner .rect5 {\r\n    -webkit-animation-delay: -0.8s;\r\n    animation-delay: -0.8s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-stretchdelay {\r\n    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \r\n    20% { -webkit-transform: scaleY(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-stretchdelay {\r\n    0%, 40%, 100% { \r\n      transform: scaleY(0.4);\r\n      -webkit-transform: scaleY(0.4);\r\n    }  20% { \r\n      transform: scaleY(1.0);\r\n      -webkit-transform: scaleY(1.0);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spinner',
            template: __webpack_require__("../../../../../src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/Images/500px_logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "500px_logo.68f509042337f438af54.png";

/***/ }),

/***/ "../../../../../src/assets/Images/broken_lens.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "broken_lens.72180d78738d0e26cf09.jpg";

/***/ }),

/***/ "../../../../../src/assets/Images/google_logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google_logo.c7b4479a6440ad404109.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map