(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{902:function(t,n,e){"use strict";e.r(n);var i=e(0),o=e(5),a=e(2),l=i.a.extend({i18n:Object(a.a)(),props:{platform:{type:String,required:!0}},data(){return{pagination:{endpoint:"i/favorites",limit:10},notesComponent:"desktop"===this.platform?()=>e.e(20).then(e.bind(null,915)).then(t=>t.default):"mobile"===this.platform?()=>e.e(22).then(e.bind(null,916)).then(t=>t.default):"deck"===this.platform?()=>e.e(16).then(e.bind(null,504)).then(t=>t.default):null}},created(){this.$emit("init",{title:this.$t("@.favorites"),icon:o.Fc})},mounted(){document.title=this.$root.instanceName}}),r=e(1),s=Object(r.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n(this.notesComponent,{tag:"component",attrs:{pagination:this.pagination,extract:function(t){return t.map((function(t){return t.note}))}}})],1)}),[],!1,null,null,null);n.default=s.exports}}]);
//# sourceMappingURL=25.11.37.1.js.map