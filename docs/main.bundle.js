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

eval("{var _loop = function _loop() {\n  var key = _arr[_i];\n  fetch(\"page/\".concat(key, \".html\")).then(function (res) {\n    return res.text();\n  }).then(function (html) {\n    var target = document.querySelector(\"#\".concat(key));\n    var parser = new DOMParser();\n    var doc = parser.parseFromString(html, 'text/html');\n    var bodyContent = doc.body.innerHTML;\n    target.innerHTML = bodyContent;\n  });\n};\n// import \"./css/index.css\";\n// import \"./css/welcome.css\";\n\n// コンテンツページのHTMLを読み込む\nfor (var _i = 0, _arr = ['welcome', 'profile', 'koshihikari']; _i < _arr.length; _i++) {\n  _loop();\n}\n\n// ハッシュがない場合は初期ページ用のハッシュを与える\nif (!window.location.hash) {\n  window.location.hash = 'welcome';\n}\n\n// サイドバー開閉処理\nvar sidebar = document.getElementById(\"sidebar\");\nvar openSidebarBtn = document.getElementById(\"open-sidebar-btn\");\nvar closeSidebarBtn = document.getElementById(\"close-sidebar-btn\");\nopenSidebarBtn.addEventListener(\"click\", function () {\n  sidebar.classList.toggle(\"open\");\n});\ncloseSidebarBtn.addEventListener(\"click\", function () {\n  sidebar.classList.remove(\"open\");\n});\nwindow.addEventListener('hashchange', function () {\n  var sidebar = document.getElementById(\"sidebar\");\n  sidebar.classList.remove(\"open\");\n});\n\n// サイドバーのフォーカス処理\nfunction refreshSidebarItems() {\n  var items = document.querySelectorAll('.sidebar-item.active');\n  items.forEach(function (active) {\n    return active.classList.remove('active');\n  });\n  var target = document.querySelector(\"a[href=\\\"\".concat(window.location.hash, \"\\\"].sidebar-item\"));\n  if (target) target.classList.add('active');\n}\nwindow.addEventListener('hashchange', function () {\n  refreshSidebarItems();\n});\n\n// 初期処理\nrefreshSidebarItems();\n\n//# sourceURL=webpack://homepage_public/./src/index.js?\n}");

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