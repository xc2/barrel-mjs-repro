import * as __WEBPACK_EXTERNAL_MODULE__foo_js__ from "./foo.js";
// The require scope
var __webpack_require__ = {};

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* reexport */ __WEBPACK_EXTERNAL_MODULE__foo_js__.foo)
});

;// CONCATENATED MODULE: external "./foo.js"

;// CONCATENATED MODULE: ./src/named-re-exports.js

var __webpack_exports__foo = __webpack_exports__.R;
export { __webpack_exports__foo as foo };
