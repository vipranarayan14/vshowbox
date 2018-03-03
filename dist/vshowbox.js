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

var _slide = __webpack_require__(2);

var closeModal = exports.closeModal = function closeModal(globals) {
  return function () {

    document.documentElement.style.overflow = globals.docOverflow;
    document.body.style.overflow = globals.bodyOverflow;

    globals.vsbModal.classList.remove('open');
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

  globals.docOverflow = document.documentElement.style.overflow;
  globals.bodyOverflow = document.body.style.overflow;

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  globals.vsbModal.classList.add('open');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vShowBox = undefined;

var _navigation = __webpack_require__(0);

var _events = __webpack_require__(3);

var _globals = __webpack_require__(4);

var _previews = __webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

var vShowBox = exports.vShowBox = function vShowBox(config) {

  var vsbPreviewsConatiner = (0, _previews.initPreviews)(config);

  var globals = (0, _globals.initGlobals)(vsbPreviewsConatiner);

  globals.config = config;

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setSlideURLandTitle = exports.setSlideURLandTitle = function setSlideURLandTitle(globals) {

  var slideUrl = globals.config.slides[globals.slideIndex].content;
  var slideCaption = globals.config.slides[globals.slideIndex].caption;

  globals.vsbStage.style.backgroundImage = "url(" + slideUrl;
  globals.vsbCaption.innerText = slideCaption;
};

var setSlideCount = exports.setSlideCount = function setSlideCount(globals) {

  globals.vsbSlideCount.innerText = globals.slideIndex + 1 + " / " + globals.slidesLength;
};

/***/ }),
/* 3 */
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
    'targetClass=vsb-next': _navigation.nextSlide,
    'targetClass=vsb-prev': _navigation.prevSlide

  }[trigger];

  if (navigation) {

    navigation(globals)();
  } else {

    elseCallback();
  }
};

var initEventListeners = exports.initEventListeners = function initEventListeners(globals) {

  globals.vsbPreviews.forEach(function (element, i) {

    element.addEventListener('click', function () {

      globals.slideIndex = i;

      (0, _navigation.showSlide)(globals)();
    });
  });

  globals.vsbModal.addEventListener('click', function (e) {

    var targetClass = e.target.classList;

    triggerNavigation('targetClass=' + targetClass[0], globals, (0, _navigation.closeModal)(globals));
  });

  document.addEventListener('keydown', function (e) {

    if (globals.vsbModal.classList.contains('open')) {

      triggerNavigation('keyCode=' + e.keyCode, globals);
    }
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGlobals = undefined;

var _modal = __webpack_require__(5);

var initGlobals = exports.initGlobals = function initGlobals(vsbPreviewsContainer) {

  var vsbPreviews = vsbPreviewsContainer.querySelectorAll('.vsb-preview');

  var slidesLength = vsbPreviews.length;
  var slideLastIndex = vsbPreviews.length - 1;

  var modalComponents = (0, _modal.initModal)(vsbPreviewsContainer);

  return Object.assign({}, modalComponents, {

    slideIndex: 0,
    slideLastIndex: slideLastIndex,
    slidesLength: slidesLength,
    vsbPreviews: vsbPreviews,
    vsbPreviewsContainer: vsbPreviewsContainer

  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initModal = exports.initModal = function initModal(vsbPreviewsContainer) {

  vsbPreviewsContainer.insertAdjacentHTML('afterend', '<section class="vsb-modal">\n\n      <span class="vsb-slide-count btn"></span>\n      <span class="vsb-close btn">&times;</span>\n\n      <div class="vsb-stage">\n\n        <span class="vsb-prev btn">&#10094;</span>\n        <span class="vsb-next btn">&#10095;</span>\n\n      </div>\n\n      <div class="vsb-caption"></div>\n\n    </section>');

  var vsbModal = document.querySelector('.vsb-modal');
  var vsbStage = vsbModal.querySelector('.vsb-stage');
  var vsbCaption = vsbModal.querySelector('.vsb-caption');
  var vsbSlideCount = document.querySelector('.vsb-slide-count');

  return {
    vsbCaption: vsbCaption,
    vsbModal: vsbModal,
    vsbSlideCount: vsbSlideCount,
    vsbStage: vsbStage
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPreview = function getPreview(slide) {
  return slide.preview ? slide.preview : slide.content;
};

var makePreviews = function makePreviews(config) {

  var vsbPreviews = '';

  config.slides.forEach(function (slide) {

    var preview = getPreview(slide);

    vsbPreviews += '<div class="vsb-preview" \n            style="background-image: url(\'' + preview + '\')" \n            title="' + slide.caption + '">\n      </div>';
  });

  return vsbPreviews;
};

var makePreviewsContainer = function makePreviewsContainer(vsbPreviews) {
  return '<div class="vsb-previews">' + vsbPreviews + '</div>';
};

var initPreviews = exports.initPreviews = function initPreviews(config) {

  var vsbPreviews = makePreviews(config);

  var vsbPreviewsContainer = makePreviewsContainer(vsbPreviews);

  config.container.insertAdjacentHTML('afterbegin', vsbPreviewsContainer);

  return document.querySelector('.vsb-previews');
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