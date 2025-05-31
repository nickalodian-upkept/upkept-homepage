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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://aeyqkxnxikyjxbyrcpbf.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleXFreG54aWt5anhieXJjcGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwOTgwMzAsImV4cCI6MjA2MjY3NDAzMH0.Ubl29s-HwyC7-PbuE6zWgKdBPWpJRHv2lfMrOa0QjqE\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2VDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLFdBQVcsR0FBR0MsMENBQW9DO0FBQ3hELE1BQU1HLGVBQWUsR0FBR0gsa05BQXlDO0FBRTFELE1BQU1LLFFBQVEsR0FBR1AsbUVBQVksQ0FBQ0MsV0FBVyxFQUFFSSxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vwa2VwdC1ob21lcGFnZS8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcz81ZjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTsiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VBbm9uS2V5IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJzdXBhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/supabaseClient.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabaseClient */ \"./lib/supabaseClient.js\");\n\n// pages/login.js\n\n\n\nfunction Login() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { data: { subscription  } ,  } = _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange(async (event, session)=>{\n            if (event === \"SIGNED_IN\" && session?.user) {\n                const user = session.user;\n                // Attempt to upsert user into the 'customers' table\n                const { error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"customers\").upsert({\n                    user_id: user.id,\n                    email: user.email,\n                    full_name: user.user_metadata?.full_name || user.email\n                }, {\n                    onConflict: \"user_id\"\n                });\n                if (error) {\n                    console.error(\"Upsert error:\", error.message);\n                }\n                router.push(\"/dashboard\");\n            }\n        });\n        return ()=>{\n            subscription.unsubscribe();\n        };\n    }, [\n        router\n    ]);\n    const signInWithGoogle = async ()=>{\n        const { error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signInWithOAuth({\n            provider: \"google\",\n            options: {\n                redirectTo: \"http://localhost:3000/dashboard\"\n            }\n        });\n        if (error) console.error(\"Login error:\", error.message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex items-center justify-center bg-gray-50 px-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md w-full bg-white p-8 rounded-lg shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold mb-6 text-center\",\n                    children: \"Sign in to Upkept\"\n                }, void 0, false, {\n                    fileName: \"/Users/nick.donaldson/Documents/upkept-app/pages/login.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: signInWithGoogle,\n                    className: \"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-sm transition\",\n                    children: \"Sign in with Google\"\n                }, void 0, false, {\n                    fileName: \"/Users/nick.donaldson/Documents/upkept-app/pages/login.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nick.donaldson/Documents/upkept-app/pages/login.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nick.donaldson/Documents/upkept-app/pages/login.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBREEsaUJBQWlCO0FBQ2lCO0FBQ007QUFDUztBQUVsQyxTQUFTRyxLQUFLLEdBQUc7SUFDOUIsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBRTFCRCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNLEVBQ0pLLElBQUksRUFBRSxFQUFFQyxZQUFZLEdBQUUsS0FDdkIsR0FBR0osZ0ZBQStCLENBQUMsT0FBT08sS0FBSyxFQUFFQyxPQUFPLEdBQUs7WUFDNUQsSUFBSUQsS0FBSyxLQUFLLFdBQVcsSUFBSUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7Z0JBQzFDLE1BQU1BLElBQUksR0FBR0QsT0FBTyxDQUFDQyxJQUFJO2dCQUV6QixvREFBb0Q7Z0JBQ3BELE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUcsTUFBTVYsOERBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1ksTUFBTSxDQUN2RDtvQkFDRUMsT0FBTyxFQUFFSixJQUFJLENBQUNLLEVBQUU7b0JBQ2hCQyxLQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FBSztvQkFDakJDLFNBQVMsRUFBRVAsSUFBSSxDQUFDUSxhQUFhLEVBQUVELFNBQVMsSUFBSVAsSUFBSSxDQUFDTSxLQUFLO2lCQUN2RCxFQUNEO29CQUFFRyxVQUFVLEVBQUUsU0FBUztpQkFBRSxDQUMxQjtnQkFFRCxJQUFJUixLQUFLLEVBQUU7b0JBQ1RTLE9BQU8sQ0FBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRUEsS0FBSyxDQUFDVSxPQUFPLENBQUMsQ0FBQztpQkFDL0M7Z0JBRURsQixNQUFNLENBQUNtQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0I7U0FDRixDQUFDO1FBRUYsT0FBTyxJQUFNO1lBQ1hqQixZQUFZLENBQUNrQixXQUFXLEVBQUUsQ0FBQztTQUM1QixDQUFDO0tBQ0gsRUFBRTtRQUFDcEIsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLE1BQU1xQixnQkFBZ0IsR0FBRyxVQUFZO1FBQ25DLE1BQU0sRUFBRWIsS0FBSyxHQUFFLEdBQUcsTUFBTVYsOEVBQTZCLENBQUM7WUFDcER5QixRQUFRLEVBQUUsUUFBUTtZQUNsQkMsT0FBTyxFQUFFO2dCQUNQQyxVQUFVLEVBQUUsaUNBQWlDO2FBQzlDO1NBQ0YsQ0FBQztRQUNGLElBQUlqQixLQUFLLEVBQUVTLE9BQU8sQ0FBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRUEsS0FBSyxDQUFDVSxPQUFPLENBQUMsQ0FBQztLQUN6RDtJQUVELHFCQUNFLDhEQUFDUSxNQUFJO1FBQUNDLFNBQVMsRUFBQywrREFBK0Q7a0JBQzdFLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxtREFBbUQ7OzhCQUNoRSw4REFBQ0UsSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLHFDQUFxQzs4QkFBQyxtQkFBaUI7Ozs7O3dCQUFLOzhCQUMxRSw4REFBQ0csUUFBTTtvQkFDTEMsT0FBTyxFQUFFVixnQkFBZ0I7b0JBQ3pCTSxTQUFTLEVBQUMsZ0dBQWdHOzhCQUMzRyxxQkFFRDs7Ozs7d0JBQVM7Ozs7OztnQkFDTDs7Ozs7WUFDRCxDQUNQO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cGtlcHQtaG9tZXBhZ2UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2xvZ2luLmpzXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgc3Vic2NyaXB0aW9uIH0sXG4gICAgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoYXN5bmMgKGV2ZW50LCBzZXNzaW9uKSA9PiB7XG4gICAgICBpZiAoZXZlbnQgPT09ICdTSUdORURfSU4nICYmIHNlc3Npb24/LnVzZXIpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHNlc3Npb24udXNlcjtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIHVwc2VydCB1c2VyIGludG8gdGhlICdjdXN0b21lcnMnIHRhYmxlXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2N1c3RvbWVycycpLnVwc2VydChcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBmdWxsX25hbWU6IHVzZXIudXNlcl9tZXRhZGF0YT8uZnVsbF9uYW1lIHx8IHVzZXIuZW1haWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG9uQ29uZmxpY3Q6ICd1c2VyX2lkJyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVXBzZXJ0IGVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG5cbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25JbldpdGhPQXV0aCh7XG4gICAgICBwcm92aWRlcjogJ2dvb2dsZScsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlZGlyZWN0VG86ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaGJvYXJkJywgLy8g4pyFIGVuc3VyZXMgY29ycmVjdCByZWRpcmVjdCBhZnRlciBsb2dpblxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoZXJyb3IpIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTAgcHgtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlclwiPlNpZ24gaW4gdG8gVXBrZXB0PC9oMj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcHktMyByb3VuZGVkLW1kIGZvbnQtbWVkaXVtIHRleHQtc20gdHJhbnNpdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICBTaWduIGluIHdpdGggR29vZ2xlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIkxvZ2luIiwicm91dGVyIiwiZGF0YSIsInN1YnNjcmlwdGlvbiIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsImV2ZW50Iiwic2Vzc2lvbiIsInVzZXIiLCJlcnJvciIsImZyb20iLCJ1cHNlcnQiLCJ1c2VyX2lkIiwiaWQiLCJlbWFpbCIsImZ1bGxfbmFtZSIsInVzZXJfbWV0YWRhdGEiLCJvbkNvbmZsaWN0IiwiY29uc29sZSIsIm1lc3NhZ2UiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aE9BdXRoIiwicHJvdmlkZXIiLCJvcHRpb25zIiwicmVkaXJlY3RUbyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();