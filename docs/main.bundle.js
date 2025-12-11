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

eval("{var _loop = function _loop() {\n  var key = _arr[_i];\n  fetch(\"page/\".concat(key, \".html\")).then(function (res) {\n    return res.text();\n  }).then(function (html) {\n    var target = document.querySelector(\"#\".concat(key));\n    var parser = new DOMParser();\n    var doc = parser.parseFromString(html, 'text/html');\n    var bodyContent = doc.body.innerHTML;\n    target.innerHTML = bodyContent;\n  });\n};\n// import \"./css/index.css\";\n// import \"./css/welcome.css\";\n\n// document.addEventListener('DOMContentLoaded', () => {\n//   console.log('DOM Loaded!');\n//   // ここに実行したい処理を書く\n// });\n\n// コンテンツページのHTMLを読み込む\nfor (var _i = 0, _arr = ['welcome', 'profile', 'nagasamai', 'wakegaku', 'cocorefix', 'minecraft']; _i < _arr.length; _i++) {\n  _loop();\n}\n\n// ハッシュがない場合は初期ページ用のハッシュを与える\nif (!window.location.hash) {\n  window.location.hash = 'welcome';\n}\n\n// サイドバー開閉処理\nvar menu = document.getElementById(\"menubar\");\nvar openMenuBtn = document.getElementById(\"btn_open-menu\");\nvar closeMenuBtn = document.getElementById(\"btn_close-menubar\");\nopenMenuBtn.addEventListener(\"click\", function () {\n  menu.classList.toggle(\"open\");\n});\ncloseMenuBtn.addEventListener(\"click\", function () {\n  menu.classList.remove(\"open\");\n});\nwindow.addEventListener('hashchange', function () {\n  var menu = document.getElementById(\"menubar\");\n  menu.classList.remove(\"open\");\n});\n\n// サイドバーのフォーカス処理\n// function refreshMenuItems() {\n//   const items = document.querySelectorAll('.menu.active');\n//   items.forEach(active => active.classList.remove('active'));\n//   const target = document.querySelector(`a[href=\"${window.location.hash}\"].menu`);\n//   if (target) target.classList.add('active');\n// }\n// window.addEventListener('hashchange', () => {\n//   refreshMenuItems();\n// });\n\n// タイトルを更新する\n// function refreshTitles() {\n//   const items = document.querySelectorAll('.title.active');\n//   items.forEach(item => item.classList.remove('active'));\n//   const hash = window.location.hash.replace(/^#/,'');\n//   const target = document.querySelector(`.title.${hash}`);\n//   if (target) target.classList.add('active');\n// }\n// window.addEventListener('hashchange', () => {\n//   refreshTitles();\n// });\n\n// 初期処理\n// refreshMenuItems();\n// refreshTitles();\n\n//# sourceURL=webpack://homepage_public/./src/index.js?\n}");

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