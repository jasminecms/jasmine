/*! For license information please see Bread-Index.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[339],{6810:(t,e,r)=>{r.r(e),r.d(e,{default:()=>C});var n=r(821),o={class:"d-flex align-items-center p-2"},a={key:0,class:"btn-group btn-group-sm"},i={class:"px-1 px-lg-4"},c=(0,n.createElementVNode)("i",{class:"fs-3 bi bi-plus-circle-fill"},null,-1),l=(0,n.createElementVNode)("span",{class:"mx-1"},null,-1),u=["textContent","onClick"],s=["onInput"],f=["value","textContent"],h=["textContent"],p={key:0,class:"btn btn-sm dnd-handler",type:"button"},d=[(0,n.createElementVNode)("i",{class:"bi bi-arrows-expand fs-6"},null,-1)],y=(0,n.createElementVNode)("i",{class:"bi bi-pencil"},null,-1),v=["title","onClick"],m=[(0,n.createElementVNode)("i",{class:"bi bi-trash3"},null,-1)];var b=r(7854);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,a)&&(y=m);var b=d.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function o(n,a,i,c){var l=s(t[n],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==g(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return B()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function C(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:B}}function B(){return{value:void 0,done:!0}}return p.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function x(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function k(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){x(a,n,o,i,c,"next",t)}function c(t){x(a,n,o,i,c,"throw",t)}i(void 0)}))}}const E={name:"BreadIndex",props:{b:{type:Object,required:!0},paginator:{type:Object,required:!0},columns:{type:Array,required:!0},locale:{type:String}},data:function(){return{searchable:!0}},methods:{del:function(t,e){var r=this;return k(w().mark((function n(){return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.Z.fire({title:r.$t("Are you sure?"),text:r.$t("Are you sure you want to delete")+" "+e.jasmine_title,icon:"warning",showCancelButton:!0,cancelButtonText:r.$t("Cancel"),confirmButtonText:r.$t("Ok")});case 2:if(n.sent.isConfirmed){n.next=5;break}return n.abrupt("return",!1);case 5:return r.$inertia.delete(r.route("jasmine.bread.delete",{breadableName:r.b.key,breadableId:t})),n.abrupt("return",!0);case 7:case"end":return n.stop()}}),n)})))()},initSort:function(t,e){if(e.sortBy=t.data,e.sort="asc",e.q="",t.groups){var r=Object.keys(t.groups);r.length&&(e.sortGroup=t.groups[r[0]].v)}},reorder:function(t){var e=this;return k(w().mark((function r(){var n,o;return w().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.columns.find((function(t){return"j_actions"===t.id}))){r.next=3;break}return r.abrupt("return");case 3:o={},t.forEach((function(t,e){o[t[n.data]]=e+1})),e.$inertia.put(e.route("jasmine.bread.reorder",{breadableName:e.b.key}),{order:o});case 6:case"end":return r.stop()}}),r)})))()}}};const C=(0,r(3744).Z)(E,[["render",function(t,e,r,b,g,w){var x=(0,n.resolveComponent)("Head"),k=(0,n.resolveComponent)("inertia-link"),E=(0,n.resolveComponent)("DataTable"),C=(0,n.resolveComponent)("Layout");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(x,{title:t.$t(r.b.plural)},null,8,["title"]),(0,n.createVNode)(C,null,{pageActions:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",o,[r.locale?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.$globals.locales,(function(t){return(0,n.openBlock)(),(0,n.createBlock)(k,{href:"",data:{_locale:t},textContent:(0,n.toDisplayString)(t),class:(0,n.normalizeClass)(["btn btn-outline-primary text-uppercase",{active:t===r.locale}])},null,8,["data","textContent","class"])})),256))])):(0,n.createCommentVNode)("",!0)])]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",i,[(0,n.createVNode)(E,{paginator:r.paginator,columns:r.columns,ref:"dt",searchable:g.searchable,onReordered:w.reorder},{tableActions:(0,n.withCtx)((function(){return[(0,n.createVNode)(k,{href:t.route("jasmine.bread.create",{breadableName:r.b.key}),class:"btn text-primary d-flex align-items-center",title:"Create"},{default:(0,n.withCtx)((function(){return[c,l,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(t.$t("New")),1)]})),_:1},8,["href"])]})),h_j_sort:(0,n.withCtx)((function(t){var r=t.col,o=t.q;return[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",{style:{cursor:"pointer"},textContent:(0,n.toDisplayString)(r.label),onClick:function(t){return w.initSort(r,o)}},null,8,u),r.groups&&o.sortBy===r.data?((0,n.openBlock)(),(0,n.createElementBlock)("select",{key:0,onClick:e[0]||(e[0]=(0,n.withModifiers)((function(){}),["prevent"])),onInput:function(t){return o.sortGroup=t.target.value}},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.groups,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{key:t.v,value:t.v,textContent:(0,n.toDisplayString)(t.l||t.v)},null,8,f)})),128))],40,s)):(0,n.createCommentVNode)("",!0)])]})),j_sort:(0,n.withCtx)((function(t){var e=t.v,r=(t.r,t.col),o=t.q;return[(0,n.createElementVNode)("span",{textContent:(0,n.toDisplayString)(e)},null,8,h),o.sortBy===r.data?((0,n.openBlock)(),(0,n.createElementBlock)("button",p,d)):(0,n.createCommentVNode)("",!0)]})),j_actions:(0,n.withCtx)((function(e){var o=e.v,a=e.r;return[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(k,{class:"btn",title:t.$t("Edit"),href:t.route("jasmine.bread.edit",{breadableName:r.b.key,breadableId:o})},{default:(0,n.withCtx)((function(){return[y]})),_:2},1032,["title","href"]),(0,n.createElementVNode)("button",{type:"button",class:"btn",title:t.$t("Delete"),onClick:function(t){return w.del(o,a)}},m,8,v)])]})),_:1},8,["paginator","columns","searchable","onReordered"])])]})),_:1})],64)}]])}}]);