(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mk-messaging-form>textarea[data-v-9d382d7e]{cursor:auto;display:block;width:100%;min-width:100%;max-width:100%;height:64px;margin:0;padding:8px;resize:none;font-size:1em;color:var(--inputText);outline:none;border:none;border-top:1px solid var(--faceDivider);border-radius:0;box-shadow:none;background:transparent}.mk-messaging-form>.file[data-v-9d382d7e]{padding:8px;color:#444;background:#eee;cursor:pointer}.mk-messaging-form>.send[data-v-9d382d7e]{position:absolute;bottom:0;right:0;margin:0;padding:10px 14px;font-size:1em;color:#aaa;transition:color .1s ease}.mk-messaging-form>.send[data-v-9d382d7e]:hover{color:var(--primary)}.mk-messaging-form>.send[data-v-9d382d7e]:active{color:var(--primaryDarken10);transition:color 0s ease}.mk-messaging-form .files[data-v-9d382d7e]{display:block;margin:0;padding:0 8px;list-style:none}.mk-messaging-form .files[data-v-9d382d7e]:after{content:\"\";display:block;clear:both}.mk-messaging-form .files>li[data-v-9d382d7e]{display:block;float:left;margin:4px;padding:0;width:64px;height:64px;background-color:#eee;background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:move}.mk-messaging-form .files>li:hover>.remove[data-v-9d382d7e]{display:block}.mk-messaging-form .files>li>.remove[data-v-9d382d7e]{display:none;position:absolute;right:-6px;top:-6px;margin:0;padding:0;background:transparent;outline:none;border:none;border-radius:0;box-shadow:none;cursor:pointer}.mk-messaging-form .attach-from-drive[data-v-9d382d7e],.mk-messaging-form .attach-from-local[data-v-9d382d7e]{margin:0;padding:10px 14px;font-size:1em;font-weight:400;text-decoration:none;color:#aaa;transition:color .1s ease}.mk-messaging-form .attach-from-drive[data-v-9d382d7e]:hover,.mk-messaging-form .attach-from-local[data-v-9d382d7e]:hover{color:var(--primary)}.mk-messaging-form .attach-from-drive[data-v-9d382d7e]:active,.mk-messaging-form .attach-from-local[data-v-9d382d7e]:active{color:var(--primaryDarken10);transition:color 0s ease}.mk-messaging-form input[type=file][data-v-9d382d7e]{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".message[data-v-13ff651a]{padding:10px 12px;background-color:transparent}.message>.avatar[data-v-13ff651a]{display:block;position:absolute;top:10px;width:54px;height:54px;border-radius:8px;transition:all .1s ease}.message>.content>.balloon[data-v-13ff651a]{display:flex;align-items:center;padding:0;max-width:calc(100% - 16px);min-height:38px;border-radius:16px}.message>.content>.balloon[data-v-13ff651a]:before{content:\"\";pointer-events:none;display:block;position:absolute;top:12px}.message>.content>.balloon+*[data-v-13ff651a]{clear:both}.message>.content>.balloon:hover>.delete-button[data-v-13ff651a]{display:block}.message>.content>.balloon>.delete-button[data-v-13ff651a]{display:none;position:absolute;z-index:1;top:-4px;right:-4px;margin:0;padding:0;cursor:pointer;outline:none;border:none;border-radius:0;box-shadow:none;background:transparent}.message>.content>.balloon>.delete-button>img[data-v-13ff651a]{vertical-align:bottom;width:16px;height:16px;cursor:pointer}.message>.content>.balloon>.content[data-v-13ff651a]{max-width:100%}.message>.content>.balloon>.content>.is-deleted[data-v-13ff651a]{display:block;margin:0;padding:0;overflow:hidden;overflow-wrap:break-word;font-size:1em;color:rgba(0,0,0,.5)}.message>.content>.balloon>.content>.text[data-v-13ff651a]{display:block;margin:0;padding:8px 16px;overflow:hidden;overflow-wrap:break-word;word-break:break-word;font-size:1em;color:rgba(0,0,0,.8)}.message>.content>.balloon>.content>.text+.file>a[data-v-13ff651a]{border-radius:0 0 16px 16px}.message>.content>.balloon>.content>.file>a[data-v-13ff651a]{display:block;max-width:100%;border-radius:16px;overflow:hidden;text-decoration:none}.message>.content>.balloon>.content>.file>a[data-v-13ff651a]:hover{text-decoration:none}.message>.content>.balloon>.content>.file>a:hover>p[data-v-13ff651a]{background:#ccc}.message>.content>.balloon>.content>.file>a>*[data-v-13ff651a]{display:block;margin:0;width:100%;max-height:512px;object-fit:contain}.message>.content>.balloon>.content>.file>a>p[data-v-13ff651a]{padding:30px;text-align:center;color:#555;background:#ddd}.message>.content>.mk-url-preview[data-v-13ff651a]{margin:8px 0}.message>.content>footer[data-v-13ff651a]{display:block;margin:2px 0 0;font-size:10px;color:var(--messagingRoomMessageInfo)}.message>.content>footer>.read[data-v-13ff651a]{margin:0 8px}.message>.content>footer>[data-icon][data-v-13ff651a]{margin-left:4px}.message:not([data-is-me])>.avatar[data-v-13ff651a]{left:12px}.message:not([data-is-me])>.content[data-v-13ff651a]{padding-left:66px}.message:not([data-is-me])>.content>.balloon[data-v-13ff651a]{float:left;background:var(--messagingRoomMessageBg)}.message:not([data-is-me])>.content>.balloon[data-no-text][data-v-13ff651a]{background:transparent}.message:not([data-is-me])>.content>.balloon[data-v-13ff651a]:not([data-no-text]):before{left:-14px;border:8px solid transparent;border-right:8px solid var(--messagingRoomMessageBg)}.message:not([data-is-me])>.content>.balloon>.content>.text[data-v-13ff651a]{color:var(--messagingRoomMessageFg)}.message:not([data-is-me])>.content>footer[data-v-13ff651a]{text-align:left}.message[data-is-me]>.avatar[data-v-13ff651a]{right:12px}.message[data-is-me]>.content[data-v-13ff651a]{padding-right:66px}.message[data-is-me]>.content>.balloon[data-v-13ff651a]{float:right;background:var(--primary)}.message[data-is-me]>.content>.balloon[data-no-text][data-v-13ff651a]{background:transparent}.message[data-is-me]>.content>.balloon[data-v-13ff651a]:not([data-no-text]):before{right:-14px;left:auto;border:8px solid transparent;border-left:8px solid var(--primary)}.message[data-is-me]>.content>.balloon>.content>p.is-deleted[data-v-13ff651a]{color:hsla(0,0%,100%,.5)}.message[data-is-me]>.content>.balloon>.content>.text[data-v-13ff651a] ,.message[data-is-me]>.content>.balloon>.content>.text[data-v-13ff651a] *{color:#fff!important}.message[data-is-me]>.content>footer[data-v-13ff651a]{text-align:right}.message[data-is-me]>.content>footer>.read[data-v-13ff651a]{user-select:none}.message[data-is-deleted]>.balloon[data-v-13ff651a]{opacity:.5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mk-messaging-room[data-v-4abc0281]{background:var(--messagingRoomBg)}.mk-messaging-room>.body[data-v-4abc0281]{width:100%;max-width:600px;margin:0 auto;min-height:calc(100% - 103px)}.mk-messaging-room>.body>.empty[data-v-4abc0281],.mk-messaging-room>.body>.init[data-v-4abc0281]{width:100%;margin:0;padding:16px 8px 8px;text-align:center;font-size:.8em;color:var(--messagingRoomInfo);opacity:.5}.mk-messaging-room>.body>.empty [data-icon][data-v-4abc0281],.mk-messaging-room>.body>.init [data-icon][data-v-4abc0281]{margin-right:4px}.mk-messaging-room>.body>.no-history[data-v-4abc0281]{display:block;margin:0;padding:16px;text-align:center;font-size:.8em;color:var(--messagingRoomInfo);opacity:.5}.mk-messaging-room>.body>.no-history [data-icon][data-v-4abc0281]{margin-right:4px}.mk-messaging-room>.body>.more[data-v-4abc0281]{display:block;margin:16px auto;padding:0 12px;line-height:24px;color:#fff;background:rgba(0,0,0,.3);border-radius:12px}.mk-messaging-room>.body>.more[data-v-4abc0281]:hover{background:rgba(0,0,0,.4)}.mk-messaging-room>.body>.more[data-v-4abc0281]:active{background:rgba(0,0,0,.5)}.mk-messaging-room>.body>.more.fetching[data-v-4abc0281]{cursor:wait}.mk-messaging-room>.body>.more>[data-icon][data-v-4abc0281]{margin-right:4px}.mk-messaging-room>.body>.date[data-v-4abc0281]{display:block;margin:8px 0;text-align:center}.mk-messaging-room>.body>.date[data-v-4abc0281]:before{content:\"\";display:block;position:absolute;height:1px;width:90%;top:16px;left:0;right:0;margin:0 auto;background:var(--messagingRoomDateDividerLine)}.mk-messaging-room>.body>.date>span[data-v-4abc0281]{display:inline-block;margin:0;padding:0 16px;line-height:32px;color:var(--messagingRoomDateDividerText);background:var(--messagingRoomBg)}.mk-messaging-room>footer[data-v-4abc0281]{position:-webkit-sticky;position:sticky;z-index:2;bottom:0;width:100%;max-width:600px;margin:0 auto;padding:0;background:var(--messagingRoomBg);background-clip:content-box}.mk-messaging-room>footer>.new-message[data-v-4abc0281]{position:absolute;top:-48px;width:100%;padding:8px 0;text-align:center}.mk-messaging-room>footer>.new-message>button[data-v-4abc0281]{display:inline-block;margin:0;padding:0 12px 0 30px;cursor:pointer;line-height:32px;font-size:12px;color:var(--primaryForeground);background:var(--primary);border-radius:16px}.mk-messaging-room>footer>.new-message>button[data-v-4abc0281]:hover{background:var(--primaryLighten10)}.mk-messaging-room>footer>.new-message>button[data-v-4abc0281]:active{background:var(--primaryDarken10)}.mk-messaging-room>footer>.new-message>button>i[data-v-4abc0281]{position:absolute;top:0;left:10px;line-height:32px;font-size:16px}.fade-enter-active[data-v-4abc0281],.fade-leave-active[data-v-4abc0281]{transition:opacity .1s}.fade-enter[data-v-4abc0281],.fade-leave-to[data-v-4abc0281]{transition:opacity .5s;opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2e2e54eb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3b47dafc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7c111350", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_form_vue_vue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_form_vue_vue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_form_vue_vue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_form_vue_vue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_form_vue_vue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_form_vue_vue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_message_vue_vue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_message_vue_vue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_message_vue_vue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_message_vue_vue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_message_vue_vue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_message_vue_vue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/client/app/common/views/components/messaging-room.vue":
/*!********************************************************************************!*\
  !*** ./src/client/app/common/views/components/messaging-room.vue + 14 modules ***!
  \********************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/config.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/mfm/parse.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/misc/format-time-string.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/prelude/array.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=template&id=4abc0281&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "mk-messaging-room",
      on: {
        dragover: function($event) {
          $event.preventDefault()
          $event.stopPropagation()
          return _vm.onDragover($event)
        },
        drop: function($event) {
          $event.preventDefault()
          $event.stopPropagation()
          return _vm.onDrop($event)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "body" },
        [
          _vm.init
            ? _c(
                "p",
                { staticClass: "init" },
                [
                  _c("fa", {
                    attrs: { icon: "spinner", pulse: "", "fixed-width": "" }
                  }),
                  _vm._v(_vm._s(_vm.$t("@.loading")))
                ],
                1
              )
            : _vm._e(),
          !_vm.init && _vm.messages.length == 0
            ? _c(
                "p",
                { staticClass: "empty" },
                [
                  _c("fa", { attrs: { icon: "info-circle" } }),
                  _vm._v(
                    _vm._s(
                      _vm.user
                        ? _vm.$t("not-talked-user")
                        : _vm.$t("not-talked-group")
                    )
                  )
                ],
                1
              )
            : _vm._e(),
          !_vm.init && _vm.messages.length > 0 && !_vm.existMoreMessages
            ? _c(
                "p",
                { staticClass: "no-history" },
                [
                  _c("fa", { attrs: { icon: _vm.faFlag } }),
                  _vm._v(_vm._s(_vm.$t("no-history")))
                ],
                1
              )
            : _vm._e(),
          _vm.existMoreMessages
            ? _c(
                "button",
                {
                  staticClass: "more",
                  class: { fetching: _vm.fetchingMoreMessages },
                  attrs: { disabled: _vm.fetchingMoreMessages },
                  on: { click: _vm.fetchMoreMessages }
                },
                [
                  _vm.fetchingMoreMessages
                    ? [
                        _c("fa", {
                          attrs: {
                            icon: "spinner",
                            pulse: "",
                            "fixed-width": ""
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(
                    _vm._s(
                      _vm.fetchingMoreMessages
                        ? _vm.$t("@.loading")
                        : _vm.$t("@.load-more")
                    ) + "\n\t\t"
                  )
                ],
                2
              )
            : _vm._e(),
          _vm._l(_vm._messages, function(message, i) {
            return [
              _c("x-message", {
                key: message.id,
                attrs: { message: message, "is-group": _vm.group != null }
              }),
              i != _vm.messages.length - 1 &&
              message._date != _vm._messages[i + 1]._date
                ? _c("p", { staticClass: "date" }, [
                    _c("span", [_vm._v(_vm._s(_vm._messages[i + 1]._datetext))])
                  ])
                : _vm._e()
            ]
          })
        ],
        2
      ),
      _c(
        "footer",
        [
          _c("transition", { attrs: { name: "fade" } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showIndicator,
                    expression: "showIndicator"
                  }
                ],
                staticClass: "new-message"
              },
              [
                _c("button", { on: { click: _vm.onIndicatorClick } }, [
                  _c(
                    "i",
                    [_c("fa", { attrs: { icon: _vm.faArrowCircleDown } })],
                    1
                  ),
                  _vm._v(_vm._s(_vm.$t("new-message")))
                ])
              ]
            )
          ]),
          _c("x-form", {
            ref: "form",
            attrs: { user: _vm.user, group: _vm.group }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.vue?vue&type=template&id=4abc0281&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=template&id=13ff651a&scoped=true&
var messaging_room_messagevue_type_template_id_13ff651a_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "message", attrs: { "data-is-me": _vm.isMe } },
    [
      _c("mk-avatar", {
        staticClass: "avatar",
        attrs: { user: _vm.message.user, target: "_blank" }
      }),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c(
            "div",
            {
              staticClass: "balloon",
              attrs: { "data-no-text": _vm.message.text == null }
            },
            [
              _vm.isMe
                ? _c(
                    "button",
                    {
                      staticClass: "delete-button",
                      attrs: { title: _vm.$t("@.delete") },
                      on: { click: _vm.del }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: "/assets/desktop/remove.png",
                          alt: "Delete"
                        }
                      })
                    ]
                  )
                : _vm._e(),
              !_vm.message.isDeleted
                ? _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _vm.message.text
                        ? _c("mfm", {
                            ref: "text",
                            staticClass: "text",
                            attrs: {
                              text: _vm.message.text,
                              i: _vm.$store.state.i
                            }
                          })
                        : _vm._e(),
                      _vm.message.file
                        ? _c("div", { staticClass: "file" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.message.file.url,
                                  rel: "noopener",
                                  target: "_blank",
                                  title: _vm.message.file.name
                                }
                              },
                              [
                                _vm.message.file.type.split("/")[0] == "image"
                                  ? _c("img", {
                                      style: {
                                        backgroundColor:
                                          _vm.message.file.properties
                                            .avgColor || "transparent"
                                      },
                                      attrs: {
                                        src: _vm.message.file.url,
                                        alt: _vm.message.file.name
                                      }
                                    })
                                  : _c("p", [
                                      _vm._v(_vm._s(_vm.message.file.name))
                                    ])
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                : _c("div", { staticClass: "content" }, [
                    _c("p", { staticClass: "is-deleted" }, [
                      _vm._v(_vm._s(_vm.$t("deleted")))
                    ])
                  ])
            ]
          ),
          _c("div"),
          _vm._l(_vm.urls, function(url) {
            return _c("mk-url-preview", { key: url, attrs: { url: url } })
          }),
          _c(
            "footer",
            [
              _vm.isGroup
                ? [
                    _vm.message.reads.length > 0
                      ? _c("span", { staticClass: "read" }, [
                          _vm._v(
                            _vm._s(_vm.$t("is-read")) +
                              " " +
                              _vm._s(_vm.message.reads.length)
                          )
                        ])
                      : _vm._e()
                  ]
                : [
                    _vm.isMe && _vm.message.isRead
                      ? _c("span", { staticClass: "read" }, [
                          _vm._v(_vm._s(_vm.$t("is-read")))
                        ])
                      : _vm._e()
                  ],
              _c("mk-time", { attrs: { time: _vm.message.createdAt } }),
              _vm.message.is_edited
                ? [_c("fa", { attrs: { icon: "pencil-alt" } })]
                : _vm._e()
            ],
            2
          )
        ],
        2
      )
    ],
    1
  )
}
var messaging_room_messagevue_type_template_id_13ff651a_scoped_true_staticRenderFns = []
messaging_room_messagevue_type_template_id_13ff651a_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.message.vue?vue&type=template&id=13ff651a&scoped=true&

// EXTERNAL MODULE: ./src/mfm/parse.ts + 4 modules
var parse = __webpack_require__("./src/mfm/parse.ts");

// EXTERNAL MODULE: ./src/prelude/array.ts
var array = __webpack_require__("./src/prelude/array.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.message.vue?vue&type=script&lang=ts&




/* harmony default export */ var messaging_room_messagevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/messaging-room.message.vue'),
    props: {
        message: {
            required: true
        },
        isGroup: {
            required: false
        }
    },
    computed: {
        isMe() {
            return this.message.userId == this.$store.state.i.id;
        },
        urls() {
            if (this.message.text) {
                const ast = Object(parse["parse"])(this.message.text);
                return Object(array["unique"])(ast
                    .filter(t => ((t.node.type == 'url' || t.node.type == 'link') && t.node.props.url && !t.node.props.silent))
                    .map(t => t.node.props.url));
            }
            else {
                return null;
            }
        }
    },
    methods: {
        del() {
            this.$root.api('messaging/messages/delete', {
                messageId: this.message.id
            });
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.message.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_messaging_room_messagevue_type_script_lang_ts_ = (messaging_room_messagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&
var messaging_room_messagevue_type_style_index_0_id_13ff651a_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/messaging-room.message.vue?vue&type=style&index=0&id=13ff651a&lang=stylus&scoped=true&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.message.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_messaging_room_messagevue_type_script_lang_ts_,
  messaging_room_messagevue_type_template_id_13ff651a_scoped_true_render,
  messaging_room_messagevue_type_template_id_13ff651a_scoped_true_staticRenderFns,
  false,
  null,
  "13ff651a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/components/messaging-room.message.vue"
/* harmony default export */ var messaging_room_message = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=template&id=9d382d7e&scoped=true&
var messaging_room_formvue_type_template_id_9d382d7e_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "mk-messaging-form",
      on: {
        dragover: function($event) {
          $event.stopPropagation()
          return _vm.onDragover($event)
        },
        drop: function($event) {
          $event.stopPropagation()
          return _vm.onDrop($event)
        }
      }
    },
    [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.text,
            expression: "text"
          },
          {
            name: "autocomplete",
            rawName: "v-autocomplete",
            value: { model: "text" },
            expression: "{ model: 'text' }"
          }
        ],
        ref: "textarea",
        attrs: { placeholder: _vm.$t("input-message-here") },
        domProps: { value: _vm.text },
        on: {
          keypress: _vm.onKeypress,
          paste: _vm.onPaste,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.text = $event.target.value
          }
        }
      }),
      _vm.file
        ? _c(
            "div",
            {
              staticClass: "file",
              on: {
                click: function($event) {
                  _vm.file = null
                }
              }
            },
            [_vm._v(_vm._s(_vm.file.name))]
          )
        : _vm._e(),
      _c("mk-uploader", { ref: "uploader", on: { uploaded: _vm.onUploaded } }),
      _c(
        "button",
        {
          staticClass: "send",
          attrs: {
            disabled: !_vm.canSend || _vm.sending,
            title: _vm.$t("send")
          },
          on: { click: _vm.send }
        },
        [
          !_vm.sending
            ? [_c("fa", { attrs: { icon: "paper-plane" } })]
            : _vm._e(),
          _vm.sending
            ? [_c("fa", { attrs: { icon: "spinner .spin" } })]
            : _vm._e()
        ],
        2
      ),
      _c(
        "button",
        {
          staticClass: "attach-from-local",
          attrs: { title: _vm.$t("attach-from-local") },
          on: { click: _vm.chooseFile }
        },
        [_c("fa", { attrs: { icon: "upload" } })],
        1
      ),
      _c(
        "button",
        {
          staticClass: "attach-from-drive",
          attrs: { title: _vm.$t("attach-from-drive") },
          on: { click: _vm.chooseFileFromDrive }
        },
        [_c("fa", { attrs: { icon: ["far", "folder-open"] } })],
        1
      ),
      _c("input", {
        ref: "file",
        attrs: { type: "file" },
        on: { change: _vm.onChangeFile }
      })
    ],
    1
  )
}
var messaging_room_formvue_type_template_id_9d382d7e_scoped_true_staticRenderFns = []
messaging_room_formvue_type_template_id_9d382d7e_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.form.vue?vue&type=template&id=9d382d7e&scoped=true&

// EXTERNAL MODULE: ./node_modules/autosize/dist/autosize.js
var autosize = __webpack_require__("./node_modules/autosize/dist/autosize.js");

// EXTERNAL MODULE: ./src/misc/format-time-string.ts
var format_time_string = __webpack_require__("./src/misc/format-time-string.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.form.vue?vue&type=script&lang=ts&




/* harmony default export */ var messaging_room_formvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/messaging-room.form.vue'),
    props: {
        user: {
            type: Object,
            requird: false,
        },
        group: {
            type: Object,
            requird: false,
        },
    },
    data() {
        return {
            text: null,
            file: null,
            sending: false
        };
    },
    computed: {
        draftId() {
            return this.user ? 'user:' + this.user.id : 'group:' + this.group.id;
        },
        canSend() {
            return (this.text != null && this.text != '') || this.file != null;
        },
        room() {
            return this.$parent;
        }
    },
    watch: {
        text() {
            this.saveDraft();
        },
        file() {
            this.saveDraft();
            if (this.room.isBottom()) {
                this.room.scrollToBottom();
            }
        }
    },
    mounted() {
        autosize(this.$refs.textarea);
        // 書きかけの投稿を復元
        const draft = JSON.parse(localStorage.getItem('message_drafts') || '{}')[this.draftId];
        if (draft) {
            this.text = draft.data.text;
            this.file = draft.data.file;
        }
    },
    methods: {
        async onPaste(e) {
            const data = e.clipboardData;
            const items = data.items;
            if (items.length == 1) {
                if (items[0].kind == 'file') {
                    const file = items[0].getAsFile();
                    const lio = file.name.lastIndexOf('.');
                    const ext = lio >= 0 ? file.name.slice(lio) : '';
                    const formatted = `${Object(format_time_string["formatTimeString"])(new Date(file.lastModified), this.$store.state.settings.pastedFileName).replace(/{{number}}/g, '1')}${ext}`;
                    const name = this.$store.state.settings.pasteDialog
                        ? await this.$root.dialog({
                            title: this.$t('@.post-form.enter-file-name'),
                            input: {
                                default: formatted
                            },
                            allowEmpty: false
                        }).then(({ canceled, result }) => canceled ? false : result)
                        : formatted;
                    if (name)
                        this.upload(file, name);
                }
            }
            else {
                if (items[0].kind == 'file') {
                    this.$root.dialog({
                        type: 'error',
                        text: this.$t('only-one-file-attached')
                    });
                }
            }
        },
        onDragover(e) {
            const isFile = e.dataTransfer.items[0].kind == 'file';
            const isDriveFile = e.dataTransfer.types[0] == 'mk_drive_file';
            if (isFile || isDriveFile) {
                e.preventDefault();
                e.dataTransfer.dropEffect = e.dataTransfer.effectAllowed == 'all' ? 'copy' : 'move';
            }
        },
        onDrop(e) {
            // ファイルだったら
            if (e.dataTransfer.files.length == 1) {
                e.preventDefault();
                this.upload(e.dataTransfer.files[0]);
                return;
            }
            else if (e.dataTransfer.files.length > 1) {
                e.preventDefault();
                this.$root.dialog({
                    type: 'error',
                    text: this.$t('only-one-file-attached')
                });
                return;
            }
            //#region ドライブのファイル
            const driveFile = e.dataTransfer.getData('mk_drive_file');
            if (driveFile != null && driveFile != '') {
                this.file = JSON.parse(driveFile);
                e.preventDefault();
            }
            //#endregion
        },
        onKeypress(e) {
            if ((e.which == 10 || e.which == 13) && e.ctrlKey && this.canSend) {
                this.send();
            }
        },
        chooseFile() {
            this.$refs.file.click();
        },
        chooseFileFromDrive() {
            this.$chooseDriveFile({
                multiple: false
            }).then(file => {
                this.file = file;
            });
        },
        onChangeFile() {
            this.upload(this.$refs.file.files[0]);
        },
        upload(file, name) {
            this.$refs.uploader.upload(file, this.$store.state.settings.uploadFolder, name);
        },
        onUploaded(file) {
            this.file = file;
        },
        send() {
            this.sending = true;
            this.$root.api('messaging/messages/create', {
                userId: this.user ? this.user.id : undefined,
                groupId: this.group ? this.group.id : undefined,
                text: this.text ? this.text : undefined,
                fileId: this.file ? this.file.id : undefined
            }).then(message => {
                this.clear();
            }).catch(err => {
                console.error(err);
            }).then(() => {
                this.sending = false;
            });
        },
        clear() {
            this.text = '';
            this.file = null;
            this.deleteDraft();
        },
        saveDraft() {
            const data = JSON.parse(localStorage.getItem('message_drafts') || '{}');
            data[this.draftId] = {
                updatedAt: new Date(),
                data: {
                    text: this.text,
                    file: this.file
                }
            };
            localStorage.setItem('message_drafts', JSON.stringify(data));
        },
        deleteDraft() {
            const data = JSON.parse(localStorage.getItem('message_drafts') || '{}');
            delete data[this.draftId];
            localStorage.setItem('message_drafts', JSON.stringify(data));
        },
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.form.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_messaging_room_formvue_type_script_lang_ts_ = (messaging_room_formvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&
var messaging_room_formvue_type_style_index_0_id_9d382d7e_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/messaging-room.form.vue?vue&type=style&index=0&id=9d382d7e&lang=stylus&scoped=true&");

// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.form.vue






/* normalize component */

var messaging_room_form_component = Object(componentNormalizer["default"])(
  components_messaging_room_formvue_type_script_lang_ts_,
  messaging_room_formvue_type_template_id_9d382d7e_scoped_true_render,
  messaging_room_formvue_type_template_id_9d382d7e_scoped_true_staticRenderFns,
  false,
  null,
  "9d382d7e",
  null
  
)

/* hot reload */
if (false) { var messaging_room_form_api; }
messaging_room_form_component.options.__file = "src/client/app/common/views/components/messaging-room.form.vue"
/* harmony default export */ var messaging_room_form = (messaging_room_form_component.exports);
// EXTERNAL MODULE: ./src/client/app/config.ts
var config = __webpack_require__("./src/client/app/config.ts");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=script&lang=ts&






/* harmony default export */ var messaging_roomvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/messaging-room.vue'),
    components: {
        XMessage: messaging_room_message,
        XForm: messaging_room_form
    },
    props: {
        user: {
            type: Object,
            requird: false,
        },
        group: {
            type: Object,
            requird: false,
        },
        isNaked: {
            type: Boolean,
            requird: false,
        },
    },
    data() {
        return {
            init: true,
            fetchingMoreMessages: false,
            messages: [],
            existMoreMessages: false,
            connection: null,
            showIndicator: false,
            timer: null,
            faArrowCircleDown: index_es["faArrowCircleDown"], faFlag: index_es["faFlag"]
        };
    },
    computed: {
        _messages() {
            return this.messages.map(message => {
                const date = new Date(message.createdAt).getDate();
                const month = new Date(message.createdAt).getMonth() + 1;
                message._date = date;
                message._datetext = this.$t('@.month-and-day').replace('{month}', month.toString()).replace('{day}', date.toString());
                return message;
            });
        },
        form() {
            return this.$refs.form;
        }
    },
    mounted() {
        this.connection = this.$root.stream.connectToChannel('messaging', {
            otherparty: this.user ? this.user.id : undefined,
            group: this.group ? this.group.id : undefined,
        });
        this.connection.on('message', this.onMessage);
        this.connection.on('read', this.onRead);
        this.connection.on('deleted', this.onDeleted);
        if (this.isNaked) {
            window.addEventListener('scroll', this.onScroll, { passive: true });
        }
        else {
            this.$el.addEventListener('scroll', this.onScroll, { passive: true });
        }
        document.addEventListener('visibilitychange', this.onVisibilitychange);
        this.fetchMessages().then(() => {
            this.init = false;
            this.scrollToBottom();
        });
    },
    beforeDestroy() {
        this.connection.dispose();
        if (this.isNaked) {
            window.removeEventListener('scroll', this.onScroll);
        }
        else {
            this.$el.removeEventListener('scroll', this.onScroll);
        }
        document.removeEventListener('visibilitychange', this.onVisibilitychange);
    },
    methods: {
        onDragover(e) {
            const isFile = e.dataTransfer.items[0].kind == 'file';
            const isDriveFile = e.dataTransfer.types[0] == 'mk_drive_file';
            if (isFile || isDriveFile) {
                e.dataTransfer.dropEffect = e.dataTransfer.effectAllowed == 'all' ? 'copy' : 'move';
            }
            else {
                e.dataTransfer.dropEffect = 'none';
            }
        },
        onDrop(e) {
            // ファイルだったら
            if (e.dataTransfer.files.length == 1) {
                this.form.upload(e.dataTransfer.files[0]);
                return;
            }
            else if (e.dataTransfer.files.length > 1) {
                this.$root.dialog({
                    type: 'error',
                    text: this.$t('only-one-file-attached')
                });
                return;
            }
            //#region ドライブのファイル
            const driveFile = e.dataTransfer.getData('mk_drive_file');
            if (driveFile != null && driveFile != '') {
                const file = JSON.parse(driveFile);
                this.form.file = file;
            }
            //#endregion
        },
        fetchMessages() {
            return new Promise((resolve, reject) => {
                const max = this.existMoreMessages ? 20 : 10;
                this.$root.api('messaging/messages', {
                    userId: this.user ? this.user.id : undefined,
                    groupId: this.group ? this.group.id : undefined,
                    limit: max + 1,
                    untilId: this.existMoreMessages ? this.messages[0].id : undefined
                }).then(messages => {
                    if (messages.length == max + 1) {
                        this.existMoreMessages = true;
                        messages.pop();
                    }
                    else {
                        this.existMoreMessages = false;
                    }
                    this.messages.unshift.apply(this.messages, messages.reverse());
                    resolve();
                });
            });
        },
        fetchMoreMessages() {
            this.fetchingMoreMessages = true;
            this.fetchMessages().then(() => {
                this.fetchingMoreMessages = false;
            });
        },
        onMessage(message) {
            // サウンドを再生する
            if (this.$store.state.device.enableSounds) {
                const sound = new Audio(`${config["url"]}/assets/message.mp3`);
                sound.volume = this.$store.state.device.soundVolume;
                sound.play();
            }
            const isBottom = this.isBottom();
            this.messages.push(message);
            if (message.userId != this.$store.state.i.id && !document.hidden) {
                this.connection.send('read', {
                    id: message.id
                });
            }
            if (isBottom) {
                // Scroll to bottom
                this.$nextTick(() => {
                    this.scrollToBottom();
                });
            }
            else if (message.userId != this.$store.state.i.id) {
                // Notify
                this.notifyNewMessage();
            }
        },
        onRead(x) {
            if (this.user) {
                if (!Array.isArray(x))
                    x = [x];
                for (const id of x) {
                    if (this.messages.some(x => x.id == id)) {
                        const exist = this.messages.map(x => x.id).indexOf(id);
                        this.messages[exist].isRead = true;
                    }
                }
            }
            else if (this.group) {
                for (const id of x.ids) {
                    if (this.messages.some(x => x.id == id)) {
                        const exist = this.messages.map(x => x.id).indexOf(id);
                        this.messages[exist].reads.push(x.userId);
                    }
                }
            }
        },
        onDeleted(id) {
            const msg = this.messages.find(m => m.id === id);
            if (msg) {
                this.messages = this.messages.filter(m => m.id !== msg.id);
            }
        },
        isBottom() {
            const asobi = 64;
            const current = this.isNaked
                ? window.scrollY + window.innerHeight
                : this.$el.scrollTop + this.$el.offsetHeight;
            const max = this.isNaked
                ? document.body.offsetHeight
                : this.$el.scrollHeight;
            return current > (max - asobi);
        },
        scrollToBottom() {
            if (this.isNaked) {
                window.scroll(0, document.body.offsetHeight);
            }
            else {
                this.$el.scrollTop = this.$el.scrollHeight;
            }
        },
        onIndicatorClick() {
            this.showIndicator = false;
            this.scrollToBottom();
        },
        notifyNewMessage() {
            this.showIndicator = true;
            if (this.timer)
                clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.showIndicator = false;
            }, 4000);
        },
        onScroll() {
            const el = this.isNaked ? window.document.documentElement : this.$el;
            const current = el.scrollTop + el.clientHeight;
            if (current > el.scrollHeight - 1) {
                this.showIndicator = false;
            }
        },
        onVisibilitychange() {
            if (document.hidden)
                return;
            for (const message of this.messages) {
                if (message.userId !== this.$store.state.i.id && !message.isRead) {
                    this.connection.send('read', {
                        id: message.id
                    });
                }
            }
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_messaging_roomvue_type_script_lang_ts_ = (messaging_roomvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&
var messaging_roomvue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&");

// CONCATENATED MODULE: ./src/client/app/common/views/components/messaging-room.vue






/* normalize component */

var messaging_room_component = Object(componentNormalizer["default"])(
  components_messaging_roomvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "4abc0281",
  null
  
)

/* hot reload */
if (false) { var messaging_room_api; }
messaging_room_component.options.__file = "src/client/app/common/views/components/messaging-room.vue"
/* harmony default export */ var messaging_room = __webpack_exports__["default"] = (messaging_room_component.exports);

/***/ }),

/***/ "./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_vue_vue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/messaging-room.vue?vue&type=style&index=0&id=4abc0281&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_vue_vue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_vue_vue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_vue_vue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_vue_vue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_messaging_room_vue_vue_type_style_index_0_id_4abc0281_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=11.11.37.1.js.map