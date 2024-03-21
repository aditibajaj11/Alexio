"use strict";
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ AlexioContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Create Context
const AlexioContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Type
const type = {
    NAV: "NAV",
    TOGGLE: "TOGGLE"
};
const { NAV , TOGGLE  } = type;
// Initial Value
const initialState = {
    nav: "home",
    toggle: false
};
// Reducer
const reducer = (state, action)=>{
    const { type , payload  } = action;
    switch(type){
        case NAV:
            return {
                ...state,
                nav: payload
            };
        case TOGGLE:
            return {
                ...state,
                toggle: payload
            };
        default:
            return state;
    }
};
// Watson State
const AlexioState = ({ children  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const changeNav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value, toggleValue)=>{
        dispatch({
            type: NAV,
            payload: value
        });
        dispatch({
            type: TOGGLE,
            payload: toggleValue
        });
    }, []);
    const { nav , toggle  } = state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlexioContext.Provider, {
        value: {
            nav,
            changeNav,
            toggle
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlexioState);



/***/ })

};
;