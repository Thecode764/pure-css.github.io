(self.webpackChunkpure=self.webpackChunkpure||[]).push([[85],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return u},I:function(){return c}});var r=n(7294),o=/{\w+}/g,a="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var l=r.isValidElement(i)?i:String(i);return n.push(l),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}var l=n(4644);function s(e){var t,n,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(n=null!==(t=l[null!=r?r:o])&&void 0!==t?t:o)&&void 0!==n?n:r}function c(e,t){return i(s({message:e.message,id:e.id}),t)}function u(e){var t=e.children,n=e.id,r=e.values;if(t&&"string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");return i(s({message:t,id:n}),r)}},8143:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(3727)},1321:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return a},usePluginData:function(){return i}});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function i(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!(0,r.matchPath)(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return a};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=(0,t.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,a,i=(0,t.getActiveVersion)(e,n),l=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:l,alternateDocVersions:l?(o=l.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}};t.getDocVersionSuggestions=function(e,n){var r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,t,n){"use strict";t.gA=t.zh=t._r=void 0;var r=n(655),o=n(8143),a=(0,r.__importStar)(n(1321)),i=n(8408),l={};t._r=function(){var e;return null!==(e=(0,a.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:l};t.zh=function(e){return(0,a.usePluginData)("docusaurus-plugin-content-docs",e)};t.gA=function(e){void 0===e&&(e={});var n=(0,t._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(n,r,e)}},5151:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ve}});var r=n(7294);function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function a(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}var i=n(3947),l=n(3905),s=n(2122),c=n(9756),u=n(9105),d=n(6742),f={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(7410).default,theme:f};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var v=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=g({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=g({},n,{backgroundColor:null}),o};function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var E=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),m(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=g({},k(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?g({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),m(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),m(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=g({},k(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?g({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),m(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,l=[],s=[l];i>-1;){for(;(a=r[i]++)<o[i];){var c=void 0,u=t[i],d=n[i][a];if("string"==typeof d?(u=i>0?u:["plain"],c=d):(u=y(u,d.type),d.alias&&(u=y(u,d.alias)),c=d.content),"string"==typeof c){var f=c.split(v),p=f.length;l.push({types:u,content:f[0]});for(var m=1;m<p;m++)h(l),s.push(l=[]),l.push({types:u,content:f[m]})}else i++,t.push(u),n.push(c),r.push(0),o.push(c.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return h(l),s}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),w=E;var N=n(7594),x=n.n(N),L={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},C=r.createContext(void 0);var P=function(){var e=(0,r.useContext)(C);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e},O=n(2263);function j(){return(0,O.Z)().siteConfig.themeConfig}var T="localStorage";function D(e){if(void 0===e&&(e=T),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,S||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),S=!0),null}var t}var S=!1;var _={get:function(){return null},set:function(){},del:function(){}};var A=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=D(null==t?void 0:t.persistence);return null===n?_:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};var H=/title=(["'])(.*?)\1/;n(6730)._r;var R=["zero","one","two","few","many","other"];function Z(e){return R.filter((function(t){return e.includes(t)}))}Z(["one","other"]);"undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var B=n(412),I=["collapsed"],V=["lazy"];var M={display:"none",overflow:"hidden",height:"0px"},z={display:"block",overflow:"visible",height:"auto"};function F(e,t){var n=t?M:z;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function U(e){var t=e.collapsibleRef,n=e.collapsed,o=e.animation,a=(0,r.useRef)(!1);(0,r.useEffect)((function(){var e,r=t.current;function i(){var e,t,n=r.scrollHeight,a=null!==(e=null==o?void 0:o.duration)&&void 0!==e?e:function(e){var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n);return{transition:"height "+a+"ms "+(null!==(t=null==o?void 0:o.easing)&&void 0!==t?t:"ease-in-out"),height:n+"px"}}function l(){var e=i();r.style.transition=e.transition,r.style.height=e.height}if(!a.current)return F(r,n),void(a.current=!0);return r.style.willChange="height",e=requestAnimationFrame((function(){n?(l(),requestAnimationFrame((function(){r.style.height=M.height,r.style.overflow=M.overflow}))):(r.style.display="block",requestAnimationFrame((function(){l()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,o])}function q(e){if(!B.default.canUseDOM)return e?M:z}function W(e){var t=e.as,n=void 0===t?"div":t,o=e.collapsed,a=e.children,i=e.animation,l=e.onCollapseTransitionEnd,s=e.className,c=e.disableSSRStyle,u=(0,r.useRef)(null);return U({collapsibleRef:u,collapsed:o,animation:i}),r.createElement(n,{ref:u,style:c?void 0:q(o),onTransitionEnd:function(e){"height"===e.propertyName&&(F(u.current,o),null==l||l(o))},className:s},a)}function $(e){var t=e.collapsed,n=(0,c.Z)(e,I),o=(0,r.useState)(!t),a=o[0],i=o[1];(0,r.useLayoutEffect)((function(){t||i(!0)}),[t]);var l=(0,r.useState)(t),s=l[0],u=l[1];return(0,r.useLayoutEffect)((function(){a&&u(t)}),[a,t]),a?r.createElement(W,Object.assign({},n,{collapsed:s})):null}function G(e){var t=e.lazy,n=(0,c.Z)(e,V),o=t?$:W;return r.createElement(o,Object.assign({},n))}var K=n(9913);var X="details_2Ziz",Y="isBrowser_2j9b",J="collapsibleContent_3OHp",Q=["summary","children"];function ee(e){return!!e&&("SUMMARY"===e.tagName||ee(e.parentElement))}function te(e,t){return!!e&&(e===t||te(e.parentElement,t))}var ne=function(e){var t,n=e.summary,o=e.children,i=(0,c.Z)(e,Q),l=(0,r.useContext)(K._),s=(0,r.useRef)(null),u=function(e){var t=e.initialState,n=(0,r.useState)(null!=t&&t),o=n[0],a=n[1],i=(0,r.useCallback)((function(){a((function(e){return!e}))}),[]);return{collapsed:o,setCollapsed:a,toggleCollapsed:i}}({initialState:!i.open}),d=u.collapsed,f=u.setCollapsed,p=(0,r.useState)(i.open),m=p[0],g=p[1];return r.createElement("details",Object.assign({},i,{ref:s,open:m,"data-collapsed":d,className:a(X,(t={},t[Y]=l,t),i.className),onMouseDown:function(e){ee(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ee(t)&&te(t,s.current)&&(e.preventDefault(),d?(f(!1),g(!0)):f(!0))}}),n,r.createElement(G,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){f(e),g(!e)}},r.createElement("div",{className:J},o)))};var re={blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},oe={main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"};A("docusaurus.announcement.dismiss"),A("docusaurus.announcement.id");var ae=n(4973);function ie(e){var t=e.getBoundingClientRect();return t.top===t.bottom?ie(e.parentNode):t}function le(e,t){var n,r=t.anchorTopOffset,o=e.find((function(e){return ie(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(ie(o))?o:null!==(n=e[e.indexOf(o)-1])&&void 0!==n?n:null:e[e.length-1]}function se(){var e=(0,r.useRef)(0),t=j().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var ce=function(e){var t=(0,r.useRef)(void 0),n=se();(0,r.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,a=e.minHeadingLevel,i=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],o=t;o<=n;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),s=le(l,{anchorTopOffset:n.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){var r;n?(t.current&&t.current!==e&&(null===(r=t.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])};function ue(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=ue({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}var de=function(){var e=j().prism,t=P().isDarkTheme,n=e.theme||L,r=e.darkTheme||n;return t?r:n},fe="codeBlockContainer_K1bP",pe="codeBlockContent_hGly",me="codeBlockTitle_eoMF",ge="codeBlock_23N8",ve="copyButton_Ue-o",he="codeBlockLines_39YC",ye=/{([\d,-]+)}/,be=["js","jsBlock","jsx","python","html"],ke={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Ee=["highlight-next-line","highlight-start","highlight-end"],we=function(e){void 0===e&&(e=be);var t=e.map((function(e){var t=ke[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+Ee.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function Ne(e){var t=e.children,n=e.className,o=e.metastring,i=e.title,l=j().prism,c=(0,r.useState)(!1),u=c[0],d=c[1],f=(0,r.useState)(!1),m=f[0],g=f[1];(0,r.useEffect)((function(){g(!0)}),[]);var v=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(H))||void 0===t?void 0:t[2])&&void 0!==n?n:""}(o)||i,h=(0,r.useRef)(null),y=[],b=de(),k=Array.isArray(t)?t.join(""):t;if(o&&ye.test(o)){var E=o.match(ye)[1];y=x()(E).filter((function(e){return e>0}))}var N=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),L=null==N?void 0:N.replace(/language-/,"");!L&&l.defaultLanguage&&(L=l.defaultLanguage);var C=k.replace(/\n$/,"");if(0===y.length&&void 0!==L){for(var P,O="",T=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return we(["js","jsBlock"]);case"jsx":case"tsx":return we(["js","jsBlock","jsx"]);case"html":return we(["js","jsBlock","html"]);case"python":case"py":return we(["python"]);default:return we()}}(L),D=k.replace(/\n$/,"").split("\n"),S=0;S<D.length;){var _=S+1,A=D[S].match(T);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":O+=_+",";break;case"highlight-start":P=_;break;case"highlight-end":O+=P+"-"+(_-1)+","}D.splice(S,1)}else S+=1}y=x()(O),C=D.join("\n")}var R=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var i=document.getSelection(),l=!1;i.rangeCount>0&&(l=i.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(c){}o.remove(),l&&(i.removeAllRanges(),i.addRange(l)),a&&a.focus()}(C),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.createElement(w,(0,s.Z)({},p,{key:String(m),theme:b,code:C,language:L}),(function(e){var t=e.className,o=e.style,i=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:a(fe,null==n?void 0:n.replace(/language-[^ ]+/,""))},v&&r.createElement("div",{style:o,className:me},v),r.createElement("div",{className:a(pe,L)},r.createElement("pre",{tabIndex:0,className:a(t,ge,"thin-scrollbar"),style:o},r.createElement("code",{className:he},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return y.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,s.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,s.Z)({key:t},c({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{ref:h,type:"button","aria-label":(0,ae.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:a(ve,"clean-btn"),onClick:R},u?r.createElement(ae.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(ae.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var xe="anchorWithStickyNavbar_31ik",Le="anchorWithHideOnScrollNavbar_3R7-",Ce=["id"],Pe=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,s.Z)({},t,{id:void 0}),t.children))},Oe=function(e){return"h1"===e?Pe:(t=e,function(e){var n,o=e.id,i=(0,c.Z)(e,Ce),l=j().navbar.hideOnScroll;return o?r.createElement(t,(0,s.Z)({},i,{className:a("anchor",(n={},n[Le]=l,n[xe]=!l,n)),id:o}),i.children,r.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+o,title:(0,ae.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,i)});var t},je="details_1VDD";function Te(e){var t=Object.assign({},e);return r.createElement(ne,(0,s.Z)({},t,{className:a("alert alert--info",je,t.className)}))}var De=["mdxType","originalType"];var Se={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var o=e.props,a=(o.mdxType,o.originalType,(0,c.Z)(o,De));return r.createElement(e.props.originalType,a)}return e}(e)}));return r.createElement(u.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(Ne,e):r.createElement("code",e)},a:function(e){return r.createElement(d.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(Ne,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(Te,(0,s.Z)({},e,{summary:n}),o)},h1:Oe("h1"),h2:Oe("h2"),h3:Oe("h3"),h4:Oe("h4"),h5:Oe("h5"),h6:Oe("h6")},_e=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function Ae(e){var t=e.toc,n=e.className,o=e.linkClassName,a=e.isChild;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(Ae,{isChild:!0,toc:e.children,className:n,linkClassName:o}))}))):null}function He(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,a=e.linkClassName,i=void 0===a?"table-of-contents__link":a,l=e.linkActiveClassName,u=void 0===l?void 0:l,d=e.minHeadingLevel,f=e.maxHeadingLevel,p=(0,c.Z)(e,_e),m=j(),g=null!=d?d:m.tableOfContents.minHeadingLevel,v=null!=f?f:m.tableOfContents.maxHeadingLevel,h=function(e){var t=e.toc,n=e.minHeadingLevel,o=e.maxHeadingLevel;return(0,r.useMemo)((function(){return ue({toc:t,minHeadingLevel:n,maxHeadingLevel:o})}),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v}),y=(0,r.useMemo)((function(){if(i&&u)return{linkClassName:i,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:v}}),[i,u,g,v]);return ce(y),r.createElement(Ae,(0,s.Z)({toc:h,className:o,linkClassName:i},p))}var Re="tableOfContents_35-E",Ze=["className"];var Be=function(e){var t=e.className,n=(0,c.Z)(e,Ze);return r.createElement("div",{className:a(Re,"thin-scrollbar",t)},r.createElement(He,(0,s.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},Ie="mdxPageWrapper_3qD3";var Ve=function(e){var t=e.content,n=t.frontMatter,o=t.metadata,s=n.title,c=n.description,u=n.wrapperClassName,d=n.hide_table_of_contents,f=o.permalink;return r.createElement(i.Z,{title:s,description:c,permalink:f,wrapperClassName:null!=u?u:oe.mdxPages,pageClassName:re.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:a("row",Ie)},r.createElement("div",{className:a("col",!d&&"col--8")},r.createElement(l.Zo,{components:Se},r.createElement(t,null))),!d&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(Be,{toc:t.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);