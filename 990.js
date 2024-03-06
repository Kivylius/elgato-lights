(self['webpackChunkelgato_lights'] = self['webpackChunkelgato_lights'] || []).push([["990"], {
"703": (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */"414");
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) // It is still safe when called from React.
        return;
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = 'Invariant Violation';
        throw err;
    }
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"697": (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs, throwOnDirectAccess;
// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */"703")();
}),
"414": (function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"251": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var f = __webpack_require__(/*! react */"330"), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;
}),
"893": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */"251");
}),
"130": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  manifest: function() { return _manifest__WEBPACK_IMPORTED_MODULE_6__.manifest; },
  onPress: function() { return onPress; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */"330");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */"697");
/* harmony import */var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var _utils_elgato__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/elgato */"780");
/* harmony import */var _hooks_useElgatos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useElgatos */"579");
/* harmony import */var _utils_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/icons */"4");
/* harmony import */var _manifest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manifest */"530");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}







 var onPress = function() {
    var _ref = _async_to_generator(function(params) {
        var config, setIcon, elgatos, elgato, state, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    config = params.config, setIcon = params.setIcon;
                    elgatos = (0, _utils_elgato__WEBPACK_IMPORTED_MODULE_3__.getElgatos)();
                    if (!config.light) return [
                        3,
                        9
                    ];
                    elgato = elgatos[config.light];
                    return [
                        4,
                        (0, _utils_elgato__WEBPACK_IMPORTED_MODULE_3__.fetchElgatoState)(elgato.ip)
                    ];
                case 1:
                    state = _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        ,
                        8
                    ]);
                    if (!state.lights[0].on) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, _utils_elgato__WEBPACK_IMPORTED_MODULE_3__.setElgatoOff)(elgato.ip)
                    ];
                case 3:
                    _state.sent();
                    setIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.OFF);
                    return [
                        3,
                        6
                    ];
                case 4:
                    return [
                        4,
                        (0, _utils_elgato__WEBPACK_IMPORTED_MODULE_3__.setElgatoOn)(elgato.ip)
                    ];
                case 5:
                    _state.sent();
                    setIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_5__.Icons.ON);
                    _state.label = 6;
                case 6:
                    return [
                        3,
                        8
                    ];
                case 7:
                    e = _state.sent();
                    console.log("elgato-ligtts error", e);
                    return [
                        3,
                        8
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    alert("please choose a light");
                    _state.label = 10;
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
    return function onPress(params) {
        return _ref.apply(this, arguments);
    };
}();
var App = function(param) {
    var config = param.config, setConfig = param.setConfig;
    var _useElgatos = (0, _hooks_useElgatos__WEBPACK_IMPORTED_MODULE_4__.useElgatos)(config), isLoading = _useElgatos.isLoading, elgatos = _useElgatos.elgatos, tryGetAllElgatoLights = _useElgatos.tryGetAllElgatoLights;
    var onChange = function(e) {
        return setConfig(_object_spread_props(_object_spread({}, config), _define_property({}, e.target.name, e.target.value)));
    };
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            borderRadius: "4px",
            padding: "2em",
            backgroundColor: "orange",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                className: "pt",
                children: "Elgato Lights Plugin"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "This plugin required",
                    " ",
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        href: "https://superuser.com/a/1672733",
                        children: "insecure content"
                    }),
                    " and",
                    " ",
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        href: "https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino",
                        children: "cors unblock"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "light",
                        children: "light: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                disabled: isLoading,
                                required: true,
                                name: "light",
                                onChange: onChange,
                                style: {
                                    width: 100
                                },
                                value: (config === null || config === void 0 ? void 0 : config.light) || "",
                                children: [
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                        value: "",
                                        disabled: true,
                                        hidden: true,
                                        children: "select...."
                                    }),
                                    Object.keys(elgatos).map(function(key) {
                                        return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                            value: elgatos[key].serialNumber,
                                            children: [
                                                elgatos[key].displayName || elgatos[key].productName,
                                                " |",
                                                " ",
                                                elgatos[key].serialNumber.slice(0, 3)
                                            ]
                                        }, key);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                className: "s",
                                onClick: tryGetAllElgatoLights,
                                children: isLoading ? "loading..." : "↻"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "action",
                        children: "action: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", {
                        required: true,
                        name: "action",
                        onChange: onChange,
                        value: config.action || "",
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                            value: "toggle",
                            children: "toggle (on/off)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "gateway",
                        children: "gateway: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                        type: "text",
                        name: "gateway",
                        placeholder: "192.169.0.1",
                        onChange: onChange,
                        value: config.gateway || "192.168.0.1"
                    })
                ]
            })
        ]
    });
};
App.propTypes = {
    config: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    setConfig: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
var __WEBPACK_DEFAULT_EXPORT__ = App;
}),
"579": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useElgatos: function() { return useElgatos; }
});
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */"330");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _utils_elgato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/elgato */"780");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


 var useElgatos = function(config) {
    var _useState = _sliced_to_array((0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(), 2), isLoading = _useState[0], setIsLoading = _useState[1];
    var _useState1 = _sliced_to_array((0, react__WEBPACK_IMPORTED_MODULE_0__.useState)((0, _utils_elgato__WEBPACK_IMPORTED_MODULE_1__.getElgatos)()), 2), elgatos = _useState1[0], setElgatos = _useState1[1];
    var addElgato = function(id, val) {
        setElgatos(function(old) {
            var next = _object_spread_props(_object_spread({}, old), _define_property({}, id, val));
            (0, _utils_elgato__WEBPACK_IMPORTED_MODULE_1__.storeElgatos)(next);
            return next;
        });
    };
    var tryGetAllElgatoLights = function() {
        setIsLoading(true);
        var ip = config.gateway || "192.168.0.1";
        var promises = [];
        _to_consumable_array(Array(256)).map(function(_, i) {
            var _ip_split = _sliced_to_array(ip.split("."), 3), a = _ip_split[0], b = _ip_split[1], c = _ip_split[2];
            return promises.push((0, _utils_elgato__WEBPACK_IMPORTED_MODULE_1__.fetchElgatoInfo)("".concat(a, ".").concat(b, ".").concat(c, ".").concat(i)));
        });
        Promise.all(promises).then(function(all) {
            all.forEach(function(item) {
                if (item) addElgato(item.serialNumber, item);
            });
            setIsLoading(false);
        });
    };
    return {
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        elgatos: elgatos,
        setElgatos: setElgatos,
        addElgato: addElgato,
        tryGetAllElgatoLights: tryGetAllElgatoLights
    };
};
}),
"530": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  manifest: function() { return manifest; }
});
/* harmony import */var _utils_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/icons */"4");
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

var _obj;
 var manifest = {
    icons: (_obj = {}, _define_property(_obj, _utils_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.DEFAULT, {
        icon: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.PATHS.on
    }), _define_property(_obj, _utils_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.ON, {
        icon: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.PATHS.on
    }), _define_property(_obj, _utils_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.OFF, {
        icon: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.PATHS.off
    }), _obj)
};
}),
"780": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fetchElgatoInfo: function() { return fetchElgatoInfo; },
  fetchElgatoState: function() { return fetchElgatoState; },
  getElgatos: function() { return getElgatos; },
  setElgatoOff: function() { return setElgatoOff; },
  setElgatoOn: function() { return setElgatoOn; },
  storeElgatos: function() { return storeElgatos; }
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var STORAGE_KEY = "elgatos";
var ELGATO_PORT = 9123;
 var getElgatos = function() {
    var elgatos = localStorage.getItem(STORAGE_KEY);
    if (elgatos) return JSON.parse(elgatos);
    return {};
};
 var storeElgatos = function(elgatos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(elgatos));
};
 var fetchElgatoInfo = function() {
    var _ref = _async_to_generator(function(ip) {
        var path, response, data, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    path = "elgato/accessory-info";
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        fetch("http://".concat(ip, ":").concat(ELGATO_PORT, "/").concat(path))
                    ];
                case 2:
                    response = _state.sent();
                    return [
                        4,
                        response.json()
                    ];
                case 3:
                    data = _state.sent();
                    return [
                        2,
                        _object_spread_props(_object_spread({}, data), {
                            ip: ip
                        })
                    ];
                case 4:
                    e = _state.sent();
                    console.error(e);
                    return [
                        2
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function fetchElgatoInfo(ip) {
        return _ref.apply(this, arguments);
    };
}();
 var fetchElgatoState = function() {
    var _ref = _async_to_generator(function(ip) {
        var resp, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch("http://".concat(ip, ":").concat(ELGATO_PORT, "/elgato/lights"))
                    ];
                case 1:
                    resp = _state.sent();
                    return [
                        4,
                        resp.json()
                    ];
                case 2:
                    data = _state.sent();
                    return [
                        2,
                        data
                    ];
            }
        });
    });
    return function fetchElgatoState(ip) {
        return _ref.apply(this, arguments);
    };
}();
 var setElgatoOn = function() {
    var _ref = _async_to_generator(function(ip) {
        var a, d;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch("http://".concat(ip, ":").concat(ELGATO_PORT, "/elgato/lights"), {
                            method: "put",
                            body: JSON.stringify({
                                lights: [
                                    {
                                        on: 1
                                    }
                                ]
                            })
                        })
                    ];
                case 1:
                    a = _state.sent();
                    return [
                        4,
                        a.json()
                    ];
                case 2:
                    d = _state.sent();
                    return [
                        2,
                        d
                    ];
            }
        });
    });
    return function setElgatoOn(ip) {
        return _ref.apply(this, arguments);
    };
}();
 var setElgatoOff = function() {
    var _ref = _async_to_generator(function(ip) {
        var a, d;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch("http://".concat(ip, ":").concat(ELGATO_PORT, "/elgato/lights"), {
                            method: "put",
                            body: JSON.stringify({
                                lights: [
                                    {
                                        on: 0
                                    }
                                ]
                            })
                        })
                    ];
                case 1:
                    a = _state.sent();
                    return [
                        4,
                        a.json()
                    ];
                case 2:
                    d = _state.sent();
                    return [
                        2,
                        d
                    ];
            }
        });
    });
    return function setElgatoOff(ip) {
        return _ref.apply(this, arguments);
    };
}();
}),
"4": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Icons: function() { return Icons; },
  PATHS: function() { return PATHS; }
});
 var Icons = {
    DEFAULT: "default",
    ON: "on",
    OFF: "off"
};
 var PATHS = {
    off: "M10.74 17H8.75c0-.17-.02-.34-.04-.5l1.7-1.55c.2.65.33 1.33.33 2.05zm-.04 6.66a1 1 0 0 0 .75.34h1.1a1 1 0 0 0 .75-.34L14.75 22h-5.5l1.45 1.66zM14.5 20h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0-2h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm1.7-8.31c-1.1 2.28-2.94 4.48-2.94 7.31h1.99c0-3.17 3.48-5.9 3.73-9.83L16.2 9.68zm6.8-8.2L2.35 20.22 1 18.73l6.33-5.72C6.27 11.13 5 9.16 5 6.73 5 2.4 8.5 0 12 0c2.4 0 4.8 1.15 6.06 3.27L21.66 0 23 1.48zM8.85 11.62l7.68-6.97A4.94 4.94 0 0 0 12 2C9.5 2 7 3.63 7 6.73c0 1.72.9 3.25 1.85 4.9z",
    on: "M22 8.51v1.37h-2.54a7.56 7.56 0 0 0 0-1.37H22zM11.35 1.96V0h1.37v1.96a8.02 8.02 0 0 0-1.37 0zm5.52 1.54 1.57-1.74 1.02.92-1.6 1.77c-.25-.3-.6-.67-.99-.95zm-10.73.95-1.6-1.77 1.01-.92L7.12 3.5c-.4.28-.73.66-.98.95zm-1.6 5.43H2V8.51h2.54a8.61 8.61 0 0 0 0 1.37zM14 19h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm.25 2h-4.5l1.19.78c.15.14.38.22.61.22h.9c.23 0 .46-.08.61-.22l1.19-.78zM18 9.2c0 3.57-3.21 5.98-3.21 8.8h-2c0-1.86.88-3.39 1.73-4.87.76-1.32 1.48-2.57 1.48-3.93 0-2.6-2.08-3.77-4-3.77-1.93 0-4 1.18-4 3.77 0 1.36.72 2.6 1.48 3.93.85 1.48 1.73 3.01 1.72 4.87H9.21C9.21 15.18 6 12.77 6 9.2c0-3.72 3-5.77 6-5.77s6 2.05 6 5.77z"
};
}),

}]);
//# sourceMappingURL=990.js.map