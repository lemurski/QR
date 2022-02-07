/*! For license information please see main.7319a05692dd4a392399.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./node_modules/@react-icons/all-files/md/MdAddShoppingCart.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MdAddShoppingCart": () => (/* binding */ MdAddShoppingCart)\n/* harmony export */ });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js");\n// THIS FILE IS AUTO GENERATED\n\nfunction MdAddShoppingCart (props) {\n  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}}]})(props);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/@react-icons/all-files/md/MdAddShoppingCart.esm.js?')},"./src/components/Homepage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Homepage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _react_icons_all_files_md_MdAddShoppingCart_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-icons/all-files/md/MdAddShoppingCart.esm.js */ "./node_modules/@react-icons/all-files/md/MdAddShoppingCart.esm.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Homepage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Menu = _useState2[0],\n      SetMenu = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),\n      Item = _useState4[0],\n      SetItem = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),\n      Displayed = _useState6[0],\n      SetDisplayed = _useState6[1];\n\n  var DisplayItem = function DisplayItem(e) {\n    SetItem(Menu[e.target.value]);\n    Displayed ? SetDisplayed(false) : SetDisplayed(true);\n  };\n\n  var CloseDetails = function CloseDetails() {\n    SetDisplayed(false);\n  };\n\n  var FetchMenu = function FetchMenu() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\'/api/menu\').then(function (response) {\n      console.log(response.data);\n      SetMenu(response.data);\n    });\n  };\n\n  var showMenu = Menu.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {\n      className: "text-dark-gray text-xl font-semibold"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_icons_all_files_md_MdAddShoppingCart_esm_js__WEBPACK_IMPORTED_MODULE_3__.MdAddShoppingCart, {\n      value: key,\n      onClick: DisplayItem,\n      className: "absolute transition-all text-sm font-semibold w-10 h-10 text-black hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-"\n    }));\n  });\n\n  var ItemDetails = function ItemDetails() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      onClick: CloseDetails,\n      className: "top-0 z-20 left-0 bottom-0 right-0 fixed bg-gray-500/25"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "absolute rounded items-center p-4 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[39rem] bg-gray-50"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "text-xl font-semibold"\n    }, Item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "mt-2 rounded-md w-52 h-auto",\n      src: Item.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "mt-2"\n    }, Item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {\n      className: "p-[0.3rem] border-2 mt-auto mb-0 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    FetchMenu();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), Displayed ? ItemDetails() : null);\n}\n\n//# sourceURL=webpack://frontend/./src/components/Homepage.js?')}},(function(_){_.h=()=>"4eac9f1417c46d3042d8"}));