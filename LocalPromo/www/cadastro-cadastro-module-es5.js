(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCadastroCadastroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-header>\r\n  <ion-toolbar>    \r\n    <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registrar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  \r\n    <ion-item>\r\n        <ion-label position=\"floating\">Nome Completo</ion-label>\r\n        <ion-input [(ngModel)]=\"user.nomeCompleto\" name=\"fName\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input [(ngModel)]=\"user.email\" name=\"lName\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Senha</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"user.senha\" name=\"password\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-button type=\"submit\" expand=\"full\" color=\"primary\" (click)=\"register()\" >Registrar</ion-button>\r\n\r\n\r\n</ion-content>  \r\n";
      /***/
    },

    /***/
    "./src/app/cadastro/cadastro-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CadastroPageRoutingModule */

    /***/
    function srcAppCadastroCadastroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function () {
        return CadastroPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cadastro.page */
      "./src/app/cadastro/cadastro.page.ts");

      var routes = [{
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
      }];

      var CadastroPageRoutingModule = function CadastroPageRoutingModule() {
        _classCallCheck(this, CadastroPageRoutingModule);
      };

      CadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CadastroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/cadastro/cadastro.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/cadastro/cadastro.module.ts ***!
      \*********************************************/

    /*! exports provided: CadastroPageModule */

    /***/
    function srcAppCadastroCadastroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function () {
        return CadastroPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro-routing.module */
      "./src/app/cadastro/cadastro-routing.module.ts");
      /* harmony import */


      var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cadastro.page */
      "./src/app/cadastro/cadastro.page.ts");

      var CadastroPageModule = function CadastroPageModule() {
        _classCallCheck(this, CadastroPageModule);
      };

      CadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"]],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
      })], CadastroPageModule);
      /***/
    },

    /***/
    "./src/app/cadastro/cadastro.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/cadastro/cadastro.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCadastroCadastroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/cadastro/cadastro.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/cadastro/cadastro.page.ts ***!
      \*******************************************/

    /*! exports provided: CadastroPage */

    /***/
    function srcAppCadastroCadastroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CadastroPage", function () {
        return CadastroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _compartilhado_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../compartilhado/authentication-service */
      "./src/app/compartilhado/authentication-service.ts");

      var CadastroPage = /*#__PURE__*/function () {
        function CadastroPage(authService) {
          _classCallCheck(this, CadastroPage);

          this.authService = authService;
          this.user = {
            email: "",
            senha: "",
            nomeCompleto: ""
          };
        }

        _createClass(CadastroPage, [{
          key: "register",
          value: function register() {
            this.authService.RegisterUser(this.user.email, this.user.senha);
          }
        }]);

        return CadastroPage;
      }();

      CadastroPage.ctorParameters = function () {
        return [{
          type: _compartilhado_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      };

      CadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cadastro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cadastro.page.scss */
        "./src/app/cadastro/cadastro.page.scss"))["default"]]
      })], CadastroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cadastro-cadastro-module-es5.js.map