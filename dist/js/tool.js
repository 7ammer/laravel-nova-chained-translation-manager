(()=>{"use strict";var e,t={342:(e,t,n)=>{const o=Vue;var r={class:"translation-manager"},a={class:"flex"},l={class:"relative mb-6 h-9 flex-no-shrink flex items-center"},i={for:"search"},c=["placeholder"],s={class:"ml-auto"},u={class:"p-4"},d={class:"list-reset"},f={class:"flex items-center mb-4"},p={class:"ml-2"},h={class:"p-4"},g={class:"list-reset"},m={class:"flex items-center mb-4"},v={class:"flex mr-6 font-bold no-underline border-b text-90"},y={class:"w-12/12"},k={key:0,class:"my-3"},b={key:1,class:"my-3"};var x=["for"],w={key:0,class:"block my-1 leading-tight text-80"},C={class:"w-2/12 uppercase"},N={class:"w-10/12"},E=["innerHTML"],_={class:"pr-3 text-left"},B={class:"text-left"};var S={class:"editable-input-field"},V={class:"flex justify-end items-center my-3"};const T={props:{value:{type:String,default:""},placeholder:{type:String,default:""},config:{type:Object,default:null},disabled:{type:Boolean,default:!1}},data:function(){return{input:""}},mounted:function(){this.input=this.value,"trix"!==this.config.editor&&this.$refs.input.select()},methods:{initialize:function(){this.$refs.theEditor.editor.insertHTML(this.value),this.disabled&&this.$refs.theEditor.setAttribute("contenteditable",!1)},handleChange:function(){this.input=this.$refs.theEditor.value},handleFileAccept:function(e){e.preventDefault()},handleAddFile:function(e){this.$emit("file-add",e)},handleRemoveFile:function(e){this.$emit("file-remove",e)},save:function(){this.$emit("save",this.input)},cancel:function(){this.$emit("cancel")}}};var A=n(744);const O={components:{"editable-input-field":(0,A.Z)(T,[["render",function(e,t,n,r,a,l){var i=(0,o.resolveComponent)("trix-editor");return(0,o.openBlock)(),(0,o.createElementBlock)("div",S,["trix"===n.config.editor?((0,o.openBlock)(),(0,o.createBlock)(i,{key:0,ref:"theEditor",onKeydown:t[0]||(t[0]=(0,o.withModifiers)((function(){}),["stop"])),onTrixChange:l.handleChange,onTrixInitialize:l.initialize,onTrixAttachmentAdd:l.handleAddFile,onTrixAttachmentRemove:l.handleRemoveFile,onTrixFileAccept:l.handleFileAccept,value:n.value,placeholder:n.placeholder,class:"trix-content"},null,8,["onTrixChange","onTrixInitialize","onTrixAttachmentAdd","onTrixAttachmentRemove","onTrixFileAccept","value","placeholder"])):"textarea"===n.config.editor?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("textarea",{key:1,ref:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.input=e}),type:"text",class:"w-full form-control form-input form-input-bordered"},null,512)),[[o.vModelText,a.input]]):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:2,ref:"input","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.input=e}),type:"text",class:"w-full form-control form-input form-input-bordered"},null,512)),[[o.vModelText,a.input]]),(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("button",{type:"button",class:"appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800",onClick:t[3]||(t[3]=function(){return l.cancel&&l.cancel.apply(l,arguments)})},[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("cancel")),1)]),(0,o.createElementVNode)("button",{type:"button",class:"flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white dark:text-gray-800 inline-flex items-center font-bold px-4 h-9 text-sm flex-shrink-0",onClick:t[4]||(t[4]=function(){return l.save&&l.save.apply(l,arguments)})},[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("save")),1)])])])}]])},props:{editing:{type:Boolean,default:!1},locale:{type:String,default:""},translation:{type:Object,default:null},config:{type:Object,default:null}},computed:{value:function(){return this.translation&&this.translation.translations?this.translation.translations[this.locale]:""},name:function(){return this.translation&&this.translation.id?"".concat(this.translation.id,"_").concat(this.locale):""},translationKey:function(){return this.translation?this.translation.key:""},group:function(){return this.translation?this.translation.group:""}},methods:{handleEdit:function(){this.$emit("toggle")},handleSave:function(e){this.$emit("submit",{group:this.group,locale:this.locale,key:this.translationKey,value:e})},handleCancel:function(){this.$emit("cancel")}}};var L=n(379),M=n.n(L),j=n(387),I={insert:"head",singleton:!1};M()(j.Z,I);j.Z.locals;const D={props:{checked:{type:Boolean,default:!1},value:{type:String,default:null},text:{type:String,default:null},onToggle:{type:Function,default:null}},methods:{handleToggle:function(){this.onToggle(this.value)}}};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){i=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw r}}return a}(e,t)||$(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}const U={components:{"editable-input":(0,A.Z)(O,[["render",function(e,t,n,r,a,l){var i=(0,o.resolveComponent)("editable-input-field"),c=(0,o.resolveComponent)("icon");return(0,o.openBlock)(),(0,o.createElementBlock)("label",{ref:"input",for:l.name,class:(0,o.normalizeClass)([{"editable-input bg-white dark:bg-gray-800 my-1 px-3 py-1 rounded-lg":n.editing},"block"]),tabindex:"0",onFocus:t[2]||(t[2]=function(){return l.handleEdit&&l.handleEdit.apply(l,arguments)})},[n.editing?((0,o.openBlock)(),(0,o.createElementBlock)("span",w,(0,o.toDisplayString)(n.locale.toUpperCase())+" - "+(0,o.toDisplayString)(l.translationKey),1)):(0,o.createCommentVNode)("",!0),n.editing?((0,o.openBlock)(),(0,o.createBlock)(i,{key:1,value:l.value,config:n.config,type:"text",class:"w-full",onSave:l.handleSave,onCancel:l.handleCancel},null,8,["value","config","onSave","onCancel"])):((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:2,class:(0,o.normalizeClass)([{updated:n.translation.updated&&n.translation.updated===n.locale},"flex p-1 transition duration-500 cursor-pointer value hover:bg-gray-100 dark:hover:bg-gray-700"])},[(0,o.createElementVNode)("div",C,(0,o.toDisplayString)(n.locale),1),(0,o.createElementVNode)("div",N,[l.value?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,class:"flex items-baseline text-primary-500 hover:underline",onClick:t[0]||(t[0]=function(){return l.handleEdit&&l.handleEdit.apply(l,arguments)})},[(0,o.createElementVNode)("span",{class:"text-left",innerHTML:l.value.slice(0,100).replace(/<\/?[^>]+>/gi," ")+(l.value.length>100?"...":"")},null,8,E)])):((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:1,class:"flex text-primary-500 underline",onClick:t[1]||(t[1]=function(){return l.handleEdit&&l.handleEdit.apply(l,arguments)})},[(0,o.createElementVNode)("span",_,[(0,o.createVNode)(c,{type:"add"})]),(0,o.createElementVNode)("span",B,(0,o.toDisplayString)(e.__("add translation")),1)]))]),(0,o.createVNode)(c,{class:"ml-2 text-primary-500",type:"edit"})],2))],42,x)}],["__scopeId","data-v-7541c538"]]),"checkbox-input":(0,A.Z)(D,[["render",function(e,t,n,r,a,l){var i=(0,o.resolveComponent)("checkbox-with-label");return(0,o.openBlock)(),(0,o.createBlock)(i,{checked:n.checked,onInput:l.handleToggle},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(n.text),1)]})),_:1},8,["checked","onInput"])}]])},props:{resourceName:{type:String,default:"translation"},singularName:{type:String,default:"translation"}},data:function(){return{initialLoading:!0,translations:null,search:null,groups:[],locales:[],field:null,value:null,config:[],selected:{locales:[],groups:[]},onlyMissing:!1}},computed:{filteredTranslations:function(){var e=this;return this.translations&&this.translations.filter((function(t){var n=t.translations,o=t.updated;return!e.onlyMissing||o||Object.keys(n).length<e.locales.length})).filter((function(t){var n=t.translations;return!e.selected.locales.lentgh||!!e.selected.locales.find((function(e){return!n[e]}))})).filter((function(t){var n=t.group;return!e.selected.groups.length||e.selected.groups.includes(e.normalizeGroup(n))})).filter(this.filterGroup).filter((function(t){if(t){var n=t.key.toString(),o=t.translations;if(e.search){var r=e.selected.locales.length?e.selected.locales:e.locales.map((function(e){return e.locale}));return n.toLowerCase().includes(e.search.toLowerCase())||r.find((function(t){return o[t]&&o[t].toLowerCase&&o[t].toLowerCase().includes(e.search.toLowerCase())}))}return!0}}))},onlyMissingTranslations:function(){return this.translations.filter((function(e){var t=e.translations;return Object.keys(t).length<3}))}},created:function(){this.getTranslations()},methods:{toggleGroups:function(e){this.toggle("groups",e)},toggleLocales:function(e){this.toggle("locales",e)},toggle:function(e,t){"string"!=typeof t?this.selected[e].length===this[e].length?this.selected[e]=[]:this.selected[e]=this[e].map((function(e){return e.locale?e.locale:e})).sort():this.selected[e].includes(t)?this.selected[e]=this.selected[e].filter((function(e){return e!==t})):this.selected[e]=[].concat(G(this.selected[e]),[t]).sort()},normalizeGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("/")[0]},filterGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.group?"single"!==this.normalizeGroup(e.group):"single"!==this.normalizeGroup(e)},getTranslations:function(){var e=this;Nova.request().get("/nova-vendor/translation-manager/translations",{params:{group:this.group,search:this.search}}).then((function(t){var n=t.data,o=n.groups,r=n.languages,a=n.config,l=n.translations;e.groups=o.map(e.normalizeGroup).filter(e.filterGroup).reduce((function(e,t){return e.includes(t)?e:[].concat(G(e),[t])}),[]),e.locales=r,e.config=a,e.translations=l&&l.data})).then(!this.selected.locales.length&&this.toggleLocales).then(!this.selected.groups.length&&this.toggleGroups).then((function(){e.initialLoading=!1}))},updateTranslations:function(e){var t=F(this.field.split(/_([\s\S]*)/),2),n=t[0],o=t[1],r=this.translations.findIndex((function(e){return e.id===n}));this.translations[r].translations[o]=e.value,this.translations[r].updated=o;var a=this.translations.findIndex((function(e){return e.id===n}));this.translations[a].translations[o]=e.value,this.translations[a].updated=o,Nova.success(__("Updated")),this.cancel()},submit:function(e){var t=this;e&&e.value?Nova.request().put("/nova-vendor/translation-manager/translations/",e).then((function(){return t.updateTranslations(e)})).catch((function(e){Nova.error(__("Something went wrong!"))})):(this.field=null,Nova.error(__("A translation string is required")))},cancel:function(){this.field=null}}},Z=(0,A.Z)(U,[["render",function(e,t,n,x,w,C){var N=(0,o.resolveComponent)("Head"),E=(0,o.resolveComponent)("icon"),_=(0,o.resolveComponent)("checkbox-with-label"),B=(0,o.resolveComponent)("dropdown-trigger"),S=(0,o.resolveComponent)("checkbox-input"),V=(0,o.resolveComponent)("dropdown-menu"),T=(0,o.resolveComponent)("dropdown"),A=(0,o.resolveComponent)("editable-input"),O=(0,o.resolveComponent)("card"),L=(0,o.resolveComponent)("loading-view");return(0,o.openBlock)(),(0,o.createBlock)(L,{loading:w.initialLoading},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(N,{class:"mb-3",title:e.__("Translations")},null,8,["title"]),(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",l,[(0,o.createVNode)(E,{type:"search",class:"absolute ml-1 search-icon-center text-70"}),(0,o.createElementVNode)("label",i,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return w.search=e}),placeholder:e.__("Search text"),type:"search",name:"search",class:"shadow appearance-none form-search w-search pl-search p-2 pl-8 rounded-md dark:bg-gray-800"},null,8,c),[[o.vModelText,w.search]])])]),(0,o.createVNode)(_,{checked:w.onlyMissing,class:"mb-6 ml-3",onInput:t[1]||(t[1]=function(e){return w.onlyMissing=!w.onlyMissing})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Only show missing translations")),1)]})),_:1},8,["checked"]),(0,o.createElementVNode)("div",s,[(0,o.createVNode)(T,{class:"mb-6 rounded bg-30 hover:bg-40"},{menu:(0,o.withCtx)((function(){return[(0,o.createVNode)(V,{slot:"menu",direction:"rtl",width:"250"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("ul",d,[(0,o.createElementVNode)("li",f,[(0,o.createVNode)(_,{checked:w.selected.groups.length===w.groups.length,onInput:C.toggleGroups},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Select All")),1)]})),_:1},8,["checked","onInput"])]),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(w.groups,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e,class:"flex items-center mb-4"},[(0,o.createVNode)(S,{value:e,text:e,checked:w.selected.groups.includes(e),"on-toggle":C.toggleGroups},null,8,["value","text","checked","on-toggle"])])})),128))])])]})),_:1})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(B,{class:"px-3"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Select group")),1)]})),_:1})]})),_:1})]),(0,o.createElementVNode)("div",p,[(0,o.createVNode)(T,{class:"mb-6 rounded bg-30 hover:bg-40"},{menu:(0,o.withCtx)((function(){return[(0,o.createVNode)(V,{slot:"menu",direction:"rtl",width:"250"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("ul",g,[(0,o.createElementVNode)("li",m,[(0,o.createVNode)(_,{checked:w.selected.locales.length===w.locales.length,onInput:C.toggleLocales},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Select All")),1)]})),_:1},8,["checked","onInput"])]),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(w.locales,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.locale,class:"flex items-center mb-4"},[(0,o.createVNode)(S,{value:e.locale,text:e.language,checked:w.selected.locales.includes(e.locale),"on-toggle":C.toggleLocales},null,8,["value","text","checked","on-toggle"])])})),128))])])]})),_:1})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(B,{class:"px-3"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Select languages")),1)]})),_:1})]})),_:1})])]),C.filteredTranslations?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:0},(0,o.renderList)(C.filteredTranslations,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(O,{key:e.id,class:"px-4 py-2 my-2"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("div",y,(0,o.toDisplayString)(e.group.toUpperCase())+" - "+(0,o.toDisplayString)(e.key),1)]),w.selected.locales.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",b,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(w.selected.locales.map((function(e){return e})).sort(),(function(t){return(0,o.openBlock)(),(0,o.createBlock)(A,{key:t,locale:t,translation:e,editing:w.field==="".concat(e.id,"_").concat(t),config:w.config,onToggle:function(n){return w.field="".concat(e.id,"_").concat(t)},onSubmit:C.submit,onCancel:C.cancel},null,8,["locale","translation","editing","config","onToggle","onSubmit","onCancel"])})),128))])):((0,o.openBlock)(),(0,o.createElementBlock)("div",k,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(w.locales.map((function(e){return e.locale})).sort(),(function(t){return(0,o.openBlock)(),(0,o.createBlock)(A,{key:t,locale:t,translation:e,editing:w.field==="".concat(e.id,"_").concat(t),onToggle:function(n){return w.field="".concat(e.id,"_").concat(t)},onSubmit:C.submit,onCancel:C.cancel},null,8,["locale","translation","editing","onToggle","onSubmit","onCancel"])})),128))]))]})),_:2},1024)})),128)):(0,o.createCommentVNode)("",!0)])]})),_:1},8,["loading"])}]]);Nova.booting((function(e,t,n){Nova.inertia("nova-translation-manager",Z)}))},387:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"@-webkit-keyframes update-7541c538{0%{background-color:#fff}25%{background-color:#afa}to{background-color:#fff}}@keyframes update-7541c538{0%{background-color:#fff}25%{background-color:#afa}to{background-color:#fff}}.value>svg[data-v-7541c538]{opacity:0;transition-duration:.5s;transition-property:opacity}.value:hover>svg[data-v-7541c538]{opacity:1}.updated[data-v-7541c538]{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:update-7541c538;animation-name:update-7541c538}",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},762:()=>{},379:(e,t,n)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function i(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=i(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(l[d].references++,l[d].updater(f)):l.push({identifier:u,updater:m(f,t),references:1}),o.push(u)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,g=0;function m(e,t){var n,o,r;if(t.singleton){var a=g++;n=h||(h=s(t)),o=f.bind(null,n,a,!1),r=f.bind(null,n,a,!0)}else n=s(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);l[r].references--}for(var a=c(e,t),s=0;s<n.length;s++){var u=i(n[s]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}n=a}}}},744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],i=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,i,c]=n,s=0;if(l.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var u=c(o)}for(t&&t(n);s<l.length;s++)a=l[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunkstatikbe_laravel_nova_chained_translation_manager=self.webpackChunkstatikbe_laravel_nova_chained_translation_manager||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0,o.O(void 0,[990],(()=>o(342)));var r=o.O(void 0,[990],(()=>o(762)));r=o.O(r)})();