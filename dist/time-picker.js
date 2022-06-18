(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".time-picker{\n    display: grid;\n    grid-template-columns: 1fr 5px 1fr 1fr;\n\n    justify-items: center;\n    align-items: center;\n\n    width: 200px;\n\n    padding: 5px;\n\n    border: 3px solid lightgray;\n    border-radius: 10px;\n\n    font-family: \"Roboto Mono\";\n    color: rgb(97, 119, 119);\n\n}\n\n.time-picker img{\n    opacity: .3;\n}\n\n.time-picker .picker {\n    display: grid;\n    grid-template-columns: 1fr;\n    \n    justify-items: center;\n    align-items: center;\n}\n\n.time-picker .picker div{\n    padding: 3px;\n    border-radius: 5px;\n}\n\n.picker.focused div{\n    background-color: lightgray;\n}\n\n.time-picker .arrow{\n    display: none; \n}\n\n.time-picker .arrow.active{\n    display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createBullshitDiv": () => (/* binding */ createBullshitDiv),
  "createTimePicker": () => (/* binding */ createTimePicker)
});

;// CONCATENATED MODULE: ./node_modules/dom-utils/dom-utils.js
// Returns an html element from an object.
// Object has the form of: {
//     //Required
//     tag = validHtmlTag, 
//
//     //All tags below this are optional
//     classes = [ strings ],
//     properties {
//         key : value,
//         key2: value2
//     },
//     attributes = {
//         key : value,
//         key2 : value2
//     },
//     children : [ HtmlElements ],
// }
//
// returns the newly created element
console.log("dom-utils imported");
function createHtmlElement(elementObject){
    //Must at least have a tag.
    if (typeof elementObject.tag !== 'string'){
        return
    }

    const newElement = document.createElement(elementObject.tag);
    const classes = elementObject.classes || [];
    const children = elementObject.children || [];
    const properties = elementObject.properties || {};
    const attributes = elementObject.attributes || {};

    if (classes.length >= 1){
        classes.forEach( cls => newElement.classList.add(cls));
    }

    for (let property in properties){
        newElement[property] = properties[property];
    }

    for (let attribute in attributes){
        newElement.setAttribute(attribute, attributes[attribute]);
    }

    appendChildren(newElement, children); 
    
    return newElement;
}

// Accepts a parent HTMLElement and an array of children HTMLElements
// Adds children to parent AND
// Returns the parent element
function appendChildren(parent, children){
    children.forEach (child => parent.appendChild(child));

    return parent;
};



// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/time-picker.css
var time_picker = __webpack_require__(452);
;// CONCATENATED MODULE: ./src/time-picker.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(time_picker/* default */.Z, options);




       /* harmony default export */ const src_time_picker = (time_picker/* default */.Z && time_picker/* default.locals */.Z.locals ? time_picker/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/chevron-down.svg
const chevron_down_namespaceObject = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WiIgLz48L3N2Zz4=";
;// CONCATENATED MODULE: ./src/chevron-up.svg
const chevron_up_namespaceObject = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaIiAvPjwvc3ZnPg==";
;// CONCATENATED MODULE: ./src/time-picker.js






console.log("Executed from time-picker.js");
document.querySelector("body").appendChild(
    createHtmlElement({
        tag: "p",
        properties: {
            textContent: "Hello From time-picker.js",
        }
    })
);
function TimePickerObject (){
    let hour = 0;
    let minute = 0;
    let amPm = "AM"
    let rolling = true;

    function incrementHour(step){
        if (isValidHour(hour + step)){
            hour += step;
            return hour;
        }
        else if (rolling === true){
            if ((hour + step) < 1){
                hour = 12;
                return hour;
            }
            else if ( (hour + step) > 12 ){
                hour = 1;
                return hour;
            }
        }

        //If hour couldn't be incremented or rolled over return minute without changes
        return hour;
    }

    function incrementMinute(step){
        if (isValidMinute(minute + step)){
            minute += step;
            return minute;
        }
        else if (rolling === true){
            if ((minute + step) < 0){
                minute = 59;
                return minute;
            }
            else if ( (minute + step) > 59 ){
                minute = 0;
                return minute;
            }
        }

        //If minute couldn't be incremented or rolled over return minute without changes
        return minute;
    }

    function toggleAmPm(){
        amPm = (amPm === "AM") ? "PM" : "AM";

        return amPm;
    }

    function setHour(h){
        //Allow zero for now... allows you to fully delete hour field when
        //entering value through keyboard, not sure if this is a long-term solution
        if (isValidHour(h) || h === 0){
            hour = h;
            return hour;
        }

        return undefined;
    }

    function setMinute(m){
        if (isValidMinute(m)){
            minute = m;
            return minute;
        }

        return undefined;
    }

    function setAmPm(str){
        if (str === "AM" || str === "PM"){
            amPm = str;
            return amPm;
        }

        return undefined;
    }

    function getHour(){
        return hour;
    }

    function getMinute(){
        return minute;
    }
    
    function getAmPm(){
        return amPm;
    }

    function getTime(){
        return `${pad(hour)}:${pad(minute)} ${amPm}`;
    }

    function pad(num){
        return num.toString().padStart(2, '0');
    }
    function isValidHour(hour){
        if (hour >= 1 && hour <= 12){
            return true;
        }

        return false;
    }

    function isValidMinute(minute){
        if (minute >= 0 && minute <= 59){
            return true;
        }
        return false;
    }

    return { 
        incrementHour, 
        incrementMinute, 
        toggleAmPm, 
        setHour, 
        setMinute, 
        setAmPm,
        getHour,
        getMinute,
        getAmPm,
        getTime,
        isValidHour,
        isValidMinute
    }
}
function createTimePicker(){
    const timePickerObj = TimePickerObject();
    const timePickerElement = createHtmlElement({
        tag: "div",
        classes: [ "time-picker" ],
        attributes: {
            tabindex: 0,
        },
        children: [
            createHtmlElement({
                tag: "div",
                classes: [ "picker", "hour-picker" ],
                children: [
                    createHtmlElement({
                        tag: "img",
                        classes: [ "up", "arrow" ],
                        properties: {
                            src: "./chevron-up.svg",
                        },
                    }),
                    createHtmlElement({
                        tag: "div",
                        classes: [ "value" ],
                        properties: {
                            id: "hour",
                            textContent: "00",
                        },
                    }),
                    createHtmlElement({
                        tag: "img",
                        classes: [ "down", "arrow" ],
                        properties: {
                            src: "./chevron-down.svg",
                        },
                    }),
                ],
            }),

            createHtmlElement({
                tag: "div",
                properties: {
                    textContent: ":",
                },
            }),
            
            createHtmlElement({
                tag: "div",
                classes: [ "picker", "minute-picker" ],
                children: [
                    createHtmlElement({
                        tag: "img",
                        classes: [ "up", "arrow" ],
                        properties: {
                            src: "./chevron-up.svg",
                        },
                    }),
                    createHtmlElement({
                        tag: "div",
                        classes: [ "value", "minute" ],
                        properties: {
                            textContent: "00",
                        },
                    }),
                    createHtmlElement({
                        tag: "img",
                        classes: [ "down", "arrow" ],
                        properties: {
                            src: "./chevron-down.svg",
                        },
                    }),
                ],
            }),
            
            createHtmlElement({
                tag: "div",
                classes: [ "picker", "am-pm-picker" ],
                children: [
                    createHtmlElement({
                        tag: "img",
                        classes: [ "up", "arrow" ],
                        properties: {
                            src: "./chevron-up.svg",
                        },
                    }),
                    createHtmlElement({
                        tag: "div",
                        classes: [ "value", "am-pm" ],
                        properties: {
                            textContent: "AM",
                        },
                    }),
                    createHtmlElement({
                        tag: "img",
                        classes: [ "down", "arrow" ],
                        properties: {
                            src: "./chevron-down.svg",
                        },
                    }),
                ],  
            }),
        ],
    });



    const hourPicker = timePickerElement.querySelector(".hour-picker");
    const minutePicker = timePickerElement.querySelector(".minute-picker");
    const amPmPicker = timePickerElement.querySelector(".am-pm-picker");

    hourPicker.addEventListener("click", clickedPicker);
    minutePicker.addEventListener("click", clickedPicker);
    amPmPicker.addEventListener("click", clickedPicker);

    timePickerElement.addEventListener("keydown", keyPressed);
    timePickerElement.addEventListener("blur", blur);
    timePickerElement.addEventListener("focus", makeActive);

    function blur(e){
        const arrows = document.querySelectorAll(".arrow");
    
        arrows.forEach(arrow => arrow.classList.remove("active"));
        clearFocus();
    
    }
    
    function makeActive(e){
        const arrows = e.currentTarget.querySelectorAll(".arrow");
    
        arrows.forEach(arrow => arrow.classList.add("active"));
    }
    
    function clickedPicker(e){
        clearFocus();
        e.currentTarget.classList.add("focused");
        determineAction(e);
    }
    
    function determineAction(e){
        if (e.currentTarget.classList.contains("hour-picker")){
            if (e.target.classList.contains("up")){
                timePickerObj.incrementHour(1);
            }
            else if (e.target.classList.contains("down")){
                timePickerObj.incrementHour(-1);
            }
            displayHour(e.currentTarget);
        }
    
        else if (e.currentTarget.classList.contains("minute-picker")){
            if (e.target.classList.contains("up")){
                timePickerObj.incrementMinute(1);
            }
            else if (e.target.classList.contains("down")){
                timePickerObj.incrementMinute(-1);
            }
            displayMinute(e.currentTarget);
        }
    
        else if (e.currentTarget.classList.contains("am-pm-picker")){
            if (e.target.classList.contains("up") || e.target.classList.contains("down")){
                timePickerObj.toggleAmPm();
            }
            displayAmPm(e.currentTarget);
        }
    }

    function displayHour(picker){
        picker.querySelector(".value").textContent = timePickerObj.getHour().toString().padStart(2, '0');
    }

    function displayMinute(picker){
        picker.querySelector(".value").textContent = timePickerObj.getMinute().toString().padStart(2, '0');
    }

    function displayAmPm(picker){
        picker.querySelector(".value").textContent = timePickerObj.getAmPm().toString().padStart(2, '0');
    }

    function keyPressed(e){
        let focused = document.querySelector(".time-picker .focused");
    
        if (focused){
            if (focused.classList.contains("hour-picker") || focused.classList.contains("minute-picker")){
                if ( e.key.match(/\d/)){
                    let val = focused.querySelector(".value").textContent;
                    let newInput = 0;
    
                    if (val.charAt(0) === "0"){
                        val = (val + e.key).slice(-2);
                    }
    
                    newInput = Number(val);

                    if ( (focused.classList.contains("hour-picker")) && timePickerObj.isValidHour(newInput) ){
                        timePickerObj.setHour(newInput);
                        displayHour(focused)
                    }
                    else if ( (focused.classList.contains("minute-picker")) && timePickerObj.isValidMinute(newInput) ){
                        timePickerObj.setMinute(newInput);
                        displayMinute(focused);
                    }
                }
                else if ( e.key === "Backspace"){
                    let val = focused.textContent;
    
                    val = Number(val.substring(0, 1).padStart(2, '0'));
    
                    if ( focused.id === "hour-picker" ){
                        timePickerObj.setHour(val);
                        displayHour(focused);
                    }
                    else if ( focused.id === "minute-picker" ){
                        timePickerObj.setMinute(val);
                        displayMinute(focused);
                    }
                }
                else if ( e.key === "Enter"){
                    clearFocus();
                }
            }
        }
    }
    

    function clearFocus(){
        let pickers = document.querySelectorAll(".picker");
        
        pickers.forEach( (picker) => picker.classList.remove("focused"));

    }
    
    return timePickerElement;

};

function createBullshitDiv(){
    const bullshitDiv = createHtmlElement({
        tag: "div",
        properties: {
            textContent: "Bullshit",
        },
    });

    return bullshitDiv;
}
console.log("End of time-picker.js execution");

 


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});