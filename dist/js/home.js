/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/UI/js/home.js","common","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/js/home.js":
/*!***************************!*\
  !*** ./src/UI/js/home.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_others_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/others.css */ \"./src/UI/components/others.css\");\n/* harmony import */ var _components_others_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_others_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_transition_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/transition.css */ \"./src/UI/components/transition.css\");\n/* harmony import */ var _components_transition_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_transition_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav.css */ \"./src/UI/components/nav.css\");\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_nav_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card.css */ \"./src/UI/components/card.css\");\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_card_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_color_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/color.css */ \"./src/UI/components/color.css\");\n/* harmony import */ var _components_color_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_color_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_text_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/text.css */ \"./src/UI/components/text.css\");\n/* harmony import */ var _components_text_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_text_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/button.css */ \"./src/UI/components/button.css\");\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_button_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts.css */ \"./src/UI/components/layouts.css\");\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst createMultiple = (element,className) =>{\r\n    let create = document.createElement(element);\r\n    create.className =className;\r\n    return create\r\n}\r\nconst a = document.createElement('a');\r\nlet activeTab =document.getElementsByClassName(_components_nav_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuButton)\r\nactiveTab[0].href =\"home.html\"\r\nactiveTab[0].className = `wow ${_components_nav_css__WEBPACK_IMPORTED_MODULE_2___default.a.active} ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.flash} ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.delay5s}`;\r\n\r\n\r\n\r\nlet homeBanner  = document.getElementById('banner');\r\nhomeBanner.setAttribute('class',_components_others_css__WEBPACK_IMPORTED_MODULE_0___default.a.banner)\r\nhomeBanner.style.minHeight ='500px'\r\n\r\nconst  createDiv = (selector ,name) =>{\r\n    let divs = document.createElement('div')\r\n    divs.setAttribute(selector,name)\r\n    return divs\r\n}\r\n\r\nhomeBanner.appendChild(createDiv(\"class\",'welcome'))\r\nlet welcome = document.getElementsByClassName('welcome')\r\nlet welcomeDiv=welcome[0]\r\nwelcomeDiv.className =`wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInLeft}`\r\nwelcomeDiv.style.paddingTop = '12%';\r\nwelcomeDiv.style.paddingLeft =\"7.6%\";\r\nwelcomeDiv.style.width = \"30%\";\r\nwelcomeDiv.appendChild(createMultiple('h2',_components_text_css__WEBPACK_IMPORTED_MODULE_5___default.a.h2)).innerHTML =\"Ask, Answer , Assist\"\r\nwelcomeDiv.appendChild(createMultiple(\"p\",_components_text_css__WEBPACK_IMPORTED_MODULE_5___default.a.welcome)).innerHTML =\"Ask beginner questions, get simple answers, assist others to gain knowledge, ask lite. \"\r\nwelcomeDiv.appendChild(createMultiple(\"p\",_components_text_css__WEBPACK_IMPORTED_MODULE_5___default.a.welcome)).innerHTML =\"Join the beginners community today.\"\r\n\r\n\r\n\r\nlet main = document.getElementsByClassName(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.main);\r\nmain[0].style.borderTop = \"none\"\r\nmain[0].appendChild(createMultiple('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs));\r\nmain[0].appendChild(createMultiple('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs));\r\nmain[0].appendChild(createMultiple('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.fix));\r\nlet div =document.getElementsByClassName(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs)\r\ndiv[0].style.width =\"65%\";\r\ndiv[0].style.float =\"left\";\r\ndiv[1].style.width =\"30%\";\r\ndiv[1].style.float =\"right\";\r\ndiv[0].appendChild(createMultiple('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.question));\r\nlet tabs =document.getElementsByClassName(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.question)\r\ntabs[0].className +=` wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInUp}`\r\n\r\ntabs[0].appendChild(createMultiple('button',_components_nav_css__WEBPACK_IMPORTED_MODULE_2___default.a.active)).innerHTML =\"Recent Questions\";\r\ntabs[0].appendChild(createMultiple('button',_components_button_css__WEBPACK_IMPORTED_MODULE_6___default.a.basic)).innerHTML =\"Most Responses\";\r\ntabs[0].appendChild(createMultiple('button',_components_button_css__WEBPACK_IMPORTED_MODULE_6___default.a.basic)).innerHTML =\"Recently Answered\";\r\ntabs[0].appendChild(createMultiple('button',_components_button_css__WEBPACK_IMPORTED_MODULE_6___default.a.basic)).innerHTML =\"No Answers\"\r\nlet tabsButton = tabs[0].querySelectorAll('button')\r\n\r\nlet questionCard = (listNo,node) =>{\r\n    for(let i=1; i<= listNo; i++){\r\n        div[node].appendChild(createDiv('class', `wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInLeft} ${_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionTop}`))\r\n        div[node].appendChild(createDiv('class', `wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInUp} ${_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionCard}`));\r\n        div[node].appendChild(createDiv('class', `wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInLeft} ${_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionBottom}`));\r\n    }\r\n\r\n}\r\nquestionCard(5,0);\r\n\r\nlet sidebarCard = (listNo,node) =>{\r\n    for(let i=1; i<= listNo; i++){\r\n        div[node].appendChild(createDiv('class', `wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInRight} ${_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.sidebarCard}`));\r\n    }\r\n}\r\nsidebarCard(2,1)\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/UI/js/home.js?");

/***/ })

/******/ });