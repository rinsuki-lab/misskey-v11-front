(window.webpackJsonp=window.webpackJsonp||[]).push([[36,16],{501:function(t,e,a){var n=a(508);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("4ecedb08",n,!0,{})},504:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(2),o=a(35),s=a(25),r=n.a.extend({i18n:Object(i.a)(),inject:["column","isScrollTop","count"],mixins:[Object(s.a)({limit:20,onQueueChanged:(t,e)=>{t.count(e.length)},onPrepend:(t,e,a)=>{if(Object(o.a)(t.$store.state.i,t.$store.state.settings,e))return!1;!document.hidden&&t.isScrollTop()||t.$store.commit("pushBehindNote",e)}})],props:{pagination:{required:!0},extract:{required:!1}},computed:{notes(){return this.extract?this.extract(this.items):this.items},_notes(){return this.notes.map(t=>{const e=new Date(t.createdAt).getDate(),a=new Date(t.createdAt).getMonth()+1;return t._date=e,t._datetext=this.$t("@.month-and-day").replace("{month}",a.toString()).replace("{day}",e.toString()),t})}},created(){this.column.$on("top",this.onTop),this.column.$on("bottom",this.onBottom),this.init()},beforeDestroy(){this.column.$off("top",this.onTop),this.column.$off("bottom",this.onBottom)},methods:{focus(){this.$refs.notes.children[0].focus?this.$refs.notes.children[0].focus():this.$refs.notes.$el.children[0].focus()}}}),d=(a(507),a(1)),l=Object(d.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"eamppglmnmimdhrlzhplwpvyeaqmmhxu"},[t.empty?a("div",{staticClass:"empty"},[t._v(t._s(t.$t("@.no-notes")))]):t._e(),t.error?a("mk-error",{on:{retry:function(e){return t.init()}}}):t._e(),t.fetching?a("div",{staticClass:"placeholder"},[t._l(10,(function(t){return[a("mk-note-skeleton",{key:t})]}))],2):t._e(),a(t.$store.state.device.reduceMotion?"div":"transition-group",{ref:"notes",tag:"component",staticClass:"transition notes",attrs:{name:"mk-notes",tag:"div"}},[t._l(t._notes,(function(e,n){return[a("mk-note",{key:e.id,attrs:{note:e,compact:!0}}),n!=t.notes.length-1&&e._date!=t._notes[n+1]._date?a("p",{key:e.id+"_date",staticClass:"date"},[a("span",[a("fa",{attrs:{icon:"angle-up"}}),t._v(t._s(e._datetext))],1),a("span",[a("fa",{attrs:{icon:"angle-down"}}),t._v(t._s(t._notes[n+1]._datetext))],1)]):t._e()]}))],2),t.more?a("footer",[a("button",{style:{cursor:t.moreFetching?"wait":"pointer"},attrs:{disabled:t.moreFetching},on:{click:function(e){return t.fetchMore()}}},[t.moreFetching?t._e():[t._v(t._s(t.$t("@.load-more")))],t.moreFetching?[a("fa",{attrs:{icon:"spinner",pulse:"","fixed-width":""}})]:t._e()],2)]):t._e()],1)}),[],!1,null,"eaf1bbfa",null);e.default=l.exports},507:function(t,e,a){"use strict";var n=a(501);a.n(n).a},508:function(t,e,a){(e=a(3)(!1)).push([t.i,".eamppglmnmimdhrlzhplwpvyeaqmmhxu .transition .mk-notes-enter[data-v-eaf1bbfa],.eamppglmnmimdhrlzhplwpvyeaqmmhxu .transition .mk-notes-leave-to[data-v-eaf1bbfa]{opacity:0;transform:translateY(-30px)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu .transition>*[data-v-eaf1bbfa]{transition:transform .3s ease,opacity .3s ease}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.empty[data-v-eaf1bbfa]{padding:16px;text-align:center;color:var(--text)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.placeholder[data-v-eaf1bbfa]{padding:16px;opacity:.3}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.notes>.date[data-v-eaf1bbfa]{display:block;margin:0;line-height:28px;font-size:12px;text-align:center;color:var(--dateDividerFg);background:var(--dateDividerBg);border-bottom:solid var(--lineWidth) var(--faceDivider)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.notes>.date span[data-v-eaf1bbfa]{margin:0 16px}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>.notes>.date [data-icon][data-v-eaf1bbfa]{margin-right:8px}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>footer>button[data-v-eaf1bbfa]{display:block;margin:0;padding:16px;width:100%;text-align:center;color:#ccc;background:var(--face);border-top:solid var(--lineWidth) var(--faceDivider);border-bottom-left-radius:6px;border-bottom-right-radius:6px}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>footer>button[data-v-eaf1bbfa]:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.05)}.eamppglmnmimdhrlzhplwpvyeaqmmhxu>footer>button[data-v-eaf1bbfa]:active{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}",""]),t.exports=e},526:function(t,e,a){var n=a(637);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("bd2dde34",n,!0,{})},636:function(t,e,a){"use strict";var n=a(526);a.n(n).a},637:function(t,e,a){(e=a(3)(!1)).push([t.i,".sainvnaq[data-v-74716fa2]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:16px}.sainvnaq>*[data-v-74716fa2]{height:70px;background-position:50%;background-size:cover;background-clip:content-box;border-radius:4px}",""]),t.exports=e},894:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(2),o=a(504),s=a(12),r=a(510),d=n.a.extend({i18n:Object(i.a)("deck/deck.user-column.vue"),components:{XNotes:o.default,XPage:()=>a.e(3).then(a.bind(null,606)).then(t=>t.default)},props:{user:{type:Object,required:!0}},data:()=>({withFiles:!1,images:[],chart:null}),computed:{pagination(){return{endpoint:"users/notes",limit:10,params:t=>({userId:this.user.id,untilDate:t?void 0:this.date?this.date.getTime():void 0,withFiles:this.withFiles,includeMyRenotes:this.$store.state.settings.showMyRenotes,includeRenotedMyNotes:this.$store.state.settings.showRenotedMyNotes,includeLocalRenotes:this.$store.state.settings.showLocalRenotes})}}},watch:{user(){this.fetch()}},created(){this.fetch()},methods:{fetch(){const t=["image/jpeg","image/png","image/gif","image/apng","image/vnd.mozilla.apng"];this.$root.api("users/notes",{userId:this.user.id,fileType:t,excludeNsfw:!this.$store.state.device.alwaysShowNsfw,limit:9}).then(e=>{for(const t of e)for(const e of t.files)e._note=t;const a=Object(s.a)(e.map(t=>t.files));this.images=a.filter(e=>t.includes(e.type)).slice(0,9)}),this.$root.api("charts/user/notes",{userId:this.user.id,span:"day",limit:21}).then(t=>{const e=[],a=[],n=[],i=new Date,o=i.getFullYear(),s=i.getMonth(),d=i.getDate();for(let i=0;i<21;i++){const r=new Date(o,s,d-i);e.push([r,t.diffs.normal[i]]),a.push([r,t.diffs.reply[i]]),n.push([r,t.diffs.renote[i]])}this.chart&&this.chart.destroy(),this.chart=new r.a(this.$refs.chart,{chart:{type:"bar",stacked:!0,height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},dataLabels:{enabled:!1},grid:{clipMarkers:!1,padding:{top:16,right:16,bottom:16,left:16}},tooltip:{shared:!0,intersect:!1},series:[{name:"Normal",data:e},{name:"Reply",data:a},{name:"Renote",data:n}],xaxis:{type:"datetime",crosshairs:{width:1,opacity:1}}}),this.chart.render()})}}}),l=(a(636),a(1)),c=Object(l.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.user.pinnedPage?a("ui-container",{attrs:{"body-togglable":!0},scopedSlots:t._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:"thumbtack"}}),t._v(" "+t._s(t.$t("pinned-page")))]},proxy:!0}],null,!1,682258713)},[a("div",[a("x-page",{key:t.user.pinnedPage.id,attrs:{page:t.user.pinnedPage,"show-title":!t.user.pinnedPage.hideTitleWhenPinned}})],1)]):t._e(),t.user.pinnedNotes&&t.user.pinnedNotes.length>0?a("ui-container",{attrs:{"body-togglable":!0},scopedSlots:t._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:"thumbtack"}}),t._v(" "+t._s(t.$t("pinned-notes")))]},proxy:!0}],null,!1,2952226793)},[a("div",t._l(t.user.pinnedNotes,(function(t){return a("mk-note",{key:t.id,attrs:{note:t}})})),1)]):t._e(),t.images.length>0?a("ui-container",{attrs:{"body-togglable":!0,expanded:t.$store.state.device.expandUsersPhotos},on:{toggle:function(e){return t.$store.commit("device/set",{key:"expandUsersPhotos",value:e})}},scopedSlots:t._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:["far","images"]}}),t._v(" "+t._s(t.$t("images")))]},proxy:!0}],null,!1,1317083035)},[a("div",{staticClass:"sainvnaq"},t._l(t.images,(function(e){return a("router-link",{key:e.id+":"+e._note.id,style:"background-image: url("+e.thumbnailUrl+")",attrs:{to:t._f("notePage")(e._note),title:e.name+"\n"+new Date(e.createdAt).toLocaleString()}})})),1)]):t._e(),a("ui-container",{attrs:{"body-togglable":!0,expanded:t.$store.state.device.expandUsersActivity},on:{toggle:function(e){return t.$store.commit("device/set",{key:"expandUsersActivity",value:e})}},scopedSlots:t._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:["far","chart-bar"]}}),t._v(" "+t._s(t.$t("activity")))]},proxy:!0}])},[a("div",[a("div",{ref:"chart"})])]),a("ui-container",{scopedSlots:t._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:["far","comment-alt"]}}),t._v(" "+t._s(t.$t("timeline")))]},proxy:!0}])},[a("div",[a("x-notes",{key:t.user.id,ref:"timeline",attrs:{pagination:t.pagination},on:{inited:function(){return t.$emit("loaded")}}})],1)])],1)}),[],!1,null,"74716fa2",null);e.default=c.exports}}]);
//# sourceMappingURL=36.11.37.1.js.map