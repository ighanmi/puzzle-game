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
/******/ 	__webpack_require__.p = "/dist/";
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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Puzzle =\n/*#__PURE__*/\nfunction () {\n  function Puzzle(puzzleWrapper, puzzleImage, blockWidth, blockHeight) {\n    _classCallCheck(this, Puzzle);\n\n    this.puzzleWrapper = puzzleWrapper;\n    this.puzzleImage = puzzleImage;\n    this.blockWidth = blockWidth;\n    this.blockHeight = blockHeight;\n    this.backgroundSizeConfig = this.setBackgroundSizeConfig();\n    this.dropTarget = null;\n    this.dragTarget = null; // Bind some methods to avoid issues while accessing to this.someMethod in the drag and drop callbacks\n\n    this.handleDragStart = this.handleDragStart.bind(this);\n    this.handleDragEnter = this.handleDragEnter.bind(this);\n    this.handleDragOver = this.handleDragOver.bind(this);\n    this.handleDragLeave = this.handleDragLeave.bind(this);\n    this.handleDrop = this.handleDrop.bind(this);\n    this.handleDragEnd = this.handleDragEnd.bind(this);\n  }\n\n  _createClass(Puzzle, [{\n    key: \"init\",\n    value: function init() {\n      for (var index = 0; index < 12; index++) {\n        // Insert the puzzle blocks\n        var block = document.createElement(\"div\");\n        var backgroundSize = this.getRandomBackgroundSize();\n        block.setAttribute('class', 'puzzle__block');\n        block.setAttribute('draggable', 'true');\n        block.setAttribute('default-order', index);\n        this.puzzleWrapper.appendChild(block); // Setting the background position randomly\n\n        block.style.backgroundImage = \"url(\".concat(this.puzzleImage, \")\");\n        block.style.backgroundPosition = backgroundSize;\n        block.style.order = index; // Attach drag and drop callbacks\n\n        block.addEventListener('dragstart', this.handleDragStart, false);\n        block.addEventListener('dragenter', this.handleDragEnter, false);\n        block.addEventListener('dragover', this.handleDragOver, false);\n        block.addEventListener('dragleave', this.handleDragLeave, false);\n        block.addEventListener('drop', this.handleDrop, false);\n        block.addEventListener('dragend', this.handleDragEnd, false);\n      }\n    } // Get backgroundPosition randomly from the config array\n\n  }, {\n    key: \"getRandomBackgroundSize\",\n    value: function getRandomBackgroundSize() {\n      return this.backgroundSizeConfig.splice(Math.floor(Math.random() * this.backgroundSizeConfig.length), 1)[0];\n    } // Setting the config array for the background positions\n\n  }, {\n    key: \"setBackgroundSizeConfig\",\n    value: function setBackgroundSizeConfig() {\n      var backgroundSizeConfig = [];\n\n      for (var xAxisIndex = 0; xAxisIndex < 4; xAxisIndex++) {\n        for (var yAxisIndex = 0; yAxisIndex < 3; yAxisIndex++) {\n          backgroundSizeConfig.push(xAxisIndex * this.blockWidth + 'px ' + yAxisIndex * this.blockHeight + 'px ');\n        }\n      }\n\n      return backgroundSizeConfig;\n    }\n  }, {\n    key: \"handleDragStart\",\n    value: function handleDragStart(e) {\n      e.target.style.opacity = '0.4'; // this / e.target is the source node.\n      //Firefox requires drag data to be set (event.dataTransfer.setData(...)) in the dragstart event.\n      // Without setting this data the dragstart event will fire, but the dragend event won't.\n\n      e.dataTransfer.effectAllowed = 'move';\n      e.dataTransfer.setData('text/html', e.target.innerHTML);\n    }\n  }, {\n    key: \"handleDragOver\",\n    value: function handleDragOver(e) {\n      if (e.preventDefault) {\n        e.preventDefault(); // Necessary. Allows us to drop.\n      }\n\n      e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.\n\n      return false;\n    }\n  }, {\n    key: \"handleDragEnter\",\n    value: function handleDragEnter(e) {\n      e.target.classList.add('over');\n    }\n  }, {\n    key: \"handleDragLeave\",\n    value: function handleDragLeave(e) {\n      e.target.classList.remove('over'); // this / e.target is previous target element.\n    }\n  }, {\n    key: \"handleDrop\",\n    value: function handleDrop(e) {\n      this.dropTarget = e.target;\n\n      if (e.stopPropagation) {\n        e.stopPropagation(); // stops the browser from redirecting.\n      }\n\n      return false;\n    }\n  }, {\n    key: \"handleDragEnd\",\n    value: function handleDragEnd(e) {\n      this.dragTarget = e.target;\n      this.swapOder();\n      var blocks = document.querySelectorAll('.puzzle__block');\n      [].forEach.call(blocks, function (col) {\n        col.classList.remove('over');\n        col.style.opacity = '1';\n      });\n    }\n  }, {\n    key: \"swapOder\",\n    value: function swapOder() {\n      var dropTargetOrder = this.dropTarget.style.order;\n      this.dropTarget.style.order = this.dragTarget.style.order;\n      this.dragTarget.style.order = dropTargetOrder;\n    }\n  }]);\n\n  return Puzzle;\n}();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var puzzle = new Puzzle(document.querySelector('#puzzle__wrapper'), 'https://s3-eu-west-1.amazonaws.com/wagawin-ad-platform/media/testmode/banner-landscape.jpg', 200, 150);\n  puzzle.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQdXp6bGUge1xuICAgIGNvbnN0cnVjdG9yKHB1enpsZVdyYXBwZXIsIHB1enpsZUltYWdlLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCkge1xuICAgICAgICB0aGlzLnB1enpsZVdyYXBwZXIgPSBwdXp6bGVXcmFwcGVyO1xuICAgICAgICB0aGlzLnB1enpsZUltYWdlID0gcHV6emxlSW1hZ2U7XG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMuYmxvY2tIZWlnaHQgPSBibG9ja0hlaWdodDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kU2l6ZUNvbmZpZyA9IHRoaXMuc2V0QmFja2dyb3VuZFNpemVDb25maWcoKTtcbiAgICAgICAgdGhpcy5kcm9wVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAvLyBCaW5kIHNvbWUgbWV0aG9kcyB0byBhdm9pZCBpc3N1ZXMgd2hpbGUgYWNjZXNzaW5nIHRvIHRoaXMuc29tZU1ldGhvZCBpbiB0aGUgZHJhZyBhbmQgZHJvcCBjYWxsYmFja3NcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnU3RhcnQgPSB0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZURyYWdFbnRlciA9IHRoaXMuaGFuZGxlRHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ092ZXIgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ0xlYXZlID0gdGhpcy5oYW5kbGVEcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ0VuZCA9IHRoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMjsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSBwdXp6bGUgYmxvY2tzXG4gICAgICAgICAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGV0IGJhY2tncm91bmRTaXplID0gdGhpcy5nZXRSYW5kb21CYWNrZ3JvdW5kU2l6ZSgpO1xuICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdwdXp6bGVfX2Jsb2NrJyk7XG4gICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtb3JkZXInLCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnB1enpsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICAgICAgLy8gU2V0dGluZyB0aGUgYmFja2dyb3VuZCBwb3NpdGlvbiByYW5kb21seVxuICAgICAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMucHV6emxlSW1hZ2V9KWA7XG4gICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBiYWNrZ3JvdW5kU2l6ZTtcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLm9yZGVyID0gaW5kZXg7XG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBkcmFnIGFuZCBkcm9wIGNhbGxiYWNrc1xuICAgICAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5oYW5kbGVEcmFnU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuaGFuZGxlRHJhZ0VudGVyLCBmYWxzZSk7XG4gICAgICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuaGFuZGxlRHJhZ092ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuaGFuZGxlRHJhZ0xlYXZlLCBmYWxzZSk7XG4gICAgICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLCBmYWxzZSk7XG4gICAgICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5oYW5kbGVEcmFnRW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgYmFja2dyb3VuZFBvc2l0aW9uIHJhbmRvbWx5IGZyb20gdGhlIGNvbmZpZyBhcnJheVxuICAgIGdldFJhbmRvbUJhY2tncm91bmRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kU2l6ZUNvbmZpZy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5iYWNrZ3JvdW5kU2l6ZUNvbmZpZy5sZW5ndGgpLCAxKVswXTtcbiAgICB9XG5cbiAgICAvLyBTZXR0aW5nIHRoZSBjb25maWcgYXJyYXkgZm9yIHRoZSBiYWNrZ3JvdW5kIHBvc2l0aW9uc1xuICAgIHNldEJhY2tncm91bmRTaXplQ29uZmlnKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZFNpemVDb25maWcgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeEF4aXNJbmRleCA9IDA7IHhBeGlzSW5kZXggPCA0OyB4QXhpc0luZGV4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHlBeGlzSW5kZXggPSAwOyB5QXhpc0luZGV4IDwgMzsgeUF4aXNJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemVDb25maWcucHVzaCgoeEF4aXNJbmRleCAqIHRoaXMuYmxvY2tXaWR0aCkgKyAncHggJyArICh5QXhpc0luZGV4ICogdGhpcy5ibG9ja0hlaWdodCkgKyAncHggJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhY2tncm91bmRTaXplQ29uZmlnO1xuICAgIH1cblxuICAgIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMC40JzsgIC8vIHRoaXMgLyBlLnRhcmdldCBpcyB0aGUgc291cmNlIG5vZGUuXG4gICAgICAgIC8vRmlyZWZveCByZXF1aXJlcyBkcmFnIGRhdGEgdG8gYmUgc2V0IChldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSguLi4pKSBpbiB0aGUgZHJhZ3N0YXJ0IGV2ZW50LlxuICAgICAgICAvLyBXaXRob3V0IHNldHRpbmcgdGhpcyBkYXRhIHRoZSBkcmFnc3RhcnQgZXZlbnQgd2lsbCBmaXJlLCBidXQgdGhlIGRyYWdlbmQgZXZlbnQgd29uJ3QuXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGUudGFyZ2V0LmlubmVySFRNTCk7XG4gICAgfVxuXG4gICAgaGFuZGxlRHJhZ092ZXIoZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxuICAgICAgICB9XG5cbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJzsgIC8vIFNlZSB0aGUgc2VjdGlvbiBvbiB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdC5cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGxlRHJhZ0VudGVyKGUpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuICAgIH1cblxuICAgIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTsgIC8vIHRoaXMgLyBlLnRhcmdldCBpcyBwcmV2aW91cyB0YXJnZXQgZWxlbWVudC5cbiAgICB9XG5cbiAgICBoYW5kbGVEcm9wKGUpIHtcbiAgICAgICAgdGhpcy5kcm9wVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnRW5kKGUpIHtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHRoaXMuc3dhcE9kZXIoKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wdXp6bGVfX2Jsb2NrJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChibG9ja3MsIGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIGNvbC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgICAgICAgICBjb2wuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3dhcE9kZXIoKSB7XG4gICAgICAgIGxldCBkcm9wVGFyZ2V0T3JkZXIgPSB0aGlzLmRyb3BUYXJnZXQuc3R5bGUub3JkZXI7XG4gICAgICAgIHRoaXMuZHJvcFRhcmdldC5zdHlsZS5vcmRlciA9IHRoaXMuZHJhZ1RhcmdldC5zdHlsZS5vcmRlcjtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0LnN0eWxlLm9yZGVyID0gZHJvcFRhcmdldE9yZGVyO1xuICAgIH1cblxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBwdXp6bGUgPSBuZXcgUHV6emxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdXp6bGVfX3dyYXBwZXInKSxcbiAgICAgICAgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vd2FnYXdpbi1hZC1wbGF0Zm9ybS9tZWRpYS90ZXN0bW9kZS9iYW5uZXItbGFuZHNjYXBlLmpwZycsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwXG4gICAgKTtcbiAgICBwdXp6bGUuaW5pdCgpO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBS0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });