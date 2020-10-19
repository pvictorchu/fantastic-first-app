(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visualizacaoChat-visualizacaoChat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/visualizacaoChat/visualizacaoChat.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visualizacaoChat/visualizacaoChat.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVisualizacaoChatVisualizacaoChatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pokémon Yellow</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Mega Man X</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>The Legend of Zelda</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Pac-Man</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Super Mario World</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/visualizacaoChat/visualizacaoChat-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/visualizacaoChat/visualizacaoChat-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: VisualizacaoChatPageRoutingModule */

    /***/
    function srcAppVisualizacaoChatVisualizacaoChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisualizacaoChatPageRoutingModule", function () {
        return VisualizacaoChatPageRoutingModule;
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


      var _visualizacaoChat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visualizacaoChat.page */
      "./src/app/visualizacaoChat/visualizacaoChat.page.ts");

      var routes = [{
        path: 'visualizacaoChat',
        component: _visualizacaoChat_page__WEBPACK_IMPORTED_MODULE_3__["VisualizacaoChatPage"]
      }];

      var VisualizacaoChatPageRoutingModule = function VisualizacaoChatPageRoutingModule() {
        _classCallCheck(this, VisualizacaoChatPageRoutingModule);
      };

      VisualizacaoChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisualizacaoChatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/visualizacaoChat/visualizacaoChat.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/visualizacaoChat/visualizacaoChat.module.ts ***!
      \*************************************************************/

    /*! exports provided: VisualizacaoChatPageModule */

    /***/
    function srcAppVisualizacaoChatVisualizacaoChatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisualizacaoChatPageModule", function () {
        return VisualizacaoChatPageModule;
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


      var _visualizacaoChat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visualizacaoChat-routing.module */
      "./src/app/visualizacaoChat/visualizacaoChat-routing.module.ts");
      /* harmony import */


      var _visualizacaoChat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visualizacaoChat.page */
      "./src/app/visualizacaoChat/visualizacaoChat.page.ts");

      var VisualizacaoChatPageModule = function VisualizacaoChatPageModule() {
        _classCallCheck(this, VisualizacaoChatPageModule);
      };

      VisualizacaoChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visualizacaoChat_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisualizacaoChatPageRoutingModule"]],
        declarations: [_visualizacaoChat_page__WEBPACK_IMPORTED_MODULE_6__["VisualizacaoChatPage"]]
      })], VisualizacaoChatPageModule);
      /***/
    },

    /***/
    "./src/app/visualizacaoChat/visualizacaoChat.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/visualizacaoChat/visualizacaoChat.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVisualizacaoChatVisualizacaoChatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc3VhbGl6YWNhb0NoYXQvdmlzdWFsaXphY2FvQ2hhdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/visualizacaoChat/visualizacaoChat.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/visualizacaoChat/visualizacaoChat.page.ts ***!
      \***********************************************************/

    /*! exports provided: VisualizacaoChatPage */

    /***/
    function srcAppVisualizacaoChatVisualizacaoChatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisualizacaoChatPage", function () {
        return VisualizacaoChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VisualizacaoChatPage = /*#__PURE__*/function () {
        function VisualizacaoChatPage() {
          _classCallCheck(this, VisualizacaoChatPage);
        }

        _createClass(VisualizacaoChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VisualizacaoChatPage;
      }();

      VisualizacaoChatPage.ctorParameters = function () {
        return [];
      };

      VisualizacaoChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visualizacaoChat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visualizacaoChat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/visualizacaoChat/visualizacaoChat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visualizacaoChat.page.scss */
        "./src/app/visualizacaoChat/visualizacaoChat.page.scss"))["default"]]
      })], VisualizacaoChatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=visualizacaoChat-visualizacaoChat-module-es5.js.map