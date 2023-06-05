"use strict";
(self["webpackChunktransplantcentral"] = self["webpackChunktransplantcentral"] || []).push([["frontend_components_city_profile_pic_jsx"],{

/***/ "./frontend/components/city_profile_pic.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/city_profile_pic.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var CityProfilePic = /*#__PURE__*/function (_React$Component) {
  _inherits(CityProfilePic, _React$Component);
  var _super = _createSuper(CityProfilePic);
  function CityProfilePic(props) {
    var _this;
    _classCallCheck(this, CityProfilePic);
    _this = _super.call(this, props);
    _this.state = {
      profilePicIndex: 0
    };
    return _this;
  }
  _createClass(CityProfilePic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dotList = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.refs.dotList);
      for (var i = 0; i <= this.state.profilePicIndex; i++) {
        dotList.children[i].classList.add('dot-highlight');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var dotList = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.refs.dotList);
      for (var j = 0; j < 3; j++) {
        if (j === this.state.profilePicIndex) {
          dotList.children[j].classList.add('dot-highlight');
        }
      }
    }
  }, {
    key: "profilePicClass",
    value: function profilePicClass() {
      var currentCity = this.props.currentCity;
      return currentCity.name.split(' ').join('') + "Page" + this.state.profilePicIndex;
    }
  }, {
    key: "changePicLeft",
    value: function changePicLeft(event) {
      event.preventDefault();
      var dotList = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.refs.dotList);
      this.setState({
        profilePicIndex: this.state.profilePicIndex -= 1
      });
      if (this.state.profilePicIndex < 0) {
        this.setState({
          profilePicIndex: 2
        });
      }
      for (var i = 0; i < 3; i++) {
        dotList.children[i].classList.remove('dot-highlight');
      }
    }
  }, {
    key: "changePicRight",
    value: function changePicRight(event) {
      event.preventDefault();
      var dotList = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.refs.dotList);
      this.setState({
        profilePicIndex: this.state.profilePicIndex += 1
      });
      if (this.state.profilePicIndex > 2) {
        this.setState({
          profilePicIndex: 0
        });
      }
      for (var i = 0; i < 3; i++) {
        dotList.children[i].classList.remove('dot-highlight');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var currentCity = this.props.currentCity;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        "class": "city-profile-pic ".concat(this.profilePicClass())
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        "class": "city-profile-header2"
      }, currentCity.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        onClick: this.changePicRight.bind(this),
        "class": "city-pic-button city-pic-button-right"
      }, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        onClick: this.changePicLeft.bind(this),
        "class": "city-pic-button city-pic-button-left"
      }, "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        ref: "dotList",
        "class": "dot-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        "class": "dot"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        "class": "dot"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        "class": "dot"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        "class": "clearfix"
      }));
    }
  }]);
  return CityProfilePic;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CityProfilePic);

/***/ })

}]);
//# sourceMappingURL=frontend_components_city_profile_pic_jsx.bundle.js.map