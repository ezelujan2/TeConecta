"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        date: \"\",\n        name: \"\",\n        company: \"\",\n        car: \"\",\n        detail: \"\",\n        km: \"\",\n        discount: \"\",\n        price: \"\"\n    });\n    const handleChange = (e)=>{\n        setServices({\n            ...services,\n            [e.target.name]: e.target.value\n        });\n        if (e.target.name === \"km\") {\n            let value = Math.floor(services.km * 288.9);\n            if (services.discount === \"\") {\n                setServices({\n                    ...services,\n                    price: value\n                });\n            } else {\n                setServices({\n                    ...services,\n                    price: value * (services.discount / 100)\n                });\n            }\n        } else if (e.target.name === \"discount\") {\n            if (services.km !== \"\") {\n                let value = Math.floor(services.km * 288.9);\n                setServices({\n                    ...services,\n                    price: value * (services.discount / 100)\n                });\n            }\n        }\n    };\n    const cars = [\n        \"Fluence Gris\",\n        \"Fluence Blanco\",\n        \"Honda\",\n        \"Toyota\",\n        \"Otros\"\n    ];\n    const companies = [\n        \"Sidersa\",\n        \"Conicet\",\n        \"Ebinox\",\n        \"Sython\",\n        \"Stern\",\n        \"Cachi\",\n        \"Otros\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex m-auto justify-around mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col bg-sky-900 rounded-xl shadow-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"date\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"date\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"name\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \"Nombre\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"company\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \" Empresa\",\n                    onChange: handleChange,\n                    children: companies.map((companie, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: companie\n                        }, index, false, {\n                            fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleChange,\n                    name: \"car\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \"Auto\",\n                    children: cars.map((car, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: [\n                                \" \",\n                                car,\n                                \" \"\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                            lineNumber: 77,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    name: \"detail\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \"Detalles\"\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    name: \"km\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"number\",\n                    placeholder: \"Kilometros\"\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    name: \"discount\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"number\",\n                    placeholder: \"Descuento %\"\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-black p-2 text-white rounded m-4\",\n                    children: [\n                        \" \",\n                        \"Reservar\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                services.price !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Precio = \",\n                        services.price,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 103,\n                    columnNumber: 34\n                }, this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"vON5MVuZ7xEe055dXPy//5nhQ+I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjt3QkFBSTt3QkFDSTs7Ozs7OztnQkFFVm5CLFNBQVNTLEtBQUssS0FBSyxtQkFBSyw4REFBQ3NCOzt3QkFBRTt3QkFBVS9CLFNBQVNTLEtBQUs7d0JBQUM7Ozs7OzsyQkFBUTs7Ozs7Ozs7Ozs7O0FBSXJFO0dBdkd3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKHtcbiAgICBkYXRlOiBcIlwiLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgY29tcGFueTogXCJcIixcbiAgICBjYXI6IFwiXCIsXG4gICAgZGV0YWlsOiBcIlwiLFxuICAgIGttOiBcIlwiLFxuICAgIGRpc2NvdW50OiBcIlwiLFxuICAgIHByaWNlOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlcnZpY2VzKHsgLi4uc2VydmljZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gXCJrbVwiKSB7XG4gICAgICBsZXQgdmFsdWUgPSBNYXRoLmZsb29yKHNlcnZpY2VzLmttICogMjg4LjkpO1xuICAgICAgaWYgKHNlcnZpY2VzLmRpc2NvdW50ID09PSBcIlwiKSB7XG4gICAgICAgIHNldFNlcnZpY2VzKHsgLi4uc2VydmljZXMsIHByaWNlOiB2YWx1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlcnZpY2VzKHsgLi4uc2VydmljZXMsIHByaWNlOiB2YWx1ZSAqIChzZXJ2aWNlcy5kaXNjb3VudCAvIDEwMCkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5uYW1lID09PSBcImRpc2NvdW50XCIpIHtcbiAgICAgIGlmIChzZXJ2aWNlcy5rbSAhPT0gXCJcIikge1xuICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLmZsb29yKHNlcnZpY2VzLmttICogMjg4LjkpO1xuICAgICAgICBzZXRTZXJ2aWNlcyh7IC4uLnNlcnZpY2VzLCBwcmljZTogdmFsdWUgKiAoc2VydmljZXMuZGlzY291bnQgLyAxMDApIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjYXJzID0gW1wiRmx1ZW5jZSBHcmlzXCIsIFwiRmx1ZW5jZSBCbGFuY29cIiwgXCJIb25kYVwiLCBcIlRveW90YVwiLCBcIk90cm9zXCJdO1xuICBjb25zdCBjb21wYW5pZXMgPSBbXG4gICAgXCJTaWRlcnNhXCIsXG4gICAgXCJDb25pY2V0XCIsXG4gICAgXCJFYmlub3hcIixcbiAgICBcIlN5dGhvblwiLFxuICAgIFwiU3Rlcm5cIixcbiAgICBcIkNhY2hpXCIsXG4gICAgXCJPdHJvc1wiLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG0tYXV0byBqdXN0aWZ5LWFyb3VuZCBtdC0xMFwiPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1za3ktOTAwIHJvdW5kZWQteGwgc2hhZG93LXhsXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbS00XCJcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtLTRcIlxuICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbS00XCJcbiAgICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcbiAgICAgIEVtcHJlc2FcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIHtjb21wYW5pZXMubWFwKChjb21wYW5pZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9Pntjb21wYW5pZX08L29wdGlvbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiY2FyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbS00XCJcbiAgICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdXRvXCI+XG4gICAgICAgICAge2NhcnMubWFwKChjYXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fT4ge2Nhcn0gPC9vcHRpb24+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiZGV0YWlsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbS00XCJcbiAgICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXRhbGxlc1wiPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cImttXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbS00XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIktpbG9tZXRyb3NcIj48L2lucHV0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJkaXNjb3VudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIG0tNFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjdWVudG8gJVwiPjwvaW5wdXQ+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmxhY2sgcC0yIHRleHQtd2hpdGUgcm91bmRlZCBtLTRcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgUmVzZXJ2YXJ7XCIgXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7c2VydmljZXMucHJpY2UgIT09IFwiXCIgPyA8cD5QcmVjaW8gPSB7c2VydmljZXMucHJpY2V9IDwvcD4gOiBcIlwifVxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInNlcnZpY2VzIiwic2V0U2VydmljZXMiLCJkYXRlIiwibmFtZSIsImNvbXBhbnkiLCJjYXIiLCJkZXRhaWwiLCJrbSIsImRpc2NvdW50IiwicHJpY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJjYXJzIiwiY29tcGFuaWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJtYXAiLCJjb21wYW5pZSIsImluZGV4Iiwib3B0aW9uIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});