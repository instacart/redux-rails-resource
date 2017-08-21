(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react-redux"), require("redux-rails"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react-redux", "redux-rails", "react"], factory);
	else if(typeof exports === 'object')
		exports["resource-hoc"] = factory(require("prop-types"), require("react-redux"), require("redux-rails"), require("react"));
	else
		root["resource-hoc"] = factory(root["prop-types"], root["react-redux"], root["redux-rails"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.resourceProps = exports.resource = undefined;\n\nvar _resource = __webpack_require__(3);\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nvar _resourceProps = __webpack_require__(8);\n\nvar _resourceProps2 = _interopRequireDefault(_resourceProps);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.resource = _resource2.default;\nexports.resourceProps = _resourceProps2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzb3VyY2UgICAgICBmcm9tICcuL3Jlc291cmNlJ1xuaW1wb3J0IHJlc291cmNlUHJvcHMgZnJvbSAnLi9yZXNvdXJjZVByb3BzJ1xuXG5leHBvcnQge1xuICByZXNvdXJjZSxcbiAgcmVzb3VyY2VQcm9wc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIj9iNjVhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _resource = __webpack_require__(4);\n\nvar _resource2 = _interopRequireDefault(_resource);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _resource2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2UvaW5kZXguanM/MzhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzb3VyY2UgZnJvbSAnLi9yZXNvdXJjZSdcblxuZXhwb3J0IGRlZmF1bHQgcmVzb3VyY2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVzb3VyY2UvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRedux = __webpack_require__(5);\n\nvar _reduxRails = __webpack_require__(6);\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar getScopedActions = function getScopedActions(stateProps, dispatchProps, resourceName, controller) {\n  var baseScoping = {\n    resource: resourceName,\n    controller: controller\n  };\n\n  var update = function update(id, attributes) {\n    return dispatchProps.update(_extends({}, baseScoping, {\n      id: id,\n      attributes: attributes\n    }));\n  };\n\n  var create = function create(attributes) {\n    return dispatchProps.create(_extends({}, baseScoping, {\n      attributes: attributes\n    }));\n  };\n\n  var destroy = function destroy(id) {\n    return dispatchProps.destroy(_extends({}, baseScoping, {\n      id: id\n    }));\n  };\n\n  var index = function index(queryParams) {\n    return dispatchProps.index(_extends({}, baseScoping, {\n      queryParams: queryParams\n    }));\n  };\n\n  var show = function show(id, queryParams) {\n    return dispatchProps.show(_extends({}, baseScoping, {\n      id: id,\n      queryParams: queryParams\n    }));\n  };\n\n  var lastQueryParam = stateProps.queryParams || {};\n  var updateFilters = function updateFilters(queryParams) {\n    dispatchProps.index(_extends({}, baseScoping, {\n      queryParams: _extends({}, lastQueryParam, queryParams)\n    }));\n  };\n\n  return {\n    index: index,\n    show: show,\n    create: create,\n    update: update,\n    destroy: destroy,\n    updateFilters: updateFilters\n  };\n};\n\nvar getController = function getController(resourceName, _ref, ownProps) {\n  var controller = _ref.controller;\n\n  if (!controller) {\n    return resourceName;\n  }\n  if (typeof controller === 'function') {\n    return controller(ownProps);\n  }\n  return controller;\n};\n\nvar resource = function resource(resourceName) {\n  var resourceOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  var mapStateToProps = function mapStateToProps(state) {\n    var resourceData = state.resources[resourceName];\n    if (!resourceData) {\n      throw new Error(resourceName + ' is not registered in rails-redux resource config');\n    }\n\n    if (resourceData.models) {\n      resourceData.models = resourceData.models.map(function (_ref2) {\n        var attributes = _ref2.attributes,\n            meta = _objectWithoutProperties(_ref2, ['attributes']);\n\n        return _extends({}, meta, attributes);\n      });\n    }\n    return resourceData;\n  };\n\n  var mapDispatchToProps = _reduxRails.railsActions;\n\n  var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {\n    return _extends(_defineProperty({}, resourceName, _extends({}, getScopedActions(stateProps, dispatchProps, resourceName, getController(resourceName, resourceOptions, ownProps)), stateProps)), ownProps);\n  };\n\n  return function (WrappedComponent) {\n    var Resource = function (_Component) {\n      _inherits(Resource, _Component);\n\n      function Resource() {\n        _classCallCheck(this, Resource);\n\n        return _possibleConstructorReturn(this, (Resource.__proto__ || Object.getPrototypeOf(Resource)).apply(this, arguments));\n      }\n\n      _createClass(Resource, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n          var _this2 = this;\n\n          if (resourceOptions.autoload) {\n            // Defer execution to allow component to be painted and rendered\n            setTimeout(function () {\n              _this2.props[resourceName].index(resourceOptions.queryParams);\n            }, 0);\n          }\n        }\n      }, {\n        key: 'render',\n        value: function render() {\n          return _react2.default.createElement(WrappedComponent, this.props);\n        }\n      }]);\n\n      return Resource;\n    }(_react.Component);\n\n    var connectedComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(Resource);\n\n    connectedComponent.WrappedComponent = WrappedComponent.WrappedComponent ? WrappedComponent.WrappedComponent : WrappedComponent;\n\n    return connectedComponent;\n  };\n};\n\nexports.default = resource;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2UvcmVzb3VyY2UuanM/NWQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gICAgICBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHJhaWxzQWN0aW9ucyB9IGZyb20gJ3JlZHV4LXJhaWxzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBnZXRTY29wZWRBY3Rpb25zID0gKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIHJlc291cmNlTmFtZSwgY29udHJvbGxlcikgPT4ge1xuICBjb25zdCBiYXNlU2NvcGluZyA9IHtcbiAgICByZXNvdXJjZTogcmVzb3VyY2VOYW1lLFxuICAgIGNvbnRyb2xsZXJcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZSA9IChpZCwgYXR0cmlidXRlcykgPT4gKFxuICAgIGRpc3BhdGNoUHJvcHMudXBkYXRlKHtcbiAgICAgIC4uLmJhc2VTY29waW5nLFxuICAgICAgaWQsXG4gICAgICBhdHRyaWJ1dGVzXG4gICAgfSlcbiAgKVxuXG4gIGNvbnN0IGNyZWF0ZSA9IGF0dHJpYnV0ZXMgPT4gKFxuICAgIGRpc3BhdGNoUHJvcHMuY3JlYXRlKHtcbiAgICAgIC4uLmJhc2VTY29waW5nLFxuICAgICAgYXR0cmlidXRlc1xuICAgIH0pXG4gIClcblxuICBjb25zdCBkZXN0cm95ID0gaWQgPT4gKFxuICAgIGRpc3BhdGNoUHJvcHMuZGVzdHJveSh7XG4gICAgICAuLi5iYXNlU2NvcGluZyxcbiAgICAgIGlkXG4gICAgfSlcbiAgKVxuXG4gIGNvbnN0IGluZGV4ID0gcXVlcnlQYXJhbXMgPT4gKFxuICAgIGRpc3BhdGNoUHJvcHMuaW5kZXgoe1xuICAgICAgLi4uYmFzZVNjb3BpbmcsXG4gICAgICBxdWVyeVBhcmFtc1xuICAgIH0pXG4gIClcblxuICBjb25zdCBzaG93ID0gKGlkLCBxdWVyeVBhcmFtcykgPT4gKFxuICAgIGRpc3BhdGNoUHJvcHMuc2hvdyh7XG4gICAgICAuLi5iYXNlU2NvcGluZyxcbiAgICAgIGlkLFxuICAgICAgcXVlcnlQYXJhbXNcbiAgICB9KVxuICApXG5cbiAgY29uc3QgbGFzdFF1ZXJ5UGFyYW0gPSBzdGF0ZVByb3BzLnF1ZXJ5UGFyYW1zIHx8IHt9XG4gIGNvbnN0IHVwZGF0ZUZpbHRlcnMgPSAocXVlcnlQYXJhbXMpID0+IHtcbiAgICBkaXNwYXRjaFByb3BzLmluZGV4KHtcbiAgICAgIC4uLmJhc2VTY29waW5nLFxuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgLi4ubGFzdFF1ZXJ5UGFyYW0sXG4gICAgICAgIC4uLnF1ZXJ5UGFyYW1zXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5kZXgsXG4gICAgc2hvdyxcbiAgICBjcmVhdGUsXG4gICAgdXBkYXRlLFxuICAgIGRlc3Ryb3ksXG4gICAgdXBkYXRlRmlsdGVyc1xuICB9XG59XG5cbmNvbnN0IGdldENvbnRyb2xsZXIgPSAocmVzb3VyY2VOYW1lLCB7IGNvbnRyb2xsZXIgfSwgb3duUHJvcHMpID0+IHtcbiAgaWYgKCFjb250cm9sbGVyKSB7IHJldHVybiByZXNvdXJjZU5hbWUgfVxuICBpZiAodHlwZW9mIGNvbnRyb2xsZXIgPT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGNvbnRyb2xsZXIob3duUHJvcHMpIH1cbiAgcmV0dXJuIGNvbnRyb2xsZXJcbn1cblxuY29uc3QgcmVzb3VyY2UgPSAocmVzb3VyY2VOYW1lLCByZXNvdXJjZU9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCByZXNvdXJjZURhdGEgPSBzdGF0ZS5yZXNvdXJjZXNbcmVzb3VyY2VOYW1lXVxuICAgIGlmICghcmVzb3VyY2VEYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzb3VyY2VOYW1lfSBpcyBub3QgcmVnaXN0ZXJlZCBpbiByYWlscy1yZWR1eCByZXNvdXJjZSBjb25maWdgKVxuICAgIH1cblxuICAgIGlmIChyZXNvdXJjZURhdGEubW9kZWxzKSB7XG4gICAgICByZXNvdXJjZURhdGEubW9kZWxzID0gcmVzb3VyY2VEYXRhLm1vZGVscy5tYXAoKHthdHRyaWJ1dGVzLCAuLi5tZXRhfSkgPT4gKHsgLi4ubWV0YSwgLi4uYXR0cmlidXRlcyB9KSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlRGF0YVxuICB9XG5cbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gcmFpbHNBY3Rpb25zXG5cbiAgY29uc3QgbWVyZ2VQcm9wcyA9IChzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykgPT4gKHtcbiAgICBbcmVzb3VyY2VOYW1lXToge1xuICAgICAgLi4uZ2V0U2NvcGVkQWN0aW9ucyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCByZXNvdXJjZU5hbWUsIGdldENvbnRyb2xsZXIocmVzb3VyY2VOYW1lLCByZXNvdXJjZU9wdGlvbnMsIG93blByb3BzKSksXG4gICAgICAuLi5zdGF0ZVByb3BzXG4gICAgfSxcbiAgICAuLi5vd25Qcm9wc1xuICB9KVxuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYocmVzb3VyY2VPcHRpb25zLmF1dG9sb2FkKSB7XG4gICAgICAgICAgLy8gRGVmZXIgZXhlY3V0aW9uIHRvIGFsbG93IGNvbXBvbmVudCB0byBiZSBwYWludGVkIGFuZCByZW5kZXJlZFxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wc1tyZXNvdXJjZU5hbWVdLmluZGV4KHJlc291cmNlT3B0aW9ucy5xdWVyeVBhcmFtcylcbiAgICAgICAgICB9LCAwKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbm5lY3RlZENvbXBvbmVudCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpKFJlc291cmNlKVxuXG4gICAgY29ubmVjdGVkQ29tcG9uZW50LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50LldyYXBwZWRDb21wb25lbnRcbiAgICAgID8gV3JhcHBlZENvbXBvbmVudC5XcmFwcGVkQ29tcG9uZW50XG4gICAgICA6IFdyYXBwZWRDb21wb25lbnRcblxuICAgIHJldHVybiBjb25uZWN0ZWRDb21wb25lbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvdXJjZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZXNvdXJjZS9yZXNvdXJjZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFPQTtBQUFBO0FBR0E7QUFGQTtBQURBO0FBQ0E7QUFNQTtBQUFBO0FBR0E7QUFGQTtBQURBO0FBQ0E7QUFNQTtBQUFBO0FBR0E7QUFGQTtBQURBO0FBQ0E7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBYkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_5__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCI/Y2E2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_6__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXJhaWxzXCI/MzNlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtcmFpbHNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_7__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _propTypes = __webpack_require__(1);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar actionProps = {\n  index: _propTypes2.default.func.isRequired,\n  show: _propTypes2.default.func.isRequired,\n  create: _propTypes2.default.func.isRequired,\n  update: _propTypes2.default.func.isRequired,\n  destroy: _propTypes2.default.func.isRequired,\n  updateFilters: _propTypes2.default.func.isRequired\n};\n\nvar baseProps = _extends({}, actionProps, {\n  loading: _propTypes2.default.bool.isRequired,\n  loadingError: _propTypes2.default.string\n});\n\nvar member = _propTypes2.default.shape(_extends({}, baseProps, {\n  id: _propTypes2.default.number,\n  attributes: _propTypes2.default.object\n}));\n\nvar collection = _propTypes2.default.shape(_extends({}, baseProps, {\n  models: _propTypes2.default.arrayOf(member)\n}));\n\nexports.default = {\n  member: member,\n  collection: collection\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb3VyY2VQcm9wcy5qcz8wZDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgYWN0aW9uUHJvcHMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjcmVhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVzdHJveTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXBkYXRlRmlsdGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5jb25zdCBiYXNlUHJvcHMgPSB7XG4gIC4uLmFjdGlvblByb3BzLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsb2FkaW5nRXJyb3I6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgbWVtYmVyID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAuLi5iYXNlUHJvcHMsXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYXR0cmlidXRlczogUHJvcFR5cGVzLm9iamVjdFxuICB9KVxuXG5jb25zdCBjb2xsZWN0aW9uID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgLi4uYmFzZVByb3BzLFxuICBtb2RlbHM6IFByb3BUeXBlcy5hcnJheU9mKG1lbWJlcilcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWVtYmVyLFxuICBjb2xsZWN0aW9uXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Jlc291cmNlUHJvcHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);
});
