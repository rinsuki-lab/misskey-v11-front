(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mntrproz[data-v-63d91a15]{display:flex;padding:4px}.mntrproz>div[data-v-63d91a15]{width:50%;padding:4px}.mntrproz>div>b[data-v-63d91a15]{display:block;font-size:12px;color:var(--text)}.mntrproz>div>span[data-v-63d91a15]{position:absolute;top:4px;right:4px;opacity:.7;font-size:12px;color:var(--text)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("61ad4d90", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/client/app/common/views/widgets/queue.vue":
/*!*******************************************************************!*\
  !*** ./src/client/app/common/views/widgets/queue.vue + 4 modules ***!
  \*******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/apexcharts/dist/apexcharts.esm.js (<- Module uses injected variables (module)) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/define-widget.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=template&id=63d91a15&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "ui-container",
        {
          attrs: { "show-header": !_vm.props.compact },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("fa", { attrs: { icon: _vm.faTasks } }),
                  _vm._v("Queue")
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c("div", { staticClass: "mntrproz" }, [
            _c("div", [
              _c("b", [_vm._v("In")]),
              _vm.latestStats
                ? _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm._f("number")(
                          _vm.latestStats.inbox.activeSincePrevTick
                        )
                      ) +
                        " / " +
                        _vm._s(_vm._f("number")(_vm.latestStats.inbox.delayed))
                    )
                  ])
                : _vm._e(),
              _c("div", { ref: "in" })
            ]),
            _c("div", [
              _c("b", [_vm._v("Out")]),
              _vm.latestStats
                ? _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm._f("number")(
                          _vm.latestStats.deliver.activeSincePrevTick
                        )
                      ) +
                        " / " +
                        _vm._s(
                          _vm._f("number")(_vm.latestStats.deliver.delayed)
                        )
                    )
                  ])
                : _vm._e(),
              _c("div", { ref: "out" })
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/widgets/queue.vue?vue&type=template&id=63d91a15&scoped=true&

// EXTERNAL MODULE: ./src/client/app/common/define-widget.ts
var define_widget = __webpack_require__("./src/client/app/common/define-widget.ts");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

// EXTERNAL MODULE: ./node_modules/apexcharts/dist/apexcharts.esm.js
var apexcharts_esm = __webpack_require__("./node_modules/apexcharts/dist/apexcharts.esm.js");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=script&lang=ts&



/* harmony default export */ var queuevue_type_script_lang_ts_ = (Object(define_widget["default"])({
    name: 'queue',
    props: () => ({
        compact: false
    })
}).extend({
    data() {
        return {
            stats: [],
            inChart: null,
            outChart: null,
            faTasks: index_es["faTasks"]
        };
    },
    watch: {
        stats(stats) {
            this.inChart.updateSeries([{
                    type: 'area',
                    data: stats.map((x, i) => ({ x: i, y: x.inbox.activeSincePrevTick }))
                }, {
                    type: 'area',
                    data: stats.map((x, i) => ({ x: i, y: x.inbox.active }))
                }, {
                    type: 'line',
                    data: stats.map((x, i) => ({ x: i, y: x.inbox.waiting }))
                }, {
                    type: 'line',
                    data: stats.map((x, i) => ({ x: i, y: x.inbox.delayed }))
                }]);
            this.outChart.updateSeries([{
                    type: 'area',
                    data: stats.map((x, i) => ({ x: i, y: x.deliver.activeSincePrevTick }))
                }, {
                    type: 'area',
                    data: stats.map((x, i) => ({ x: i, y: x.deliver.active }))
                }, {
                    type: 'line',
                    data: stats.map((x, i) => ({ x: i, y: x.deliver.waiting }))
                }, {
                    type: 'line',
                    data: stats.map((x, i) => ({ x: i, y: x.deliver.delayed }))
                }]);
        }
    },
    computed: {
        latestStats() {
            return this.stats[this.stats.length - 1];
        }
    },
    mounted() {
        const chartOpts = {
            chart: {
                type: 'area',
                height: 70,
                animations: {
                    dynamicAnimation: {
                        enabled: false
                    }
                },
                sparkline: {
                    enabled: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 1
            },
            colors: ['#00E396', '#00BCD4', '#FFB300', '#e53935'],
            series: [{ data: [] }, { data: [] }, { data: [] }, { data: [] }],
            yaxis: {
                min: 0,
            }
        };
        this.inChart = new apexcharts_esm["default"](this.$refs.in, chartOpts);
        this.outChart = new apexcharts_esm["default"](this.$refs.out, chartOpts);
        this.inChart.render();
        this.outChart.render();
        const connection = this.$root.stream.useSharedConnection('queueStats');
        connection.on('stats', this.onStats);
        connection.on('statsLog', this.onStatsLog);
        connection.send('requestLog', {
            id: Math.random().toString().substr(2, 8),
            length: 50
        });
        this.$once('hook:beforeDestroy', () => {
            connection.dispose();
            this.inChart.destroy();
            this.outChart.destroy();
        });
    },
    methods: {
        func() {
            this.props.compact = !this.props.compact;
            this.save();
        },
        onStats(stats) {
            this.stats.push(stats);
            if (this.stats.length > 50)
                this.stats.shift();
        },
        onStatsLog(statsLog) {
            for (const stats of statsLog.reverse()) {
                this.onStats(stats);
            }
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/widgets/queue.vue?vue&type=script&lang=ts&
 /* harmony default export */ var widgets_queuevue_type_script_lang_ts_ = (queuevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&
var queuevue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/widgets/queue.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  widgets_queuevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "63d91a15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/widgets/queue.vue"
/* harmony default export */ var queue = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_queue_vue_vue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/widgets/queue.vue?vue&type=style&index=0&id=63d91a15&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_queue_vue_vue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_queue_vue_vue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_queue_vue_vue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_queue_vue_vue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_queue_vue_vue_type_style_index_0_id_63d91a15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=47.11.37.1.js.map