"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_santhosh_microservices_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_santhosh_microservices_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_santhosh_microservices_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, currentUser = param.currentUser;\n    console.log(\"PAGE PROPS  ==============> \", pageProps, currentUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"/home/santhosh/microservices/ticketing/client/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps, {\n                    currentUser: currentUser\n                }), void 0, false, {\n                    fileName: \"/home/santhosh/microservices/ticketing/client/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/santhosh/microservices/ticketing/client/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/santhosh/microservices/ticketing/client/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = MyApp;\nMyApp.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_home_santhosh_microservices_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {\n        var pageProps, client, data;\n        return _home_santhosh_microservices_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ;\n                    client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appContext.ctx);\n                    _ctx.next = 5;\n                    return client.get(\"/api/users/currentuser\");\n                case 5:\n                    data = _ctx.sent.data;\n                    if (!appContext.Component.getInitialProps) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    _ctx.next = 9;\n                    return appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);\n                case 9:\n                    pageProps = _ctx.sent;\n                case 10:\n                    return _ctx.abrupt(\"return\", _objectSpread({\n                        pageProps: pageProps\n                    }, data));\n                case 13:\n                    _ctx.prev = 13;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    throw _ctx.t0;\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                13\n            ]\n        ]);\n    }));\n    return function(appContext) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDSTtBQUNBO0FBQzlDLElBQU1FLEtBQUssR0FBRyxnQkFBMkM7UUFBeENDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsV0FBVyxTQUFYQSxXQUFXO0lBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRUgsU0FBUyxFQUFFQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNQLHNEQUFNO2dCQUFDSSxXQUFXLEVBQUVBLFdBQVc7Ozs7O3FCQUFJOzBCQUNwQyw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7MEJBQ3hCLDRFQUFDTixTQUFTLG9CQUFLQyxTQUFTO29CQUFFQyxXQUFXLEVBQUVBLFdBQVc7Ozs7O3lCQUFJOzs7OztxQkFDbEQ7Ozs7OzthQUNGLENBQ047Q0FDSDtBQVZLSCxLQUFBQSxLQUFLO0FBWVhBLEtBQUssQ0FBQ1EsZUFBZTtlQUFHLDRMQUFPQyxVQUFVLEVBQUs7WUFFdENQLFNBQVMsRUFDUFEsTUFBTSxFQUNKQyxJQUFJOzs7OztvQkFuQmhCLENBaUJrQjtvQkFDUkQsTUFBTSxHQUFHWiw2REFBVyxDQUFDVyxVQUFVLENBQUNHLEdBQUcsQ0FBQyxDQUFDOzsyQkFDcEJGLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLHdCQUF3QixDQUFDOztvQkFBckQsSUFBTSxhQUFKRixJQUFJLENBQStDO3dCQUV2REYsQ0FBQUEsVUFBVSxDQUFDUixTQUFTLENBQUNPLGVBQWU7Ozs7OzJCQUNwQkMsVUFBVSxDQUFDUixTQUFTLENBQUNPLGVBQWUsQ0FDcERDLFVBQVUsQ0FBQ0csR0FBRyxFQUNkRixNQUFNLEVBQ05DLElBQUksQ0FBQ1IsV0FBVyxDQUNqQjs7b0JBSkRELFNBQVMsWUFJUjs7aURBR0k7d0JBQ0xBLFNBQVMsRUFBVEEsU0FBUzt1QkFDTlMsSUFBSSxDQUNSOzs7O29CQUVELGNBQVk7Ozs7Ozs7Ozs7O0tBRWY7b0JBckI4QkYsVUFBVTs7O0dBcUJ4QyxDQUFDO0FBRUYsK0RBQWVULEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCBidWlsZENsaWVudCBmcm9tIFwiLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiUEFHRSBQUk9QUyAgPT09PT09PT09PT09PT0+IFwiLCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcGFnZVByb3BzO1xuICAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCIpO1xuXG4gICAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICBhcHBDb250ZXh0LmN0eCxcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBkYXRhLmN1cnJlbnRVc2VyXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwYWdlUHJvcHMsXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiZGF0YSIsImN0eCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});