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
/******/ 		"shared": 0
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
/******/ 	deferredModules.push(["./src/UI/js/shared.js","common","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/images/logo.png":
/*!********************************!*\
  !*** ./src/UI/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo.png\";\n\n//# sourceURL=webpack:///./src/UI/images/logo.png?");

/***/ }),

/***/ "./src/UI/js/shared.js":
/*!*****************************!*\
  !*** ./src/UI/js/shared.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_background_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/background.css */ \"./src/UI/components/background.css\");\n/* harmony import */ var _components_background_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_background_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts.css */ \"./src/UI/components/layouts.css\");\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_color_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/color.css */ \"./src/UI/components/color.css\");\n/* harmony import */ var _components_color_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_color_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav.css */ \"./src/UI/components/nav.css\");\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_nav_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo.png */ \"./src/UI/images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* --------- get Elements -----------------*/\r\nconst header = document.querySelector(\"header\");\r\nconst navBar = document.querySelector('nav');\r\nconst section = document.querySelector('section');\r\nconst sidebar = document.querySelector('aside');\r\nconst footer = document.querySelector('footer');\r\n\r\n/* ------- create Functions ---------------*/\r\nconst  createDiv = (selector ,name) =>{\r\n    let divs = document.createElement('div')\r\n    divs.setAttribute(selector,name)\r\n    return divs\r\n}\r\n\r\nconst createList= (listNo,ulname,liName,linkName) =>{\r\n    let divs = document.createElement('ul');\r\n    divs.setAttribute('class',ulname);\r\n    for (let i=0; i< listNo; i++){\r\n        let li= document.createElement('li');\r\n        li.setAttribute(\"class\",liName);\r\n        let lastLi = divs.appendChild(li);\r\n        divs.insertBefore(li,lastLi);\r\n        let link = document.createElement('a');\r\n        link = li.appendChild(link)\r\n        link.setAttribute(\"class\",linkName)\r\n    }\r\n    return divs\r\n}\r\n\r\nconst p = document.createElement('p');\r\nconst a = document.createElement ('a');\r\nconst image = document.createElement('img');\r\n\r\n/*--- initialise body no padding, margin , border-------*/\r\n\r\nlet body = document.querySelector('body');\r\nbody.className =_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.body\r\n\r\n/* ------------Shared topheader -------------*/\r\n\r\nheader.appendChild(createDiv('class', _components_background_css__WEBPACK_IMPORTED_MODULE_0___default.a.top));\r\n\r\n/*----------- topheader links --------------*/\r\nheader.firstElementChild.appendChild(createList(2,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.topMenu,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.horizontal,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.headButton))\r\nlet headLi = document.querySelectorAll('li');\r\nheadLi[0].firstChild.href =\"login.html\";\r\nheadLi[0].firstChild.innerHTML =\"Login\";\r\nheadLi[1].firstChild.href =\"about.html#contact\";\r\nheadLi[1].firstChild.innerHTML =\"Contact Us\";\r\nheadLi[0].firstChild.style.borderRight = '1px solid white';\r\n\r\n/*------------Shared navbar ---------------*/\r\nnavBar.className=_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.navBar\r\n\r\n\r\n// add logo to the navbar\r\n\r\nnavBar.appendChild(createDiv('id','logo'))\r\na.href =\"index.html\"\r\nlet logoDiv =document.getElementById('logo');\r\nimage.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a;\r\nimage.style.height = '50px';\r\nlogoDiv.style.paddingLeft ='7.6%';\r\nlogoDiv.style.width ='25%';\r\nlogoDiv.style.float =\"left\";\r\nlogoDiv.style.margin = 0;\r\nlogoDiv.appendChild(a).appendChild(image);\r\n\r\n// create navigation menu\r\nnavBar.appendChild(createDiv('id','navMenu'));\r\nlet tabs = document.getElementById('navMenu');\r\ntabs.style.width=\"60%\";\r\ntabs.style.float=\"right\";\r\ntabs.appendChild(createList(4,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.tabs,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.horizontal, _components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuButton));\r\nlet navLi =tabs.querySelectorAll('li');\r\nnavLi[0].firstChild.href =\"home.html\"\r\nnavLi[0].firstChild.innerHTML =\"HOME\"\r\nnavLi[1].firstChild.href =\"questionnare.html\"\r\nnavLi[1].firstChild.innerHTML =\"ASK QUESTION\"\r\nnavLi[2].firstChild.href ='questionList.html'\r\nnavLi[2].firstChild.innerHTML =\"QUESTIONS\"\r\nnavLi[3].firstChild.href ='profile.html'\r\nnavLi[3].firstChild.innerHTML =\"YOUR PROFILE\"\r\n\r\n// body background\r\nsection.className =_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.section\r\nlet main = section.firstElementChild\r\nmain.className =_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.main\r\n\r\n/*--------------footer elements--------------*/\r\n\r\nfooter.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer\r\nfooter.appendChild(createDiv('class',_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.foot));\r\nfooter.appendChild(createDiv('class',_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.foot));\r\nfooter.appendChild(createDiv('class',_components_layouts_css__WEBPACK_IMPORTED_MODULE_1___default.a.trademark));\r\n\r\nlet footerDiv = footer.querySelectorAll('div');\r\nlet firstFoot = footerDiv[0];\r\nfirstFoot.appendChild(createList(3,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.tabs,\" \", _components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerButton))\r\nlet list = firstFoot.querySelectorAll('li');\r\nlist[0].firstChild.href =\"questionList.html\";\r\nlist[0].firstChild.innerHTML =\"Questions\";\r\nlist[1].firstChild.href =\"about.html\";\r\nlist[1].firstChild.innerHTML =\"About us\";\r\nlist[2].firstChild.href =\"about.html#contact.html\";\r\nlist[2].firstChild.innerHTML =\"Contact Us\";\r\n\r\nlet secondFoot =footerDiv[1];\r\nsecondFoot.appendChild(createList(3,_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.tabs,\" \",_components_nav_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerButton))\r\nlet secondList = secondFoot.querySelectorAll('li');\r\nsecondList[0].firstChild.href =\"privacy.html\";\r\nsecondList[0].firstChild.innerHTML =\"Privacy Policy\";\r\nsecondList[1].firstChild.href =\"services.html\";\r\nsecondList[1].firstChild.innerHTML =\"Terms of Service\";\r\nsecondList[2].firstChild.href =\"cookie.html\";\r\nsecondList[2].firstChild.innerHTML =\"Cookie Policy\";\r\n\r\nlet tradeMark = footerDiv[2];\r\ntradeMark.appendChild(p);\r\ntradeMark.childNodes[0].innerHTML =\"All Rights Reserved. &copy 2018. Made by CEA\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/UI/js/shared.js?");

/***/ })

/******/ });