/*! For license information please see Bread-Index.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[100],{9380:(t,e,r)=>{r.r(e),r.d(e,{default:()=>L});var n=r(9726),o={class:"d-flex align-items-center p-2"},a={key:0,class:"btn-group btn-group-sm"},i={class:"px-1 px-lg-4"},c=(0,n.createElementVNode)("i",{class:"fs-3 bi bi-plus-circle-fill"},null,-1),l=(0,n.createElementVNode)("span",{class:"mx-1"},null,-1),u=["textContent","onClick"],s=["onInput"],f=["value","textContent"],h=["textContent"],p={key:0,class:"btn btn-sm dnd-handler",type:"button"},d=[(0,n.createElementVNode)("i",{class:"bi bi-arrows-expand fs-6"},null,-1)],y={class:"d-flex align-items-center"},m=["href","title"],v=[(0,n.createElementVNode)("i",{class:"bi bi-link",style:{"font-size":"1.5rem"}},null,-1)],b=(0,n.createElementVNode)("i",{class:"bi bi-pencil"},null,-1),g=["title","onClick"],w=[(0,n.createElementVNode)("i",{class:"bi bi-trash3"},null,-1)];var x=r(9137);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:_(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",m={};function v(){}function b(){}function g(){}var w={};u(w,i,(function(){return this}));var x=Object.getPrototypeOf,C=x&&x(x($([])));C&&C!==r&&n.call(C,i)&&(w=C);var N=g.prototype=v.prototype=Object.create(w);function B(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==k(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,n){var o=h;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=j(c,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?y:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function V(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(V,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(k(e)+" is not iterable")}return b.prototype=g,o(N,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=u(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,l,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},B(L.prototype),u(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},B(N),u(N,l,"Generator"),u(N,i,(function(){return this})),u(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function C(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function N(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){C(a,n,o,i,c,"next",t)}function c(t){C(a,n,o,i,c,"throw",t)}i(void 0)}))}}const B={name:"BreadIndex",props:{can:{type:Array,required:!0},b:{type:Object,required:!0},paginator:{type:Object,required:!0},columns:{type:Array,required:!0},locale:{type:String}},data:function(){return{searchable:!0}},methods:{del:function(t,e){var r=this;return N(E().mark((function n(){return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.A.fire({title:r.$t("Are you sure?"),text:r.$t("Are you sure you want to delete")+" "+e.jasmine_title,icon:"warning",showCancelButton:!0,cancelButtonText:r.$t("Cancel"),confirmButtonText:r.$t("Ok")});case 2:if(n.sent.isConfirmed){n.next=5;break}return n.abrupt("return",!1);case 5:return r.$inertia.delete(r.route("jasmine.bread.delete",{breadableName:r.b.key,breadableId:t})),n.abrupt("return",!0);case 7:case"end":return n.stop()}}),n)})))()},initSort:function(t,e){if(e.sortBy=t.data,e.sort="asc",e.q="",t.groups){var r=Object.keys(t.groups);r.length&&(e.sortGroup=t.groups[r[0]].v)}},reorder:function(t){var e=this;return N(E().mark((function r(){var n,o;return E().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.columns.find((function(t){return"j_actions"===t.id}))){r.next=3;break}return r.abrupt("return");case 3:o={},t.forEach((function(t,e){o[t[n.data]]=e+1})),e.$inertia.put(e.route("jasmine.bread.reorder",{breadableName:e.b.key}),{order:o});case 6:case"end":return r.stop()}}),r)})))()}}};const L=(0,r(6262).A)(B,[["render",function(t,e,r,x,k,E){var C=(0,n.resolveComponent)("Head"),N=(0,n.resolveComponent)("inertia-link"),B=(0,n.resolveComponent)("DataTable"),L=(0,n.resolveComponent)("Layout");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(C,{title:t.$t(r.b.plural)},null,8,["title"]),(0,n.createVNode)(L,null,{pageActions:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",o,[r.locale?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.$globals.locales,(function(t){return(0,n.openBlock)(),(0,n.createBlock)(N,{href:"",data:{_locale:t},textContent:(0,n.toDisplayString)(t),class:(0,n.normalizeClass)(["btn btn-outline-primary text-uppercase",{active:t===r.locale}])},null,8,["data","textContent","class"])})),256))])):(0,n.createCommentVNode)("",!0)])]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",i,[(0,n.createVNode)(B,{paginator:r.paginator,columns:r.columns,ref:"dt",searchable:k.searchable,onReordered:E.reorder},{tableActions:(0,n.withCtx)((function(){return[r.can.indexOf("a")>-1?((0,n.openBlock)(),(0,n.createBlock)(N,{key:0,href:t.route("jasmine.bread.create",{breadableName:r.b.key}),class:"btn text-primary d-flex align-items-center",title:"Create"},{default:(0,n.withCtx)((function(){return[c,l,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(t.$t("New")),1)]})),_:1},8,["href"])):(0,n.createCommentVNode)("",!0)]})),h_j_sort:(0,n.withCtx)((function(t){var r=t.col,o=t.q;return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",{style:{cursor:"pointer"},textContent:(0,n.toDisplayString)(r.label),onClick:function(t){return E.initSort(r,o)}},null,8,u),r.groups&&o.sortBy===r.data?((0,n.openBlock)(),(0,n.createElementBlock)("select",{key:0,onClick:e[0]||(e[0]=(0,n.withModifiers)((function(){}),["prevent"])),onInput:function(t){return o.sortGroup=t.target.value}},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.groups,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{key:t.v,value:t.v,textContent:(0,n.toDisplayString)(t.l||t.v)},null,8,f)})),128))],40,s)):(0,n.createCommentVNode)("",!0)])]})),j_sort:(0,n.withCtx)((function(t){var e=t.v,r=(t.r,t.col),o=t.q;return[(0,n.createElementVNode)("span",{textContent:(0,n.toDisplayString)(e)},null,8,h),o.sortBy===r.data?((0,n.openBlock)(),(0,n.createElementBlock)("button",p,d)):(0,n.createCommentVNode)("",!0)]})),j_actions:(0,n.withCtx)((function(e){var o=e.v,a=e.r;return[(0,n.createElementVNode)("div",y,[a.jasmine_public_url?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,target:"_blank",href:a.jasmine_public_url,title:t.$t("View"),class:"btn"},v,8,m)):(0,n.createCommentVNode)("",!0),r.can.indexOf("r")>-1?((0,n.openBlock)(),(0,n.createBlock)(N,{key:1,class:"btn",title:t.$t("Edit"),href:t.route("jasmine.bread.edit",{breadableName:r.b.key,breadableId:o})},{default:(0,n.withCtx)((function(){return[b]})),_:2},1032,["title","href"])):(0,n.createCommentVNode)("",!0),r.can.indexOf("d")>-1?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:2,type:"button",class:"btn",title:t.$t("Delete"),onClick:function(t){return E.del(o,a)}},w,8,g)):(0,n.createCommentVNode)("",!0)])]})),_:1},8,["paginator","columns","searchable","onReordered"])])]})),_:1})],64)}]])}}]);
//# sourceMappingURL=Bread-Index.js.map?id=dec6e511ba222e44