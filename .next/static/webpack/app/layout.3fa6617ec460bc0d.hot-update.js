"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"82002095fc7b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzlkZTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4MjAwMjA5NWZjN2JcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Nav.tsx":
/*!********************************!*\
  !*** ./app/components/Nav.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Nav = (param)=>{\n    let { user } = param;\n    var _user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-between items-center py-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Styled\"\n            }, void 0, false, {\n                fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex items-center gap-12\",\n                children: [\n                    !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-teal-600 text-white py-2 px-4 rounded-md\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn,\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 27\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, undefined),\n                    user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: (_user = user) === null || _user === void 0 ? void 0 : _user.image,\n                                alt: user.name,\n                                width: 48,\n                                height: 48\n                            }, void 0, false, {\n                                fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 26\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 24\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jerome/Desktop/Github Repo /EcommerceWebsite/app/components/Nav.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNzQztBQUNSO0FBSTlCLE1BQU1FLE1BQU07UUFBQyxFQUFDQyxJQUFJLEVBQVU7UUFpQlVBO0lBaEJsQyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFHRixXQUFVOztvQkFFVCxDQUFDRixzQkFDRSw4REFBQ0s7a0NBQ0csNEVBQUNDOzRCQUFHSixXQUFVO3NDQUNaLDRFQUFDSztnQ0FBT0MsU0FBUyxJQUFNWCxtREFBTUE7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS3hDRyxzQkFDRyw4REFBQ0s7a0NBQ0UsNEVBQUNDO3NDQUNDLDRFQUFDUixtREFBS0E7Z0NBQUNXLEdBQUcsR0FBR1QsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNVSxLQUFLO2dDQUNqQkMsS0FBS1gsS0FBS1ksSUFBSTtnQ0FDZEMsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQztLQTVCRWY7QUE4Qk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2LnRzeD8wOWIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JyBcbmltcG9ydCB7c2lnbklufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXG5cblxuY29uc3QgTmF2ID0gKHt1c2VyfTogU2Vzc2lvbikgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHktOCBcIj5cbiAgICAgICAgICAgIDxoMT4gU3R5bGVkPC9oMT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMTJcIj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHshdXNlciAmJihcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmctdGVhbC02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25Jbn0+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt1c2VyICYmKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8bGk+IFxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMgPXt1c2VyPy5pbWFnZSBhcyBzdHJpbmd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXIubmFtZSBhcyBzdHJpbmd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PiBcbiAgICApXG4gICAgfVxuICAgIFxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sIm5hbWVzIjpbInNpZ25JbiIsIkltYWdlIiwiTmF2IiwidXNlciIsIm5hdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJkaXYiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Nav.tsx\n"));

/***/ })

});