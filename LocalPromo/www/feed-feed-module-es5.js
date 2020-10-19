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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/perfil\">\n      <ion-avatar class=\"avatar\" slot=\"icon-only\">\n        <img class=\"perfil-icon\" src=\"https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg\">\n      </ion-avatar>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Local Promo</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"paper-plane\" routerLink = \"/messages\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-photo-card *ngFor=\"let p of photos\" [photo]=\"p\"></app-photo-card>\n</ion-content>";
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


      var src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/photos.service */
      "./src/app/services/photos.service.ts");

      var FeedPage = /*#__PURE__*/function () {
        function FeedPage(photoService) {
          _classCallCheck(this, FeedPage);

          this.photoService = photoService;
        }

        _createClass(FeedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.photos = this.photoService.allPhotos();
          }
        }]);

        return FeedPage;
      }();

      FeedPage.ctorParameters = function () {
        return [{
          type: src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"]
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