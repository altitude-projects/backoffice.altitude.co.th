(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{409:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r(21),r(15),r(18),r(32),r(33);var n=r(4),o=r(7),c=r(30),d=r(31),l=(r(16),r(25),r(3)),h=r(6),f=r(5);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c.a)(this,e),this.json=m(m({},t),{},{area:t.area||0})}var t,r,o,j,v,O,y;return Object(d.a)(e,[{key:"save",value:(y=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,n=Object(f.e)(this.json,"unit"),!this.json.id){e.next=8;break}return e.next=5,Object(h.d)("patch",Object(h.e)(h.a,"projects/".concat(t,"/assets/").concat(this.json.id)),{headers:Object(h.c)(!0),data:n});case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(h.d)("post",Object(h.e)(h.a,"projects/".concat(t,"/assets")),{headers:Object(h.c)(!0),data:n});case 10:r=e.sent;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"asTableJson",value:function(e,t){return{id:this.json.id,no:(t-1)*e+this.json.no,address_number:this.json.address_number||"-",asset_number:this.json.asset_number||"-",asset_model:this.json.asset_model||"-",asset_type_name:this.json.asset_type.name,building:this.json.building||"-",usable_area:this.json.usable_area||"-",area:this.json.area||"-",phase:this.json.phase||"-",floor:this.json.floor||"-",property_type:this.json.property_type||"-"}}}],[{key:"index",value:(O=Object(n.a)(regeneratorRuntime.mark((function t(r,n,o,c){var d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.d)("get",Object(h.e)(h.a,"projects/".concat(r,"/assets")),{headers:Object(h.c)(!0),params:{search:n,page:o,per_page:c}});case 2:if(d=t.sent,f=Object(l.orderBy)(d.data.assets,["address_number"],["asc"]),200!==d.status){t.next=7;break}return f=Object(l.map)(f,(function(t,r){return t.no=r+1,new e(t)})),t.abrupt("return",{units:f,total_count:d.data.total_count});case 7:return t.abrupt("return",[]);case 8:case"end":return t.stop()}}),t)}))),function(e,t,r,n){return O.apply(this,arguments)})},{key:"show",value:(v=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.d)("get",Object(h.e)(h.a,"projects/".concat(r,"/assets/").concat(n)),{headers:Object(h.c)(!0)});case 2:if(200!==(o=t.sent).status){t.next=5;break}return t.abrupt("return",new e(o.data.asset));case 5:case"end":return t.stop()}}),t)}))),function(e,t){return v.apply(this,arguments)})},{key:"destroy",value:(j=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("delete",Object(h.e)(h.a,"projects/".concat(t,"/assets/").concat(r)),{headers:Object(h.c)(!0)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return j.apply(this,arguments)})},{key:"assetBillings",value:(o=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("get",Object(h.e)(h.a,"projects/".concat(t,"/assets/").concat(r,"/asset_billings")),{headers:Object(h.c)(!0)});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)})},{key:"importAssets",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",r),e.next=4,Object(h.d)("post",Object(h.e)(h.a,"projects/".concat(t,"/assets/import_assets")),{headers:Object(h.c)(!0,!0),data:n});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"importAssetSupplies",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("file",r),o.append("images_zip_file",n),e.next=5,Object(h.d)("post",Object(h.e)(h.a,"projects/".concat(t,"/assets/import_asset_supplies")),{headers:Object(h.c)(!0,!0),data:o});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),function(e,r,n){return t.apply(this,arguments)})}]),e}()},500:function(e,t,r){var content=r(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("1925d882",content,!0,{sourceMap:!1})},603:function(e,t,r){"use strict";r(500)},604:function(e,t,r){var n=r(22)(!1);n.push([e.i,"@media screen and (max-width:540px){[data-v-099c56af] .ivu-card-extra{position:static;text-align:right}}@media screen and (min-width:769px) and (max-width:865px){[data-v-099c56af] .ivu-card-extra{position:static;text-align:right}}",""]),e.exports=n},744:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(108),r(25),r(3)),c=r(82),d=r(409),l={data:function(){return{isLoading:!0,loading:!1,units:[],currentPage:1,pageSize:10,search:"",totalPages:null,projectType:null,visibleModal:!1,type:null}},mounted:function(){this.fetchProjectType(),this.fetchUnits()},methods:{openModal:function(e){this.type=e,this.visibleModal=!0},fetchItems:function(e,t){this.currentPage=e,this.pageSize=t,this.fetchUnits(!0)},fetchProjectType:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.show(e.$route.params.projectId);case 2:r=t.sent,e.projectType=r.json.project_type;case 4:case"end":return t.stop()}}),t)})))()},fetchUnits:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e?t.isLoading=!0:t.loading=!0,r.next=3,d.a.index(t.$route.params.projectId,t.search,t.currentPage,t.pageSize);case 3:n=r.sent,t.units=Object(o.map)(n.units,(function(e){return e.asTableJson(t.pageSize,t.currentPage)})),t.totalPages=n.total_count,t.isLoading=!1,t.loading=!1;case 8:case"end":return r.stop()}}),r)})))()},searchItem:function(e){this.search=e,this.currentPage=1,this.fetchUnits()},sortDatatable:function(e,t){var r=this,n=Object(o.orderBy)(this.units,[function(data){return data[e]||"".toLowerCase()}],[t]);this.units=Object(o.map)(n,(function(data,e){return data.no=(r.currentPage-1)*r.pageSize+(e+1),data}))}}},h=(r(603),r(9)),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isLoading?r("GLoading"):r("Card",{attrs:{"dis-hover":"",bordered:!1}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("h3",[e._v("\n        "+e._s(e.$t("pages.unit"))+"\n      ")])]),e._v(" "),r("GIndexPage",{attrs:{items:e.units,"show-sizer":"","search-by-api":"","current-page":e.currentPage,"page-size":e.pageSize,loading:e.loading,"new-button-name":e.$t("pages.unit"),component:"GUnitTable","new-url":{name:"projects-projectId-units-new",params:{projectId:e.$route.params.projectId}},"total-pages":e.totalPages},on:{importData:e.openModal,handleToSearchItem:e.searchItem,reloadData:e.fetchUnits,pageAndItemPerPage:e.fetchItems,sortBy:e.sortDatatable}}),e._v(" "),r("Modal",{attrs:{width:"60%","max-height":"600px","footer-hide":"",closable:!1,"mask-closable":!1},model:{value:e.visibleModal,callback:function(t){e.visibleModal=t},expression:"visibleModal"}},["unit"===e.type?r("GUploadUnitForm",{attrs:{"visible-modal":e.visibleModal,"project-type":e.projectType},on:{reloadData:e.fetchUnits,closeModal:function(t){e.visibleModal=!1}}}):e._e(),e._v(" "),"device"===e.type?r("GUploadDeviceForm",{attrs:{"visible-modal":e.visibleModal,"project-type":e.projectType},on:{reloadData:e.fetchUnits,closeModal:function(t){e.visibleModal=!1}}}):e._e()],1)],1)],1)}),[],!1,null,"099c56af",null);t.default=component.exports}}]);