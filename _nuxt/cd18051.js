(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{425:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));n(21),n(15),n(18),n(32),n(33);var r=n(4),c=n(7),o=n(30),l=n(31),d=(n(25),n(3)),f=n(6),h=n(5);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,t),this.json=m(m({},e),{},{name_translations:e.name_translations||{en:"",th:""}})}var e,n,c,j,O;return Object(l.a)(t,[{key:"save",value:(O=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,r=Object(h.e)(this.json,"contact"),!this.json.id){t.next=8;break}return t.next=5,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(e,"/contacts/").concat(this.json.id)),{headers:Object(f.c)(!0),data:r});case 5:n=t.sent,t.next=11;break;case 8:return t.next=10,Object(f.d)("post",Object(f.e)(f.a,"projects/".concat(e,"/contacts")),{headers:Object(f.c)(!0),data:r});case 10:n=t.sent;case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return O.apply(this,arguments)})},{key:"activate",value:(j=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(e,"/contacts/").concat(this.json.id,"/activate")),{headers:Object(f.c)(!0)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return j.apply(this,arguments)})},{key:"inactivate",value:(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("patch",Object(f.e)(f.a,"projects/".concat(e,"/contacts/").concat(this.json.id,"/inactivate")),{headers:Object(f.c)(!0)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"asJson",value:function(){return{id:this.json.id,no:this.json.no,name_en:this.json.name_translations?this.json.name_translations.en:"-",name_th:this.json.name_translations?this.json.name_translations.th:"-",email:this.json.email||"-",telephone:this.json.telephone||"-",status:this.json.status}}}],[{key:"index",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(n,r,c,o){var l,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(n,"/contacts")),{params:{page:r,per_page:c,search:o},headers:Object(f.c)(!0)});case 2:if(200!==(l=e.sent).status){e.next=6;break}return h=Object(d.map)(l.data.contacts,(function(e){return new t(e)})),e.abrupt("return",{contacts:h,total_count:l.data.total_count});case 6:return e.abrupt("return",[]);case 7:case"end":return e.stop()}}),e)}))),function(t,e,r,c){return n.apply(this,arguments)})},{key:"show",value:(e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)("get",Object(f.e)(f.a,"projects/".concat(n,"/contacts/").concat(r)),{headers:Object(f.c)(!0)});case 2:if(200!==(c=e.sent).status){e.next=5;break}return e.abrupt("return",new t(c.data.contact));case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)}))),function(t,n){return e.apply(this,arguments)})}]),t}()},549:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(11),n(25),n(425)),o={props:{items:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!0}},data:function(){var t=this;return{columns:[{key:"no",width:80,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.no")))},align:"center"},{key:"name_th",width:120,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.name_th")))},align:"center"},{key:"name_en",width:120,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.name_en")))},align:"center"},{key:"email",width:120,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.email")))},align:"center"},{key:"telephone",width:120,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.telephone")))},align:"center"},{slot:"status",width:80,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.status")))},align:"center"},{slot:"action",width:80,renderHeader:function(e,n){return e("span","".concat(t.$t("info.contact.label.action")))},align:"center"}]}},methods:{changeStatus:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new c.a(data),"active"!==data.status){e.next=7;break}return e.next=4,r.inactivate(t.$route.params.projectId);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,r.activate(t.$route.params.projectId);case 9:n=e.sent;case 10:n&&n.data.success?(o=n.data.contact.status,t.$Message.success({content:t.$t("messages.successfully_"+o),duration:3})):n.data&&n.data.error?t.$Message.error({content:n.data.error,duration:8}):t.$Message.error({content:t.$t("messages.fail"),duration:8}),t.$emit("reloadData");case 12:case"end":return e.stop()}}),e)})))()},handleBeforeChange:function(){var t=this;return new Promise((function(e){t.$Modal.confirm({title:t.$t("pages.confirm"),content:t.$t("messages.confirm_change_status"),okText:t.$t("button.ok"),cancelText:t.$t("button.cancel"),onOk:function(){e()}})}))},statusSetting:function(t){return"active"===t}}},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{attrs:{columns:t.columns,data:t.items,loading:t.loading,"no-data-text":t.$t("pages.no_data")},scopedSlots:t._u([{key:"status",fn:function(e){var r=e.row;return[n("i-switch",{attrs:{size:"small",value:t.statusSetting(r.status),"before-change":t.handleBeforeChange,"true-color":"#57BA5B","false-color":"#F3F3F3"},on:{"on-change":function(e){return t.changeStatus(r)}}})]}},{key:"action",fn:function(e){var r=e.row;return[n("Tooltip",{attrs:{content:t.$t("button.edit"),placement:"top"}},[n("Icon",{staticStyle:{cursor:"pointer"},attrs:{type:"ios-create-outline",size:"20"},on:{click:function(e){return t.$router.push({name:"projects-projectId-contacts-contactId-edit",params:{projectId:t.$route.params.projectId,contactId:r.id}})}}})],1)]}}])})],1)}),[],!1,null,"4e3a53b4",null);e.default=component.exports}}]);