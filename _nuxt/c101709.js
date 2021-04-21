(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{499:function(t,e,o){var content=o(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("26ebdaa2",content,!0,{sourceMap:!1})},601:function(t,e,o){"use strict";o(499)},602:function(t,e,o){var r=o(22)(!1);r.push([t.i,".header-column[data-v-87ceb8a4]{font-weight:700}.map-url[data-v-87ceb8a4]{word-wrap:break-word;font-weight:0}.customImage[data-v-87ceb8a4]{-o-object-fit:cover;object-fit:cover;border-radius:5px;height:150px;width:150px;margin-bottom:30px}[data-v-87ceb8a4] .cover-image-modal .ivu-modal-close{right:0;top:0}",""]),t.exports=r},742:function(t,e,o){"use strict";o.r(e);var r=o(4),l=(o(25),o(82)),n={data:function(){return{isLoading:!0,project:{},images:[],coverImageVisible:!1,defaultImage:"/assets/no_available.png",defaultFailedImg:"/assets/failed_load_image.png"}},mounted:function(){this.fetchProjects()},methods:{formatDate:o(5).g,fetchProjects:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.show(t.$route.params.projectId);case 2:t.project=e.sent,setTimeout((function(){t.isLoading=!1}),500);case 4:case"end":return e.stop()}}),e)})))()},openGallery:function(){this.images=this.project.images},setDefaultFailedImg:function(t){t.target.src=this.defaultFailedImg},togleImage:function(){this.project.json.cover_image&&this.project.json.cover_image.url&&(this.coverImageVisible=!0)}}},c=(o(601),o(9)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.project&&t.project.json?o("div",[t.isLoading?o("GLoading"):o("div",[o("Card",{attrs:{bordered:!1,"dis-hover":"",padding:20}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("h3",[t._v(t._s(t.$t("pages.project_info")))]),t._v(" "),o("div",{staticClass:"font-size-12 mt-5"},[t._v("\n          "+t._s(t.$t("info.project.label.created_at"))+":\n          "+t._s(t.formatDate(t.project.json.created_at))+"\n          "+t._s(t.$t("info.project.label.created_by"))+":\n          "+t._s(t.project.json.created_by?t.project.json.created_by.full_name:"-")+"\n        ")]),t._v(" "),o("div",{staticClass:"font-size-12 mt-5"},[t._v("\n          "+t._s(t.$t("info.project.label.updated_at"))+":\n          "+t._s(t.formatDate(t.project.json.updated_at))+"\n          "+t._s(t.$t("info.project.label.updated_by"))+":\n          "+t._s(t.project.json.updated_by?t.project.json.updated_by.full_name:"-")+"\n        ")])]),t._v(" "),o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",{attrs:{xs:24,sm:16}},[o("Card",{attrs:{"dis-hover":"",padding:40}},[o("div",{attrs:{slot:"extra"},slot:"extra"},[o("nuxt-link",{attrs:{to:{name:"projects-projectId-edit"}}},[o("Icon",{attrs:{type:"ios-create-outline",size:"20",color:"#5d5d5d"}})],1)],1),t._v(" "),o("Row",{attrs:{type:"flex",align:"middle",gutter:16}},[o("Col",{staticStyle:{"text-align":"center"},attrs:{xs:22,lg:8}},[o("img",{staticClass:"customImage",attrs:{src:t.project.json.cover_image&&t.project.json.cover_image.url?t.project.json.cover_image.url:t.defaultImage},on:{error:t.setDefaultFailedImg,click:t.togleImage}})]),t._v(" "),o("Col",{attrs:{xs:24,sm:24,md:16}},[o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.project_id"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.project_code)+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.name"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.name_translations[t.$store.state.language.value])+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.location"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.location_translations[t.$store.state.language.value]||"-")+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.address"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.address_translations[t.$store.state.language.value]||"-")+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.project_type"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.project_type_label[t.$store.state.language.value])+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.description"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.description_translations[t.$store.state.language.value]||"-")+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.building_amount"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.building_amount||"-")+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.unit_amount"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t._v("\n                    "+t._s(t.project.json.unit_amount||"-")+"\n                  ")])],1),t._v(" "),o("Row",{attrs:{type:"flex",gutter:16}},[o("Col",{staticClass:"text-right font-weight-bold",attrs:{xs:6,sm:6,md:6}},[t._v("\n                    "+t._s(t.$t("info.project.label.map_url"))+":\n                  ")]),t._v(" "),o("Col",{staticClass:"align-self-flex-end",staticStyle:{"word-wrap":"break-word"},attrs:{xs:14}},[t.project.json.map_url?o("a",{staticClass:"map-url",attrs:{href:t.project.json.map_url,target:"_blank"}},[t._v("\n                      "+t._s(t.project.json.map_url)+"\n                    ")]):o("p",[t._v("-")])])],1)],1)],1),t._v(" "),t.project.json.images.length>0?o("div",[o("GGallery",{staticClass:"mt-5",attrs:{"separate-image":!0,"column-span":4,"count-image-list":t.project.json.images.length,height:"100px",width:"100px","project-images":"",images:t.project.json.images}})],1):t._e()],1),t._v(" "),o("Modal",{attrs:{"class-name":"cover-image-modal",height:"600px","max-width":"600px","footer-hide":"","mask-closable":!1},model:{value:t.coverImageVisible,callback:function(e){t.coverImageVisible=e},expression:"coverImageVisible"}},[o("Row",{staticClass:"images-list mt-16",attrs:{gutter:5,type:"flex",justify:"center"}},[o("Col",[o("img",{staticStyle:{"object-fit":"contain",width:"100%"},attrs:{width:"488",height:"500",src:t.project.json.cover_image&&t.project.json.cover_image.url?t.project.json.cover_image.url:t.defaultImage}})])],1)],1)],1)],1)],1)],1)],1):t._e()}),[],!1,null,"87ceb8a4",null);e.default=component.exports}}]);