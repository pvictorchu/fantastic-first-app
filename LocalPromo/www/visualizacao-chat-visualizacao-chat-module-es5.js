(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visualizacao-chat-visualizacao-chat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/visualizacao-chat/visualizacao-chat.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visualizacao-chat/visualizacao-chat.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVisualizacaoChatVisualizacaoChatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"feed\"></ion-back-button>\n      </ion-buttons>\n      <ion-title slot=\"start\">Conversas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    \n    <ion-item>\n      <ion-label>\n        <h2>Bolo com ingredientes faltando</h2>\n        <p color=\"medium\">M&M Confeitaria</p>\n      </ion-label>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://www.w3schools.com/howto/img_avatar.png\">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <h2>Revisão de taxas</h2>\n        <p color=\"medium\">DoceSabor Confeitaria</p>\n      </ion-label>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://www.learningindrops.com.br/assets/img/img_avatar2.png\">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <h2>Entregas realizadas 09/2020</h2>\n        <p color=\"medium\">Mari Doces</p>\n      </ion-label>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://lh3.googleusercontent.com/proxy/iOcmPOwxJfGniZ9x1Q41Fc0nCIakhC5ZVvCNdpq6KsVAl8IUhO7AG0rqgdMQWNSiVwmKjavnbvsDojfYdzwmGTwTsz3-sww\">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-label onclick=\"\">\n        <h2>Documentos Pendentes</h2>\n        <p color=\"medium\">Doce Forma</p>\n      </ion-label>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://www.w3schools.com/bootstrap4/img_avatar6.png\">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <h2>Pedidos não finalizados</h2>\n        <p color=\"medium\">Dolceria</p>\n      </ion-label>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://lh3.googleusercontent.com/proxy/mCKX2R64WpKnAmZUzBlGvvOvEV23PaoOR6_BWEpCsILOmpxlazhjhFd9nFt2FFK0bDYY0MPDjwJbtKeT\">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/visualizacao-chat/visualizacao-chat-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/visualizacao-chat/visualizacao-chat-routing.module.ts ***!
      \***********************************************************************/

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


      var _visualizacao_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visualizacao-chat.page */
      "./src/app/visualizacao-chat/visualizacao-chat.page.ts");

      var routes = [{
        path: '',
        component: _visualizacao_chat_page__WEBPACK_IMPORTED_MODULE_3__["VisualizacaoChatPage"]
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
    "./src/app/visualizacao-chat/visualizacao-chat.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/visualizacao-chat/visualizacao-chat.module.ts ***!
      \***************************************************************/

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


      var _visualizacao_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visualizacao-chat-routing.module */
      "./src/app/visualizacao-chat/visualizacao-chat-routing.module.ts");
      /* harmony import */


      var _visualizacao_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visualizacao-chat.page */
      "./src/app/visualizacao-chat/visualizacao-chat.page.ts");

      var VisualizacaoChatPageModule = function VisualizacaoChatPageModule() {
        _classCallCheck(this, VisualizacaoChatPageModule);
      };

      VisualizacaoChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visualizacao_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisualizacaoChatPageRoutingModule"]],
        declarations: [_visualizacao_chat_page__WEBPACK_IMPORTED_MODULE_6__["VisualizacaoChatPage"]]
      })], VisualizacaoChatPageModule);
      /***/
    },

    /***/
    "./src/app/visualizacao-chat/visualizacao-chat.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/visualizacao-chat/visualizacao-chat.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVisualizacaoChatVisualizacaoChatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc3VhbGl6YWNhby1jaGF0L3Zpc3VhbGl6YWNhby1jaGF0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/visualizacao-chat/visualizacao-chat.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/visualizacao-chat/visualizacao-chat.page.ts ***!
      \*************************************************************/

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
        selector: 'app-visualizacao-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visualizacao-chat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/visualizacao-chat/visualizacao-chat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visualizacao-chat.page.scss */
        "./src/app/visualizacao-chat/visualizacao-chat.page.scss"))["default"]]
      })], VisualizacaoChatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=visualizacao-chat-visualizacao-chat-module-es5.js.map