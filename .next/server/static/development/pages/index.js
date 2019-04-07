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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head/index.js");
/* harmony import */ var _src_components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Nav */ "./src/components/Nav/index.js");
var _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/Head/index.js":
/*!**************************************!*\
  !*** ./src/components/Head/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Head; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./src/components/Head/index.style.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store.js");
var _dec,
    _class,
    _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/src/components/Head/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Logo = function Logo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M74.728 63.84h8.352c2.592 0 4.656-.256 6.192-.767 1.536-.51 2.712-1.243 3.528-2.197.816-.953 1.368-2.128 1.656-3.525.288-1.396.432-3.014.432-4.853s-.144-3.456-.432-4.853c-.288-1.396-.888-2.588-1.8-3.576-.912-.987-2.184-1.72-3.816-2.196-1.632-.477-3.792-.716-6.48-.716h-7.632V63.84zM60.04 31.35h23.616c17.28 0 25.92 7.117 25.92 21.353 0 4.223-.936 7.85-2.808 10.88-1.872 3.032-5.16 5.467-9.864 7.306l15.84 33.205H97.192l-13.68-31.06h-8.784v31.06H60.04V31.35zm108.864 56.397a12.51 12.51 0 0 1-1.872 6.641c-1.248 2.044-2.952 3.832-5.112 5.364-2.16 1.533-4.68 2.742-7.56 3.627-2.88.886-5.952 1.328-9.216 1.328-3.264 0-6.336-.442-9.216-1.328-2.88-.885-5.4-2.094-7.56-3.627-2.16-1.532-3.864-3.32-5.112-5.364a12.51 12.51 0 0 1-1.872-6.64V31.348h14.688v55.376c0 2.589.864 4.496 2.592 5.722 1.728 1.226 3.888 1.839 6.48 1.839 2.592 0 4.752-.613 6.48-1.839 1.728-1.226 2.592-3.133 2.592-5.722V31.35h14.688v56.398zm90.72-35.453h-14.688v-2.35c0-2.384-.792-4.444-2.376-6.181-1.584-1.737-4.248-2.606-7.992-2.606-2.016 0-3.672.273-4.968.818-1.296.545-2.304 1.243-3.024 2.094a7.346 7.346 0 0 0-1.512 2.963 14.146 14.146 0 0 0-.432 3.525c0 1.43.072 2.64.216 3.627.144.988.504 1.84 1.08 2.554.576.716 1.416 1.346 2.52 1.89 1.104.545 2.616 1.09 4.536 1.635l11.232 3.168c3.264.885 5.904 1.924 7.92 3.116 2.016 1.192 3.576 2.588 4.68 4.189 1.104 1.6 1.848 3.44 2.232 5.517.384 2.077.576 4.444.576 7.1 0 3.066-.432 5.91-1.296 8.532-.864 2.622-2.28 4.87-4.248 6.743-1.968 1.873-4.584 3.355-7.848 4.445-3.264 1.09-7.248 1.634-11.952 1.634-3.552 0-6.864-.442-9.936-1.328-3.072-.885-5.712-2.094-7.92-3.627-2.208-1.532-3.96-3.354-5.256-5.466-1.296-2.112-1.944-4.393-1.944-6.845v-3.883h14.688v3.27c0 1.907.792 3.627 2.376 5.16 1.584 1.532 4.248 2.298 7.992 2.298 2.496 0 4.44-.255 5.832-.766 1.392-.511 2.448-1.226 3.168-2.146.72-.92 1.176-2.06 1.368-3.423.192-1.362.288-2.86.288-4.495 0-1.907-.096-3.474-.288-4.7-.192-1.226-.6-2.214-1.224-2.963-.624-.75-1.488-1.362-2.592-1.839-1.104-.477-2.568-.988-4.392-1.532l-10.512-3.066c-6.336-1.839-10.584-4.274-12.744-7.305-2.16-3.03-3.24-6.828-3.24-11.392 0-2.724.528-5.313 1.584-7.765s2.616-4.563 4.68-6.334c2.064-1.771 4.68-3.185 7.848-4.24 3.168-1.056 6.864-1.584 11.088-1.584 3.648 0 6.984.477 10.008 1.43 3.024.954 5.616 2.214 7.776 3.78 2.16 1.567 3.816 3.321 4.968 5.263 1.152 1.94 1.728 3.933 1.728 5.976v5.109zm10.944-20.945h43.776v9.808h-29.088v21.354H310.6v9.808h-25.344v21.354h29.088v10.421h-43.776V31.35z",
    fill: "#2D4054",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#00B4CF",
    d: "M183 1h14.688v102.528H183zM45.72 90.568c-1.2 2.88-2.856 5.4-4.968 7.56-2.112 2.16-4.584 3.888-7.416 5.184-2.832 1.296-5.88 1.944-9.144 1.944-2.784 0-5.616-.384-8.496-1.152a20.618 20.618 0 0 1-7.776-3.96c-2.304-1.872-4.2-4.344-5.688-7.416C.744 89.656 0 85.768 0 81.064V24.616c0-3.36.576-6.48 1.728-9.36 1.152-2.88 2.784-5.376 4.896-7.488S11.256 4 14.184 2.8c2.928-1.2 6.168-1.8 9.72-1.8 3.36 0 6.48.6 9.36 1.8 2.88 1.2 5.376 2.88 7.488 5.04s3.768 4.752 4.968 7.776c1.2 3.024 1.8 6.312 1.8 9.864v5.76H32.832v-4.896c0-2.88-.816-5.376-2.448-7.488-1.632-2.112-3.84-3.168-6.624-3.168-3.648 0-6.072 1.128-7.272 3.384-1.2 2.256-1.8 5.112-1.8 8.568v52.416c0 2.976.648 5.472 1.944 7.488 1.296 2.016 3.624 3.024 6.984 3.024.96 0 1.992-.168 3.096-.504a8.498 8.498 0 0 0 3.024-1.656c.912-.768 1.656-1.824 2.232-3.168.576-1.344.864-3.024.864-5.04v-5.04H47.52c-.4 8.352-1 13.488-1.8 15.408z",
    __self: this
  })));
};

Logo.defaultProps = {
  width: "315",
  height: "106",
  viewBox: "0 0 315 106",
  xmlns: "http://www.w3.org/2000/svg"
};

var Head = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head(props) {
    var _this;

    _classCallCheck(this, Head);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Head).call(this, props));
    _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])();
    return _this;
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var showSign = this.store.showSign;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userSty",
        onClick: function onClick() {
          _this2.store.changeStoreValue('showSign', !showSign);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/img/head.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: showSign ? 'icon-angle-up fonts' : 'icon-angle-down fonts',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), showSign && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signSty",
        onClick: function onClick() {
          _this2.store.changeStoreValue('showSign', !showSign);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-id-card fonts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chooseSty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-sign-in fonts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), "Sign Out")));
    }
  }]);

  return Head;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./src/components/Head/index.style.js":
/*!********************************************!*\
  !*** ./src/components/Head/index.style.js ***!
  \********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nfont-size:0;\nheight:0.9067rem;\ntext-align:center;\nbackground:white;\nbox-shadow:0 0.08rem 0.0533rem #e6e6e6;\nposition:relative;\n>svg{\n  width:2.6667rem;\n  height:0.4rem;\n  padding-top:0.24rem;\n}\n.userSty{\n  position:absolute;\n  right:1.0667rem;\n  top:0.24rem;\n  >img{\n    width:0.5333rem;\n    height:0.5333rem;\n    border-radius:2.6667rem;\n  }\n  >i{\n    font-size:0.3467rem;\n    color:#999;\n    position:absolute;\n    right:-0.4rem;\n    top:0.1067rem;\n  }\n}\n.signSty{\n  position:absolute;\n  top:0.8rem;\n  right:0.0667rem;\n  padding:0.1333rem 0;\n  box-shadow:0.0267rem 0.0267rem 0.0267rem 0.0267rem #e6e6e6;\n  background:white;\n  >div{\n    display:flex;\n    align-items:center;\n    height:0.4rem;\n    padding:0 0.2133rem;\n    font-size:0.2133rem;\n    >i{\n      font-size:0.24rem;\n      padding-right:0.2667rem;\n    }\n  }\n  .chooseSty{\n    background:#efefef;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./src/components/List/index.js":
/*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./src/components/List/index.style.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store.js");
var _dec,
    _class,
    _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/src/components/List/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var List = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
    _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])();
    return _this;
  }

  _createClass(List, [{
    key: "addRes",
    value: function addRes(addIndex) {
      var addBrowser = this.store.addBrowser;

      if (addBrowser) {
        this.store.handleRes(addIndex, 'add');
      } else {
        alert('please input value');
      }
    }
  }, {
    key: "showAddModal",
    value: function showAddModal(btnIndex) {
      this.store.changeStoreValue('addIndex', btnIndex);
      this.store.changeStoreValue('addModal', true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$store = this.store,
          tabBody = _this$store.tabBody,
          addModal = _this$store.addModal,
          addBrowser = _this$store.addBrowser,
          addIndex = _this$store.addIndex;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_style__WEBPACK_IMPORTED_MODULE_1__["ListContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, tabBody && tabBody.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "listSty",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "listFlex",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "up",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-desktop fonts",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, item.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            background: item.status === 'building' ? '#ff9a2a' : '#7fbc39'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, item.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-info fonts",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }), " 192.168.1.102", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-folder fonts left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }), "/var/lib/cruise-agent"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "down",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-plus fonts add",
          onClick: function onClick() {
            _this2.showAddModal(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), item.browserInfo.map(function (o, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: i,
            onClick: function onClick() {
              _this2.store.handleRes(index, 'del', i);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, o, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "icon-trash fonts",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }));
        })), item.status === 'building' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-deny fonts",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), " Deny"), addIndex === index && addModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "triangle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "addModal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-close fonts",
          onClick: function onClick() {
            _this2.store.changeStoreValue('addModal', false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "Separate multiple resource name with commas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          value: addBrowser,
          placeholder: "Input Value",
          onChange: function onChange(e) {
            _this2.store.changeStoreValue('addBrowser', e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "addBtn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            _this2.addRes(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, "Add Resources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "cancel",
          onClick: function onClick() {
            _this2.store.changeStoreValue('addModal', false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Cancel")))))));
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./src/components/List/index.style.js":
/*!********************************************!*\
  !*** ./src/components/List/index.style.js ***!
  \********************************************/
/*! exports provided: ListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmargin:0 0.2667rem 0.2667rem 0;\nfont-size:0;\n.listSty{\n  height:1.3333rem;\n  display:flex;\n  justify-content:flex-start;\n  align-items:center;\n  padding:0 0.1333rem;\n  margin-bottom:0.2667rem;\n  background:white;\n  >img{\n    width:1.0667rem;\n    height:1.0667rem;\n    padding-right:0.2133rem;\n  }\n  .listFlex{\n    flex:1;\n    font-size:0.1867rem;\n    color:#2d4054;\n    .building{\n        background:#ff9a2a;\n    }\n    .up{\n      padding-bottom:0.3467rem;\n      display:flex;\n      align-items:center;\n       >b{\n         color:#00b4cf;\n       }\n       >i{\n         font-size:0.2133rem;\n         color:#999;\n         padding-right:0.1067rem;\n       }\n       >p{\n         color:white;\n         font-size:0.1333rem;\n         padding:0 0.08rem;\n         margin:0 0.2933rem 0 0.1867rem;\n       }\n       .left{\n         padding-left:0.2933rem;\n       }\n    }\n    .down{\n      display:flex;\n      justify-content:space-between;\n      align-items:center;\n      position:relative;\n      .triangle{\n          position:absolute;\n          left:0;\n          top:0.32rem;\n          width:0;\n          height:0;\n          z-index:10;\n          border-left: 0.1067rem solid transparent;\n          border-right: 0.1067rem solid transparent;\n          border-bottom: 0.2133rem solid #00b4cf;\n          &::after{\n            content: '';\n            position: absolute;\n            top: 0.0133rem;\n            left: -0.0933rem;\n            border-left:0.0933rem solid transparent;\n            border-right:0.0933rem solid transparent;\n            border-bottom: 0.2133rem solid white;\n          }\n        }\n      .addModal{\n        display:inline-block;\n        position:absolute;\n        left:-0.2133rem;\n        top:0.5067rem;\n        background:white;\n        color:yellow;\n        border:0.0133rem solid #00b4cf;\n        box-shadow:0 0.0533rem 0.08rem rgba(0,0,0,0.3);\n        padding:0.2133rem 0.1333rem 0.16rem 0.1333rem;\n        font-size:0.1867rem;\n        z-index:2;\n        >i{\n          font-size:0.24rem;\n          color:#00b4cf;\n          position:absolute;\n          right:0.1333rem;\n          top:0.08rem;\n        }\n        >p{\n          font-size:0.16rem;\n          color:#2d4054;\n          padding-bottom:0.1333rem;\n          background:none;\n        }\n        >input{\n          min-width:5.3333rem;\n          border:0.0133rem solid #979797;\n          border-radius:0.0533rem;\n          padding:0.08rem 0 0.08rem 0.1333rem;\n          color:#00b4cf;\n          margin-bottom:0.2667rem;\n        }\n        .addBtn{\n          color:white;\n          font-size:0;\n          padding-bottom:0.1067rem;\n          >span{\n            background:#00b4cf;\n            padding:0.0533rem 0.1333rem;\n            font-size:0.08rem;\n          }\n          .cancel{\n            background:#2d4054;\n            margin-left:0.2667rem;\n          }\n        }\n      }\n      .right{\n          background:#00b4cf;\n          font-size:0.1067rem;\n          padding:0.0267rem 0.1333rem;\n          >i{\n            padding-right:0.08rem;\n            font-size:0.1067rem;\n          }\n          color:white;\n        }\n      >div{\n        display:flex;\n        align-items:center;\n        .add{\n          background:#00b4cf;\n          padding:0.0533rem 0.0533rem;\n          margin-right:0.1067rem;\n          font-size:0.2133rem;\n          color:white;\n        }\n        >p{\n          background:#efefef;\n          margin-right:0.1067rem;\n          font-size:0.1067rem;\n          padding:0.0267rem 0.08rem;\n          display:flex;\n          align-items:center;\n          >i{\n            font-size:0.1067rem;\n            padding-left:0.08rem;\n            color:#000;\n          }\n        }\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./src/components/Main/index.js":
/*!**************************************!*\
  !*** ./src/components/Main/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./src/components/Main/index.style.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mask */ "./src/components/Mask/index.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tab */ "./src/components/Tab/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../List */ "./src/components/List/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/src/components/Main/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Main = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
    _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])();
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_style__WEBPACK_IMPORTED_MODULE_1__["MainContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mask__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./src/components/Main/index.style.js":
/*!********************************************!*\
  !*** ./src/components/Main/index.style.js ***!
  \********************************************/
/*! exports provided: MainContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground:#f3f3f3;\nfont-size:0;\npadding:0.2667rem 0 0.2667rem 0.2667rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./src/components/Mask/index.js":
/*!**************************************!*\
  !*** ./src/components/Mask/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./src/components/Mask/index.style.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store.js");
var _dec,
    _class,
    _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/src/components/Mask/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Mask = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mask, _React$Component);

  function Mask(props) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this, props));
    _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])();
    return _this;
  }

  _createClass(Mask, [{
    key: "render",
    value: function render() {
      var _this$store = this.store,
          building = _this$store.building,
          idle = _this$store.idle,
          all = _this$store.all,
          virtual = _this$store.virtual,
          physical = _this$store.physical,
          screenType = _this$store.screenType;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_style__WEBPACK_IMPORTED_MODULE_1__["MaskContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "maskSty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "maskFlex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Building"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "iconBox setRate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-cog fonts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, building)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "maskFlex",
        style: {
          background: '#7fbc39'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Idle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "iconBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-coffee fonts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, idle)), screenType !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countFlex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "ALL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, all)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "PHYSICAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, physical)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "VIRTUAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, virtual)))), screenType === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "countFlex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "ALL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, all)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "PHYSICAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, physical)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "VIRTUAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, virtual))));
    }
  }]);

  return Mask;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./src/components/Mask/index.style.js":
/*!********************************************!*\
  !*** ./src/components/Mask/index.style.js ***!
  \********************************************/
/*! exports provided: MaskContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskContainer", function() { return MaskContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.maskSty{\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  font-size:0;\n  /* .setRate{\n     animation:myFirst 2s;\n\t   -webkit-animation:myFirst 2s linear infinite;\n  } */\n  .maskFlex{\n    width:30%;\n    flex:0 0 30%;\n    background:#ff9A2A;\n    margin-right:3%;\n    text-align:center;\n    color:white;\n    position:relative;\n    >b{\n      font-size:0.24rem;\n      position:absolute;\n      top:0.2133rem;\n      left:0.16rem;\n    }\n    >p{\n      position:absolute;\n      bottom:0.0267rem;\n      right:0.2133rem;\n      font-size:0.64rem;\n    }\n    .iconBox{\n        width:1.6rem;\n        height:1.4667rem;\n        margin:0 auto;\n        padding-bottom:0.16rem;\n      \n      >i{\n         width:1.4667rem;\n         height:1.4667rem;\n         display:inline-block;\n         font-size:1.6rem;\n         opacity:0.2;\n         &::before{\n          display:inline-block;\n          width:1.4667rem;\n          height:1.4667rem;\n         }\n      }\n    }\n    @keyframes myFirst\n    {\n      from {\n         transform:rotate(0deg);\n        -ms-transform:rotate(0deg);\n        -webkit-transform:rotate(0deg);\n      }\n      to {\n        transform:rotate(180deg);\n        -ms-transform:rotate(180deg);\n        -webkit-transform:rotate(180deg);\n      }\n    }\n\n    @-webkit-keyframes myFirst \n    {\n      from {\n         transform:rotate(0deg);\n        -ms-transform:rotate(0deg);\n        -webkit-transform:rotate(0deg);\n      }\n      to {\n        transform:rotate(180deg);\n        -ms-transform:rotate(180deg);\n        -webkit-transform:rotate(180deg);\n      }\n    }\n  }\n}\n@media screen and (max-width:768px){\n  .maskSty{\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n    font-size:0;\n    .maskFlex{\n      flex:0 0 47%;\n      background:#ff9A2A;\n      text-align:center;\n      color:white;\n      position:relative;\n    }\n}\n.countFlex{\n    margin-top:0.2667rem;\n    background:white;\n    text-align:center;\n    color:#2d4054;\n    height:1.6rem;\n    margin-right:2%;\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n    >div{\n      flex:0 0 30%;\n      text-align:center;\n      >p{\n        font-size:0.16rem;\n        padding-bottom:0.4rem;\n      }\n      >b{\n        font-size:0.2667rem;\n      }\n    }\n  }\n}\n@media screen and (min-width:768px) and (max-width:1024px){\n  .countFlex{\n    width:30%;\n    flex:0 0 30%;\n    background:white;\n    text-align:center;\n    color:#2d4054;\n    height:1.6rem;\n    margin-right:2%;\n    >div{\n      display:flex;\n      justify-content:space-between;\n      align-items:center;\n      padding:0.0533rem 0.16rem;\n      >p{\n        font-size:0.16rem;\n      }\n      >b{\n        font-size:0.2667rem;\n      }\n    }\n  }\n}\n@media screen and (min-width:1024px){\n  .countFlex{\n    width:30%;\n    flex:0 0 30%;\n    background:white;\n    text-align:center;\n    color:#2d4054;\n    height:1.6rem;\n    margin-right:2%;\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n    >div{\n      flex:0 0 30%;\n      text-align:center;\n      >p{\n        font-size:0.16rem;\n        padding-bottom:0.4rem;\n      }\n      >b{\n        font-size:0.2667rem;\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MaskContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.style */ "./src/components/Nav/index.style.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Main */ "./src/components/Main/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/src/components/Nav/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Nav = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])();
    return _this;
  }

  _createClass(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        var currentWidth = document.body.offsetWidth || document.body.clientWidth;
        var screenType = 3;

        if (currentWidth < 768) {
          screenType = 0;
          var navDom = document.getElementById('nav');
          navDom.style.display = 'none';
        } else if (currentWidth > 768 && currentWidth <= 1024) {
          screenType = 1;
        } else if (currentWidth > 1024 && currentWidth <= 1200) {
          screenType = 2;
        }

        this.store.changeStoreValue('screenType', screenType);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$store = this.store,
          navIndex = _this$store.navIndex,
          hisIndex = _this$store.hisIndex,
          showNav = _this$store.showNav;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_style__WEBPACK_IMPORTED_MODULE_3__["NavContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navSty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, showNav && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navTitle",
        id: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "titleLi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, _utils__WEBPACK_IMPORTED_MODULE_4__["navInfo"].map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          className: index === navIndex ? 'navActive' : '',
          onClick: function onClick() {
            _this2.store.changeStoreValue('navIndex', index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: item.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }), item.txt);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "historyLi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "History"), _utils__WEBPACK_IMPORTED_MODULE_4__["historyInfo"].map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          className: index === hisIndex ? 'hisActive' : '',
          onClick: function onClick() {
            _this2.store.changeStoreValue('hisIndex', index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "\u2022"), item);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flex: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./src/components/Nav/index.style.js":
/*!*******************************************!*\
  !*** ./src/components/Nav/index.style.js ***!
  \*******************************************/
/*! exports provided: NavContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContainer", function() { return NavContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground:#f3f3f3;\nfont-size:0;\n.navSty{\n    display:flex;\n    justify-content:flex-start;\n    .navTitle{\n      background:#2d4054;\n      position:relative;\n      .titleLi{\n        list-style:none;\n        >li{\n          height:0.6133rem;\n          line-height:0.6133rem;\n          padding-left:0.4rem;\n          display:flex;\n          align-items:center;\n          font-size:0.1867rem;\n          color:#c7ccd2;\n          >i{\n            width:0.32rem;\n            color:white;\n          }\n        }\n        .navActive{\n          background:#435466;\n          color:#00b4cf;\n          >i{\n            color:#00b4cf;\n          }\n        }\n      }\n      .historyLi{\n        margin:5.3333rem 0 1.3333rem 0;\n        padding-left:0.2133rem;\n        >span{\n          font-size:0.2667rem;\n          color:#c7ccd2;\n          padding-bottom:0.5333rem;\n        }\n        >li{\n          font-size:0.16rem;\n          color:#999;\n          height:0.3467rem\n          >span{\n            padding-right:0.1333rem;\n            text-align:center;\n            font-size:0.1333rem\n          }\n        }\n        .hisActive{\n          color:#00b4cf;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./src/components/Tab/index.js":
/*!*************************************!*\
  !*** ./src/components/Tab/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./src/components/Tab/index.style.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _dec,
    _class,
    _jsxFileName = "/Users/zhaishuang/Documents/workspace/homework/src/components/Tab/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Tab = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, props));
    _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])();
    return _this;
  }

  _createClass(Tab, [{
    key: "changeTab",
    value: function changeTab(i) {
      this.store.changeStoreValue('tabIndex', i);
      this.store.getTabBody(i);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$store = this.store,
          tabIndex = _this$store.tabIndex,
          searchValue = _this$store.searchValue,
          screenType = _this$store.screenType;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_style__WEBPACK_IMPORTED_MODULE_1__["TabContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabSty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, _utils__WEBPACK_IMPORTED_MODULE_4__["tabType"].map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: index === tabIndex ? "tabFlex activeTab" : "tabFlex",
          key: index,
          onClick: function onClick() {
            _this2.changeTab(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " ", item);
      }), screenType !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputSty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-search fonts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: searchValue,
        onChange: function onChange(e) {
          _this2.store.changeStoreValue('searchValue', e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputIcon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-th-card fonts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-th-list fonts colorI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })))));
    }
  }]);

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./src/components/Tab/index.style.js":
/*!*******************************************!*\
  !*** ./src/components/Tab/index.style.js ***!
  \*******************************************/
/*! exports provided: TabContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContainer", function() { return TabContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmargin:0.2667rem 0.2667rem 0.2667rem 0;\nheight:0.6667rem;\nbackground:white;\nfont-size:0;\n.tabSty{\n  display:flex;\n  justify-content:flex-start;\n  align-items:center;\n  .tabFlex{\n     width:1.0667rem;\n     text-align:center;\n     height:0.6667rem;\n     font-size:0.2133rem;\n     line-height:0.6667rem;\n     color:#2d4054;\n     border-right:0.0133rem solid #f3f3f3;\n  }\n  .activeTab{\n    color:#00b4cf;\n    border-bottom:0.0267rem solid #00b4cf;\n  }\n  .inputSty{\n    margin-left:0.5333rem;\n    flex:1;\n    display:flex;\n    justify-content:space-between;\n    position:relative;\n    >i{\n      font-size:0.2133rem;\n      color:#999;\n      position:absolute;\n      left:0.1067rem;\n      top:0.08rem;\n    }\n    >input{\n      height:0.32rem;\n      background:#f3f3f3;\n      border:0.0133rem solid #e1e4e6;\n      padding-left:0.32rem;\n    }\n    .inputIcon{\n      text-align:right;\n      >i{\n        font-size:0.2667rem;\n        padding-right:0.2667rem;\n        color:#2d4054;\n      }\n      .colorI{\n        color:#00b4cf;\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var TabContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map