(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{409:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));r(21),r(15),r(18),r(32),r(33);var n=r(4),o=r(7),c=r(30),l=r(31),f=(r(16),r(25),r(3)),m=r(6),d=r(5);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c.a)(this,e),this.json=j(j({},t),{},{area:t.area||0})}var t,r,o,h,_,v,O;return Object(l.a)(e,[{key:"save",value:(O=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,n=Object(d.e)(this.json,"unit"),!this.json.id){e.next=8;break}return e.next=5,Object(m.d)("patch",Object(m.e)(m.a,"projects/".concat(t,"/assets/").concat(this.json.id)),{headers:Object(m.c)(!0),data:n});case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(m.d)("post",Object(m.e)(m.a,"projects/".concat(t,"/assets")),{headers:Object(m.c)(!0),data:n});case 10:r=e.sent;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"asTableJson",value:function(e,t){return{id:this.json.id,no:(t-1)*e+this.json.no,address_number:this.json.address_number||"-",asset_number:this.json.asset_number||"-",asset_model:this.json.asset_model||"-",asset_type_name:this.json.asset_type.name,building:this.json.building||"-",usable_area:this.json.usable_area||"-",area:this.json.area||"-",phase:this.json.phase||"-",floor:this.json.floor||"-",property_type:this.json.property_type||"-"}}}],[{key:"index",value:(v=Object(n.a)(regeneratorRuntime.mark((function t(r,n,o,c){var l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.d)("get",Object(m.e)(m.a,"projects/".concat(r,"/assets")),{headers:Object(m.c)(!0),params:{search:n,page:o,per_page:c}});case 2:if(l=t.sent,d=Object(f.orderBy)(l.data.assets,["address_number"],["asc"]),200!==l.status){t.next=7;break}return d=Object(f.map)(d,(function(t,r){return t.no=r+1,new e(t)})),t.abrupt("return",{units:d,total_count:l.data.total_count});case 7:return t.abrupt("return",[]);case 8:case"end":return t.stop()}}),t)}))),function(e,t,r,n){return v.apply(this,arguments)})},{key:"show",value:(_=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.d)("get",Object(m.e)(m.a,"projects/".concat(r,"/assets/").concat(n)),{headers:Object(m.c)(!0)});case 2:if(200!==(o=t.sent).status){t.next=5;break}return t.abrupt("return",new e(o.data.asset));case 5:case"end":return t.stop()}}),t)}))),function(e,t){return _.apply(this,arguments)})},{key:"destroy",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)("delete",Object(m.e)(m.a,"projects/".concat(t,"/assets/").concat(r)),{headers:Object(m.c)(!0)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)})},{key:"assetBillings",value:(o=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)("get",Object(m.e)(m.a,"projects/".concat(t,"/assets/").concat(r,"/asset_billings")),{headers:Object(m.c)(!0)});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)})},{key:"importAssets",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",r),e.next=4,Object(m.d)("post",Object(m.e)(m.a,"projects/".concat(t,"/assets/import_assets")),{headers:Object(m.c)(!0,!0),data:n});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"importAssetSupplies",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("file",r),o.append("images_zip_file",n),e.next=5,Object(m.d)("post",Object(m.e)(m.a,"projects/".concat(t,"/assets/import_asset_supplies")),{headers:Object(m.c)(!0,!0),data:o});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),function(e,r,n){return t.apply(this,arguments)})}]),e}()},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(4),o=r(30),c=r(31),l=(r(25),r(3)),f=r(6),m=r(5),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),this.json=t}var t,r,d,h,j,_;return Object(c.a)(e,[{key:"save",value:(_=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,n=Object(m.e)(this.json,"unitType"),!this.json.id){e.next=8;break}return e.next=5,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/asset_types/").concat(this.json.id)),{headers:Object(f.c)(!0),data:n});case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(f.d)("post",Object(f.e)(f.a,"projects/".concat(t,"/asset_types")),{headers:Object(f.c)(!0),data:n});case 10:r=e.sent;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{key:"activate",value:(j=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/asset_types/").concat(this.json.id,"/activate")),{headers:Object(f.c)(!0)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"inactivate",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/asset_types/").concat(this.json.id,"/inactivate")),{headers:Object(f.c)(!0)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})}],[{key:"unitTypeForSelect",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(t,"/asset_types/asset_types_for_select")),{headers:Object(f.c)(!0)});case 2:if(200!==(r=e.sent).status){e.next=5;break}return e.abrupt("return",r.data.asset_types);case 5:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"index",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(r,"/asset_types")),{headers:Object(f.c)(!0)});case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",Object(l.map)(n.data.asset_types,(function(t,r){return t.no=r+1,new e(t,r)})));case 5:return t.abrupt("return",[]);case 6:case"end":return t.stop()}}),t)}))),function(e){return r.apply(this,arguments)})},{key:"show",value:(t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(r,"/asset_types/").concat(n)),{headers:Object(f.c)(!0)});case 2:if(200!==(o=t.sent).status){t.next=5;break}return t.abrupt("return",new e(o.data.asset_type));case 5:case"end":return t.stop()}}),t)}))),function(e,r){return t.apply(this,arguments)})}]),e}()},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(4),o=r(30),c=r(31),l=(r(25),r(3)),f=r(6),m=r(5),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),this.json=t,this.json.value=t.value||[]}var t,r,d;return Object(c.a)(e,[{key:"save",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,n=Object(m.e)(this.json,"configuration"),n=Object(m.n)(n,"configuration"),!this.json.id){e.next=9;break}return e.next=6,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/configurations/").concat(this.json.id)),{data:n,headers:Object(f.c)(!0)});case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,Object(f.d)("post",Object(f.e)(f.a,"projects/".concat(t,"/configurations")),{data:n,headers:Object(f.c)(!0)});case 11:r=e.sent;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"asTableJson",value:function(){return{id:this.json.id,key:this.json.key,value:this.json.value}}}],[{key:"index",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(r,"/configurations")),{headers:Object(f.c)(!0)});case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",Object(l.map)(n.data.configurations,(function(t){return new e(t)})));case 5:return t.abrupt("return",[]);case 6:case"end":return t.stop()}}),t)}))),function(e){return r.apply(this,arguments)})},{key:"show",value:(t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(r,"/configurations/").concat(n)),{headers:Object(f.c)(!0)});case 2:if(200!==(o=t.sent).status){t.next=5;break}return t.abrupt("return",new e(o.data.configuration));case 5:return t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)}))),function(e,r){return t.apply(this,arguments)})}]),e}()},527:function(e,t,r){var content=r(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("29045829",content,!0,{sourceMap:!1})},655:function(e,t,r){"use strict";r(527)},656:function(e,t,r){var n=r(22)(!1);n.push([e.i,"[data-v-b047584a] .ivu-select{font-weight:400}",""]),e.exports=n},801:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(16),r(303),r(11),r(25),r(3)),c=r(82),l=r(409),f=r(410),m=r(424),d=r(5),h={props:{isNew:{type:Boolean,default:!1}},data:function(){return{buildings:[],floors:[],formData:new l.a,unitTypes:[],isLoading:!this.isNew,isHighRise:!1}},computed:{language:function(){return this.$store.state.language.value}},watch:{language:function(){this.$store.state.isSelectLanguage&&this.$nextTick((function(){this.$refs.form&&this.$refs.form.validate()}))}},mounted:function(){this.fetchConfigurations(),this.fetchProjects(),this.fetchUnitTypes(),this.isNew||this.fetchUnit()},methods:{validateNumber:d.p,fetchConfigurations:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.index(e.$route.params.projectId);case 2:r=t.sent,n=[],c=[],Object(o.forEach)(r,(function(e){if(Object(o.includes)(["floor","building"],e.json.key))switch(e.json.key){case"floor":n=e.json.value[0].value;break;case"building":c=e.json.value[0].value}})),e.floors=n,e.buildings=c;case 8:case"end":return t.stop()}}),t)})))()},fetchProjects:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.show(e.$route.params.projectId);case 2:r=t.sent,n=["townhouse","home_office","single_house"],e.isHighRise=!Object(o.includes)(n,r.json.project_type);case 5:case"end":return t.stop()}}),t)})))()},fetchUnitTypes:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.unitTypeForSelect(e.$route.params.projectId);case 2:r=t.sent,e.unitTypes=Object(o.map)(r,(function(e){return{label:e.name,value:e.id}}));case 4:case"end":return t.stop()}}),t)})))()},fetchUnit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,l.a.show(e.$route.params.projectId,e.$route.params.unitId);case 3:r=t.sent,e.formData=r,e.formData.json.unit_price=Object(d.c)(e.formData.json.unit_price),e.formData.json.area_for_maintenance_fee_calculation=Number(e.formData.json.area_for_maintenance_fee_calculation)||null,e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},handleSubmit:function(){var e=this;return new Promise((function(t){e.$Modal.confirm({title:e.$t("messages.confirm"),content:e.$t("messages.confirm_save"),okText:e.$t("button.yes"),cancelText:e.$t("button.no"),onOk:function(){e.submitForm()}})}))},submitForm:function(){var e=this;this.$refs.form.validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,e.formData.save(e.$route.params.projectId);case 3:(n=t.sent).data&&n.data.success?e.isNew?(e.$Message.success({content:e.$t("pages.unit")+e.$t("messages.successfully_created"),duration:3}),e.$router.push({name:"projects-projectId-units",params:{projectId:e.$route.params.projectId}})):(e.$Message.success({content:e.$t("pages.unit")+e.$t("messages.successfully_updated"),duration:3}),e.$router.push({name:"projects-projectId-units",params:{projectId:e.$route.params.projectId}})):n.data.error?(c=Object(o.snakeCase)(n.data.error),e.$Message.error({content:e.$t("messages.".concat(c)),duration:8})):e.$Message.error({content:e.$t("messages.fail"),duration:8});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},j=(r(655),r(9)),component=Object(j.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLoading?r("GLoading"):r("div",[r("GBreadCrumb",{attrs:{names:[e.formData.json.asset_number]}}),e._v(" "),r("Card",{attrs:{"dis-hover":"",bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n      "+e._s(e.isNew?e.$t("button.new"):e.$t("button.edit"))+e._s(e.$t("pages.unit"))+"\n    ")]),e._v(" "),r("Card",{attrs:{"dis-hover":"",bordered:!1}},[r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{xs:24,sm:13}},[r("Form",{ref:"form",attrs:{model:e.formData.json}},[e.isHighRise?r("FormItem",{staticClass:"font-weight-bold",attrs:{rules:[{required:!0,message:this.$t("form.unit.label.asset_number")+" "+this.$t("error.cannot_be_blank"),trigger:"blur,change"}],prop:"asset_number",label:e.$t("form.unit.label.asset_number")}},[r("Input",{attrs:{type:"text",placeholder:e.$t("form.unit.placeholder.asset_number")},on:{"on-keydown":function(t){return e.validateNumber(t)}},model:{value:e.formData.json.asset_number,callback:function(t){e.$set(e.formData.json,"asset_number",t)},expression:"formData.json.asset_number"}})],1):e._e(),e._v(" "),r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"address_number",label:e.$t("form.unit.label.address_number"),rules:[{required:!0,message:this.$t("form.unit.label.address_number")+" "+this.$t("error.cannot_be_blank"),trigger:"blur,change"}]}},[r("Input",{attrs:{type:"text",placeholder:e.$t("form.unit.placeholder.address_number")},on:{"on-keydown":function(t){return e.validateNumber(t)}},model:{value:e.formData.json.address_number,callback:function(t){e.$set(e.formData.json,"address_number",t)},expression:"formData.json.address_number"}})],1),e._v(" "),e.isHighRise?e._e():r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"phase",label:e.$t("form.unit.label.phase")}},[r("Input",{attrs:{type:"text",placeholder:e.$t("form.unit.placeholder.phase")},model:{value:e.formData.json.phase,callback:function(t){e.$set(e.formData.json,"phase",t)},expression:"formData.json.phase"}})],1),e._v(" "),e.isHighRise?e._e():r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"asset_model",label:e.$t("form.unit.label.asset_model")}},[r("Input",{attrs:{type:"text",placeholder:e.$t("form.unit.placeholder.asset_model")},model:{value:e.formData.json.asset_model,callback:function(t){e.$set(e.formData.json,"asset_model",t)},expression:"formData.json.asset_model"}})],1),e._v(" "),e.isHighRise?e._e():r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"area",label:e.$t("form.unit.label.area"),rules:[{required:!0,message:this.$t("form.unit.label.area")+" "+this.$t("error.cannot_be_blank"),trigger:"blur,change"}]}},[r("Input",{attrs:{type:"number",placeholder:e.$t("form.unit.placeholder.area")},model:{value:e.formData.json.area,callback:function(t){e.$set(e.formData.json,"area",t)},expression:"formData.json.area"}})],1),e._v(" "),r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"usable_area",label:e.$t("form.unit.label.usable_area"),rules:[{required:!0,message:this.$t("form.unit.label.usable_area")+" "+this.$t("error.cannot_be_blank"),trigger:"change,blur"}]}},[r("Input",{attrs:{type:"number",placeholder:e.$t("form.unit.placeholder.usable_area")},model:{value:e.formData.json.usable_area,callback:function(t){e.$set(e.formData.json,"usable_area",t)},expression:"formData.json.usable_area"}})],1),e._v(" "),e.isHighRise?r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"building",label:e.$t("form.unit.label.building"),rules:[{required:!0,message:e.$t("form.unit.label.building")+" "+this.$t("error.cannot_be_blank"),trigger:"change"}]}},[r("Select",{attrs:{placeholder:e.$t("form.unit.placeholder.building")},model:{value:e.formData.json.building,callback:function(t){e.$set(e.formData.json,"building",t)},expression:"formData.json.building"}},e._l(e.buildings,(function(t){return r("Option",{key:t,attrs:{value:t}},[e._v("\n                  "+e._s(t)+"\n                ")])})),1)],1):e._e(),e._v(" "),e.isHighRise?r("FormItem",{staticClass:"font-weight-bold",attrs:{label:e.$t("form.unit.label.floor"),prop:"floor",rules:[{required:!0,message:e.$t("form.unit.label.floor")+" "+this.$t("error.cannot_be_blank"),trigger:"change"}]}},[r("Select",{attrs:{placeholder:e.$t("form.unit.placeholder.floor")},model:{value:e.formData.json.floor,callback:function(t){e.$set(e.formData.json,"floor",t)},expression:"formData.json.floor"}},e._l(e.floors,(function(t){return r("Option",{key:t,attrs:{value:t}},[e._v("\n                  "+e._s(t)+"\n                ")])})),1)],1):e._e(),e._v(" "),e.isHighRise?r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"code_type",label:e.$t("form.unit.label.code_type")}},[r("Input",{attrs:{type:"text",placeholder:e.$t("form.unit.placeholder.code_type")},model:{value:e.formData.json.code_type,callback:function(t){e.$set(e.formData.json,"code_type",t)},expression:"formData.json.code_type"}})],1):e._e(),e._v(" "),r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"asset_type_id",label:e.isHighRise?e.$t("form.unit.label.room_type"):e.$t("form.unit.label.model_type"),rules:[{required:!0,message:e.isHighRise?e.$t("form.unit.label.room_type"):e.$t("form.unit.label.model_type")+" "+this.$t("error.cannot_be_blank"),trigger:"change"}]}},[r("Select",{attrs:{type:"text",placeholder:e.isHighRise?e.$t("form.unit.label.room_type"):e.$t("form.unit.label.model_type")},model:{value:e.formData.json.asset_type_id,callback:function(t){e.$set(e.formData.json,"asset_type_id",t)},expression:"formData.json.asset_type_id"}},e._l(e.unitTypes,(function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1),e._v(" "),r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"unit_price",label:e.$t("form.unit.label.unit_price")}},[r("Input",{attrs:{type:"text",placeholder:e.$t("form.unit.placeholder.unit_price")},model:{value:e.formData.json.unit_price,callback:function(t){e.$set(e.formData.json,"unit_price",t)},expression:"formData.json.unit_price"}})],1),e._v(" "),r("FormItem",{staticClass:"font-weight-bold",attrs:{prop:"area_for_maintenance_fee_calculation",label:e.$t("form.unit.label.area_for_maintenance_fee_calculation"),rules:[{required:!0,type:"number",message:this.$t("form.unit.label.area_for_maintenance_fee_calculation")+" "+this.$t("error.cannot_be_blank"),trigger:"change,blur"}]}},[r("Input",{attrs:{type:"number",number:"",placeholder:e.$t("form.unit.placeholder.area_for_maintenance_fee_calculation")},model:{value:e.formData.json.area_for_maintenance_fee_calculation,callback:function(t){e.$set(e.formData.json,"area_for_maintenance_fee_calculation",t)},expression:"formData.json.area_for_maintenance_fee_calculation"}})],1),e._v(" "),r("FormItem",{attrs:{align:"center"}},[r("Button",{staticClass:"default-button button-grey",attrs:{to:{name:"projects-projectId-units",params:{projectId:e.$route.params.projectId}}}},[e._v("\n                "+e._s(e.$t("button.cancel"))+"\n              ")]),e._v(" "),r("Button",{staticClass:"default-button button-green",on:{click:function(t){return e.handleSubmit()}}},[e._v("\n                "+e._s(e.$t("button.save"))+"\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"b047584a",null);t.default=component.exports}}]);