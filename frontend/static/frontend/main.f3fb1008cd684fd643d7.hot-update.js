/*! For license information please see main.f3fb1008cd684fd643d7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/CheckoutForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CheckoutForm)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\nfunction CheckoutForm() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\'\'),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),\n      email = _useState4[0],\n      setEmail = _useState4[1];\n\n  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();\n  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();\n\n  var handleChange = function handleChange(event) {\n    if (event.error) {\n      setError(event.error.message);\n    } else {\n      setError(null);\n    }\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n\n            case 1:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("form", {\n    onSubmit: handleSubmit,\n    className: "p-3 w-[95%] mb-20 h-3/4 flex-grow rounded-md bg-gray-50"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {\n    htmlFor: "email",\n    className: "ml-[2px]"\n  }, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {\n    type: "email",\n    placeholder: "jenny.rosen@example.com",\n    autoComplete: "off",\n    required: true,\n    id: "email",\n    value: email,\n    onChange: function onChange(event) {\n      setEmail(event.target.value);\n    },\n    className: " mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {\n    className: "ml-[2px] mt-1",\n    htmlFor: "card-element"\n  }, "Credit or debit card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {\n    className: "mt-1 shadow-md p-3",\n    id: "card-element",\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {\n    role: "alert"\n  }, error));\n}\n\n//# sourceURL=webpack://frontend/./src/components/CheckoutForm.js?')},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":(module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e */ \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e */ \"data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e */ \"data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e */ \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\\n\\n/*\\nDocument\\n========\\n*/\\n\\n/**\\nUse a better box model (opinionated).\\n*/\\n\\n*,\\n::before,\\n::after {\\n\\tbox-sizing: border-box;\\n}\\n\\n/**\\nUse a more readable tab size (opinionated).\\n*/\\n\\nhtml {\\n\\t-moz-tab-size: 4;\\n\\ttab-size: 4;\\n}\\n\\n/**\\n1. Correct the line height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n*/\\n\\nhtml {\\n\\tline-height: 1.15; /* 1 */\\n\\t-webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/*\\nSections\\n========\\n*/\\n\\n/**\\nRemove the margin in all browsers.\\n*/\\n\\nbody {\\n\\tmargin: 0;\\n}\\n\\n/**\\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n*/\\n\\nbody {\\n\\tfont-family:\\n\\t\\tsystem-ui,\\n\\t\\t-apple-system, /* Firefox supports this but not yet `system-ui` */\\n\\t\\t'Segoe UI',\\n\\t\\tRoboto,\\n\\t\\tHelvetica,\\n\\t\\tArial,\\n\\t\\tsans-serif,\\n\\t\\t'Apple Color Emoji',\\n\\t\\t'Segoe UI Emoji';\\n}\\n\\n/*\\nGrouping content\\n================\\n*/\\n\\n/**\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n*/\\n\\nhr {\\n\\theight: 0; /* 1 */\\n\\tcolor: inherit; /* 2 */\\n}\\n\\n/*\\nText-level semantics\\n====================\\n*/\\n\\n/**\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr[title] {\\n\\ttext-decoration: underline dotted;\\n}\\n\\n/**\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n\\tfont-weight: bolder;\\n}\\n\\n/**\\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n2. Correct the odd 'em' font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n\\tfont-family:\\n\\t\\tui-monospace,\\n\\t\\tSFMono-Regular,\\n\\t\\tConsolas,\\n\\t\\t'Liberation Mono',\\n\\t\\tMenlo,\\n\\t\\tmonospace; /* 1 */\\n\\tfont-size: 1em; /* 2 */\\n}\\n\\n/**\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n\\tfont-size: 80%;\\n}\\n\\n/**\\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n\\tfont-size: 75%;\\n\\tline-height: 0;\\n\\tposition: relative;\\n\\tvertical-align: baseline;\\n}\\n\\nsub {\\n\\tbottom: -0.25em;\\n}\\n\\nsup {\\n\\ttop: -0.5em;\\n}\\n\\n/*\\nTabular data\\n============\\n*/\\n\\n/**\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n*/\\n\\ntable {\\n\\ttext-indent: 0; /* 1 */\\n\\tborder-color: inherit; /* 2 */\\n}\\n\\n/*\\nForms\\n=====\\n*/\\n\\n/**\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n\\tfont-family: inherit; /* 1 */\\n\\tfont-size: 100%; /* 1 */\\n\\tline-height: 1.15; /* 1 */\\n\\tmargin: 0; /* 2 */\\n}\\n\\n/**\\nRemove the inheritance of text transform in Edge and Firefox.\\n1. Remove the inheritance of text transform in Firefox.\\n*/\\n\\nbutton,\\nselect { /* 1 */\\n\\ttext-transform: none;\\n}\\n\\n/**\\nCorrect the inability to style clickable types in iOS and Safari.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n\\t-webkit-appearance: button;\\n}\\n\\n/**\\nRemove the inner border and padding in Firefox.\\n*/\\n\\n::-moz-focus-inner {\\n\\tborder-style: none;\\n\\tpadding: 0;\\n}\\n\\n/**\\nRestore the focus styles unset by the previous rule.\\n*/\\n\\n:-moz-focusring {\\n\\toutline: 1px dotted ButtonText;\\n}\\n\\n/**\\nRemove the additional ':invalid' styles in Firefox.\\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\\n*/\\n\\n:-moz-ui-invalid {\\n\\tbox-shadow: none;\\n}\\n\\n/**\\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\\n*/\\n\\nlegend {\\n\\tpadding: 0;\\n}\\n\\n/**\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n\\tvertical-align: baseline;\\n}\\n\\n/**\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n\\theight: auto;\\n}\\n\\n/**\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n\\t-webkit-appearance: textfield; /* 1 */\\n\\toutline-offset: -2px; /* 2 */\\n}\\n\\n/**\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n\\t-webkit-appearance: none;\\n}\\n\\n/**\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to 'inherit' in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n\\t-webkit-appearance: button; /* 1 */\\n\\tfont: inherit; /* 2 */\\n}\\n\\n/*\\nInteractive\\n===========\\n*/\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n\\tdisplay: list-item;\\n}/**\\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\\n * A thin layer on top of normalize.css that provides a starting point more\\n * suitable for web applications.\\n */\\n\\n/**\\n * Removes the default spacing and border for appropriate elements.\\n */\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  background-image: none;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/**\\n * Tailwind custom reset styles\\n */\\n\\n/**\\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\\n *    sans-serif font stack as a fallback) as a sane default.\\n * 2. Use Tailwind's default \\\"normal\\\" line-height so the user isn't forced\\n *    to override it to ensure consistency even when using the default theme.\\n */\\n\\nhtml {\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 1 */\\n  line-height: 1.5; /* 2 */\\n}\\n\\n\\n/**\\n * Inherit font-family and line-height from `html` so users can set them as\\n * a class directly on the `html` element.\\n */\\n\\nbody {\\n  font-family: inherit;\\n  line-height: inherit;\\n}\\n\\n/**\\n * 1. Prevent padding and border from affecting element width.\\n *\\n *    We used to set this in the html element and inherit from\\n *    the parent element for everything else. This caused issues\\n *    in shadow-dom-enhanced elements like <details> where the content\\n *    is wrapped by a div with box-sizing set to `content-box`.\\n *\\n *    https://github.com/mozdevs/cssremedy/issues/4\\n *\\n *\\n * 2. Allow adding a border to an element by just adding a border-width.\\n *\\n *    By default, the way the browser specifies that an element should have no\\n *    border is by setting it's border-style to `none` in the user-agent\\n *    stylesheet.\\n *\\n *    In order to easily add borders to elements by just setting the `border-width`\\n *    property, we change the default border-style for all elements to `solid`, and\\n *    use border-width to hide them instead. This way our `border` utilities only\\n *    need to set the `border-width` property instead of the entire `border`\\n *    shorthand, making our border utilities much more straightforward to compose.\\n *\\n *    https://github.com/tailwindcss/tailwindcss/pull/116\\n */\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: currentColor; /* 2 */\\n}\\n\\n/*\\n * Ensure horizontal rules are visible by default\\n */\\n\\nhr {\\n  border-top-width: 1px;\\n}\\n\\n/**\\n * Undo the `border-style: none` reset that Normalize applies to images so that\\n * our `border-{width}` utilities have the expected effect.\\n *\\n * The Normalize reset is unnecessary for us since we default the border-width\\n * to 0 on all elements.\\n *\\n * https://github.com/tailwindcss/tailwindcss/issues/362\\n */\\n\\nimg {\\n  border-style: solid;\\n}\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1;\\n  color: #9ca3af;\\n}\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/**\\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\\n *\\n * This is actually an improvement over the new defaults in Firefox in our testing,\\n * as it triggers the better focus styles even for links, which still use a dotted\\n * outline in Firefox by default.\\n */\\n \\n:-moz-focusring {\\n\\toutline: auto;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/**\\n * Reset links to optimize for opt-in styling instead of\\n * opt-out.\\n */\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/**\\n * Reset form element properties that are easy to forget to\\n * style explicitly so you don't inadvertently introduce\\n * styles that deviate from your design system. These styles\\n * supplement a partial reset that is already applied by\\n * normalize.css.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  padding: 0;\\n  line-height: inherit;\\n  color: inherit;\\n}\\n\\n/**\\n * Use the configured 'mono' font family for elements that\\n * are expected to be rendered with a monospace font, falling\\n * back to the system monospace stack if there is no configured\\n * 'mono' font family.\\n */\\n\\npre,\\ncode,\\nkbd,\\nsamp {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n}\\n\\n/**\\n * 1. Make replaced elements `display: block` by default as that's\\n *    the behavior you want almost all of the time. Inspired by\\n *    CSS Remedy, with `svg` added as well.\\n *\\n *    https://github.com/mozdevs/cssremedy/issues/14\\n * \\n * 2. Add `vertical-align: middle` to align replaced elements more\\n *    sensibly by default when overriding `display` by adding a\\n *    utility like `inline`.\\n *\\n *    This can trigger a poorly considered linting error in some\\n *    tools but is included by design.\\n * \\n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\\n */\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/**\\n * Constrain images and videos to the parent width and preserve\\n * their intrinsic aspect ratio.\\n *\\n * https://github.com/mozdevs/cssremedy/issues/14\\n */\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/**\\n * Ensure the default browser behavior of the `hidden` attribute.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\\n*, ::before, ::after {\\n\\t--tw-translate-x: 0;\\n\\t--tw-translate-y: 0;\\n\\t--tw-rotate: 0;\\n\\t--tw-skew-x: 0;\\n\\t--tw-skew-y: 0;\\n\\t--tw-scale-x: 1;\\n\\t--tw-scale-y: 1;\\n\\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\\n\\t--tw-ring-offset-shadow: 0 0 #0000;\\n\\t--tw-ring-shadow: 0 0 #0000;\\n\\t--tw-shadow: 0 0 #0000;\\n\\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-ring-offset-width: 0px;\\n\\t--tw-ring-offset-color: #fff;\\n\\t--tw-ring-color: rgba(59, 130, 246, 0.5);\\n\\t--tw-ring-offset-shadow: 0 0 #0000;\\n\\t--tw-ring-shadow: 0 0 #0000;\\n\\t--tw-shadow: 0 0 #0000;\\n\\t--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n}\\n\\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\\n\\tappearance: none;\\n\\tbackground-color: #fff;\\n\\tborder-color: #6b7280;\\n\\tborder-width: 1px;\\n\\tborder-radius: 0px;\\n\\tpadding-top: 0.5rem;\\n\\tpadding-right: 0.75rem;\\n\\tpadding-bottom: 0.5rem;\\n\\tpadding-left: 0.75rem;\\n\\tfont-size: 1rem;\\n\\tline-height: 1.5rem;\\n\\t--tw-shadow: 0 0 #0000;\\n}\\n\\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\\n\\toutline: 2px solid transparent;\\n\\toutline-offset: 2px;\\n\\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-ring-offset-width: 0px;\\n\\t--tw-ring-offset-color: #fff;\\n\\t--tw-ring-color: #2563eb;\\n\\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n\\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n\\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\\n\\tborder-color: #2563eb;\\n}\\n\\ninput::placeholder,textarea::placeholder {\\n\\tcolor: #6b7280;\\n\\topacity: 1;\\n}\\n\\n::-webkit-datetime-edit-fields-wrapper {\\n\\tpadding: 0;\\n}\\n\\n::-webkit-date-and-time-value {\\n\\tmin-height: 1.5em;\\n}\\n\\nselect {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tbackground-position: right 0.5rem center;\\n\\tbackground-repeat: no-repeat;\\n\\tbackground-size: 1.5em 1.5em;\\n\\tpadding-right: 2.5rem;\\n\\tcolor-adjust: exact;\\n}\\n\\n[multiple] {\\n\\tbackground-image: initial;\\n\\tbackground-position: initial;\\n\\tbackground-repeat: unset;\\n\\tbackground-size: initial;\\n\\tpadding-right: 0.75rem;\\n\\tcolor-adjust: unset;\\n}\\n\\n[type='checkbox'],[type='radio'] {\\n\\tappearance: none;\\n\\tpadding: 0;\\n\\tcolor-adjust: exact;\\n\\tdisplay: inline-block;\\n\\tvertical-align: middle;\\n\\tbackground-origin: border-box;\\n\\tuser-select: none;\\n\\tflex-shrink: 0;\\n\\theight: 1rem;\\n\\twidth: 1rem;\\n\\tcolor: #2563eb;\\n\\tbackground-color: #fff;\\n\\tborder-color: #6b7280;\\n\\tborder-width: 1px;\\n\\t--tw-shadow: 0 0 #0000;\\n}\\n\\n[type='checkbox'] {\\n\\tborder-radius: 0px;\\n}\\n\\n[type='radio'] {\\n\\tborder-radius: 100%;\\n}\\n\\n[type='checkbox']:focus,[type='radio']:focus {\\n\\toutline: 2px solid transparent;\\n\\toutline-offset: 2px;\\n\\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-ring-offset-width: 2px;\\n\\t--tw-ring-offset-color: #fff;\\n\\t--tw-ring-color: #2563eb;\\n\\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n\\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n\\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\\n}\\n\\n[type='checkbox']:checked,[type='radio']:checked {\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n\\tbackground-size: 100% 100%;\\n\\tbackground-position: center;\\n\\tbackground-repeat: no-repeat;\\n}\\n\\n[type='checkbox']:checked {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n[type='radio']:checked {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n}\\n\\n[type='checkbox']:indeterminate {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n\\tbackground-size: 100% 100%;\\n\\tbackground-position: center;\\n\\tbackground-repeat: no-repeat;\\n}\\n\\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n}\\n\\n[type='file'] {\\n\\tbackground: unset;\\n\\tborder-color: inherit;\\n\\tborder-width: 0;\\n\\tborder-radius: 0;\\n\\tpadding: 0;\\n\\tfont-size: unset;\\n\\tline-height: inherit;\\n}\\n\\n[type='file']:focus {\\n\\toutline: 1px auto -webkit-focus-ring-color;\\n}\\r\\n.icon {\\n\\tmargin-right: 1rem;\\n\\theight: 1.75rem;\\n\\twidth: 1.75rem;\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(29, 29, 31, var(--tw-text-opacity));\\n}\\r\\n.dark .icon {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(96, 165, 250, var(--tw-text-opacity));\\n}\\r\\n.static {\\n\\tposition: static;\\n}\\r\\n.fixed {\\n\\tposition: fixed;\\n}\\r\\n.absolute {\\n\\tposition: absolute;\\n}\\r\\n.relative {\\n\\tposition: relative;\\n}\\r\\n.bottom-3 {\\n\\tbottom: 0.75rem;\\n}\\r\\n.right-3 {\\n\\tright: 0.75rem;\\n}\\r\\n.top-0 {\\n\\ttop: 0px;\\n}\\r\\n.left-0 {\\n\\tleft: 0px;\\n}\\r\\n.bottom-0 {\\n\\tbottom: 0px;\\n}\\r\\n.right-0 {\\n\\tright: 0px;\\n}\\r\\n.z-20 {\\n\\tz-index: 20;\\n}\\r\\n.z-50 {\\n\\tz-index: 50;\\n}\\r\\n.z-30 {\\n\\tz-index: 30;\\n}\\r\\n.m-auto {\\n\\tmargin: auto;\\n}\\r\\n.mx-auto {\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n}\\r\\n.my-auto {\\n\\tmargin-top: auto;\\n\\tmargin-bottom: auto;\\n}\\r\\n.mt-5 {\\n\\tmargin-top: 1.25rem;\\n}\\r\\n.mt-1 {\\n\\tmargin-top: 0.25rem;\\n}\\r\\n.mt-auto {\\n\\tmargin-top: auto;\\n}\\r\\n.mb-0 {\\n\\tmargin-bottom: 0px;\\n}\\r\\n.mr-0 {\\n\\tmargin-right: 0px;\\n}\\r\\n.ml-auto {\\n\\tmargin-left: auto;\\n}\\r\\n.mb-20 {\\n\\tmargin-bottom: 5rem;\\n}\\r\\n.ml-\\\\[2px\\\\] {\\n\\tmargin-left: 2px;\\n}\\r\\n.mt-2 {\\n\\tmargin-top: 0.5rem;\\n}\\r\\n.mt-10 {\\n\\tmargin-top: 2.5rem;\\n}\\r\\n.ml-2 {\\n\\tmargin-left: 0.5rem;\\n}\\r\\n.block {\\n\\tdisplay: block;\\n}\\r\\n.flex {\\n\\tdisplay: flex;\\n}\\r\\n.hidden {\\n\\tdisplay: none;\\n}\\r\\n.h-40 {\\n\\theight: 10rem;\\n}\\r\\n.h-16 {\\n\\theight: 4rem;\\n}\\r\\n.h-auto {\\n\\theight: auto;\\n}\\r\\n.h-44 {\\n\\theight: 11rem;\\n}\\r\\n.h-\\\\[39rem\\\\] {\\n\\theight: 39rem;\\n}\\r\\n.h-28 {\\n\\theight: 7rem;\\n}\\r\\n.h-7 {\\n\\theight: 1.75rem;\\n}\\r\\n.h-\\\\[4\\\\.25rem\\\\] {\\n\\theight: 4.25rem;\\n}\\r\\n.h-10 {\\n\\theight: 2.5rem;\\n}\\r\\n.h-12 {\\n\\theight: 3rem;\\n}\\r\\n.h-screen {\\n\\theight: 100vh;\\n}\\r\\n.h-5 {\\n\\theight: 1.25rem;\\n}\\r\\n.h-52 {\\n\\theight: 13rem;\\n}\\r\\n.h-3\\\\/4 {\\n\\theight: 75%;\\n}\\r\\n.min-h-screen {\\n\\tmin-height: 100vh;\\n}\\r\\n.w-\\\\[95\\\\%\\\\] {\\n\\twidth: 95%;\\n}\\r\\n.w-28 {\\n\\twidth: 7rem;\\n}\\r\\n.w-full {\\n\\twidth: 100%;\\n}\\r\\n.w-auto {\\n\\twidth: auto;\\n}\\r\\n.w-\\\\[22\\\\.5rem\\\\] {\\n\\twidth: 22.5rem;\\n}\\r\\n.w-52 {\\n\\twidth: 13rem;\\n}\\r\\n.w-7 {\\n\\twidth: 1.75rem;\\n}\\r\\n.w-10 {\\n\\twidth: 2.5rem;\\n}\\r\\n.w-12 {\\n\\twidth: 3rem;\\n}\\r\\n.w-\\\\[110\\\\%\\\\] {\\n\\twidth: 110%;\\n}\\r\\n.w-32 {\\n\\twidth: 8rem;\\n}\\r\\n.w-1\\\\/2 {\\n\\twidth: 50%;\\n}\\r\\n.flex-grow {\\n\\tflex-grow: 1;\\n}\\r\\n.cursor-pointer {\\n\\tcursor: pointer;\\n}\\r\\n.resize-none {\\n\\tresize: none;\\n}\\r\\n.flex-col {\\n\\tflex-direction: column;\\n}\\r\\n.items-center {\\n\\talign-items: center;\\n}\\r\\n.justify-center {\\n\\tjustify-content: center;\\n}\\r\\n.rounded-lg {\\n\\tborder-radius: 0.5rem;\\n}\\r\\n.rounded-md {\\n\\tborder-radius: 0.375rem;\\n}\\r\\n.rounded {\\n\\tborder-radius: 0.25rem;\\n}\\r\\n.rounded-xl {\\n\\tborder-radius: 0.75rem;\\n}\\r\\n.rounded-full {\\n\\tborder-radius: 9999px;\\n}\\r\\n.border-2 {\\n\\tborder-width: 2px;\\n}\\r\\n.border-gray-300 {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\\n}\\r\\n.border-blue-50 {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(239, 246, 255, var(--tw-border-opacity));\\n}\\r\\n.border-dark-gray {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(29, 29, 31, var(--tw-border-opacity));\\n}\\r\\n.bg-gray-50 {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(249, 250, 251, var(--tw-bg-opacity));\\n}\\r\\n.bg-light-yellow {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(252, 248, 240, var(--tw-bg-opacity));\\n}\\r\\n.bg-white {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\\n}\\r\\n.bg-gray-500\\\\/25 {\\n\\tbackground-color: rgba(107, 114, 128, 0.25);\\n}\\r\\n.bg-yellow-100 {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(254, 243, 199, var(--tw-bg-opacity));\\n}\\r\\n.bg-dark-gray {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(29, 29, 31, var(--tw-bg-opacity));\\n}\\r\\n.bg-green-400 {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(52, 211, 153, var(--tw-bg-opacity));\\n}\\r\\n.bg-opacity-40 {\\n\\t--tw-bg-opacity: 0.4;\\n}\\r\\n.bg-gradient-to-br {\\n\\tbackground-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\\n}\\r\\n.from-blue-400 {\\n\\t--tw-gradient-from: #60a5fa;\\n\\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0));\\n}\\r\\n.to-blue-800 {\\n\\t--tw-gradient-to: #1e40af;\\n}\\r\\n.bg-clip-padding {\\n\\tbackground-clip: padding-box;\\n}\\r\\n.p-3 {\\n\\tpadding: 0.75rem;\\n}\\r\\n.p-2 {\\n\\tpadding: 0.5rem;\\n}\\r\\n.p-\\\\[0\\\\.3rem\\\\] {\\n\\tpadding: 0.3rem;\\n}\\r\\n.p-4 {\\n\\tpadding: 1rem;\\n}\\r\\n.p-1 {\\n\\tpadding: 0.25rem;\\n}\\r\\n.px-\\\\[5\\\\%\\\\] {\\n\\tpadding-left: 5%;\\n\\tpadding-right: 5%;\\n}\\r\\n.py-3 {\\n\\tpadding-top: 0.75rem;\\n\\tpadding-bottom: 0.75rem;\\n}\\r\\n.py-4 {\\n\\tpadding-top: 1rem;\\n\\tpadding-bottom: 1rem;\\n}\\r\\n.text-center {\\n\\ttext-align: center;\\n}\\r\\n.text-2xl {\\n\\tfont-size: 1.5rem;\\n\\tline-height: 2rem;\\n}\\r\\n.text-sm {\\n\\tfont-size: 0.875rem;\\n\\tline-height: 1.25rem;\\n}\\r\\n.text-lg {\\n\\tfont-size: 1.125rem;\\n\\tline-height: 1.75rem;\\n}\\r\\n.text-xl {\\n\\tfont-size: 1.25rem;\\n\\tline-height: 1.75rem;\\n}\\r\\n.font-bold {\\n\\tfont-weight: 700;\\n}\\r\\n.font-semibold {\\n\\tfont-weight: 600;\\n}\\r\\n.leading-7 {\\n\\tline-height: 1.75rem;\\n}\\r\\n.leading-none {\\n\\tline-height: 1;\\n}\\r\\n.tracking-wider {\\n\\tletter-spacing: 0.05em;\\n}\\r\\n.text-gray-900 {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\\n}\\r\\n.text-white {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\r\\n.text-dark-gray {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(29, 29, 31, var(--tw-text-opacity));\\n}\\r\\n.shadow-sm {\\n\\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n.shadow-md {\\n\\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n.backdrop-blur-lg {\\n\\t--tw-backdrop-blur: blur(16px);\\n\\tbackdrop-filter: var(--tw-backdrop-filter);\\n}\\r\\n.backdrop-filter {\\n\\tbackdrop-filter: var(--tw-backdrop-filter);\\n}\\r\\n.transition-all {\\n\\ttransition-property: all;\\n\\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\ttransition-duration: 150ms;\\n}\\r\\n.duration-500 {\\n\\ttransition-duration: 500ms;\\n}\\r\\n.duration-300 {\\n\\ttransition-duration: 300ms;\\n}\\r\\n.duration-200 {\\n\\ttransition-duration: 200ms;\\n}\\r\\n.ease-in-out {\\n\\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n}\\r\\n.ease-in {\\n\\ttransition-timing-function: cubic-bezier(0.4, 0, 1, 1);\\n}\\r\\n\\r\\n.hover\\\\:-translate-y-1:hover {\\n\\t--tw-translate-y: -0.25rem;\\n\\ttransform: var(--tw-transform);\\n}\\r\\n\\r\\n.hover\\\\:scale-105:hover {\\n\\t--tw-scale-x: 1.05;\\n\\t--tw-scale-y: 1.05;\\n\\ttransform: var(--tw-transform);\\n}\\r\\n\\r\\n.focus\\\\:border-indigo-300:focus {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(165, 180, 252, var(--tw-border-opacity));\\n}\\r\\n\\r\\n.focus\\\\:border-red-300:focus {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(252, 165, 165, var(--tw-border-opacity));\\n}\\r\\n\\r\\n.focus\\\\:ring:focus {\\n\\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n\\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n\\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\\n}\\r\\n\\r\\n.focus\\\\:ring-indigo-200:focus {\\n\\t--tw-ring-opacity: 1;\\n\\t--tw-ring-color: rgba(199, 210, 254, var(--tw-ring-opacity));\\n}\\r\\n\\r\\n.focus\\\\:ring-red-200:focus {\\n\\t--tw-ring-opacity: 1;\\n\\t--tw-ring-color: rgba(254, 202, 202, var(--tw-ring-opacity));\\n}\\r\\n\\r\\n.focus\\\\:ring-opacity-50:focus {\\n\\t--tw-ring-opacity: 0.5;\\n}\\r\\n\\r\\n.dark .dark\\\\:bg-dark-gray {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(29, 29, 31, var(--tw-bg-opacity));\\n}\\r\\n\\r\\n.dark .dark\\\\:bg-gray-800 {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\\n}\\r\\n\\r\\n.dark .dark\\\\:bg-yellow-200 {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(253, 230, 138, var(--tw-bg-opacity));\\n}\\r\\n\\r\\n.dark .dark\\\\:bg-white {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\\n}\\r\\n\\r\\n.dark .dark\\\\:bg-opacity-40 {\\n\\t--tw-bg-opacity: 0.4;\\n}\\r\\n\\r\\n.dark .dark\\\\:bg-clip-padding {\\n\\tbackground-clip: padding-box;\\n}\\r\\n\\r\\n.dark .dark\\\\:text-dark-gray {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(29, 29, 31, var(--tw-text-opacity));\\n}\\r\\n\\r\\n.dark .dark\\\\:text-gray-200 {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(229, 231, 235, var(--tw-text-opacity));\\n}\\r\\n\\r\\n.dark .dark\\\\:backdrop-blur-lg {\\n\\t--tw-backdrop-blur: blur(16px);\\n\\tbackdrop-filter: var(--tw-backdrop-filter);\\n}\\r\\n\\r\\n.dark .dark\\\\:backdrop-filter {\\n\\tbackdrop-filter: var(--tw-backdrop-filter);\\n}\\r\\n\\r\\n@media (min-width: 640px) {\\n\\n\\t.sm\\\\:flex {\\n\\t\\tdisplay: flex;\\n\\t}\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\n\\n\\t.md\\\\:w-3\\\\/4 {\\n\\t\\twidth: 75%;\\n\\t}\\n}\\r\\n\\r\\n@media (min-width: 1024px) {\\n\\n\\t.lg\\\\:px-\\\\[15\\\\%\\\\] {\\n\\t\\tpadding-left: 15%;\\n\\t\\tpadding-right: 15%;\\n\\t}\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js")}},(function(n){n.h=()=>"8bb4718155917d3768b4"}));