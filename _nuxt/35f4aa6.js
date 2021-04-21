(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{413:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));n(21),n(15),n(18),n(32),n(33);var r=n(4),o=n(7),c=n(30),l=n(31),m=(n(25),n(3)),d=n(1),_=n.n(d),f=n(6),h=n(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c.a)(this,t),this.json=j(j({},e),{},{images:e.images||[],start_datetime:e.start_datetime?e.start_datetime:null,end_datetime:e.end_datetime?e.end_datetime:null,created_at:e.created_at?e.created_at:null,updated_at:e.updated_at?e.updated_at:null,project_ids:e.project_ids?e.project_ids:[],announcement_type:e.announcement_type?e.announcement_type:"by_project",name_translations:e.name_translations||{en:"",th:""},description_translations:e.description_translations||{en:"",th:""},html_content_translations:e.html_content_translations||{en:"",th:""}})}var e,n,o,d,v,x;return Object(l.a)(t,[{key:"save",value:(x=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null,this.json.start_datetime&&this.json.end_datetime&&(this.json.end_datetime=Object(m.toString)(_()(this.json.end_datetime).unix()),this.json.start_datetime=Object(m.toString)(_()(this.json.start_datetime).unix())),o=Object(h.e)(this.json,"announcement"),!this.json.id){t.next=11;break}return o={announcement:o,project_ids:this.json.project_ids},o=Object(h.n)(o,null,["images","cover_image"]),t.next=8,Object(f.d)("patch",Object(f.e)(f.a,"announcements/".concat(this.json.id)),{data:o,headers:Object(f.c)(!0)});case 8:r=t.sent,t.next=16;break;case 11:return o={announcement:o,project_ids:this.json.project_ids},o=Object(h.n)(o,null,["images","cover_image"]),t.next=15,Object(f.d)("post",Object(f.e)(f.a,"announcements"),{data:o,headers:Object(f.c)(!0)});case 15:r=t.sent;case 16:return t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,this)}))),function(t,e){return x.apply(this,arguments)})},{key:"activate",value:(v=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("patch",Object(f.e)(f.a,"/announcements/".concat(this.json.id,"/activate")),{params:{project_id:e},headers:Object(f.c)(!0)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"inactivate",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("patch",Object(f.e)(f.a,"/announcements/".concat(this.json.id,"/inactivate")),{params:{project_id:e},headers:Object(f.c)(!0)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"renderName",value:function(){return"en"===this.json.announcement_language?this.truncateText(this.json.name_translations.en):this.truncateText(this.json.name_translations.th)}},{key:"truncateText",value:function(text){return Object(m.truncate)(text,{length:80,separator:/,? +/})}},{key:"checkStatusExpire",value:function(){if(this.json.end_datetime&&new Date>new Date(this.json.end_datetime))return!0}},{key:"asTableJson",value:function(t,e){return{announcement_language:this.json.announcement_language,id:this.json.id,no:(e-1)*t+this.json.no,name_translations:this.renderName(),start_datetime:this.json.start_datetime,end_datetime:Object(h.h)(this.json.end_datetime),created_at:Object(h.h)(this.json.created_at),status:this.json.status,status_expired:this.checkStatusExpire()||!1}}}],[{key:"index",value:(o=Object(r.a)(regeneratorRuntime.mark((function e(n,r,o,c){var l,d,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,Object(f.d)("get",Object(f.e)(f.a,"/announcements"),{params:{project_id:n,page:r,per_page:o,search:c},headers:Object(f.c)(!0)});case 3:l=e.sent,e.next=9;break;case 6:return e.next=8,Object(f.d)("get",Object(f.e)(f.a,"/announcements/global_announcements"),{params:{page:r,per_page:o,search:c},headers:Object(f.c)(!0)});case 8:l=e.sent;case 9:if(200!==l.status){e.next=13;break}return d=Object(m.orderBy)(l.data.announcements,["status","created_at"],["asc","desc"]),_=Object(m.map)(d,(function(e,n){return e.no=n+1,new t(e)})),e.abrupt("return",{announcements:_,total_count:l.data.total_count});case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e)}))),function(t,e,n,r){return o.apply(this,arguments)})},{key:"show",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,Object(f.d)("get",Object(f.e)(f.a,"/announcements/".concat(r)),{params:{project_id:n},headers:Object(f.c)(!0)});case 3:o=e.sent,e.next=9;break;case 6:return e.next=8,Object(f.d)("get",Object(f.e)(f.a,"/announcements/".concat(r)),{headers:Object(f.c)(!0)});case 8:o=e.sent;case 9:if(200!==o.status){e.next=11;break}return e.abrupt("return",new t(o.data.announcement));case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)}))),function(t,e){return n.apply(this,arguments)})},{key:"destroy",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)("delete",Object(f.e)(f.a,"/announcements/".concat(n)),{params:{project_id:e},headers:Object(f.c)(!0)});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t,n){return e.apply(this,arguments)})}]),t}()},495:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0b004cb0",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";n(495)},594:function(t,e,n){var r=n(22)(!1);r.push([t.i,"[data-v-18e594b5] img{width:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=r},719:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(25),n(11),n(3)),c=n(413),l={components:{},layout:"project",data:function(){return{languages:[{label:"TH",value:"th"},{label:"EN",value:"en"}],announcement:null,locale:"th",isLoading:!0}},computed:{language:function(){return this.$store.state.language.value}},mounted:function(){this.fetchAnnouncement()},methods:{fullFormatDatetime:n(5).i,filterLanguage:function(data){return Object(o.find)([{th:"ทั้งหมด",en:"All",value:"all"},{th:"ภาษาไทย",en:"Thai Only",value:"th"},{th:"ภาษาอังกฤษ",en:"English Only",value:"en"}],["value",data])[this.language]||"-"},statusSetting:function(t){return"active"===t},handleBeforeChange:function(){var t=this;return new Promise((function(e){t.$Modal.confirm({title:t.$t("pages.confirm"),content:t.$t("messages.confirm_change_status"),okText:t.$t("button.yes"),cancelText:t.$t("button.no"),onOk:function(){e()}})}))},changeStatus:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new c.a(data),"active"!==data.status){e.next=7;break}return e.next=4,r.inactivate(t.$route.params.projectId);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,r.activate(t.$route.params.projectId);case 9:n=e.sent;case 10:n&&200===n.status?(o=n.data.announcement.status,t.$Message.success({content:t.$t("messages.successfully_"+o),duration:3})):n.data&&n.data.error?t.$Message.error({content:n.data.error,duration:8}):t.$Message.error({content:t.$t("messages.fail"),duration:8}),t.fetchAnnouncement();case 12:case"end":return e.stop()}}),e)})))()},fetchAnnouncement:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,c.a.show("",t.$route.params.announcementId);case 3:t.announcement=e.sent,"th"===t.announcement.json.announcement_language||"all"===t.announcement.json.announcement_language?t.locale="th":t.locale="en",t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},m=(n(593),n(9)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("GLoading"):n("div",[n("GBreadCrumb",{staticStyle:{"margin-top":"16px"},attrs:{names:[t.announcement.json.name_translations]}}),t._v(" "),n("Card",{attrs:{bordered:!1,"dis-hover":"",padding:20}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",[t._v(t._s(t.announcement.json.name_translations[t.locale]||"-"))]),t._v(" "),n("div",{staticClass:"font-size-12"},[t._v("\n        Create at:\n        "+t._s(t.fullFormatDatetime(t.announcement.json.created_at)||"-")+" Create\n        by:\n        "+t._s(t.announcement.json.created_by.first_name||"-")+"\n      ")]),t._v(" "),n("div",{staticClass:"font-size-12 mt-5"},[t._v("\n        Update at:\n        "+t._s(t.fullFormatDatetime(t.announcement.json.updated_at)||"-")+" Update\n        by:\n        "+t._s(t.announcement.json.updated_by.first_name||"-")+"\n      ")])]),t._v(" "),n("Tabs",{attrs:{type:"card"},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}},[n("TabPane",{attrs:{label:t.$t("info.announcement.label.contents_th"),name:"th"}},[n("Row",{attrs:{type:"flex",justify:"center"}},[n("Col",{attrs:{xs:24,sm:16}},[n("Card",{attrs:{"dis-hover":""}},[n("Icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"extra",type:"ios-create-outline",size:"20"},on:{click:function(e){return t.$router.push({name:"announcements-announcementId-edit",params:{announcementId:t.$route.params.announcementId}})}},slot:"extra"}),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.title"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                  "+t._s(t.announcement.json.name_translations[t.locale]||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.description"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                  "+t._s(t.announcement.json.description_translations[t.locale]||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.start_datetime"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end"},[t._v("\n                  "+t._s(t.fullFormatDatetime(t.announcement.json.start_datetime)||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.end_datetime"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end"},[t._v("\n                  "+t._s(t.fullFormatDatetime(t.announcement.json.end_datetime)||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.announcement_language"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",attrs:{sm:10,md:16}},[t._v("\n                  "+t._s(t.filterLanguage(t.announcement.json.announcement_language)||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.status"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",attrs:{sm:10,md:16}},[n("i-switch",{attrs:{size:"small",value:t.statusSetting(t.announcement.json.status),"before-change":t.handleBeforeChange,"true-color":"#57BA5B","false-color":"#F3F3F3"},on:{"on-change":function(e){return t.changeStatus(t.announcement.json)}}})],1)],1)],1),t._v(" "),n("Card",{staticClass:"mt-20",attrs:{"dis-hover":"",padding:20}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",[t._v("\n                  "+t._s(t.announcement.json.name_translations[t.locale]||"-")+"\n                ")]),t._v(" "),n("div",[t._v("\n                  Date:\n                  "+t._s(t.fullFormatDatetime(t.announcement.json.start_datetime)||"-")+"\n                ")])]),t._v(" "),n("div",{staticClass:"content-html"},[n("p",{domProps:{innerHTML:t._s(t.announcement.json.html_content_translations[t.locale])}})])])],1)],1)],1),t._v(" "),n("TabPane",{attrs:{label:t.$t("info.announcement.label.contents_en"),name:"en"}},[n("Row",{attrs:{type:"flex",gutter:16,justify:"center"}},[n("Col",{attrs:{xs:24,sm:16}},[n("Card",{attrs:{"dis-hover":""}},[n("Icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"extra",type:"ios-create-outline",size:"20"},on:{click:function(e){return t.$router.push({name:"announcements-announcementId-edit",params:{announcementId:t.$route.params.announcementId}})}},slot:"extra"}),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.title"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                  "+t._s(t.announcement.json.name_translations[t.locale]||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.description"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                  "+t._s(t.announcement.json.description_translations[t.locale]||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.start_datetime"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end"},[t._v("\n                  "+t._s(t.fullFormatDatetime(t.announcement.json.start_datetime)||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.end_datetime"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end"},[t._v("\n                  "+t._s(t.fullFormatDatetime(t.announcement.json.end_datetime)||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.announcement_language"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",attrs:{sm:10,md:16}},[t._v("\n                  "+t._s(t.filterLanguage(t.announcement.json.announcement_language)||"-")+"\n                ")])],1),t._v(" "),n("Row",{attrs:{type:"flex",gutter:16}},[n("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                  "+t._s(t.$t("info.announcement.label.status"))+":\n                ")]),t._v(" "),n("Col",{staticClass:"align-self-flex-end",attrs:{sm:10,md:16}},[n("i-switch",{attrs:{size:"small",value:t.statusSetting(t.announcement.json.status),"before-change":t.handleBeforeChange,"true-color":"#57BA5B","false-color":"#F3F3F3"},on:{"on-change":function(e){return t.changeStatus(t.announcement.json)}}})],1)],1)],1),t._v(" "),n("Card",{staticClass:"mt-20",attrs:{"dis-hover":"",padding:20}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",[t._v("\n                  "+t._s(t.announcement.json.name_translations[t.locale]||"-")+"\n                ")]),t._v(" "),n("div",[t._v("\n                  Date:\n                  "+t._s(t.fullFormatDatetime(t.announcement.json.start_datetime)||"-")+"\n                ")])]),t._v(" "),n("p",{staticClass:"pre-line",domProps:{innerHTML:t._s(t.announcement.json.html_content_translations[t.locale])}})])],1)],1)],1)],1)],1)],1)}),[],!1,null,"18e594b5",null);e.default=component.exports}}]);