/*! For license information please see main.ee66a552e92f35a23db2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Cart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n\n\n\nfunction Cart(props) {\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect = (function () {\n    press;\n  }, []);\n\n  var press = function press() {\n    console.log(location);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    cartlen: location.state.cartlen\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: press\n  }, "BUTTON"));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Cart.js?')}},(function(_){_.h=()=>"c9527cdde389f9900f8c"}));