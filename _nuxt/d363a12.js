(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{486:function(t,e,n){var content=n(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("a9e86100",content,!0,{sourceMap:!1})},572:function(t,e,n){"use strict";n(486)},573:function(t,e,n){var o=n(22)(!1);o.push([t.i,".background-image[data-v-13a9c7d8]{background-image:url(/assets/logo.png);height:100%;min-height:100vh;width:100%;background-size:cover;background-position:100%}.col-card[data-v-13a9c7d8]{margin:auto;min-height:100vh;display:flex;justify-content:center;align-items:center}.select-project[data-v-13a9c7d8]{width:300px;margin:auto}.btn-sign-out[data-v-13a9c7d8]{background:#ba6b57 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(0,0,0,.05098);border:1px solid hsla(0,0%,84.7%,.7098);border-radius:5px;opacity:1;color:#fff}.btn-project[data-v-13a9c7d8]{background-color:#fff;border:1px solid #d5d5d5;color:#70706e;margin-bottom:10px}",""]),t.exports=o},698:function(t,e,n){"use strict";n.r(e);var o=n(4),r=(n(11),n(25),n(3)),c=n(82),d=n(5),l={layout:"session",components:{},data:function(){return{loading:!1,isLoading:!0,projects:[]}},mounted:function(){this.fetchProject();var t=Object(d.j)();Object(d.a)(t)},methods:{handleClickMenu:function(menu){this.$store.commit("SET_MENU",menu)},fetchProject:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,c.a.index();case 3:1===(n=e.sent).length?t.$router.push({name:"projects-projectId-announcements",params:{projectId:n[0].json.id}}):(t.projects=Object(r.map)(n,(function(t){return t})),t.isLoading=!1);case 5:case"end":return e.stop()}}),e)})))()},signOut:function(){var t=this;return new Promise((function(e){t.$Modal.confirm({title:t.$t("pages.confirm"),content:t.$t("messages.confirm_sign_out"),okText:t.$t("button.yes"),cancelText:t.$t("button.no"),onOk:function(){t.$auth.logout()}})}))}}},f=(n(572),n(9)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("GLoading"):n("div",[n("Row",{attrs:{type:"flex"}},[n("Col",{attrs:{xs:0,sm:0,md:12,xl:12,lg:12}},[n("div",{staticClass:"background-image"})]),t._v(" "),n("Col",{staticClass:"pa-25 col-card",attrs:{xs:24,sm:{span:18,offset:3},md:{span:10,offset:1},xl:{span:8,offset:2},lg:{span:8,offset:2}}},[n("Card",{staticClass:"select-project",attrs:{"dis-hover":"",bordered:!1}},[n("div",{staticClass:"text-center"},[n("svg",{attrs:{width:"150",height:"150",viewBox:"40 0 40 40"}},[n("image",{attrs:{href:"/assets/sprite_layout.svg",height:"200",width:"200"}})])]),t._v(" "),n("h3",{staticClass:"pb-10 text-center"},[t._v("\n          "+t._s(t.$t("messages.welcome"))+", "+t._s(t.$auth.user.first_name)+"\n        ")]),t._v(" "),n("div",{staticClass:"text-center"},["admin"===t.$auth.user.role?n("Button",{staticClass:"btn-project",attrs:{ghost:"",long:"",size:"large",to:{name:"admin-projects"}},on:{click:function(e){return t.handleClickMenu("projects")}}},[t._v("\n            "+t._s(t.$t("topbar.admin_menu"))+"\n          ")]):t._e(),t._v(" "),t.projects.length>0?n("Button",{staticClass:"btn-project",attrs:{ghost:"",long:"",size:"large",to:{name:"projects"}}},[t._v("\n            "+t._s(t.$t("messages.select_project"))+"\n          ")]):t._e()],1),t._v(" "),n("div",{staticClass:"text-center pt-15"},[n("Button",{staticClass:"btn-sign-out",attrs:{loading:t.loading,long:"",size:"large"},on:{click:function(e){return t.signOut()}}},[(t.loading,n("span",[t._v(t._s(t.$t("button.logout")))]))])],1)])],1)],1)],1)}),[],!1,null,"13a9c7d8",null);e.default=component.exports}}]);