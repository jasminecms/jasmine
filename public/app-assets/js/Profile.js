"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[778],{6554:(e,t,o)=>{o.r(t),o.d(t,{default:()=>W});var r=o(9726);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var i={class:"row px-4"},c={class:"col-md-3"},d={class:"card mb-4"},m={class:"card-body"},p=["textContent"],u={class:"mb-3"},f=["textContent"],w=["textContent"],b={class:"mb-3"},y=["textContent"],v=["value"],_=["textContent"],C={class:"card"},V={class:"card-body"},x=["textContent"],E={class:"mb-3"},N=["textContent"],h=["textContent"],g={class:"mb-3"},S=["textContent"],D=["textContent"],k={class:"mb-3"},O=["textContent"],$=["textContent"],P=["textContent"],j={class:"col-md-3"},B={class:"card"},M={class:"card-body"},T=["textContent"],q={class:"form-check form-switch"},U=["textContent"],z={key:0,class:"my-3"},H=["textContent"],A={key:0,class:"my-4"},Q=["textContent"],R=["textContent"],F={class:"my-4"},L=["textContent"],G=["textContent"],I={class:"mt-3"},J=["textContent"];const K={name:"Profile",components:{VueQrcode:o(713).A},props:{name:{type:String,required:!0},email:{type:String,required:!0},otp:{type:Object,required:!0}},data:function(){return{details_form:this.$inertia.form({_sec:"details",name:this.name}),password_form:this.$inertia.form({_sec:"password",password:"",new_password:"",new_password_confirmation:""}),otp_form:this.$inertia.form({_sec:"otp",password:"",enabled:this.otp.enabled,code:null})}},methods:{otpSub:function(e){}}};const W=(0,o(6262).A)(K,[["render",function(e,t,o,n,l,s){var K=(0,r.resolveComponent)("Head"),W=(0,r.resolveComponent)("vue-qrcode"),X=(0,r.resolveComponent)("Layout");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(K,{title:e.$t("Profile")},null,8,["title"]),(0,r.createVNode)(X,null,{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("h5",{class:"mb-2",textContent:(0,r.toDisplayString)(e.$t("Details"))},null,8,p),(0,r.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(e){return l.details_form.post("")}),["prevent"]))},[(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("label",{for:"profile_name",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("Name"))},null,8,f),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",class:(0,r.normalizeClass)(["form-control form-control-sm",{"is-invalid":l.details_form.errors.name}]),id:"profile_name","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.details_form.name=e})},null,2),[[r.vModelText,l.details_form.name]]),(0,r.createElementVNode)("div",{class:"invalid-feedback",textContent:(0,r.toDisplayString)(l.details_form.errors.name)},null,8,w)]),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("label",{for:"profile_email",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("Email address"))},null,8,y),(0,r.createElementVNode)("input",{type:"email",class:"form-control form-control-sm",id:"profile_email","aria-describedby":"emailHelp",value:o.email,disabled:""},null,8,v)]),l.details_form.isDirty?((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:0,type:"submit",class:"btn btn-primary btn-sm rounded-1",textContent:(0,r.toDisplayString)(e.$t("Submit"))},null,8,_)):(0,r.createCommentVNode)("",!0)],32)])]),(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",V,[(0,r.createElementVNode)("h5",{class:"mb-2",textContent:(0,r.toDisplayString)(e.$t("Change password"))},null,8,x),(0,r.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,r.withModifiers)((function(e){return l.password_form.post("")}),["prevent"]))},[(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("label",{for:"profile_password",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("Current password"))},null,8,N),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password",class:(0,r.normalizeClass)(["form-control form-control-sm",{"is-invalid":l.password_form.errors.password}]),id:"profile_password",autocomplete:"current-password","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.password_form.password=e})},null,2),[[r.vModelText,l.password_form.password]]),(0,r.createElementVNode)("div",{class:"invalid-feedback",textContent:(0,r.toDisplayString)(l.password_form.errors.password)},null,8,h)]),(0,r.createElementVNode)("div",g,[(0,r.createElementVNode)("label",{for:"profile_new_password",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("New password"))},null,8,S),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password",class:(0,r.normalizeClass)(["form-control form-control-sm",{"is-invalid":l.password_form.errors.new_password}]),id:"profile_new_password",autocomplete:"new-password","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.password_form.new_password=e})},null,2),[[r.vModelText,l.password_form.new_password]]),(0,r.createElementVNode)("div",{class:"invalid-feedback",textContent:(0,r.toDisplayString)(l.password_form.errors.new_password)},null,8,D)]),(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("label",{for:"profile_new_password_confirmation",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("Confirm new password"))},null,8,O),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password",class:(0,r.normalizeClass)(["form-control form-control-sm",{"is-invalid":l.password_form.errors.new_password_confirmation}]),id:"profile_new_password_confirmation",autocomplete:"new-password","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.password_form.new_password_confirmation=e})},null,2),[[r.vModelText,l.password_form.new_password_confirmation]]),(0,r.createElementVNode)("div",{class:"invalid-feedback",textContent:(0,r.toDisplayString)(l.password_form.errors.new_password_confirmation)},null,8,$)]),l.password_form.isDirty?((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:0,type:"submit",class:"btn btn-primary btn-sm rounded-1",textContent:(0,r.toDisplayString)(e.$t("Submit"))},null,8,P)):(0,r.createCommentVNode)("",!0)],32)])])]),(0,r.createElementVNode)("div",j,[(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("div",M,[(0,r.createElementVNode)("h5",{class:"mb-2",textContent:(0,r.toDisplayString)(e.$t("Two factor authentication"))},null,8,T),(0,r.createElementVNode)("form",{onSubmit:t[9]||(t[9]=(0,r.withModifiers)((function(e){return l.otp_form.transform((function(e){return a(a({},e),{},{secret:o.otp.secret,url:o.otp.url})})).post("")}),["prevent"]))},[(0,r.createElementVNode)("div",q,[(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"require_mfa","onUpdate:modelValue":t[6]||(t[6]=function(e){return l.otp_form.enabled=e})},null,512),[[r.vModelCheckbox,l.otp_form.enabled]]),(0,r.createElementVNode)("label",{class:"form-check-label",for:"require_mfa",textContent:(0,r.toDisplayString)(e.$t("Require Two factor authentication"))},null,8,U)]),o.otp.url?((0,r.openBlock)(),(0,r.createElementBlock)("div",z,[(0,r.createElementVNode)("p",{textContent:(0,r.toDisplayString)(e.$t("Please scan the QR code with your OTP app"))},null,8,H),(0,r.createVNode)(W,{class:"d-block mx-auto",value:o.otp.url,options:{width:242}},null,8,["value"]),o.otp.enabled?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createElementBlock)("div",A,[(0,r.createElementVNode)("label",{for:"mfa_code",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("Enter generated code"))},null,8,Q),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",inputmode:"numeric",class:(0,r.normalizeClass)(["form-control form-control-sm text-center",{"is-invalid":l.otp_form.errors.code}]),id:"mfa_code",minlength:"6",maxlength:"6",autocomplete:"current-password","onUpdate:modelValue":t[7]||(t[7]=function(e){return l.otp_form.code=e})},null,2),[[r.vModelText,l.otp_form.code]]),(0,r.createElementVNode)("div",{class:"invalid-feedback",textContent:(0,r.toDisplayString)(l.otp_form.errors.code)},null,8,R)]))])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",F,[(0,r.createElementVNode)("label",{for:"mfa_profile_password",class:"form-label",textContent:(0,r.toDisplayString)(e.$t("Password"))},null,8,L),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password",class:(0,r.normalizeClass)(["form-control form-control-sm",{"is-invalid":l.otp_form.errors.password}]),id:"mfa_profile_password",autocomplete:"current-password","onUpdate:modelValue":t[8]||(t[8]=function(e){return l.otp_form.password=e})},null,2),[[r.vModelText,l.otp_form.password]]),(0,r.createElementVNode)("div",{class:"invalid-feedback",textContent:(0,r.toDisplayString)(l.otp_form.errors.password)},null,8,G)]),(0,r.createElementVNode)("div",I,[l.otp_form.isDirty?((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:0,type:"submit",class:"btn btn-primary btn-sm rounded-1",textContent:(0,r.toDisplayString)(e.$t("Submit"))},null,8,J)):(0,r.createCommentVNode)("",!0)])],32)])])])])]})),_:1})],64)}]])}}]);
//# sourceMappingURL=Profile.js.map?id=d789677ff82831d4