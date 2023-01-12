"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.css */ \"./components/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// The approach used in this component shows how to build a sign in and sign out\n// component that works on pages which support both client and server side\n// rendering, and avoids any flash incorrect content on initial page load.\nfunction Header() {\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const loading = status === \"loading\";\n    var _session_user_email;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"noscript\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                    children: \".nojs-show { opacity: 1; top: 0; }\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().signedInStatus),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nojs-show \".concat(!session && loading ? (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().loading) : (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().loaded)),\n                    children: [\n                        !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().notSignedInText),\n                                    children: \"You are not signed in\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/api/auth/signin\",\n                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonPrimary),\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)();\n                                    },\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true),\n                        (session === null || session === void 0 ? void 0 : session.user) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                session.user.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        backgroundImage: \"url('\".concat(session.user.image, \"')\")\n                                    },\n                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().avatar)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().signedInText),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                            children: \"Signed in as\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: (_session_user_email = session.user.email) !== null && _session_user_email !== void 0 ? _session_user_email : session.user.name\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/api/auth/signout\",\n                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n                                    },\n                                    children: \"Sign out\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/codespaces-blank/components/header.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUM2RDtBQUNyQjtBQUV4QyxnRkFBZ0Y7QUFDaEYsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUMzRCxTQUFTSSxTQUFTOztJQUM3QixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUM1QyxNQUFNTSxVQUFVRCxXQUFXO1FBNENNRDtJQTFDakMscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7MEJBQ0csNEVBQUNDOzhCQUFROzs7Ozs7Ozs7OzswQkFFYiw4REFBQ0M7Z0JBQUlDLFdBQVdWLDBFQUFxQjswQkFDakMsNEVBQUNZO29CQUNHRixXQUFXLGFBRVYsT0FERyxDQUFDUCxXQUFXRSxVQUFVTCxtRUFBYyxHQUFHQSxrRUFBYTs7d0JBR3ZELENBQUNHLHlCQUNFOzs4Q0FDSSw4REFBQ1c7b0NBQUtKLFdBQVdWLDJFQUFzQjs4Q0FBRTs7Ozs7OzhDQUd6Qyw4REFBQ2dCO29DQUNHQyxNQUFPO29DQUNQUCxXQUFXVix5RUFBb0I7b0NBQy9CbUIsU0FBUyxDQUFDQyxJQUFNO3dDQUNaQSxFQUFFQyxjQUFjO3dDQUNoQnhCLHVEQUFNQTtvQ0FDVjs4Q0FDSDs7Ozs7Ozs7d0JBS1JNLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU21CLElBQUksbUJBQ1Y7O2dDQUNLbkIsUUFBUW1CLElBQUksQ0FBQ0MsS0FBSyxrQkFDZiw4REFBQ1Q7b0NBQ0dOLE9BQU87d0NBQ0hnQixpQkFBaUIsUUFBMkIsT0FBbkJyQixRQUFRbUIsSUFBSSxDQUFDQyxLQUFLLEVBQUM7b0NBQ2hEO29DQUNBYixXQUFXVixrRUFBYTs7Ozs7OzhDQUdoQyw4REFBQ2M7b0NBQUtKLFdBQVdWLHdFQUFtQjs7c0RBQ2hDLDhEQUFDMkI7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7Ozs7O3NEQUNELDhEQUFDQztzREFDSTFCLENBQUFBLHNCQUFBQSxRQUFRbUIsSUFBSSxDQUFDUSxLQUFLLGNBQWxCM0IsaUNBQUFBLHNCQUFzQkEsUUFBUW1CLElBQUksQ0FBQ1MsSUFBSTs7Ozs7Ozs7Ozs7OzhDQUdoRCw4REFBQ2Y7b0NBQ0dDLE1BQU87b0NBQ1BQLFdBQVdWLGtFQUFhO29DQUN4Qm1CLFNBQVMsQ0FBQ0MsSUFBTTt3Q0FDWkEsRUFBRUMsY0FBYzt3Q0FDaEJ2Qix3REFBT0E7b0NBQ1g7OENBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQzdCLENBQUM7R0ExRnVCRzs7UUFDY0YsdURBQVVBOzs7S0FEeEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeD84NzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcydcblxuLy8gVGhlIGFwcHJvYWNoIHVzZWQgaW4gdGhpcyBjb21wb25lbnQgc2hvd3MgaG93IHRvIGJ1aWxkIGEgc2lnbiBpbiBhbmQgc2lnbiBvdXRcbi8vIGNvbXBvbmVudCB0aGF0IHdvcmtzIG9uIHBhZ2VzIHdoaWNoIHN1cHBvcnQgYm90aCBjbGllbnQgYW5kIHNlcnZlciBzaWRlXG4vLyByZW5kZXJpbmcsIGFuZCBhdm9pZHMgYW55IGZsYXNoIGluY29ycmVjdCBjb250ZW50IG9uIGluaXRpYWwgcGFnZSBsb2FkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgICBjb25zdCBsb2FkaW5nID0gc3RhdHVzID09PSAnbG9hZGluZydcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlPntgLm5vanMtc2hvdyB7IG9wYWNpdHk6IDE7IHRvcDogMDsgfWB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25lZEluU3RhdHVzfT5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bub2pzLXNob3cgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFzZXNzaW9uICYmIGxvYWRpbmcgPyBzdHlsZXMubG9hZGluZyA6IHN0eWxlcy5sb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ub3RTaWduZWRJblRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIG5vdCBzaWduZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hcGkvYXV0aC9zaWduaW5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25QcmltYXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduSW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbj8udXNlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLnVzZXIuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7c2Vzc2lvbi51c2VyLmltYWdlfScpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zaWduZWRJblRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+U2lnbmVkIGluIGFzPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLmVtYWlsID8/IHNlc3Npb24udXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hcGkvYXV0aC9zaWdub3V0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduT3V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPG5hdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbXN9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY2xpZW50Jz5DbGllbnQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zZXJ2ZXInPlNlcnZlcjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb3RlY3RlZCc+UHJvdGVjdGVkPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYXBpLWV4YW1wbGUnPkFQSTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FkbWluJz5BZG1pbjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lJz5NZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+ICovfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJzdHlsZXMiLCJIZWFkZXIiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImxvYWRpbmciLCJoZWFkZXIiLCJub3NjcmlwdCIsInN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lnbmVkSW5TdGF0dXMiLCJwIiwibG9hZGVkIiwic3BhbiIsIm5vdFNpZ25lZEluVGV4dCIsImEiLCJocmVmIiwiYnV0dG9uUHJpbWFyeSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhdmF0YXIiLCJzaWduZWRJblRleHQiLCJzbWFsbCIsImJyIiwic3Ryb25nIiwiZW1haWwiLCJuYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});