(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{505:function(i,t,e){var a=e(513);"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);(0,e(4).default)("194b0d7c",a,!0,{})},512:function(i,t,e){"use strict";var a=e(505);e.n(a).a},513:function(i,t,e){(t=e(3)(!1)).push([i.i,".zdjebgpv[data-v-cd0797c6]{display:flex}.zdjebgpv>.icon[data-v-cd0797c6],.zdjebgpv>img[data-v-cd0797c6]{pointer-events:none}.zdjebgpv>.icon-sub[data-v-cd0797c6]{position:absolute;width:30%;height:auto;margin:0;right:4%;bottom:4%}.zdjebgpv>*[data-v-cd0797c6]{margin:auto}.zdjebgpv:not(.detail)>img[data-v-cd0797c6]{height:100%;width:100%;object-fit:cover}.zdjebgpv:not(.detail)>.icon[data-v-cd0797c6]{height:65%;width:65%}.zdjebgpv:not(.detail)>audio[data-v-cd0797c6],.zdjebgpv:not(.detail)>video[data-v-cd0797c6]{width:100%}.zdjebgpv.detail>.icon[data-v-cd0797c6]{height:100px;width:100px;margin:16px}.zdjebgpv.detail[data-v-cd0797c6]>:not(.icon){max-height:300px;max-width:100%;height:100%;object-fit:contain}",""]),i.exports=t},514:function(i,t,e){"use strict";var a=e(0),s=e(9),o=e(5),n=a.a.extend({props:{file:{type:Object,required:!0},fit:{type:String,required:!1,default:"cover"},detail:{type:Boolean,required:!1,default:!1}},data:()=>({isContextmenuShowing:!1,isDragging:!1,faFile:o.hb,faFileAlt:o.ib,faFileImage:o.lb,faMusic:o.bc,faFileVideo:o.ob,faFileCsv:o.kb,faFilePdf:o.nb,faFileArchive:o.jb,faFilm:o.pb}),computed:{is(){return this.file.type.startsWith("image/")?"image":this.file.type.startsWith("video/")?"video":"audio/midi"===this.file.type?"midi":this.file.type.startsWith("audio/")?"audio":this.file.type.endsWith("/csv")?"csv":this.file.type.endsWith("/pdf")?"pdf":this.file.type.startsWith("text/")?"textfile":["application/zip","application/x-cpio","application/x-bzip","application/x-bzip2","application/java-archive","application/x-rar-compressed","application/x-tar","application/gzip","application/x-7z-compressed"].some(i=>i===this.file.type)?"archive":"unknown"},isThumbnailAvailable(){return!!this.file.thumbnailUrl&&("image"===this.is||"video"===this.is)},background(){return this.file.properties.avgColor||"transparent"}},mounted(){const i=this.$refs.volumectrl;i&&(i.volume=this.$store.state.device.mediaVolume)},methods:{onThumbnailLoaded(){this.file.properties.avgColor&&Object(s.a)({targets:this.$refs.thumbnail,backgroundColor:"transparent",duration:100,easing:"linear"})},volumechange(){const i=this.$refs.volumectrl;this.$store.commit("device/set",{key:"mediaVolume",value:i.volume})}}}),l=(e(512),e(1)),d=Object(l.a)(n,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{ref:"thumbnail",staticClass:"zdjebgpv",class:{detail:i.detail},style:"background-color: "+i.background},[i.detail&&"image"===i.is?e("img",{attrs:{src:i.file.url,alt:i.file.name,title:i.file.name},on:{load:i.onThumbnailLoaded}}):i.detail&&"video"===i.is?e("video",{ref:"volumectrl",attrs:{src:i.file.url,preload:"metadata",controls:""}}):i.isThumbnailAvailable?e("img",{style:"object-fit: "+i.fit,attrs:{src:i.file.thumbnailUrl,alt:""},on:{load:i.onThumbnailLoaded}}):"image"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faFileImage}}):"video"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faFileVideo}}):i.detail&&"audio"===i.is?e("audio",{ref:"volumectrl",attrs:{src:i.file.url,preload:"metadata",controls:""}}):"audio"===i.is||"midi"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faMusic}}):"csv"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faFileCsv}}):"pdf"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faFilePdf}}):"textfile"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faFileAlt}}):"archive"===i.is?e("fa",{staticClass:"icon",attrs:{icon:i.faFileArchive}}):e("fa",{staticClass:"icon",attrs:{icon:i.faFile}}),!i.detail&&i.isThumbnailAvailable&&"video"===i.is?e("fa",{staticClass:"icon-sub",attrs:{icon:i.faFilm}}):i._e()],1)}),[],!1,null,"cd0797c6",null);t.a=d.exports},573:function(i,t,e){var a=e(810);"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);(0,e(4).default)("26af2ba2",a,!0,{})},809:function(i,t,e){"use strict";var a=e(573);e.n(a).a},810:function(i,t,e){(t=e(3)(!1)).push([i.i,".skeikyzd[data-v-617f4288]{padding:4px}.skeikyzd>.files[data-v-617f4288]{display:flex;flex-wrap:wrap}.skeikyzd>.files>div[data-v-617f4288]{width:64px;height:64px;margin:4px;cursor:move}.skeikyzd>.files>div:hover>.remove[data-v-617f4288]{display:block}.skeikyzd>.files>div>.thumbnail[data-v-617f4288]{width:100%;height:100%;z-index:1;color:var(--text)}.skeikyzd>.files>div>.remove[data-v-617f4288]{display:none;position:absolute;top:-6px;right:-6px;width:16px;height:16px;cursor:pointer;z-index:1000}.skeikyzd>.files>div>.sensitive[data-v-617f4288]{display:flex;position:absolute;width:64px;height:64px;top:0;left:0;z-index:2;background:rgba(17,17,17,.7);color:#fff}.skeikyzd>.files>div>.sensitive>.icon[data-v-617f4288]{margin:auto}.skeikyzd>.remain[data-v-617f4288]{display:block;position:absolute;top:8px;right:8px;margin:0;padding:0;color:var(--primaryAlpha04)}",""]),i.exports=t},918:function(i,t,e){"use strict";e.r(t);var a=e(0),s=e(2),o=e(189),n=e(27),l=e(10),d=e(5),c=e(514),r=a.a.extend({i18n:Object(s.a)("common/views/components/post-form-attaches.vue"),components:{XDraggable:o,XFileThumbnail:c.a},props:{files:{type:Array,required:!0},detachMediaFn:{type:Function,required:!1}},data:()=>({faExclamationTriangle:d.eb}),methods:{detachMedia(i){this.detachMediaFn?this.detachMediaFn(i):this.$parent.detachMedia&&this.$parent.detachMedia(i)},toggleSensitive(i){this.$root.api("drive/files/update",{fileId:i.id,isSensitive:!i.isSensitive}).then(()=>{i.isSensitive=!i.isSensitive})},showFileMenu(i,t){this.$root.new(n.a,{items:[{type:"item",text:i.isSensitive?this.$t("unmark-as-sensitive"):this.$t("mark-as-sensitive"),icon:i.isSensitive?l.l:l.k,action:()=>{this.toggleSensitive(i)}},{type:"item",text:this.$t("attach-cancel"),icon:l.E,action:()=>{this.detachMedia(i.id)}}],source:t.currentTarget||t.target})}}}),p=(e(809),e(1)),f=Object(p.a)(r,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:0!=i.files.length,expression:"files.length != 0"}],staticClass:"skeikyzd"},[e("x-draggable",{staticClass:"files",attrs:{list:i.files,animation:"150"}},i._l(i.files,(function(t){return e("div",{key:t.id,on:{click:function(e){return i.showFileMenu(t,e)},contextmenu:function(e){return e.preventDefault(),i.showFileMenu(t,e)}}},[e("x-file-thumbnail",{staticClass:"thumbnail",attrs:{"data-id":t.id,file:t,fit:"cover"}}),e("img",{staticClass:"remove",attrs:{src:"/assets/desktop/remove.png",title:i.$t("attach-cancel"),alt:""},on:{click:function(e){return e.stopPropagation(),i.detachMedia(t.id)}}}),t.isSensitive?e("div",{staticClass:"sensitive"},[e("fa",{staticClass:"icon",attrs:{icon:i.faExclamationTriangle}})],1):i._e()],1)})),0),e("p",{staticClass:"remain"},[i._v(i._s(4-i.files.length)+"/4")])],1)}),[],!1,null,"617f4288",null);t.default=f.exports}}]);
//# sourceMappingURL=9.11.37.1.js.map