(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{425:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));n(21),n(15),n(18),n(32),n(33);var r=n(4),c=n(7),o=n(30),h=n(31),j=(n(25),n(3)),d=n(6),f=n(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,t),this.json=m(m({},e),{},{name_translations:e.name_translations||{en:"",th:""}})}var e,n,c,l,O;return Object(h.a)(t,[{key:"save",value:(O=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,r=Object(f.e)(this.json,"contact"),!this.json.id){t.next=8;break}return t.next=5,Object(d.d)("patch",Object(d.e)(d.a,"projects/".concat(e,"/contacts/").concat(this.json.id)),{headers:Object(d.c)(!0),data:r});case 5:n=t.sent,t.next=11;break;case 8:return t.next=10,Object(d.d)("post",Object(d.e)(d.a,"projects/".concat(e,"/contacts")),{headers:Object(d.c)(!0),data:r});case 10:n=t.sent;case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return O.apply(this,arguments)})},{key:"activate",value:(l=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.d)("patch",Object(d.e)(d.a,"projects/".concat(e,"/contacts/").concat(this.json.id,"/activate")),{headers:Object(d.c)(!0)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"inactivate",value:(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.d)("patch",Object(d.e)(d.a,"projects/".concat(e,"/contacts/").concat(this.json.id,"/inactivate")),{headers:Object(d.c)(!0)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"asJson",value:function(){return{id:this.json.id,no:this.json.no,name_en:this.json.name_translations?this.json.name_translations.en:"-",name_th:this.json.name_translations?this.json.name_translations.th:"-",email:this.json.email||"-",telephone:this.json.telephone||"-",status:this.json.status}}}],[{key:"index",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(n,r,c,o){var h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)("get",Object(d.e)(d.a,"projects/".concat(n,"/contacts")),{params:{page:r,per_page:c,search:o},headers:Object(d.c)(!0)});case 2:if(200!==(h=e.sent).status){e.next=6;break}return f=Object(j.map)(h.data.contacts,(function(e){return new t(e)})),e.abrupt("return",{contacts:f,total_count:h.data.total_count});case 6:return e.abrupt("return",[]);case 7:case"end":return e.stop()}}),e)}))),function(t,e,r,c){return n.apply(this,arguments)})},{key:"show",value:(e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)("get",Object(d.e)(d.a,"projects/".concat(n,"/contacts/").concat(r)),{headers:Object(d.c)(!0)});case 2:if(200!==(c=e.sent).status){e.next=5;break}return e.abrupt("return",new t(c.data.contact));case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)}))),function(t,n){return e.apply(this,arguments)})}]),t}()},730:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(25),n(108),n(3)),o=n(425),h={data:function(){return{contacts:[],loading:!1,isLoading:!1,currentPage:1,pageSize:10,search:"",totalPages:0}},mounted:function(){this.fetchContacts()},methods:{fetchContacts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.isLoading=!0,e.next=4,o.a.index(t.$route.params.projectId,t.currentPage,t.pageSize,t.search);case 4:n=e.sent,t.contacts=Object(c.map)(n.contacts,(function(e,n){return e.json.no=(t.currentPage-1)*t.pageSize+n+1,e.asJson()})),t.totalPages=n.total_count,t.isLoading=!1,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},searchItem:function(t){this.search=t,this.currentPage=1,this.fetchContacts()},fetchItems:function(t,e){this.currentPage=t,this.pageSize=e,this.fetchContacts()}}},j=n(9),component=Object(j.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("GLoading"):n("Card",{attrs:{"dis-hover":"",bordered:!1}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("h3",[t._v("\n        "+t._s(t.$t("pages.contacts"))+"\n      ")])]),t._v(" "),n("GIndexPage",{attrs:{items:t.contacts,"show-sizer":"","current-page":t.currentPage,"page-size":t.pageSize,loading:t.loading,"new-button-name":t.$t("pages.contacts"),component:"GContactTable","new-url":{name:"projects-projectId-contacts-new",params:{projectId:this.$route.params.projectId}},"total-pages":t.totalPages},on:{handleToSearchItem:t.searchItem,reloadData:t.fetchContacts,pageAndItemPerPage:t.fetchItems}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);