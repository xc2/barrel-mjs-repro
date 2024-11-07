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
__webpack_require__.d(__webpack_exports__, {
  R: function() { return foo; }
});
const foo = 'bar';
var __webpack_exports__foo = __webpack_exports__.R;
export { __webpack_exports__foo as foo };
