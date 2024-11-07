import * as __WEBPACK_EXTERNAL_MODULE__foo_js__ from "./foo.js";
var __webpack_modules__ = {
    "./foo.js": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foo_js__;
    }
};
/************************************************************************/ // The module cache
var __webpack_module_cache__ = {};
// The require function
function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    // Return the exports of the module
    return module.exports;
}
/************************************************************************/ // webpack/runtime/define_property_getters
(()=>{
    __webpack_require__.d = function(exports, definition) {
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
// webpack/runtime/has_own_property
(()=>{
    __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
})();
// webpack/runtime/make_namespace_object
(()=>{
    // define __esModule on exports
    __webpack_require__.r = function(exports) {
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };
})();
/************************************************************************/ var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* ESM import */ var _foo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./foo.js");
/* ESM reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* ESM reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _foo_js__WEBPACK_IMPORTED_MODULE_0__)if ("default" !== __WEBPACK_IMPORT_KEY__) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
    return _foo_js__WEBPACK_IMPORTED_MODULE_0__[key];
}).bind(0, __WEBPACK_IMPORT_KEY__);
/* ESM reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
