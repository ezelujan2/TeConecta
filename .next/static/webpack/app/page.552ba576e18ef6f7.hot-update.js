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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        date: \"\",\n        name: \"\",\n        company: \"\",\n        car: \"\",\n        detail: \"\",\n        km: \"\",\n        discount: \"\",\n        price: \"\"\n    });\n    const handleChange = (e)=>{\n        if (e.target.name === \"km\") {\n            if (services.discount === \"\") {\n                setServices({\n                    ...services,\n                    price: Math.floor(e.target.value * 288.9)\n                });\n            }\n        }\n        setServices({\n            ...services,\n            [e.target.name]: e.target.value\n        });\n    };\n    const cars = [\n        \"Fluence Gris\",\n        \"Fluence Blanco\",\n        \"Honda\",\n        \"Toyota\",\n        \"Otros\"\n    ];\n    const companies = [\n        \"Sidersa\",\n        \"Conicet\",\n        \"Ebinox\",\n        \"Sython\",\n        \"Stern\",\n        \"Cachi\",\n        \"Otros\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex m-auto justify-around mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col bg-sky-900 rounded-xl shadow-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"date\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"date\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"name\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \"Nombre\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"company\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \" Empresa\",\n                    onChange: handleChange,\n                    children: companies.map((companie, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: companie\n                        }, index, false, {\n                            fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                            lineNumber: 58,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleChange,\n                    name: \"car\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \"Auto\",\n                    children: cars.map((car, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: [\n                                \" \",\n                                car,\n                                \" \"\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                            lineNumber: 68,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    name: \"detail\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"name\",\n                    placeholder: \"Detalles\"\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    name: \"km\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"number\",\n                    placeholder: \"Kilometros\"\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    name: \"discount\",\n                    className: \"border border-gray-700 rounded-md m-4\",\n                    type: \"number\",\n                    placeholder: \"Descuento %\"\n                }, void 0, false, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-black p-2 text-white rounded m-4\",\n                    children: [\n                        \" \",\n                        \"Reservar\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                services.price ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        services.price,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n                    lineNumber: 94,\n                    columnNumber: 27\n                }, this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ezelujan/Desktop/Code/TeConecta/src/app/page.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"vON5MVuZ7xEe055dXPy//5nhQ+I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUN2Q0ksTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsS0FBSztRQUNMQyxRQUFRO1FBQ1JDLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ1QsSUFBSSxLQUFLLE1BQU07WUFDMUIsSUFBSUgsU0FBU1EsUUFBUSxLQUFLLElBQUk7Z0JBQzVCUCxZQUFZO29CQUFFLEdBQUdELFFBQVE7b0JBQUVTLE9BQU9JLEtBQUtDLEtBQUssQ0FBQ0gsRUFBRUMsTUFBTSxDQUFDRyxLQUFLLEdBQUc7Z0JBQU87WUFDdkU7UUFDRjtRQUNBZCxZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFLENBQUNXLEVBQUVDLE1BQU0sQ0FBQ1QsSUFBSSxDQUFDLEVBQUVRLEVBQUVDLE1BQU0sQ0FBQ0csS0FBSztRQUFDO0lBQzdEO0lBRUEsTUFBTUMsT0FBTztRQUFDO1FBQWdCO1FBQWtCO1FBQVM7UUFBVTtLQUFRO0lBQzNFLE1BQU1DLFlBQVk7UUFDaEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLRCxXQUFVOzs4QkFDZCw4REFBQ0U7b0JBQ0NsQixNQUFLO29CQUNMZ0IsV0FBVTtvQkFDVkcsTUFBSztvQkFDTEMsVUFBVWI7Ozs7Ozs4QkFDWiw4REFBQ1c7b0JBQ0NsQixNQUFLO29CQUNMZ0IsV0FBVTtvQkFDVkcsTUFBSztvQkFDTEUsYUFBWTtvQkFDWkQsVUFBVWI7Ozs7Ozs4QkFDWiw4REFBQ2U7b0JBQ0N0QixNQUFLO29CQUNMZ0IsV0FBVTtvQkFDVkcsTUFBSztvQkFDTEUsYUFBWTtvQkFFWkQsVUFBVWI7OEJBQ1RPLFVBQVVTLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQzt3QkFDeEIscUJBQU8sOERBQUNDO3NDQUFvQkY7MkJBQVJDOzs7OztvQkFDdEI7Ozs7Ozs4QkFFRiw4REFBQ0g7b0JBQ0NGLFVBQVViO29CQUNWUCxNQUFLO29CQUNMZ0IsV0FBVTtvQkFDVkcsTUFBSztvQkFDTEUsYUFBWTs4QkFDWFIsS0FBS1UsR0FBRyxDQUFDLENBQUNyQixLQUFLdUI7d0JBQ2QscUJBQU8sOERBQUNDOztnQ0FBbUI7Z0NBQUV4QjtnQ0FBSTs7MkJBQWJ1Qjs7Ozs7b0JBQ3RCOzs7Ozs7OEJBRUYsOERBQUNQO29CQUNDRSxVQUFVYjtvQkFDVlAsTUFBSztvQkFDTGdCLFdBQVU7b0JBQ1ZHLE1BQUs7b0JBQ0xFLGFBQVk7Ozs7Ozs4QkFDZCw4REFBQ0g7b0JBQ0NFLFVBQVViO29CQUNWUCxNQUFLO29CQUNMZ0IsV0FBVTtvQkFDVkcsTUFBSztvQkFDTEUsYUFBWTs7Ozs7OzhCQUNkLDhEQUFDSDtvQkFDQ0UsVUFBVWI7b0JBQ1ZQLE1BQUs7b0JBQ0xnQixXQUFVO29CQUNWRyxNQUFLO29CQUNMRSxhQUFZOzs7Ozs7OEJBRWQsOERBQUNNO29CQUFPUixNQUFLO29CQUFTSCxXQUFVOzt3QkFDN0I7d0JBQUk7d0JBQ0k7Ozs7Ozs7Z0JBRVZuQixTQUFTUyxLQUFLLGlCQUFHLDhEQUFDc0I7O3dCQUFHL0IsU0FBU1MsS0FBSzt3QkFBQzs7Ozs7OzJCQUFROzs7Ozs7Ozs7Ozs7QUFJckQ7R0E5RndCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGUoe1xuICAgIGRhdGU6IFwiXCIsXG4gICAgbmFtZTogXCJcIixcbiAgICBjb21wYW55OiBcIlwiLFxuICAgIGNhcjogXCJcIixcbiAgICBkZXRhaWw6IFwiXCIsXG4gICAga206IFwiXCIsXG4gICAgZGlzY291bnQ6IFwiXCIsXG4gICAgcHJpY2U6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IFwia21cIikge1xuICAgICAgaWYgKHNlcnZpY2VzLmRpc2NvdW50ID09PSBcIlwiKSB7XG4gICAgICAgIHNldFNlcnZpY2VzKHsgLi4uc2VydmljZXMsIHByaWNlOiBNYXRoLmZsb29yKGUudGFyZ2V0LnZhbHVlICogMjg4LjkpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRTZXJ2aWNlcyh7IC4uLnNlcnZpY2VzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNhcnMgPSBbXCJGbHVlbmNlIEdyaXNcIiwgXCJGbHVlbmNlIEJsYW5jb1wiLCBcIkhvbmRhXCIsIFwiVG95b3RhXCIsIFwiT3Ryb3NcIl07XG4gIGNvbnN0IGNvbXBhbmllcyA9IFtcbiAgICBcIlNpZGVyc2FcIixcbiAgICBcIkNvbmljZXRcIixcbiAgICBcIkViaW5veFwiLFxuICAgIFwiU3l0aG9uXCIsXG4gICAgXCJTdGVyblwiLFxuICAgIFwiQ2FjaGlcIixcbiAgICBcIk90cm9zXCIsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbS1hdXRvIGp1c3RpZnktYXJvdW5kIG10LTEwXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXNreS05MDAgcm91bmRlZC14bCBzaGFkb3cteGxcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtLTRcIlxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIG0tNFwiXG4gICAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtLTRcIlxuICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlxuICAgICAgRW1wcmVzYVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAge2NvbXBhbmllcy5tYXAoKGNvbXBhbmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0+e2NvbXBhbmllfTwvb3B0aW9uPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJjYXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtLTRcIlxuICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF1dG9cIj5cbiAgICAgICAgICB7Y2Fycy5tYXAoKGNhciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9PiB7Y2FyfSA8L29wdGlvbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJkZXRhaWxcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtLTRcIlxuICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRldGFsbGVzXCI+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBuYW1lPVwia21cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtLTRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS2lsb21ldHJvc1wiPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cImRpc2NvdW50XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgbS00XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2N1ZW50byAlXCI+PC9pbnB1dD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1ibGFjayBwLTIgdGV4dC13aGl0ZSByb3VuZGVkIG0tNFwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBSZXNlcnZhcntcIiBcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtzZXJ2aWNlcy5wcmljZSA/IDxwPntzZXJ2aWNlcy5wcmljZX0gPC9wPiA6IFwiXCJ9XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwic2VydmljZXMiLCJzZXRTZXJ2aWNlcyIsImRhdGUiLCJuYW1lIiwiY29tcGFueSIsImNhciIsImRldGFpbCIsImttIiwiZGlzY291bnQiLCJwcmljZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJNYXRoIiwiZmxvb3IiLCJ2YWx1ZSIsImNhcnMiLCJjb21wYW5pZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIm1hcCIsImNvbXBhbmllIiwiaW5kZXgiLCJvcHRpb24iLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});