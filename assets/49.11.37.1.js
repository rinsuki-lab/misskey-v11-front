(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kcthdwmv[data-v-7ce86e35]{text-align:center}.kcthdwmv>footer[data-v-7ce86e35]{margin-top:16px}.kcthdwmv>footer>a[data-v-7ce86e35]{display:inline-block;margin:0 16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2691ad37", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/client/app/desktop/views/home/note.vue":
/*!****************************************************************!*\
  !*** ./src/client/app/desktop/views/home/note.vue + 4 modules ***!
  \****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/scripts/loading.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=template&id=7ce86e35&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.fetching
    ? _c(
        "div",
        { staticClass: "kcthdwmv" },
        [
          _c("mk-note-detail", { key: _vm.note.id, attrs: { note: _vm.note } }),
          _c(
            "footer",
            [
              _vm.note.next
                ? _c(
                    "router-link",
                    { attrs: { to: _vm.note.next } },
                    [
                      _c("fa", { attrs: { icon: "angle-left" } }),
                      _vm._v(" " + _vm._s(_vm.$t("next")))
                    ],
                    1
                  )
                : _vm._e(),
              _vm.note.prev
                ? _c(
                    "router-link",
                    { attrs: { to: _vm.note.prev } },
                    [
                      _vm._v(_vm._s(_vm.$t("prev")) + " "),
                      _c("fa", { attrs: { icon: "angle-right" } })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/desktop/views/home/note.vue?vue&type=template&id=7ce86e35&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// EXTERNAL MODULE: ./src/client/app/common/scripts/loading.ts
var loading = __webpack_require__("./src/client/app/common/scripts/loading.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=script&lang=ts&



/* harmony default export */ var notevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('desktop/views/pages/note.vue'),
    data() {
        return {
            fetching: true,
            note: null
        };
    },
    watch: {
        $route: 'fetch'
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            loading["default"].start();
            this.fetching = true;
            this.$root.api('notes/show', {
                noteId: this.$route.params.note
            }).then(note => {
                this.note = note;
                this.fetching = false;
                loading["default"].done();
            });
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/desktop/views/home/note.vue?vue&type=script&lang=ts&
 /* harmony default export */ var home_notevue_type_script_lang_ts_ = (notevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&
var notevue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/desktop/views/home/note.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  home_notevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "7ce86e35",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/desktop/views/home/note.vue"
/* harmony default export */ var home_note = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_note_vue_vue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/note.vue?vue&type=style&index=0&id=7ce86e35&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_note_vue_vue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_note_vue_vue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_note_vue_vue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_note_vue_vue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_note_vue_vue_type_style_index_0_id_7ce86e35_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=49.11.37.1.js.map