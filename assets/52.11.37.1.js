(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./src/client/app/common/scripts/gen-search-query.ts":
/*!***********************************************************!*\
  !*** ./src/client/app/common/scripts/gen-search-query.ts ***!
  \***********************************************************/
/*! exports provided: genSearchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genSearchQuery", function() { return genSearchQuery; });
/* harmony import */ var _misc_acct_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../misc/acct/parse */ "./src/misc/acct/parse.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/client/app/config.ts");


async function genSearchQuery(v, q) {
    let host;
    let userId;
    if (q.split(' ').some(x => x.startsWith('@'))) {
        for (const at of q.split(' ').filter(x => x.startsWith('@')).map(x => x.substr(1))) {
            if (at.includes('.')) {
                if (at === _config__WEBPACK_IMPORTED_MODULE_1__["host"] || at === '.') {
                    host = null;
                }
                else {
                    host = at;
                }
            }
            else {
                const user = await v.$root.api('users/show', Object(_misc_acct_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(at)).catch(x => null);
                if (user) {
                    userId = user.id;
                }
                else {
                    // todo: show error
                }
            }
        }
    }
    return {
        query: q.split(' ').filter(x => !x.startsWith('/') && !x.startsWith('@')).join(' '),
        host: host,
        userId: userId
    };
}


/***/ }),

/***/ "./src/client/app/common/views/deck/deck.search-column.vue":
/*!*****************************************************************************!*\
  !*** ./src/client/app/common/views/deck/deck.search-column.vue + 4 modules ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/scripts/gen-search-query.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/views/deck/deck.column.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/views/deck/deck.notes.vue (<- Module is referenced from these modules with unsupported syntax: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/favorites.vue?vue&type=script&lang=ts& (referenced with import()), ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/featured.vue?vue&type=script&lang=ts& (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/deck/deck.search-column.vue?vue&type=template&id=747de1a0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "x-column",
    {
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function() {
            return [
              _c("fa", { attrs: { icon: "search" } }),
              _c("span", [_vm._v(_vm._s(_vm.q))])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "div",
        [
          _c("x-notes", {
            ref: "timeline",
            attrs: { pagination: _vm.pagination },
            on: {
              inited: function() {
                return _vm.$emit("loaded")
              }
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/deck/deck.search-column.vue?vue&type=template&id=747de1a0&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/client/app/common/views/deck/deck.column.vue + 4 modules
var deck_column = __webpack_require__("./src/client/app/common/views/deck/deck.column.vue");

// EXTERNAL MODULE: ./src/client/app/common/views/deck/deck.notes.vue + 4 modules
var deck_notes = __webpack_require__("./src/client/app/common/views/deck/deck.notes.vue");

// EXTERNAL MODULE: ./src/client/app/common/scripts/gen-search-query.ts
var gen_search_query = __webpack_require__("./src/client/app/common/scripts/gen-search-query.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/deck/deck.search-column.vue?vue&type=script&lang=ts&




/* harmony default export */ var deck_search_columnvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    components: {
        XColumn: deck_column["default"],
        XNotes: deck_notes["default"]
    },
    data() {
        return {
            pagination: {
                endpoint: 'notes/search',
                limit: 20,
                params: () => Object(gen_search_query["genSearchQuery"])(this, this.q)
            }
        };
    },
    computed: {
        q() {
            return this.$route.query.q;
        }
    },
    watch: {
        $route() {
            this.$refs.timeline.reload();
        }
    },
}));

// CONCATENATED MODULE: ./src/client/app/common/views/deck/deck.search-column.vue?vue&type=script&lang=ts&
 /* harmony default export */ var deck_deck_search_columnvue_type_script_lang_ts_ = (deck_search_columnvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/deck/deck.search-column.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  deck_deck_search_columnvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/deck/deck.search-column.vue"
/* harmony default export */ var deck_search_column = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=52.11.37.1.js.map