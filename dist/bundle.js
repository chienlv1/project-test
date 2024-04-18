/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/index.scss */ \"./assets/index.scss\");\n\n\n\n//# sourceURL=webpack://my-project/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/index.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/index.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFF2F3;\n}\n\n.nav {\n  width: 100%;\n  padding: 5px 0px;\n}\n@media (min-width: 900px) {\n  .nav {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.nav .nav-menu {\n  display: none;\n  gap: 1.5em;\n}\n@media (min-width: 900px) {\n  .nav .nav-menu {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.nav .nav-menu .nav-item-text {\n  font-weight: 700;\n}\n.nav .nav-item {\n  padding: 5px 0px;\n}\n.nav .nav-signup {\n  display: none;\n}\n@media (min-width: 900px) {\n  .nav .nav-signup {\n    display: flex;\n    align-items: center;\n  }\n}\n.nav .nav-signup-btn {\n  width: 85px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n@media (min-width: 900px) {\n  .nav .nav-signup-btn {\n    width: 137px;\n  }\n}\n.nav .nav-text {\n  font-weight: 700;\n  margin-right: 25px;\n}\n\n/*======================================================\n                    Mobile Menu Menu Icon\n  ======================================================*/\n.mobile-menu {\n  display: none;\n}\n\n.menuIcon {\n  display: none;\n}\n\n@media (max-width: 900px) {\n  .mobile-menu {\n    display: block;\n  }\n  .nav-signup--mobile {\n    display: flex;\n    align-items: center;\n  }\n  .menuIcon {\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 20px;\n    height: 23px;\n    width: 27px;\n    z-index: 12;\n  }\n  /* Icon Bars */\n  .icon-bars {\n    background: rgb(13, 26, 38);\n    position: absolute;\n    left: 1px;\n    top: 45%;\n    height: 2px;\n    width: 20px;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n  .icon-bars::before {\n    background: rgb(13, 26, 38);\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: -8px;\n    height: 2px;\n    width: 20px;\n    /*     -webkit-transition: top 0.2s ease 0.3s;\n        transition: top 0.2s ease 0.3s; */\n    -webkit-transition: 0.3s width 0.4s;\n    transition: 0.3s width 0.4s;\n  }\n  .icon-bars::after {\n    margin-top: 0px;\n    background: rgb(13, 26, 38);\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: -8px;\n    height: 2px;\n    width: 20px;\n    /*     -webkit-transition: top 0.2s ease 0.3s;\n        transition: top 0.2s ease 0.3s; */\n    -webkit-transition: 0.3s width 0.4s;\n    transition: 0.3s width 0.4s;\n  }\n  /* Bars Shadows */\n  .icon-bars.overlay {\n    background: rgb(97, 114, 129);\n    background: rgb(183, 199, 211);\n    width: 20px;\n    animation: middleBar 3s infinite 0.5s;\n    -webkit-animation: middleBar 3s infinite 0.5s;\n  }\n  @keyframes middleBar {\n    0% {\n      width: 0px;\n    }\n    50% {\n      width: 20px;\n    }\n    100% {\n      width: 0px;\n    }\n  }\n  @-webkit-keyframes middleBar {\n    0% {\n      width: 0px;\n    }\n    50% {\n      width: 20px;\n    }\n    100% {\n      width: 0px;\n    }\n  }\n  .icon-bars.overlay::before {\n    background: rgb(97, 114, 129);\n    background: rgb(183, 199, 211);\n    width: 10px;\n    animation: topBar 3s infinite 0.2s;\n    -webkit-animation: topBar 3s infinite 0s;\n  }\n  @keyframes topBar {\n    0% {\n      width: 0px;\n    }\n    50% {\n      width: 10px;\n    }\n    100% {\n      width: 0px;\n    }\n  }\n  @-webkit-keyframes topBar {\n    0% {\n      width: 0px;\n    }\n    50% {\n      width: 10px;\n    }\n    100% {\n      width: 0px;\n    }\n  }\n  .icon-bars.overlay::after {\n    background: rgb(97, 114, 129);\n    background: rgb(183, 199, 211);\n    width: 15px;\n    animation: bottomBar 3s infinite 1s;\n    -webkit-animation: bottomBar 3s infinite 1s;\n  }\n  @keyframes bottomBar {\n    0% {\n      width: 0px;\n    }\n    50% {\n      width: 15px;\n    }\n    100% {\n      width: 0px;\n    }\n  }\n  @-webkit-keyframes bottomBar {\n    0% {\n      width: 0px;\n    }\n    50% {\n      width: 15px;\n    }\n    100% {\n      width: 0px;\n    }\n  }\n  /* Toggle Menu Icon */\n  .menuIcon.toggle .icon-bars {\n    top: 5px;\n    transform: translate3d(0, 5px, 0) rotate(135deg);\n    transition-delay: 0.1s;\n    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  .menuIcon.toggle .icon-bars::before {\n    top: 0;\n    transition-delay: 0.1s;\n    opacity: 0;\n  }\n  .menuIcon.toggle .icon-bars::after {\n    top: 10px;\n    transform: translate3d(0, -10px, 0) rotate(-270deg);\n    transition-delay: 0.1s;\n    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  .mobile-menu {\n    width: 100%;\n    z-index: 9;\n    transition: transform 0.2s ease-out 0s;\n    position: absolute;\n    visibility: hidden;\n    box-shadow: -6px 5px 17px -2px rgba(0, 0, 0, 0.1);\n    background-color: #FFF2F3;\n    padding: 20px;\n    max-width: 330px;\n    right: auto;\n    left: 50px;\n  }\n}\n.banner {\n  width: 100%;\n  background-color: #FFF2F3;\n}\n.banner .banner-row {\n  align-items: center;\n}\n.banner .banner-img {\n  width: 100%;\n  height: 100%;\n  max-width: 704px;\n  max-height: 682px;\n}\n@media (min-width: 900px) {\n  .banner .banner-img {\n    width: 704px;\n    height: 682px;\n    max-width: auto;\n    max-height: auto;\n  }\n}\n.banner .banner-group-btn {\n  display: flex;\n  margin-top: 20px;\n}\n.banner .banner-group-btn .btn--join {\n  width: 133px;\n  margin-right: 10px;\n}\n.banner .banner-group-btn .btn--learn {\n  width: 162px;\n}\n\n.image-text.container {\n  padding-top: 25px;\n}\n.image-text .image-text-row {\n  align-items: center;\n}\n@media (max-width: 640px) {\n  .image-text .image-text-row {\n    flex-direction: column-reverse;\n    padding-top: 45px;\n  }\n}\n.image-text .image-text-img {\n  width: 100%;\n  height: 100%;\n  max-width: 508px;\n  max-height: 549px;\n}\n.image-text .image-text-box .image-text-flag {\n  width: 94px;\n  height: 7px;\n  background-color: #E74040;\n  display: block;\n}\n.image-text .image-text-box h2 {\n  margin: 30px 0px;\n}\n@media (min-width: 900px) {\n  .image-text .image-text-box h2 {\n    font-size: 40px;\n    line-height: 50px;\n  }\n}\n@media (min-width: 640px) {\n  .image-text .image-text-box p {\n    max-width: 351px;\n  }\n}\n.image-text .image-text-box .image-text-box-link {\n  color: #96BB7C;\n  font-size: 14px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n}\n.image-text .image-text-box .image-text-box-link svg {\n  margin-left: 6px;\n}\n\n.blogs.container {\n  padding-top: 10px;\n  padding-bottom: 40px;\n}\n.blogs .blogs-img-avt {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.blogs .blogs-text {\n  margin-bottom: 40px;\n}\n.blogs .blogs-text h6 {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.blogs .blogs-text p {\n  max-width: 469px;\n  width: 100%;\n  margin-top: 12px;\n}\n.blogs .blogs-social {\n  display: flex;\n  width: 100%;\n  max-width: 112px;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.blogs .blogs-info {\n  text-align: center;\n  padding: 30px 7px 20px 7px;\n}\n.blogs .blogs-info h5 {\n  color: #252B42;\n}\n.blogs .blogs-info span {\n  color: #737373;\n  font-size: 12px;\n  font-weight: 400;\n  margin: 16px 0px 14px 0px;\n  display: block;\n}\n.blogs .blogs-content {\n  border-radius: 20px;\n  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);\n}\n\n.footer.container {\n  padding-top: 30px;\n}\n.footer .links {\n  padding-bottom: 40px;\n  padding-top: 20px;\n}\n.footer h5 {\n  color: #252B42;\n  margin-bottom: 15px;\n}\n@media (max-width: 900px) {\n  .footer .links-row .col-2:last-child {\n    width: 100%;\n  }\n}\n.footer .links-menu .links-item {\n  display: flex;\n  color: #737373;\n  padding: 5px 0px;\n  font-weight: 700;\n  font-size: 12px;\n}\n@media (min-width: 640px) {\n  .footer .links-menu .links-item {\n    align-items: center;\n    font-size: 14px;\n  }\n}\n.footer .links-menu .links-item span {\n  display: block;\n  width: 100%;\n  margin-left: 10px;\n  line-height: 24px;\n}\n.footer .footer-bottom {\n  background-color: #FAFAFA;\n}\n.footer .footer-bottom .footer-bottom-text {\n  font-weight: 700;\n  color: #737373;\n}\n.footer .footer-bottom-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 0px;\n  height: 74px;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .footer .footer-bottom-box {\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px 0px;\n    height: auto;\n  }\n  .footer .footer-bottom-box .footer-bottom-text {\n    margin-bottom: 10px;\n  }\n}\n.footer .footer-bottom-box .footer-social {\n  display: flex;\n  align-items: center;\n  max-width: 112px;\n  justify-content: space-between;\n  width: 100%;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  color: #1d2a57;\n  font-family: \"Montserrat\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n}\n\na {\n  text-decoration: none;\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n  -ms-transition: 0.2s;\n  -o-transition: 0.2s;\n  transition: 0.2s;\n}\na:hover {\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n  -ms-transition: 0.2s;\n  -o-transition: 0.2s;\n  transition: 0.2s;\n  opacity: 0.5;\n}\n\np {\n  color: #737373;\n  line-height: 20px;\n}\n\nh5 {\n  font-size: 16px;\n  color: #96BB7C;\n  font-weight: 700;\n}\n\nh1 {\n  color: #252B42;\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 36px;\n  margin: 10px 0px;\n}\n@media (min-width: 900px) {\n  h1 {\n    line-height: 80px;\n    font-size: 58px;\n  }\n}\n\nh2 {\n  font-size: 30px;\n  font-weight: 700;\n  color: #252B42;\n}\n\nh3 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #252B42;\n  line-height: 32px;\n}\n\nh4 {\n  color: #737373;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\nh5 {\n  color: #737373;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.second-text {\n  color: #737373;\n}\n\n.primary-text {\n  color: #96BB7C;\n}\n\n.primary-btn {\n  background-color: #96BB7C;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.second-btn {\n  background-color: transparent;\n  color: #96BB7C;\n  font-weight: 700;\n  border: 1px solid #96BB7C;\n  font-size: 14px;\n}\n\nbutton {\n  border: 0;\n  border-radius: 5px;\n  width: 100%;\n  height: 40px;\n  cursor: pointer;\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n  -ms-transition: 0.2s;\n  -o-transition: 0.2s;\n  transition: 0.2s;\n}\n@media (min-width: 900px) {\n  button {\n    height: 52px;\n  }\n}\nbutton:hover {\n  -webkit-transition: 0.2s;\n  -moz-transition: 0.2s;\n  -ms-transition: 0.2s;\n  -o-transition: 0.2s;\n  transition: 0.2s;\n  opacity: 0.5;\n}\n\n.container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 50px;\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1440px;\n  }\n}\n\n.row {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col-6 {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 30px;\n}\n@media (min-width: 640px) {\n  .col-6 {\n    width: 50%;\n    padding-bottom: 0;\n  }\n}\n\n.col-3 {\n  position: relative;\n  width: 50%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 30px;\n}\n@media (min-width: 640px) {\n  .col-3 {\n    width: 25%;\n    padding-bottom: 0;\n  }\n}\n\n.col-2 {\n  position: relative;\n  width: 50%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 30px;\n}\n@media (min-width: 900px) {\n  .col-2 {\n    width: 20%;\n    padding-bottom: 0;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-project/./assets/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/index.scss":
/*!***************************!*\
  !*** ./assets/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-project/./assets/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;