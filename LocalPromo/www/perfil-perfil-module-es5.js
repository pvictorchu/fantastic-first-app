(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Perfil</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col>\n      <ion-avatar class=\"profile-pic\">\n        <img src=\"https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg\" alt=\"\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col>\n      <h3>@SweetTreatConfeitaria</h3>\n    </ion-col>\n  </ion-row>\n\n  <p style=\"padding: 10px;\">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>\n\n  <ion-segment [(ngModel)]=\"gridSize\">\n    <ion-segment-button value=\"4\">\n      <ion-icon name=\"grid\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"12\">\n      <ion-icon name=\"square\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-row>\n    <ion-col [routerLink]=\"['view', p.id]\" class=\"grid-cell\" [size]=\"gridSize\" *ngFor=\"let p of photos\">\n      <img [src]=\"p.photo_url\" alt=\"\">\n    </ion-col>\n  </ion-row>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/perfil/perfil-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/perfil/perfil-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PerfilPageRoutingModule */

    /***/
    function srcAppPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
        return PerfilPageRoutingModule;
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


      var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil.page */
      "./src/app/perfil/perfil.page.ts");

      var routes = [{
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
      }, {
        path: 'view',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | view-view-module */
          [__webpack_require__.e("common"), __webpack_require__.e("view-view-module")]).then(__webpack_require__.bind(null,
          /*! ./view/view.module */
          "./src/app/perfil/view/view.module.ts")).then(function (m) {
            return m.ViewPageModule;
          });
        }
      }];

      var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
        _classCallCheck(this, PerfilPageRoutingModule);
      };

      PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/perfil/perfil.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/perfil/perfil.module.ts ***!
      \*****************************************/

    /*! exports provided: PerfilPageModule */

    /***/
    function srcAppPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
        return PerfilPageModule;
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


      var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-routing.module */
      "./src/app/perfil/perfil-routing.module.ts");
      /* harmony import */


      var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil.page */
      "./src/app/perfil/perfil.page.ts");

      var PerfilPageModule = function PerfilPageModule() {
        _classCallCheck(this, PerfilPageModule);
      };

      PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
      })], PerfilPageModule);
      /***/
    },

    /***/
    "./src/app/perfil/perfil.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/perfil/perfil.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-pic {\n  width: 6em;\n  height: 6em;\n}\n\n.grid-cell {\n  transition: all 0.3s;\n}\n\n.div {\n  overflow: hidden;\n  position: relative;\n}\n\n.div-img {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpYyB7XG4gICAgd2lkdGg6IDZlbTtcbiAgICBoZWlnaHQ6IDZlbTtcbn1cblxuLmdyaWQtY2VsbCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5kaXZ7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uZGl2LWltZ3tcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/perfil/perfil.page.ts":
    /*!***************************************!*\
      !*** ./src/app/perfil/perfil.page.ts ***!
      \***************************************/

    /*! exports provided: PerfilPage */

    /***/
    function srcAppPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
        return PerfilPage;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _compartilhado_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../compartilhado/authentication-service */
      "./src/app/compartilhado/authentication-service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PerfilPage = /*#__PURE__*/function () {
        function PerfilPage(db, auth, router) {
          _classCallCheck(this, PerfilPage);

          this.db = db;
          this.auth = auth;
          this.router = router;
          this.gridSize = 4;
        }

        _createClass(PerfilPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (!this.auth.isLoggedIn) this.router.navigate(['home']);else {
              this.currentUser = JSON.parse(localStorage.getItem('user'));
              console.log(this.currentUser);
              this.db.collection('/feed/', function (e) {
                return e.where("user.uid", "==", _this.currentUser.uid);
              }).valueChanges().subscribe(function (res) {
                _this.photos = res;
                console.log(res);
              }); // console.log(this.currentUser)
              // this.db.collection('/feed/', e => e.where("user.uid", "==", 50)).valueChanges().subscribe(res => {
              //   this.photos = <Photo[]>res;
              //   console.log(res);
              // })
            }
          }
        }]);

        return PerfilPage;
      }();

      PerfilPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _compartilhado_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./perfil.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./perfil.page.scss */
        "./src/app/perfil/perfil.page.scss"))["default"]]
      })], PerfilPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=perfil-perfil-module-es5.js.map