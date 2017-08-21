(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-redux"), require("redux-rails"), require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react-redux", "redux-rails", "react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["resource-hoc"] = factory(require("react-redux"), require("redux-rails"), require("react"), require("prop-types"));
	else
		root["resource-hoc"] = factory(root["react-redux"], root["redux-rails"], root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.resourceProps = exports.resource = undefined;\n\nvar _resource = __webpack_require__(2);\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nvar _resourceProps = __webpack_require__(8);\n\nvar _resourceProps2 = _interopRequireDefault(_resourceProps);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.resource = _resource2.default;\nexports.resourceProps = _resourceProps2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzb3VyY2UgICAgICBmcm9tICcuL3Jlc291cmNlJ1xuaW1wb3J0IHJlc291cmNlUHJvcHMgZnJvbSAnLi9yZXNvdXJjZVByb3BzJ1xuXG5leHBvcnQge1xuICByZXNvdXJjZSxcbiAgcmVzb3VyY2VQcm9wc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _resource = __webpack_require__(3);\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _resource2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2UvaW5kZXguanM/MzhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzb3VyY2UgZnJvbSAnLi9yZXNvdXJjZSdcblxuZXhwb3J0IGRlZmF1bHQgcmVzb3VyY2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVzb3VyY2UvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRedux = __webpack_require__(4);\n\nvar _reduxRails = __webpack_require__(5);\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _scopeRailsActions = __webpack_require__(7);\n\nvar _scopeRailsActions2 = _interopRequireDefault(_scopeRailsActions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar getController = function getController(resourceName, defaultController, ownProps) {\n  if (!defaultController) {\n    return resourceName;\n  }\n  if (typeof defaultController === 'function') {\n    return defaultController(ownProps);\n  }\n  return defaultController;\n};\n\n/**\n * Higher order component meant to wrap a react component.\n * Passes down a single prop which name spaces the corresponding state\n * and scoped actions.\n *\n * @param {string} resourceName - The key of the corresponding resource in the redux state.\n * @param {object} options - Configs, all are optional\n */\nfunction resource(resourceName) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      autoload = _ref.autoload,\n      initialQueryParams = _ref.queryParams,\n      onlyActions = _ref.onlyActions,\n      defaultPropWrapper = _ref.propWrapper,\n      defaultController = _ref.controller;\n\n  var mapStateToProps = function mapStateToProps(state) {\n    var resourceData = state.resources[resourceName];\n    if (!resourceData) {\n      throw new Error(resourceName + ' is not registered in rails-redux resource config');\n    }\n\n    if (resourceData.models) {\n      resourceData.models = resourceData.models.map(function (_ref2) {\n        var attributes = _ref2.attributes,\n            meta = _objectWithoutProperties(_ref2, ['attributes']);\n\n        return _extends({}, meta, attributes);\n      });\n    }\n    return resourceData;\n  };\n\n  var mapDispatchToProps = _reduxRails.railsActions;\n\n  var mergeProps = function mergeProps() {\n    var stateProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var dispatchProps = arguments[1];\n    var ownProps = arguments[2];\n\n    var propWrapper = defaultPropWrapper || resourceName;\n    var controller = getController(resourceName, defaultController, ownProps);\n    var scopedActions = (0, _scopeRailsActions2.default)({ stateProps: stateProps, dispatchProps: dispatchProps, resource: resourceName, controller: controller });\n\n    return _extends(_defineProperty({}, propWrapper, _extends({}, stateProps, scopedActions)), ownProps);\n  };\n\n  return function (WrappedComponent) {\n    var Resource = function (_Component) {\n      _inherits(Resource, _Component);\n\n      function Resource() {\n        _classCallCheck(this, Resource);\n\n        return _possibleConstructorReturn(this, (Resource.__proto__ || Object.getPrototypeOf(Resource)).apply(this, arguments));\n      }\n\n      _createClass(Resource, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n          var _this2 = this;\n\n          if (autoload) {\n            // Defer execution to allow component to be rendered while action is dispatched\n            setTimeout(function () {\n              _this2.props[resourceName].index(initialQueryParams);\n            }, 0);\n          }\n        }\n      }, {\n        key: 'render',\n        value: function render() {\n          return _react2.default.createElement(WrappedComponent, this.props);\n        }\n      }]);\n\n      return Resource;\n    }(_react.Component);\n\n    var ConnectedComponent = (0, _reactRedux.connect)(onlyActions ? null : mapStateToProps, mapDispatchToProps, mergeProps)(Resource);\n\n    ConnectedComponent.WrappedComponent = WrappedComponent.WrappedComponent ? WrappedComponent.WrappedComponent : WrappedComponent;\n\n    return ConnectedComponent;\n  };\n}\n\nexports.default = resource;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2UvcmVzb3VyY2UuanM/NWQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gICAgICBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHJhaWxzQWN0aW9ucyB9IGZyb20gJ3JlZHV4LXJhaWxzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNjb3BlUmFpbHNBY3Rpb25zIGZyb20gJy4vc2NvcGVSYWlsc0FjdGlvbnMnXG5cbmNvbnN0IGdldENvbnRyb2xsZXIgPSAocmVzb3VyY2VOYW1lLCBkZWZhdWx0Q29udHJvbGxlciwgb3duUHJvcHMpID0+IHtcbiAgaWYgKCFkZWZhdWx0Q29udHJvbGxlcikgeyByZXR1cm4gcmVzb3VyY2VOYW1lIH1cbiAgaWYgKHR5cGVvZiBkZWZhdWx0Q29udHJvbGxlciA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZGVmYXVsdENvbnRyb2xsZXIob3duUHJvcHMpIH1cbiAgcmV0dXJuIGRlZmF1bHRDb250cm9sbGVyXG59XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIGNvbXBvbmVudCBtZWFudCB0byB3cmFwIGEgcmVhY3QgY29tcG9uZW50LlxuICogUGFzc2VzIGRvd24gYSBzaW5nbGUgcHJvcCB3aGljaCBuYW1lIHNwYWNlcyB0aGUgY29ycmVzcG9uZGluZyBzdGF0ZVxuICogYW5kIHNjb3BlZCBhY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZU5hbWUgLSBUaGUga2V5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHJlc291cmNlIGluIHRoZSByZWR1eCBzdGF0ZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlncywgYWxsIGFyZSBvcHRpb25hbFxuICovXG5mdW5jdGlvbiByZXNvdXJjZSAocmVzb3VyY2VOYW1lLCB7XG4gIGF1dG9sb2FkLFxuICBxdWVyeVBhcmFtczogaW5pdGlhbFF1ZXJ5UGFyYW1zLFxuICBvbmx5QWN0aW9ucyxcbiAgcHJvcFdyYXBwZXI6IGRlZmF1bHRQcm9wV3JhcHBlcixcbiAgY29udHJvbGxlcjogZGVmYXVsdENvbnRyb2xsZXJcbn0gPSB7fSkge1xuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCByZXNvdXJjZURhdGEgPSBzdGF0ZS5yZXNvdXJjZXNbcmVzb3VyY2VOYW1lXVxuICAgIGlmICghcmVzb3VyY2VEYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzb3VyY2VOYW1lfSBpcyBub3QgcmVnaXN0ZXJlZCBpbiByYWlscy1yZWR1eCByZXNvdXJjZSBjb25maWdgKVxuICAgIH1cblxuICAgIGlmIChyZXNvdXJjZURhdGEubW9kZWxzKSB7XG4gICAgICByZXNvdXJjZURhdGEubW9kZWxzID0gcmVzb3VyY2VEYXRhLm1vZGVscy5tYXAoKHthdHRyaWJ1dGVzLCAuLi5tZXRhfSkgPT4gKHsgLi4ubWV0YSwgLi4uYXR0cmlidXRlcyB9KSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlRGF0YVxuICB9XG5cbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gcmFpbHNBY3Rpb25zXG5cbiAgY29uc3QgbWVyZ2VQcm9wcyA9IChzdGF0ZVByb3BzID0ge30sIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgcHJvcFdyYXBwZXIgPSBkZWZhdWx0UHJvcFdyYXBwZXIgfHwgcmVzb3VyY2VOYW1lXG4gICAgY29uc3QgY29udHJvbGxlciA9IGdldENvbnRyb2xsZXIocmVzb3VyY2VOYW1lLCBkZWZhdWx0Q29udHJvbGxlciwgb3duUHJvcHMpXG4gICAgY29uc3Qgc2NvcGVkQWN0aW9ucyA9IHNjb3BlUmFpbHNBY3Rpb25zKHtzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCByZXNvdXJjZTogcmVzb3VyY2VOYW1lLCBjb250cm9sbGVyfSlcblxuICAgIHJldHVybiB7XG4gICAgICBbcHJvcFdyYXBwZXJdOiB7XG4gICAgICAgIC4uLnN0YXRlUHJvcHMsXG4gICAgICAgIC4uLnNjb3BlZEFjdGlvbnNcbiAgICAgIH0sXG4gICAgICAuLi5vd25Qcm9wc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYoYXV0b2xvYWQpIHtcbiAgICAgICAgICAvLyBEZWZlciBleGVjdXRpb24gdG8gYWxsb3cgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkIHdoaWxlIGFjdGlvbiBpcyBkaXNwYXRjaGVkXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW3Jlc291cmNlTmFtZV0uaW5kZXgoaW5pdGlhbFF1ZXJ5UGFyYW1zKVxuICAgICAgICAgIH0sIDApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50ID0gY29ubmVjdChcbiAgICAgIG9ubHlBY3Rpb25zID8gbnVsbCA6IG1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIG1lcmdlUHJvcHNcbiAgICApKFJlc291cmNlKVxuXG4gICAgQ29ubmVjdGVkQ29tcG9uZW50LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50LldyYXBwZWRDb21wb25lbnRcbiAgICAgID8gV3JhcHBlZENvbXBvbmVudC5XcmFwcGVkQ29tcG9uZW50XG4gICAgICA6IFdyYXBwZWRDb21wb25lbnRcblxuICAgIHJldHVybiBDb25uZWN0ZWRDb21wb25lbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvdXJjZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZXNvdXJjZS9yZXNvdXJjZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_4__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCI/Y2E2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_5__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXJhaWxzXCI/MzNlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtcmFpbHNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_6__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar index = function index(_ref) {\n  var dispatchProps = _ref.dispatchProps,\n      baseScoping = _ref.baseScoping;\n  return function (queryParams) {\n    return dispatchProps.index(_extends({}, baseScoping, {\n      queryParams: queryParams\n    }));\n  };\n};\n\nvar show = function show(_ref2) {\n  var dispatchProps = _ref2.dispatchProps,\n      baseScoping = _ref2.baseScoping;\n  return function (id, queryParams) {\n    return dispatchProps.show(_extends({}, baseScoping, {\n      id: id,\n      queryParams: queryParams\n    }));\n  };\n};\n\nvar update = function update(_ref3) {\n  var dispatchProps = _ref3.dispatchProps,\n      baseScoping = _ref3.baseScoping;\n  return function (id, attributes) {\n    return dispatchProps.update(_extends({}, baseScoping, {\n      id: id,\n      attributes: attributes\n    }));\n  };\n};\n\nvar create = function create(_ref4) {\n  var dispatchProps = _ref4.dispatchProps,\n      baseScoping = _ref4.baseScoping;\n  return function (attributes) {\n    return dispatchProps.create(_extends({}, baseScoping, {\n      attributes: attributes\n    }));\n  };\n};\n\nvar destroy = function destroy(_ref5) {\n  var dispatchProps = _ref5.dispatchProps,\n      baseScoping = _ref5.baseScoping;\n  return function (id) {\n    return dispatchProps.destroy(_extends({}, baseScoping, {\n      id: id\n    }));\n  };\n};\n\nvar updateFilters = function updateFilters(_ref6) {\n  var _ref6$stateProps = _ref6.stateProps,\n      stateProps = _ref6$stateProps === undefined ? {} : _ref6$stateProps,\n      dispatchProps = _ref6.dispatchProps,\n      baseScoping = _ref6.baseScoping;\n  return function (queryParams) {\n    var lastQueryParam = stateProps.queryParams || {};\n\n    return dispatchProps.index(_extends({}, baseScoping, {\n      queryParams: _extends({}, lastQueryParam, queryParams)\n    }));\n  };\n};\n\nvar scopeRailsActions = function scopeRailsActions(_ref7) {\n  var stateProps = _ref7.stateProps,\n      dispatchProps = _ref7.dispatchProps,\n      resource = _ref7.resource,\n      controller = _ref7.controller;\n\n  var baseScoping = {\n    resource: resource,\n    controller: controller\n  };\n\n  return {\n    index: index({ baseScoping: baseScoping, dispatchProps: dispatchProps }),\n    show: show({ baseScoping: baseScoping, dispatchProps: dispatchProps }),\n    create: create({ baseScoping: baseScoping, dispatchProps: dispatchProps }),\n    update: update({ baseScoping: baseScoping, dispatchProps: dispatchProps }),\n    destroy: destroy({ baseScoping: baseScoping, dispatchProps: dispatchProps }),\n    updateFilters: updateFilters({ stateProps: stateProps, baseScoping: baseScoping, dispatchProps: dispatchProps })\n  };\n};\n\nexports.default = scopeRailsActions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2Uvc2NvcGVSYWlsc0FjdGlvbnMuanM/ZjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmRleCA9ICAoeyBkaXNwYXRjaFByb3BzLCBiYXNlU2NvcGluZyB9KSA9PiBxdWVyeVBhcmFtcyA9PiAoXG4gIGRpc3BhdGNoUHJvcHMuaW5kZXgoe1xuICAgIC4uLmJhc2VTY29waW5nLFxuICAgIHF1ZXJ5UGFyYW1zXG4gIH0pXG4pXG5cbmNvbnN0IHNob3cgPSAoeyBkaXNwYXRjaFByb3BzLCBiYXNlU2NvcGluZyB9KSA9PiAoaWQsIHF1ZXJ5UGFyYW1zKSA9PiAoXG4gIGRpc3BhdGNoUHJvcHMuc2hvdyh7XG4gICAgLi4uYmFzZVNjb3BpbmcsXG4gICAgaWQsXG4gICAgcXVlcnlQYXJhbXNcbiAgfSlcbilcblxuY29uc3QgdXBkYXRlID0gKHsgZGlzcGF0Y2hQcm9wcywgYmFzZVNjb3BpbmcgfSkgPT4gKGlkLCBhdHRyaWJ1dGVzKSA9PiAoXG4gIGRpc3BhdGNoUHJvcHMudXBkYXRlKHtcbiAgICAuLi5iYXNlU2NvcGluZyxcbiAgICBpZCxcbiAgICBhdHRyaWJ1dGVzXG4gIH0pXG4pXG5cbmNvbnN0IGNyZWF0ZSA9ICh7IGRpc3BhdGNoUHJvcHMsIGJhc2VTY29waW5nIH0pID0+IGF0dHJpYnV0ZXMgPT4gKFxuICBkaXNwYXRjaFByb3BzLmNyZWF0ZSh7XG4gICAgLi4uYmFzZVNjb3BpbmcsXG4gICAgYXR0cmlidXRlc1xuICB9KVxuKVxuXG5jb25zdCBkZXN0cm95ID0gKHsgZGlzcGF0Y2hQcm9wcywgYmFzZVNjb3BpbmcgfSkgPT4gaWQgPT4gKFxuICBkaXNwYXRjaFByb3BzLmRlc3Ryb3koe1xuICAgIC4uLmJhc2VTY29waW5nLFxuICAgIGlkXG4gIH0pXG4pXG5cbmNvbnN0IHVwZGF0ZUZpbHRlcnMgPSAoeyBzdGF0ZVByb3BzID0ge30sIGRpc3BhdGNoUHJvcHMsIGJhc2VTY29waW5nIH0pID0+IChxdWVyeVBhcmFtcykgPT4ge1xuICBjb25zdCBsYXN0UXVlcnlQYXJhbSA9IHN0YXRlUHJvcHMucXVlcnlQYXJhbXMgfHwge31cblxuICByZXR1cm4gZGlzcGF0Y2hQcm9wcy5pbmRleCh7XG4gICAgLi4uYmFzZVNjb3BpbmcsXG4gICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgIC4uLmxhc3RRdWVyeVBhcmFtLFxuICAgICAgLi4ucXVlcnlQYXJhbXNcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHNjb3BlUmFpbHNBY3Rpb25zID0gKHsgc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgcmVzb3VyY2UsIGNvbnRyb2xsZXIgfSkgPT4ge1xuICBjb25zdCBiYXNlU2NvcGluZyA9IHtcbiAgICByZXNvdXJjZSxcbiAgICBjb250cm9sbGVyXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluZGV4OiBpbmRleCh7IGJhc2VTY29waW5nLCBkaXNwYXRjaFByb3BzIH0pLFxuICAgIHNob3c6IHNob3coeyBiYXNlU2NvcGluZywgZGlzcGF0Y2hQcm9wcyB9KSxcbiAgICBjcmVhdGU6IGNyZWF0ZSh7IGJhc2VTY29waW5nLCBkaXNwYXRjaFByb3BzIH0pLFxuICAgIHVwZGF0ZTogdXBkYXRlKHsgYmFzZVNjb3BpbmcsIGRpc3BhdGNoUHJvcHMgfSksXG4gICAgZGVzdHJveTogZGVzdHJveSh7IGJhc2VTY29waW5nLCBkaXNwYXRjaFByb3BzIH0pLFxuICAgIHVwZGF0ZUZpbHRlcnM6IHVwZGF0ZUZpbHRlcnMoeyBzdGF0ZVByb3BzLCBiYXNlU2NvcGluZywgZGlzcGF0Y2hQcm9wcyB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjb3BlUmFpbHNBY3Rpb25zXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Jlc291cmNlL3Njb3BlUmFpbHNBY3Rpb25zLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUZBO0FBREE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQURBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFEQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFGQTtBQURBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUZBO0FBREE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQU9BO0FBVkE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _propTypes = __webpack_require__(9);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar actionProps = {\n  index: _propTypes2.default.func.isRequired,\n  show: _propTypes2.default.func.isRequired,\n  create: _propTypes2.default.func.isRequired,\n  update: _propTypes2.default.func.isRequired,\n  destroy: _propTypes2.default.func.isRequired,\n  updateFilters: _propTypes2.default.func.isRequired\n};\n\nvar baseProps = _extends({}, actionProps, {\n  loading: _propTypes2.default.bool.isRequired,\n  loadingError: _propTypes2.default.string\n});\n\nvar member = _propTypes2.default.shape(_extends({}, baseProps, {\n  id: _propTypes2.default.number,\n  attributes: _propTypes2.default.object\n}));\n\nvar collection = _propTypes2.default.shape(_extends({}, baseProps, {\n  models: _propTypes2.default.arrayOf(member)\n}));\n\nexports.default = {\n  member: member,\n  collection: collection\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2VQcm9wcy5qcz8wZDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgYWN0aW9uUHJvcHMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjcmVhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVzdHJveTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXBkYXRlRmlsdGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5jb25zdCBiYXNlUHJvcHMgPSB7XG4gIC4uLmFjdGlvblByb3BzLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsb2FkaW5nRXJyb3I6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgbWVtYmVyID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgLi4uYmFzZVByb3BzLFxuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgYXR0cmlidXRlczogUHJvcFR5cGVzLm9iamVjdFxufSlcblxuY29uc3QgY29sbGVjdGlvbiA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIC4uLmJhc2VQcm9wcyxcbiAgbW9kZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihtZW1iZXIpXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1lbWJlcixcbiAgY29sbGVjdGlvblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZXNvdXJjZVByb3BzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_9__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIj9iNjVhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);
});
