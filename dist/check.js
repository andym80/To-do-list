"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_tutorial"] = self["webpackChunkwebpack_tutorial"] || []).push([["check"],{

/***/ "./src/check_complete.js":
/*!*******************************!*\
  !*** ./src/check_complete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkComplete)\n/* harmony export */ });\nfunction checkComplete(arr) {\n\tconst checkboxes = document.querySelectorAll('.checkbox');\n\tfor (let i = 0; i < arr.length; i += 1) {\n\t  arr[i].completed = checkboxes[i].checked;\n\t}\n\tlocalStorage.setItem('todoList', JSON.stringify(arr));\n  }\n\n//# sourceURL=webpack://webpack-tutorial/./src/check_complete.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/check_complete.js"));
/******/ }
]);