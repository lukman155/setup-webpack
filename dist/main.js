"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksetup_webpack"] = self["webpackChunksetup_webpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  font-family: inherit;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 1rem;\\r\\n  color: #333;\\r\\n  background-color: #f4f4f4;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.15rem;\\r\\n}\\r\\n\\r\\nli,\\r\\n.task-input,\\r\\n.list-header,\\r\\n.edit-input {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: white;\\r\\n  padding: 0.5rem 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  padding: 0 0.8rem;\\r\\n}\\r\\n\\r\\ndiv {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\np {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 1.5rem 0 0;\\r\\n  margin: 0;\\r\\n  background-color: white;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: none;\\r\\n  background-color: rgb(211, 211, 211);\\r\\n}\\r\\n\\r\\n[type=\\\"checkbox\\\"]:checked + label {\\r\\n  opacity: 0.5;\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: stretch;\\r\\n  padding: 0 8rem;\\r\\n  margin: auto;\\r\\n  padding-top: 5rem;\\r\\n  gap: 0.15rem;\\r\\n}\\r\\n\\r\\n.list-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.refresh-icon {\\r\\n  width: 1.5rem;\\r\\n  height: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.task-input {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 1rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.enter-key {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.edit-input {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 1rem;\\r\\n  width: 100%;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  margin-left: 0.8rem;\\r\\n  background-color: inherit;\\r\\n}\\r\\n\\r\\n.clear-button {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  cursor: pointer;\\r\\n  width: 100%;\\r\\n  border-radius: 0.5rem;\\r\\n  height: 100%;\\r\\n  padding: 0.5rem 1rem;\\r\\n}\\r\\n\\r\\n.more-icon {\\r\\n  font-size: 1rem;\\r\\n  padding: 0 0.5rem;\\r\\n  margin: 0;\\r\\n  cursor: pointer;\\r\\n  background-color: inherit;\\r\\n}\\r\\n\\r\\n.more-icon.del-btn {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  padding: 0 0.28rem;\\r\\n}\\r\\n\\r\\n.task-desc {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.yellow-tag {\\r\\n  background-color: #fff8c0;\\r\\n}\\r\\n\\r\\n.disappear {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.appear {\\r\\n  display: block;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n\n\n\n\n\n// Add Task\n\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const taskDesc = _modules_elements_js__WEBPACK_IMPORTED_MODULE_3__.taskInput.value;\n  const index = _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length;\n  if (taskDesc == null || taskDesc === '') return;\n  const createTask = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskDesc, index);\n  _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(createTask);\n  _modules_elements_js__WEBPACK_IMPORTED_MODULE_3__.taskInput.value = null;\n\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__.saveRender)();\n});\n\n// const removeCompleted = () => {\n//   clearList(todoList);\n//   for (let x = 0; x < tasks.length; x += 1) {\n//     if (tasks[x].completed) {\n//       tasks.splice(x, 1);\n//       for (let i = x; i < tasks.length; i += 1) {\n//         tasks[i].index -= 1;\n//       }\n//     }\n//   }\n//   saveRender();\n// };\n\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_3__.clearButton.addEventListener('click', () => {\n  const newlist = _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter((element) => element.completed === true);\n  newlist.forEach((element) => {\n    if (_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.includes(element)) {\n      _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.splice(_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.indexOf(element), 1);\n    }\n  });\n  let i = 1;\n  _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.forEach((element) => {\n    element.index = i;\n    i += 1;\n  });\n  _modules_elements_js__WEBPACK_IMPORTED_MODULE_3__.todoList.innerHTML = '';\n  for (let i = 1; i <= _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length; i += 1) {\n    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks.forEach((listItem) => {\n      if (listItem.index === i) {\n        (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)();\n      }\n    });\n  }\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks);\n});\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.tasks);\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearButton\": () => (/* binding */ clearButton),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"taskInput\": () => (/* binding */ taskInput),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\nconst todoList = document.querySelector('.todo-list');\nconst form = document.querySelector('.form');\nconst taskInput = document.querySelector('.task-input');\nconst clearButton = document.querySelector('.clear-button');\n\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/removetask.js":
/*!***********************************!*\
  !*** ./src/modules/removetask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearList\": () => (/* binding */ clearList),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nconst removeTodo = (button, listItem) => {\n  button.parentElement.remove();\n  const ind = _storage_js__WEBPACK_IMPORTED_MODULE_0__.tasks.indexOf(listItem);\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(ind, 1);\n  for (let i = ind; i < _storage_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i += 1) {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].index -= 1;\n  }\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.save)();\n};\n\nconst clearList = (list) => {\n  while (list.firstChild) {\n    list.removeChild(list.firstChild);\n  }\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodo);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/removetask.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"saveRender\": () => (/* binding */ saveRender)\n/* harmony export */ });\n/* harmony import */ var _removetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removetask.js */ \"./src/modules/removetask.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n\n\n\n\nconst render = (tasks) => {\n  (0,_removetask_js__WEBPACK_IMPORTED_MODULE_0__.clearList)(_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList);\n  tasks.forEach((task) => {\n    const listItem = document.createElement('li');\n    listItem.classList.add('list-item');\n    _elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.appendChild(listItem);\n\n    const div = document.createElement('div');\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.setAttribute('id', `${task.index}`);\n    checkbox.classList.add('task-status');\n    checkbox.checked = task.completed;\n    checkbox.addEventListener('change', (e) => {\n      const ind = tasks.indexOf(task);\n      tasks[ind].completed = e.target.checked;\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.save)();\n    });\n\n    div.appendChild(checkbox);\n    const editInput = document.createElement('input');\n    const delBtn = document.createElement('button');\n\n    const label = document.createElement('label');\n    label.classList.add('task-desc');\n    label.textContent = task.description;\n    label.setAttribute('for', `${task.index}`);\n    div.appendChild(label);\n\n    const button = document.createElement('button');\n    button.innerHTML = '&#8942;';\n    button.classList.add('more-icon');\n    button.addEventListener('click', () => {\n      button.classList.add('disappear');\n      listItem.classList.add('yellow-tag');\n      delBtn.classList.remove('disappear');\n      label.classList.add('disappear');\n      editInput.classList.remove('disappear');\n    });\n\n    delBtn.innerHTML = '&#128465;';\n    delBtn.classList.add('more-icon');\n    delBtn.classList.add('del-btn');\n    delBtn.classList.add('disappear');\n    delBtn.addEventListener('click', () => {\n      delBtn.classList.remove('disappear');\n      (0,_removetask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(delBtn, task);\n    });\n\n    editInput.type = 'text';\n    editInput.classList.add('edit-input');\n    editInput.classList.add('disappear');\n    editInput.value = task.description;\n\n    editInput.addEventListener('change', (e) => {\n      const ind = tasks.indexOf(task);\n      tasks[ind].description = e.target.value;\n\n      editInput.addEventListener('keyup', (event) => {\n        if (event.key === 'Enter') {\n          (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.save)();\n          window.location.reload();\n        }\n      });\n\n      document.addEventListener('click', (e) => {\n        const desc = Array.from(listItem.querySelectorAll('*'));\n        if (!desc.includes(e.target)) {\n          (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.save)();\n          window.location.reload();\n        }\n      });\n    });\n\n    listItem.appendChild(div);\n    listItem.appendChild(editInput);\n    listItem.appendChild(button);\n    listItem.appendChild(delBtn);\n  });\n};\n\nconst saveRender = () => {\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.save)();\n  render(_storage_js__WEBPACK_IMPORTED_MODULE_1__.tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nconst SAVE_LOC = 'task.lists';\nconst tasks = JSON.parse(localStorage.getItem(SAVE_LOC)) || [];\nconst save = () => {\n  localStorage.setItem(SAVE_LOC, JSON.stringify(tasks));\n};\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewTask)\n/* harmony export */ });\nclass NewTask {\n  constructor(description, index) {\n    this.description = description;\n    this.completed = false;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://setup-webpack/./src/modules/task.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);