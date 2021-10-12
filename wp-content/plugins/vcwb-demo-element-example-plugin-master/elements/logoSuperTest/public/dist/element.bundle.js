(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./logoSuperTest/component.js":
/*!************************************!*\
  !*** ./logoSuperTest/component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LogoSuperTest; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar vcvAPI = Object(vc_cake__WEBPACK_IMPORTED_MODULE_7__[\"getService\"])('api');\n\nvar LogoSuperTest =\n/*#__PURE__*/\nfunction (_vcvAPI$elementCompon) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LogoSuperTest, _vcvAPI$elementCompon);\n\n  function LogoSuperTest(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LogoSuperTest);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LogoSuperTest).call(this, props));\n    _this.state = {\n      logo: window.vcvLogo || ''\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LogoSuperTest, [{\n    key: \"getLogo\",\n    value: function getLogo() {\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"vcvhelper\",\n        \"data-vcvs-html\": \"[vcv_logo size=\".concat(this.props.atts.size, \"]\"),\n        dangerouslySetInnerHTML: {\n          __html: this.state.logo || ''\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var size = atts.size,\n          alignment = atts.alignment,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n      var containerClasses = [];\n      var elementClasses = ['vce', 'vce-logo-widget'];\n      var containerStyle = {};\n      var customProps = {};\n      var Sizes = window.vcvImageSizes ? window.vcvImageSizes : {\n        humbnail: {\n          width: 150\n        },\n        medium: {\n          width: 300\n        },\n        large: {\n          width: 1024\n        }\n      };\n\n      if (Sizes[size] && Sizes[size].width) {\n        containerStyle.width = \"\".concat(Sizes[size].width, \"px\");\n      } else {\n        var sizeMatch = size.match(/\\d+x\\d+$/g);\n\n        if (sizeMatch && sizeMatch.length === 1) {\n          var sizes = sizeMatch[0].split('x');\n          containerStyle.width = \"\".concat(sizes[0], \"px\");\n          containerStyle.height = \"\".concat(sizes[1], \"px\");\n        } else {\n          containerStyle.width = '';\n          containerStyle.height = '';\n        }\n      }\n\n      if (alignment) {\n        containerClasses.push(\"vce-logo-widget--align-\".concat(alignment));\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses.push(customClass);\n      }\n\n      containerClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()(containerClasses);\n      elementClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()(elementClasses);\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, editor, {\n        id: \"el-\".concat(id),\n        className: containerClasses\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: elementClasses,\n        style: containerStyle\n      }, doAll, customProps), \"This is test logo: \", this.getLogo()));\n    }\n  }]);\n\n  return LogoSuperTest;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./logoSuperTest/component.js?");

/***/ }),

/***/ "./logoSuperTest/index.js":
/*!********************************!*\
  !*** ./logoSuperTest/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./logoSuperTest/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = Object(vc_cake__WEBPACK_IMPORTED_MODULE_0__[\"getService\"])('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./logoSuperTest/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  'css': __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./logoSuperTest/styles.css\"),\n  'editorCss': __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./logoSuperTest/editor.css\"),\n  'mixins': {}\n});\n\n//# sourceURL=webpack:///./logoSuperTest/index.js?");

/***/ }),

/***/ "./logoSuperTest/settings.json":
/*!*************************************!*\
  !*** ./logoSuperTest/settings.json ***!
  \*************************************/
/*! exports provided: size, alignment, customClass, designOptions, editFormTab1, metaEditFormTabs, relatedTo, metaCustomId, tag, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"size\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"full\\\",\\\"options\\\":{\\\"label\\\":\\\"Size\\\",\\\"description\\\":\\\"Enter image size (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height)).\\\"}},\\\"alignment\\\":{\\\"type\\\":\\\"buttonGroup\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"left\\\",\\\"options\\\":{\\\"label\\\":\\\"Alignment\\\",\\\"values\\\":[{\\\"label\\\":\\\"Left\\\",\\\"value\\\":\\\"left\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-left\\\"},{\\\"label\\\":\\\"Center\\\",\\\"value\\\":\\\"center\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-center\\\"},{\\\"label\\\":\\\"Right\\\",\\\"value\\\":\\\"right\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-right\\\"}]}},\\\"customClass\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Extra class name\\\",\\\"description\\\":\\\"Add an extra class name to the element and refer to it from Custom CSS option.\\\"}},\\\"designOptions\\\":{\\\"type\\\":\\\"designOptions\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":{},\\\"options\\\":{\\\"label\\\":\\\"Design Options\\\"}},\\\"editFormTab1\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"size\\\",\\\"alignment\\\",\\\"metaCustomId\\\",\\\"customClass\\\"],\\\"options\\\":{\\\"label\\\":\\\"General\\\"}},\\\"metaEditFormTabs\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"editFormTab1\\\",\\\"designOptions\\\"]},\\\"relatedTo\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"General\\\"]},\\\"metaCustomId\\\":{\\\"type\\\":\\\"customId\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Element ID\\\",\\\"description\\\":\\\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\\\"}},\\\"tag\\\":{\\\"access\\\":\\\"protected\\\",\\\"type\\\":\\\"string\\\",\\\"value\\\":\\\"logoSuperTest\\\"}}\");\n\n//# sourceURL=webpack:///./logoSuperTest/settings.json?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./logoSuperTest/editor.css":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./logoSuperTest/editor.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-logo-widget {\\n  min-height: 1em;\\n}\\n\\n.vce-logo-widget vcvhelper, .vce-logo-widget .vcvhelper {\\n  height: 100%;\\n  border: 1px dotted #aaa;\\n}\"\n\n//# sourceURL=webpack:///./logoSuperTest/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./logoSuperTest/styles.css":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./logoSuperTest/styles.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-logo-widget {\\n  display: inline-block;\\n  width: 100%;\\n  max-width: 100%;\\n  overflow: hidden;\\n}\\n.vce-logo-widget--align-left {\\n  text-align: left;\\n}\\n.vce-logo-widget--align-center {\\n  text-align: center;\\n}\\n.vce-logo-widget--align-right {\\n  text-align: right;\\n}\\n.vce-logo-widget .custom-logo-link {\\n  padding-right: 0;\\n  box-shadow: none;\\n}\\n.vce-logo-widget .custom-logo-link img {\\n  box-shadow: none;\\n}\\n.vce-logo-widget img {\\n  max-height: 100%;\\n  max-width: 100%;\\n  box-shadow: none;\\n  height: auto;\\n}\\n\"\n\n//# sourceURL=webpack:///./logoSuperTest/styles.css?./node_modules/raw-loader");

/***/ })

},[['./logoSuperTest/index.js']]]);