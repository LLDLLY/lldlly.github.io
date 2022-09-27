"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var btf={debounce:function(r,o,i){var a;return function(){var e=this,t=arguments,n=i&&!a;clearTimeout(a),a=setTimeout(function(){a=null,i||r.apply(e,t)},o),n&&r.apply(e,t)}},throttle:function(n,r,o){function i(){l=!1===o.leading?0:(new Date).getTime(),a=null,n.apply(u,s),a||(u=s=null)}var a,u,s,l=0;o=o||{};return function(){var e=(new Date).getTime(),t=(l||!1!==o.leading||(l=e),r-(e-l));u=this,s=arguments,t<=0||r<t?(a&&(clearTimeout(a),a=null),l=e,n.apply(u,s),a||(u=s=null)):a||!1===o.trailing||(a=setTimeout(i,t))}},sidebarPaddingR:function(){var e=window.innerWidth,t=document.body.clientWidth;e!==t&&(document.body.style.paddingRight=e-t+"px")},snackbarShow:function(e,t,n){var t=void 0!==t&&t,n=void 0!==n?n:2e3,r=GLOBAL_CONFIG.Snackbar.position,o="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:e,backgroundColor:o,showAction:t,duration:n,pos:r})},initJustifiedGallery:function(e){(e=e instanceof jQuery?e:$(e)).each(function(e,t){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})},diffDate:function(e){var t,n,r,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=new Date,e=new Date(e),i=i.getTime()-e.getTime();return o?(o=i/864e5,n=i/36e5,r=i/6e4,12<(t=i/2592e6)?e.toLocaleDateString().replace(/\//g,"-"):1<=t?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.month:1<=o?parseInt(o)+" "+GLOBAL_CONFIG.date_suffix.day:1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=r?parseInt(r)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(i/864e5)},loadComment:function(e,t){var n;"IntersectionObserver"in window?(n=new IntersectionObserver(function(e){e[0].isIntersecting&&(t(),n.disconnect())},{threshold:[0]})).observe(e):t()},scrollToDest:function(r,o){var i,a;r<0||o<0||(i=window.scrollY||window.screenTop,r<i&&(r-=70),"CSS"in window&&CSS.supports("scroll-behavior","smooth")?window.scrollTo({top:r,behavior:"smooth"}):(a=null,o=o||500,window.requestAnimationFrame(function e(t){var n;a=a||t,i<r?(n=t-a,window.scrollTo(0,(r-i)*n/o+i),n<o?window.requestAnimationFrame(e):window.scrollTo(0,r)):(n=t-a,window.scrollTo(0,i-(i-r)*n/o),n<o?window.requestAnimationFrame(e):window.scrollTo(0,r))})))},fadeIn:function(e,t){e.style.cssText="display:block;animation: to_show ".concat(t,"s")},fadeOut:function(t,e){t.addEventListener("animationend",function e(){t.style.cssText="display: none; animation: '' ",t.removeEventListener("animationend",e)}),t.style.animation="to_hide ".concat(e,"s")},getParents:function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:function(t,n){return _toConsumableArray(t.parentNode.children).filter(function(e){return n?e!==t&&e.matches(n):e!==t})},wrap:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"",t=document.createElement(t);n&&(t.id=n),r&&(t.className=r),e.parentNode.insertBefore(t,e),t.appendChild(e)},unwrap:function(e){var t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isJqueryLoad:function(e){"undefined"==typeof jQuery?getScript(GLOBAL_CONFIG.source.jQuery).then(e):e()},isHidden:function(e){return 0===e.offsetHeight&&0===e.offsetWidth},getEleTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t}};