(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{819:function(t,e,r){"use strict";r.r(e);var n={props:{status:{type:String,default:function(){return null}}},data:function(){return{}},methods:{colorStatus:function(t){switch(t){case"waiting_payment":return"#7684EF";case"active":return"success";case"inactive":return"error";case"opened":return"orange";case"paid":return"success";case"cancelled":return"red";case"completed":return"green";case"pending_approval":return"blue";case"draft":return"#C9C9C9";case"modified":return"#FFA30F";default:return"#57BA5B"}}}},c=r(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.status?r("div",[r("Tag",{staticClass:"text-center",attrs:{color:t.colorStatus(t.status),ghost:""}},[t._v("\n    "+t._s(t.$t("status."+t.status))+"\n  ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);