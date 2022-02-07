/*! For license information please see main.943bc902366f2e3301fa.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Homepage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Homepage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ */ "./node_modules/react-icons/lib/esm/index.js");\n\n\n\n\nfunction Homepage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Menu = _useState2[0],\n      SetMenu = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),\n      Item = _useState4[0],\n      SetItem = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),\n      Displayed = _useState6[0],\n      SetDisplayed = _useState6[1];\n\n  var DisplayItem = function DisplayItem(e) {\n    SetItem(Menu[e.target.value]);\n    Displayed ? SetDisplayed(false) : SetDisplayed(true);\n  };\n\n  var CloseDetails = function CloseDetails() {\n    SetDisplayed(false);\n  };\n\n  var FetchMenu = function FetchMenu() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\'/api/menu\').then(function (response) {\n      console.log(response.data);\n      SetMenu(response.data);\n    });\n  };\n\n  var showMenu = Menu.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {\n      className: "text-dark-gray text-xl font-semibold"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons___WEBPACK_IMPORTED_MODULE_3__.MdAddShoppingCart, {\n      value: key,\n      onClick: DisplayItem,\n      className: "absolute transition-all text-sm font-semibold w-10 h-10 text-black hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md"\n    }));\n  });\n\n  var ItemDetails = function ItemDetails() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      onClick: CloseDetails,\n      className: "top-0 z-20 left-0 bottom-0 right-0 fixed bg-gray-500/25"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "absolute rounded items-center p-4 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[39rem] bg-gray-50"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "text-xl font-semibold"\n    }, Item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "mt-2 rounded-md w-52 h-auto",\n      src: Item.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "mt-2"\n    }, Item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {\n      className: "p-[0.3rem] border-2 mt-auto mb-0 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    FetchMenu();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), Displayed ? ItemDetails() : null);\n}\n\n//# sourceURL=webpack://frontend/./src/components/Homepage.js?')},"./node_modules/react-icons/lib/esm/iconBase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GenIcon": () => (/* binding */ GenIcon),\n/* harmony export */   "IconBase": () => (/* binding */ IconBase)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nvar __rest = undefined && undefined.__rest || function (s, e) {\n  var t = {};\n\n  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n\n  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];\n  }\n  return t;\n};\n\n\n\n\nfunction Tree2Element(tree) {\n  return tree && tree.map(function (node, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.tag, __assign({\n      key: i\n    }, node.attr), Tree2Element(node.child));\n  });\n}\n\nfunction GenIcon(data) {\n  return function (props) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconBase, __assign({\n      attr: __assign({}, data.attr)\n    }, props), Tree2Element(data.child));\n  };\n}\nfunction IconBase(props) {\n  var elem = function (conf) {\n    var attr = props.attr,\n        size = props.size,\n        title = props.title,\n        svgProps = __rest(props, ["attr", "size", "title"]);\n\n    var computedSize = size || conf.size || "1em";\n    var className;\n    if (conf.className) className = conf.className;\n    if (props.className) className = (className ? className + \' \' : \'\') + props.className;\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({\n      stroke: "currentColor",\n      fill: "currentColor",\n      strokeWidth: "0"\n    }, conf.attr, attr, svgProps, {\n      className: className,\n      style: __assign(__assign({\n        color: props.color || conf.color\n      }, conf.style), props.style),\n      height: computedSize,\n      width: computedSize,\n      xmlns: "http://www.w3.org/2000/svg"\n    }), title && react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), props.children);\n  };\n\n  return _iconContext__WEBPACK_IMPORTED_MODULE_1__.IconContext !== undefined ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconContext__WEBPACK_IMPORTED_MODULE_1__.IconContext.Consumer, null, function (conf) {\n    return elem(conf);\n  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__.DefaultContext);\n}\n\n//# sourceURL=webpack://frontend/./node_modules/react-icons/lib/esm/iconBase.js?')},"./node_modules/react-icons/lib/esm/iconContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "DefaultContext": () => (/* binding */ DefaultContext),\n/* harmony export */   "IconContext": () => (/* binding */ IconContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar DefaultContext = {\n  color: undefined,\n  size: undefined,\n  className: undefined,\n  style: undefined,\n  attr: undefined\n};\nvar IconContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext && react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultContext);\n\n//# sourceURL=webpack://frontend/./node_modules/react-icons/lib/esm/iconContext.js?')},"./node_modules/react-icons/lib/esm/iconsManifest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "IconsManifest": () => (/* binding */ IconsManifest)\n/* harmony export */ });\nvar IconsManifest = [\n  {\n    "id": "fa",\n    "name": "Font Awesome",\n    "projectUrl": "https://fontawesome.com/",\n    "license": "CC BY 4.0 License",\n    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"\n  },\n  {\n    "id": "io",\n    "name": "Ionicons 4",\n    "projectUrl": "https://ionicons.com/",\n    "license": "MIT",\n    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"\n  },\n  {\n    "id": "io5",\n    "name": "Ionicons 5",\n    "projectUrl": "https://ionicons.com/",\n    "license": "MIT",\n    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"\n  },\n  {\n    "id": "md",\n    "name": "Material Design icons",\n    "projectUrl": "http://google.github.io/material-design-icons/",\n    "license": "Apache License Version 2.0",\n    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"\n  },\n  {\n    "id": "ti",\n    "name": "Typicons",\n    "projectUrl": "http://s-ings.com/typicons/",\n    "license": "CC BY-SA 3.0",\n    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"\n  },\n  {\n    "id": "go",\n    "name": "Github Octicons icons",\n    "projectUrl": "https://octicons.github.com/",\n    "license": "MIT",\n    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"\n  },\n  {\n    "id": "fi",\n    "name": "Feather",\n    "projectUrl": "https://feathericons.com/",\n    "license": "MIT",\n    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"\n  },\n  {\n    "id": "gi",\n    "name": "Game Icons",\n    "projectUrl": "https://game-icons.net/",\n    "license": "CC BY 3.0",\n    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"\n  },\n  {\n    "id": "wi",\n    "name": "Weather Icons",\n    "projectUrl": "https://erikflowers.github.io/weather-icons/",\n    "license": "SIL OFL 1.1",\n    "licenseUrl": "http://scripts.sil.org/OFL"\n  },\n  {\n    "id": "di",\n    "name": "Devicons",\n    "projectUrl": "https://vorillaz.github.io/devicons/",\n    "license": "MIT",\n    "licenseUrl": "https://opensource.org/licenses/MIT"\n  },\n  {\n    "id": "ai",\n    "name": "Ant Design Icons",\n    "projectUrl": "https://github.com/ant-design/ant-design-icons",\n    "license": "MIT",\n    "licenseUrl": "https://opensource.org/licenses/MIT"\n  },\n  {\n    "id": "bs",\n    "name": "Bootstrap Icons",\n    "projectUrl": "https://github.com/twbs/icons",\n    "license": "MIT",\n    "licenseUrl": "https://opensource.org/licenses/MIT"\n  },\n  {\n    "id": "ri",\n    "name": "Remix Icon",\n    "projectUrl": "https://github.com/Remix-Design/RemixIcon",\n    "license": "Apache License Version 2.0",\n    "licenseUrl": "http://www.apache.org/licenses/"\n  },\n  {\n    "id": "fc",\n    "name": "Flat Color Icons",\n    "projectUrl": "https://github.com/icons8/flat-color-icons",\n    "license": "MIT",\n    "licenseUrl": "https://opensource.org/licenses/MIT"\n  },\n  {\n    "id": "gr",\n    "name": "Grommet-Icons",\n    "projectUrl": "https://github.com/grommet/grommet-icons",\n    "license": "Apache License Version 2.0",\n    "licenseUrl": "http://www.apache.org/licenses/"\n  },\n  {\n    "id": "hi",\n    "name": "Heroicons",\n    "projectUrl": "https://github.com/tailwindlabs/heroicons",\n    "license": "MIT",\n    "licenseUrl": "https://opensource.org/licenses/MIT"\n  },\n  {\n    "id": "si",\n    "name": "Simple Icons",\n    "projectUrl": "https://simpleicons.org/",\n    "license": "CC0 1.0 Universal",\n    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"\n  },\n  {\n    "id": "im",\n    "name": "IcoMoon Free",\n    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",\n    "license": "CC BY 4.0 License"\n  },\n  {\n    "id": "bi",\n    "name": "BoxIcons",\n    "projectUrl": "https://github.com/atisawd/boxicons",\n    "license": "CC BY 4.0 License"\n  },\n  {\n    "id": "cg",\n    "name": "css.gg",\n    "projectUrl": "https://github.com/astrit/css.gg",\n    "license": "MIT",\n    "licenseUrl": "https://opensource.org/licenses/MIT"\n  },\n  {\n    "id": "vsc",\n    "name": "VS Code Icons",\n    "projectUrl": "https://github.com/microsoft/vscode-codicons",\n    "license": "CC BY 4.0",\n    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"\n  }\n]\n\n//# sourceURL=webpack://frontend/./node_modules/react-icons/lib/esm/iconsManifest.js?')},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "IconsManifest": () => (/* reexport safe */ _iconsManifest__WEBPACK_IMPORTED_MODULE_0__.IconsManifest),\n/* harmony export */   "GenIcon": () => (/* reexport safe */ _iconBase__WEBPACK_IMPORTED_MODULE_1__.GenIcon),\n/* harmony export */   "IconBase": () => (/* reexport safe */ _iconBase__WEBPACK_IMPORTED_MODULE_1__.IconBase),\n/* harmony export */   "DefaultContext": () => (/* reexport safe */ _iconContext__WEBPACK_IMPORTED_MODULE_2__.DefaultContext),\n/* harmony export */   "IconContext": () => (/* reexport safe */ _iconContext__WEBPACK_IMPORTED_MODULE_2__.IconContext)\n/* harmony export */ });\n/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/esm/iconsManifest.js");\n/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/esm/iconBase.js");\n/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");\n\n\n\n\n//# sourceURL=webpack://frontend/./node_modules/react-icons/lib/esm/index.js?')}},(function(e){e.h=()=>"7319a05692dd4a392399"}));