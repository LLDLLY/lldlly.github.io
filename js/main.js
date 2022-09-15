"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function N(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(n=e&&e.offsetWidth,i=o&&o.offsetWidth,c=a&&a.offsetWidth);var t=document.getElementById("nav");window.innerWidth<768||n+i+c>t.offsetWidth-120?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}var e=document.getElementById("site-name"),n=e&&e.offsetWidth,o=document.querySelector("#menus .menus_items"),i=o&&o.offsetWidth,a=document.querySelector("#search-button"),c=a&&a.offsetWidth;function T(){var i="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],a=0<i.length,c=document.querySelectorAll("#article-container .justified-gallery"),r=0<c.length;(r||a)&&btf.isJqueryLoad(function(){var t,e,n;function o(t){t.each(function(t,e){var n=(e=$(e)).attr("data-lazy-src")||e.attr("src"),o=e.attr("alt")||"";e.wrap('<a href="'.concat(n,'" data-fancybox="group" data-caption="').concat(o,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}r&&(t=c,(t=(e=$(t)).find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),l?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),l=!0)),a&&(n=i,void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){o($(n))})):o($(n)))})}function k(){var t=document.getElementById("card-toc"),c=t.getElementsByClassName("toc-content")[0],r=c.querySelectorAll(".toc-link"),i=document.getElementById("article-container"),n=(window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;n(e),o(e)},100)),function(t){var e=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,e=n<e?e-n:document.documentElement.scrollHeight-n,n=Math.round((t-o)/e*100);c.setAttribute("progress-percentage",100<n?100:n<=0?0:n)}),s=GLOBAL_CONFIG.isanchor,e=function(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)},l=(document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"}:e)()}),c.addEventListener("click",function(t){t.preventDefault(),t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e()}),i.querySelectorAll("h1,h2,h3,h4,h5,h6")),d="",o=function(n){if(0===r.length||0===n)return!1;var t,o="",i="";if(l.forEach(function(t,e){n>btf.getEleTop(t)-80&&(o="#"+encodeURI(t.getAttribute("id")),i=e)}),d!==i){if(s&&(t=o,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===o)return c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(d=i);d=i,c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")});(a=r[i]).classList.add("active"),setTimeout(function(){var t=(t=a).getBoundingClientRect().top,e=c.scrollTop;t>document.documentElement.clientHeight-100&&(c.scrollTop=e+150),t<100&&(c.scrollTop=e-150)},0);for(var a,e=a.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}function x(t){t.forEach(function(t){var e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}function r(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||N(!0)}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&N(!0)}saveToLocal.set("global-font-size",n,2)}var s,l=!1;document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":(n=document.body).classList.add("read-mode"),(o=document.createElement("button")).type="button",o.className="fas fa-sign-out-alt exit-readmode",n.appendChild(o),o.addEventListener("click",function t(){n.classList.remove("read-mode"),o.remove(),o.removeEventListener("click",t)});break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside");break;case"font-plus":r(!0);break;case"font-minus":r()}var e,n,o});window.refreshFn=function(){var t,e,n,o,i,a,c,r,s,l,d,u,f,m,y,h,g,p,b,L,v,E,A,S,w,O,G,I,_,B;function C(){c.style.overflow="",c.style.paddingRight="",btf.fadeOut(a,.5),i.classList.remove("open")}N(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&k(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(p=GLOBAL_CONFIG.noticeOutdate,(n=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=p.limitDay&&((e=document.createElement("div")).className="post-outdate-notice",e.textContent=p.messagePrev+" "+n+" "+p.messageNext,n=document.getElementById("article-container"),"top"===p.position?n.insertBefore(e,n.firstChild):n.appendChild(e))),GLOBAL_CONFIG.relativeDate.post&&x(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&x(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(p=document.getElementById("runtimeshow"))&&(n=p.getAttribute("data-publishDate"),p.innerText=btf.diffDate(n)+" "+GLOBAL_CONFIG.runtime),(e=document.getElementById("last-push-date"))&&(t=e.getAttribute("data-lastPushDate"),e.innerText=btf.diffDate(t,!0)),(t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&t.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),o=document.getElementById("toggle-menu"),i=document.getElementById("sidebar-menus"),a=document.getElementById("menu-mask"),c=document.body,o.addEventListener("click",function(){btf.sidebarPaddingR(),c.style.overflow="hidden",btf.fadeIn(a,.5),i.classList.add("open")}),a.addEventListener("click",function(t){i.classList.contains("open")&&C()}),window.addEventListener("resize",function(t){btf.isHidden(o)&&i.classList.contains("open")&&C()}),GLOBAL_CONFIG_SITE.isHome&&(g=document.getElementById("scroll-down"))&&g.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&(g=GLOBAL_CONFIG.highlight.highlightCopy,A=GLOBAL_CONFIG.highlight.highlightLang,v=GLOBAL_CONFIG_SITE.isHighlightShrink,L=g||A||void 0!==v,p="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),L&&p.length&&(r="prismjs"===GLOBAL_CONFIG.highlight.plugin,d=!(l=s="")===v?"closed":"",void 0!==v&&(s='<i class="fas fa-angle-down expand '.concat(d,'"></i>')),g&&(l='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),u=function(t,e){var n;document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=e.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport},f=function(t){var e=t.parentNode,n=(e.classList.add("copy-true"),window.getSelection()),o=document.createRange(),o=(r?o.selectNodeContents(e.querySelectorAll("pre code")[0]):o.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o),n.toString());u(0,t.lastChild),n.removeAllRanges(),e.classList.remove("copy-true")},m=function(t){var e=_toConsumableArray(t.parentNode.children).slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[0])?e.forEach(function(t){t.style.display="block"}):e.forEach(function(t){t.style.display="none"})},y=function(t){(t=t.target.classList).contains("expand")?m(this):t.contains("copy-button")&&f(this)},h=function(){var t=document.createElement("div");return t.className="highlight-tools ".concat(d),t.addEventListener("click",y),t},A?r?p.forEach(function(t){var e=void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>"),n=(btf.wrap(t,"figure","","highlight"),h());n.innerHTML=s+e+l,t.parentNode.insertBefore(n,t)}):p.forEach(function(t){var e=t.getAttribute("class").split(" ")[1],e='<div class="code-lang">'.concat(e="plain"!==e&&void 0!==e?e:"Code","</div>"),n=h();n.innerHTML=s+e+l,t.insertBefore(n,t.firstChild)}):r?p.forEach(function(t){btf.wrap(t,"figure","","highlight");var e=h();e.innerHTML=s+l,t.parentNode.insertBefore(e,t)}):p.forEach(function(t){var e=h();e.innerHTML=s+l,t.insertBefore(e,t.firstChild)}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode;n.parentNode.classList.contains("justified-gallery")||((e=document.createElement("div")).className="img-alt is-center",e.textContent=t.getAttribute("alt"),n.insertBefore(e,t.nextSibling))}),T(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(b=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";b.update({background:e})}),_=document.getElementById("rightside"),B=window.innerHeight+56,document.body.scrollHeight<=B?_.style.cssText="opacity: 1; transform: translateX(-38px)":(w=!(S=0),O=document.getElementById("page-header"),G="function"==typeof chatBtnHide,I="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,n=S<e;56<(S=e)?(n?(O.classList.contains("nav-visible")&&O.classList.remove("nav-visible"),I&&!0===w&&(chatBtnHide(),w=!1)):(O.classList.contains("nav-visible")||O.classList.add("nav-visible"),G&&!1===w&&(chatBtnShow(),w=!0)),O.classList.add("nav-fixed"),"0"===window.getComputedStyle(_).getPropertyValue("opacity")&&(_.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===e&&O.classList.remove("nav-fixed","nav-visible"),_.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=B&&(_.style.cssText="opacity: 1; transform: translateX(-38px)")},200))),(L=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&L.forEach(function(t){btf.wrap(t,"div","","table-wrap")}),(v=document.querySelectorAll("#article-container .hide-button")).length&&v.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(e=i.parentNode.nextElementSibling,(o=btf.siblings(i,".active")[0])&&o.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(e.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=e.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),E=!1,(A=document.querySelector("#comment-switch > .switch-btn"))&&A.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),E||"function"!=typeof loadOtherComment||(E=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",N),window.addEventListener("orientationchange",function(){setTimeout(N(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(s=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>s.limitCount?e+"\n\n\n"+s.languages.author+"\n"+s.languages.link+window.location.href+"\n"+s.languages.source+"\n"+s.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});