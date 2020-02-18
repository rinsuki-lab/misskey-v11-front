(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./src/client/app/common/views/components/code-core.vue":
/*!**************************************************************************!*\
  !*** ./src/client/app/common/views/components/code-core.vue + 4 modules ***!
  \**************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-prism-component/dist/vue-prism-component.common.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/code-core.vue?vue&type=template&id=6fa24b92&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "x-prism",
    { attrs: { inline: _vm.inline, language: _vm.prismLang } },
    [_vm._v(_vm._s(_vm.code))]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/code-core.vue?vue&type=template&id=6fa24b92&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./node_modules/prismjs/prism.js
var prism = __webpack_require__("./node_modules/prismjs/prism.js");

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism-okaidia.css
var prism_okaidia = __webpack_require__("./node_modules/prismjs/themes/prism-okaidia.css");

// EXTERNAL MODULE: ./node_modules/vue-prism-component/dist/vue-prism-component.common.js
var vue_prism_component_common = __webpack_require__("./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
var vue_prism_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_prism_component_common);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/code-core.vue?vue&type=script&lang=ts&




/* harmony default export */ var code_corevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    components: {
        XPrism: vue_prism_component_common_default.a
    },
    props: {
        code: {
            type: String,
            required: true
        },
        lang: {
            type: String,
            required: false
        },
        inline: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        prismLang() {
            return Prism.languages[this.lang] ? this.lang : 'js';
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/code-core.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_code_corevue_type_script_lang_ts_ = (code_corevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/components/code-core.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_code_corevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/components/code-core.vue"
/* harmony default export */ var code_core = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=55.11.37.1.js.map