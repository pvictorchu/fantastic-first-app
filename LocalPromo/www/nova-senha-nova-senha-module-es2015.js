(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nova-senha-nova-senha-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nova-senha/nova-senha.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nova-senha/nova-senha.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>Recuperar Senha</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n        <ion-title size=\"large\">LocalPromo</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input ngModel type=\"email\" name=\"email\"></ion-input>\r\n          <ion-button texpand=\"full\" color=\"primary\"  (click)=\"showAlert()\" routerLink = \"/home\">Enviar Email</ion-button>\r\n        </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/nova-senha/nova-senha-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nova-senha/nova-senha-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NovaSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSenhaPageRoutingModule", function() { return NovaSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nova_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nova-senha.page */ "./src/app/nova-senha/nova-senha.page.ts");




const routes = [
    {
        path: '',
        component: _nova_senha_page__WEBPACK_IMPORTED_MODULE_3__["NovaSenhaPage"]
    }
];
let NovaSenhaPageRoutingModule = class NovaSenhaPageRoutingModule {
};
NovaSenhaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NovaSenhaPageRoutingModule);



/***/ }),

/***/ "./src/app/nova-senha/nova-senha.module.ts":
/*!*************************************************!*\
  !*** ./src/app/nova-senha/nova-senha.module.ts ***!
  \*************************************************/
/*! exports provided: NovaSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSenhaPageModule", function() { return NovaSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nova_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nova-senha-routing.module */ "./src/app/nova-senha/nova-senha-routing.module.ts");
/* harmony import */ var _nova_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-senha.page */ "./src/app/nova-senha/nova-senha.page.ts");







let NovaSenhaPageModule = class NovaSenhaPageModule {
};
NovaSenhaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nova_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["NovaSenhaPageRoutingModule"]
        ],
        declarations: [_nova_senha_page__WEBPACK_IMPORTED_MODULE_6__["NovaSenhaPage"]]
    })
], NovaSenhaPageModule);



/***/ }),

/***/ "./src/app/nova-senha/nova-senha.page.scss":
/*!*************************************************!*\
  !*** ./src/app/nova-senha/nova-senha.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdmEtc2VuaGEvbm92YS1zZW5oYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/nova-senha/nova-senha.page.ts":
/*!***********************************************!*\
  !*** ./src/app/nova-senha/nova-senha.page.ts ***!
  \***********************************************/
/*! exports provided: NovaSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSenhaPage", function() { return NovaSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let NovaSenhaPage = class NovaSenhaPage {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Sucesso',
                message: 'O foi enviado um  e-mail com reset de senha',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
};
NovaSenhaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
NovaSenhaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nova-senha',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nova-senha.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nova-senha/nova-senha.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nova-senha.page.scss */ "./src/app/nova-senha/nova-senha.page.scss")).default]
    })
], NovaSenhaPage);



/***/ })

}]);
//# sourceMappingURL=nova-senha-nova-senha-module-es2015.js.map