(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"container"},o={class:"card p-3 my-3 max-width-500"},i=Object(n["c"])("h2",null,"Registration Form",-1);function l(e,t,r,l,s,c){var u=Object(n["g"])("inputText");return Object(n["f"])(),Object(n["b"])("div",a,[Object(n["c"])("div",o,[i,Object(n["d"])(u,{id:"firstName",type:"text",placeholder:"John",label:"First name",onParent:c.print,validator:"name",submitted:e.submitted},null,8,["onParent","submitted"]),Object(n["d"])(u,{id:"lastName",type:"text",placeholder:"Doe",label:"Last name",onParent:c.print,validator:"name",submitted:e.submitted},null,8,["onParent","submitted"]),Object(n["d"])(u,{id:"password",type:"password",placeholder:"",label:"Password",onParent:c.print,validator:"password",submitted:e.submitted},null,8,["onParent","submitted"]),Object(n["d"])(u,{id:"age",type:"number",placeholder:"100",label:"Age",onParent:c.print,validator:"age",submitted:e.submitted},null,8,["onParent","submitted"]),Object(n["c"])("button",{class:"btn btn-secondary my-4",onClick:t[0]||(t[0]=function(){return c.submit&&c.submit.apply(c,arguments)})},"Submit")]),Object(n["c"])("p",null,Object(n["h"])(e.result),1)])}r("d3b7"),r("b64b"),r("ac1f"),r("00b4");var s={for:"id",class:"form-label mt-2"},c=["type","placeholder","validator"],u=Object(n["c"])("sup",null,"*",-1),d={class:"px-2"};function p(e,t,r,a,o,i){return Object(n["f"])(),Object(n["b"])("div",null,[Object(n["c"])("label",s,Object(n["h"])(r.label),1),Object(n["j"])(Object(n["c"])("input",{type:r.type,class:"form-control",id:"id",placeholder:r.placeholder,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),onInput:t[1]||(t[1]=function(){return i.test&&i.test.apply(i,arguments)}),validator:r.validator,min:"1",max:"99"},null,40,c),[[n["i"],e.value]]),Object(n["c"])("p",{class:Object(n["e"])(i.enableError)},[u,Object(n["c"])("small",d,Object(n["h"])(i.error),1)],2)])}var b=r("ade3"),m=(r("4d63"),r("c607"),r("2c3e"),r("25f0"),{name:{regex:new RegExp(/^([A-Z]){1}([a-z]){2,20}$/),error:"Names should start with upper case and followed by lowercase letters, with no leading or lagging space"},email:{regex:new RegExp(/^(\w||-||\.){1,20}@(\w||-){1,20}\.([a-z]){2,8}(\.){0,1}([a-z]){0,2}$/),error:"Please, enter a valid email"},mobile:{regex:new RegExp(/^04([0-9]){8}$/),error:"Mobile numbers should be 10 digits starting with 04 without any dashes or spaces"},age:{regex:new RegExp(/^[1-9]{1}[0-9]{0,1}$/),error:"Age should be more than 0 and less than 99"},password:{regex:new RegExp(/(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/),error:"password should be 8-20 characters, having at least one uppercase, one lowecase, one number and a special character"}}),h={name:"InputText",props:["id","placeholder","label","type","validator","submitted"],compontents:{},template:"\n    \n    ",data:function(){return{value:""}},methods:{test:function(){var e;this.$emit("parent",(e={},Object(b["a"])(e,this.id,this.value),Object(b["a"])(e,"error",""!==this.error?1:0),e))}},computed:{error:function(){return m[this.validator].regex.test(this.value)?"":m[this.validator].error},enableError:function(){return""!==this.error&&this.submitted?"text-danger d-block":"d-none"}},mounted:function(){var e;this.$emit("parent",(e={},Object(b["a"])(e,this.id,this.value),Object(b["a"])(e,"error",1),e))}},f=r("6b0d"),v=r.n(f);const O=v()(h,[["render",p]]);var j=O,g={name:"App",components:{InputText:j},data:function(){return{submitted:!1,data:{error:{}},result:""}},methods:{print:function(e){var t="";for(var r in e){"error"!==r&&(t=r);break}this.data[t]=e[t],this.data.error[t]=e.error},submit:function(){var e=this;this.submitted=!0;var t=Object.keys(this.data.error).reduce((function(t,r){return e.data.error[r]+t}),0);this.result=t?"Please, fix the ".concat(t," error(s) and re-submit"):"submitted successfully"}}};const y=v()(g,[["render",l]]);var w=y;Object(n["a"])(w).mount("#app")}});
//# sourceMappingURL=app.e0f82874.js.map