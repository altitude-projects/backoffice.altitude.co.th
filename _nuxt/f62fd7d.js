(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{421:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n(21),n(15),n(18),n(32),n(33);var r=n(4),c=n(7),o=n(30),d=n(31),l=(n(25),n(3)),f=n(6),m=n(5);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),this.json=h(h({},t),{},{admin:t.admin||{profile_image:"",first_name:"",last_name:"",telephone:"",email:""}})}var t,n,c,j,v,O,_;return Object(d.a)(e,[{key:"activate",value:(_=Object(r.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/project_admins/").concat(this.json.id,"/activate")),{headers:Object(f.c)(!0)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{key:"inactivate",value:(O=Object(r.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/project_admins/").concat(this.json.id,"/inactivate")),{headers:Object(f.c)(!0)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"save",value:(v=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,r=Object(m.e)(this.json.admin,"admin"),c=Object(m.e)(this.json,"projectAdmin"),o={admin:r,project_admin:c},o=Object(m.n)(o,null,["profile_image"]),!this.json.id){e.next=11;break}return e.next=8,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(t,"/project_admins/").concat(this.json.id)),{headers:Object(f.c)(!0),data:o});case 8:n=e.sent,e.next=14;break;case 11:return e.next=13,Object(f.d)("post",Object(f.e)(f.a,"projects/".concat(t,"/project_admins")),{headers:Object(f.c)(!0),data:o});case 13:n=e.sent;case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"asTableJson",value:function(e,t){return{id:this.json.id,fullName:this.json.admin.full_name,frist_name:this.json.admin.frist_name,last_name:this.json.admin.last_name,no:(t-1)*e+this.json.no,email:this.json.admin.email,telephone:this.json.admin.telephone||"-",role:this.json.role||"-",status:this.json.status}}}],[{key:"index",value:(j=Object(r.a)(regeneratorRuntime.mark((function t(n,r,c,o){var d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(n,"/project_admins")),{params:{page:r,per_page:c,search:o},headers:Object(f.c)(!0)});case 2:if(200!==(d=t.sent).status){t.next=5;break}return t.abrupt("return",Object(l.map)(d.data.project_admins,(function(u,t){return u.no=t+1,new e(u)})));case 5:return t.abrupt("return",[]);case 6:case"end":return t.stop()}}),t)}))),function(e,t,n,r){return j.apply(this,arguments)})},{key:"show",value:(c=Object(r.a)(regeneratorRuntime.mark((function t(n,r){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(n,"/project_admins/").concat(r)),{headers:Object(f.c)(!0)});case 2:if(200!==(c=t.sent).status){t.next=5;break}return t.abrupt("return",new e(c.data.project_admin));case 5:case"end":return t.stop()}}),t)}))),function(e,t){return c.apply(this,arguments)})},{key:"rolesForSelect",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(t,"/project_admins/roles_for_select")),{headers:Object(f.c)(!0)});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data.roles);case 5:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"destroy",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("delete",Object(f.e)(f.a,"projects/".concat(t,"/project_admins/").concat(n)),{headers:Object(f.c)(!0)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}()},428:function(e,t,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("546c1290",content,!0,{sourceMap:!1})},450:function(e,t,n){"use strict";n(428)},451:function(e,t,n){var r=n(22)(!1);r.push([e.i,"img[data-v-052763b2]{width:18px;height:18px}",""]),e.exports=r},543:function(e,t,n){"use strict";n.r(t);var r=n(4),c=(n(11),n(25),n(3)),o=n(421),d={props:{items:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!0}},data:function(){var e=this;return{editImage:"",columns:[{key:"no",width:80,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.no")))},align:"center"},{slot:"name",width:160,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.name")))}},{key:"email",width:200,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.email")))}},{key:"telephone",align:"center",width:200,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.telephone")))}},{slot:"role",align:"center",width:200,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.role")))}},{slot:"status",align:"center",width:160,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.status")))}},{slot:"action",align:"center",width:160,renderHeader:function(t,n){return t("span","".concat(e.$t("info.admin_user.label.action")))}}]}},mounted:function(){},methods:{convertName:function(data){return Object(c.isEmpty)(data.fullName.trim())?data.first_name||data.last_name?"".concat(data.first_name," ").concat(data.last_name):"-":data.fullName},changeStatus:function(data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new o.a(data),"active"!==data.status){t.next=7;break}return t.next=4,n.inactivate(e.$route.params.projectId);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,n.activate(e.$route.params.projectId);case 9:r=t.sent;case 10:200===r.status&&e.$Message.success({content:e.$t("messages.successfully_"+r.data.project_admin.status),duration:3}),e.$emit("reloadData",!0);case 12:case"end":return t.stop()}}),t)})))()},handleBeforeChange:function(){var e=this;return new Promise((function(t){e.$Modal.confirm({title:e.$t("pages.confirm"),content:e.$t("messages.confirm_change_status"),okText:e.$t("button.ok"),cancelText:e.$t("button.cancel"),onOk:function(){t()}})}))},statusSetting:function(e){return"active"===e}}},l=(n(450),n(9)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{columns:e.columns,data:e.items,loading:e.loading,"no-data-text":e.$t("pages.no_data")},scopedSlots:e._u([{key:"role",fn:function(t){var n=t.row;return[e._v("\n      "+e._s(e.$t("info.admin_user.label."+n.role))+"\n    ")]}},{key:"name",fn:function(t){var n=t.row;return[e._v("\n      "+e._s(e.convertName(n))+"\n    ")]}},{key:"status",fn:function(t){var r=t.row;return[n("i-switch",{attrs:{size:"small",value:e.statusSetting(r.status),"before-change":e.handleBeforeChange,"true-color":"#57BA5B","false-color":"#F3F3F3"},on:{"on-change":function(t){return e.changeStatus(r)}}})]}},{key:"action",fn:function(t){var r=t.row;return[n("nuxt-link",{attrs:{to:{name:"projects-projectId-admin_users-adminUserId-edit",params:{projectId:e.$route.params.projectId,adminUserId:r.id}}}},[n("Icon",{staticStyle:{cursor:"pointer"},attrs:{type:"ios-create-outline",size:"24",color:"#5d5d5d"}})],1)]}}])})],1)}),[],!1,null,"052763b2",null);t.default=component.exports}}]);