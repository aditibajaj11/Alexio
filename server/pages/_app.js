(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/AlexioHead.js


const AlexioHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Alexio - Personal Portfolio React NextJS Template"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/plugin/font-awesome/css/fontawesome-all.min.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/plugin/themify-icons/themify-icons.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/plugin/bootstrap/css/bootstrap.min.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/plugin/owl-carousel/css/owl.carousel.min.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/plugin/magnific/magnific-popup.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/plugin/nav/css/component.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/css/styles.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "static/css/color/default.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "favicon.ico"
            })
        ]
    });
};
/* harmony default export */ const src_AlexioHead = (AlexioHead);

// EXTERNAL MODULE: ./src/Context.js
var Context = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "loading",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "load-circle",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "one"
            })
        })
    });
};
/* harmony default export */ const src_Preloader = (Preloader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/_app.js






function App({ Component , pageProps  }) {
    const [load, setLoad] = (0,external_react_.useState)(false);
    const [load1, setLoad1] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoad1(true);
        }, 1000);
        setTimeout(()=>{
            setLoad(true);
        }, 2000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Context/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(src_AlexioHead, {}),
            !load && /*#__PURE__*/ jsx_runtime_.jsx(src_Preloader, {}),
            load1 && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [744], () => (__webpack_exec__(921)));
module.exports = __webpack_exports__;

})();