(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{569:function(e,t,o){var r=o(734);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,o(4).default)("06a6abf5",r,!0,{})},612:function(e,t){e.exports=[{id:"milk",place:"floor"},{id:"bed",place:"floor"},{id:"low-table",place:"floor",props:{color:"color"},color:{Table:"color"}},{id:"desk",place:"floor",props:{color:"color"},color:{Board:"color"}},{id:"chair",place:"floor",props:{color:"color"},color:{Chair:"color"}},{id:"chair2",place:"floor",props:{color1:"color",color2:"color"},color:{Cushion:"color1",Leg:"color2"}},{id:"fan",place:"wall"},{id:"pc",place:"floor"},{id:"plant",place:"floor"},{id:"plant2",place:"floor"},{id:"eraser",place:"floor"},{id:"pencil",place:"floor"},{id:"pudding",place:"floor"},{id:"cardboard-box",place:"floor"},{id:"cardboard-box2",place:"floor"},{id:"cardboard-box3",place:"floor"},{id:"book",place:"floor",props:{color:"color"},color:{Cover:"color"}},{id:"book2",place:"floor"},{id:"piano",place:"floor"},{id:"facial-tissue",place:"floor"},{id:"server",place:"floor"},{id:"moon",place:"floor"},{id:"corkboard",place:"wall"},{id:"mousepad",place:"floor",props:{color:"color"},color:{Pad:"color"}},{id:"monitor",place:"floor",props:{screen:"image"},texture:{Screen:{prop:"screen",uv:{x:0,y:434,width:1024,height:588}}}},{id:"tv",place:"floor",props:{screen:"image"},texture:{Screen:{prop:"screen",uv:{x:0,y:434,width:1024,height:588}}}},{id:"keyboard",place:"floor"},{id:"carpet-stripe",place:"floor",props:{color1:"color",color2:"color"},color:{CarpetAreaA:"color1",CarpetAreaB:"color2"}},{id:"mat",place:"floor",props:{color:"color"},color:{Mat:"color"}},{id:"color-box",place:"floor",props:{color:"color"},color:{main:"color"}},{id:"wall-clock",place:"wall"},{id:"cube",place:"floor",props:{color:"color"},color:{Cube:"color"}},{id:"photoframe",place:"wall",props:{photo:"image",color:"color"},texture:{Photo:{prop:"photo",uv:{x:0,y:342,width:1024,height:683}}},color:{Frame:"color"}},{id:"pinguin",place:"floor",props:{body:"color",belly:"color"},color:{Body:"body",Belly:"belly"}},{id:"rubik-cube",place:"floor"},{id:"poster-h",place:"wall",props:{picture:"image"},texture:{Poster:{prop:"picture",uv:{x:0,y:277,width:1024,height:745}}}},{id:"poster-v",place:"wall",props:{picture:"image"},texture:{Poster:{prop:"picture",uv:{x:0,y:0,width:745,height:1024}}}},{id:"sofa",place:"floor",props:{color:"color"},color:{Sofa:"color"}},{id:"spiral",place:"floor",props:{color:"color"},color:{Step:"color"}},{id:"bin",place:"floor",props:{color:"color"},color:{Bin:"color"}},{id:"cup-noodle",place:"floor"},{id:"holo-display",place:"floor",props:{image:"image"},texture:{Image_Front:{prop:"image",uv:{x:0,y:0,width:1024,height:1024}},Image_Back:{prop:"image",uv:{x:0,y:0,width:1024,height:1024}}}},{id:"energy-drink",place:"floor"}]},733:function(e,t,o){"use strict";var r=o(569);o.n(r).a},734:function(e,t,o){(t=o(3)(!1)).push([e.i,".hveuntkp>.controller[data-v-1957ba12],.hveuntkp>.menu[data-v-1957ba12]{position:fixed;z-index:1;padding:16px;background:var(--face);color:var(--text)}.hveuntkp>.controller>section[data-v-1957ba12],.hveuntkp>.menu>section[data-v-1957ba12]{padding:16px 0}.hveuntkp>.controller>section[data-v-1957ba12]:first-child,.hveuntkp>.menu>section[data-v-1957ba12]:first-child{padding-top:0}.hveuntkp>.controller>section[data-v-1957ba12]:last-child,.hveuntkp>.menu>section[data-v-1957ba12]:last-child{padding-bottom:0}.hveuntkp>.controller>section[data-v-1957ba12]:not(:last-child),.hveuntkp>.menu>section[data-v-1957ba12]:not(:last-child){border-bottom:1px solid var(--faceDivider)}.hveuntkp>.controller[data-v-1957ba12]{top:16px;left:16px;width:256px}.hveuntkp>.controller>section>.name[data-v-1957ba12]{margin:0}.hveuntkp>.menu[data-v-1957ba12]{top:16px;right:16px;width:256px}",""]),e.exports=t},888:function(e,t,o){"use strict";o.r(t);var r=o(0),i=o(2),s=o(11),a=o(14),n=o(506),l=o(728),c=o(729),h=o(879),p=o(730),d=o(611),u=o(880),m=o(731),f=o(732),b=o(190),w=function(e,t,o,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};const g=o(612);n.z.crossOrigin="";class y{constructor(e,t,o,r,i){this.mixers=[],this.objects=[],this.selectedObject=null,this.isTransformMode=!1,this.roomInfo=o,this.graphicsQuality=i.graphicsQuality,this.onChangeSelect=i.onChangeSelect,this.clock=new n.l(!0),this.scene=new n.ub;const s=window.innerWidth,a=window.innerHeight;this.renderer=new n.Qb({antialias:!1,stencil:!1,alpha:!1,powerPreference:"ultra"===this.graphicsQuality?"high-performance":"high"===this.graphicsQuality?"high-performance":"medium"===this.graphicsQuality?"default":(this.graphicsQuality,"low-power")}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(s,a),this.renderer.autoClear=!1,this.renderer.setClearColor(new n.m(335661)),this.renderer.shadowMap.enabled=this.enableShadow,this.renderer.shadowMap.type="ultra"===this.graphicsQuality?n.gb:"high"===this.graphicsQuality?n.gb:"medium"===this.graphicsQuality?n.fb:(this.graphicsQuality,n.e),r.appendChild(this.canvas),this.camera=i.useOrthographicCamera?new n.eb(s/-2,s/2,a/2,a/-2,-10,10):new n.hb(45,s/a),i.useOrthographicCamera?(this.camera.position.x=2,this.camera.position.y=2,this.camera.position.z=2,this.camera.zoom=100,this.camera.updateProjectionMatrix()):(this.camera.position.x=5,this.camera.position.y=2,this.camera.position.z=5),this.scene.add(this.camera);const l=new n.b(16777215,1);if(this.scene.add(l),"cheep"!==this.graphicsQuality){const e=new n.Cb(16777215,.1);e.position.set(0,8,0),e.castShadow=this.enableShadow,e.shadow.bias=-1e-4,e.shadow.mapSize.width=this.shadowQuality,e.shadow.mapSize.height=this.shadowQuality,e.shadow.camera.near=.1,e.shadow.camera.far=9,e.shadow.camera.fov=45,this.scene.add(e)}const w=new n.Cb(16777215,.4);w.position.set(9,3,-2),w.castShadow=this.enableShadow,w.shadow.bias=-.001,w.shadow.mapSize.width=this.shadowQuality,w.shadow.mapSize.height=this.shadowQuality,w.shadow.camera.near=6,w.shadow.camera.far=15,w.shadow.camera.fov=45,this.scene.add(w);const g=new n.Cb(16777215,.2);if(g.position.set(-2,3,9),g.castShadow=!1,g.shadow.bias=-.001,g.shadow.camera.near=6,g.shadow.camera.far=15,g.shadow.camera.fov=45,this.scene.add(g),this.controls=new c.a(this.camera,this.canvas),this.controls.target.set(0,1,0),this.controls.enableZoom=!0,this.controls.enablePan=t,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=Math.PI/2,this.controls.minAzimuthAngle=0,this.controls.maxAzimuthAngle=Math.PI/2,this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.controls.mouseButtons.LEFT=1,this.controls.mouseButtons.MIDDLE=2,this.controls.mouseButtons.RIGHT=0,this.usePostFXs){const e=new n.Pb(s,a,{minFilter:n.J,magFilter:n.J,format:n.rb,stencilBuffer:!1}),t=new d.a(m.a);t.uniforms.resolution.value=new n.Lb(1/s,1/a),t.renderToScreen=!0,this.composer=new h.a(this.renderer,e),this.composer.addPass(new p.a(this.scene,this.camera)),"ultra"===this.graphicsQuality&&this.composer.addPass(new u.a(.25,30,128,512)),this.composer.addPass(t)}else this.composer=null;const y=`/proxy/?${Object(b.a)({url:e.avatarUrl})}`,v=new n.Gb;v.crossOrigin="anonymous";const x=v.load(y);x.wrapS=n.tb,x.wrapT=n.tb,x.anisotropy=16;const C=new n.U({map:x,side:n.q,alphaTest:.5}),j=new n.jb(1,1),F=new n.T(j,C);F.position.set(-3,2.5,2),F.rotation.y=Math.PI/2,F.castShadow=!1,this.scene.add(F);const T=e.username;(new n.v).load("/assets/fonts/helvetiker_regular.typeface.json",e=>{const t=new n.Eb(T,{size:.5,height:0,curveSegments:8,font:e,bevelThickness:0,bevelSize:0,bevelEnabled:!1}),o=new n.V({color:16777215}),r=new n.T(t,o);r.position.set(-3,2.25,1.25),r.rotation.y=Math.PI/2,r.castShadow=!1,this.scene.add(r)}),t&&(this.furnitureControl=new f.a(this.camera,this.canvas),this.scene.add(this.furnitureControl),this.canvas.onmousemove=this.onmousemove,this.canvas.onmousedown=this.onmousedown),this.loadRoom();for(const e of this.furnitures)this.loadFurniture(e).then(e=>{this.scene.add(e.scene),this.objects.push(e.scene)});this.usePostFXs?this.renderWithPostFXs():this.renderWithoutPostFXs()}get canvas(){return this.renderer.domElement}get furnitures(){return this.roomInfo.furnitures}set furnitures(e){this.roomInfo.furnitures=e}get enableShadow(){return"cheep"!=this.graphicsQuality}get usePostFXs(){return"cheep"!==this.graphicsQuality&&"low"!==this.graphicsQuality}get shadowQuality(){return"ultra"===this.graphicsQuality?16384:"high"===this.graphicsQuality?8192:"medium"===this.graphicsQuality?4096:"low"===this.graphicsQuality?1024:0}renderWithoutPostFXs(){this.renderFrameRequestId=window.requestAnimationFrame(this.renderWithoutPostFXs);const e=this.clock.getDelta();for(const t of this.mixers)t.update(e);this.controls.update(),this.renderer.render(this.scene,this.camera)}renderWithPostFXs(){this.renderFrameRequestId=window.requestAnimationFrame(this.renderWithPostFXs);const e=this.clock.getDelta();for(const t of this.mixers)t.update(e);this.controls.update(),this.renderer.clear(),this.composer.render()}loadRoom(){const e=this.roomInfo.roomType;(new l.a).load(`/assets/room/rooms/${e}/${e}.glb`,e=>{e.scene.traverse(e=>{e instanceof n.T&&(e.receiveShadow=this.enableShadow,e.material=new n.V({color:e.material.color,map:e.material.map,name:e.material.name}),e.material.map&&"cheep"!==this.graphicsQuality&&(e.material.map.minFilter=n.K,e.material.map.magFilter=n.K,e.material.map.anisotropy=8))}),e.scene.position.set(0,0,0),this.scene.add(e.scene),this.roomObj=e.scene,"default"===this.roomInfo.roomType&&this.applyCarpetColor()})}loadFurniture(e){const t=g.find(t=>t.id===e.type);return new Promise((o,r)=>{(new l.a).load(`/assets/room/furnitures/${e.type}/${e.type}.glb`,r=>{const i=r.scene;if(r.animations.length>0){const e=new n.d(i);this.mixers.push(e);for(const t of r.animations)e.clipAction(t).play()}i.name=e.id,i.position.x=e.position.x,i.position.y=e.position.y,i.position.z=e.position.z,i.rotation.x=e.rotation.x,i.rotation.y=e.rotation.y,i.rotation.z=e.rotation.z,i.traverse(e=>{e instanceof n.T&&(e.castShadow=this.enableShadow,e.receiveShadow=this.enableShadow,e.material.metalness=0,e.material.map&&"cheep"!==this.graphicsQuality&&(e.material.map.minFilter=n.K,e.material.map.magFilter=n.K,e.material.map.anisotropy=8))}),t.color&&this.applyCustomColor(i),t.texture&&this.applyCustomTexture(i),o(r)},null,r)})}applyCarpetColor(){this.roomObj.traverse(e=>{if(e instanceof n.T&&e.material&&e.material.name&&"Carpet"===e.material.name){const t=parseInt(this.roomInfo.carpetColor.substr(1),16);e.material.color.setHex(t)}})}applyCustomColor(e){const t=this.furnitures.find(t=>t.id===e.name),o=g.find(e=>e.id===t.type);null!=o.color&&e.traverse(e=>{if(e instanceof n.T)for(const r of Object.keys(o.color)){if(!e.material||!e.material.name||e.material.name!==r)continue;const i=o.color[r],s=t.props?t.props[i]:void 0;if(null==s)continue;const a=parseInt(s.substr(1),16);e.material.color.setHex(a)}})}applyCustomTexture(e){const t=this.furnitures.find(t=>t.id===e.name),o=g.find(e=>e.id===t.type);null!=o.texture&&e.traverse(e=>{if(e instanceof n.T)for(const r of Object.keys(o.texture)){if(e.name!==r)continue;const i=o.texture[r].prop,s=t.props?t.props[i]:void 0;if(null==s)continue;const a=document.createElement("canvas");a.height=1024,a.width=1024,e.material=new n.V({emissive:1118481,side:n.q,alphaTest:.5});const l=new Image;l.crossOrigin="anonymous",l.onload=()=>{const t=o.texture[r].uv;a.getContext("2d").drawImage(l,0,0,l.width,l.height,t.x,t.y,t.width,t.height);const i=new n.Fb(a);i.wrapS=n.tb,i.wrapT=n.tb,i.anisotropy=16,i.flipY=!1,e.material.map=i,e.material.needsUpdate=!0,e.material.map.needsUpdate=!0},l.src=s}})}onmousemove(e){if(this.isTransformMode)return;const t=e.target.getBoundingClientRect(),o=(e.clientX*window.devicePixelRatio-t.left)/this.canvas.width*2-1,r=-(e.clientY*window.devicePixelRatio-t.top)/this.canvas.height*2+1,i=new n.Lb(o,r);this.camera.updateMatrixWorld();const s=new n.sb;s.setFromCamera(i,this.camera);const a=s.intersectObjects(this.objects,!0);for(const e of this.objects)this.isSelectedObject(e)||e.traverse(e=>{e instanceof n.T&&e.material.emissive.setHex(0)});if(a.length>0){const e=this.getRoot(a[0].object);if(this.isSelectedObject(e))return;e.traverse(e=>{e instanceof n.T&&e.material.emissive.setHex(1644825)})}}onmousedown(e){if(this.isTransformMode)return;if(e.target!==this.canvas||0!==e.button)return;const t=e.target.getBoundingClientRect(),o=(e.clientX*window.devicePixelRatio-t.left)/this.canvas.width*2-1,r=-(e.clientY*window.devicePixelRatio-t.top)/this.canvas.height*2+1,i=new n.Lb(o,r);this.camera.updateMatrixWorld();const s=new n.sb;s.setFromCamera(i,this.camera);const a=s.intersectObjects(this.objects,!0);for(const e of this.objects)e.traverse(e=>{e instanceof n.T&&e.material.emissive.setHex(0)});if(a.length>0){const e=this.getRoot(a[0].object);this.selectFurniture(e)}else this.selectedObject=null,this.onChangeSelect(null)}getRoot(e){let t=!1,o=e.parent;for(;!t;)null==o.parent.parent?t=!0:o=o.parent;return o}isSelectedObject(e){return null!=this.selectedObject&&e.name===this.selectedObject.name}selectFurniture(e){this.selectedObject=e,this.onChangeSelect(e),e.traverse(e=>{e instanceof n.T&&e.material.emissive.setHex(16711680)})}enterTransformMode(e){this.isTransformMode=!0,this.furnitureControl.setMode(e),this.furnitureControl.attach(this.selectedObject)}exitTransformMode(){this.isTransformMode=!1,this.furnitureControl.detach()}updateProp(e,t){const o=this.furnitures.find(e=>e.id===this.selectedObject.name);null==o.props&&(o.props={}),o.props[e]=t,this.applyCustomColor(this.selectedObject),this.applyCustomTexture(this.selectedObject)}addFurniture(e){const t={id:Object(a.v4)(),type:e,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}};this.furnitures.push(t),this.loadFurniture(t).then(e=>{this.scene.add(e.scene),this.objects.push(e.scene)})}removeFurniture(){this.exitTransformMode();const e=this.selectedObject;this.scene.remove(e),this.objects=this.objects.filter(t=>t.name!==e.name),this.furnitures=this.furnitures.filter(t=>t.id!==e.name),this.selectedObject=null,this.onChangeSelect(null)}removeAllFurnitures(){this.exitTransformMode();for(const e of this.objects)this.scene.remove(e);this.objects=[],this.furnitures=[],this.selectedObject=null,this.onChangeSelect(null)}updateCarpetColor(e){this.roomInfo.carpetColor=e,this.applyCarpetColor()}changeRoomType(e){this.roomInfo.roomType=e,this.scene.remove(this.roomObj),this.loadRoom()}getRoomInfo(){for(const e of this.objects){const t=this.furnitures.find(t=>t.id===e.name);t.position.x=e.position.x,t.position.y=e.position.y,t.position.z=e.position.z,t.rotation.x=e.rotation.x,t.rotation.y=e.rotation.y,t.rotation.z=e.rotation.z}return this.roomInfo}getSelectedObject(){return this.selectedObject}findFurnitureById(e){return this.furnitures.find(t=>t.id===e)}destroy(){window.cancelAnimationFrame(this.renderFrameRequestId),this.controls.dispose(),this.scene.dispose()}}w([s.a],y.prototype,"renderWithoutPostFXs",null),w([s.a],y.prototype,"renderWithPostFXs",null),w([s.a],y.prototype,"loadRoom",null),w([s.a],y.prototype,"loadFurniture",null),w([s.a],y.prototype,"applyCarpetColor",null),w([s.a],y.prototype,"applyCustomColor",null),w([s.a],y.prototype,"applyCustomTexture",null),w([s.a],y.prototype,"onmousemove",null),w([s.a],y.prototype,"onmousedown",null),w([s.a],y.prototype,"getRoot",null),w([s.a],y.prototype,"isSelectedObject",null),w([s.a],y.prototype,"selectFurniture",null),w([s.a],y.prototype,"enterTransformMode",null),w([s.a],y.prototype,"exitTransformMode",null),w([s.a],y.prototype,"updateProp",null),w([s.a],y.prototype,"addFurniture",null),w([s.a],y.prototype,"removeFurniture",null),w([s.a],y.prototype,"removeAllFurnitures",null),w([s.a],y.prototype,"updateCarpetColor",null),w([s.a],y.prototype,"changeRoomType",null),w([s.a],y.prototype,"getRoomInfo",null),w([s.a],y.prototype,"getSelectedObject",null),w([s.a],y.prototype,"findFurnitureById",null),w([s.a],y.prototype,"destroy",null);var v=o(16),x=r.a.extend({data:()=>({selected:null,objectHeight:0,orbitRadius:5}),mounted(){const e=this.$el,t=e.width,o=e.height,r=new n.ub,i=new n.Qb({canvas:e,antialias:!0,alpha:!1});i.setPixelRatio(window.devicePixelRatio),i.setSize(t,o),i.setClearColor(0),i.autoClear=!1,i.shadowMap.enabled=!0,i.shadowMap.cullFace=n.n;const s=new n.hb(75,t/o,.1,100);s.zoom=10,s.position.x=0,s.position.y=2,s.position.z=0,s.updateProjectionMatrix(),r.add(s);const a=new n.b(16777215,1);a.castShadow=!1,r.add(a);const l=new n.kb(16777215,1,100);l.position.set(3,3,3),r.add(l);const c=new n.x(5,16,4473924,2236962);r.add(c);const h=()=>{const e=4e-4*Date.now();requestAnimationFrame(h),s.position.y=Math.sin(Math.PI/6)*this.orbitRadius,s.position.z=Math.cos(e)*this.orbitRadius,s.position.x=Math.sin(e)*this.orbitRadius,s.lookAt(new n.Mb(0,this.objectHeight/2,0)),i.render(r,s)};this.selected=e=>{const t=e.clone(),o=r.getObjectByName("obj");null!=o&&r.remove(o),t.name="obj",t.position.x=0,t.position.y=0,t.position.z=0,t.rotation.x=0,t.rotation.y=0,t.rotation.z=0,t.traverse(e=>{if(e instanceof n.T)return e.material=e.material.clone(),e.material.emissive.setHex(0)});const i=(new n.g).setFromObject(t);this.objectHeight=i.max.y-i.min.y;const a=i.max.x-i.min.x,l=i.max.z-i.min.z,c=Math.hypot(a,l)/s.aspect;this.orbitRadius=Math.max(c,this.objectHeight)*s.zoom*.625/Math.tan(.5*s.fov*(Math.PI/180)),r.add(t)},h()}}),C=o(1),j=Object(C.a)(x,(function(){var e=this.$createElement;return(this._self._c||e)("canvas",{attrs:{width:"224",height:"128"}})}),[],!1,null,null,null).exports,F=o(5),T=o(10);const M=o(612);let S;var O=r.a.extend({i18n:Object(i.a)("room"),components:{XPreview:j},props:{acct:{type:String,required:!0}},data:()=>({objectSelected:!1,selectedFurnitureName:null,selectedFurnitureInfo:null,selectedFurnitureProps:null,roomType:null,carpetColor:null,isTranslateMode:!1,isRotateMode:!1,isMyRoom:!1,changed:!1,faBoxOpen:F.t,faSave:T.z,faTrashAlt:T.F,faUndo:F.Nc,faArrowsAlt:F.m,faBan:F.p,faBroom:F.w}),async mounted(){window.addEventListener("beforeunload",this.beforeunload);const e=await this.$root.api("users/show",Object.assign({},Object(v.a)(this.acct)));this.isMyRoom=this.$store.getters.isSignedIn&&this.$store.state.i.id===e.id;const t=await this.$root.api("room/show",{userId:e.id});this.roomType=t.roomType,this.carpetColor=t.carpetColor,S=new y(e,this.isMyRoom,t,this.$el,{graphicsQuality:this.$store.state.device.roomGraphicsQuality,onChangeSelect:e=>{if(this.objectSelected=null!=e,e){const t=S.findFurnitureById(e.name);this.selectedFurnitureName=this.$t("furnitures."+t.type),this.selectedFurnitureInfo=M.find(e=>e.id===t.type),this.selectedFurnitureProps=t.props?JSON.parse(JSON.stringify(t.props)):null,this.$nextTick(()=>{this.$refs.preview.selected(e)})}},useOrthographicCamera:this.$store.state.device.roomUseOrthographicCamera})},beforeRouteLeave(e,t,o){this.changed?this.$root.dialog({type:"warning",text:this.$t("leave-confirm"),showCancelButton:!0}).then(({canceled:e})=>{e?o(!1):o()}):o()},beforeDestroy(){S.destroy(),window.removeEventListener("beforeunload",this.beforeunload)},methods:{beforeunload(e){this.changed&&(e.preventDefault(),e.returnValue="")},async add(){const{canceled:e,result:t}=await this.$root.dialog({type:null,title:this.$t("add-furniture"),select:{items:M.map(e=>({value:e.id,text:this.$t("furnitures."+e.id)}))},showCancelButton:!0});e||(S.addFurniture(t),this.changed=!0)},remove(){this.isTranslateMode=!1,this.isRotateMode=!1,S.removeFurniture(),this.changed=!0},save(){this.$root.api("room/update",{room:S.getRoomInfo()}).then(()=>{this.changed=!1,this.$root.dialog({type:"success",text:this.$t("saved")})}).catch(e=>{this.$root.dialog({type:"error",text:e.message})})},clear(){this.$root.dialog({type:"warning",text:this.$t("clear-confirm"),showCancelButton:!0}).then(({canceled:e})=>{e||(S.removeAllFurnitures(),this.changed=!0)})},chooseImage(e){this.$chooseDriveFile({multiple:!1}).then(t=>{S.updateProp(e,`/proxy/?${Object(b.a)({url:t.thumbnailUrl})}`),this.$refs.preview.selected(S.getSelectedObject()),this.changed=!0})},updateColor(e,t){S.updateProp(e,t.target.value),this.$refs.preview.selected(S.getSelectedObject()),this.changed=!0},updateCarpetColor(e){S.updateCarpetColor(e.target.value),this.carpetColor=e.target.value,this.changed=!0},updateRoomType(e){S.changeRoomType(e),this.roomType=e,this.changed=!0},translate(){this.isTranslateMode?this.exit():(this.isRotateMode=!1,this.isTranslateMode=!0,S.enterTransformMode("translate")),this.changed=!0},rotate(){this.isRotateMode?this.exit():(this.isTranslateMode=!1,this.isRotateMode=!0,S.enterTransformMode("rotate")),this.changed=!0},exit(){this.isTranslateMode=!1,this.isRotateMode=!1,S.exitTransformMode(),this.changed=!0}}}),P=(o(733),Object(C.a)(O,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hveuntkp"},[e.objectSelected?o("div",{staticClass:"controller"},[o("section",[o("p",{staticClass:"name"},[e._v(e._s(e.selectedFurnitureName))]),o("x-preview",{ref:"preview"}),e.selectedFurnitureInfo.props?e._l(Object.keys(e.selectedFurnitureInfo.props),(function(t){return o("div",{key:t},[o("p",[e._v(e._s(t))]),"image"===e.selectedFurnitureInfo.props[t]?[o("ui-button",{on:{click:function(o){return e.chooseImage(t)}}},[e._v(e._s(e.$t("chooseImage")))])]:"color"===e.selectedFurnitureInfo.props[t]?[o("input",{attrs:{type:"color"},domProps:{value:e.selectedFurnitureProps?e.selectedFurnitureProps[t]:null},on:{change:function(o){return e.updateColor(t,o)}}})]:e._e()],2)})):e._e()],2),o("section",[o("ui-button",{attrs:{primary:e.isTranslateMode},on:{click:function(t){return e.translate()}}},[o("fa",{attrs:{icon:e.faArrowsAlt}}),e._v(" "+e._s(e.$t("translate")))],1),o("ui-button",{attrs:{primary:e.isRotateMode},on:{click:function(t){return e.rotate()}}},[o("fa",{attrs:{icon:e.faUndo}}),e._v(" "+e._s(e.$t("rotate")))],1),e.isTranslateMode||e.isRotateMode?o("ui-button",{on:{click:function(t){return e.exit()}}},[o("fa",{attrs:{icon:e.faBan}}),e._v(" "+e._s(e.$t("exit")))],1):e._e()],1),o("section",[o("ui-button",{on:{click:function(t){return e.remove()}}},[o("fa",{attrs:{icon:e.faTrashAlt}}),e._v(" "+e._s(e.$t("remove")))],1)],1)]):e._e(),e.isMyRoom?o("div",{staticClass:"menu"},[o("section",[o("ui-button",{on:{click:function(t){return e.add()}}},[o("fa",{attrs:{icon:e.faBoxOpen}}),e._v(" "+e._s(e.$t("add-furniture")))],1)],1),o("section",[o("ui-select",{attrs:{value:e.roomType},on:{input:function(t){return e.updateRoomType(t)}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("room-type")))]},proxy:!0}],null,!1,3739269933)},[o("option",{attrs:{value:"default"}},[e._v(e._s(e.$t("rooms.default")))]),o("option",{attrs:{value:"washitsu"}},[e._v(e._s(e.$t("rooms.washitsu")))])]),"default"===e.roomType?o("label",[o("span",[e._v(e._s(e.$t("carpet-color")))]),o("input",{attrs:{type:"color"},domProps:{value:e.carpetColor},on:{change:function(t){return e.updateCarpetColor(t)}}})]):e._e()],1),o("section",[o("ui-button",{attrs:{primary:e.changed},on:{click:function(t){return e.save()}}},[o("fa",{attrs:{icon:e.faSave}}),e._v(" "+e._s(e.$t("save")))],1),o("ui-button",{on:{click:function(t){return e.clear()}}},[o("fa",{attrs:{icon:e.faBroom}}),e._v(" "+e._s(e.$t("clear")))],1)],1)]):e._e()])}),[],!1,null,"1957ba12",null));t.default=P.exports}}]);
//# sourceMappingURL=39.11.37.1.js.map