/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhomepage_public"] = self["webpackChunkhomepage_public"] || []).push([["src_page_anki_js"],{

/***/ "./src/page/anki.js":
/*!**************************!*\
  !*** ./src/page/anki.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _slides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slides */ \"./src/page/slides.js\");\n/* harmony import */ var _slides__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slides__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar svg = document.querySelector('#content_anki > object');\nsvg.addEventListener('load', function () {\n  var doc = svg.getSVGDocument();\n  var arrows = doc.querySelector('#background-arrows');\n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(arrows, {\n    rotation: -360,\n    duration: 100,\n    ease: 'none',\n    repeat: -1,\n    transformOrigin: '50% 50%'\n  });\n});\n\n//# sourceURL=webpack://homepage_public/./src/page/anki.js?\n}");

/***/ }),

/***/ "./src/page/slides.js":
/*!****************************!*\
  !*** ./src/page/slides.js ***!
  \****************************/
/***/ (() => {

eval("{function _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar svgs = document.querySelectorAll('.slides-content object.slide');\nvar _iterator = _createForOfIteratorHelper(svgs),\n  _step;\ntry {\n  var _loop = function _loop() {\n    var svg = _step.value;\n    svg.style.visibility = 'hidden';\n    svg.addEventListener('load', function () {\n      // setTimeout(() => {\n      svg.style.visibility = 'visible';\n      // }, 3000);\n    });\n  };\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\n//# sourceURL=webpack://homepage_public/./src/page/slides.js?\n}");

/***/ })

}]);