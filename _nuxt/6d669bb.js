(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{537:function(e,t,o){var content=o(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(23).default)("bf451f1c",content,!0,{sourceMap:!1})},678:function(e,t,o){"use strict";o(537)},679:function(e,t,o){var n=o(22)(!1);n.push([e.i,"[data-v-b63af546] .ivu-select-dropdown{z-index:901}[data-v-b63af546] .ivu-select-arrow,[data-v-b63af546] .ivu-select-input,[data-v-b63af546] .ivu-select-item,[data-v-b63af546] .ivu-select-item-selected,[data-v-b63af546] .ivu-select-item-selected:hover{color:#fff}[data-v-b63af546] .ivu-select-item-focus{background-color:unset}[data-v-b63af546] .ivu-select-item-selected,[data-v-b63af546] .ivu-select-item-selected:hover,[data-v-b63af546] .ivu-select-item:hover{background-color:#e69a86}[data-v-b63af546] .ivu-select-selection{border:1px solid #ba6b56;background-color:#ba6b56;box-shadow:0 0 0 2px #a55f4d}[data-v-b63af546] .ivu-select-selection:hover{border-color:#ba6b56}[data-v-b63af546] .ivu-select-dropdown{background-color:#ba6b56}",""]),e.exports=n},818:function(e,t,o){"use strict";o.r(t);var n=o(4),r=(o(25),o(3)),l=o(82),c={props:{projects:{type:Array,default:function(){return[]}}},data:function(){return{selectProject:""}},computed:{storeProject:function(){return this.$store.state.project},projectsOrderByName:function(){var e=this;return Object(r.orderBy)(this.projects,[function(t){return t.name_translations[e.$store.state.language.value]?t.name_translations[e.$store.state.language.value].toLowerCase():null}],[function(t){return t.location_translations[e.$store.state.language.value]?t.location_translations[e.$store.state.language.value].toLowerCase():null}],["asc","asc"])}},watch:{storeProject:function(e,t){t&&t.id&&!Object(r.isEqual)(e.id,t.id)&&(this.selectProject=e.id),e.name_translations[this.$store.state.language.value]===t.name_translations[this.$store.state.language.value]&&e.location_translations[this.$store.state.language.value]===t.location_translations[this.$store.state.language.value]||this.$emit("reloadData")}},mounted:function(){this.selectProject=this.$route.params.projectId},methods:{renderLabel:function(e){return e.name_translations&&e.location_translations[this.$store.state.language.value]?"".concat(e.name_translations[this.$store.state.language.value]," - ").concat(e.location_translations[this.$store.state.language.value]):"".concat(e.name_translations[this.$store.state.language.value])},handleSelectedProject:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.value){o.next=5;break}return o.next=3,l.a.show(e.value);case 3:n=o.sent,t.$store.commit("SET_PROJECT",n.json);case 5:t.$router.push({name:"projects-projectId-announcements",params:{projectId:e.value}});case 6:case"end":return o.stop()}}),o)})))()}}},d=(o(678),o(9)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Select",{attrs:{placeholder:e.$t("messages.please_select_project"),filterable:""},on:{"on-select":e.handleSelectedProject},model:{value:e.selectProject,callback:function(t){e.selectProject=t},expression:"selectProject"}},e._l(e.projectsOrderByName,(function(t){return o("Option",{key:t.id,attrs:{value:t.id,label:e.renderLabel(t)}},[o("Col",[e._v("\n      "+e._s(t.name_translations[e.$store.state.language.value])+"\n    ")]),e._v(" "),o("Col",[o("span",{staticStyle:{float:"center",color:"#dedede"}},[e._v("\n        "+e._s(t.location_translations[e.$store.state.language.value])+"\n      ")])])],1)})),1)}),[],!1,null,"b63af546",null);t.default=component.exports}}]);