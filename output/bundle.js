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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/start */ \"./src/modules/start.js\");\n/* eslint-disable linebreak-style */\n\n\nvar options = document.getElementById('options');\nvar button = document.querySelectorAll('.button');\nbutton.forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    options.remove();\n    Object(_modules_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"])();\n    Object(_modules_start__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playAgain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playAgain */ \"./src/modules/playAgain.js\");\n/* eslint-disable linebreak-style */\n// eslint-disable-next-line import/no-cycle\n\n\nvar computer = function computer(num2) {\n  var num = Math.round(Math.random() * (3 - 1) + 1);\n\n  if (num === 1) {\n    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-rock.svg');\n    document.getElementById('imagesC').classList.add('rock-b');\n  } else if (num === 2) {\n    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-paper.svg');\n    document.getElementById('imagesC').classList.add('paper-b');\n  } else {\n    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-scissors.svg');\n    document.getElementById('imagesC').classList.add('scissor-b');\n  }\n\n  if (num2 === 1) {\n    document.getElementById('imagesU').classList.add('rock-b');\n  } else if (num2 === 2) {\n    document.getElementById('imagesU').classList.add('paper-b');\n  } else {\n    document.getElementById('imagesU').classList.add('scissor-b');\n  }\n\n  var element = document.getElementById('result');\n  var point = 0;\n\n  if (num === 1 && num2 === 3 || num === 2 && num2 === 1 || num === 3 && num2 === 2) {\n    element.textContent = 'Perdiste';\n    point += 1;\n    document.getElementById('point-c').textContent = point;\n  } else if (num === num2) {\n    element.textContent = 'Empate';\n  } else {\n    element.textContent = 'Ganaste';\n    point += 1;\n    document.getElementById('point-u').textContent = point;\n  }\n\n  document.getElementById('button-1').addEventListener('click', function () {\n    // eslint-disable-next-line no-restricted-globals\n    location.reload();\n  });\n  document.getElementById('button-2').addEventListener('click', _playAgain__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (computer);\n\n//# sourceURL=webpack:///./src/modules/computer.js?");

/***/ }),

/***/ "./src/modules/create.js":
/*!*******************************!*\
  !*** ./src/modules/create.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\nvar create = function create(element, clase, attribute, father) {\n  var elemento = document.createElement(element);\n  elemento.classList.add(clase);\n  elemento.setAttribute('id', attribute);\n  father.appendChild(elemento);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack:///./src/modules/create.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/*! exports provided: elements, layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"layout\", function() { return layout; });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/modules/create.js\");\n/* eslint-disable linebreak-style */\n\nvar game = document.createElement('div');\n\nvar elements = function elements() {\n  var container = document.getElementById('container');\n  game.classList.add('game');\n  game.setAttribute('id', 'game');\n  container.appendChild(game);\n  var score = document.createElement('div');\n  score.classList.add('score');\n  score.setAttribute('id', 'score');\n  game.appendChild(score);\n  var titleS = document.createElement('h2');\n  titleS.textContent = 'Puntos';\n  score.appendChild(titleS);\n  var panelS = document.createElement('div');\n  panelS.classList.add('s-panel');\n  score.appendChild(panelS);\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'points', 'point-u', panelS);\n  document.getElementById('point-u').textContent = '0';\n  document.getElementById('point-u').classList.add('s-user', 'points');\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'points', 'point-c', panelS);\n  document.getElementById('point-c').textContent = '0';\n  document.getElementById('point-c').classList.add('s-computer');\n  var optionsG = document.createElement('div');\n  optionsG.classList.add('options-g');\n  game.appendChild(optionsG);\n  optionsG.setAttribute('id', 'optionsG');\n  var titleO = document.createElement('h3');\n  titleO.textContent = 'Opciones';\n  optionsG.appendChild(titleO);\n  var imagesO = document.createElement('div');\n  imagesO.classList.add('o-images');\n  optionsG.appendChild(imagesO);\n  var first = document.createElement('div');\n  first.classList.add('first-g', 'option-g');\n  first.setAttribute('id', 'first');\n  imagesO.appendChild(first);\n  var imgR = document.createElement('img');\n  imgR.setAttribute('src', './assets/svg/icon-rock.svg');\n  imgR.setAttribute('id', 'img-f');\n  first.appendChild(imgR);\n  var textR = document.createElement('span');\n  textR.textContent = 'Piedra';\n  textR.classList.add('rock', 'o-text');\n  imagesO.appendChild(textR);\n  var second = document.createElement('div');\n  second.classList.add('second-g', 'option-g');\n  second.setAttribute('id', 'second');\n  imagesO.appendChild(second);\n  var imgP = document.createElement('img');\n  imgP.setAttribute('src', './assets/svg/icon-paper.svg');\n  imgP.setAttribute('id', 'img-s');\n  second.appendChild(imgP);\n  var textP = document.createElement('span');\n  textP.textContent = 'Papel';\n  textP.classList.add('paper', 'o-text');\n  imagesO.appendChild(textP);\n  var third = document.createElement('div');\n  third.classList.add('third-g', 'option-g');\n  third.setAttribute('id', 'third');\n  imagesO.appendChild(third);\n  var imgS = document.createElement('img');\n  imgS.setAttribute('src', './assets/svg/icon-scissors.svg');\n  imgS.setAttribute('id', 'img-t');\n  third.appendChild(imgS);\n  var textS = document.createElement('span');\n  textS.textContent = 'Tijera';\n  textS.classList.add('scissor', 'o-text');\n  imagesO.appendChild(textS);\n};\n\nvar layout = function layout(img) {\n  document.getElementById('optionsG').remove();\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'container-c', 'resultC', game);\n  var resultC = document.getElementById('resultC');\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'result', 'result', resultC);\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'card-l', 'userCard', resultC);\n  var userCard = document.getElementById('userCard');\n  userCard.classList.add('card-u');\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'card-l', 'computerCard', resultC);\n  var computerCard = document.getElementById('computerCard');\n  computerCard.classList.add('card-c');\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'versus', 'vs', resultC);\n  document.getElementById('vs').textContent = 'VS';\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'card-t', 'title-u', userCard);\n  document.getElementById('title-u').textContent = 'Jugador';\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', 'card-t', 'title-c', computerCard);\n  var mediaqueryList = window.matchMedia('(min-width: 500px)');\n\n  if (mediaqueryList.matches) {\n    document.getElementById('title-c').textContent = 'Computadora';\n  } else {\n    document.getElementById('title-c').textContent = 'CPU';\n  }\n\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'images-l', 'imagesU', userCard);\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'img-u', 'imgUser', document.getElementById('imagesU'));\n  document.getElementById('imgUser').setAttribute('src', img);\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'images-l', 'imagesC', computerCard);\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', 'img-c', 'imgComputer', document.getElementById('imagesC'));\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'buttons', 'btns', resultC);\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'btns', 'btn-1', document.getElementById('btns'));\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'btn', 'button-1', document.getElementById('btn-1'));\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'btns', 'btn-2', document.getElementById('btns'));\n  Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'btn', 'button-2', document.getElementById('btn-2'));\n  document.getElementById('button-1').textContent = 'Ir al Menú';\n  document.getElementById('button-2').textContent = 'Volver a jugar';\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/playAgain.js":
/*!**********************************!*\
  !*** ./src/modules/playAgain.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ \"./src/modules/start.js\");\n/* eslint-disable linebreak-style */\n // eslint-disable-next-line import/no-cycle\n\n\n\nvar playAgain = function playAgain() {\n  document.getElementById('score').remove();\n  document.getElementById('resultC').remove();\n  document.getElementById('game').remove();\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"])();\n  Object(_start__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playAgain);\n\n//# sourceURL=webpack:///./src/modules/playAgain.js?");

/***/ }),

/***/ "./src/modules/start.js":
/*!******************************!*\
  !*** ./src/modules/start.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifications */ \"./src/modules/verifications.js\");\n/* eslint-disable linebreak-style */\n\n\nvar start = function start() {\n  var option = document.querySelectorAll('.option-g');\n  option.forEach(function (opt) {\n    opt.addEventListener('click', function (e) {\n      Object(_verifications__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./src/modules/start.js?");

/***/ }),

/***/ "./src/modules/verifications.js":
/*!**************************************!*\
  !*** ./src/modules/verifications.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ \"./src/modules/computer.js\");\n/* eslint-disable linebreak-style */\n\n/* eslint-disable no-console */\n // eslint-disable-next-line import/no-cycle\n\n\n\nvar VerificationO = function VerificationO(e) {\n  var id = e.path[0].id;\n  var src = e.path[0].src;\n  var opt;\n\n  if (id === 'first' || id === 'img-f') {\n    opt = 1;\n\n    if (src === undefined) {\n      src = e.path[0].firstElementChild.src;\n      Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"layout\"])(src);\n      Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opt);\n    } else {\n      Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"layout\"])(src);\n      Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opt);\n    }\n  } else if (id === 'second' || id === 'img-s') {\n    opt = 2;\n\n    if (src === undefined) {\n      src = e.path[0].firstElementChild.src;\n      Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"layout\"])(src);\n      Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opt);\n    } else {\n      Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"layout\"])(src);\n      Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opt);\n    }\n  } else {\n    opt = 3;\n\n    if (src === undefined) {\n      src = e.path[0].firstElementChild.src;\n      Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"layout\"])(src);\n      Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opt);\n    } else {\n      Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"layout\"])(src);\n      Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opt);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerificationO);\n\n//# sourceURL=webpack:///./src/modules/verifications.js?");

/***/ })

/******/ });