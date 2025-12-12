"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhomepage_public"] = self["webpackChunkhomepage_public"] || []).push([["src_page_nagasamai_js"],{

/***/ "./src/page/nagasamai.js":
/*!*******************************!*\
  !*** ./src/page/nagasamai.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar svg = document.querySelector('#page_nagasamai > object');\nsvg.addEventListener('load', function () {\n  var doc = svg.getSVGDocument();\n  console.log(doc);\n  var image1 = doc.querySelector('#background-image_1');\n  var image2 = doc.querySelector('#background-image_2');\n  function showImage2() {\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(image1, {\n      opacity: 0\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(image2, {\n      opacity: 1\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.delayedCall(1.7, showImage1);\n  }\n  function showImage1() {\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(image2, {\n      opacity: 0\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(image1, {\n      opacity: 1\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.delayedCall(1.7, showImage2);\n  }\n\n  // スタート\n  showImage2();\n});\n\n//# sourceURL=webpack://homepage_public/./src/page/nagasamai.js?\n}");

/***/ })

}]);