window["vShowBox"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSlide = exports.prevSlide = exports.nextSlide = exports.closeModal = undefined;

var _slide = __webpack_require__(3);

var closeModal = exports.closeModal = function closeModal(globals) {
  return function () {

    document.documentElement.style.overflow = 'initial';
    document.body.style.overflow = 'initial';
    globals.SBModal.classList.remove('open');
  };
};

var nextSlide = exports.nextSlide = function nextSlide(globals) {
  return function () {

    globals.slideIndex += 1;

    if (globals.slideIndex > globals.slideLastIndex) {

      globals.slideIndex = 0;
    }

    showSlide(globals)();
  };
};

var prevSlide = exports.prevSlide = function prevSlide(globals) {
  return function () {

    globals.slideIndex -= 1;

    if (globals.slideIndex < 1) {

      globals.slideIndex = globals.slideLastIndex;
    }

    showSlide(globals)();
  };
};

var showSlide = exports.showSlide = function showSlide(globals) {
  return function () {
    var slideNo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


    if (slideNo) {

      globals.slideIndex = slideNo - 1;
    }

    (0, _slide.setSlideURLandTitle)(globals);
    (0, _slide.setSlideCount)(globals);

    openModal(globals);
  };
};

var openModal = function openModal(globals) {

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  globals.SBModal.classList.add('open');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vShowBox = undefined;

var _init = __webpack_require__(2);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

var vShowBox = exports.vShowBox = {
  init: _init.initvShowBox
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initvShowBox = undefined;

var _navigation = __webpack_require__(0);

var _events = __webpack_require__(4);

var _globals = __webpack_require__(5);

var initvShowBox = exports.initvShowBox = function initvShowBox() {

  var globals = (0, _globals.initGlobals)();

  (0, _events.initEventListeners)(globals);

  return {
    nextSlide: (0, _navigation.nextSlide)(globals),
    prevSlide: (0, _navigation.prevSlide)(globals),
    showSlide: (0, _navigation.showSlide)(globals),
    slideIndex: globals.slideIndex,
    slidesLength: globals.slidesLength
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setSlideURLandTitle = exports.setSlideURLandTitle = function setSlideURLandTitle(globals) {

  globals.slideURL = globals.SBPreviews[globals.slideIndex].style.backgroundImage;
  globals.slideTitle = globals.SBPreviews[globals.slideIndex].getAttribute('title');

  globals.SBStage.style.backgroundImage = globals.slideURL;
  globals.SBCaption.innerText = globals.slideTitle;
};

var setSlideCount = exports.setSlideCount = function setSlideCount(globals) {

  globals.SBSlideCount.innerText = globals.slideIndex + 1 + ' / ' + globals.slidesLength;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initEventListeners = undefined;

var _navigation = __webpack_require__(0);

var triggerNavigation = function triggerNavigation(trigger, globals) {
  var elseCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};


  var navigation = {

    'keyCode=27': _navigation.closeModal,
    'keyCode=37': _navigation.prevSlide,
    'keyCode=39': _navigation.nextSlide,
    'targetClass=sb-next': _navigation.nextSlide,
    'targetClass=sb-prev': _navigation.prevSlide

  }[trigger];

  if (navigation) {

    navigation(globals)();
  } else {

    elseCallback();
  }
};

var initEventListeners = exports.initEventListeners = function initEventListeners(globals) {

  globals.SBPreviews.forEach(function (element, i) {

    element.addEventListener('click', function () {

      globals.slideIndex = i;

      (0, _navigation.showSlide)(globals)();
    });
  });

  globals.SBModal.addEventListener('click', function (e) {

    var targetClass = e.target.classList;

    triggerNavigation('targetClass=' + targetClass[0], globals, (0, _navigation.closeModal)(globals));
  });

  document.addEventListener('keydown', function (e) {

    if (globals.SBModal.classList.contains('open')) {

      triggerNavigation('keyCode=' + e.keyCode, globals);
    }
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGlobals = undefined;

var _modal = __webpack_require__(6);

var initGlobals = exports.initGlobals = function initGlobals() {

  var SBPreviewsContainer = document.querySelector('.sb-previews');
  var SBPreviews = SBPreviewsContainer.querySelectorAll('.sb-preview');

  var slidesLength = SBPreviews.length;
  var slideLastIndex = SBPreviews.length - 1;

  var modalComponents = (0, _modal.initModal)(SBPreviewsContainer);

  return Object.assign({}, modalComponents, {
    SBPreviews: SBPreviews,
    SBPreviewsContainer: SBPreviewsContainer,
    slideIndex: 0,
    slideLastIndex: slideLastIndex,
    slideTitle: '',
    slideUrl: '',
    slidesLength: slidesLength
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initModal = exports.initModal = function initModal(SBPreviewsContainer) {

  SBPreviewsContainer.insertAdjacentHTML('afterend', '<section class="sb-modal">\n\n      <span class="sb-slide-count btn"></span>\n      <span class="sb-close btn">&times;</span>\n\n      <div class="sb-stage">\n\n        <span class="sb-prev btn">&#10094;</span>\n        <span class="sb-next btn">&#10095;</span>\n\n      </div>\n\n      <div class="sb-caption"></div>\n\n    </section>');

  var SBModal = document.querySelector('.sb-modal');
  var SBStage = SBModal.querySelector('.sb-stage');
  var SBCaption = SBModal.querySelector('.sb-caption');
  var SBSlideCount = document.querySelector('.sb-slide-count');

  return {
    SBCaption: SBCaption,
    SBModal: SBModal,
    SBSlideCount: SBSlideCount,
    SBStage: SBStage
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])["vShowBox"];