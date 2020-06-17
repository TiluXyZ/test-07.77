/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/start */ \"./src/modules/start.js\");\n\n\nvar options = document.getElementById('options');\nvar button = document.querySelectorAll('.button');\nbutton.forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    options.remove();\n    Object(_modules_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_modules_start__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar elements = function elements(e) {\n  var container = document.getElementById('container');\n  var game = document.createElement('div');\n  game.classList.add('game');\n  container.appendChild(game);\n  var score = document.createElement('div');\n  score.classList.add('score');\n  game.appendChild(score);\n  var s_title = document.createElement('h2');\n  s_title.textContent = 'Puntos';\n  score.appendChild(s_title);\n  var s_panel = document.createElement('div');\n  s_panel.classList.add('s-panel');\n  score.appendChild(s_panel);\n  var s_user = document.createElement('span');\n  s_user.textContent = '0';\n  s_user.classList.add('s-user', 'points');\n  s_panel.appendChild(s_user);\n  var s_computer = document.createElement('span');\n  s_computer.textContent = '0';\n  s_computer.classList.add('s-computer', 'points');\n  s_panel.appendChild(s_computer);\n  var options_g = document.createElement('div');\n  options_g.classList.add('options-g');\n  game.appendChild(options_g);\n  options_g.setAttribute('id', 'options-g');\n  var o_title = document.createElement('h3');\n  o_title.textContent = 'Opciones';\n  options_g.appendChild(o_title);\n  var o_images = document.createElement('div');\n  o_images.classList.add('o-images');\n  options_g.appendChild(o_images);\n  var first = document.createElement('div');\n  first.classList.add('first-g', 'option-g');\n  first.setAttribute('id', 'first');\n  o_images.appendChild(first);\n  var img_r = document.createElement('img');\n  img_r.setAttribute('src', './assets/svg/icon-rock.svg');\n  img_r.setAttribute('id', 'img-f');\n  first.appendChild(img_r);\n  var text_r = document.createElement('span');\n  text_r.textContent = 'Piedra';\n  text_r.classList.add('rock', 'o-text');\n  o_images.appendChild(text_r);\n  var second = document.createElement('div');\n  second.classList.add('second-g', 'option-g');\n  second.setAttribute('id', 'second');\n  o_images.appendChild(second);\n  var img_p = document.createElement('img');\n  img_p.setAttribute('src', './assets/svg/icon-paper.svg');\n  img_p.setAttribute('id', 'img-s');\n  second.appendChild(img_p);\n  var text_p = document.createElement('span');\n  text_p.textContent = 'Papel';\n  text_p.classList.add('paper', 'o-text');\n  o_images.appendChild(text_p);\n  var third = document.createElement('div');\n  third.classList.add('third-g', 'option-g');\n  third.setAttribute('id', 'third');\n  o_images.appendChild(third);\n  var img_s = document.createElement('img');\n  img_s.setAttribute('src', './assets/svg/icon-scissors.svg');\n  img_s.setAttribute('id', 'img-t');\n  third.appendChild(img_s);\n  var text_s = document.createElement('span');\n  text_s.textContent = 'Tijera';\n  text_s.classList.add('scissor', 'o-text');\n  o_images.appendChild(text_s);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n//# sourceURL=webpack:///./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/start.js":
/*!******************************!*\
  !*** ./src/modules/start.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifications */ \"./src/modules/verifications.js\");\n\n\nvar start = function start(e) {\n  var option = document.querySelectorAll('.option-g');\n  option.forEach(function (opt) {\n    opt.addEventListener('click', function (e) {\n      Object(_verifications__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./src/modules/start.js?");

/***/ }),

/***/ "./src/modules/verifications.js":
/*!**************************************!*\
  !*** ./src/modules/verifications.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar VerificationO = function VerificationO(e) {\n  var id = e.path[0].id;\n  var src = e.path[0].src;\n  var opt_u;\n\n  if (id === 'first' || id === 'img-f') {\n    console.log('Piedra');\n    opt_u = 1;\n\n    if (src == undefined) {\n      src = e.path[0].firstElementChild.src;\n      console.log(src);\n    } else {\n      console.log(src);\n    }\n  } else if (id === 'second' || id === 'img-s') {\n    console.log('Papel');\n    opt_u = 2;\n\n    if (src == undefined) {\n      src = e.path[0].firstElementChild.src;\n      console.log(src);\n    } else {\n      console.log(src);\n    }\n  } else {\n    console.log('Tijera');\n    opt_u = 3;\n\n    if (src == undefined) {\n      src = e.path[0].firstElementChild.src;\n      console.log(src);\n    } else {\n      console.log(src);\n    }\n  }\n\n  console.log(opt_u);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerificationO);\n\n//# sourceURL=webpack:///./src/modules/verifications.js?");

/***/ })

/******/ });