"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    events: {\n        createUser: async ({ user })=>{\n            const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_4___default())(process.env.STRIPE_SECRET_KEY, {\n                apiVersion: \"2022-11-15\"\n            });\n            //creating a stripe customer\n            if (user.name && user.email) {\n                const customer = await stripe.customers.create({\n                    email: user.email,\n                    name: user.name\n                });\n                // update and add stripeCustomerId\n                await prisma.user.update({\n                    where: {\n                        id: user.id\n                    },\n                    data: {\n                        stripeCustomerId: customer.id\n                    }\n                });\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNDO0FBQ0U7QUFDWjtBQUNsQjtBQUUzQixNQUFNSyxTQUFTLElBQUlGLHdEQUFZQTtBQUV4QixNQUFNRyxjQUFnQztJQUMzQ0MsV0FBVztRQUNMTixpRUFBY0EsQ0FBQztZQUNqQk8sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsU0FBU1osd0VBQWFBLENBQUNHO0lBQ3ZCVSxRQUFPO1FBQ0xDLFlBQVksT0FBTyxFQUFDQyxJQUFJLEVBQUM7WUFDdkIsTUFBTUMsU0FBUyxJQUFJZCwrQ0FBTUEsQ0FBRUssUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUIsRUFBWTtnQkFDbEVDLFlBQVk7WUFDZDtZQUNBLDRCQUE0QjtZQUM1QixJQUFJSCxLQUFLSSxJQUFJLElBQUlKLEtBQUtLLEtBQUssRUFBQztnQkFDMUIsTUFBTUMsV0FBVyxNQUFNTCxPQUFPTSxTQUFTLENBQUNDLE1BQU0sQ0FBRTtvQkFDOUNILE9BQU1MLEtBQUtLLEtBQUs7b0JBQ2hCRCxNQUFNSixLQUFLSSxJQUFJO2dCQUFDO2dCQUVwQixrQ0FBa0M7Z0JBQ2hDLE1BQU1oQixPQUFPWSxJQUFJLENBQUNTLE1BQU0sQ0FBQztvQkFDckJDLE9BQU07d0JBQUVDLElBQUlYLEtBQUtXLEVBQUU7b0JBQUM7b0JBQ3BCQyxNQUFNO3dCQUFFQyxrQkFBa0JQLFNBQVNLLEVBQUU7b0JBQUM7Z0JBQ3hDO1lBQ0o7UUFFRjtJQUNGO0FBQ0YsRUFBQztBQUVELGlFQUFlNUIsZ0RBQVFBLENBQUNNLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyAgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZyxcbiAgICB9KSxcbiAgXSxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBldmVudHM6e1xuICAgIGNyZWF0ZVVzZXI6IGFzeW5jICh7dXNlcn0pID0+e1xuICAgICAgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZSAocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkgYXMgc3RyaW5nLCB7XG4gICAgICAgIGFwaVZlcnNpb246ICcyMDIyLTExLTE1JyxcbiAgICAgIH0pXG4gICAgICAvL2NyZWF0aW5nIGEgc3RyaXBlIGN1c3RvbWVyXG4gICAgICBpZiAodXNlci5uYW1lICYmIHVzZXIuZW1haWwpe1xuICAgICAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKCB7XG4gICAgICAgICAgZW1haWw6dXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsfSlcbiAgICAgICAgXG4gICAgICAvLyB1cGRhdGUgYW5kIGFkZCBzdHJpcGVDdXN0b21lcklkXG4gICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZTp7IGlkOiB1c2VyLmlkIH0sXG4gICAgICAgICAgICBkYXRhOiB7IHN0cmlwZUN1c3RvbWVySWQ6IGN1c3RvbWVyLmlkIH1cbiAgICAgICAgICB9KSAgXG4gICAgICB9XG4gICAgIFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJQcmlzbWFDbGllbnQiLCJTdHJpcGUiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImFkYXB0ZXIiLCJldmVudHMiLCJjcmVhdGVVc2VyIiwidXNlciIsInN0cmlwZSIsIlNUUklQRV9TRUNSRVRfS0VZIiwiYXBpVmVyc2lvbiIsIm5hbWUiLCJlbWFpbCIsImN1c3RvbWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwidXBkYXRlIiwid2hlcmUiLCJpZCIsImRhdGEiLCJzdHJpcGVDdXN0b21lcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();