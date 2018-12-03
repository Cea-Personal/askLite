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
/******/ 		"questionnare": 0
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
/******/ 	deferredModules.push(["./src/UI/js/questionnare.js","common","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/js/questionnare.js":
/*!***********************************!*\
  !*** ./src/UI/js/questionnare.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_others_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/others.css */ \"./src/UI/components/others.css\");\n/* harmony import */ var _components_others_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_others_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_transition_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/transition.css */ \"./src/UI/components/transition.css\");\n/* harmony import */ var _components_transition_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_transition_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav.css */ \"./src/UI/components/nav.css\");\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_nav_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card.css */ \"./src/UI/components/card.css\");\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_card_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_color_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/color.css */ \"./src/UI/components/color.css\");\n/* harmony import */ var _components_color_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_color_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_text_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/text.css */ \"./src/UI/components/text.css\");\n/* harmony import */ var _components_text_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_text_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/button.css */ \"./src/UI/components/button.css\");\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_button_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts.css */ \"./src/UI/components/layouts.css\");\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*------------- create functions  -----------------*/\r\n\r\n// function to assign classes\r\nconst AssignClass = (element,className) =>{\r\n    let create = document.createElement(element);\r\n    create.className =className;\r\n    return create\r\n}\r\n\r\n// function to create div and assign a class or id name\r\nconst  createDiv = (selector ,name) =>{\r\n    let divs = document.createElement('div')\r\n    divs.setAttribute(selector,name)\r\n    return divs\r\n}\r\n// function for the sidebard material design\r\nconst sidebarCard = (listNo,node, className) =>{\r\n    for(let i=1; i<= listNo; i++){\r\n        document.getElementsByClassName(className)[node].appendChild(createDiv('class', `wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInRight} ${_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.sidebarCard}`));\r\n    }\r\n}\r\n// function for  main card material design\r\nconst questionCard = (listNo,node,className) =>{\r\n    for(let i=0; i<listNo; i++){\r\n        document.getElementsByClassName(className)[node].appendChild(createDiv('class', `wow ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.slideInLeft} ${_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionCard}`));\r\n        let title = document.getElementsByClassName(className)[node].getElementsByClassName(_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionCard)[i]\r\n        title.style.marginTop ='1.8%'\r\n    }\r\n}\r\n\r\n// create a link node\r\nconst a = document.createElement('a');\r\n \r\n/* --------------- display active tab-------------------*/\r\nlet activeTab =document.getElementsByClassName(_components_nav_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuButton)\r\nactiveTab[1].href =\"questionnare.html\"\r\nactiveTab[1].className = `wow ${_components_nav_css__WEBPACK_IMPORTED_MODULE_2___default.a.active} ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.flash} ${_components_transition_css__WEBPACK_IMPORTED_MODULE_1___default.a.delay5s}`;\r\n\r\n\r\n/*----------------create three divs --------------------*/\r\nlet main = document.getElementsByClassName(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.main);\r\nmain[0].appendChild(AssignClass ('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs));\r\nmain[0].appendChild(AssignClass ('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs));\r\nmain[0].appendChild(AssignClass ('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.fix));\r\nlet div =document.getElementsByClassName(_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs)\r\ndiv[0].style.width =\"58%\";\r\ndiv[0].style.float =\"left\";\r\ndiv[1].style.width =\"38%\";\r\ndiv[1].style.float =\"right\";\r\n \r\n/*----------------- create cards------------*/\r\nsidebarCard(2,1, _components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs)\r\nquestionCard(2,0, _components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs)\r\n\r\n/*----------------  add  top div ----------------*/\r\nmain[0].insertBefore(AssignClass ('div',_components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabs),div[0]);\r\ndiv[0].className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_7___default.a.fix;\r\n\r\n\r\n/*-------------create question form -----------*/\r\nlet form = document.createElement('form')\r\nform.setAttribute('action','');// set form action\r\nform.setAttribute('method','post') // post method for forms\r\n\r\n// create the form on the second main card.\r\nlet askForm = document.getElementsByClassName(_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionCard)[1].appendChild(form)\r\n\r\n/*--------------- create subject input ---------------*/\r\nlet namelabel = document.createElement('label'); // Create Label for Name Field\r\nnamelabel.innerHTML = \"Subject : \"; // Set Field Labels\r\nform.appendChild(namelabel);\r\n\r\nlet inputelement = document.createElement('input'); // Create Input Field for Name\r\ninputelement.setAttribute(\"type\", \"text\");\r\ninputelement.setAttribute(\"name\", \"title\");\r\nform.appendChild(inputelement);\r\n\r\nlet linebreak = document.createElement('br');\r\nform.appendChild(linebreak);\r\n\r\n/*------------ create description input ---------------*/\r\n\r\nlet messagelabel = document.createElement('label'); // Append Textarea\r\nmessagelabel.innerHTML = \"Description : \";\r\nform.appendChild(messagelabel);\r\n\r\nlet texareaelement = document.createElement('textarea');\r\ntexareaelement.setAttribute(\"name\", \"description\");\r\nform.appendChild(texareaelement);\r\n\r\nlet messagebreak = document.createElement('br');\r\nform.appendChild(messagebreak);\r\n\r\n/*-------------create category input --------------*/\r\n\r\nlet categorylabel = document.createElement('label'); // Append Textarea\r\ncategorylabel.innerHTML = \"Category : \";\r\nform.appendChild(categorylabel);\r\n\r\nlet list = document.createElement('input');\r\nlist.setAttribute('list','category')\r\nform.appendChild(list)\r\n\r\nlet datalist = document.createElement('datalist');\r\ndatalist.setAttribute('id','category')\r\n\r\nlet categories =['HTML','CSS','Pre-Processors','CSS Frameworks','Bootstrap','Vanilla Javascript', 'React','Angular','VUE','DevOps']\r\n\r\nlet createOptions =(element,values) =>{\r\n    for(let i=0; i<values.length;i++){\r\n        let options=document.createElement('option');\r\n        options.value =values[i]\r\n        element.appendChild(options)\r\n    }\r\n}\r\nform.appendChild(datalist);\r\ncreateOptions(document.getElementById('category'),categories)\r\n\r\nlet catBreak = document.createElement('br');\r\nform.appendChild(catBreak);\r\n\r\n/*-----------------create tags input ---------------*/\r\n\r\nlet tagslabel = document.createElement('label');\r\ntagslabel.innerHTML = \"Tags : \";\r\nform.appendChild(tagslabel);\r\n\r\nlet tagelement = document.createElement('input'); \r\ntagelement.setAttribute(\"type\", \"text\");\r\ntagelement.setAttribute(\"name\", \"tags\");\r\nform.appendChild(tagelement);\r\n\r\nlet tagbreak = document.createElement('br');\r\nform.appendChild(tagbreak);\r\n\r\n/*--------------------create submit button-----------*/\r\n\r\n\r\nlet submitElement = document.createElement('button'); // Append Submit Button\r\nsubmitElement.setAttribute(\"type\", \"submit\");\r\nsubmitElement.setAttribute(\"value\", \"Ask Question\");\r\nsubmitElement.setAttribute(\"class\", `${_components_button_css__WEBPACK_IMPORTED_MODULE_6___default.a.fullLength}`);\r\ndocument.getElementsByClassName(_components_card_css__WEBPACK_IMPORTED_MODULE_3___default.a.questionCard)[2].appendChild(submitElement);\r\nlet buttons =form.querySelector('button')\r\n    buttons[0].innerHTML ='Ask Question'\n\n//# sourceURL=webpack:///./src/UI/js/questionnare.js?");

/***/ })

/******/ });