/*! For license information please see main.c243a6cf0546cee0f6ed.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Navbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _react_icons_all_files_bs_BsMoon_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-icons/all-files/bs/BsMoon.esm.js */ "./node_modules/@react-icons/all-files/bs/BsMoon.esm.js");\n/* harmony import */ var _react_icons_all_files_bs_BsSun_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-icons/all-files/bs/BsSun.esm.js */ "./node_modules/@react-icons/all-files/bs/BsSun.esm.js");\n/* harmony import */ var _react_icons_all_files_fa_FaHamburger_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-icons/all-files/fa/FaHamburger.esm.js */ "./node_modules/@react-icons/all-files/fa/FaHamburger.esm.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\nfunction Navbar(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\'dark\'),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      DarkMode = _useState2[0],\n      ChangeDarkMode = _useState2[1];\n\n  function handleDarkModeChange() {\n    var element = document.getElementById(\'main\');\n\n    if (DarkMode == \'dark\') {\n      element.classList.remove(\'dark\');\n      element.classList.add(\'light\');\n      ChangeDarkMode(\'light\');\n    } else {\n      element.classList.remove(\'light\');\n      element.classList.add(\'dark\');\n      ChangeDarkMode(\'dark\');\n    }\n  }\n\n  function renderSwitch() {\n    if (DarkMode == \'dark\') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_icons_all_files_bs_BsSun_esm_js__WEBPACK_IMPORTED_MODULE_2__.BsSun, {\n        className: "w-7 h-7 text-white dark:text-dark-gray m-auto"\n      });\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_icons_all_files_bs_BsMoon_esm_js__WEBPACK_IMPORTED_MODULE_3__.BsMoon, {\n        className: "w-7 h-7 text-white dark:text-dark-gray m-auto"\n      });\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "fixed top-0 flex z-30 bg-clip-padding backdrop-filter dark:bg-clip-padding dark:backdrop-filter bg-yellow-100 dark:bg-gray-800 dark:backdrop-blur-lg dark:bg-opacity-40 backdrop-blur-lg bg-opacity-40 items-center px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {\n    href: "/#home",\n    className: "flex dark:text-gray-200 text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_icons_all_files_fa_FaHamburger_esm_js__WEBPACK_IMPORTED_MODULE_4__.FaHamburger, {\n    className: "w-10 h-10"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "ml-2 sm:flex hidden transition-all text-2xl font-semibold"\n  }, "Job Board")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "h-full flex w-auto text-gray-800 dark:text-gray-400 text-sm sm:text-base items-center my-auto ml-8 mr-auto   "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {\n    href: "/#about_me",\n    className: "hover:scale-105 transition-all font-semibold"\n  }, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {\n    href: "/#contact",\n    className: "hover:scale-105 ml-8 transition-all font-semibold"\n  }, props.cart)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    onClick: handleDarkModeChange,\n    className: "w-12 h-12 hover:scale-105 transition-all bg-dark-gray duration-300 rounded-lg flex dark:bg-yellow-200"\n  }, renderSwitch(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "absolute right-0 bot"\n  }, props.cart)));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Navbar.js?')}},(function(_){_.h=()=>"030183cb9280250c2ce1"}));