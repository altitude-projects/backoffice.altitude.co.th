(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{411:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r(21),r(15),r(18),r(32),r(33);var n=r(4),c=r(7),o=r(30),m=r(31),l=(r(16),r(25),r(3)),d=r(1),h=r.n(d),j=r(6),_=r(5);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),this.json=O(O({},t),{},{start_datetime:t.start_datetime?t.start_datetime:null,event_type:t.event_type||"birthday",message_type:t.message_type||"by_project",project_ids:t.project_ids?t.project_ids:[],message_translations:t.message_translations||{en:"",th:""},title_translations:t.title_translations||{en:"",th:""}})}var t,r,c,d,f,v;return Object(m.a)(e,[{key:"save",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,"resident"===this.json.message_type&&(this.json.project_ids=[]),this.json.start_datetime&&(this.json.start_datetime=Object(l.toString)(h()(this.json.start_datetime).unix())),n=Object(_.e)(this.json,"message"),!this.json.id){e.next=11;break}return n={message_template:n,project_ids:this.json.project_ids},e.next=8,Object(j.d)("patch",Object(j.e)(j.a,"message_templates/".concat(this.json.id)),{headers:Object(j.c)(!0),data:n});case 8:r=e.sent,e.next=15;break;case 11:return n={message_template:n,project_ids:this.json.project_ids},e.next=14,Object(j.d)("post",Object(j.e)(j.a,"message_templates"),{headers:Object(j.c)(!0),data:n});case 14:r=e.sent;case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"activate",value:(f=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)("patch",Object(j.e)(j.a,"/message_templates/".concat(this.json.id,"/activate")),{params:{project_id:t},headers:Object(j.c)(!0)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"inactivate",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)("patch",Object(j.e)(j.a,"/message_templates/".concat(this.json.id,"/inactivate")),{params:{project_id:t},headers:Object(j.c)(!0)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"asTableJson",value:function(e,t){return{id:this.json.id,name:this.json.name,no:(t-1)*e+this.json.no,event_type:this.json.event_type,start_datetime:Object(_.h)(this.json.start_datetime),start_datetime_value:this.json.start_datetime,status:this.json.status}}},{key:"asMessageHistoryTableJson",value:function(e,t){return{delivered_date_time:Object(_.h)(this.json.created_at),email:this.json.user.email||"-",event_type:this.json.message_template.event_type||"-",first_name_translations:this.json.user.first_name_translations||"-",id:this.json.id,is_read:this.json.is_read,last_name_translations:this.json.user.last_name_translations||"-",message_translations:this.json.message_translations||"-",mobile_number:this.json.user.mobile_primary||"-",no:(t-1)*e+this.json.no,passport_number:this.json.user.passport_number||"-",thai_id_number:this.json.user.thai_id_number||"-",title_translations:this.json.message_template.title_translations||"-",user_language:this.json.language||"en"}}}],[{key:"index",value:(c=Object(n.a)(regeneratorRuntime.mark((function t(r,n,c,o){var m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return t.next=3,Object(j.d)("get",Object(j.e)(j.a,"/message_templates"),{params:{project_id:r,page:n,per_page:c,search:o},headers:Object(j.c)(!0)});case 3:m=t.sent,t.next=9;break;case 6:return t.next=8,Object(j.d)("get",Object(j.e)(j.a,"/message_templates/global_message_templates"),{params:{page:n,per_page:c,search:o},headers:Object(j.c)(!0)});case 8:m=t.sent;case 9:if(200!==m.status){t.next=12;break}return d=Object(l.map)(m.data.message_templates,(function(t,r){return t.no=r+1,new e(t)})),t.abrupt("return",{messages:d,total_count:m.data.total_count});case 12:return t.abrupt("return",[]);case 13:case"end":return t.stop()}}),t)}))),function(e,t,r,n){return c.apply(this,arguments)})},{key:"show",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return t.next=3,Object(j.d)("get",Object(j.e)(j.a,"/message_templates/".concat(n)),{params:{project_id:r},headers:Object(j.c)(!0)});case 3:c=t.sent,t.next=9;break;case 6:return t.next=8,Object(j.d)("get",Object(j.e)(j.a,"/message_templates/".concat(n)),{headers:Object(j.c)(!0)});case 8:c=t.sent;case 9:if(200!==c.status){t.next=11;break}return t.abrupt("return",new e(c.data.message_template));case 11:return t.abrupt("return",c);case 12:case"end":return t.stop()}}),t)}))),function(e,t){return r.apply(this,arguments)})},{key:"messageHistoryIndex",value:(t=Object(n.a)(regeneratorRuntime.mark((function t(r,n,c,o,m){var d,_,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d="",m&&(d=h()(m).unix()),!r){t.next=6;break}return t.next=5,Object(j.d)("get",Object(j.e)(j.a,"/projects/".concat(r,"/messages")),{params:{page:n,per_page:c,search:o,query_date:d},headers:Object(j.c)(!0)});case 5:_=t.sent;case 6:if(200!==_.status){t.next=9;break}return f=Object(l.map)(_.data.messages,(function(t,r){return t.no=r+1,new e(t)})),t.abrupt("return",{messages:f,total_count:_.data.total_count});case 9:return t.abrupt("return",[]);case 10:case"end":return t.stop()}}),t)}))),function(e,r,n,c,o){return t.apply(this,arguments)})}]),e}()},739:function(e,t,r){"use strict";r.r(t);var n=r(4),c=(r(25),r(108),r(3)),o=r(1),m=r.n(o),l=r(411),d={data:function(){return{messages:[],loading:!1,isLoading:!0,currentPage:1,pageSize:10,search:"",totalPages:null}},mounted:function(){this.fetchNotificationMessages()},methods:{fetchItems:function(e,t){this.currentPage=e,this.pageSize=t,this.fetchNotificationMessages(!0)},fetchNotificationMessages:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e?t.isLoading=!0:t.loading=!0,t.messages=[],r.next=4,l.a.index(t.$route.params.projectId,t.currentPage,t.pageSize,t.search);case 4:n=r.sent,t.messages=Object(c.map)(n.messages,(function(e){return e.asTableJson(t.pageSize,t.currentPage)})),t.totalPages=n.total_count,t.isLoading=!1,t.loading=!1;case 9:case"end":return r.stop()}}),r)})))()},searchItem:function(e){this.search=e,this.currentPage=1,this.fetchNotificationMessages()},sortDatatable:function(e,t){var r=this,n=Object(c.orderBy)(this.messages,[function(data){return"start_datetime_value"===e?null===data[e]?0:m()(data[e]).format("YYYYMMDD HH:mm:ss"):data[e]||"".toLowerCase()}],[t]);this.messages=Object(c.map)(n,(function(data,e){return data.no=(r.currentPage-1)*r.pageSize+(e+1),data}))}}},h=r(9),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isLoading?r("GLoading"):r("Card",{attrs:{"dis-hover":"",bordered:!1}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("h3",[e._v("\n        "+e._s(e.$t("pages.messages_template"))+"\n      ")])]),e._v(" "),r("GIndexPage",{attrs:{items:e.messages,"show-sizer":"","search-by-api":"","current-page":e.currentPage,"page-size":e.pageSize,loading:e.loading,"new-button-name":e.$t("button.template"),component:"GNotificationMessageTable","new-url":{name:"projects-projectId-notification_messages-new",params:{projectId:e.$route.params.projectId}},"total-pages":e.totalPages},on:{handleToSearchItem:e.searchItem,reloadData:e.fetchNotificationMessages,pageAndItemPerPage:e.fetchItems,sortBy:e.sortDatatable}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);