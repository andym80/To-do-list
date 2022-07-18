"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_tutorial"] = self["webpackChunkwebpack_tutorial"] || []).push([["print"],{

/***/ "./src/check_complete.js":
/*!*******************************!*\
  !*** ./src/check_complete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkComplete)\n/* harmony export */ });\nfunction checkComplete(arr) {\n  const checkboxes = document.querySelectorAll('.checkbox');\n  for (let i = 0; i < arr.length; i += 1) {\n    arr[i].completed = checkboxes[i].checked;\n  }\n  localStorage.setItem('todoList', JSON.stringify(arr));\n}\n\n//# sourceURL=webpack://webpack-tutorial/./src/check_complete.js?");

/***/ }),

/***/ "./src/gen_html.js":
/*!*************************!*\
  !*** ./src/gen_html.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ genHTML)\n/* harmony export */ });\n/* harmony import */ var _check_complete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_complete.js */ \"./src/check_complete.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./src/remove.js\");\n\n\n\nfunction genHTML(list, arr) {\n  for (let i = 0; i < arr.length; i += 1) {\n    const item = document.createElement('li');\n    const descCont = document.createElement('div');\n    const checkbox = document.createElement('input');\n    const desc = document.createElement('label');\n    const itemIcon = document.createElement('i');\n\n    descCont.classList.add('description-container');\n    checkbox.type = 'checkbox';\n    checkbox.addEventListener('change', () => {\n      (0,_check_complete_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n      list.innerHTML = '';\n      genHTML(list, arr);\n    });\n    checkbox.id = `checkbox-${i}`;\n    checkbox.classList.add('checkbox');\n    checkbox.checked = arr[i].completed;\n    desc.htmlFor = `checkbox-${i}`;\n    desc.innerHTML = arr[i].description;\n    if (checkbox.checked) {\n      desc.classList.add('done');\n    }\n    itemIcon.classList.add('add-btn', 'fa-ellipsis-v', 'item-icon');\n\n    itemIcon.addEventListener('click', () => {\n      if (itemIcon.classList.contains('red')) {\n        (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i, arr);\n        arr.forEach((item) => {\n          if (item.index > i) {\n            item.index -= 1;\n          }\n        });\n        localStorage.setItem('todoList', JSON.stringify(arr));\n        list.innerHTML = '';\n        genHTML(list, arr);\n      }\n    });\n\n    desc.addEventListener('click', () => {\n      desc.setAttribute('contenteditable', 'true');\n    });\n    desc.addEventListener('click', (e) => {\n      e.preventDefault();\n    }, false);\n    desc.addEventListener('focus', () => {\n      desc.parentElement.parentElement.classList.add('bisque-bkg');\n      desc.parentElement.nextElementSibling.classList.add('red');\n      desc.parentElement.nextElementSibling.classList.replace('fa-ellipsis-v', 'fa-trash-alt');\n    });\n    desc.addEventListener('blur', () => {\n      arr[i].description = desc.innerHTML;\n      localStorage.setItem('todoList', JSON.stringify(arr));\n      setTimeout(() => {\n        desc.parentElement.parentElement.classList.remove('bisque-bkg');\n        desc.parentElement.nextElementSibling.classList.remove('red');\n        desc.parentElement.nextElementSibling.classList.replace('fa-trash-alt', 'fa-ellipsis-v');\n        desc.setAttribute('contenteditable', 'false');\n      }, 150);\n    });\n\n    descCont.appendChild(checkbox);\n    descCont.appendChild(desc);\n\n    item.appendChild(descCont);\n    item.appendChild(itemIcon);\n\n    list.appendChild(item);\n  }\n}\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/gen_html.js?");

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remove)\n/* harmony export */ });\nfunction remove(num, list) {\n  list.splice(num, 1);\n  localStorage.setItem('todoList', JSON.stringify(list));\n}\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/remove.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gen_html.js"));
/******/ }
]);