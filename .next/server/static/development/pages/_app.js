module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/store */ "./src/store.js");

var _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // import './static/null.css' // fixed nextjs v7 bug. see here: https://github.com/zeit/next.js/issues/5291

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, mobxStore;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (typeof window === 'undefined') {
                  Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["useStaticRendering"])(true);
                }

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                pageProps = _context.sent;

              case 7:
                mobxStore = Object(_src_store__WEBPACK_IMPORTED_MODULE_4__["initializeStore"])();
                ctx.mobxStore = mobxStore;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  initialMobxState: mobxStore
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));
    var isServer = !process.browser;
    _this.mobxStore = isServer ? props.initialMobxState : Object(_src_store__WEBPACK_IMPORTED_MODULE_4__["initializeStore"])(props.initialMobxState);
    return _this;
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](mobx_react__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: this.mobxStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        id: "root",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils */ "./src/utils/index.js");
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }




var isServer = !process.browser;
Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useStaticRendering"])(isServer);
var Store = (_class = (_temp =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "showSign", _descriptor, this);

    _initializerDefineProperty(this, "showNav", _descriptor2, this);

    _initializerDefineProperty(this, "hisIndex", _descriptor3, this);

    _initializerDefineProperty(this, "navIndex", _descriptor4, this);

    _initializerDefineProperty(this, "building", _descriptor5, this);

    _initializerDefineProperty(this, "idle", _descriptor6, this);

    _initializerDefineProperty(this, "all", _descriptor7, this);

    _initializerDefineProperty(this, "physical", _descriptor8, this);

    _initializerDefineProperty(this, "physicalInfo", _descriptor9, this);

    _initializerDefineProperty(this, "virtualInfo", _descriptor10, this);

    _initializerDefineProperty(this, "tabBody", _descriptor11, this);

    _initializerDefineProperty(this, "virtual", _descriptor12, this);

    _initializerDefineProperty(this, "tabIndex", _descriptor13, this);

    _initializerDefineProperty(this, "searchValue", _descriptor14, this);

    _initializerDefineProperty(this, "addModal", _descriptor15, this);

    _initializerDefineProperty(this, "addIndex", _descriptor16, this);

    _initializerDefineProperty(this, "addBrowser", _descriptor17, this);

    _initializerDefineProperty(this, "screenType", _descriptor18, this);
  }

  _createClass(Store, [{
    key: "changeStoreValue",
    //0:<=768 1:768-1024 2:1024-1200 3:1200
    value: function changeStoreValue(type, value) {
      this[type] = value;
    }
  }, {
    key: "getTabBody",
    value: function getTabBody(index) {
      switch (index) {
        case 0:
          this.tabBody = _src_utils__WEBPACK_IMPORTED_MODULE_2__["physicalInfo"].concat(_src_utils__WEBPACK_IMPORTED_MODULE_2__["virtualInfo"]);
          break;

        case 1:
          this.tabBody = _src_utils__WEBPACK_IMPORTED_MODULE_2__["physicalInfo"];
          break;

        case 2:
          this.tabBody = _src_utils__WEBPACK_IMPORTED_MODULE_2__["virtualInfo"];
          break;
      }
    }
  }, {
    key: "handleRes",
    value: function handleRes(addIndex, type, delIndex) {
      var _this = this;

      this.tabBody.map(function (item, index) {
        if (addIndex === index) {
          if (type === 'add') {
            item.browserInfo.push(_this.addBrowser);
          } else {
            item.browserInfo.splice(delIndex, 1);
          }
        }
      });
      this.addModal = false;
      this.addBrowser = '';
    }
  }]);

  return Store;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showSign", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showNav", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "hisIndex", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "navIndex", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "building", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "idle", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "all", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 6;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "physical", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "physicalInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "virtualInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "tabBody", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return _src_utils__WEBPACK_IMPORTED_MODULE_2__["physicalInfo"].concat(_src_utils__WEBPACK_IMPORTED_MODULE_2__["virtualInfo"]);
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "virtual", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "tabIndex", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "searchValue", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "addModal", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "addIndex", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "addBrowser", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "screenType", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "changeStoreValue", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeStoreValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTabBody", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getTabBody"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRes", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleRes"), _class.prototype)), _class);
var store = null;
function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }

  if (store === null) {
    store = new Store(isServer, initialData);
  }

  return store;
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: isPC, navInfo, historyInfo, tabType, physicalInfo, virtualInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return isPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navInfo", function() { return navInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyInfo", function() { return historyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabType", function() { return tabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physicalInfo", function() { return physicalInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtualInfo", function() { return virtualInfo; });
var isPC = function isPC() {
  if (typeof window !== 'undefined') {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;
    Agents.map(function (item) {
      if (userAgentInfo.indexOf(item) > 0) {
        flag = false;
      }
    });
    return flag;
  }
};
var navInfo = [{
  icon: 'icon-dashboard fonts',
  txt: 'DASHBOARD'
}, {
  icon: 'icon-sitemap fonts',
  txt: 'AGENT'
}, {
  icon: 'icon-boat fonts',
  txt: 'MY CRUISE'
}, {
  icon: 'icon-life-bouy fonts',
  txt: 'HELP'
}];
var historyInfo = ['bjstdmngbgr01/Acceptance_test..', 'bjstdmngbgr02/Acceptance_test..', 'bjstdmngbgr03/Acceptance_test..', 'bjstdmngbgr04/Acceptance_test..', 'bjstdmngbgr05/Acceptance_test..', 'bjstdmngbgr06/Acceptance_test..', 'bjstdmngbgr07/Acceptance_test..'];
var tabType = ['All', 'Physical', 'Virtual'];
var physicalInfo = [{
  img: '/static/img/windows.png',
  status: 'idle',
  desc: 'bjstdmngbgr01.thougntworks.com',
  browserInfo: ['Firefox', 'Safari', 'Chrome']
}, {
  img: '/static/img/windows.png',
  status: 'building',
  desc: 'bjstdmngbgr01.thougntworks.com',
  browserInfo: ['Firefox', 'Safari', 'Ubuntu']
}, {
  img: '/static/img/cent_os.png',
  status: 'building',
  desc: 'bjstdmngbgr05.thougntworks.com',
  browserInfo: ['Firefox', 'Safari']
}];
var virtualInfo = [{
  img: '/static/img/debin.png',
  status: 'building',
  desc: 'bjstdmngbgr08.thougntworks.com',
  browserInfo: ['Firefox', 'Safari']
}, {
  img: '/static/img/suse.png',
  status: 'idle',
  desc: 'bjstdmngbgr11.thougntworks.com',
  browserInfo: ['Firefox', 'Safari']
}, {
  img: '/static/img/ubuntu.png',
  status: 'idle',
  desc: 'bjstdmngbgr15.thougntworks.com',
  browserInfo: ['Safari']
}];

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map