/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("{// ハッシュがない場合は初期ページ用のハッシュを与える\nif (!window.location.hash) {\n  window.location.hash = 'welcome';\n}\nfunction loadHtml() {\n  var hash = window.location.hash;\n  if (hash) {\n    var loadMarker = document.querySelector(\".content-wrapper\".concat(hash, \" > a.load-html\"));\n    if (loadMarker) {\n      var pageUrl = '.' + loadMarker.href.replace(location.origin, '');\n      fetch(pageUrl).then(function (res) {\n        return res.text();\n      }).then(function (html) {\n        var parser = new DOMParser();\n        var doc = parser.parseFromString(html, 'text/html');\n        var bodyContent = doc.body.innerHTML;\n        loadMarker.parentNode.innerHTML = bodyContent;\n      });\n    }\n  }\n}\nwindow.addEventListener('hashchange', function () {\n  loadHtml();\n});\nloadHtml();\n\n// サイドバー開閉処理\nvar menubar = document.getElementById(\"menubar\");\nvar openMenuBtn = document.getElementById(\"btn_open-menu\");\nvar closeMenuBtn = document.getElementById(\"btn_close-menubar\");\nopenMenuBtn.addEventListener(\"click\", function () {\n  menubar.classList.toggle(\"open\");\n});\ncloseMenuBtn.addEventListener(\"click\", function () {\n  menubar.classList.remove(\"open\");\n});\nwindow.addEventListener('hashchange', function () {\n  var menu = document.getElementById(\"menubar\");\n  menubar.classList.remove(\"open\");\n});\n\n//# sourceURL=webpack://homepage_public/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;