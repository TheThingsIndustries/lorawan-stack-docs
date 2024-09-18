/*! Bundled license information:

@ttui/design/ui/ttui-vendor.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/(()=>{(self.webpackChunk_tti_design=self.webpackChunk_tti_design||[]).push([[936],{9764:e=>{!function(e,t,n,s,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);i=n.AWAITING_WEB_COMPONENTS_POLYFILL=c(),i.then(o);var i,r=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",l=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?a(r).then(function(){i.isDone=!0,i.exec()}):a(l).then(function(){a(r).then(function(){i.isDone=!0,i.exec()})})}function c(){var e=[];return e.isDone=!1,e.exec=function(){e.splice(0).forEach(function(e){e()})},e.then=function(t){return e.isDone?t():e.push(t),e},e}function a(e){var n=c(),t=s.createElement("script");return t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,n.isDone=!0,n.exec())}:t.onload=function(){n.isDone=!0,n.exec()},t.src=e,s.getElementsByTagName("head")[0].appendChild(t),t.then=n.then,t}}(0,0,window,document,function(){var n=window,t=function(){return function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var o,i,a,s=e[1]||"",n=e[3];return n?t&&"function"==typeof btoa?(i=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}),[s].concat(a).concat([i]).join(`
`)):[s].join(`
`):s}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s,i,a={},o=0;o<this.length;o++)i=this[o][0],"number"==typeof i&&(a[i]=!0);for(o=0;o<e.length;o++)s=e[o],"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))},t}},function(e,t,n){var s=n(3);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){var s=n(4);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(e,t,n){"use strict";n.r(t),n.d(t,"BoxIconElement",function(){return i});var o,i,a,d,u,m=n(1),b=n.n(m),v=n(2),g=n.n(v),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),f=(a=(u=Object).getPrototypeOf||function(e){return e.__proto__},o=u.setPrototypeOf||function(e,t){return e.__proto__=t,e},d="object"===("undefined"==typeof Reflect?"undefined":p(Reflect))?Reflect.construct:function(e,t,n){var i,s=[null];return s.push.apply(s,t),i=e.bind.apply(e,s),o(new i,n.prototype)},function(e){var t=a(e);return o(e,o(function(){return d(t,arguments,a(this).constructor)},t))}),s=window,l={},c=document.createElement("template"),r=function(){return!!s.ShadyCSS};c.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+b.a+`
`+g.a+`
</style>
<div id="icon"></div>`,i=f(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.$ui=e.attachShadow({mode:"open"}),e.$ui.appendChild(e.ownerDocument.importNode(c.content,!0)),r()&&s.ShadyCSS.styleElement(e),e._state={$iconHolder:e.$ui.getElementById("icon"),type:e.getAttribute("type")},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),h(t,null,[{key:"getIconSvg",value:function(e,t){var n=this.cdnUrl+"/regular/bx-"+e+".svg";return"solid"===t?n=this.cdnUrl+"/solid/bxs-"+e+".svg":"logo"===t&&(n=this.cdnUrl+"/logos/bxl-"+e+".svg"),n&&l[n]||(l[n]=new Promise(function(e,t){var s=new XMLHttpRequest;s.addEventListener("load",function(){this.status<200||this.status>=300?t(new Error(this.status+" "+this.responseText)):e(this.responseText)}),s.onerror=t,s.onabort=t,s.open("GET",n),s.send()})),l[n]}},{key:"define",value:function(e){e=e||this.tagName,r()&&s.ShadyCSS.prepareTemplate(c,e),customElements.define(e,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),h(t,[{key:"attributeChangedCallback",value:function(e,t,n){var s=this._state.$iconHolder;switch(e){case"type":!function(e,t,n){var s=e._state;s.$iconHolder.textContent="",s.type&&(s.type=null),s.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==s.currentName&&e.constructor.getIconSvg(s.currentName,s.type).then(function(e){s.type===n&&(s.$iconHolder.innerHTML=e)}).catch(function(e){console.error("Failed to load icon: "+s.currentName+`
`+e)})}(this,0,n);break;case"name":!function(e,t,n){var s=e._state;s.currentName=n,s.$iconHolder.textContent="",n&&void 0!==s.type&&e.constructor.getIconSvg(n,s.type).then(function(e){s.currentName===n&&(s.$iconHolder.innerHTML=e)}).catch(function(e){console.error("Failed to load icon: "+n+`
`+e)})}(this,0,n);break;case"color":s.style.fill=n||"";break;case"size":!function(e,t,n){var s=e._state;s.size&&(s.$iconHolder.style.width=s.$iconHolder.style.height="",s.size=s.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(s.size)&&(s.size=n.trim(),s.$iconHolder.style.width=s.$iconHolder.style.height=s.size)}(this,0,n);break;case"rotate":t&&s.classList.remove("bx-rotate-"+t),n&&s.classList.add("bx-rotate-"+n);break;case"flip":t&&s.classList.remove("bx-flip-"+t),n&&s.classList.add("bx-flip-"+n);break;case"animation":t&&s.classList.remove("bx-"+t),n&&s.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){r()&&s.ShadyCSS.styleElement(this)}}]),t}()),t.default=i,i.define()}])};e.exports=t()})},2875:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var o=n(5500),i=n.n(o),a=n(2312),r=n.n(a),s=r()(i());s.push([e.id,`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,""]);const c=72!=n.j?s:null},7976:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var o=n(5500),i=n.n(o),a=n(2312),r=n.n(a),s=r()(i());s.push([e.id,`/**
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * 1. Prevent padding and border from affecting element width
 *    https://goo.gl/pYtbK7.
 * 2. Change the default font family in all browsers (opinionated).
 */

html {
  box-sizing: border-box; /* 1 */
  font-family: sans-serif; /* 2 */
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  border: 0;
  padding: 0;
}

/**
 * Work around a Firefox/IE bug where the transparent \`button\` background
 * results in a loss of the default \`button\` focus styles.
 */

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

iframe {
  border: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`,""]);const c=72!=n.j?s:null},2312:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n="",s=typeof t[5]!="undefined";return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n}).join("")},t.i=function(n,s,o,i,a){typeof n=="string"&&(n=[[null,n,void 0]]);var r,c,l,d,u={};if(o)for(c=0;c<this.length;c++)d=this[c][0],d!=null&&(u[d]=!0);for(l=0;l<n.length;l++){if(r=[].concat(n[l]),o&&u[r[0]])continue;typeof a!="undefined"&&(typeof r[5]=="undefined"?r[5]=a:(r[1]="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {").concat(r[1],"}"),r[5]=a)),s&&(r[2]?(r[1]="@media ".concat(r[2]," {").concat(r[1],"}"),r[2]=s):r[2]=s),i&&(r[4]?(r[1]="@supports (".concat(r[4],") {").concat(r[1],"}"),r[4]=i):r[4]="".concat(i)),t.push(r)}},t}},7536:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e&&(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,`\\n`),'"'):e)}},5500:e=>{"use strict";e.exports=function(e){return e[1]}},1500:(e,t,n)=>{"use strict";n.d(t,{WW:()=>s.WW,kP:()=>s.kP,oH:()=>i.oH,sR:()=>o.sR});var o=n(5108),s=n(9707),i=n(7952)},7952:(e,t,n)=>{"use strict";n.d(t,{kP:()=>o.kP,oH:()=>s});var i=n(5108),o=n(9707);class s extends i.i6{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,o.ai)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return o.Kg}}s._$litElement$=!0,s["finalized","finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const a=globalThis.litElementPolyfillSupport;a?.({LitElement:s});const r={_$AK:(e,t,n)=>{e._$AK(t,n)},_$AL:e=>e._$AL};(globalThis.litElementVersions??=[]).push("4.0.4")},5108:(e,t,n)=>{"use strict";n.d(t,{i6:()=>s,sR:()=>f});const a=globalThis,c=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),d=new WeakMap;class p{constructor(e,t,n){if(this._$cssResult$=!0,n!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(c&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&d.set(t,e))}return e}toString(){return this.cssText}}const f=e=>new p("string"==typeof e?e:e+"",void 0,l),E=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new p(n,e,l)},C=(e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const n=document.createElement("style"),s=a.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=o.cssText,e.appendChild(n)}},u=c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return f(t)})(e):e,{is:x,defineProperty:O,getOwnPropertyDescriptor:w,getOwnPropertyNames:_,getOwnPropertySymbols:j,getPrototypeOf:b}=Object,i=globalThis,g=i.trustedTypes,y=g?g.emptyScript:"",v=i.reactiveElementPolyfillSupport,o=(e)=>e,r={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!x(e,t),m={attribute:!0,type:String,converter:r,reflect:!1,hasChanged:h};Symbol.metadata??=Symbol("metadata"),i.litPropertyMetadata??=new WeakMap;class s extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);void 0!==n&&O(this.prototype,e,n)}}static getPropertyDescriptor(e,t,n){const{get:s,set:o}=w(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const i=s?.call(this);o.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??m}static _$Ei(){if(this.hasOwnProperty(o("elementProperties")))return;const e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(o("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(o("properties"))){const e=this.properties,t=[..._(e),...j(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const t=this._$Eu(e,n);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(void 0!==s&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:r).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const s=this.constructor,n=s._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=s.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:r;this._$Em=n,this[n]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??h)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(){return!0}update(){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(){}firstUpdated(){}}s.elementStyles=[],s.shadowRootOptions={mode:"open"},s[o("elementProperties")]=new Map,s[o("finalized")]=new Map,v?.({ReactiveElement:s}),(i.reactiveElementVersions??=[]).push("2.0.4")},9707:(e,t,n)=>{"use strict";n.d(t,{Kg:()=>l,WW:()=>H,ai:()=>V,kP:()=>I});const v=globalThis,g=v.trustedTypes,L=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,y="$lit$",o=`lit$${(Math.random()+"").slice(9)}$`,b="?"+o,P=`<${b}>`,i=document,d=()=>i.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_=Array.isArray,z=e=>_(e)||"function"==typeof e?.[Symbol.iterator],j=`[ 	
\r]`,m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,S=/>/g,a=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,E=/"/g,T=/^(?:script|style|textarea|title)$/i,O=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),I=O(1),H=O(2),l=Symbol.for("lit-noChange"),s=Symbol.for("lit-nothing"),A=new WeakMap,r=i.createTreeWalker(i,129);function M(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(t):t}const F=(e,t)=>{const i=e.length-1,r=[];let s,c=2===t?"<svg>":"",n=m;for(let u=0;u<i;u++){const d=e[u];let f,t,l=-1,h=0;for(;h<d.length&&(n.lastIndex=h,t=n.exec(d),null!==t);)h=n.lastIndex,n===m?"!--"===t[1]?n=w:void 0!==t[1]?n=S:void 0!==t[2]?(T.test(t[2])&&(s=RegExp("</"+t[2],"g")),n=a):void 0!==t[3]&&(n=a):n===a?">"===t[0]?(n=s??m,l=-1):void 0===t[1]?l=-2:(l=n.lastIndex-t[2].length,f=t[1],n=void 0===t[3]?a:'"'===t[3]?E:k):n===E||n===k?n=a:n===w||n===S?n=m:(n=a,s=void 0);const p=n===a&&e[u+1].startsWith("/>")?" ":"";c+=n===m?d+P:l>=0?(r.push(f),d.slice(0,l)+y+d.slice(l)+o+p):d+o+(-2===l?u:p)}return[M(e,c+(e[i]||"<?>")+(2===t?"</svg>":"")),r]};class p{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let i=0,c=0;const l=e.length-1,a=this.parts,[u,h]=F(e,t);if(this.el=p.createElement(u,n),r.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=r.nextNode())&&a.length<l;){if(1===s.nodeType){{if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(y)){const n=h[c++],r=s.getAttribute(e).split(o),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:t[2],strings:r,ctor:"."===t[1]?R:"?"===t[1]?N:"@"===t[1]?C:f}),s.removeAttribute(e)}else e.startsWith(o)&&(a.push({type:6,index:i}),s.removeAttribute(e));if(T.test(s.tagName)){const e=s.textContent.split(o),t=e.length-1;if(t>0){s.textContent=g?g.emptyScript:"";for(let n=0;n<t;n++)s.append(e[n],d()),r.nextNode(),a.push({type:2,index:++i});s.append(e[t],d())}}}}else if(8===s.nodeType)if(s.data===b)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=s.data.indexOf(o,e+1));)a.push({type:7,index:i}),e+=o.length-1}i++}}static createElement(e){const n=i.createElement("template");return n.innerHTML=e,n}}function c(e,t,n=e,s){if(t===l)return t;let o=void 0!==s?n._$Co?.[s]:n._$Cl;const i=h(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,n,s)),void 0!==s?(n._$Co??=[])[s]=o:n._$Cl=o),void 0!==o&&(t=c(e,o._$AS(e,t.values),o,s)),t}class D{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:c},parts:o}=this._$AD,a=(e?.creationScope??i).importNode(c,!0);r.currentNode=a;let n=r.nextNode(),s=0,l=0,t=o[0];for(;void 0!==t;){if(s===t.index){let s;2===t.type?s=new u(n,n.nextSibling,this,e):1===t.type?s=new t.ctor(n,t.name,t.strings,this,e):6===t.type&&(s=new x(n,this,e)),this._$AV.push(s),t=o[++l]}s!==t?.index&&(n=r.nextNode(),s++)}return r.currentNode=i,a}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class u{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=s,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=c(this,e,t),h(e)?e===s||e==null||""===e?(this._$AH!==s&&this._$AR(),this._$AH=s):e!==this._$AH&&e!==l&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):z(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==s&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(i.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:t}=e,s="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=p.createElement(M(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===s)this._$AH.p(n);else{const e=new D(s,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new p(e)),t}k(e){_(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,t=0;for(const o of e)t===n.length?n.push(s=new u(this.S(d()),this.S(d()),this,this.options)):s=n[t],s._$AI(o),t++;t<n.length&&(this._$AR(s&&s._$AB.nextSibling,t),n.length=t)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class f{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=s,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=s}_$AI(e,t=this,n,o){const i=this.strings;let a=!1;if(void 0===i)e=c(this,e,t,0),a=!h(e)||e!==this._$AH&&e!==l,a&&(this._$AH=e);else{const d=e;let o,r;for(e=i[0],o=0;o<i.length-1;o++)r=c(this,d[n+o],t,o),r===l&&(r=this._$AH[o]),a||=!h(r)||r!==this._$AH[o],r===s?e=s:e!==s&&(e+=(r??"")+i[o+1]),this._$AH[o]=r}a&&!o&&this.j(e)}j(e){e===s?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class R extends f{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===s?void 0:e}}class N extends f{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==s)}}class C extends f{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=c(this,e,t,0)??s)===l)return;const n=this._$AH,o=e===s&&n!==s||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==s&&(n===s||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class x{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){c(this,e)}}const $={P:y,A:o,C:b,M:1,L:F,R:D,D:z,V:c,I:u,H:f,N,U:C,B:R,F:x},B=v.litHtmlPolyfillSupport;B?.(p,u),(v.litHtmlVersions??=[]).push("3.1.2");const V=(e,t,n)=>{const o=n?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=n?.renderBefore??null;o._$litPart$=s=new u(t.insertBefore(d(),e),e,void 0,n??{})}return s._$AI(e),s}},7948:(e,t,n)=>{"use strict";n.d(t,{m:()=>i});var o=n(6700),s=n(7960);const i=(0,s.E$)(class extends s.QN{constructor(e){if(super(e),e.type!==s.sZ.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const s=!!t[e];s===this.st.has(e)||this.nt?.has(e)||(s?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return o.Kg}})},40:(e,t,n)=>{"use strict";n.d(t,{C:()=>r});var i=n(6700),s=n(7960);const o="important",a=" !"+o,r=(0,s.E$)(class extends s.QN{constructor(e){if(super(e),e.type!==s.sZ.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const s=e[n];return s==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const s in t){const e=t[s];if(e!=null){this.ft.add(s);const t="string"==typeof e&&e.endsWith(a);s.includes("-")||t?n.setProperty(s,t?e.slice(0,-11):e,t?o:""):n[s]=e}}return i.Kg}})},7200:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var s=n(6700),o=n(7960);class i extends o.QN{constructor(e){if(super(e),this.it=s.qs,e.type!==o.sZ.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===s.qs||e==null)return this._t=void 0,this.it=e;if(e===s.Kg)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;const a=(0,o.E$)(i)},4920:(e,t,n)=>{"use strict";n.d(t,{oH:()=>f.oH,kP:()=>f.kP});const a=globalThis,c=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),d=new WeakMap;class p{constructor(e,t,n){if(this._$cssResult$=!0,n!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(c&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&d.set(t,e))}return e}toString(){return this.cssText}}const E=e=>new p("string"==typeof e?e:e+"",void 0,l),k=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new p(n,e,l)},C=(e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const n=document.createElement("style"),s=a.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=o.cssText,e.appendChild(n)}},u=c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return E(t)})(e):e,{is:x,defineProperty:O,getOwnPropertyDescriptor:w,getOwnPropertyNames:_,getOwnPropertySymbols:j,getPrototypeOf:b}=Object,i=globalThis,g=i.trustedTypes,y=g?g.emptyScript:"",v=i.reactiveElementPolyfillSupport,s=(e)=>e,r={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!x(e,t),m={attribute:!0,type:String,converter:r,reflect:!1,hasChanged:h};Symbol.metadata??=Symbol("metadata"),i.litPropertyMetadata??=new WeakMap;class o extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);void 0!==n&&O(this.prototype,e,n)}}static getPropertyDescriptor(e,t,n){const{get:s,set:o}=w(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const i=s?.call(this);o.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??m}static _$Ei(){if(this.hasOwnProperty(s("elementProperties")))return;const e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(s("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(s("properties"))){const e=this.properties,t=[..._(e),...j(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const t=this._$Eu(e,n);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(void 0!==s&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:r).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const s=this.constructor,n=s._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=s.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:r;this._$Em=n,this[n]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??h)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(){return!0}update(){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(){}firstUpdated(){}}o.elementStyles=[],o.shadowRootOptions={mode:"open"},o[s("elementProperties")]=new Map,o[s("finalized")]=new Map,v?.({ReactiveElement:o}),(i.reactiveElementVersions??=[]).push("2.0.4");var A=n(6700),f=n(7952)},7960:(e,t,n)=>{"use strict";n.d(t,{E$:()=>o,QN:()=>i,sZ:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class i{constructor(){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},6700:(e,t,n)=>{"use strict";n.d(t,{Kg:()=>l,qs:()=>s});const v=globalThis,g=v.trustedTypes,L=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,y="$lit$",o=`lit$${(Math.random()+"").slice(9)}$`,b="?"+o,P=`<${b}>`,i=document,d=()=>i.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_=Array.isArray,z=e=>_(e)||"function"==typeof e?.[Symbol.iterator],j=`[ 	
\r]`,m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,S=/>/g,a=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,E=/"/g,T=/^(?:script|style|textarea|title)$/i,O=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),B=O(1),I=O(2),l=Symbol.for("lit-noChange"),s=Symbol.for("lit-nothing"),A=new WeakMap,r=i.createTreeWalker(i,129);function M(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(t):t}const F=(e,t)=>{const i=e.length-1,r=[];let s,c=2===t?"<svg>":"",n=m;for(let u=0;u<i;u++){const d=e[u];let f,t,l=-1,h=0;for(;h<d.length&&(n.lastIndex=h,t=n.exec(d),null!==t);)h=n.lastIndex,n===m?"!--"===t[1]?n=w:void 0!==t[1]?n=S:void 0!==t[2]?(T.test(t[2])&&(s=RegExp("</"+t[2],"g")),n=a):void 0!==t[3]&&(n=a):n===a?">"===t[0]?(n=s??m,l=-1):void 0===t[1]?l=-2:(l=n.lastIndex-t[2].length,f=t[1],n=void 0===t[3]?a:'"'===t[3]?E:k):n===E||n===k?n=a:n===w||n===S?n=m:(n=a,s=void 0);const p=n===a&&e[u+1].startsWith("/>")?" ":"";c+=n===m?d+P:l>=0?(r.push(f),d.slice(0,l)+y+d.slice(l)+o+p):d+o+(-2===l?u:p)}return[M(e,c+(e[i]||"<?>")+(2===t?"</svg>":"")),r]};class p{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let i=0,c=0;const l=e.length-1,a=this.parts,[u,h]=F(e,t);if(this.el=p.createElement(u,n),r.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=r.nextNode())&&a.length<l;){if(1===s.nodeType){{if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(y)){const n=h[c++],r=s.getAttribute(e).split(o),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:t[2],strings:r,ctor:"."===t[1]?R:"?"===t[1]?N:"@"===t[1]?C:f}),s.removeAttribute(e)}else e.startsWith(o)&&(a.push({type:6,index:i}),s.removeAttribute(e));if(T.test(s.tagName)){const e=s.textContent.split(o),t=e.length-1;if(t>0){s.textContent=g?g.emptyScript:"";for(let n=0;n<t;n++)s.append(e[n],d()),r.nextNode(),a.push({type:2,index:++i});s.append(e[t],d())}}}}else if(8===s.nodeType)if(s.data===b)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=s.data.indexOf(o,e+1));)a.push({type:7,index:i}),e+=o.length-1}i++}}static createElement(e){const n=i.createElement("template");return n.innerHTML=e,n}}function c(e,t,n=e,s){if(t===l)return t;let o=void 0!==s?n._$Co?.[s]:n._$Cl;const i=h(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,n,s)),void 0!==s?(n._$Co??=[])[s]=o:n._$Cl=o),void 0!==o&&(t=c(e,o._$AS(e,t.values),o,s)),t}class D{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:c},parts:o}=this._$AD,a=(e?.creationScope??i).importNode(c,!0);r.currentNode=a;let n=r.nextNode(),s=0,l=0,t=o[0];for(;void 0!==t;){if(s===t.index){let s;2===t.type?s=new u(n,n.nextSibling,this,e):1===t.type?s=new t.ctor(n,t.name,t.strings,this,e):6===t.type&&(s=new x(n,this,e)),this._$AV.push(s),t=o[++l]}s!==t?.index&&(n=r.nextNode(),s++)}return r.currentNode=i,a}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class u{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=s,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=c(this,e,t),h(e)?e===s||e==null||""===e?(this._$AH!==s&&this._$AR(),this._$AH=s):e!==this._$AH&&e!==l&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):z(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==s&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(i.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:t}=e,s="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=p.createElement(M(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===s)this._$AH.p(n);else{const e=new D(s,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new p(e)),t}k(e){_(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,t=0;for(const o of e)t===n.length?n.push(s=new u(this.S(d()),this.S(d()),this,this.options)):s=n[t],s._$AI(o),t++;t<n.length&&(this._$AR(s&&s._$AB.nextSibling,t),n.length=t)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class f{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=s,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=s}_$AI(e,t=this,n,o){const i=this.strings;let a=!1;if(void 0===i)e=c(this,e,t,0),a=!h(e)||e!==this._$AH&&e!==l,a&&(this._$AH=e);else{const d=e;let o,r;for(e=i[0],o=0;o<i.length-1;o++)r=c(this,d[n+o],t,o),r===l&&(r=this._$AH[o]),a||=!h(r)||r!==this._$AH[o],r===s?e=s:e!==s&&(e+=(r??"")+i[o+1]),this._$AH[o]=r}a&&!o&&this.j(e)}j(e){e===s?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class R extends f{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===s?void 0:e}}class N extends f{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==s)}}class C extends f{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=c(this,e,t,0)??s)===l)return;const n=this._$AH,o=e===s&&n!==s||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==s&&(n===s||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class x{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){c(this,e)}}const V={P:y,A:o,C:b,M:1,L:F,R:D,D:z,V:c,I:u,H:f,N,U:C,B:R,F:x},H=v.litHtmlPolyfillSupport;H?.(p,u),(v.litHtmlVersions??=[]).push("3.1.2");const $=(e,t,n)=>{const o=n?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=n?.renderBefore??null;o._$litPart$=s=new u(t.insertBefore(d(),e),e,void 0,n??{})}return s._$AI(e),s}}}]),(()=>{"use strict";var e={}})(),(()=>{"use strict";var t,n={8924:(e,t,n)=>{var s=n(1500),o=n(7948),i=n(9076);class a extends s.oH{static get styles(){return(0,s.sR)(i.c.toString())}static get properties(){return{heading:{type:String,attribute:"heading"},subtitle:{type:String,attribute:"subtitle"}}}constructor(){super(),this.heading="",this.subtitle=""}render(){return(0,s.kP)`
      <header
        class=${(0,o.m)({"heading-expanded":!0})}
      >
        <div class="heading-expanded__img"><slot name="heading-expanded__img"></slot></div>
        <h3 class="ttui-body ttui-body--s ttui-body--bold heading-expanded__subheading">
          ${this.subtitle}
        </h3>
        <h2 class="ttui-title heading-expanded__title">${this.heading}</h2>
        <p class="ttui-body ttui-body--l heading-expanded__text">
          <slot name="heading-expanded__text"></slot>
        </p>
        <div class="heading-expanded__cta">
          <slot name="heading-expanded__link--primary"></slot>
          <slot name="heading-expanded__link--secondary"></slot>
        </div>
      </header>
    `}}window.customElements.define("ttui-heading-expanded",a)},9076:(e,t,n)=>{n.d(t,{c:()=>d});var o=n(5500),i=n.n(o),a=n(2312),r=n.n(a),c=n(2875),l=n(7976),s=r()(i());s.i(c.c),s.i(l.c),s.push([e.id,`a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}html:not(.ttui-disable-typography),html .ttui-docs-overwrites{font-size:15px;height:100%;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';line-height:var(--lh-m)}@media screen and (max-width:620px){html:not(.ttui-disable-typography),html .ttui-docs-overwrites{font-size:14px}}html:not(.ttui-disable-typography):not(.ttui-disable-font-smoothing),html .ttui-docs-overwrites:not(.ttui-disable-font-smoothing){-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1,h2,h3,h4,h5{font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}h1{font-size:var(--fs-xl3);line-height:var(--lh-xs);letter-spacing:var(--lsp-s)}h2{font-size:var(--fs-xxl);line-height:var(--lh-xs);letter-spacing:var(--lsp-s)}h3{font-size:var(--fs-l);line-height:var(--lh-s);letter-spacing:var(--lsp-s)}h4{font-size:var(--fs-m);line-height:var(--lh-s);letter-spacing:var(--lsp-s)}h5{font-size:var(--fs-s);line-height:var(--lh-m);letter-spacing:var(--lsp-s)}p{line-height:var(--lh-s);letter-spacing:var(--lsp-m)}.ttui-title{font-style:normal;margin:0;$color:var(--c-text-01);font-family:'ITC Avant Garde Pro';font-weight:var(--fw-bold);font-size:var(--fs-xl3);line-height:var(--lh-xs);letter-spacing:var(--lsp-s)}.ttui-title--xxl{font-size:var(--fs-xxl)}.ttui-title--invert{color:var(--c-text-06)}.ttui-header{font-style:normal;margin:0}.ttui-header--m{font-family:'Inter';font-weight:var(--fw-normal);font-size:var(--fs-xl);letter-spacing:var(--lsp-m);color:var(--c-text-01);line-height:var(--lh-s)}.ttui-header--s{font-family:'Inter';font-weight:var(--fw-bold);font-size:var(--fs-s);letter-spacing:var(--lsp-m);color:var(--c-text-02);line-height:var(--lh-s)}.ttui-header--invert{color:var(--c-text-06)}.ttui-body{font-family:'Inter';font-style:normal;font-weight:var(--fw-normal);letter-spacing:var(--lsp-m);color:var(--c-text-03);line-height:var(--lh-s)}.ttui-body--l{font-size:var(--fs-l)}.ttui-body--m{font-size:var(--fs-m)}.ttui-body--s{font-size:var(--fs-s)}.ttui-body--xs{font-size:var(--fs-xs)}.ttui-body--invert{color:var(--c-text-06)}.ttui-body--light{font-weight:var(--fw-light)}.ttui-body--bold{font-weight:var(--fw-bold)}.heading-expanded__subheading{color:var(--c-text-02);margin:0}.heading-expanded__title{margin:var(--cs-s) 0}.heading-expanded__text{margin:0 0 var(--cs-xl)}.heading-expanded__text ::slotted(*){margin:0 0 var(--cs-xl)}.heading-expanded__img{margin:0 0 var(--cs-xxs);width:10rem}.heading-expanded__img ::slotted(*){height:auto;max-width:100%}.heading-expanded__cta{margin:var(--cs-s) var(--cs-m) var(--cs-s) 0}@media screen and (max-width:620px){.heading-expanded__cta{margin:0 0 var(--cs-m);width:100%}}.heading-expanded__cta ::slotted(a),.heading-expanded__cta ::slotted(button){display:inline-block;margin-right:var(--cs-s)}`,""]);const d=s}},s={};function e(t){var o,i=s[t];return i!==void 0?i.exports:(o=s[t]={id:t,exports:{}},n[t](o,o.exports,e),o.exports)}e.m=n,(()=>{var t=[];e.O=(n,s,o,i)=>{if(s){i=i||0;for(a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[s,o,i];return}for(c=1/0,a=0;a<t.length;a++){for(var[s,o,i]=t[a],a,c,d,l=!0,r=0;r<s.length;r++)(i&!1||c>=i)&&Object.keys(e.O).every(t=>e.O[t](s[r]))?s.splice(r--,1):(l=!1,i<c&&(c=i));l&&(t.splice(a--,1),d=o(),d!==void 0&&(n=d))}return n}})(),(()=>{e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n}})(),(()=>{e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})}})(),(()=>{e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{e.j=200})(),(()=>{var n,s,t={200:0};e.O.j=e=>t[e]===0,s=(n,s)=>{var[i,a,l]=s,o,r,d,c=0;if(i.some(e=>t[e]!==0)){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);l&&(d=l(e))}for(n&&n(s);c<i.length;c++)o=i[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},n=self.webpackChunk_tti_design=self.webpackChunk_tti_design||[],n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))})(),t=e.O(void 0,[936],()=>e(8924)),t=e.O(t)})();function e(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})})}function t(){var n={};function o(e){const t=e.closest(".tab-content");if(t){const t=e.parentElement,s=t.getAttribute("data-content");n[e.id]=s}}function i(e){e.insertAdjacentHTML("beforeend",`<a class="header-hash" href="#${e.id}" ariaLabel="Anchor">#</a>`)}function a(){var e=document.querySelectorAll(".docs-content h2[id], .docs-content h3[id], .docs-content h4[id], .docs-content h5[id], .docs-content h6[id]");e&&(e.forEach(i),e.forEach(o))}function s(){const o=window.location.hash,e=window.location.hash.substring(1),s=n[e];t(s),document.getElementById(e).scrollIntoView()}function r(){if("onhashchange"in window)window.onhashchange=function(){s(window.location.hash)};else{var e=window.location.hash;window.setInterval(function(){window.location.hash!=e&&(e=window.location.hash,s(e))},1e3)}}function t(t){const n="is-active";function o(e){return[...document.querySelectorAll(`[data-tab="${e}"]`)]}let s=o(t);return s.length!==0&&(e.forEach(e=>{e&&e.classList.contains(n)&&e.classList.remove(n)}),s.forEach(e=>{e.classList.add(n)}),c.forEach(e=>{e&&e.classList.contains(n)&&e.classList.remove(n);let s=e.getAttribute("data-content");s===t&&e.classList.add(n)}),window.sessionStorage&&window.sessionStorage.setItem("tabActive",t),!0)}const e=document.querySelectorAll(".tabs li"),c=document.querySelectorAll(".tab-content section");function l(){if(e.length===0)return;function n(e){e.preventDefault();let n=e.currentTarget,s=n.getAttribute("data-tab");t(s)}if(window.sessionStorage.getItem("tabActive")){{const n=t(window.sessionStorage.getItem("tabActive"));if(n===!1){let n=e[0].getAttribute("data-tab");t(n)}}}else if(e&&e[0]){let n=e[0].getAttribute("data-tab");t(n)}e.forEach(e=>{e.addEventListener("click",n)})}a(),l(),r()}function n(){document.querySelectorAll("figure").forEach(e=>{e.addEventListener("click",e=>{basicLightbox.create(`<img src="${e.target.src}" alt="${e.target.alt}" />`).show()})})}document.addEventListener("DOMContentLoaded",function(){e(),t(),n()})})()