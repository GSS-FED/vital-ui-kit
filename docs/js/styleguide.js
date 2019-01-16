/*******************************************
 * Copyright © 2019 Galaxy Software Services
 *
 * @gssfed/vital-ui-kit, v1.0.1
 * UI Kit for GSS Vital Family
 *
 * By Neil Lin (https://github.com/Neil-Lin),Patric,Laura Lee (https://github.com/l443018),Eric Yip (https://github.com/ericyip),Vibrissa (https://github.com/Vibrissa),YuRu Lee (https://github.com/YuRu-Lee),CJies Tan (https://github.com/cjies),Evan Wu (https://github.com/evanwu-tw)
 *
 * License: MIT
 *
 ******************************************/
"use strict";var fabricator=window.fabricator={};fabricator.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},fabricator.options.menu=window.matchMedia(fabricator.options.mq).matches,fabricator.test={},fabricator.test.sessionStorage=function(){var e="_f";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}(),fabricator.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(fabricator.options)),fabricator.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},fabricator.getOptions=function(){return fabricator.test.sessionStorage?JSON.parse(sessionStorage.fabricator):fabricator.options},fabricator.buildColorChips=function(){for(var e,t=document.querySelectorAll(".f-color-chip"),a=t.length-1;0<=a;a--)e=t[a].querySelector(".f-color-chip__color").innerHTML,t[a].style.borderTopColor=e,t[a].style.borderBottomColor=e;return this},fabricator.setActiveItem=function(){var e=function(){for(var e=(window.location.pathname+window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/gi,function(e,t,a,n){return(a=a||"")+(n=n||"").split(".")[0]})||"index.html",t=fabricator.dom.menuItems.length-1;0<=t;t--){var a=fabricator.dom.menuItems[t];a.getAttribute("href").replace(/^\//g,"")===e?a.classList.add("f-active"):a.classList.remove("f-active")}};return window.addEventListener("hashchange",e),e(),this},fabricator.menuToggle=function(){var e=fabricator.dom.menuToggle,t=fabricator.getOptions(),a=function(){t.menu=!fabricator.dom.root.classList.contains("f-menu-active"),fabricator.dom.root.classList.toggle("f-menu-active"),fabricator.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};document.onkeydown=function(e){(e=e||event).ctrlKey&&e.keyCode=="M".charCodeAt(0)&&a()},e.addEventListener("click",function(){a()});for(var n=function(){window.matchMedia(fabricator.options.mq).matches||a()},r=0;r<fabricator.dom.menuItems.length;r++)fabricator.dom.menuItems[r].addEventListener("click",n);return this},fabricator.allItemsToggles=function(){for(var i={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},e=document.querySelectorAll(".f-controls [data-f-toggle-control]"),o=fabricator.getOptions(),n=function(e,t){for(var a=document.querySelector(".f-controls [data-f-toggle-control="+e+"]"),n=i[e],r=0;r<n.length;r++)t?n[r].classList.remove("f-item-hidden"):n[r].classList.add("f-item-hidden");t?a.classList.add("f-active"):a.classList.remove("f-active"),o.toggles[e]=t,fabricator.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(o))},t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),a=e.currentTarget.className.indexOf("f-active")<0;n(t,a)});for(var a in o.toggles)o.toggles.hasOwnProperty(a)&&n(a,o.toggles[a]);return this},fabricator.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=this.parentNode.parentNode.parentNode,a=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+a+"]").classList.toggle("f-item-hidden")},a=0;a<e.length;a++)e[a].addEventListener("click",t);return this},fabricator.bindCodeAutoSelect=function(){for(var e=document.querySelectorAll(".f-item-code"),t=function(e){var t=window.getSelection(),a=document.createRange();a.selectNodeContents(e.querySelector("code")),t.removeAllRanges(),t.addRange(a)},a=e.length-1;0<=a;a--)e[a].addEventListener("click",t.bind(this,e[a]))},fabricator.setInitialMenuState=function(){var t=document.querySelector("html"),e=window.matchMedia(fabricator.options.mq),a=function(e){e.matches&&fabricator.getOptions().menu?t.classList.add("f-menu-active"):t.classList.remove("f-menu-active")};return e.addListener(a),a(e),this},fabricator.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect();var self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var c=/\blang(?:uage)?-(?!\*)(\w+)\b/i,P=self.Prism={util:{encode:function(e){return e instanceof u?new u(e.type,P.util.encode(e.content),e.alias):"Array"===P.util.type(e)?e.map(P.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(P.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=P.util.clone(e[a]));return t;case"Array":return e.map(function(e){return P.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=P.util.clone(P.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var r=(n=n||P.languages)[a];if(2==arguments.length){for(var i in t=e)t.hasOwnProperty(i)&&(r[i]=t[i]);return r}var o={};for(var s in r)if(r.hasOwnProperty(s)){if(s==e)for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);o[s]=r[s]}return P.languages.DFS(P.languages,function(e,t){t===n[a]&&e!=a&&(this[e]=o)}),n[a]=o},DFS:function(e,t,a){for(var n in e)e.hasOwnProperty(n)&&(t.call(e,n,e[n],a||n),"Object"===P.util.type(e[n])?P.languages.DFS(e[n],t):"Array"===P.util.type(e[n])&&P.languages.DFS(e[n],t,n))}},highlightAll:function(e,t){for(var a,n=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;a=n[r++];)P.highlightElement(a,!0===e,t)},highlightElement:function(e,t,a){for(var n,r,i=e;i&&!c.test(i.className);)i=i.parentNode;if(i&&(n=(i.className.match(c)||[,""])[1],r=P.languages[n]),r){e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+n,i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+n);var o=e.textContent;if(o){o=o.replace(/^(?:\r?\n|\r)/,"");var s={element:e,language:n,grammar:r,code:o};if(P.hooks.run("before-highlight",s),t&&self.Worker){var l=new Worker(P.filename);l.onmessage=function(e){s.highlightedCode=u.stringify(JSON.parse(e.data),n),P.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(s.element),P.hooks.run("after-highlight",s)},l.postMessage(JSON.stringify({language:s.language,code:s.code}))}else s.highlightedCode=P.highlight(s.code,s.grammar,s.language),P.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a&&a.call(e),P.hooks.run("after-highlight",s)}}},highlight:function(e,t,a){var n=P.tokenize(e,t);return u.stringify(P.util.encode(n),a)},tokenize:function(e,t,a){var n=P.Token,r=[e],i=t.rest;if(i){for(var o in i)t[o]=i[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var s=t[o];s="Array"===P.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],u=c.inside,g=!!c.lookbehind,f=0,d=c.alias;c=c.pattern||c;for(var m=0;m<r.length;m++){var p=r[m];if(r.length>e.length)break e;if(!(p instanceof n))if(c.lastIndex=0,h=c.exec(p)){g&&(f=h[1].length);var h,y=h.index-1+f,b=y+(h=h[0].slice(f)).length,v=p.slice(0,y+1),w=p.slice(b+1),k=[m,1];v&&k.push(v);var S=new n(o,u?P.tokenize(h,u):h,d);k.push(S),w&&k.push(w),Array.prototype.splice.apply(r,k)}}}}return r},hooks:{all:{},add:function(e,t){var a=P.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=P.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}}},u=P.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(u.stringify=function(t,a,e){if("string"==typeof t)return t;if("Array"===P.util.type(t))return t.map(function(e){return u.stringify(e,a,t)}).join("");var n={type:t.type,content:u.stringify(t.content,a,e),tag:"span",classes:["token",t.type],attributes:{},language:a,parent:e};if("comment"==n.type&&(n.attributes.spellcheck="true"),t.alias){var r="Array"===P.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(n.classes,r)}P.hooks.run("wrap",n);var i="";for(var o in n.attributes)i+=o+'="'+(n.attributes[o]||"")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'" '+i+">"+n.content+"</"+n.tag+">"},!self.document)return self.addEventListener&&self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code;self.postMessage(JSON.stringify(P.util.encode(P.tokenize(n,P.languages[a])))),self.close()},!1),self.Prism;var e=document.getElementsByTagName("script");return(e=e[e.length-1])&&(P.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",P.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,function:/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,function:/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),sg.demoControl=function(){return $(_PREFIX+"-dropdown-menu a,"+_PREFIX+"-breadcrumb a").click(function(e){e.preventDefault(),e.stopPropagation()}),new jQueryCollapse($(_PREFIX+"-collapse"),{query:_PREFIX+"-collapse--title",open:function(){this.slideDown(150)},close:function(){this.slideUp(150)},accordion:!0}),this},sg.demoControl();