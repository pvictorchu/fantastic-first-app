(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/chat/chat-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/chat/chat-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: ChatPageRoutingModule */

    /***/
    function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
        return ChatPageRoutingModule;
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


      var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat.page */
      "./src/app/chat/chat.page.ts");

      var routes = [{
        path: 'chat',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
      }];

      var ChatPageRoutingModule = function ChatPageRoutingModule() {
        _classCallCheck(this, ChatPageRoutingModule);
      };

      ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/chat/chat.module.ts":
    /*!*************************************!*\
      !*** ./src/app/chat/chat.module.ts ***!
      \*************************************/

    /*! exports provided: ChatPageModule */

    /***/
    function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
        return ChatPageModule;
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


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-routing.module */
      "./src/app/chat/chat-routing.module.ts");
      /* harmony import */


      var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat.page */
      "./src/app/chat/chat.page.ts");

      var ChatPageModule = function ChatPageModule() {
        _classCallCheck(this, ChatPageModule);
      };

      ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
      })], ChatPageModule);
      /***/
    },

    /***/
    "./src/app/chat/chat.page.scss":
    /*!*************************************!*\
      !*** ./src/app/chat/chat.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/chat/chat.page.ts":
    /*!***********************************!*\
      !*** ./src/app/chat/chat.page.ts ***!
      \***********************************/

    /*! exports provided: ChatPage */

    /***/
    function srcAppChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
        return ChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ChatPage = /*#__PURE__*/function () {
        function ChatPage() {
          _classCallCheck(this, ChatPage);
        }

        _createClass(ChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatPage;
      }();

      ChatPage.ctorParameters = function () {
        return [];
      };

      ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chat.page.scss */
        "./src/app/chat/chat.page.scss"))["default"]]
      })], ChatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-chat-module-es5.js.map