(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{918:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(5),a=n(2),l=i.a.extend({i18n:Object(a.a)(),props:{platform:{type:String,required:!0}},data(){return{pagination:{endpoint:"notes/featured",limit:29},notesComponent:"desktop"===this.platform?()=>n.e(20).then(n.bind(null,933)).then(t=>t.default):"mobile"===this.platform?()=>n.e(22).then(n.bind(null,934)).then(t=>t.default):"deck"===this.platform?()=>n.e(16).then(n.bind(null,522)).then(t=>t.default):null}},created(){this.$emit("init",{title:this.$t("@.featured-notes"),icon:o.cc})},mounted(){document.title=this.$root.instanceName}}),s=n(1),r=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.notesComponent,{tag:"component",attrs:{pagination:this.pagination}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=26.11.37.1.js.map