"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[418],{865:function(n,r,t){t.d(r,{Pn:function(){return d}});var e,o,u=function(){function n(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(r,t,e){return t&&n(r.prototype,t),e&&n(r,e),r}}(),i=(e=["",""],o=["",""],Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));var a=function(){function n(){for(var r=this,t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.tag=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return"function"==typeof n?r.interimTag.bind(r,n):"string"==typeof n?r.transformEndResult(n):(n=n.map(r.transformString.bind(r)),r.transformEndResult(n.reduce(r.processSubstitutions.bind(r,e))))},e.length>0&&Array.isArray(e[0])&&(e=e[0]),this.transformers=e.map((function(n){return"function"==typeof n?n():n})),this.tag}return u(n,[{key:"interimTag",value:function(n,r){for(var t=arguments.length,e=Array(t>2?t-2:0),o=2;o<t;o++)e[o-2]=arguments[o];return this.tag(i,n.apply(void 0,[r].concat(e)))}},{key:"processSubstitutions",value:function(n,r,t){var e=this.transformSubstitution(n.shift(),r);return"".concat(r,e,t)}},{key:"transformString",value:function(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function(n,r){return this.transformers.reduce((function(n,t){return t.onSubstitution?t.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),n}(),s=a,f={separator:"",conjunction:"",serial:!1},c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return{onSubstitution:function(r,t){if(Array.isArray(r)){var e=r.length,o=n.separator,u=n.conjunction,i=n.serial,a=t.match(/(\n?[^\S\n]+)$/);if(r=a?r.join(o+a[1]):r.join(o+" "),u&&e>1){var s=r.lastIndexOf(o);r=r.slice(0,s)+(i?o:"")+" "+u+r.slice(s+1)}}return r}}};var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(r){if("initial"===n){var t=r.match(/^[^\S\n]*(?=\S)/gm),e=t&&Math.min.apply(Math,function(n){if(Array.isArray(n)){for(var r=0,t=Array(n.length);r<n.length;r++)t[r]=n[r];return t}return Array.from(n)}(t.map((function(n){return n.length}))));if(e){var o=new RegExp("^.{"+e+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}},g=(new s(c({separator:","}),l,p),new s(c({separator:",",conjunction:"and"}),l,p),new s(c({separator:",",conjunction:"or"}),l,p),function(n){return{onSubstitution:function(r,t){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}}),h=function(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n},w=function(){return{onSubstitution:function(n){return Array.isArray(n)?n.filter(h):h(n)?n:""}}},y=(new s(g("\n"),w,c,l,p),function(n,r){return{onSubstitution:function(t,e){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==t?t:t.toString().replace(n,r)}}}),m=(new s(g("\n"),c,l,p,y(/&/g,"&amp;"),y(/</g,"&lt;"),y(/>/g,"&gt;"),y(/"/g,"&quot;"),y(/'/g,"&#x27;"),y(/`/g,"&#x60;")),function(n,r){return{onEndResult:function(t){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return t.replace(n,r)}}}),d=(new s(m(/(?:\n(?:\s*))+/g," "),p),new s(m(/(?:\n\s*)/g,""),p),new s(c({separator:","}),m(/(?:\s+)/g," "),p),new s(c({separator:",",conjunction:"or"}),m(/(?:\s+)/g," "),p),new s(c({separator:",",conjunction:"and"}),m(/(?:\s+)/g," "),p),new s(c,l,p),new s(c,m(/(?:\s+)/g," "),p),new s(l,p));new s(l("all"),p)},1880:function(n,r,t){function e(n,r){return r||(r=n.slice(0)),n.raw=r,n}t.d(r,{Z:function(){return e}})}}]);