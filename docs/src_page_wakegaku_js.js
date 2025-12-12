"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhomepage_public"] = self["webpackChunkhomepage_public"] || []).push([["src_page_wakegaku_js"],{

/***/ "./src/page/wakegaku.js":
/*!******************************!*\
  !*** ./src/page/wakegaku.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar svg = document.querySelector('#page_wakegaku > object');\nsvg.addEventListener('load', function () {\n  var doc = svg.getSVGDocument();\n  var arrows = doc.querySelector('#background-arrows');\n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(arrows, {\n    rotation: -360,\n    duration: 100,\n    ease: 'none',\n    repeat: -1,\n    transformOrigin: '50% 50%'\n  });\n});\n\n//# sourceURL=webpack://homepage_public/./src/page/wakegaku.js?\n}");

/***/ })

}]);