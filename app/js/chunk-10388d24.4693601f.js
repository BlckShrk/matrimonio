(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10388d24"],{"11a5":function(t,e,n){"use strict";var r=n("6c05"),i=n.n(r);i.a},"12db":function(t,e,n){},"2e51":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"page-container reviews-container",attrs:{fluid:"","fill-height":"","align-start":"","pa-0":""}},[n("div",{staticClass:"reviews-top"},[n("v-container",{attrs:{fluid:"","fill-height":"","px-5":"","pt-5":""}},[n("v-toolbar-title",{staticClass:"text-left text-truncate"},[t._v(t._s(t.$t("Lascia una recensione")))]),n("v-btn",{staticClass:"elevation-0 btn-close",attrs:{color:"black",fab:"",small:"",dark:""},on:{click:function(e){return t.closeReviews()}}},[n("v-icon",[t._v("mdi-window-close")])],1)],1)],1),n("v-content",{staticClass:"page-content reviews-content"},[n("v-fade-transition",[n("v-container",{staticClass:"inner-container",attrs:{fluid:"","fill-height":"","pa-0":""}},[n("v-flex",{attrs:{"justify-start":"","align-start":"","flex-direction":"column"}},[n("v-container",{staticClass:"reviewslinks-container",attrs:{fluid:"","fill-height":""}},t._l(t.reviewslinks,(function(e){return n("v-sheet",{key:e.link,staticClass:"item-card-button",attrs:{elevation:"5"}},[n("a",{staticClass:"item-card-link",attrs:{target:"_blank",href:e.link},on:{click:function(n){return t.clickedLink(null!=e.name?e.name:e.link)}}},[n("img",{attrs:{alt:e.name,src:e.logo}})])])})),1)],1)],1)],1)],1),n("reviews-links-popup",{attrs:{showDialog:t.showReviewsPopup,currentLink:t.currentReviewsLink},on:{close:t.closeReviewsLinksPopup}})],1)},i=[],a=n("2f62"),o=(n("47cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[n("v-dialog",{attrs:{"content-class":"reviews-links-popup",absolute:"",persistent:"","max-width":"290"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[n("v-card",[n("v-card-text",{staticClass:"pb-0 pt-4 ma-0 px-4"},[t.currentLink?n("v-sheet",{staticClass:"i-frame-popup",staticStyle:{"border-radius":"0","z-index":"999",position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px","background-color":"rgba(0, 0, 0, 0.5)"}},[n("v-sheet",{staticClass:"i-frame-popup-container",staticStyle:{"z-index":"1000",position:"absolute",top:"15px",left:"15px",right:"15px",bottom:"15px","-webkit-overflow-scrolling":"touch !important",overflow:"auto !important","border-radius":"20px !important"},attrs:{transition:"scale-transition",origin:"center center"}},[n("iframe",{staticStyle:{width:"10px !important","min-width":"100%","*width":"100%",border:"none","margin-top":"-56px","border-radius":"20px!important","-webkit-border-radius":"20px!important","-moz-border-radius":"20px!important"},style:{height:t.minIFramePercent},attrs:{src:t.currentLink,width:"100%"}})]),n("v-sheet",{staticClass:"i-frame-popup-close-button",staticStyle:{"z-index":"1001",position:"absolute",top:"15px",right:"15px","background-color":"transparent",width:"75px",height:"75px"},on:{click:function(e){return t.closePopup()}}},[n("v-btn",{staticClass:"elevation-0 btn-close",attrs:{color:"black",fab:"",small:"",dark:""}},[n("v-icon",[t._v("mdi-window-close")])],1)],1)],1):t._e(),n("span",{staticClass:"hint d-block pb-4"},[t._v(t._s(t.currentLink))])],1)],1)],1)],1)}),s=[],c=n("68d6");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={props:["showDialog","currentLink"],mixins:[Object(c["a"])(["showDialog"],"emit-event")],data:function(){return{}},computed:u({},Object(a["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}}),{},Object(a["e"])("restaurant",["name"]),{minIFrameHeight:function(){return(window.outerHeight/3*2).toString()+"px"},minIFramePercent:function(){return(100+56/window.outerHeight*100).toString()+"%"}}),methods:{closePopup:function(){this.$emit("close"),this.$store.commit("app/setRefreshingApp",!1)}},created:function(){}},b=f,h=(n("11a5"),n("a203"),n("2877")),d=n("6544"),v=n.n(d),w=n("8336"),m=n("b0af"),g=n("99d9"),k=n("169a"),O=n("132d"),x=n("a722"),j=n("8dd9"),y=Object(h["a"])(b,o,s,!1,null,"3be86942",null),P=y.exports;v()(y,{VBtn:w["a"],VCard:m["a"],VCardText:g["b"],VDialog:k["a"],VIcon:O["a"],VLayout:x["a"],VSheet:j["a"]});var C=n("afbd");function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){D(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S={components:{ReviewsLinksPopup:P},props:{hash:String},data:function(){return{showReviewsPopup:!1,currentReviewsLink:""}},computed:R({},Object(a["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}}),{},Object(a["e"])("restaurant",["description","image","name","logo","reviewslinks"]),{},Object(a["e"])("app",["navBarReduced","splashShown"])),methods:{closeReviews:function(){this.$router.push({name:"restaurant",params:{hash:this.hash}})},clickedLink:function(t){Object(C["a"])(this.$ga,"clickedReview",t)},showReviewsLinksPopup:function(t){this.drawer=!1,this.showReviewsPopup=!0,this.currentReviewsLink=t,document.getElementsByTagName("html")[0].className="no-scroll"},closeReviewsLinksPopup:function(){document.getElementsByTagName("html")[0].removeAttribute("class","no-scroll"),this.showReviewsPopup=!1}},mounted:function(){this.splashShown||this.$router.push({name:"restaurant",params:{hash:this.hash}}),Object(C["a"])(this.$ga,"page","reviews")}},V=S,_=(n("590b"),n("a523")),$=n("a75b"),E=n("0789"),T=n("0e8f"),B=n("2a7f"),F=Object(h["a"])(V,r,i,!1,null,"cc61d2a8",null);e["default"]=F.exports;v()(F,{VBtn:w["a"],VContainer:_["a"],VContent:$["a"],VFadeTransition:E["c"],VFlex:T["a"],VIcon:O["a"],VSheet:j["a"],VToolbarTitle:B["a"]})},"3c5f":function(t,e,n){},"590b":function(t,e,n){"use strict";var r=n("12db"),i=n.n(r);i.a},"6c05":function(t,e,n){},a203:function(t,e,n){"use strict";var r=n("3c5f"),i=n.n(r);i.a}}]);