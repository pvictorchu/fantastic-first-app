(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/view/view.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/view/view.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPerfilViewViewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/home/profile\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Informações da foto</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <app-photo-card [photo]=\"photo\"></app-photo-card>\n  </ion-content>";
      /***/
    },

    /***/
    "./src/app/perfil/view/view-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/perfil/view/view-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: ViewPageRoutingModule */

    /***/
    function srcAppPerfilViewViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function () {
        return ViewPageRoutingModule;
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


      var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view.page */
      "./src/app/perfil/view/view.page.ts");

      var routes = [{
        path: ':id',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
      }];

      var ViewPageRoutingModule = function ViewPageRoutingModule() {
        _classCallCheck(this, ViewPageRoutingModule);
      };

      ViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/perfil/view/view.module.ts":
    /*!********************************************!*\
      !*** ./src/app/perfil/view/view.module.ts ***!
      \********************************************/

    /*! exports provided: ViewPageModule */

    /***/
    function srcAppPerfilViewViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPageModule", function () {
        return ViewPageModule;
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


      var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-routing.module */
      "./src/app/perfil/view/view-routing.module.ts");
      /* harmony import */


      var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view.page */
      "./src/app/perfil/view/view.page.ts");
      /* harmony import */


      var src_app_components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/photo-card/photo-card.component */
      "./src/app/components/photo-card/photo-card.component.ts");

      var ViewPageModule = function ViewPageModule() {
        _classCallCheck(this, ViewPageModule);
      };

      ViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPageRoutingModule"]],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"], src_app_components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_7__["PhotoCardComponent"]]
      })], ViewPageModule);
      /***/
    },

    /***/
    "./src/app/perfil/view/view.page.scss":
    /*!********************************************!*\
      !*** ./src/app/perfil/view/view.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPerfilViewViewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC92aWV3L3ZpZXcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/perfil/view/view.page.ts":
    /*!******************************************!*\
      !*** ./src/app/perfil/view/view.page.ts ***!
      \******************************************/

    /*! exports provided: ViewPage */

    /***/
    function srcAppPerfilViewViewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPage", function () {
        return ViewPage;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var ViewPage = /*#__PURE__*/function () {
        function ViewPage(route, db) {
          _classCallCheck(this, ViewPage);

          this.route = route;
          this.db = db;
          this.photo = {
            originalid: null,
            id: null,
            comment_count: null,
            comment: [{
              uid: null,
              autor: null,
              id: null,
              message: null,
              photo_url: null
            }],
            description: null,
            liked: null,
            place: null,
            user: null
          };
        }

        _createClass(ViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var id;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = +this.route.snapshot.paramMap.get('id');
                      console.log(this.photo);
                      this.db.collection('/feed/', function (e) {
                        return e.where("id", "==", id);
                      }).valueChanges().subscribe(function (e) {
                        console.log(e);
                        _this.photo = e[0];
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ViewPage;
      }();

      ViewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      };

      ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/view/view.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view.page.scss */
        "./src/app/perfil/view/view.page.scss"))["default"]]
      })], ViewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=view-view-module-es5.js.map