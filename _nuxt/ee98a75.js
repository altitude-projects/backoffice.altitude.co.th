(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{814:function(e,t,n){"use strict";n.r(t);n(303);var r=n(3),o={props:{dataLength:{type:Number,default:0},items:{type:Array,default:function(){return[]}},itemsPerPageOptions:{type:Array,default:function(){return[10,20,50,100,300,500]}},pageSize:{type:Number,default:10},showSizer:{type:Boolean,default:!1},currentPage:{type:Number,default:null},reload:{type:Boolean,default:!1}},data:function(){return{itemPerPage:10,page:1}},watch:{itemPerPage:function(){1!==this.page?this.page=1:this.paginations()},itemsPerPageOptions:function(e){this.itemPerPage=Object(r.first)(e)},reload:function(e){e&&(1!==this.page?this.page=1:this.paginations())},page:function(){this.paginations()},items:function(){this.currentPage&&(this.itemPerPage=this.pageSize),this.paginations()}},mounted:function(){this.paginations()},methods:{paginations:function(){if(this.currentPage)this.$emit("updateToParent",this.items);else{var e=this.itemPerPage*(this.page-1),t=this.itemPerPage*this.page-1,data=Object(r.filter)(this.items,(function(n,r){return r>=e&&r<=t}));this.$emit("updateToParent",data)}},onPageChange:function(e){this.page=e,this.currentPage?this.fetchItems(e,this.itemPerPage):this.paginations()},changeItemPerPage:function(e){this.itemPerPage=e,this.currentPage&&this.fetchItems(this.page,e)},fetchItems:function(e,t){this.$emit("fetchItems",e,t)}}},h=n(9),component=Object(h.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Page",{attrs:{total:e.dataLength,current:e.currentPage?e.currentPage:e.page,"page-size":e.pageSize,"page-size-opts":e.itemsPerPageOptions,"show-sizer":e.showSizer,styles:{padding:"10px"},size:"small",transfer:""},on:{"on-change":e.onPageChange,"on-page-size-change":e.changeItemPerPage}})],1)}),[],!1,null,"452a73a4",null);t.default=component.exports}}]);