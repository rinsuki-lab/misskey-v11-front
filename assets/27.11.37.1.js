(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./src/client/app/common/views/components/user-menu.vue":
/*!**************************************************************************!*\
  !*** ./src/client/app/common/views/components/user-menu.vue + 4 modules ***!
  \**************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/user-menu.vue?vue&type=template&id=481a4d34&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { position: "initial" } },
    [
      _c("mk-menu", {
        attrs: { source: _vm.source, items: _vm.items },
        on: { closed: _vm.closed }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/user-menu.vue?vue&type=template&id=481a4d34&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/user-menu.vue?vue&type=script&lang=ts&




/* harmony default export */ var user_menuvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/user-menu.vue'),
    props: ['user', 'source'],
    data() {
        let menu = [{
                icon: ['fas', 'at'],
                text: this.$t('mention'),
                action: () => {
                    this.$post({ mention: this.user });
                }
            }, null, {
                icon: ['fas', 'list'],
                text: this.$t('push-to-list'),
                action: this.pushList
            }];
        if (this.$store.getters.isSignedIn && this.$store.state.i.id != this.user.id) {
            menu = menu.concat([null, {
                    icon: this.user.isMuted ? ['fas', 'eye'] : ['far', 'eye-slash'],
                    text: this.user.isMuted ? this.$t('unmute') : this.$t('mute'),
                    action: this.toggleMute
                }, {
                    icon: 'ban',
                    text: this.user.isBlocking ? this.$t('unblock') : this.$t('block'),
                    action: this.toggleBlock
                }, null, {
                    icon: index_es["faExclamationCircle"],
                    text: this.$t('report-abuse'),
                    action: this.reportAbuse
                }]);
        }
        if (this.$store.getters.isSignedIn && (this.$store.state.i.isAdmin || this.$store.state.i.isModerator)) {
            menu = menu.concat([null, {
                    icon: index_es["faMicrophoneSlash"],
                    text: this.user.isSilenced ? this.$t('unsilence') : this.$t('silence'),
                    action: this.toggleSilence
                }, {
                    icon: free_regular_svg_icons_index_es["faSnowflake"],
                    text: this.user.isSuspended ? this.$t('unsuspend') : this.$t('suspend'),
                    action: this.toggleSuspend
                }]);
        }
        return {
            items: menu
        };
    },
    methods: {
        closed() {
            this.$nextTick(() => {
                this.destroyDom();
            });
        },
        async pushList() {
            const t = this.$t('select-list'); // なぜか後で参照すると null になるので最初にメモリに確保しておく
            const lists = await this.$root.api('users/lists/list');
            const { canceled, result: listId } = await this.$root.dialog({
                type: null,
                title: t,
                select: {
                    items: lists.map(list => ({
                        value: list.id, text: list.name
                    }))
                },
                showCancelButton: true
            });
            if (canceled)
                return;
            await this.$root.api('users/lists/push', {
                listId: listId,
                userId: this.user.id
            });
            this.$root.dialog({
                type: 'success',
                splash: true
            });
        },
        async toggleMute() {
            if (this.user.isMuted) {
                if (!await this.getConfirmed(this.$t('unmute-confirm')))
                    return;
                this.$root.api('mute/delete', {
                    userId: this.user.id
                }).then(() => {
                    this.user.isMuted = false;
                }, () => {
                    this.$root.dialog({
                        type: 'error',
                        text: e
                    });
                });
            }
            else {
                if (!await this.getConfirmed(this.$t('mute-confirm')))
                    return;
                this.$root.api('mute/create', {
                    userId: this.user.id
                }).then(() => {
                    this.user.isMuted = true;
                }, () => {
                    this.$root.dialog({
                        type: 'error',
                        text: e
                    });
                });
            }
        },
        async toggleBlock() {
            if (this.user.isBlocking) {
                if (!await this.getConfirmed(this.$t('unblock-confirm')))
                    return;
                this.$root.api('blocking/delete', {
                    userId: this.user.id
                }).then(() => {
                    this.user.isBlocking = false;
                }, () => {
                    this.$root.dialog({
                        type: 'error',
                        text: e
                    });
                });
            }
            else {
                if (!await this.getConfirmed(this.$t('block-confirm')))
                    return;
                this.$root.api('blocking/create', {
                    userId: this.user.id
                }).then(() => {
                    this.user.isBlocking = true;
                }, () => {
                    this.$root.dialog({
                        type: 'error',
                        text: e
                    });
                });
            }
        },
        async reportAbuse() {
            const reported = this.$t('report-abuse-reported'); // なぜか後で参照すると null になるので最初にメモリに確保しておく
            const { canceled, result: comment } = await this.$root.dialog({
                title: this.$t('report-abuse-detail'),
                input: true
            });
            if (canceled)
                return;
            this.$root.api('users/report-abuse', {
                userId: this.user.id,
                comment: comment
            }).then(() => {
                this.$root.dialog({
                    type: 'success',
                    text: reported
                });
            }, e => {
                this.$root.dialog({
                    type: 'error',
                    text: e
                });
            });
        },
        async toggleSilence() {
            if (!await this.getConfirmed(this.$t(this.user.isSilenced ? 'unsilence-confirm' : 'silence-confirm')))
                return;
            this.$root.api(this.user.isSilenced ? 'admin/unsilence-user' : 'admin/silence-user', {
                userId: this.user.id
            }).then(() => {
                this.user.isSilenced = !this.user.isSilenced;
                this.$root.dialog({
                    type: 'success',
                    splash: true
                });
            }, e => {
                this.$root.dialog({
                    type: 'error',
                    text: e
                });
            });
        },
        async toggleSuspend() {
            if (!await this.getConfirmed(this.$t(this.user.isSuspended ? 'unsuspend-confirm' : 'suspend-confirm')))
                return;
            this.$root.api(this.user.isSuspended ? 'admin/unsuspend-user' : 'admin/suspend-user', {
                userId: this.user.id
            }).then(() => {
                this.user.isSuspended = !this.user.isSuspended;
                this.$root.dialog({
                    type: 'success',
                    splash: true
                });
            }, e => {
                this.$root.dialog({
                    type: 'error',
                    text: e
                });
            });
        },
        async getConfirmed(text) {
            const confirm = await this.$root.dialog({
                type: 'warning',
                showCancelButton: true,
                title: 'confirm',
                text,
            });
            return !confirm.canceled;
        },
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/user-menu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_user_menuvue_type_script_lang_ts_ = (user_menuvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/components/user-menu.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_user_menuvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/components/user-menu.vue"
/* harmony default export */ var user_menu = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=27.11.37.1.js.map