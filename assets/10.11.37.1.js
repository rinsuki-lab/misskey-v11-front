(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/crc-32/crc32.js":
/*!**************************************!*\
  !*** ./node_modules/crc-32/crc32.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*exported CRC32 */
var CRC32;
(function (factory) {
	/*jshint ignore:start */
	/*eslint-disable */
	if(typeof DO_NOT_EXPORT_CRC === 'undefined') {
		if(true) {
			factory(exports);
		} else {}
	} else {
		factory(CRC32 = {});
	}
	/*eslint-enable */
	/*jshint ignore:end */
}(function(CRC32) {
CRC32.version = '1.2.0';
/* see perf/crc32table.js */
/*global Int32Array */
function signed_crc_table() {
	var c = 0, table = new Array(256);

	for(var n =0; n != 256; ++n){
		c = n;
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		table[n] = c;
	}

	return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
}

var T = signed_crc_table();
function crc32_bstr(bstr, seed) {
	var C = seed ^ -1, L = bstr.length - 1;
	for(var i = 0; i < L;) {
		C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
		C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
	}
	if(i === L) C = (C>>>8) ^ T[(C ^ bstr.charCodeAt(i))&0xFF];
	return C ^ -1;
}

function crc32_buf(buf, seed) {
	if(buf.length > 10000) return crc32_buf_8(buf, seed);
	var C = seed ^ -1, L = buf.length - 3;
	for(var i = 0; i < L;) {
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	}
	while(i < L+3) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	return C ^ -1;
}

function crc32_buf_8(buf, seed) {
	var C = seed ^ -1, L = buf.length - 7;
	for(var i = 0; i < L;) {
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	}
	while(i < L+7) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	return C ^ -1;
}

function crc32_str(str, seed) {
	var C = seed ^ -1;
	for(var i = 0, L=str.length, c, d; i < L;) {
		c = str.charCodeAt(i++);
		if(c < 0x80) {
			C = (C>>>8) ^ T[(C ^ c)&0xFF];
		} else if(c < 0x800) {
			C = (C>>>8) ^ T[(C ^ (192|((c>>6)&31)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
		} else if(c >= 0xD800 && c < 0xE000) {
			c = (c&1023)+64; d = str.charCodeAt(i++)&1023;
			C = (C>>>8) ^ T[(C ^ (240|((c>>8)&7)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|((c>>2)&63)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|(d&63)))&0xFF];
		} else {
			C = (C>>>8) ^ T[(C ^ (224|((c>>12)&15)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|((c>>6)&63)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
		}
	}
	return C ^ -1;
}
CRC32.table = T;
// $FlowIgnore
CRC32.bstr = crc32_bstr;
// $FlowIgnore
CRC32.buf = crc32_buf;
// $FlowIgnore
CRC32.str = crc32_str;
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".xqnhankfuuilcwvhgsopeqncafzsquya[data-v-d73600e4]{text-align:center}.xqnhankfuuilcwvhgsopeqncafzsquya>.go-index[data-v-d73600e4]{position:absolute;top:0;left:0;z-index:1;width:42px;height:42px}.xqnhankfuuilcwvhgsopeqncafzsquya>header[data-v-d73600e4]{padding:8px;border-bottom:1px dashed var(--reversiGameHeaderLine)}.xqnhankfuuilcwvhgsopeqncafzsquya>header a[data-v-d73600e4]{color:inherit}.xqnhankfuuilcwvhgsopeqncafzsquya>.board[data-v-d73600e4]{width:calc(100% - 16px);max-width:500px;margin:0 auto}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.labels-x[data-v-d73600e4]{height:16px;padding:0 16px;display:flex}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.labels-x>*[data-v-d73600e4]{flex:1;display:flex;align-items:center;justify-content:center;font-size:12px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.labels-x[data-v-d73600e4]>:first-child{margin-left:-2px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.labels-x[data-v-d73600e4]>:last-child{margin-right:-2px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex[data-v-d73600e4]{display:flex}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.labels-y[data-v-d73600e4]{width:16px;display:flex;flex-direction:column}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.labels-y>*[data-v-d73600e4]{flex:1;display:flex;align-items:center;justify-content:center;font-size:12px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.labels-y[data-v-d73600e4]>:first-child{margin-top:-2px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.labels-y[data-v-d73600e4]>:last-child{margin-bottom:-2px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells[data-v-d73600e4]{flex:1;display:grid;grid-gap:4px}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div[data-v-d73600e4]{background:transparent;border-radius:6px;overflow:hidden}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div *[data-v-d73600e4]{pointer-events:none;user-select:none}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.empty[data-v-d73600e4]{border:2px solid var(--reversiGameEmptyCell)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.empty.can[data-v-d73600e4]{background:var(--reversiGameEmptyCell)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.empty.myTurn[data-v-d73600e4]{border-color:var(--reversiGameEmptyCellMyTurn)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.empty.myTurn.can[data-v-d73600e4]{background:var(--reversiGameEmptyCellCanPut);cursor:pointer}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.empty.myTurn.can[data-v-d73600e4]:hover{border-color:var(--primaryDarken10);background:var(--primary)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.empty.myTurn.can[data-v-d73600e4]:active{background:var(--primaryDarken10)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.prev[data-v-d73600e4]{box-shadow:0 0 0 4px var(--primaryAlpha07)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.isEnded[data-v-d73600e4]{border-color:var(--reversiGameEmptyCellMyTurn)}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div.none[data-v-d73600e4]{border-color:transparent!important}.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div>img[data-v-d73600e4],.xqnhankfuuilcwvhgsopeqncafzsquya>.board>.flex>.cells>div>svg[data-v-d73600e4]{display:block;width:100%;height:100%}.xqnhankfuuilcwvhgsopeqncafzsquya>.graph[data-v-d73600e4]{display:grid;grid-template-columns:repeat(61,1fr);width:300px;height:38px;margin:0 auto 16px}.xqnhankfuuilcwvhgsopeqncafzsquya>.graph>div[data-v-d73600e4]:not(:empty){background:#ccc}.xqnhankfuuilcwvhgsopeqncafzsquya>.graph>div>div[data-v-d73600e4]:first-child{background:#333}.xqnhankfuuilcwvhgsopeqncafzsquya>.graph>div>div[data-v-d73600e4]:last-child{background:#ccc}.xqnhankfuuilcwvhgsopeqncafzsquya>.status[data-v-d73600e4]{margin:0;padding:16px 0}.xqnhankfuuilcwvhgsopeqncafzsquya>.actions[data-v-d73600e4]{padding-bottom:16px}.xqnhankfuuilcwvhgsopeqncafzsquya>.player[data-v-d73600e4]{padding:0 16px 32px;margin:0 auto;max-width:500px}.xqnhankfuuilcwvhgsopeqncafzsquya>.player>span[data-v-d73600e4]{display:inline-block;margin:0 8px;min-width:70px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>h1[data-v-e1e5ce34]{margin:0;padding:24px;font-size:24px;text-align:center;font-weight:400;color:#fff;background:linear-gradient(180deg,var(--reversiBannerGradientStart),var(--reversiBannerGradientEnd))}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>h1+p[data-v-e1e5ce34]{padding:12px;margin:0 0 12px;text-align:center;font-size:14px;border-bottom:1px solid var(--faceDivider)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>.play[data-v-e1e5ce34]{margin:0 auto;padding:0 16px;max-width:500px;text-align:center}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>.play>details[data-v-e1e5ce34]{margin:8px 0}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>.play>details>div[data-v-e1e5ce34]{padding:16px;font-size:14px;text-align:left;background:var(--reversiDescBg);border-radius:8px}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>section[data-v-e1e5ce34]{margin:0 auto;padding:0 16px 16px;max-width:500px;border-top:1px solid var(--faceDivider)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx>section>h2[data-v-e1e5ce34]{margin:0;padding:16px 0 8px;font-size:16px;font-weight:700}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation[data-v-e1e5ce34]{margin:8px 0;padding:8px;color:var(--text);background:var(--face);box-shadow:0 2px 16px var(--reversiListItemShadow);border-radius:6px;cursor:pointer}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation *[data-v-e1e5ce34]{pointer-events:none;user-select:none}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation[data-v-e1e5ce34]:focus{border-color:var(--primary)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation[data-v-e1e5ce34]:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.05)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation[data-v-e1e5ce34]:active{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation>.avatar[data-v-e1e5ce34]{width:32px;height:32px;border-radius:100%}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .invitation>span[data-v-e1e5ce34]{margin:0 8px;line-height:32px}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .game[data-v-e1e5ce34]{display:block;margin:8px 0;padding:8px;color:var(--text);background:var(--face);box-shadow:0 2px 16px var(--reversiListItemShadow);border-radius:6px;cursor:pointer}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .game *[data-v-e1e5ce34]{pointer-events:none;user-select:none}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .game[data-v-e1e5ce34]:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.05)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .game[data-v-e1e5ce34]:active{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .game>.avatar[data-v-e1e5ce34]{width:32px;height:32px;border-radius:100%}.phgnkghfpyvkrvwiajkiuoxyrdaqpzcx .game>span[data-v-e1e5ce34]{margin:0 8px;line-height:32px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".urbixznjwwuukfsckrwzwsqzsxornqij[data-v-18f8d012]{text-align:center;background:var(--bg)}.urbixznjwwuukfsckrwzwsqzsxornqij>header[data-v-18f8d012]{padding:8px;border-bottom:1px dashed #c4cdd4}.urbixznjwwuukfsckrwzwsqzsxornqij>div[data-v-18f8d012]{padding:0 16px}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card[data-v-18f8d012]{margin:0 auto 16px}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>header>select[data-v-18f8d012]{width:100%;padding:12px 14px;background:var(--face);border:1px solid var(--reversiMapSelectBorder);border-radius:4px;color:var(--text);cursor:pointer;transition:border-color .2s cubic-bezier(.645,.045,.355,1);-webkit-appearance:none;-moz-appearance:none;appearance:none}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>header>select[data-v-18f8d012]:hover{border-color:var(--reversiMapSelectHoverBorder)}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>header>select[data-v-18f8d012]:active,.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>header>select[data-v-18f8d012]:focus{border-color:var(--primary)}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>div>.random[data-v-18f8d012]{padding:32px 0;font-size:64px;color:var(--text);opacity:.7}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>div>.board[data-v-18f8d012]{display:grid;grid-gap:4px;width:300px;height:300px;margin:0 auto;color:var(--text)}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>div>.board>div[data-v-18f8d012]{background:transparent;border:2px solid var(--faceDivider);border-radius:6px;overflow:hidden;cursor:pointer}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>div>.board>div *[data-v-18f8d012]{pointer-events:none;user-select:none;width:100%;height:100%}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.map>div>.board>div[data-none][data-v-18f8d012]{border-color:transparent}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.form>div>.card+.card[data-v-18f8d012]{margin-top:16px}.urbixznjwwuukfsckrwzwsqzsxornqij>div>.card.form>div input[type=range][data-v-18f8d012]{width:100%}.urbixznjwwuukfsckrwzwsqzsxornqij>div .card[data-v-18f8d012]{max-width:400px;border-radius:4px;background:var(--face);color:var(--text);box-shadow:0 2px 12px 0 var(--reversiRoomFormShadow)}.urbixznjwwuukfsckrwzwsqzsxornqij>div .card>header[data-v-18f8d012]{padding:18px 20px;border-bottom:1px solid var(--faceDivider)}.urbixznjwwuukfsckrwzwsqzsxornqij>div .card>div[data-v-18f8d012]{padding:20px;color:var(--text)}.urbixznjwwuukfsckrwzwsqzsxornqij>footer[data-v-18f8d012]{position:sticky;bottom:0;padding:16px;background:var(--reversiRoomFooterBg);border-top:1px solid var(--faceDivider)}.urbixznjwwuukfsckrwzwsqzsxornqij>footer>.status[data-v-18f8d012]{margin:0 0 16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vchtoekanapleubgzioubdtmlkribzfd[data-v-522b4d02]{color:var(--text);background:var(--bg)}.vchtoekanapleubgzioubdtmlkribzfd>.matching>h1[data-v-522b4d02]{margin:0;padding:24px;font-size:20px;text-align:center;font-weight:400}.vchtoekanapleubgzioubdtmlkribzfd>.matching>.cancel[data-v-522b4d02]{margin:0 auto;padding:24px 0 0;max-width:200px;text-align:center;border-top:1px dashed #c4cdd4}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("37a13f5f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("498d963a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7b625d50", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("121f3783", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_game_vue_vue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_game_vue_vue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_game_vue_vue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_game_vue_vue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_game_vue_vue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_game_vue_vue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_index_vue_vue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_index_vue_vue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_index_vue_vue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_index_vue_vue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_index_vue_vue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_index_vue_vue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_room_vue_vue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_room_vue_vue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_room_vue_vue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_room_vue_vue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_room_vue_vue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_room_vue_vue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/client/app/common/views/components/games/reversi/reversi.vue":
/*!***************************************************************************************!*\
  !*** ./src/client/app/common/views/components/games/reversi/reversi.vue + 26 modules ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/crc-32/crc32.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/scripts/loading.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/config.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/prelude/array.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var maps_namespaceObject = {};
__webpack_require__.r(maps_namespaceObject);
__webpack_require__.d(maps_namespaceObject, "fourfour", function() { return fourfour; });
__webpack_require__.d(maps_namespaceObject, "sixsix", function() { return sixsix; });
__webpack_require__.d(maps_namespaceObject, "roundedSixsix", function() { return roundedSixsix; });
__webpack_require__.d(maps_namespaceObject, "roundedSixsix2", function() { return roundedSixsix2; });
__webpack_require__.d(maps_namespaceObject, "eighteight", function() { return eighteight; });
__webpack_require__.d(maps_namespaceObject, "eighteightH1", function() { return eighteightH1; });
__webpack_require__.d(maps_namespaceObject, "eighteightH2", function() { return eighteightH2; });
__webpack_require__.d(maps_namespaceObject, "eighteightH3", function() { return eighteightH3; });
__webpack_require__.d(maps_namespaceObject, "eighteightH4", function() { return eighteightH4; });
__webpack_require__.d(maps_namespaceObject, "eighteightH12", function() { return eighteightH12; });
__webpack_require__.d(maps_namespaceObject, "eighteightH16", function() { return eighteightH16; });
__webpack_require__.d(maps_namespaceObject, "eighteightH20", function() { return eighteightH20; });
__webpack_require__.d(maps_namespaceObject, "eighteightH28", function() { return eighteightH28; });
__webpack_require__.d(maps_namespaceObject, "roundedEighteight", function() { return roundedEighteight; });
__webpack_require__.d(maps_namespaceObject, "roundedEighteight2", function() { return roundedEighteight2; });
__webpack_require__.d(maps_namespaceObject, "roundedEighteight3", function() { return roundedEighteight3; });
__webpack_require__.d(maps_namespaceObject, "eighteightWithNotch", function() { return eighteightWithNotch; });
__webpack_require__.d(maps_namespaceObject, "eighteightWithSomeHoles", function() { return eighteightWithSomeHoles; });
__webpack_require__.d(maps_namespaceObject, "circle", function() { return circle; });
__webpack_require__.d(maps_namespaceObject, "smile", function() { return smile; });
__webpack_require__.d(maps_namespaceObject, "window", function() { return maps_window; });
__webpack_require__.d(maps_namespaceObject, "reserved", function() { return reserved; });
__webpack_require__.d(maps_namespaceObject, "x", function() { return maps_x; });
__webpack_require__.d(maps_namespaceObject, "parallel", function() { return parallel; });
__webpack_require__.d(maps_namespaceObject, "lackOfBlack", function() { return lackOfBlack; });
__webpack_require__.d(maps_namespaceObject, "squareParty", function() { return squareParty; });
__webpack_require__.d(maps_namespaceObject, "minesweeper", function() { return minesweeper; });
__webpack_require__.d(maps_namespaceObject, "tenthtenth", function() { return tenthtenth; });
__webpack_require__.d(maps_namespaceObject, "hole", function() { return hole; });
__webpack_require__.d(maps_namespaceObject, "grid", function() { return grid; });
__webpack_require__.d(maps_namespaceObject, "cross", function() { return cross; });
__webpack_require__.d(maps_namespaceObject, "charX", function() { return charX; });
__webpack_require__.d(maps_namespaceObject, "charY", function() { return charY; });
__webpack_require__.d(maps_namespaceObject, "walls", function() { return walls; });
__webpack_require__.d(maps_namespaceObject, "cpu", function() { return cpu; });
__webpack_require__.d(maps_namespaceObject, "checker", function() { return checker; });
__webpack_require__.d(maps_namespaceObject, "japaneseCurry", function() { return japaneseCurry; });
__webpack_require__.d(maps_namespaceObject, "mosaic", function() { return mosaic; });
__webpack_require__.d(maps_namespaceObject, "arena", function() { return arena; });
__webpack_require__.d(maps_namespaceObject, "reactor", function() { return reactor; });
__webpack_require__.d(maps_namespaceObject, "sixeight", function() { return sixeight; });
__webpack_require__.d(maps_namespaceObject, "spark", function() { return spark; });
__webpack_require__.d(maps_namespaceObject, "islands", function() { return islands; });
__webpack_require__.d(maps_namespaceObject, "galaxy", function() { return galaxy; });
__webpack_require__.d(maps_namespaceObject, "triangle", function() { return triangle; });
__webpack_require__.d(maps_namespaceObject, "iphonex", function() { return iphonex; });
__webpack_require__.d(maps_namespaceObject, "dealWithIt", function() { return dealWithIt; });
__webpack_require__.d(maps_namespaceObject, "experiment", function() { return experiment; });
__webpack_require__.d(maps_namespaceObject, "bigBoard", function() { return bigBoard; });
__webpack_require__.d(maps_namespaceObject, "twoBoard", function() { return twoBoard; });
__webpack_require__.d(maps_namespaceObject, "test1", function() { return test1; });
__webpack_require__.d(maps_namespaceObject, "test2", function() { return test2; });
__webpack_require__.d(maps_namespaceObject, "test3", function() { return test3; });
__webpack_require__.d(maps_namespaceObject, "test4", function() { return test4; });
__webpack_require__.d(maps_namespaceObject, "test5", function() { return test5; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=template&id=522b4d02&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vchtoekanapleubgzioubdtmlkribzfd" }, [
    _vm.game
      ? _c(
          "div",
          [
            _c("x-gameroom", {
              attrs: { game: _vm.game, "self-nav": _vm.selfNav },
              on: { "go-index": _vm.goIndex }
            })
          ],
          1
        )
      : _vm.matching
      ? _c("div", { staticClass: "matching" }, [
          _c(
            "h1",
            [
              _vm._v(_vm._s(this.$t("matching.waiting-for").split("{}")[0])),
              _c(
                "b",
                [_c("mk-user-name", { attrs: { user: _vm.matching } })],
                1
              ),
              _vm._v(_vm._s(this.$t("matching.waiting-for").split("{}")[1])),
              _c("mk-ellipsis")
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "cancel" },
            [
              _c(
                "form-button",
                { attrs: { round: "" }, on: { click: _vm.cancel } },
                [_vm._v(_vm._s(_vm.$t("matching.cancel")))]
              )
            ],
            1
          )
        ])
      : _vm.gameId
      ? _c("div", [_vm._v("\n\t\t...\n\t")])
      : _c(
          "div",
          { staticClass: "index" },
          [_c("x-index", { on: { go: _vm.nav, matching: _vm.onMatching } })],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=template&id=522b4d02&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.gameroom.vue?vue&type=template&id=2125a02e&
var reversi_gameroomvue_type_template_id_2125a02e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.g.isStarted
        ? _c("x-room", { attrs: { game: _vm.g, connection: _vm.connection } })
        : _c("x-game", {
            attrs: {
              "init-game": _vm.g,
              connection: _vm.connection,
              "self-nav": _vm.selfNav
            },
            on: { "go-index": _vm.goIndex }
          })
    ],
    1
  )
}
var reversi_gameroomvue_type_template_id_2125a02e_staticRenderFns = []
reversi_gameroomvue_type_template_id_2125a02e_render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.gameroom.vue?vue&type=template&id=2125a02e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=template&id=d73600e4&scoped=true&
var reversi_gamevue_type_template_id_d73600e4_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "xqnhankfuuilcwvhgsopeqncafzsquya" }, [
    _vm.selfNav
      ? _c(
          "button",
          { staticClass: "go-index", on: { click: _vm.goIndex } },
          [_c("fa", { attrs: { icon: "arrow-left" } })],
          1
        )
      : _vm._e(),
    _c("header", [
      _c(
        "b",
        [
          _c(
            "router-link",
            { attrs: { to: _vm._f("userPage")(_vm.blackUser) } },
            [_c("mk-user-name", { attrs: { user: _vm.blackUser } })],
            1
          )
        ],
        1
      ),
      _vm._v("(" + _vm._s(_vm.$t("@.reversi.black")) + ") vs "),
      _c(
        "b",
        [
          _c(
            "router-link",
            { attrs: { to: _vm._f("userPage")(_vm.whiteUser) } },
            [_c("mk-user-name", { attrs: { user: _vm.whiteUser } })],
            1
          )
        ],
        1
      ),
      _vm._v("(" + _vm._s(_vm.$t("@.reversi.white")) + ")")
    ]),
    _c("div", { staticStyle: { overflow: "hidden", "line-height": "28px" } }, [
      !_vm.iAmPlayer && !_vm.game.isEnded
        ? _c(
            "p",
            { staticClass: "turn" },
            [
              _c("mfm", {
                key: "turn:" + _vm.$options.filters.userName(_vm.turnUser),
                attrs: {
                  text: _vm.$t("@.reversi.turn-of", {
                    name: _vm.$options.filters.userName(_vm.turnUser)
                  }),
                  plain: true,
                  "custom-emojis": _vm.turnUser.emojis
                }
              }),
              _c("mk-ellipsis")
            ],
            1
          )
        : _vm._e(),
      _vm.logPos != _vm.logs.length
        ? _c(
            "p",
            { staticClass: "turn" },
            [
              _c("mfm", {
                key:
                  "past-turn-of:" + _vm.$options.filters.userName(_vm.turnUser),
                attrs: {
                  text: _vm.$t("@.reversi.past-turn-of", {
                    name: _vm.$options.filters.userName(_vm.turnUser)
                  }),
                  plain: true,
                  "custom-emojis": _vm.turnUser.emojis
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm.iAmPlayer && !_vm.game.isEnded && !_vm.isMyTurn
        ? _c(
            "p",
            { staticClass: "turn1" },
            [
              _vm._v(_vm._s(_vm.$t("@.reversi.opponent-turn"))),
              _c("mk-ellipsis")
            ],
            1
          )
        : _vm._e(),
      _vm.iAmPlayer && !_vm.game.isEnded && _vm.isMyTurn
        ? _c(
            "p",
            {
              directives: [
                {
                  name: "animate-css",
                  rawName: "v-animate-css",
                  value: { classes: "tada", iteration: "infinite" },
                  expression: "{ classes: 'tada', iteration: 'infinite' }"
                }
              ],
              staticClass: "turn2"
            },
            [_vm._v(_vm._s(_vm.$t("@.reversi.my-turn")))]
          )
        : _vm._e(),
      _vm.game.isEnded && _vm.logPos == _vm.logs.length
        ? _c(
            "p",
            { staticClass: "result" },
            [
              _vm.game.winner
                ? [
                    _c("mfm", {
                      key: "won",
                      attrs: {
                        text: _vm.$t("@.reversi.won", {
                          name: _vm.$options.filters.userName(_vm.game.winner)
                        }),
                        plain: true,
                        "custom-emojis": _vm.game.winner.emojis
                      }
                    }),
                    _vm.game.surrendered != null
                      ? _c("span", [
                          _vm._v(" (" + _vm._s(_vm.$t("surrendered")) + ")")
                        ])
                      : _vm._e()
                  ]
                : [_vm._v(_vm._s(_vm.$t("@.reversi.drawn")))]
            ],
            2
          )
        : _vm._e()
    ]),
    _c("div", { staticClass: "board" }, [
      _vm.$store.state.settings.gamesReversiShowBoardLabels
        ? _c(
            "div",
            { staticClass: "labels-x" },
            _vm._l(_vm.game.map[0].length, function(i) {
              return _c("span", [_vm._v(_vm._s(String.fromCharCode(64 + i)))])
            }),
            0
          )
        : _vm._e(),
      _c("div", { staticClass: "flex" }, [
        _vm.$store.state.settings.gamesReversiShowBoardLabels
          ? _c(
              "div",
              { staticClass: "labels-y" },
              _vm._l(_vm.game.map.length, function(i) {
                return _c("div", [_vm._v(_vm._s(i))])
              }),
              0
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "cells", style: _vm.cellsStyle },
          _vm._l(_vm.o.board, function(stone, i) {
            return _c(
              "div",
              {
                class: {
                  empty: stone == null,
                  none: _vm.o.map[i] == "null",
                  isEnded: _vm.game.isEnded,
                  myTurn: !_vm.game.isEnded && _vm.isMyTurn,
                  can: _vm.turnUser
                    ? _vm.o.canPut(_vm.turnUser.id == _vm.blackUser.id, i)
                    : null,
                  prev: _vm.o.prevPos == i
                },
                attrs: {
                  title:
                    "" +
                    String.fromCharCode(65 + _vm.o.transformPosToXy(i)[0]) +
                    (_vm.o.transformPosToXy(i)[1] + 1)
                },
                on: {
                  click: function($event) {
                    return _vm.set(i)
                  }
                }
              },
              [
                _vm.$store.state.settings.gamesReversiUseAvatarStones
                  ? [
                      stone === true
                        ? _c("img", {
                            attrs: {
                              src: _vm.blackUser.avatarUrl,
                              alt: "black"
                            }
                          })
                        : _vm._e(),
                      stone === false
                        ? _c("img", {
                            attrs: {
                              src: _vm.whiteUser.avatarUrl,
                              alt: "white"
                            }
                          })
                        : _vm._e()
                    ]
                  : [
                      stone === true
                        ? _c("fa", { attrs: { icon: _vm.fasCircle } })
                        : _vm._e(),
                      stone === false
                        ? _c("fa", { attrs: { icon: _vm.farCircle } })
                        : _vm._e()
                    ]
              ],
              2
            )
          }),
          0
        ),
        this.$store.state.settings.gamesReversiShowBoardLabels
          ? _c(
              "div",
              { staticClass: "labels-y" },
              _vm._l(_vm.game.map.length, function(i) {
                return _c("div", [_vm._v(_vm._s(i))])
              }),
              0
            )
          : _vm._e()
      ]),
      this.$store.state.settings.gamesReversiShowBoardLabels
        ? _c(
            "div",
            { staticClass: "labels-x" },
            _vm._l(_vm.game.map[0].length, function(i) {
              return _c("span", [_vm._v(_vm._s(String.fromCharCode(64 + i)))])
            }),
            0
          )
        : _vm._e()
    ]),
    _c("p", { staticClass: "status" }, [
      _c("b", [
        _vm._v(_vm._s(_vm.$t("@.reversi.this-turn", { count: _vm.logPos })))
      ]),
      _vm._v(
        " " +
          _vm._s(_vm.$t("@.reversi.black")) +
          ":" +
          _vm._s(_vm.o.blackCount) +
          " " +
          _vm._s(_vm.$t("@.reversi.white")) +
          ":" +
          _vm._s(_vm.o.whiteCount) +
          " " +
          _vm._s(_vm.$t("@.reversi.total")) +
          ":" +
          _vm._s(_vm.o.blackCount + _vm.o.whiteCount)
      )
    ]),
    !_vm.game.isEnded && _vm.iAmPlayer
      ? _c(
          "div",
          { staticClass: "actions" },
          [
            _c("form-button", { on: { click: _vm.surrender } }, [
              _vm._v(_vm._s(_vm.$t("surrender")))
            ])
          ],
          1
        )
      : _vm._e(),
    _vm.game.isEnded
      ? _c(
          "div",
          { staticClass: "player" },
          [
            _c("span", [
              _vm._v(_vm._s(_vm.logPos) + " / " + _vm._s(_vm.logs.length))
            ]),
            _c(
              "ui-horizon-group",
              [
                _c(
                  "ui-button",
                  {
                    attrs: { disabled: _vm.logPos == 0 },
                    on: {
                      click: function($event) {
                        _vm.logPos = 0
                      }
                    }
                  },
                  [_c("fa", { attrs: { icon: _vm.faAngleDoubleLeft } })],
                  1
                ),
                _c(
                  "ui-button",
                  {
                    attrs: { disabled: _vm.logPos == 0 },
                    on: {
                      click: function($event) {
                        _vm.logPos--
                      }
                    }
                  },
                  [_c("fa", { attrs: { icon: _vm.faAngleLeft } })],
                  1
                ),
                _c(
                  "ui-button",
                  {
                    attrs: { disabled: _vm.logPos == _vm.logs.length },
                    on: {
                      click: function($event) {
                        _vm.logPos++
                      }
                    }
                  },
                  [_c("fa", { attrs: { icon: _vm.faAngleRight } })],
                  1
                ),
                _c(
                  "ui-button",
                  {
                    attrs: { disabled: _vm.logPos == _vm.logs.length },
                    on: {
                      click: function($event) {
                        _vm.logPos = _vm.logs.length
                      }
                    }
                  },
                  [_c("fa", { attrs: { icon: _vm.faAngleDoubleRight } })],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _c("div", { staticClass: "info" }, [
      _vm.game.isLlotheo
        ? _c("p", [_vm._v(_vm._s(_vm.$t("is-llotheo")))])
        : _vm._e(),
      _vm.game.loopedBoard
        ? _c("p", [_vm._v(_vm._s(_vm.$t("looped-map")))])
        : _vm._e(),
      _vm.game.canPutEverywhere
        ? _c("p", [_vm._v(_vm._s(_vm.$t("can-put-everywhere")))])
        : _vm._e()
    ])
  ])
}
var reversi_gamevue_type_template_id_d73600e4_scoped_true_staticRenderFns = []
reversi_gamevue_type_template_id_d73600e4_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=template&id=d73600e4&scoped=true&

// EXTERNAL MODULE: ./node_modules/crc-32/crc32.js
var crc_32_crc32 = __webpack_require__("./node_modules/crc-32/crc32.js");

// EXTERNAL MODULE: ./src/prelude/array.ts
var array = __webpack_require__("./src/prelude/array.ts");

// CONCATENATED MODULE: ./src/games/reversi/core.ts

const BLACK = true;
const WHITE = false;
/**
 * リバーシエンジン
 */
class core_Reversi {
    /**
     * ゲームを初期化します
     */
    constructor(map, opts) {
        this.turn = BLACK;
        this.prevPos = -1;
        this.prevColor = null;
        this.logs = [];
        //#region binds
        this.put = this.put.bind(this);
        //#endregion
        //#region Options
        this.opts = opts;
        if (this.opts.isLlotheo == null)
            this.opts.isLlotheo = false;
        if (this.opts.canPutEverywhere == null)
            this.opts.canPutEverywhere = false;
        if (this.opts.loopedBoard == null)
            this.opts.loopedBoard = false;
        //#endregion
        //#region Parse map data
        this.mapWidth = map[0].length;
        this.mapHeight = map.length;
        const mapData = map.join('');
        this.board = mapData.split('').map(d => d === '-' ? null : d === 'b' ? BLACK : d === 'w' ? WHITE : undefined);
        this.map = mapData.split('').map(d => d === '-' || d === 'b' || d === 'w' ? 'empty' : 'null');
        //#endregion
        // ゲームが始まった時点で片方の色の石しかないか、始まった時点で勝敗が決定するようなマップの場合がある
        if (!this.canPutSomewhere(BLACK))
            this.turn = this.canPutSomewhere(WHITE) ? WHITE : null;
    }
    /**
     * 黒石の数
     */
    get blackCount() {
        return Object(array["count"])(BLACK, this.board);
    }
    /**
     * 白石の数
     */
    get whiteCount() {
        return Object(array["count"])(WHITE, this.board);
    }
    transformPosToXy(pos) {
        const x = pos % this.mapWidth;
        const y = Math.floor(pos / this.mapWidth);
        return [x, y];
    }
    transformXyToPos(x, y) {
        return x + (y * this.mapWidth);
    }
    /**
     * 指定のマスに石を打ちます
     * @param color 石の色
     * @param pos 位置
     */
    put(color, pos) {
        this.prevPos = pos;
        this.prevColor = color;
        this.board[pos] = color;
        // 反転させられる石を取得
        const effects = this.effects(color, pos);
        // 反転させる
        for (const pos of effects) {
            this.board[pos] = color;
        }
        const turn = this.turn;
        this.logs.push({
            color,
            pos,
            effects,
            turn
        });
        this.calcTurn();
    }
    calcTurn() {
        // ターン計算
        this.turn =
            this.canPutSomewhere(!this.prevColor) ? !this.prevColor :
                this.canPutSomewhere(this.prevColor) ? this.prevColor :
                    null;
    }
    undo() {
        const undo = this.logs.pop();
        this.prevColor = undo.color;
        this.prevPos = undo.pos;
        this.board[undo.pos] = null;
        for (const pos of undo.effects) {
            const color = this.board[pos];
            this.board[pos] = !color;
        }
        this.turn = undo.turn;
    }
    /**
     * 指定した位置のマップデータのマスを取得します
     * @param pos 位置
     */
    mapDataGet(pos) {
        const [x, y] = this.transformPosToXy(pos);
        return x < 0 || y < 0 || x >= this.mapWidth || y >= this.mapHeight ? 'null' : this.map[pos];
    }
    /**
     * 打つことができる場所を取得します
     */
    puttablePlaces(color) {
        return Array.from(this.board.keys()).filter(i => this.canPut(color, i));
    }
    /**
     * 打つことができる場所があるかどうかを取得します
     */
    canPutSomewhere(color) {
        return this.puttablePlaces(color).length > 0;
    }
    /**
     * 指定のマスに石を打つことができるかどうかを取得します
     * @param color 自分の色
     * @param pos 位置
     */
    canPut(color, pos) {
        return (this.board[pos] !== null ? false : // 既に石が置いてある場所には打てない
            this.opts.canPutEverywhere ? this.mapDataGet(pos) == 'empty' : // 挟んでなくても置けるモード
                this.effects(color, pos).length !== 0); // 相手の石を1つでも反転させられるか
    }
    /**
     * 指定のマスに石を置いた時の、反転させられる石を取得します
     * @param color 自分の色
     * @param initPos 位置
     */
    effects(color, initPos) {
        const enemyColor = !color;
        const diffVectors = [
            [0, -1],
            [+1, -1],
            [+1, 0],
            [+1, +1],
            [0, +1],
            [-1, +1],
            [-1, 0],
            [-1, -1] // 左上
        ];
        const effectsInLine = ([dx, dy]) => {
            const nextPos = (x, y) => [x + dx, y + dy];
            const found = []; // 挟めるかもしれない相手の石を入れておく配列
            let [x, y] = this.transformPosToXy(initPos);
            while (true) {
                [x, y] = nextPos(x, y);
                // 座標が指し示す位置がボード外に出たとき
                if (this.opts.loopedBoard && this.transformXyToPos((x = ((x % this.mapWidth) + this.mapWidth) % this.mapWidth), (y = ((y % this.mapHeight) + this.mapHeight) % this.mapHeight)) == initPos)
                    // 盤面の境界でループし、自分が石を置く位置に戻ってきたとき、挟めるようにしている (ref: Test4のマップ)
                    return found;
                else if (x == -1 || y == -1 || x == this.mapWidth || y == this.mapHeight)
                    return []; // 挟めないことが確定 (盤面外に到達)
                const pos = this.transformXyToPos(x, y);
                if (this.mapDataGet(pos) === 'null')
                    return []; // 挟めないことが確定 (配置不可能なマスに到達)
                const stone = this.board[pos];
                if (stone === null)
                    return []; // 挟めないことが確定 (石が置かれていないマスに到達)
                if (stone === enemyColor)
                    found.push(pos); // 挟めるかもしれない (相手の石を発見)
                if (stone === color)
                    return found; // 挟めることが確定 (対となる自分の石を発見)
            }
        };
        return Object(array["concat"])(diffVectors.map(effectsInLine));
    }
    /**
     * ゲームが終了したか否か
     */
    get isEnded() {
        return this.turn === null;
    }
    /**
     * ゲームの勝者 (null = 引き分け)
     */
    get winner() {
        return this.isEnded ?
            this.blackCount == this.whiteCount ? null :
                this.opts.isLlotheo === this.blackCount > this.whiteCount ? WHITE : BLACK :
            undefined;
    }
}

// EXTERNAL MODULE: ./src/client/app/config.ts
var config = __webpack_require__("./src/client/app/config.ts");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=script&lang=ts&








/* harmony default export */ var reversi_gamevue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/games/reversi/reversi.game.vue'),
    props: {
        initGame: {
            type: Object,
            require: true
        },
        connection: {
            type: Object,
            require: true
        },
        selfNav: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            game: null,
            o: null,
            logs: [],
            logPos: 0,
            pollingClock: null,
            faAngleDoubleLeft: index_es["faAngleDoubleLeft"], faAngleLeft: index_es["faAngleLeft"], faAngleRight: index_es["faAngleRight"], faAngleDoubleRight: index_es["faAngleDoubleRight"], fasCircle: index_es["faCircle"], farCircle: free_regular_svg_icons_index_es["faCircle"]
        };
    },
    computed: {
        iAmPlayer() {
            if (!this.$store.getters.isSignedIn)
                return false;
            return this.game.user1Id == this.$store.state.i.id || this.game.user2Id == this.$store.state.i.id;
        },
        myColor() {
            if (!this.iAmPlayer)
                return null;
            if (this.game.user1Id == this.$store.state.i.id && this.game.black == 1)
                return true;
            if (this.game.user2Id == this.$store.state.i.id && this.game.black == 2)
                return true;
            return false;
        },
        opColor() {
            if (!this.iAmPlayer)
                return null;
            return this.myColor === true ? false : true;
        },
        blackUser() {
            return this.game.black == 1 ? this.game.user1 : this.game.user2;
        },
        whiteUser() {
            return this.game.black == 1 ? this.game.user2 : this.game.user1;
        },
        turnUser() {
            if (this.o.turn === true) {
                return this.game.black == 1 ? this.game.user1 : this.game.user2;
            }
            else if (this.o.turn === false) {
                return this.game.black == 1 ? this.game.user2 : this.game.user1;
            }
            else {
                return null;
            }
        },
        isMyTurn() {
            if (!this.iAmPlayer)
                return false;
            if (this.turnUser == null)
                return false;
            return this.turnUser.id == this.$store.state.i.id;
        },
        cellsStyle() {
            return {
                'grid-template-rows': `repeat(${this.game.map.length}, 1fr)`,
                'grid-template-columns': `repeat(${this.game.map[0].length}, 1fr)`
            };
        }
    },
    watch: {
        logPos(v) {
            if (!this.game.isEnded)
                return;
            this.o = new core_Reversi(this.game.map, {
                isLlotheo: this.game.isLlotheo,
                canPutEverywhere: this.game.canPutEverywhere,
                loopedBoard: this.game.loopedBoard
            });
            for (const log of this.logs.slice(0, v)) {
                this.o.put(log.color, log.pos);
            }
            this.$forceUpdate();
        }
    },
    created() {
        this.game = this.initGame;
        this.o = new core_Reversi(this.game.map, {
            isLlotheo: this.game.isLlotheo,
            canPutEverywhere: this.game.canPutEverywhere,
            loopedBoard: this.game.loopedBoard
        });
        for (const log of this.game.logs) {
            this.o.put(log.color, log.pos);
        }
        this.logs = this.game.logs;
        this.logPos = this.logs.length;
        // 通信を取りこぼしてもいいように定期的にポーリングさせる
        if (this.game.isStarted && !this.game.isEnded) {
            this.pollingClock = setInterval(() => {
                if (this.game.isEnded)
                    return;
                const crc32 = crc_32_crc32["str"](this.logs.map(x => x.pos.toString()).join(''));
                this.connection.send('check', {
                    crc32: crc32
                });
            }, 3000);
        }
    },
    mounted() {
        this.connection.on('set', this.onSet);
        this.connection.on('rescue', this.onRescue);
        this.connection.on('ended', this.onEnded);
    },
    beforeDestroy() {
        this.connection.off('set', this.onSet);
        this.connection.off('rescue', this.onRescue);
        this.connection.off('ended', this.onEnded);
        clearInterval(this.pollingClock);
    },
    methods: {
        set(pos) {
            if (this.game.isEnded)
                return;
            if (!this.iAmPlayer)
                return;
            if (!this.isMyTurn)
                return;
            if (!this.o.canPut(this.myColor, pos))
                return;
            this.o.put(this.myColor, pos);
            // サウンドを再生する
            if (this.$store.state.device.enableSounds) {
                const sound = new Audio(`${config["url"]}/assets/reversi-put-me.mp3`);
                sound.volume = this.$store.state.device.soundVolume;
                sound.play();
            }
            this.connection.send('set', {
                pos: pos
            });
            this.checkEnd();
            this.$forceUpdate();
        },
        onSet(x) {
            this.logs.push(x);
            this.logPos++;
            this.o.put(x.color, x.pos);
            this.checkEnd();
            this.$forceUpdate();
            // サウンドを再生する
            if (this.$store.state.device.enableSounds && x.color != this.myColor) {
                const sound = new Audio(`${config["url"]}/assets/reversi-put-you.mp3`);
                sound.volume = this.$store.state.device.soundVolume;
                sound.play();
            }
        },
        onEnded(x) {
            this.game = x.game;
        },
        checkEnd() {
            this.game.isEnded = this.o.isEnded;
            if (this.game.isEnded) {
                if (this.o.winner === true) {
                    this.game.winnerId = this.game.black == 1 ? this.game.user1Id : this.game.user2Id;
                    this.game.winner = this.game.black == 1 ? this.game.user1 : this.game.user2;
                }
                else if (this.o.winner === false) {
                    this.game.winnerId = this.game.black == 1 ? this.game.user2Id : this.game.user1Id;
                    this.game.winner = this.game.black == 1 ? this.game.user2 : this.game.user1;
                }
                else {
                    this.game.winnerId = null;
                    this.game.winner = null;
                }
            }
        },
        // 正しいゲーム情報が送られてきたとき
        onRescue(game) {
            this.game = game;
            this.o = new core_Reversi(this.game.map, {
                isLlotheo: this.game.isLlotheo,
                canPutEverywhere: this.game.canPutEverywhere,
                loopedBoard: this.game.loopedBoard
            });
            for (const log of this.game.logs) {
                this.o.put(log.color, log.pos, true);
            }
            this.logs = this.game.logs;
            this.logPos = this.logs.length;
            this.checkEnd();
            this.$forceUpdate();
        },
        surrender() {
            this.$root.api('games/reversi/games/surrender', {
                gameId: this.game.id
            });
        },
        goIndex() {
            this.$emit('go-index');
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reversi_reversi_gamevue_type_script_lang_ts_ = (reversi_gamevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&
var reversi_gamevue_type_style_index_0_id_d73600e4_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/games/reversi/reversi.game.vue?vue&type=style&index=0&id=d73600e4&lang=stylus&scoped=true&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.game.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  reversi_reversi_gamevue_type_script_lang_ts_,
  reversi_gamevue_type_template_id_d73600e4_scoped_true_render,
  reversi_gamevue_type_template_id_d73600e4_scoped_true_staticRenderFns,
  false,
  null,
  "d73600e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/components/games/reversi/reversi.game.vue"
/* harmony default export */ var reversi_game = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=template&id=18f8d012&scoped=true&
var reversi_roomvue_type_template_id_18f8d012_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "urbixznjwwuukfsckrwzwsqzsxornqij" }, [
    _c("header", [
      _c("b", [_c("mk-user-name", { attrs: { user: _vm.game.user1 } })], 1),
      _vm._v(" vs "),
      _c("b", [_c("mk-user-name", { attrs: { user: _vm.game.user2 } })], 1)
    ]),
    _c("div", [
      _c("p", [_vm._v(_vm._s(_vm.$t("settings-of-the-game")))]),
      _c("div", { staticClass: "card map" }, [
        _c("header", [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.mapName,
                  expression: "mapName"
                }
              ],
              attrs: { placeholder: _vm.$t("choose-map") },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.mapName = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.onMapChange
                ]
              }
            },
            [
              _vm.mapName == "-Custom-"
                ? _c("option", {
                    attrs: { label: "-Custom-" },
                    domProps: { value: _vm.mapName }
                  })
                : _vm._e(),
              _c("option", {
                attrs: { label: _vm.$t("random") },
                domProps: { value: null }
              }),
              _vm._l(_vm.mapCategories, function(c) {
                return _c(
                  "optgroup",
                  { key: c, attrs: { label: c } },
                  _vm._l(_vm.maps, function(m) {
                    return m.category == c
                      ? _c(
                          "option",
                          {
                            key: m.name,
                            attrs: { label: m.name },
                            domProps: { value: m.name }
                          },
                          [_vm._v(_vm._s(m.name))]
                        )
                      : _vm._e()
                  }),
                  0
                )
              })
            ],
            2
          )
        ]),
        _c("div", [
          _vm.game.map == null
            ? _c(
                "div",
                { staticClass: "random" },
                [_c("fa", { attrs: { icon: "dice" } })],
                1
              )
            : _c(
                "div",
                {
                  staticClass: "board",
                  style: {
                    "grid-template-rows":
                      "repeat(" + _vm.game.map.length + ", 1fr)",
                    "grid-template-columns":
                      "repeat(" + _vm.game.map[0].length + ", 1fr)"
                  }
                },
                _vm._l(_vm.game.map.join(""), function(x, i) {
                  return _c(
                    "div",
                    {
                      attrs: { "data-none": x == " " },
                      on: {
                        click: function($event) {
                          return _vm.onPixelClick(i, x)
                        }
                      }
                    },
                    [
                      x == "b"
                        ? _c("fa", { attrs: { icon: _vm.fasCircle } })
                        : _vm._e(),
                      x == "w"
                        ? _c("fa", { attrs: { icon: _vm.farCircle } })
                        : _vm._e()
                    ],
                    1
                  )
                }),
                0
              )
        ])
      ]),
      _c("div", { staticClass: "card" }, [
        _c("header", [_c("span", [_vm._v(_vm._s(_vm.$t("black-or-white")))])]),
        _c(
          "div",
          [
            _c(
              "form-radio",
              {
                attrs: { value: "random" },
                on: {
                  change: function($event) {
                    return _vm.updateSettings("bw")
                  }
                },
                model: {
                  value: _vm.game.bw,
                  callback: function($$v) {
                    _vm.$set(_vm.game, "bw", $$v)
                  },
                  expression: "game.bw"
                }
              },
              [_vm._v(_vm._s(_vm.$t("random")))]
            ),
            _c(
              "form-radio",
              {
                attrs: { value: 1 },
                on: {
                  change: function($event) {
                    return _vm.updateSettings("bw")
                  }
                },
                model: {
                  value: _vm.game.bw,
                  callback: function($$v) {
                    _vm.$set(_vm.game, "bw", $$v)
                  },
                  expression: "game.bw"
                }
              },
              [
                _vm._v(_vm._s(this.$t("black-is").split("{}")[0])),
                _c(
                  "b",
                  [_c("mk-user-name", { attrs: { user: _vm.game.user1 } })],
                  1
                ),
                _vm._v(_vm._s(this.$t("black-is").split("{}")[1]))
              ]
            ),
            _c(
              "form-radio",
              {
                attrs: { value: 2 },
                on: {
                  change: function($event) {
                    return _vm.updateSettings("bw")
                  }
                },
                model: {
                  value: _vm.game.bw,
                  callback: function($$v) {
                    _vm.$set(_vm.game, "bw", $$v)
                  },
                  expression: "game.bw"
                }
              },
              [
                _vm._v(_vm._s(this.$t("black-is").split("{}")[0])),
                _c(
                  "b",
                  [_c("mk-user-name", { attrs: { user: _vm.game.user2 } })],
                  1
                ),
                _vm._v(_vm._s(this.$t("black-is").split("{}")[1]))
              ]
            )
          ],
          1
        )
      ]),
      _c("div", { staticClass: "card" }, [
        _c("header", [_c("span", [_vm._v(_vm._s(_vm.$t("rules")))])]),
        _c(
          "div",
          [
            _c(
              "ui-switch",
              {
                on: {
                  change: function($event) {
                    return _vm.updateSettings("isLlotheo")
                  }
                },
                model: {
                  value: _vm.game.isLlotheo,
                  callback: function($$v) {
                    _vm.$set(_vm.game, "isLlotheo", $$v)
                  },
                  expression: "game.isLlotheo"
                }
              },
              [_vm._v(_vm._s(_vm.$t("is-llotheo")))]
            ),
            _c(
              "ui-switch",
              {
                on: {
                  change: function($event) {
                    return _vm.updateSettings("loopedBoard")
                  }
                },
                model: {
                  value: _vm.game.loopedBoard,
                  callback: function($$v) {
                    _vm.$set(_vm.game, "loopedBoard", $$v)
                  },
                  expression: "game.loopedBoard"
                }
              },
              [_vm._v(_vm._s(_vm.$t("looped-map")))]
            ),
            _c(
              "ui-switch",
              {
                on: {
                  change: function($event) {
                    return _vm.updateSettings("canPutEverywhere")
                  }
                },
                model: {
                  value: _vm.game.canPutEverywhere,
                  callback: function($$v) {
                    _vm.$set(_vm.game, "canPutEverywhere", $$v)
                  },
                  expression: "game.canPutEverywhere"
                }
              },
              [_vm._v(_vm._s(_vm.$t("can-put-everywhere")))]
            )
          ],
          1
        )
      ]),
      _vm.form
        ? _c("div", { staticClass: "card form" }, [
            _c("header", [
              _c("span", [_vm._v(_vm._s(_vm.$t("settings-of-the-bot")))])
            ]),
            _c(
              "div",
              [
                _vm._l(_vm.form, function(item) {
                  return [
                    item.type == "switch"
                      ? _c(
                          "ui-switch",
                          {
                            key: item.id,
                            on: {
                              change: function($event) {
                                return _vm.onChangeForm(item)
                              }
                            },
                            model: {
                              value: item.value,
                              callback: function($$v) {
                                _vm.$set(item, "value", $$v)
                              },
                              expression: "item.value"
                            }
                          },
                          [_vm._v(_vm._s(item.label || item.desc || ""))]
                        )
                      : _vm._e(),
                    item.type == "radio"
                      ? _c("div", { key: item.id, staticClass: "card" }, [
                          _c("header", [
                            _c("span", [_vm._v(_vm._s(item.label))])
                          ]),
                          _c(
                            "div",
                            _vm._l(item.items, function(r, i) {
                              return _c(
                                "form-radio",
                                {
                                  key: item.id + ":" + i,
                                  attrs: { value: r.value },
                                  on: {
                                    change: function($event) {
                                      return _vm.onChangeForm(item)
                                    }
                                  },
                                  model: {
                                    value: item.value,
                                    callback: function($$v) {
                                      _vm.$set(item, "value", $$v)
                                    },
                                    expression: "item.value"
                                  }
                                },
                                [_vm._v(_vm._s(r.label))]
                              )
                            }),
                            1
                          )
                        ])
                      : _vm._e(),
                    item.type == "slider"
                      ? _c("div", { key: item.id, staticClass: "card" }, [
                          _c("header", [
                            _c("span", [_vm._v(_vm._s(item.label))])
                          ]),
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.value,
                                  expression: "item.value"
                                }
                              ],
                              attrs: {
                                type: "range",
                                min: item.min,
                                max: item.max,
                                step: item.step || 1
                              },
                              domProps: { value: item.value },
                              on: {
                                change: function($event) {
                                  return _vm.onChangeForm(item)
                                },
                                __r: function($event) {
                                  return _vm.$set(
                                    item,
                                    "value",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e(),
                    item.type == "textbox"
                      ? _c("div", { key: item.id, staticClass: "card" }, [
                          _c("header", [
                            _c("span", [_vm._v(_vm._s(item.label))])
                          ]),
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.value,
                                  expression: "item.value"
                                }
                              ],
                              domProps: { value: item.value },
                              on: {
                                change: function($event) {
                                  return _vm.onChangeForm(item)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(item, "value", $event.target.value)
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  ]
                })
              ],
              2
            )
          ])
        : _vm._e()
    ]),
    _c("footer", [
      _c(
        "p",
        { staticClass: "status" },
        [
          _vm.isAccepted && _vm.isOpAccepted
            ? [
                _vm._v(_vm._s(_vm.$t("this-game-is-started-soon"))),
                _c("mk-ellipsis")
              ]
            : _vm._e(),
          _vm.isAccepted && !_vm.isOpAccepted
            ? [_vm._v(_vm._s(_vm.$t("waiting-for-other"))), _c("mk-ellipsis")]
            : _vm._e(),
          !_vm.isAccepted && _vm.isOpAccepted
            ? [_vm._v(_vm._s(_vm.$t("waiting-for-me")))]
            : _vm._e(),
          !_vm.isAccepted && !_vm.isOpAccepted
            ? [_vm._v(_vm._s(_vm.$t("waiting-for-both"))), _c("mk-ellipsis")]
            : _vm._e()
        ],
        2
      ),
      _c(
        "div",
        { staticClass: "actions" },
        [
          _c("form-button", { on: { click: _vm.exit } }, [
            _vm._v(_vm._s(_vm.$t("cancel")))
          ]),
          !_vm.isAccepted
            ? _c(
                "form-button",
                { attrs: { primary: "" }, on: { click: _vm.accept } },
                [_vm._v(_vm._s(_vm.$t("ready")))]
              )
            : _vm._e(),
          _vm.isAccepted
            ? _c(
                "form-button",
                { attrs: { primary: "" }, on: { click: _vm.cancel } },
                [_vm._v(_vm._s(_vm.$t("cancel-ready")))]
              )
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var reversi_roomvue_type_template_id_18f8d012_scoped_true_staticRenderFns = []
reversi_roomvue_type_template_id_18f8d012_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=template&id=18f8d012&scoped=true&

// CONCATENATED MODULE: ./src/games/reversi/maps.ts
/**
 * 組み込みマップ定義
 *
 * データ値:
 * (スペース) ... マス無し
 * - ... マス
 * b ... 初期配置される黒石
 * w ... 初期配置される白石
 */
const fourfour = {
    name: '4x4',
    category: '4x4',
    data: [
        '----',
        '-wb-',
        '-bw-',
        '----'
    ]
};
const sixsix = {
    name: '6x6',
    category: '6x6',
    data: [
        '------',
        '------',
        '--wb--',
        '--bw--',
        '------',
        '------'
    ]
};
const roundedSixsix = {
    name: '6x6 rounded',
    category: '6x6',
    author: 'syuilo',
    data: [
        ' ---- ',
        '------',
        '--wb--',
        '--bw--',
        '------',
        ' ---- '
    ]
};
const roundedSixsix2 = {
    name: '6x6 rounded 2',
    category: '6x6',
    author: 'syuilo',
    data: [
        '  --  ',
        ' ---- ',
        '--wb--',
        '--bw--',
        ' ---- ',
        '  --  '
    ]
};
const eighteight = {
    name: '8x8',
    category: '8x8',
    data: [
        '--------',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        '--------'
    ]
};
const eighteightH1 = {
    name: '8x8 handicap 1',
    category: '8x8',
    data: [
        'b-------',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        '--------'
    ]
};
const eighteightH2 = {
    name: '8x8 handicap 2',
    category: '8x8',
    data: [
        'b-------',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        '-------b'
    ]
};
const eighteightH3 = {
    name: '8x8 handicap 3',
    category: '8x8',
    data: [
        'b------b',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        '-------b'
    ]
};
const eighteightH4 = {
    name: '8x8 handicap 4',
    category: '8x8',
    data: [
        'b------b',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        'b------b'
    ]
};
const eighteightH12 = {
    name: '8x8 handicap 12',
    category: '8x8',
    data: [
        'bb----bb',
        'b------b',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        'b------b',
        'bb----bb'
    ]
};
const eighteightH16 = {
    name: '8x8 handicap 16',
    category: '8x8',
    data: [
        'bbb---bb',
        'b------b',
        '-------b',
        '---wb---',
        '---bw---',
        'b-------',
        'b------b',
        'bb---bbb'
    ]
};
const eighteightH20 = {
    name: '8x8 handicap 20',
    category: '8x8',
    data: [
        'bbb--bbb',
        'b------b',
        'b------b',
        '---wb---',
        '---bw---',
        'b------b',
        'b------b',
        'bbb---bb'
    ]
};
const eighteightH28 = {
    name: '8x8 handicap 28',
    category: '8x8',
    data: [
        'bbbbbbbb',
        'b------b',
        'b------b',
        'b--wb--b',
        'b--bw--b',
        'b------b',
        'b------b',
        'bbbbbbbb'
    ]
};
const roundedEighteight = {
    name: '8x8 rounded',
    category: '8x8',
    author: 'syuilo',
    data: [
        ' ------ ',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        ' ------ '
    ]
};
const roundedEighteight2 = {
    name: '8x8 rounded 2',
    category: '8x8',
    author: 'syuilo',
    data: [
        '  ----  ',
        ' ------ ',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        ' ------ ',
        '  ----  '
    ]
};
const roundedEighteight3 = {
    name: '8x8 rounded 3',
    category: '8x8',
    author: 'syuilo',
    data: [
        '   --   ',
        '  ----  ',
        ' ------ ',
        '---wb---',
        '---bw---',
        ' ------ ',
        '  ----  ',
        '   --   '
    ]
};
const eighteightWithNotch = {
    name: '8x8 with notch',
    category: '8x8',
    author: 'syuilo',
    data: [
        '---  ---',
        '--------',
        '--------',
        ' --wb-- ',
        ' --bw-- ',
        '--------',
        '--------',
        '---  ---'
    ]
};
const eighteightWithSomeHoles = {
    name: '8x8 with some holes',
    category: '8x8',
    author: 'syuilo',
    data: [
        '--- ----',
        '----- --',
        '-- -----',
        '---wb---',
        '---bw- -',
        ' -------',
        '--- ----',
        '--------'
    ]
};
const circle = {
    name: 'Circle',
    category: '8x8',
    author: 'syuilo',
    data: [
        '   --   ',
        ' ------ ',
        ' ------ ',
        '---wb---',
        '---bw---',
        ' ------ ',
        ' ------ ',
        '   --   '
    ]
};
const smile = {
    name: 'Smile',
    category: '8x8',
    author: 'syuilo',
    data: [
        ' ------ ',
        '--------',
        '-- -- --',
        '---wb---',
        '-- bw --',
        '---  ---',
        '--------',
        ' ------ '
    ]
};
const maps_window = {
    name: 'Window',
    category: '8x8',
    author: 'syuilo',
    data: [
        '--------',
        '-  --  -',
        '-  --  -',
        '---wb---',
        '---bw---',
        '-  --  -',
        '-  --  -',
        '--------'
    ]
};
const reserved = {
    name: 'Reserved',
    category: '8x8',
    author: 'Aya',
    data: [
        'w------b',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        'b------w'
    ]
};
const maps_x = {
    name: 'X',
    category: '8x8',
    author: 'Aya',
    data: [
        'w------b',
        '-w----b-',
        '--w--b--',
        '---wb---',
        '---bw---',
        '--b--w--',
        '-b----w-',
        'b------w'
    ]
};
const parallel = {
    name: 'Parallel',
    category: '8x8',
    author: 'Aya',
    data: [
        '--------',
        '--------',
        '--------',
        '---bb---',
        '---ww---',
        '--------',
        '--------',
        '--------'
    ]
};
const lackOfBlack = {
    name: 'Lack of Black',
    category: '8x8',
    data: [
        '--------',
        '--------',
        '--------',
        '---w----',
        '---bw---',
        '--------',
        '--------',
        '--------'
    ]
};
const squareParty = {
    name: 'Square Party',
    category: '8x8',
    author: 'syuilo',
    data: [
        '--------',
        '-wwwbbb-',
        '-w-wb-b-',
        '-wwwbbb-',
        '-bbbwww-',
        '-b-bw-w-',
        '-bbbwww-',
        '--------'
    ]
};
const minesweeper = {
    name: 'Minesweeper',
    category: '8x8',
    author: 'syuilo',
    data: [
        'b-b--w-w',
        '-w-wb-b-',
        'w-b--w-b',
        '-b-wb-w-',
        '-w-bw-b-',
        'b-w--b-w',
        '-b-bw-w-',
        'w-w--b-b'
    ]
};
const tenthtenth = {
    name: '10x10',
    category: '10x10',
    data: [
        '----------',
        '----------',
        '----------',
        '----------',
        '----wb----',
        '----bw----',
        '----------',
        '----------',
        '----------',
        '----------'
    ]
};
const hole = {
    name: 'The Hole',
    category: '10x10',
    author: 'syuilo',
    data: [
        '----------',
        '----------',
        '--wb--wb--',
        '--bw--bw--',
        '----  ----',
        '----  ----',
        '--wb--wb--',
        '--bw--bw--',
        '----------',
        '----------'
    ]
};
const grid = {
    name: 'Grid',
    category: '10x10',
    author: 'syuilo',
    data: [
        '----------',
        '- - -- - -',
        '----------',
        '- - -- - -',
        '----wb----',
        '----bw----',
        '- - -- - -',
        '----------',
        '- - -- - -',
        '----------'
    ]
};
const cross = {
    name: 'Cross',
    category: '10x10',
    author: 'Aya',
    data: [
        '   ----   ',
        '   ----   ',
        '   ----   ',
        '----------',
        '----wb----',
        '----bw----',
        '----------',
        '   ----   ',
        '   ----   ',
        '   ----   '
    ]
};
const charX = {
    name: 'Char X',
    category: '10x10',
    author: 'syuilo',
    data: [
        '---    ---',
        '----  ----',
        '----------',
        ' -------- ',
        '  --wb--  ',
        '  --bw--  ',
        ' -------- ',
        '----------',
        '----  ----',
        '---    ---'
    ]
};
const charY = {
    name: 'Char Y',
    category: '10x10',
    author: 'syuilo',
    data: [
        '---    ---',
        '----  ----',
        '----------',
        ' -------- ',
        '  --wb--  ',
        '  --bw--  ',
        '  ------  ',
        '  ------  ',
        '  ------  ',
        '  ------  '
    ]
};
const walls = {
    name: 'Walls',
    category: '10x10',
    author: 'Aya',
    data: [
        ' bbbbbbbb ',
        'w--------w',
        'w--------w',
        'w--------w',
        'w---wb---w',
        'w---bw---w',
        'w--------w',
        'w--------w',
        'w--------w',
        ' bbbbbbbb '
    ]
};
const cpu = {
    name: 'CPU',
    category: '10x10',
    author: 'syuilo',
    data: [
        ' b b  b b ',
        'w--------w',
        ' -------- ',
        'w--------w',
        ' ---wb--- ',
        ' ---bw--- ',
        'w--------w',
        ' -------- ',
        'w--------w',
        ' b b  b b '
    ]
};
const checker = {
    name: 'Checker',
    category: '10x10',
    author: 'Aya',
    data: [
        '----------',
        '----------',
        '----------',
        '---wbwb---',
        '---bwbw---',
        '---wbwb---',
        '---bwbw---',
        '----------',
        '----------',
        '----------'
    ]
};
const japaneseCurry = {
    name: 'Japanese curry',
    category: '10x10',
    author: 'syuilo',
    data: [
        'w-b-b-b-b-',
        '-w-b-b-b-b',
        'w-w-b-b-b-',
        '-w-w-b-b-b',
        'w-w-wwb-b-',
        '-w-wbb-b-b',
        'w-w-w-b-b-',
        '-w-w-w-b-b',
        'w-w-w-w-b-',
        '-w-w-w-w-b'
    ]
};
const mosaic = {
    name: 'Mosaic',
    category: '10x10',
    author: 'syuilo',
    data: [
        '- - - - - ',
        ' - - - - -',
        '- - - - - ',
        ' - w w - -',
        '- - b b - ',
        ' - w w - -',
        '- - b b - ',
        ' - - - - -',
        '- - - - - ',
        ' - - - - -',
    ]
};
const arena = {
    name: 'Arena',
    category: '10x10',
    author: 'syuilo',
    data: [
        '- - -- - -',
        ' - -  - - ',
        '- ------ -',
        ' -------- ',
        '- --wb-- -',
        '- --bw-- -',
        ' -------- ',
        '- ------ -',
        ' - -  - - ',
        '- - -- - -'
    ]
};
const reactor = {
    name: 'Reactor',
    category: '10x10',
    author: 'syuilo',
    data: [
        '-w------b-',
        'b- -  - -w',
        '- --wb-- -',
        '---b  w---',
        '- b wb w -',
        '- w bw b -',
        '---w  b---',
        '- --bw-- -',
        'w- -  - -b',
        '-b------w-'
    ]
};
const sixeight = {
    name: '6x8',
    category: 'Special',
    data: [
        '------',
        '------',
        '------',
        '--wb--',
        '--bw--',
        '------',
        '------',
        '------'
    ]
};
const spark = {
    name: 'Spark',
    category: 'Special',
    author: 'syuilo',
    data: [
        ' -      - ',
        '----------',
        ' -------- ',
        ' -------- ',
        ' ---wb--- ',
        ' ---bw--- ',
        ' -------- ',
        ' -------- ',
        '----------',
        ' -      - '
    ]
};
const islands = {
    name: 'Islands',
    category: 'Special',
    author: 'syuilo',
    data: [
        '--------  ',
        '---wb---  ',
        '---bw---  ',
        '--------  ',
        '  -    -  ',
        '  -    -  ',
        '  --------',
        '  --------',
        '  --------',
        '  --------'
    ]
};
const galaxy = {
    name: 'Galaxy',
    category: 'Special',
    author: 'syuilo',
    data: [
        '   ------   ',
        '  --www---  ',
        ' ------w--- ',
        '---bbb--w---',
        '--b---b-w-b-',
        '-b--wwb-w-b-',
        '-b-w-bww--b-',
        '-b-w-b---b--',
        '---w--bbb---',
        ' ---w------ ',
        '  ---www--  ',
        '   ------   '
    ]
};
const triangle = {
    name: 'Triangle',
    category: 'Special',
    author: 'syuilo',
    data: [
        '    --    ',
        '    --    ',
        '   ----   ',
        '   ----   ',
        '  --wb--  ',
        '  --bw--  ',
        ' -------- ',
        ' -------- ',
        '----------',
        '----------'
    ]
};
const iphonex = {
    name: 'iPhone X',
    category: 'Special',
    author: 'syuilo',
    data: [
        ' --  -- ',
        '--------',
        '--------',
        '--------',
        '--------',
        '---wb---',
        '---bw---',
        '--------',
        '--------',
        '--------',
        '--------',
        ' ------ '
    ]
};
const dealWithIt = {
    name: 'Deal with it!',
    category: 'Special',
    author: 'syuilo',
    data: [
        '------------',
        '--w-b-------',
        ' --b-w------',
        '  --w-b---- ',
        '   -------  '
    ]
};
const experiment = {
    name: 'Let\'s experiment',
    category: 'Special',
    author: 'syuilo',
    data: [
        ' ------------ ',
        '------wb------',
        '------bw------',
        '--------------',
        '    -    -    ',
        '------  ------',
        'bbbbbb  wwwwww',
        'bbbbbb  wwwwww',
        'bbbbbb  wwwwww',
        'bbbbbb  wwwwww',
        'wwwwww  bbbbbb'
    ]
};
const bigBoard = {
    name: 'Big board',
    category: 'Special',
    data: [
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '-------wb-------',
        '-------bw-------',
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '----------------',
        '----------------'
    ]
};
const twoBoard = {
    name: 'Two board',
    category: 'Special',
    author: 'Aya',
    data: [
        '-------- --------',
        '-------- --------',
        '-------- --------',
        '---wb--- ---wb---',
        '---bw--- ---bw---',
        '-------- --------',
        '-------- --------',
        '-------- --------'
    ]
};
const test1 = {
    name: 'Test1',
    category: 'Test',
    data: [
        '--------',
        '---wb---',
        '---bw---',
        '--------'
    ]
};
const test2 = {
    name: 'Test2',
    category: 'Test',
    data: [
        '------',
        '------',
        '-b--w-',
        '-w--b-',
        '-w--b-'
    ]
};
const test3 = {
    name: 'Test3',
    category: 'Test',
    data: [
        '-w-',
        '--w',
        'w--',
        '-w-',
        '--w',
        'w--',
        '-w-',
        '--w',
        'w--',
        '-w-',
        '---',
        'b--',
    ]
};
const test4 = {
    name: 'Test4',
    category: 'Test',
    data: [
        '-w--b-',
        '-w--b-',
        '------',
        '-w--b-',
        '-w--b-'
    ]
};
// https://misskey.xyz/games/reversi/5aaabf7fe126e10b5216ea09 64
const test5 = {
    name: 'Test5',
    category: 'Test',
    data: [
        '--wwwwww--',
        '--wwwbwwww',
        '-bwwbwbwww',
        '-bwwwbwbww',
        '-bwwbwbwbw',
        '-bwbwbwb-w',
        'bwbwwbbb-w',
        'w-wbbbbb--',
        '--w-b-w---',
        '----------'
    ]
};

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=script&lang=ts&





/* harmony default export */ var reversi_roomvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/games/reversi/reversi.room.vue'),
    props: ['game', 'connection'],
    data() {
        return {
            o: null,
            isLlotheo: false,
            mapName: eighteight.name,
            maps: maps_namespaceObject,
            form: null,
            messages: [],
            fasCircle: index_es["faCircle"], farCircle: free_regular_svg_icons_index_es["faCircle"]
        };
    },
    computed: {
        mapCategories() {
            const categories = Object.values(maps_namespaceObject).map(x => x.category);
            return categories.filter((item, pos) => categories.indexOf(item) == pos);
        },
        isAccepted() {
            if (this.game.user1Id == this.$store.state.i.id && this.game.user1Accepted)
                return true;
            if (this.game.user2Id == this.$store.state.i.id && this.game.user2Accepted)
                return true;
            return false;
        },
        isOpAccepted() {
            if (this.game.user1Id != this.$store.state.i.id && this.game.user1Accepted)
                return true;
            if (this.game.user2Id != this.$store.state.i.id && this.game.user2Accepted)
                return true;
            return false;
        }
    },
    created() {
        this.connection.on('changeAccepts', this.onChangeAccepts);
        this.connection.on('updateSettings', this.onUpdateSettings);
        this.connection.on('initForm', this.onInitForm);
        this.connection.on('message', this.onMessage);
        if (this.game.user1Id != this.$store.state.i.id && this.game.form1)
            this.form = this.game.form1;
        if (this.game.user2Id != this.$store.state.i.id && this.game.form2)
            this.form = this.game.form2;
    },
    beforeDestroy() {
        this.connection.off('changeAccepts', this.onChangeAccepts);
        this.connection.off('updateSettings', this.onUpdateSettings);
        this.connection.off('initForm', this.onInitForm);
        this.connection.off('message', this.onMessage);
    },
    methods: {
        exit() {
        },
        accept() {
            this.connection.send('accept', {});
        },
        cancel() {
            this.connection.send('cancelAccept', {});
        },
        onChangeAccepts(accepts) {
            this.game.user1Accepted = accepts.user1;
            this.game.user2Accepted = accepts.user2;
            this.$forceUpdate();
        },
        updateSettings(key) {
            this.connection.send('updateSettings', {
                key: key,
                value: this.game[key]
            });
        },
        onUpdateSettings({ key, value }) {
            this.game[key] = value;
            if (this.game.map == null) {
                this.mapName = null;
            }
            else {
                const found = Object.values(maps_namespaceObject).find(x => x.data.join('') == this.game.map.join(''));
                this.mapName = found ? found.name : '-Custom-';
            }
        },
        onInitForm(x) {
            if (x.userId == this.$store.state.i.id)
                return;
            this.form = x.form;
        },
        onMessage(x) {
            if (x.userId == this.$store.state.i.id)
                return;
            this.messages.unshift(x.message);
        },
        onChangeForm(item) {
            this.connection.send('updateForm', {
                id: item.id,
                value: item.value
            });
        },
        onMapChange() {
            if (this.mapName == null) {
                this.game.map = null;
            }
            else {
                this.game.map = Object.values(maps_namespaceObject).find(x => x.name == this.mapName).data;
            }
            this.$forceUpdate();
            this.updateSettings('map');
        },
        onPixelClick(pos, pixel) {
            const x = pos % this.game.map[0].length;
            const y = Math.floor(pos / this.game.map[0].length);
            const newPixel = pixel == ' ' ? '-' :
                pixel == '-' ? 'b' :
                    pixel == 'b' ? 'w' :
                        ' ';
            const line = this.game.map[y].split('');
            line[x] = newPixel;
            this.$set(this.game.map, y, line.join(''));
            this.$forceUpdate();
            this.updateSettings('map');
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reversi_reversi_roomvue_type_script_lang_ts_ = (reversi_roomvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&
var reversi_roomvue_type_style_index_0_id_18f8d012_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/games/reversi/reversi.room.vue?vue&type=style&index=0&id=18f8d012&lang=stylus&scoped=true&");

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.room.vue






/* normalize component */

var reversi_room_component = Object(componentNormalizer["default"])(
  reversi_reversi_roomvue_type_script_lang_ts_,
  reversi_roomvue_type_template_id_18f8d012_scoped_true_render,
  reversi_roomvue_type_template_id_18f8d012_scoped_true_staticRenderFns,
  false,
  null,
  "18f8d012",
  null
  
)

/* hot reload */
if (false) { var reversi_room_api; }
reversi_room_component.options.__file = "src/client/app/common/views/components/games/reversi/reversi.room.vue"
/* harmony default export */ var reversi_room = (reversi_room_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.gameroom.vue?vue&type=script&lang=ts&




/* harmony default export */ var reversi_gameroomvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/games/reversi/reversi.gameroom.vue'),
    components: {
        XGame: reversi_game,
        XRoom: reversi_room
    },
    props: {
        game: {
            type: Object,
            required: true
        },
        selfNav: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            connection: null,
            g: null
        };
    },
    created() {
        this.g = this.game;
        this.connection = this.$root.stream.connectToChannel('gamesReversiGame', {
            gameId: this.game.id
        });
        this.connection.on('started', this.onStarted);
    },
    beforeDestroy() {
        this.connection.dispose();
    },
    methods: {
        onStarted(game) {
            Object.assign(this.g, game);
            this.$forceUpdate();
        },
        goIndex() {
            this.$emit('go-index');
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.gameroom.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reversi_reversi_gameroomvue_type_script_lang_ts_ = (reversi_gameroomvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.gameroom.vue





/* normalize component */

var reversi_gameroom_component = Object(componentNormalizer["default"])(
  reversi_reversi_gameroomvue_type_script_lang_ts_,
  reversi_gameroomvue_type_template_id_2125a02e_render,
  reversi_gameroomvue_type_template_id_2125a02e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var reversi_gameroom_api; }
reversi_gameroom_component.options.__file = "src/client/app/common/views/components/games/reversi/reversi.gameroom.vue"
/* harmony default export */ var reversi_gameroom = (reversi_gameroom_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=template&id=e1e5ce34&scoped=true&
var reversi_indexvue_type_template_id_e1e5ce34_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "phgnkghfpyvkrvwiajkiuoxyrdaqpzcx" }, [
    _c("h1", [_vm._v(_vm._s(_vm.$t("title")))]),
    _c("p", [_vm._v(_vm._s(_vm.$t("sub-title")))]),
    _c(
      "div",
      { staticClass: "play" },
      [
        _c(
          "form-button",
          { attrs: { primary: "", round: "" }, on: { click: _vm.match } },
          [_vm._v(_vm._s(_vm.$t("invite")))]
        ),
        _c("details", [
          _c("summary", [_vm._v(_vm._s(_vm.$t("rule")))]),
          _c("div", [
            _c("p", [_vm._v(_vm._s(_vm.$t("rule-desc")))]),
            _c("dl", [
              _c("dt", [_c("b", [_vm._v(_vm._s(_vm.$t("mode-invite")))])]),
              _c("dd", [_vm._v(_vm._s(_vm.$t("mode-invite-desc")))])
            ])
          ])
        ])
      ],
      1
    ),
    _vm.invitations.length > 0
      ? _c(
          "section",
          [
            _c("h2", [_vm._v(_vm._s(_vm.$t("invitations")))]),
            _vm._l(_vm.invitations, function(i) {
              return _c(
                "div",
                {
                  staticClass: "invitation",
                  attrs: { tabindex: "-1" },
                  on: {
                    click: function($event) {
                      return _vm.accept(i)
                    }
                  }
                },
                [
                  _c("mk-avatar", {
                    staticClass: "avatar",
                    attrs: { user: i.parent }
                  }),
                  _c("span", { staticClass: "name" }, [
                    _c(
                      "b",
                      [_c("mk-user-name", { attrs: { user: i.parent } })],
                      1
                    )
                  ]),
                  _c("span", { staticClass: "username" }, [
                    _vm._v("@" + _vm._s(i.parent.username))
                  ]),
                  _c("mk-time", { attrs: { time: i.createdAt } })
                ],
                1
              )
            })
          ],
          2
        )
      : _vm._e(),
    _vm.myGames.length > 0
      ? _c(
          "section",
          [
            _c("h2", [_vm._v(_vm._s(_vm.$t("my-games")))]),
            _vm._l(_vm.myGames, function(g) {
              return _c(
                "a",
                {
                  staticClass: "game",
                  attrs: { tabindex: "-1", href: "/games/reversi/" + g.id },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.go(g)
                    }
                  }
                },
                [
                  _c("mk-avatar", {
                    staticClass: "avatar",
                    attrs: { user: g.user1 }
                  }),
                  _c("mk-avatar", {
                    staticClass: "avatar",
                    attrs: { user: g.user2 }
                  }),
                  _c("span", [
                    _c(
                      "b",
                      [_c("mk-user-name", { attrs: { user: g.user1 } })],
                      1
                    ),
                    _vm._v(" vs "),
                    _c(
                      "b",
                      [_c("mk-user-name", { attrs: { user: g.user2 } })],
                      1
                    )
                  ]),
                  _c("span", { staticClass: "state" }, [
                    _vm._v(
                      _vm._s(
                        g.isEnded
                          ? _vm.$t("game-state.ended")
                          : _vm.$t("game-state.playing")
                      )
                    )
                  ]),
                  _c("mk-time", { attrs: { time: g.createdAt } })
                ],
                1
              )
            })
          ],
          2
        )
      : _vm._e(),
    _vm.games.length > 0
      ? _c(
          "section",
          [
            _c("h2", [_vm._v(_vm._s(_vm.$t("all-games")))]),
            _vm._l(_vm.games, function(g) {
              return _c(
                "a",
                {
                  staticClass: "game",
                  attrs: { tabindex: "-1", href: "/games/reversi/" + g.id },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.go(g)
                    }
                  }
                },
                [
                  _c("mk-avatar", {
                    staticClass: "avatar",
                    attrs: { user: g.user1 }
                  }),
                  _c("mk-avatar", {
                    staticClass: "avatar",
                    attrs: { user: g.user2 }
                  }),
                  _c("span", [
                    _c(
                      "b",
                      [_c("mk-user-name", { attrs: { user: g.user1 } })],
                      1
                    ),
                    _vm._v(" vs "),
                    _c(
                      "b",
                      [_c("mk-user-name", { attrs: { user: g.user2 } })],
                      1
                    )
                  ]),
                  _c("span", { staticClass: "state" }, [
                    _vm._v(
                      _vm._s(
                        g.isEnded
                          ? _vm.$t("game-state.ended")
                          : _vm.$t("game-state.playing")
                      )
                    )
                  ]),
                  _c("mk-time", { attrs: { time: g.createdAt } })
                ],
                1
              )
            })
          ],
          2
        )
      : _vm._e()
  ])
}
var reversi_indexvue_type_template_id_e1e5ce34_scoped_true_staticRenderFns = []
reversi_indexvue_type_template_id_e1e5ce34_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=template&id=e1e5ce34&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=script&lang=ts&


/* harmony default export */ var reversi_indexvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/games/reversi/reversi.index.vue'),
    data() {
        return {
            games: [],
            gamesFetching: true,
            gamesMoreFetching: false,
            myGames: [],
            matching: null,
            invitations: [],
            connection: null
        };
    },
    mounted() {
        if (this.$store.getters.isSignedIn) {
            this.connection = this.$root.stream.useSharedConnection('gamesReversi');
            this.connection.on('invited', this.onInvited);
            this.$root.api('games/reversi/games', {
                my: true
            }).then(games => {
                this.myGames = games;
            });
            this.$root.api('games/reversi/invitations').then(invitations => {
                this.invitations = this.invitations.concat(invitations);
            });
        }
        this.$root.api('games/reversi/games').then(games => {
            this.games = games;
            this.gamesFetching = false;
        });
    },
    beforeDestroy() {
        if (this.connection) {
            this.connection.dispose();
        }
    },
    methods: {
        go(game) {
            this.$emit('go', game);
        },
        async match() {
            const { result: user } = await this.$root.dialog({
                title: this.$t('enter-username'),
                user: {
                    local: true
                }
            });
            if (user == null)
                return;
            this.$root.api('games/reversi/match', {
                userId: user.id
            }).then(res => {
                if (res == null) {
                    this.$emit('matching', user);
                }
                else {
                    this.$emit('go', res);
                }
            });
        },
        accept(invitation) {
            this.$root.api('games/reversi/match', {
                userId: invitation.parent.id
            }).then(game => {
                if (game) {
                    this.$emit('go', game);
                }
            });
        },
        onInvited(invite) {
            this.invitations.unshift(invite);
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reversi_reversi_indexvue_type_script_lang_ts_ = (reversi_indexvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&
var reversi_indexvue_type_style_index_0_id_e1e5ce34_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/games/reversi/reversi.index.vue?vue&type=style&index=0&id=e1e5ce34&lang=stylus&scoped=true&");

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.index.vue






/* normalize component */

var reversi_index_component = Object(componentNormalizer["default"])(
  reversi_reversi_indexvue_type_script_lang_ts_,
  reversi_indexvue_type_template_id_e1e5ce34_scoped_true_render,
  reversi_indexvue_type_template_id_e1e5ce34_scoped_true_staticRenderFns,
  false,
  null,
  "e1e5ce34",
  null
  
)

/* hot reload */
if (false) { var reversi_index_api; }
reversi_index_component.options.__file = "src/client/app/common/views/components/games/reversi/reversi.index.vue"
/* harmony default export */ var reversi_index = (reversi_index_component.exports);
// EXTERNAL MODULE: ./src/client/app/common/scripts/loading.ts
var loading = __webpack_require__("./src/client/app/common/scripts/loading.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=script&lang=ts&





/* harmony default export */ var reversivue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('common/views/components/games/reversi/reversi.vue'),
    components: {
        XGameroom: reversi_gameroom,
        XIndex: reversi_index
    },
    props: {
        gameId: {
            type: String,
            required: false
        },
        selfNav: {
            type: Boolean,
            require: false,
            default: true
        }
    },
    data() {
        return {
            game: null,
            matching: null,
            connection: null,
            pingClock: null
        };
    },
    watch: {
        game() {
            this.$emit('gamed', this.game);
        },
        gameId() {
            this.fetch();
        }
    },
    mounted() {
        this.fetch();
        if (this.$store.getters.isSignedIn) {
            this.connection = this.$root.stream.useSharedConnection('gamesReversi');
            this.connection.on('matched', this.onMatched);
            this.pingClock = setInterval(() => {
                if (this.matching) {
                    this.connection.send('ping', {
                        id: this.matching.id
                    });
                }
            }, 3000);
        }
    },
    beforeDestroy() {
        if (this.connection) {
            this.connection.dispose();
            clearInterval(this.pingClock);
        }
    },
    methods: {
        fetch() {
            if (this.gameId == null) {
                this.game = null;
            }
            else {
                loading["default"].start();
                this.$root.api('games/reversi/games/show', {
                    gameId: this.gameId
                }).then(game => {
                    this.game = game;
                    loading["default"].done();
                });
            }
        },
        async nav(game, actualNav = true) {
            if (this.selfNav) {
                // 受け取ったゲーム情報が省略されたものなら完全な情報を取得する
                if (game != null && game.map == null) {
                    game = await this.$root.api('games/reversi/games/show', {
                        gameId: game.id
                    });
                }
                this.game = game;
            }
            else {
                this.$emit('nav', game, actualNav);
            }
        },
        onMatching(user) {
            this.matching = user;
        },
        cancel() {
            this.matching = null;
            this.$root.api('games/reversi/match/cancel');
        },
        accept(invitation) {
            this.$root.api('games/reversi/match', {
                userId: invitation.parent.id
            }).then(game => {
                if (game) {
                    this.matching = null;
                    this.nav(game);
                }
            });
        },
        onMatched(game) {
            this.matching = null;
            this.game = game;
            this.nav(game, false);
        },
        goIndex() {
            this.nav(null);
        }
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=script&lang=ts&
 /* harmony default export */ var reversi_reversivue_type_script_lang_ts_ = (reversivue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&
var reversivue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&");

// CONCATENATED MODULE: ./src/client/app/common/views/components/games/reversi/reversi.vue






/* normalize component */

var reversi_component = Object(componentNormalizer["default"])(
  reversi_reversivue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "522b4d02",
  null
  
)

/* hot reload */
if (false) { var reversi_api; }
reversi_component.options.__file = "src/client/app/common/views/components/games/reversi/reversi.vue"
/* harmony default export */ var reversi = __webpack_exports__["default"] = (reversi_component.exports);

/***/ }),

/***/ "./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_vue_vue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../../../node_modules/stylus-loader!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/games/reversi/reversi.vue?vue&type=style&index=0&id=522b4d02&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_vue_vue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_vue_vue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_vue_vue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_vue_vue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_reversi_vue_vue_type_style_index_0_id_522b4d02_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=10.11.37.1.js.map