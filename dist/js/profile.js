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
/******/ 		"profile": 0
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
/******/ 	deferredModules.push(["./src/UI/js/profile.js","common","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/images/avatar.png":
/*!**********************************!*\
  !*** ./src/UI/images/avatar.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/avatar.png\";\n\n//# sourceURL=webpack:///./src/UI/images/avatar.png?");

/***/ }),

/***/ "./src/UI/js/profile.js":
/*!******************************!*\
  !*** ./src/UI/js/profile.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layouts.css */ \"./src/UI/components/layouts.css\");\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card.css */ \"./src/UI/components/card.css\");\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_card_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button.css */ \"./src/UI/components/button.css\");\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_button_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/avatar.png */ \"./src/UI/images/avatar.png\");\n/* harmony import */ var _images_avatar_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst leftbar = document.getElementById('leftsidebar')\r\nleftbar.className = `${_components_card_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileCard} ${_components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.leftbar} `\r\n\r\nconst image = document.createElement('img')\r\nimage.src=_images_avatar_png__WEBPACK_IMPORTED_MODULE_3___default.a\r\n\r\nlet div = leftbar.querySelectorAll('div')\r\ndiv[0].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.leftbarUp\r\ndiv[0].querySelector('form')\r\ndiv[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.leftbarDown\r\n\r\nconst mainpage = document.getElementById('mainSection')\r\nmainpage.className = `${_components_card_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileCard}`\r\n\r\nconst mainDivs = mainpage.querySelectorAll('div')\r\nconst header = mainDivs[0]\r\nheader.style.height='35vh';\r\nconst pictureHolder = mainDivs[1];\r\npictureHolder.style.width='50%'\r\npictureHolder.style.float='right'\r\nimage.style.height='25vh'\r\nimage.style.padding='2% 5%'\r\nheader.insertBefore(image,pictureHolder)\r\n\r\n\r\nconst buttons = mainDivs[2].querySelectorAll('button')\r\n\r\nbuttons[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive;\r\nbuttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\nbuttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\nbuttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\nbuttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\nbuttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n\r\nconst aboutDiv = document.getElementById('about')\r\nconst questionDiv = document.getElementById('questions')\r\nconst answerDiv = document.getElementById('answers')\r\nconst tagsDiv = document.getElementById('tags')\r\nconst badgeDiv = document.getElementById('badge')\r\nconst statsDiv = document.getElementById('stats')\r\n\r\nquestionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\nanswerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\ntagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\nbadgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\nstatsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n\r\nbuttons[0].onclick =() =>{\r\n    aboutDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    aboutDiv.style.margin='0'\r\n    aboutDiv.style.backgroundColor='gainsboro'\r\n    questionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    tagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    badgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    statsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    buttons[0].className =_components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive;\r\n    buttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n}\r\n\r\nbuttons[1].onclick =() =>{\r\n    aboutDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    answerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    tagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    badgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    statsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    buttons[0].className =_components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive;\r\n    buttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n}\r\n\r\nbuttons[2].onclick =() =>{\r\n    aboutDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    tagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    badgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    statsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    buttons[0].className =_components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive;\r\n    buttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n}\r\nbuttons[3].onclick =() =>{\r\n    aboutDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    tagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    badgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    statsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    buttons[0].className =_components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive\r\n    buttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n}\r\nbuttons[4].onclick =() =>{\r\n    aboutDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    tagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    badgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    statsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    buttons[0].className =_components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n    buttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive;\r\n    buttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile\r\n}\r\nbuttons[5].onclick =() =>{\r\n    aboutDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    tagsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    badgeDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    statsDiv.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    buttons[0].className =_components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[3].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[4].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile;\r\n    buttons[5].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileActive;\r\n}\r\n\r\nconst questionSubButton = questionDiv.querySelectorAll('button')\r\nconst questionSubDivs = questionDiv.querySelectorAll('div')\r\n\r\nquestionSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive\r\nquestionSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\nquestionSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\nquestionSubDivs[0].className =_components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.sublevel\r\nquestionSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\nquestionSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n\r\nquestionSubButton[0].onclick =()=>{\r\n    questionSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive\r\n    questionSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    questionSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    questionSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    questionSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionSubDivs[3].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n}\r\n\r\nquestionSubButton[1].onclick =()=>{\r\n    questionSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    questionSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive\r\n    questionSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    questionSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    questionSubDivs[3].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n}\r\n\r\nquestionSubButton[2].onclick =()=>{\r\n    questionSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    questionSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    questionSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive;\r\n    questionSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    questionSubDivs[3].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n}\r\n\r\nconst answerSubButton = answerDiv.querySelectorAll('button')\r\nconst answerSubDivs = answerDiv.querySelectorAll('div')\r\n\r\nanswerSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive\r\nanswerSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\nanswerSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\nanswerSubDivs[0].className =_components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.sublevel\r\nanswerSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\nanswerSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n\r\nanswerSubButton[0].onclick =()=>{\r\n    answerSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive\r\n    answerSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    answerSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    answerSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    answerSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerSubDivs[3].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n}\r\n\r\nanswerSubButton[1].onclick =()=>{\r\n    answerSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    answerSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive\r\n    answerSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    answerSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n    answerSubDivs[3].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n}\r\n\r\nanswerSubButton[2].onclick =()=>{\r\n    answerSubButton[0].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    answerSubButton[1].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline\r\n    answerSubButton[2].className = _components_button_css__WEBPACK_IMPORTED_MODULE_2___default.a.underlineActive;\r\n    answerSubDivs[1].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerSubDivs[2].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.none\r\n    answerSubDivs[3].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_0___default.a.block\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/UI/js/profile.js?");

/***/ })

/******/ });