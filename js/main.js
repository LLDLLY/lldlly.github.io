<<<<<<< HEAD
"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function I(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(n=e&&e.offsetWidth,i=o&&o.offsetWidth,c=a&&a.offsetWidth);var t=document.getElementById("nav");window.innerWidth<768||n+i+c>t.offsetWidth-120?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}var e=document.getElementById("site-name"),n=e&&e.offsetWidth,o=document.querySelector("#menus .menus_items"),i=o&&o.offsetWidth,a=document.querySelector("#search-button"),c=a&&a.offsetWidth;function _(){var i="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],a=0<i.length,c=document.querySelectorAll("#article-container .justified-gallery"),r=0<c.length;(r||a)&&btf.isJqueryLoad(function(){var t,e,n;function o(t){t.each(function(t,e){var n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}r&&(t=c,(t=(e=$(t)).find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),s?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),s=!0)),a&&(n=i,void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){o($(n))})):o($(n)))})}function B(){var t=document.getElementById("card-toc"),c=t.getElementsByClassName("toc-content")[0],r=c.querySelectorAll(".toc-link"),o=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;n(e),i(e)},100));function e(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)}var n=function(t){var e=o.clientHeight,n=document.documentElement.clientHeight,e=(t-o.offsetTop)/(n<e?e-n:document.documentElement.scrollHeight-n),n=100<(n=Math.round(100*e))?100:n<=0?0:n;c.setAttribute("progress-percentage",n)},s=GLOBAL_CONFIG.isanchor;document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"}:e)()}),c.addEventListener("click",function(t){t.preventDefault(),t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e()});var l=o.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",i=function(n){if(0===r.length||0===n)return!1;var t,o,i="",a="";if(l.forEach(function(t,e){n>btf.getEleTop(t)-80&&(i="#"+encodeURI(t.getAttribute("id")),a=e)}),d!==a){if(s&&(t=i,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===i)return c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(d=a);d=a,c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),(o=r[a]).classList.add("active"),setTimeout(function(){var t=(e=o).getBoundingClientRect().top,e=c.scrollTop;t>document.documentElement.clientHeight-100&&(c.scrollTop=e+150),t<100&&(c.scrollTop=e-150)},0);for(var e=o.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}function r(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||I(!0)}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&I(!0)}saveToLocal.set("global-font-size",n,2)}var s=!1;function C(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":!function(){var e;(e=document.body).classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})}();break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside");break;case"font-plus":r(!0);break;case"font-minus":r()}var e});var l;window.refreshFn=function(){var e,n,t,o,i,a,c,r,s,l,d,u,f,m,y,h,g,p,b,L,v,E,A,S,w,O;function G(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(t,.5),n.classList.remove("open")}I(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&B(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(E=GLOBAL_CONFIG.noticeOutdate,(A=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=E.limitDay&&((S=document.createElement("div")).className="post-outdate-notice",S.textContent=E.messagePrev+" "+A+" "+E.messageNext,A=document.getElementById("article-container"),"top"===E.position?A.insertBefore(S,A.firstChild):A.appendChild(S))),GLOBAL_CONFIG.relativeDate.post&&C(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&C(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(S=document.getElementById("runtimeshow"))&&(w=S.getAttribute("data-publishDate"),S.innerText=btf.diffDate(w)+" "+GLOBAL_CONFIG.runtime),(w=document.getElementById("last-push-date"))&&(O=w.getAttribute("data-lastPushDate"),w.innerText=btf.diffDate(O,!0)),(O=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&O.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),e=document.getElementById("toggle-menu"),n=document.getElementById("sidebar-menus"),t=document.getElementById("menu-mask"),o=document.body,e.addEventListener("click",function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(t,.5),n.classList.add("open")}),t.addEventListener("click",function(t){n.classList.contains("open")&&G()}),window.addEventListener("resize",function(t){btf.isHidden(e)&&n.classList.contains("open")&&G()}),!GLOBAL_CONFIG_SITE.isHome||(c=document.getElementById("scroll-down"))&&c.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&(E=GLOBAL_CONFIG.highlight.highlightCopy,A=GLOBAL_CONFIG.highlight.highlightLang,S=GLOBAL_CONFIG_SITE.isHighlightShrink,w=E||A||void 0!==S,O="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),w&&O.length&&(y="prismjs"===GLOBAL_CONFIG.highlight.plugin,p=!(g=h="")===S?"closed":"",void 0!==S&&(h='<i class="fas fa-angle-down expand '.concat(p,'"></i>')),E&&(g='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),b=function(t){var e=t.parentNode;e.classList.add("copy-true");var n,o=window.getSelection(),i=document.createRange();y?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),e.classList.remove("copy-true")},L=function(t){var e;(e=t.target.classList).contains("expand")?(t=_toConsumableArray(this.parentNode.children).slice(1),this.firstChild.classList.toggle("closed"),btf.isHidden(t[0])?t.forEach(function(t){t.style.display="block"}):t.forEach(function(t){t.style.display="none"})):e.contains("copy-button")&&b(this)},v=function(){var t=document.createElement("div");return t.className="highlight-tools ".concat(p),t.addEventListener("click",L),t},A?y?O.forEach(function(t){var e=void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",n='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure","","highlight"),(e=v()).innerHTML=h+n+g,t.parentNode.insertBefore(e,t)}):O.forEach(function(t){var e=t.getAttribute("class").split(" ")[1],n='<div class="code-lang">'.concat(e="plain"===e||void 0===e?"Code":e,"</div>");(e=v()).innerHTML=h+n+g,t.insertBefore(e,t.firstChild)}):y?O.forEach(function(t){btf.wrap(t,"figure","","highlight");var e=v();e.innerHTML=h+g,t.parentNode.insertBefore(e,t)}):O.forEach(function(t){var e=v();e.innerHTML=h+g,t.insertBefore(e,t.firstChild)}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode;n.parentNode.classList.contains("justified-gallery")||((e=document.createElement("div")).className="img-alt is-center",e.textContent=t.getAttribute("alt"),n.insertBefore(e,t.nextSibling))}),_(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(i=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";i.update({background:e})}),f=document.getElementById("rightside"),m=window.innerHeight+56,document.body.scrollHeight<=m?f.style.cssText="opacity: 1; transform: translateX(-38px)":(s=!(r=0),l=document.getElementById("page-header"),d="function"==typeof chatBtnHide,u="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,n=(n=r<e,r=e,n);56<e?(n?(l.classList.contains("nav-visible")&&l.classList.remove("nav-visible"),u&&!0===s&&(chatBtnHide(),s=!1)):(l.classList.contains("nav-visible")||l.classList.add("nav-visible"),d&&!1===s&&(chatBtnShow(),s=!0)),l.classList.add("nav-fixed"),"0"===window.getComputedStyle(f).getPropertyValue("opacity")&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===e&&l.classList.remove("nav-fixed","nav-visible"),f.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=m&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")},200))),(c=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&c.forEach(function(t){btf.wrap(t,"div","","table-wrap")}),(c=document.querySelectorAll("#article-container .hide-button")).length&&c.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),a=!1,(c=document.querySelector("#comment-switch > .switch-btn"))&&c.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),a||"function"!=typeof loadOtherComment||(a=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",I),window.addEventListener("orientationchange",function(){setTimeout(I(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(l=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>l.limitCount?e+"\n\n\n"+l.languages.author+"\n"+l.languages.link+window.location.href+"\n"+l.languages.source+"\n"+l.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});
=======
document.addEventListener('DOMContentLoaded', function () {
  const $blogName = document.getElementById('site-name')
  let blogNameWidth = $blogName && $blogName.offsetWidth
  const $menusEle = document.querySelector('#menus .menus_items')
  let menusWidth = $menusEle && $menusEle.offsetWidth
  const $searchEle = document.querySelector('#search-button')
  let searchWidth = $searchEle && $searchEle.offsetWidth

  const adjustMenu = (change = false) => {
    if (change) {
      blogNameWidth = $blogName && $blogName.offsetWidth
      menusWidth = $menusEle && $menusEle.offsetWidth
      searchWidth = $searchEle && $searchEle.offsetWidth
    }
    const $nav = document.getElementById('nav')
    let t
    if (window.innerWidth < 768) t = true
    else t = blogNameWidth + menusWidth + searchWidth > $nav.offsetWidth - 120

    if (t) {
      $nav.classList.add('hide-menu')
    } else {
      $nav.classList.remove('hide-menu')
    }
  }

  // 初始化header
  const initAdjust = () => {
    adjustMenu()
    document.getElementById('nav').classList.add('show')
  }

  // sidebar menus
  const sidebarFn = () => {
    const $toggleMenu = document.getElementById('toggle-menu')
    const $mobileSidebarMenus = document.getElementById('sidebar-menus')
    const $menuMask = document.getElementById('menu-mask')
    const $body = document.body

    function openMobileSidebar () {
      btf.sidebarPaddingR()
      $body.style.overflow = 'hidden'
      btf.fadeIn($menuMask, 0.5)
      $mobileSidebarMenus.classList.add('open')
    }

    function closeMobileSidebar () {
      $body.style.overflow = ''
      $body.style.paddingRight = ''
      btf.fadeOut($menuMask, 0.5)
      $mobileSidebarMenus.classList.remove('open')
    }

    $toggleMenu.addEventListener('click', openMobileSidebar)

    $menuMask.addEventListener('click', e => {
      if ($mobileSidebarMenus.classList.contains('open')) {
        closeMobileSidebar()
      }
    })

    window.addEventListener('resize', e => {
      if (btf.isHidden($toggleMenu)) {
        if ($mobileSidebarMenus.classList.contains('open')) closeMobileSidebar()
      }
    })
  }

  /**
 * 首頁top_img底下的箭頭
 */
  const scrollDownInIndex = () => {
    const $scrollDownEle = document.getElementById('scroll-down')
    $scrollDownEle && $scrollDownEle.addEventListener('click', function () {
      btf.scrollToDest(document.getElementById('content-inner').offsetTop, 300)
    })
  }

  /**
 * 代碼
 * 只適用於Hexo默認的代碼渲染
 */
  const addHighlightTool = function () {
    const isHighlightCopy = GLOBAL_CONFIG.highlight.highlightCopy
    const isHighlightLang = GLOBAL_CONFIG.highlight.highlightLang
    const isHighlightShrink = GLOBAL_CONFIG_SITE.isHighlightShrink
    const isShowTool = isHighlightCopy || isHighlightLang || isHighlightShrink !== undefined
    const $figureHighlight = GLOBAL_CONFIG.highlight.plugin === 'highlighjs' ? document.querySelectorAll('figure.highlight') : document.querySelectorAll('pre[class*="language-"]')

    if (isShowTool && $figureHighlight.length) {
      const isPrismjs = GLOBAL_CONFIG.highlight.plugin === 'prismjs'

      let highlightShrinkEle = ''
      let highlightCopyEle = ''
      const highlightShrinkClass = isHighlightShrink === true ? 'closed' : ''

      if (isHighlightShrink !== undefined) {
        highlightShrinkEle = `<i class="fas fa-angle-down expand ${highlightShrinkClass}"></i>`
      }

      if (isHighlightCopy) {
        highlightCopyEle = '<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'
      }

      const copy = (text, ctx) => {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
          document.execCommand('copy')
          if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.success)
          } else {
            const prevEle = ctx.previousElementSibling
            prevEle.innerText = GLOBAL_CONFIG.copy.success
            prevEle.style.opacity = 1
            setTimeout(() => { prevEle.style.opacity = 0 }, 700)
          }
        } else {
          if (GLOBAL_CONFIG.Snackbar !== undefined) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)
          } else {
            ctx.previousElementSibling.innerText = GLOBAL_CONFIG.copy.noSupport
          }
        }
      }

      // click events
      const highlightCopyFn = (ele) => {
        const $buttonParent = ele.parentNode
        $buttonParent.classList.add('copy-true')
        const selection = window.getSelection()
        const range = document.createRange()
        if (isPrismjs) range.selectNodeContents($buttonParent.querySelectorAll('pre code')[0])
        else range.selectNodeContents($buttonParent.querySelectorAll('table .code pre')[0])
        selection.removeAllRanges()
        selection.addRange(range)
        const text = selection.toString()
        copy(text, ele.lastChild)
        selection.removeAllRanges()
        $buttonParent.classList.remove('copy-true')
      }

      const highlightShrinkFn = (ele) => {
        const $nextEle = [...ele.parentNode.children].slice(1)
        ele.firstChild.classList.toggle('closed')
        if (btf.isHidden($nextEle[0])) {
          $nextEle.forEach(e => { e.style.display = 'block' })
        } else {
          $nextEle.forEach(e => { e.style.display = 'none' })
        }
      }

      const highlightToolsFn = function (e) {
        const $target = e.target.classList
        if ($target.contains('expand')) highlightShrinkFn(this)
        else if ($target.contains('copy-button')) highlightCopyFn(this)
      }

      const createEle = () => {
        const newEle = document.createElement('div')
        newEle.className = `highlight-tools ${highlightShrinkClass}`
        newEle.addEventListener('click', highlightToolsFn)
        return newEle
      }

      if (isHighlightLang) {
        if (isPrismjs) {
          $figureHighlight.forEach(function (item) {
            const langName = item.getAttribute('data-language') !== undefined ? item.getAttribute('data-language') : 'Code'
            const highlightLangEle = `<div class="code-lang">${langName}</div>`
            btf.wrap(item, 'figure', '', 'highlight')
            const newEle = createEle()
            newEle.innerHTML = highlightShrinkEle + highlightLangEle + highlightCopyEle
            item.parentNode.insertBefore(newEle, item)
          })
        } else {
          $figureHighlight.forEach(function (item) {
            let langName = item.getAttribute('class').split(' ')[1]
            if (langName === 'plain' || langName === undefined) langName = 'Code'
            const highlightLangEle = `<div class="code-lang">${langName}</div>`
            const newEle = createEle()
            newEle.innerHTML = highlightShrinkEle + highlightLangEle + highlightCopyEle
            item.insertBefore(newEle, item.firstChild)
          })
        }
      } else {
        if (isPrismjs) {
          $figureHighlight.forEach(function (item) {
            btf.wrap(item, 'figure', '', 'highlight')
            const newEle = createEle()
            newEle.innerHTML = highlightShrinkEle + highlightCopyEle
            item.parentNode.insertBefore(newEle, item)
          })
        } else {
          $figureHighlight.forEach(function (item) {
            const newEle = createEle()
            newEle.innerHTML = highlightShrinkEle + highlightCopyEle
            item.insertBefore(newEle, item.firstChild)
          })
        }
      }
    }
  }

  /**
 * PhotoFigcaption
 */
  function addPhotoFigcaption () {
    document.querySelectorAll('#article-container img').forEach(function (item) {
      const parentEle = item.parentNode
      if (!parentEle.parentNode.classList.contains('justified-gallery')) {
        const ele = document.createElement('div')
        ele.className = 'img-alt is-center'
        ele.textContent = item.getAttribute('alt')
        parentEle.insertBefore(ele, item.nextSibling)
      }
    })
  }

  /**
 * justified-gallery 圖庫排版
 * 需要 jQuery
 */

  let detectJgJsLoad = false
  const runJustifiedGallery = function (ele) {
    const $justifiedGallery = $(ele)
    const $imgList = $justifiedGallery.find('img')
    $imgList.unwrap()
    if ($imgList.length) {
      $imgList.each(function (i, o) {
        if ($(o).attr('data-lazy-src')) $(o).attr('src', $(o).attr('data-lazy-src'))
        $(o).wrap('<div></div>')
      })
    }

    if (detectJgJsLoad) btf.initJustifiedGallery($justifiedGallery)
    else {
      $('head').append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`)
      $.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`, function () {
        btf.initJustifiedGallery($justifiedGallery)
      })
      detectJgJsLoad = true
    }
  }

  /**
 * fancybox和 mediumZoom
 */
  const addFancybox = function (ele) {
    const runFancybox = (ele) => {
      ele.each(function (i, o) {
        const $this = $(o)
        const lazyloadSrc = $this.attr('data-lazy-src') || $this.attr('src')
        const dataCaption = $this.attr('alt') || ''
        $this.wrap(`<a href="${lazyloadSrc}" data-fancybox="group" data-caption="${dataCaption}" class="fancybox"></a>`)
      })

      $().fancybox({
        selector: '[data-fancybox]',
        loop: true,
        transitionEffect: 'slide',
        protect: true,
        buttons: ['slideShow', 'fullScreen', 'thumbs', 'close'],
        hash: false
      })
    }

    if (typeof $.fancybox === 'undefined') {
      $('head').append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`)
      $.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`, function () {
        runFancybox($(ele))
      })
    } else {
      runFancybox($(ele))
    }
  }

  const addMediumZoom = () => {
    const zoom = mediumZoom(document.querySelectorAll('#article-container :not(a)>img'))
    zoom.on('open', e => {
      const photoBg = document.documentElement.getAttribute('data-theme') === 'dark' ? '#121212' : '#fff'
      zoom.update({
        background: photoBg
      })
    })
  }

  const jqLoadAndRun = () => {
    const $fancyboxEle = GLOBAL_CONFIG.lightbox === 'fancybox'
      ? document.querySelectorAll('#article-container :not(a):not(.gallery-group) > img, #article-container > img')
      : []
    const fbLengthNoZero = $fancyboxEle.length > 0
    const $jgEle = document.querySelectorAll('#article-container .justified-gallery')
    const jgLengthNoZero = $jgEle.length > 0

    if (jgLengthNoZero || fbLengthNoZero) {
      btf.isJqueryLoad(() => {
        jgLengthNoZero && runJustifiedGallery($jgEle)
        fbLengthNoZero && addFancybox($fancyboxEle)
      })
    }
  }

  /**
 * 滾動處理
 */
  const scrollFn = function () {
    const $rightside = document.getElementById('rightside')
    const innerHeight = window.innerHeight + 56

    // 當滾動條小于 56 的時候
    if (document.body.scrollHeight <= innerHeight) {
      $rightside.style.cssText = 'opacity: 1; transform: translateX(-38px)'
      return
    }

    let initTop = 0
    let isChatShow = true
    const $header = document.getElementById('page-header')
    const isChatBtnHide = typeof chatBtnHide === 'function'
    const isChatBtnShow = typeof chatBtnShow === 'function'
    window.addEventListener('scroll', btf.throttle(function (e) {
      const currentTop = window.scrollY || document.documentElement.scrollTop
      const isDown = scrollDirection(currentTop)
      if (currentTop > 56) {
        if (isDown) {
          if ($header.classList.contains('nav-visible')) $header.classList.remove('nav-visible')
          if (isChatBtnShow && isChatShow === true) {
            chatBtnHide()
            isChatShow = false
          }
        } else {
          if (!$header.classList.contains('nav-visible')) $header.classList.add('nav-visible')
          if (isChatBtnHide && isChatShow === false) {
            chatBtnShow()
            isChatShow = true
          }
        }
        $header.classList.add('nav-fixed')
        if (window.getComputedStyle($rightside).getPropertyValue('opacity') === '0') {
          $rightside.style.cssText = 'opacity: 1; transform: translateX(-38px)'
        }
      } else {
        if (currentTop === 0) {
          $header.classList.remove('nav-fixed', 'nav-visible')
        }
        $rightside.style.cssText = "opacity: ''; transform: ''"
      }

      if (document.body.scrollHeight <= innerHeight) {
        $rightside.style.cssText = 'opacity: 1; transform: translateX(-38px)'
      }
    }, 200))

    // find the scroll direction
    function scrollDirection (currentTop) {
      const result = currentTop > initTop // true is down & false is up
      initTop = currentTop
      return result
    }
  }

  /**
 *  toc
 */
  const tocFn = function () {
    const $cardTocLayout = document.getElementById('card-toc')
    const $cardToc = $cardTocLayout.getElementsByClassName('toc-content')[0]
    const $tocLink = $cardToc.querySelectorAll('.toc-link')
    const $article = document.getElementById('article-container')

    // main of scroll
    window.addEventListener('scroll', btf.throttle(function (e) {
      const currentTop = window.scrollY || document.documentElement.scrollTop
      scrollPercent(currentTop)
      findHeadPosition(currentTop)
    }, 100))

    const scrollPercent = function (currentTop) {
      const docHeight = $article.clientHeight
      const winHeight = document.documentElement.clientHeight
      const headerHeight = $article.offsetTop
      const contentMath = (docHeight > winHeight) ? (docHeight - winHeight) : (document.documentElement.scrollHeight - winHeight)
      const scrollPercent = (currentTop - headerHeight) / (contentMath)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
      const percentage = (scrollPercentRounded > 100) ? 100 : (scrollPercentRounded <= 0) ? 0 : scrollPercentRounded
      $cardToc.setAttribute('progress-percentage', percentage)
    }

    // anchor
    const isAnchor = GLOBAL_CONFIG.isanchor
    const updateAnchor = function (anchor) {
      if (window.history.replaceState && anchor !== window.location.hash) {
        if (!anchor) anchor = location.pathname
        window.history.replaceState({}, '', anchor)
      }
    }

    const mobileToc = {
      open: () => {
        $cardTocLayout.style.cssText = 'animation: toc-open .3s; opacity: 1; right: 45px'
      },

      close: () => {
        $cardTocLayout.style.animation = 'toc-close .2s'
        setTimeout(() => {
          $cardTocLayout.style.cssText = "opacity:''; animation: ''; right: ''"
        }, 100)
      }
    }

    document.getElementById('mobile-toc-button').addEventListener('click', () => {
      if (window.getComputedStyle($cardTocLayout).getPropertyValue('opacity') === '0') mobileToc.open()
      else mobileToc.close()
    })

    // toc元素點擊
    $cardToc.addEventListener('click', (e) => {
      e.preventDefault()
      const $target = e.target.classList.contains('toc-link')
        ? e.target
        : e.target.parentElement
      btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI($target.getAttribute('href')).replace('#', ''))), 300)
      if (window.innerWidth < 900) {
        mobileToc.close()
      }
    })

    const autoScrollToc = function (item) {
      const activePosition = item.getBoundingClientRect().top
      const sidebarScrollTop = $cardToc.scrollTop
      if (activePosition > (document.documentElement.clientHeight - 100)) {
        $cardToc.scrollTop = sidebarScrollTop + 150
      }
      if (activePosition < 100) {
        $cardToc.scrollTop = sidebarScrollTop - 150
      }
    }

    // find head position & add active class
    const list = $article.querySelectorAll('h1,h2,h3,h4,h5,h6')
    let detectItem = ''
    const findHeadPosition = function (top) {
      if ($tocLink.length === 0 || top === 0) {
        return false
      }

      let currentId = ''
      let currentIndex = ''

      list.forEach(function (ele, index) {
        if (top > btf.getEleTop(ele) - 80) {
          currentId = '#' + encodeURI(ele.getAttribute('id'))
          currentIndex = index
        }
      })

      if (detectItem === currentIndex) return

      if (isAnchor) updateAnchor(currentId)

      if (currentId === '') {
        $cardToc.querySelectorAll('.active').forEach(i => { i.classList.remove('active') })
        detectItem = currentIndex
        return
      }

      detectItem = currentIndex

      $cardToc.querySelectorAll('.active').forEach(item => { item.classList.remove('active') })
      const currentActive = $tocLink[currentIndex]
      currentActive.classList.add('active')

      setTimeout(() => {
        autoScrollToc(currentActive)
      }, 0)

      let parent = currentActive.parentNode

      for (; !parent.matches('.toc'); parent = parent.parentNode) {
        if (parent.matches('li')) parent.classList.add('active')
      }
    }
  }

  /**
 * Rightside
 */
  const rightSideFn = {
    switchReadMode: () => { // read-mode
      const $body = document.body
      $body.classList.add('read-mode')
      const newEle = document.createElement('button')
      newEle.type = 'button'
      newEle.className = 'fas fa-sign-out-alt exit-readmode'
      $body.appendChild(newEle)

      function clickFn () {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
      }

      newEle.addEventListener('click', clickFn)
    },
    switchDarkMode: () => { // Switch Between Light And Dark Mode
      const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
      if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
      } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
      }
      // handle some cases
      typeof utterancesTheme === 'function' && utterancesTheme()
      typeof FB === 'object' && window.loadFBComment()
      window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
    },
    showOrHideBtn: () => { // rightside 點擊設置 按鈕 展開
      document.getElementById('rightside-config-hide').classList.toggle('show')
    },
    scrollToTop: () => { // Back to top
      btf.scrollToDest(0, 500)
    },
    hideAsideBtn: () => { // Hide aside
      const $htmlDom = document.documentElement.classList
      $htmlDom.contains('hide-aside')
        ? saveToLocal.set('aside-status', 'show', 2)
        : saveToLocal.set('aside-status', 'hide', 2)
      $htmlDom.toggle('hide-aside')
    },

    adjustFontSize: (plus) => {
      const fontSizeVal = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--global-font-size'))
      let newValue = ''
      if (plus) {
        if (fontSizeVal >= 20) return
        newValue = fontSizeVal + 1
        document.documentElement.style.setProperty('--global-font-size', newValue + 'px')
        !document.getElementById('nav').classList.contains('hide-menu') && adjustMenu(true)
      } else {
        if (fontSizeVal <= 10) return
        newValue = fontSizeVal - 1
        document.documentElement.style.setProperty('--global-font-size', newValue + 'px')
        document.getElementById('nav').classList.contains('hide-menu') && adjustMenu(true)
      }

      saveToLocal.set('global-font-size', newValue, 2)
      // document.getElementById('font-text').innerText = newValue
    }
  }

  document.getElementById('rightside').addEventListener('click', function (e) {
    const $target = e.target.id || e.target.parentNode.id
    switch ($target) {
      case 'go-up':
        rightSideFn.scrollToTop()
        break
      case 'rightside_config':
        rightSideFn.showOrHideBtn()
        break
      case 'readmode':
        rightSideFn.switchReadMode()
        break
      case 'darkmode':
        rightSideFn.switchDarkMode()
        break
      case 'hide-aside-btn':
        rightSideFn.hideAsideBtn()
        break
      case 'font-plus':
        rightSideFn.adjustFontSize(true)
        break
      case 'font-minus':
        rightSideFn.adjustFontSize()
        break
      default:
        break
    }
  })

  /**
 * menu
 * 側邊欄sub-menu 展開/收縮
 * 解決menus在觸摸屏下，滑動屏幕menus_item_child不消失的問題（手機hover的bug)
 */
  const clickFnOfSubMenu = function () {
    document.querySelectorAll('#sidebar-menus .expand').forEach(function (e) {
      e.addEventListener('click', function () {
        this.classList.toggle('hide')
        const $dom = this.parentNode.nextElementSibling
        if (btf.isHidden($dom)) {
          $dom.style.display = 'block'
        } else {
          $dom.style.display = 'none'
        }
      })
    })

    window.addEventListener('touchmove', function (e) {
      const $menusChild = document.querySelectorAll('#nav .menus_item_child')
      $menusChild.forEach(item => {
        if (!btf.isHidden(item)) item.style.display = 'none'
      })
    })
  }

  /**
 * 複製時加上版權信息
 */
  const addCopyright = () => {
    const copyright = GLOBAL_CONFIG.copyright
    document.body.oncopy = (e) => {
      e.preventDefault()
      let textFont; const copyFont = window.getSelection(0).toString()
      if (copyFont.length > copyright.limitCount) {
        textFont = copyFont + '\n' + '\n' + '\n' +
        copyright.languages.author + '\n' +
        copyright.languages.link + window.location.href + '\n' +
        copyright.languages.source + '\n' +
        copyright.languages.info
      } else {
        textFont = copyFont
      }
      if (e.clipboardData) {
        return e.clipboardData.setData('text', textFont)
      } else {
        return window.clipboardData.setData('text', textFont)
      }
    }
  }

  /**
 * 網頁運行時間
 */
  const addRuntime = () => {
    const $runtimeCount = document.getElementById('runtimeshow')
    if ($runtimeCount) {
      const publishDate = $runtimeCount.getAttribute('data-publishDate')
      $runtimeCount.innerText = btf.diffDate(publishDate) + ' ' + GLOBAL_CONFIG.runtime
    }
  }

  /**
 * 最後一次更新時間
 */
  const addLastPushDate = () => {
    const $lastPushDateItem = document.getElementById('last-push-date')
    if ($lastPushDateItem) {
      const lastPushDate = $lastPushDateItem.getAttribute('data-lastPushDate')
      $lastPushDateItem.innerText = btf.diffDate(lastPushDate, true)
    }
  }

  /**
 * table overflow
 */
  const addTableWrap = function () {
    const $table = document.querySelectorAll('#article-container :not(.highlight) > table, #article-container > table')
    if ($table.length) {
      $table.forEach(item => {
        btf.wrap(item, 'div', '', 'table-wrap')
      })
    }
  }

  /**
 * tag-hide
 */
  const clickFnOfTagHide = function () {
    const $hideInline = document.querySelectorAll('#article-container .hide-button')
    if ($hideInline.length) {
      $hideInline.forEach(function (item) {
        item.addEventListener('click', function (e) {
          const $this = this
          const $hideContent = $this.nextElementSibling
          $this.classList.toggle('open')
          if ($this.classList.contains('open')) {
            if ($hideContent.querySelectorAll('.justified-gallery').length > 0) {
              btf.initJustifiedGallery($hideContent.querySelectorAll('.justified-gallery'))
            }
          }
        })
      })
    }
  }

  const tabsFn = {
    clickFnOfTabs: function () {
      document.querySelectorAll('#article-container .tab > button').forEach(function (item) {
        item.addEventListener('click', function (e) {
          const $this = this
          const $tabItem = $this.parentNode

          if (!$tabItem.classList.contains('active')) {
            const $tabContent = $tabItem.parentNode.nextElementSibling
            const $siblings = btf.siblings($tabItem, '.active')[0]
            $siblings && $siblings.classList.remove('active')
            $tabItem.classList.add('active')
            const tabId = $this.getAttribute('data-href').replace('#', '')
            const childList = [...$tabContent.children]
            childList.forEach(item => {
              if (item.id === tabId) item.classList.add('active')
              else item.classList.remove('active')
            })
            const $isTabJustifiedGallery = $tabContent.querySelectorAll(`#${tabId} .justified-gallery`)
            if ($isTabJustifiedGallery.length > 0) {
              btf.initJustifiedGallery($isTabJustifiedGallery)
            }
          }
        })
      })
    },
    backToTop: () => {
      document.querySelectorAll('#article-container .tabs .tab-to-top').forEach(function (item) {
        item.addEventListener('click', function () {
          btf.scrollToDest(btf.getEleTop(btf.getParents(this, '.tabs')), 300)
        })
      })
    }
  }

  const toggleCardCategory = function () {
    const $cardCategory = document.querySelectorAll('#aside-cat-list .card-category-list-item.parent i')
    if ($cardCategory.length) {
      $cardCategory.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault()
          const $this = this
          $this.classList.toggle('expand')
          const $parentEle = $this.parentNode.nextElementSibling
          if (btf.isHidden($parentEle)) {
            $parentEle.style.display = 'block'
          } else {
            $parentEle.style.display = 'none'
          }
        })
      })
    }
  }

  const switchComments = function () {
    let switchDone = false
    const $switchBtn = document.querySelector('#comment-switch > .switch-btn')
    $switchBtn && $switchBtn.addEventListener('click', function () {
      this.classList.toggle('move')
      document.querySelectorAll('#post-comment > .comment-wrap > div').forEach(function (item) {
        if (btf.isHidden(item)) {
          item.style.cssText = 'display: block;animation: tabshow .5s'
        } else {
          item.style.cssText = "display: none;animation: ''"
        }
      })

      if (!switchDone && typeof loadOtherComment === 'function') {
        switchDone = true
        loadOtherComment()
      }
    })
  }

  const addPostOutdateNotice = function () {
    const data = GLOBAL_CONFIG.noticeOutdate
    const diffDay = btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate)
    if (diffDay >= data.limitDay) {
      const ele = document.createElement('div')
      ele.className = 'post-outdate-notice'
      ele.textContent = data.messagePrev + ' ' + diffDay + ' ' + data.messageNext
      const $targetEle = document.getElementById('article-container')
      if (data.position === 'top') {
        $targetEle.insertBefore(ele, $targetEle.firstChild)
      } else {
        $targetEle.appendChild(ele)
      }
    }
  }

  const lazyloadImg = () => {
    window.lazyLoadInstance = new LazyLoad({
      elements_selector: 'img',
      threshold: 0,
      data_src: 'lazy-src'
    })
  }

  const relativeDate = function (selector) {
    selector.forEach(item => {
      const $this = item
      const timeVal = $this.getAttribute('datetime')
      $this.innerText = btf.diffDate(timeVal, true)
      $this.style.display = 'inline'
    })
  }

  const unRefreshFn = function () {
    window.addEventListener('resize', adjustMenu)
    window.addEventListener('orientationchange', () => { setTimeout(adjustMenu(true), 100) })

    clickFnOfSubMenu()
    GLOBAL_CONFIG.islazyload && lazyloadImg()
    GLOBAL_CONFIG.copyright !== undefined && addCopyright()
  }

  window.refreshFn = function () {
    initAdjust()

    if (GLOBAL_CONFIG_SITE.isPost) {
      GLOBAL_CONFIG_SITE.isToc && tocFn()
      GLOBAL_CONFIG.noticeOutdate !== undefined && addPostOutdateNotice()
      GLOBAL_CONFIG.relativeDate.post && relativeDate(document.querySelectorAll('#post-meta time'))
    } else {
      GLOBAL_CONFIG.relativeDate.homepage && relativeDate(document.querySelectorAll('#recent-posts time'))
      GLOBAL_CONFIG.runtime && addRuntime()
      addLastPushDate()
      toggleCardCategory()
    }

    sidebarFn()
    GLOBAL_CONFIG_SITE.isHome && scrollDownInIndex()
    GLOBAL_CONFIG.highlight && addHighlightTool()
    GLOBAL_CONFIG.isPhotoFigcaption && addPhotoFigcaption()
    jqLoadAndRun()
    GLOBAL_CONFIG.lightbox === 'mediumZoom' && addMediumZoom()
    scrollFn()
    addTableWrap()
    clickFnOfTagHide()
    tabsFn.clickFnOfTabs()
    tabsFn.backToTop()
    switchComments()
  }

  refreshFn()
  unRefreshFn()
})
>>>>>>> 3e97763690f511fc231bb0afcd11232b307decb9
