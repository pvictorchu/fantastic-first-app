(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeedFeedPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" routerLink=\"/perfil\">\r\n      <ion-avatar class=\"avatar\" slot=\"icon-only\">\r\n        <img class=\"perfil-icon\" src=\"https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg\">\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Local Promo</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/visualizacao-chat\">\r\n        <ion-icon slot=\"icon-only\" name=\"paper-plane\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\" (click)=\"baterFoto()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <app-photo-card *ngFor=\"let p of photos\" [photo]=\"p\"></app-photo-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/feed/feed-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/feed/feed-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: FeedPageRoutingModule */

    /***/
    function srcAppFeedFeedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
        return FeedPageRoutingModule;
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


      var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feed.page */
      "./src/app/feed/feed.page.ts");

      var routes = [{
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
      }];

      var FeedPageRoutingModule = function FeedPageRoutingModule() {
        _classCallCheck(this, FeedPageRoutingModule);
      };

      FeedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/feed/feed.module.ts":
    /*!*************************************!*\
      !*** ./src/app/feed/feed.module.ts ***!
      \*************************************/

    /*! exports provided: FeedPageModule */

    /***/
    function srcAppFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
        return FeedPageModule;
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


      var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feed-routing.module */
      "./src/app/feed/feed-routing.module.ts");
      /* harmony import */


      var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feed.page */
      "./src/app/feed/feed.page.ts");
      /* harmony import */


      var _components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/photo-card/photo-card.component */
      "./src/app/components/photo-card/photo-card.component.ts");

      var FeedPageModule = function FeedPageModule() {
        _classCallCheck(this, FeedPageModule);
      };

      FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"], _components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_7__["PhotoCardComponent"]]
      })], FeedPageModule);
      /***/
    },

    /***/
    "./src/app/feed/feed.page.scss":
    /*!*************************************!*\
      !*** ./src/app/feed/feed.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeedFeedPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".story-avatar {\n  width: 3.25em;\n  height: 3.25em;\n  border: 2px solid orange;\n}\n\n.perfil-icon {\n  border: 2px solid #00eeff;\n  width: 3em;\n  height: 3em;\n}\n\n.avatar {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcnktYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzLjI1ZW07XHJcbiAgICBoZWlnaHQ6IDMuMjVlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcclxufVxyXG5cclxuLnBlcmZpbC1pY29uIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyMzgsIDI1NSk7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/feed/feed.page.ts":
    /*!***********************************!*\
      !*** ./src/app/feed/feed.page.ts ***!
      \***********************************/

    /*! exports provided: FeedPage */

    /***/
    function srcAppFeedFeedPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
        return FeedPage;
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
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var FeedPage = /*#__PURE__*/function () {
        function FeedPage(db, auth, router, camera) {
          _classCallCheck(this, FeedPage);

          this.db = db;
          this.auth = auth;
          this.router = router;
          this.camera = camera;
          this.photos = [];
          this.imagem = null;
          this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
        }

        _createClass(FeedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (!this.auth.isLoggedIn) this.router.navigate(['home']);else {
              this.db.collection('/feed/').snapshotChanges().subscribe(function (res) {
                console.log(res);
                res.forEach(function (c) {
                  _this.photos.push(Object.assign({
                    originalid: c.payload.doc.id
                  }, c.payload.doc.data()));
                }); // this.photos = <Photo[]> res.filter((e : Photo) => e.user.id != 50);
              });
            }
          }
        }, {
          key: "baterFoto",
          value: function baterFoto() {
            var _this2 = this;

            this.camera.getPicture(this.options).then(function (imageData) {
              _this2.imagem = 'data:image/jpeg;base64,' + imageData;
            }, function (err) {
              alert('Ops!\nHouve um erro');
              console.log(err);
            });
          }
        }]);

        return FeedPage;
      }();

      FeedPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _compartilhado_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }];
      };

      FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./feed.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./feed.page.scss */
        "./src/app/feed/feed.page.scss"))["default"]]
      })], FeedPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feed-feed-module-es5.js.map