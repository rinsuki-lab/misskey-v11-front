(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/client/app/common/views/pages/page.vue":
/*!****************************************************************!*\
  !*** ./src/client/app/common/views/pages/page.vue + 4 modules ***!
  \****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/views/components/page/page.vue (<- Module is referenced from these modules with unsupported syntax: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/deck/deck.user-column.home.vue?vue&type=script&lang=ts& (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/page.vue?vue&type=template&id=2a004cc6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.page
    ? _c("x-page", {
        key: _vm.page.id,
        attrs: { page: _vm.page, "show-footer": true }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/pages/page.vue?vue&type=template&id=2a004cc6&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var index_es = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");

// EXTERNAL MODULE: ./src/client/app/common/views/components/page/page.vue + 5 modules
var page_page = __webpack_require__("./src/client/app/common/views/components/page/page.vue");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/page.vue?vue&type=script&lang=ts&



/* harmony default export */ var pagevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    components: {
        XPage: page_page["default"]
    },
    props: {
        pageName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            page: null,
        };
    },
    computed: {
        path() {
            return this.username + '/' + this.pageName;
        }
    },
    watch: {
        path() {
            this.fetch();
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            this.$root.api('pages/show', {
                name: this.pageName,
                username: this.username,
            }).then(page => {
                this.page = page;
                this.$emit('init', {
                    title: this.page.title,
                    icon: index_es["faStickyNote"]
                });
            });
        },
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/pages/page.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_pagevue_type_script_lang_ts_ = (pagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/pages/page.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  pages_pagevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/pages/page.vue"
/* harmony default export */ var pages_page = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=54.11.37.1.js.map