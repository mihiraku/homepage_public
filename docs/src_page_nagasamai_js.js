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

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides */ \"./src/page/slides.js\");\n/* harmony import */ var _slides__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slides__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n// const doc = svg.getSVGDocument();\n// console.log(doc);\n// const image1 = doc.querySelector('#background-image_1');\n// const image2 = doc.querySelector('#background-image_2');\n// function showImage2() {\n//   gsap.set(image1, { opacity: 0 });\n//   gsap.set(image2, { opacity: 1 });\n//   gsap.delayedCall(1.7, showImage1);\n// }\n// function showImage1() {\n//   gsap.set(image2, { opacity: 0 });\n//   gsap.set(image1, { opacity: 1 });\n\n//   gsap.delayedCall(1.7, showImage2);\n// }\n\n// // スタート\n// showImage2();\n\n//# sourceURL=webpack://homepage_public/./src/page/nagasamai.js?\n}");

/***/ }),

/***/ "./src/page/slides.js":
/*!****************************!*\
  !*** ./src/page/slides.js ***!
  \****************************/
/***/ (() => {

eval("{function _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar svgs = document.querySelectorAll('.slides-content object.slide');\nvar _iterator = _createForOfIteratorHelper(svgs),\n  _step;\ntry {\n  var _loop = function _loop() {\n    var svg = _step.value;\n    svg.style.visibility = 'hidden';\n    svg.addEventListener('load', function () {\n      // setTimeout(() => {\n      svg.style.visibility = 'visible';\n      // }, 3000);\n    });\n  };\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\n//# sourceURL=webpack://homepage_public/./src/page/slides.js?\n}");

/***/ })

}]);