(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],f=0,h=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("p",{staticClass:"star",class:{timeOfTheDay:!t.timeOfTheDay}},[t._v(t._s(t.cost))]),i("router-view",{attrs:{boxie:t.boxie},on:{"~clicked":function(e){return t.interval(e)},clicked:t.clicked}}),i("p",{staticClass:"star",class:{timeOfTheDay:!t.timeOfTheDay}},[t._v(t._s(t.timeParse))]),i("toggleLight",{staticClass:"star",attrs:{id:"toggleLight"},on:{toggle:t.toggle}})],1)},r=[],o=(i("99af"),i("c975"),i("4e82"),i("0d03"),i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"toggle"},[i("input",{staticClass:"toggle-input",attrs:{type:"checkbox"},on:{click:t.click}}),i("div",{staticClass:"toggle-bg"}),t._m(0)])])}),a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toggle-switch"},[i("div",{staticClass:"toggle-switch-figure"}),i("div",{staticClass:"toggle-switch-figureAlt"})])}],c={methods:{click:function(){this.$emit("toggle")}}},l=c,u=(i("befe"),i("2877")),f=Object(u["a"])(l,o,a,!1,null,null,null),h=f.exports,d=(i("a0f1"),{name:"app",data:function(){return{cost:0,timeStart:0,timeEnd:0,different:null,boxie:[],gameOver:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"test"],timeOfTheDay:!0}},computed:{minutes:function(){return Math.floor(this.different%36e5/6e4)},seconds:function(){return Math.floor(this.different%6e4/1e3)},timeParse:function(){return(this.minutes<10?"0"+this.minutes:this.minutes)+":"+(this.seconds<10?"0"+this.seconds:this.seconds)},xcoord:function(){return this.boxie.indexOf("test")},leftClick:function(){return this.xcoord-1},rightClick:function(){return this.xcoord+1},topClick:function(){return this.xcoord-4},bottomClick:function(){return this.xcoord+4}},components:{toggleLight:h},methods:{interval:function(){var t=this;this.cost||(this.timeStart=(new Date).getTime(),this.timeEnd=(new Date).getTime(),setInterval((function(){t.timeEnd=(new Date).getTime(),t.different=t.timeEnd-t.timeStart}),1e3))},clicked:function(t){var e=this,i=Number(t.target.id);if("test"!==i&&i===this.boxie[this.rightClick]||i===this.boxie[this.leftClick]||i===this.boxie[this.bottomClick]||i===this.boxie[this.topClick]){var n=this.boxie.concat();switch(this.cost=this.cost+1,t.target.style.transitionProperty="transform",t.target.style.transitionDuration=".3s",document.getElementById("test").style.transitionProperty="transform",document.getElementById("test").style.transitionDuration=".3s",i){case this.boxie[this.leftClick]:t.target.style.transform="translateX(104%)",document.getElementById("test").style.transform="translateX(-104%)",n[this.leftClick]="test",n[this.leftClick+1]=i;break;case this.boxie[this.rightClick]:t.target.style.transform="translateX(-104%)",document.getElementById("test").style.transform="translateX(104%)",n[this.rightClick]="test",n[this.rightClick-1]=i;break;case this.boxie[this.topClick]:t.target.style.transform="translateY(104%)",document.getElementById("test").style.transform="translateY(-104%)",n[this.topClick]="test",n[this.topClick+4]=i;break;case this.boxie[this.bottomClick]:t.target.style.transform="translateY(-104%)",document.getElementById("test").style.transform="translateY(104%)",n[this.bottomClick]="test",n[this.bottomClick-4]=i;break}if(setTimeout((function(t){t.target.style.transitionProperty="",t.target.style.transitionDuration="",document.getElementById("test").style.transitionProperty="",document.getElementById("test").style.transitionDuration="",t.target.style.transform="",document.getElementById("test").style.transform="",e.boxie=n}),300,t,n),"test"===this.boxie[15]&&15===this.boxie[14]&&14===this.boxie[13]&&13===this.boxie[12]){var s=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=e[n],o=i[s];return"test"===r&&"test"===o?"ТЫ ПОБЕДИЛ(а), С МЕНЯ ШАМПАНСКОЕ":r===o?t(e,i,n+1,s+1):"Осталось немного"};alert(s(this.boxie,this.gameOver,this.boxie[0],this.gameOver[0]))}}},toggle:function(){document.querySelector(".bg").classList.toggle("bg_vision"),this.timeOfTheDay?this.$router.push("neon"):this.$router.push("/"),this.timeOfTheDay=!this.timeOfTheDay}},mounted:function(){this.boxie=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"test"].sort((function(){return Math.random()-.5}))}}),m=d,g=(i("5c0b"),Object(u["a"])(m,s,r,!1,null,null,null)),p=g.exports,b=i("8c4f"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainWindow"},t._l(t.boxie,(function(e){return i("div",{key:e,staticClass:"box",attrs:{id:e},on:{click:t.clicked}},[t._v(t._s("test"===e?"":e))])})),0)},v=[],k={props:["boxie"],methods:{clicked:function(t){this.$emit("clicked",t)}}},x=k,C=(i("614a"),Object(u["a"])(x,y,v,!1,null,"42640b96",null)),_=C.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainWindow"},t._l(t.boxie,(function(e){return i("div",{key:e,staticClass:"box",attrs:{id:e},on:{click:t.clicked}},[t._v(t._s("test"===e?"":e))])})),0)},w=[],E={props:["boxie"],methods:{clicked:function(t){this.$emit("clicked",t)}}},D=E,T=(i("f40f"),Object(u["a"])(D,O,w,!1,null,"5981fab8",null)),j=T.exports;n["a"].use(b["a"]);var P=[{path:"/",name:"home",component:_},{path:"/neon",name:"neon",component:j}],$=new b["a"]({mode:"history",routes:P}),I=$;n["a"].config.productionTip=!1,new n["a"]({router:I,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"614a":function(t,e,i){"use strict";var n=i("a31c"),s=i.n(n);s.a},"9c0c":function(t,e,i){},a0f1:function(t,e,i){},a31c:function(t,e,i){},a849:function(t,e,i){},b5eb:function(t,e,i){},befe:function(t,e,i){"use strict";var n=i("b5eb"),s=i.n(n);s.a},f40f:function(t,e,i){"use strict";var n=i("a849"),s=i.n(n);s.a}});
//# sourceMappingURL=app.bb646fd8.js.map