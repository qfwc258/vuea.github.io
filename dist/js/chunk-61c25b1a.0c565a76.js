(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61c25b1a"],{3333:function(t,e,s){"use strict";var n=s("fccc"),c=s.n(n);c.a},c358:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Tvdata"},[s("Tvdata",{attrs:{title:"咪咕电视API接口"}})],1)},c=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"MgApi"}},[s("h1",[t._v(t._s(t.title))]),s("h3",[t._v("栏目导航")]),t._v(" "+t._s(t.migutvNav)+" "),s("h3",[t._v("相关内容")]),t._v(" "+t._s(t.migutvCont)+" ")])},i=[],o={name:"Tvdata",props:{title:String},methods:{add:function(t){this.$store.dispatch("course_cont",t)}},computed:{migutvNav:function(){return this.$store.state.courseNav},migutvCont:function(){return this.$store.state.courseCont}},created:function(){this.$store.dispatch("course_nav",this.$route.params.courseid),this.$store.dispatch("course_cont","dd5311d848b54c56acba186ff1107236")}},r=o,u=(s("3333"),s("2877")),v=Object(u["a"])(r,a,i,!1,null,"63981a73",null),d=v.exports,l={name:"api",components:{Tvdata:d}},h=l,p=Object(u["a"])(h,n,c,!1,null,null,null);e["default"]=p.exports},fccc:function(t,e,s){}}]);
//# sourceMappingURL=chunk-61c25b1a.0c565a76.js.map