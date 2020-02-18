(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./src/client/app/common/views/pages/favorites.vue":
/*!*********************************************************************!*\
  !*** ./src/client/app/common/views/pages/favorites.vue + 4 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/favorites.vue?vue&type=template&id=0ecec4a0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(_vm.notesComponent, {
        tag: "component",
        attrs: {
          pagination: _vm.pagination,
          extract: function(items) {
            return items.map(function(item) {
              return item.note
            })
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/pages/favorites.vue?vue&type=template&id=0ecec4a0&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/favorites.vue?vue&type=script&lang=ts&



//import Progress from '../../../common/scripts/loading';
/* harmony default export */ var favoritesvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])(),
    props: {
        platform: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            pagination: {
                endpoint: 'i/favorites',
                limit: 10,
            },
            notesComponent: this.platform === 'desktop' ? () => __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ../../../desktop/views/components/detail-notes.vue */ "./src/client/app/desktop/views/components/detail-notes.vue")).then(m => m.default) :
                this.platform === 'mobile' ? () => __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ../../../mobile/views/components/detail-notes.vue */ "./src/client/app/mobile/views/components/detail-notes.vue")).then(m => m.default) :
                    this.platform === 'deck' ? () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../deck/deck.notes.vue */ "./src/client/app/common/views/deck/deck.notes.vue")).then(m => m.default) : null
        };
    },
    created() {
        this.$emit('init', {
            title: this.$t('@.favorites'),
            icon: index_es["faStar"]
        });
    },
    mounted() {
        document.title = this.$root.instanceName;
    },
}));

// CONCATENATED MODULE: ./src/client/app/common/views/pages/favorites.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_favoritesvue_type_script_lang_ts_ = (favoritesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/pages/favorites.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  pages_favoritesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/pages/favorites.vue"
/* harmony default export */ var favorites = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=28.11.37.1.js.map