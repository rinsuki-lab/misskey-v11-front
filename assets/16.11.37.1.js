(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{519:function(t,e,a){var n=a(526);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("4ecedb08",n,!0,{})},522:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a(2),i=a(35),r=a(25),s=n.a.extend({i18n:Object(o.a)(),inject:["column","isScrollTop","count"],mixins:[Object(r.a)({limit:20,onQueueChanged:(t,e)=>{t.count(e.length)},onPrepend:(t,e,a)=>{if(Object(i.a)(t.$store.state.i,t.$store.state.settings,e))return!1;!document.hidden&&t.isScrollTop()||t.$store.commit("pushBehindNote",e)}})],props:{pagination:{required:!0},extract:{required:!1}},computed:{notes(){return this.extract?this.extract(this.items):this.items},_notes(){return this.notes.map(t=>{const e=new Date(t.createdAt).getDate(),a=new Date(t.createdAt).getMonth()+1;return t._date=e,t._datetext=this.$t("@.month-and-day").replace("{month}",a.toString()).replace("{day}",e.toString()),t})}},created(){this.column.$on("top",this.onTop),this.column.$on("bottom",this.onBottom),this.init()},beforeDestroy(){this.column.$off("top",this.onTop),this.column.$off("bottom",this.onBottom)},methods:{focus(){this.$refs.notes.children[0].focus?this.$refs.notes.children[0].focus():this.$refs.notes.$el.children[0].focus()}}}),m=(a(525),a(1)),p=Object(m.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"eamppglmnmimdhrlzhplwpvyeaqmmhxu"},[t.empty?a("div",{staticClass:"empty"},[t._v(t._s(t.$t("@.no-notes")))]):t._e(),t.error?a("mk-error",{on:{retry:function(e){return t.init()}}}):t._e(),t.fetching?a("div",{staticClass:"placeholder"},[t._l(10,(function(t){return[a("mk-note-skeleton",{key:t})]}))],2):t._e(),a(t.$store.state.device.reduceMotion?"div":"transition-group",{ref:"notes",tag:"component",staticClass:"transition notes",attrs:{name:"mk-notes",tag:"div"}},[t._l(t._notes,(function(e,n){return[a("mk-note",{key:e.id,attrs:{note:e,compact:!0}}),n!=t.notes.length-1&&e._date!=t._notes[n+1]._date?a("p",{key:e.id+"_date",staticClass:"date"},[a("span",[a("fa",{attrs:{icon:"angle-up"}}),t._v(t._s(e._datetext))],1),a("span",[a("fa",{attrs:{icon:"angle-down"}}),t._v(t._s(t._notes[n+1]._datetext))],1)]):t._e()]}))],2),t.more?a("footer",[a("button",{style:{cursor:t.moreFetching?"wait":"pointer"},attrs:{disabled:t.moreFetching},on:{click:function(e){return t.fetchMore()}}},[t.moreFetching?t._e():[t._v(t._s(t.$t("@.load-more")))],t.moreFetching?[a("fa",{attrs:{icon:"spinner",pulse:"","fixed-width":""}})]:t._e()],2)]):t._e()],1)}),[],!1,null,"eaf1bbfa",null);e.default=p.exports},525:function(t,e,a){"use strict";var n=a(519);a.n(n).a},526:function(t,e,a){(e=a(3)(!1)).push([t.i,".eamppglmnmimdhrlzhplwpvyeaqmmhxu .transition .mk-notes-enter[data-v-eaf1bbfa],.eamppglmnmimdhrlzhplwpvyeaqmmhxu .transition .mk-notes-leave-to[data-v-eaf1bbfa]{opacity:0;transform:translateY(-30px)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu .transition>*[data-v-eaf1bbfa]{transition:transform .3s ease,opacity .3s ease}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.empty[data-v-eaf1bbfa]{padding:16px;text-align:center;color:var(--text)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.placeholder[data-v-eaf1bbfa]{padding:16px;opacity:.3}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.notes>.date[data-v-eaf1bbfa]{display:block;margin:0;line-height:28px;font-size:12px;text-align:center;color:var(--dateDividerFg);background:var(--dateDividerBg);border-bottom:solid var(--lineWidth) var(--faceDivider)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.notes>.date span[data-v-eaf1bbfa]{margin:0 16px}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.notes>.date [data-icon][data-v-eaf1bbfa]{margin-right:8px}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>footer>button[data-v-eaf1bbfa]{display:block;margin:0;padding:16px;width:100%;text-align:center;color:#ccc;background:var(--face);border-top:solid var(--lineWidth) var(--faceDivider);border-bottom-left-radius:6px;border-bottom-right-radius:6px}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>footer>button[data-v-eaf1bbfa]:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.05)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>footer>button[data-v-eaf1bbfa]:active{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}",""]),t.exports=e}}]);
//# sourceMappingURL=16.11.37.1.js.map