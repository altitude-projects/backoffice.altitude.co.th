(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{409:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r(21),r(15),r(18),r(32),r(33);var n=r(4),o=r(7),c=r(30),l=r(31),d=(r(16),r(25),r(3)),m=r(6),f=r(5);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c.a)(this,e),this.json=h(h({},t),{},{area:t.area||0})}var t,r,o,_,v,x,j;return Object(l.a)(e,[{key:"save",value:(j=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,n=Object(f.e)(this.json,"unit"),!this.json.id){e.next=8;break}return e.next=5,Object(m.d)("patch",Object(m.e)(m.a,"projects/".concat(t,"/assets/").concat(this.json.id)),{headers:Object(m.c)(!0),data:n});case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(m.d)("post",Object(m.e)(m.a,"projects/".concat(t,"/assets")),{headers:Object(m.c)(!0),data:n});case 10:r=e.sent;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"asTableJson",value:function(e,t){return{id:this.json.id,no:(t-1)*e+this.json.no,address_number:this.json.address_number||"-",asset_number:this.json.asset_number||"-",asset_model:this.json.asset_model||"-",asset_type_name:this.json.asset_type.name,building:this.json.building||"-",usable_area:this.json.usable_area||"-",area:this.json.area||"-",phase:this.json.phase||"-",floor:this.json.floor||"-",property_type:this.json.property_type||"-"}}}],[{key:"index",value:(x=Object(n.a)(regeneratorRuntime.mark((function t(r,n,o,c){var l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.d)("get",Object(m.e)(m.a,"projects/".concat(r,"/assets")),{headers:Object(m.c)(!0),params:{search:n,page:o,per_page:c}});case 2:if(l=t.sent,f=Object(d.orderBy)(l.data.assets,["address_number"],["asc"]),200!==l.status){t.next=7;break}return f=Object(d.map)(f,(function(t,r){return t.no=r+1,new e(t)})),t.abrupt("return",{units:f,total_count:l.data.total_count});case 7:return t.abrupt("return",[]);case 8:case"end":return t.stop()}}),t)}))),function(e,t,r,n){return x.apply(this,arguments)})},{key:"show",value:(v=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.d)("get",Object(m.e)(m.a,"projects/".concat(r,"/assets/").concat(n)),{headers:Object(m.c)(!0)});case 2:if(200!==(o=t.sent).status){t.next=5;break}return t.abrupt("return",new e(o.data.asset));case 5:case"end":return t.stop()}}),t)}))),function(e,t){return v.apply(this,arguments)})},{key:"destroy",value:(_=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)("delete",Object(m.e)(m.a,"projects/".concat(t,"/assets/").concat(r)),{headers:Object(m.c)(!0)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return _.apply(this,arguments)})},{key:"assetBillings",value:(o=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)("get",Object(m.e)(m.a,"projects/".concat(t,"/assets/").concat(r,"/asset_billings")),{headers:Object(m.c)(!0)});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)})},{key:"importAssets",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",r),e.next=4,Object(m.d)("post",Object(m.e)(m.a,"projects/".concat(t,"/assets/import_assets")),{headers:Object(m.c)(!0,!0),data:n});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"importAssetSupplies",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("file",r),o.append("images_zip_file",n),e.next=5,Object(m.d)("post",Object(m.e)(m.a,"projects/".concat(t,"/assets/import_asset_supplies")),{headers:Object(m.c)(!0,!0),data:o});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),function(e,r,n){return t.apply(this,arguments)})}]),e}()},444:function(e,t){},484:function(e,t){},485:function(e,t){},804:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(25),r(16),r(109),r(304),r(42),r(41),r(11),r(3)),c=r(482),l=r.n(c),d=r(409),m={props:{visibleModal:{type:Boolean,default:!1},projectType:{type:String,default:null}},data:function(){return{uploadedExcelFile:null,uploadedZipFile:null,formatFileError:!1,formatZipFileError:!1,addressNumbers:[]}},watch:{visibleModal:function(){this.resetAllFileds()}},methods:{resetAllFileds:function(){this.uploadedExcelFile=null,this.uploadedZipFile=null,this.addressNumbers=[]},formatError:function(){this.$Message.error({content:this.$t("messages.please_upload_file",{file:"excel"}),duration:5}),this.formatFileError=!0},uploadSuccess:function(e){this.formatFileError=!1},beforeUpload:function(e){var t=this;this.uploadedExcelFile=null,this.addressNumbers=[],setTimeout((function(){t.formatFileError||(e&&e.name?e.name.startsWith("unit-device")&&e.name.endsWith(".xlsx")?t.excelToJSON(e):t.$Message.error({content:t.$t("messages.please_upload_file",{file:"unit-device.xlsx"}),duration:5}):t.$Message.error({content:t.$t("messages.please_upload_file",{file:"excel"}),duration:5}))}),500)},excelToJSON:function(e){var t=this,r=new FileReader;r.onload=function(r){var data=r.target.result,n=l.a.read(data,{type:"binary"}),c=[];n.SheetNames.forEach((function(e){var r=l.a.utils.sheet_to_row_object_array(n.Sheets[e]),d=JSON.stringify(r);d=JSON.parse(d);["address_number","image","name_translations_th","name_translations_en"].forEach((function(e){var r=Object(o.map)(d,e);r=Object(o.map)(r,o.trim),"address_number"===e&&(t.addressNumbers=Object(o.uniq)(r)),(r.includes(void 0)||r.includes(""))&&c.push(e)}))})),c.length>0?(t.uploadedExcelFile=null,t.addressNumbers=[],t.$Message.error({content:t.$t("messages.column")+c.join(", ")+" "+t.$t("error.cannot_be_blank"),duration:5})):t.uploadedExcelFile=e},r.onerror=function(e){console.warn("error",e)},r.readAsBinaryString(e)},formatZipError:function(){this.$Message.error({content:this.$t("messages.please_upload_file",{file:"zip"}),duration:5}),this.formatZipFileError=!0},uploadZipSuccess:function(e){this.formatZipFileError=!1},beforeZipUpload:function(e){var t=this;this.uploadedZipFile=null,setTimeout((function(){t.formatZipFileError||(e&&e.name&&"device_images.zip"===e.name?t.uploadedZipFile=e:t.$Message.error({content:t.$t("messages.please_upload_file",{file:"device_images.zip"}),duration:5}))}),500)},exportFile:function(){var e="/files/device_images.zip",a=document.createElement("a");a.href=e,a.download=e.split("/").pop(),document.body.appendChild(a),a.click()},exportExcel:function(){if(this.projectType){var e="/files/unit-device.xlsx",a=document.createElement("a");a.href=e,a.download=e.split("/").pop(),document.body.appendChild(a),a.click()}},handleClose:function(){this.$emit("closeModal")},handleSubmit:function(){var e=this;return new Promise((function(t){e.$Modal.confirm({title:e.$t("messages.are_you_sure"),content:e.$t("messages.confirm_save"),okText:e.$t("button.yes"),cancelText:e.$t("button.no"),onOk:function(){e.submitFormDevice()}})}))},submitFormDevice:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.uploadedExcelFile){t.next=3;break}return e.$Message.error({content:e.$t("messages.please_upload_file",{file:"excel"})}),t.abrupt("return",!1);case 3:if(e.uploadedZipFile){t.next=6;break}return e.$Message.error({content:e.$t("messages.please_upload_file",{file:"zip"})}),t.abrupt("return",!1);case 6:return t.next=8,d.a.importAssetSupplies(e.$route.params.projectId,e.uploadedExcelFile,e.uploadedZipFile);case 8:(r=t.sent).data&&r.data.success?(e.$Message.success({content:"".concat(e.$t("messages.success")),duration:3}),e.resetAllFileds(),e.$emit("reloadData"),e.handleClose()):r.data.error?e.$Message.error({content:r.data.error,duration:5}):e.$Message.error({content:e.$t("messages.fail")});case 10:case"end":return t.stop()}}),t)})))()}}},f=r(9),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",{attrs:{bordered:!1,"dis-hover":!0,padding:0}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("pages.import_device_data")))]),e._v(" "),r("div",{attrs:{slot:"extra"},slot:"extra"},[r("Button",{staticClass:"default-button mx-0",attrs:{slot:"extra",type:"primary"},on:{click:e.exportFile},slot:"extra"},[e._v("\n        "+e._s(e.$t("button.example_image_file"))+"\n      ")]),e._v(" "),r("Button",{staticClass:"default-button",attrs:{slot:"extra",type:"primary"},on:{click:e.exportExcel},slot:"extra"},[e._v("\n        "+e._s(e.$t("button.example_device_file"))+"\n      ")])],1),e._v(" "),r("Row",{staticClass:"mt-20 mx-9",attrs:{type:"flex",align:"middle",gutter:16}},[r("Col",{attrs:{xs:24,sm:8,md:6,lg:4,xl:6}},[r("p",[e._v(e._s(e.$t("pages.import_device_data"))+":")])]),e._v(" "),r("Col",{attrs:{xs:24,sm:16,md:18,lg:20,xl:18}},[r("Upload",{attrs:{"on-format-error":e.formatError,"show-upload-list":!1,"before-upload":e.beforeUpload,action:"","on-success":e.uploadSuccess,format:["xlsx","xlsm","xltx","xltm","xlsb","xlam"],accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}},[r("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("\n            "+e._s(e.$t("button.upload_file"))+"\n          ")]),e._v(" "),e.uploadedExcelFile?r("span",{staticClass:"ml-10"},[e._v("\n            "+e._s(e.uploadedExcelFile.name)+"\n          ")]):e._e()],1)],1)],1),e._v(" "),r("Row",{staticClass:"mt-20 mx-9",attrs:{type:"flex",align:"middle",gutter:16}},[r("Col",{attrs:{xs:24,sm:8,md:6,lg:4,xl:6}},[r("p",[e._v(e._s(e.$t("pages.import_device_image_zip_file"))+":")])]),e._v(" "),r("Col",{attrs:{xs:24,sm:16,md:18,lg:20,xl:18}},[r("Upload",{attrs:{"on-format-error":e.formatZipError,"show-upload-list":!1,"before-upload":e.beforeZipUpload,action:"","on-success":e.uploadZipSuccess,format:["zip"]}},[r("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("\n            "+e._s(e.$t("button.upload_file"))+"\n          ")]),e._v(" "),e.uploadedZipFile?r("span",{staticClass:"ml-10"},[e._v("\n            "+e._s(e.uploadedZipFile.name)+"\n          ")]):e._e()],1)],1)],1),e._v(" "),e.addressNumbers.length>0&&!e.addressNumbers.includes("")?r("Row",{staticClass:"mt-20 mx-9",staticStyle:{color:"#ba6b57"},attrs:{type:"flex",align:"middle",gutter:16}},[r("Col",[r("p",[e._v(e._s(e.$t("pages.add_device_to_address_numbers"))+":")])]),e._v(" "),r("Col",[r("p",[e._v(e._s(e.addressNumbers.join(", ")||"-"))])])],1):e._e()],1),e._v(" "),r("Row",{staticClass:"mt-20",attrs:{type:"flex",justify:"center"}},[r("Button",{staticClass:"default-button button-grey",on:{click:e.handleClose}},[e._v("\n      "+e._s(e.$t("button.cancel"))+"\n    ")]),e._v(" "),r("Button",{staticClass:"default-button",attrs:{type:"success"},on:{click:e.handleSubmit}},[e._v("\n      "+e._s(e.$t("button.save"))+"\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);