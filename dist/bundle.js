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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Puzzle =\n/*#__PURE__*/\nfunction () {\n  function Puzzle(puzzleWrapper, puzzleImage, blockWidth, blockHeight) {\n    _classCallCheck(this, Puzzle);\n\n    this.puzzleWrapper = puzzleWrapper;\n    this.puzzleImage = puzzleImage;\n    this.blockWidth = blockWidth;\n    this.blockHeight = blockHeight;\n    this.backgroundSizeConfig = this.setBackgroundSizeConfig();\n    this.dropTarget = null;\n    this.dragTarget = null; // Bind some methods to avoid issues while accessing to this.someMethod in the drag and drop callbacks\n\n    this.handleDragStart = this.handleDragStart.bind(this);\n    this.handleDragEnter = this.handleDragEnter.bind(this);\n    this.handleDragOver = this.handleDragOver.bind(this);\n    this.handleDragLeave = this.handleDragLeave.bind(this);\n    this.handleDrop = this.handleDrop.bind(this);\n    this.handleDragEnd = this.handleDragEnd.bind(this);\n  }\n\n  _createClass(Puzzle, [{\n    key: \"insertPuzzleBlock\",\n    value: function insertPuzzleBlock() {\n      for (var index = 0; index < 12; index++) {\n        // Insert the puzzle blocks\n        var block = document.createElement(\"div\");\n        var backgroundSize = this.getRandomBackgroundSize();\n        block.setAttribute('class', 'puzzle__block');\n        block.setAttribute('draggable', 'true');\n        block.setAttribute('default-order', index);\n        this.puzzleWrapper.appendChild(block); // Setting the background position randomly\n\n        block.style.backgroundImage = \"url(\".concat(this.puzzleImage, \")\");\n        block.style.backgroundPosition = backgroundSize;\n        block.style.order = index; // Attach drag and drop callbacks\n\n        block.addEventListener('dragstart', this.handleDragStart, false);\n        block.addEventListener('dragenter', this.handleDragEnter, false);\n        block.addEventListener('dragover', this.handleDragOver, false);\n        block.addEventListener('dragleave', this.handleDragLeave, false);\n        block.addEventListener('drop', this.handleDrop, false);\n        block.addEventListener('dragend', this.handleDragEnd, false);\n      }\n    } // Get backgroundPosition randomly from the config array\n\n  }, {\n    key: \"getRandomBackgroundSize\",\n    value: function getRandomBackgroundSize() {\n      return this.backgroundSizeConfig.splice(Math.floor(Math.random() * this.backgroundSizeConfig.length), 1)[0];\n    } // Setting the config array for the background positions\n\n  }, {\n    key: \"setBackgroundSizeConfig\",\n    value: function setBackgroundSizeConfig() {\n      var backgroundSizeConfig = [];\n\n      for (var xAxisIndex = 0; xAxisIndex < 4; xAxisIndex++) {\n        for (var yAxisIndex = 0; yAxisIndex < 3; yAxisIndex++) {\n          backgroundSizeConfig.push(xAxisIndex * this.blockWidth + 'px ' + yAxisIndex * this.blockHeight + 'px ');\n        }\n      }\n\n      return backgroundSizeConfig;\n    }\n  }, {\n    key: \"handleDragStart\",\n    value: function handleDragStart(e) {\n      e.target.style.opacity = '0.4'; // this / e.target is the source node.\n      //Firefox requires drag data to be set (event.dataTransfer.setData(...)) in the dragstart event.\n      // Without setting this data the dragstart event will fire, but the dragend event won't.\n\n      e.dataTransfer.effectAllowed = 'move';\n      e.dataTransfer.setData('text/html', e.target.innerHTML);\n    }\n  }, {\n    key: \"handleDragOver\",\n    value: function handleDragOver(e) {\n      if (e.preventDefault) {\n        e.preventDefault(); // Necessary. Allows us to drop.\n      }\n\n      e.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.\n\n      return false;\n    }\n  }, {\n    key: \"handleDragEnter\",\n    value: function handleDragEnter(e) {\n      e.target.classList.add('over');\n    }\n  }, {\n    key: \"handleDragLeave\",\n    value: function handleDragLeave(e) {\n      e.target.classList.remove('over'); // this / e.target is previous target element.\n    }\n  }, {\n    key: \"handleDrop\",\n    value: function handleDrop(e) {\n      this.dropTarget = e.target;\n\n      if (e.stopPropagation) {\n        e.stopPropagation(); // stops the browser from redirecting.\n      }\n\n      return false;\n    }\n  }, {\n    key: \"handleDragEnd\",\n    value: function handleDragEnd(e) {\n      this.dragTarget = e.target;\n      this.swapOder();\n      var blocks = document.querySelectorAll('.puzzle__block');\n      [].forEach.call(blocks, function (col) {\n        col.classList.remove('over');\n        col.style.opacity = '1';\n      });\n    }\n  }, {\n    key: \"swapOder\",\n    value: function swapOder() {\n      var dropTargetOrder = this.dropTarget.style.order;\n      this.dropTarget.style.order = this.dragTarget.style.order;\n      this.dragTarget.style.order = dropTargetOrder;\n    }\n  }]);\n\n  return Puzzle;\n}();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var puzzle = new Puzzle(document.querySelector('#puzzle__wrapper'), 'https://s3-eu-west-1.amazonaws.com/wagawin-ad-platform/media/testmode/banner-landscape.jpg', 200, 150);\n  puzzle.insertPuzzleBlock();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQdXp6bGUge1xuICAgIGNvbnN0cnVjdG9yKHB1enpsZVdyYXBwZXIsIHB1enpsZUltYWdlLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCkge1xuICAgICAgICB0aGlzLnB1enpsZVdyYXBwZXIgPSBwdXp6bGVXcmFwcGVyO1xuICAgICAgICB0aGlzLnB1enpsZUltYWdlID0gcHV6emxlSW1hZ2U7XG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IGJsb2NrV2lkdGg7XG4gICAgICAgIHRoaXMuYmxvY2tIZWlnaHQgPSBibG9ja0hlaWdodDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kU2l6ZUNvbmZpZyA9IHRoaXMuc2V0QmFja2dyb3VuZFNpemVDb25maWcoKTtcbiAgICAgICAgdGhpcy5kcm9wVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAvLyBCaW5kIHNvbWUgbWV0aG9kcyB0byBhdm9pZCBpc3N1ZXMgd2hpbGUgYWNjZXNzaW5nIHRvIHRoaXMuc29tZU1ldGhvZCBpbiB0aGUgZHJhZyBhbmQgZHJvcCBjYWxsYmFja3NcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnU3RhcnQgPSB0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZURyYWdFbnRlciA9IHRoaXMuaGFuZGxlRHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ092ZXIgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ0xlYXZlID0gdGhpcy5oYW5kbGVEcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ0VuZCA9IHRoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGluc2VydFB1enpsZUJsb2NrKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTI7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIEluc2VydCB0aGUgcHV6emxlIGJsb2Nrc1xuICAgICAgICAgICAgbGV0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kU2l6ZSA9IHRoaXMuZ2V0UmFuZG9tQmFja2dyb3VuZFNpemUoKTtcbiAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHV6emxlX19ibG9jaycpO1xuICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdkZWZhdWx0LW9yZGVyJywgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5wdXp6bGVXcmFwcGVyLmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIGJhY2tncm91bmQgcG9zaXRpb24gcmFuZG9tbHlcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLnB1enpsZUltYWdlfSlgO1xuICAgICAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYmFja2dyb3VuZFNpemU7XG4gICAgICAgICAgICBibG9jay5zdHlsZS5vcmRlciA9IGluZGV4O1xuXG4gICAgICAgICAgICAvLyBBdHRhY2ggZHJhZyBhbmQgZHJvcCBjYWxsYmFja3NcbiAgICAgICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmhhbmRsZURyYWdFbnRlciwgZmFsc2UpO1xuICAgICAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmhhbmRsZURyYWdPdmVyLCBmYWxzZSk7XG4gICAgICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmhhbmRsZURyYWdMZWF2ZSwgZmFsc2UpO1xuICAgICAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcCwgZmFsc2UpO1xuICAgICAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuaGFuZGxlRHJhZ0VuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IGJhY2tncm91bmRQb3NpdGlvbiByYW5kb21seSBmcm9tIHRoZSBjb25maWcgYXJyYXlcbiAgICBnZXRSYW5kb21CYWNrZ3JvdW5kU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZFNpemVDb25maWcuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYmFja2dyb3VuZFNpemVDb25maWcubGVuZ3RoKSwgMSlbMF07XG4gICAgfVxuXG4gICAgLy8gU2V0dGluZyB0aGUgY29uZmlnIGFycmF5IGZvciB0aGUgYmFja2dyb3VuZCBwb3NpdGlvbnNcbiAgICBzZXRCYWNrZ3JvdW5kU2l6ZUNvbmZpZygpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmRTaXplQ29uZmlnID0gW107XG4gICAgICAgIGZvciAobGV0IHhBeGlzSW5kZXggPSAwOyB4QXhpc0luZGV4IDwgNDsgeEF4aXNJbmRleCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5QXhpc0luZGV4ID0gMDsgeUF4aXNJbmRleCA8IDM7IHlBeGlzSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplQ29uZmlnLnB1c2goKHhBeGlzSW5kZXggKiB0aGlzLmJsb2NrV2lkdGgpICsgJ3B4ICcgKyAoeUF4aXNJbmRleCAqIHRoaXMuYmxvY2tIZWlnaHQpICsgJ3B4ICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWNrZ3JvdW5kU2l6ZUNvbmZpZztcbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzAuNCc7ICAvLyB0aGlzIC8gZS50YXJnZXQgaXMgdGhlIHNvdXJjZSBub2RlLlxuICAgICAgICAvL0ZpcmVmb3ggcmVxdWlyZXMgZHJhZyBkYXRhIHRvIGJlIHNldCAoZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoLi4uKSkgaW4gdGhlIGRyYWdzdGFydCBldmVudC5cbiAgICAgICAgLy8gV2l0aG91dCBzZXR0aW5nIHRoaXMgZGF0YSB0aGUgZHJhZ3N0YXJ0IGV2ZW50IHdpbGwgZmlyZSwgYnV0IHRoZSBkcmFnZW5kIGV2ZW50IHdvbid0LlxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCBlLnRhcmdldC5pbm5lckhUTUwpO1xuICAgIH1cblxuICAgIGhhbmRsZURyYWdPdmVyKGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgfVxuXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7ICAvLyBTZWUgdGhlIHNlY3Rpb24gb24gdGhlIERhdGFUcmFuc2ZlciBvYmplY3QuXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnTGVhdmUoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7ICAvLyB0aGlzIC8gZS50YXJnZXQgaXMgcHJldmlvdXMgdGFyZ2V0IGVsZW1lbnQuXG4gICAgfVxuXG4gICAgaGFuZGxlRHJvcChlKSB7XG4gICAgICAgIHRoaXMuZHJvcFRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3BzIHRoZSBicm93c2VyIGZyb20gcmVkaXJlY3RpbmcuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGxlRHJhZ0VuZChlKSB7XG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB0aGlzLnN3YXBPZGVyKCk7XG4gICAgICAgIGxldCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHV6emxlX19ibG9jaycpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYmxvY2tzLCBmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICBjb2wuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgICAgICAgICAgY29sLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN3YXBPZGVyKCkge1xuICAgICAgICBsZXQgZHJvcFRhcmdldE9yZGVyID0gdGhpcy5kcm9wVGFyZ2V0LnN0eWxlLm9yZGVyO1xuICAgICAgICB0aGlzLmRyb3BUYXJnZXQuc3R5bGUub3JkZXIgPSB0aGlzLmRyYWdUYXJnZXQuc3R5bGUub3JkZXI7XG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldC5zdHlsZS5vcmRlciA9IGRyb3BUYXJnZXRPcmRlcjtcbiAgICB9XG5cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgcHV6emxlID0gbmV3IFB1enpsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHV6emxlX193cmFwcGVyJyksXG4gICAgICAgICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3dhZ2F3aW4tYWQtcGxhdGZvcm0vbWVkaWEvdGVzdG1vZGUvYmFubmVyLWxhbmRzY2FwZS5qcGcnLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MFxuICAgICk7XG4gICAgcHV6emxlLmluc2VydFB1enpsZUJsb2NrKCk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFLQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });