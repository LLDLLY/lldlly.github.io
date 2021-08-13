<<<<<<< HEAD
"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var btf={debounce:function(r,o,i){var a;return function(){var e=this,t=arguments,n=i&&!a;clearTimeout(a),a=setTimeout(function(){a=null,i||r.apply(e,t)},o),n&&r.apply(e,t)}},throttle:function(n,r,o){var i,a,s,u=0;function l(){u=!1===o.leading?0:(new Date).getTime(),i=null,n.apply(a,s),i||(a=s=null)}return o=o||{},function(){var e=(new Date).getTime();u||!1!==o.leading||(u=e);var t=r-(e-u);a=this,s=arguments,t<=0||r<t?(i&&(clearTimeout(i),i=null),u=e,n.apply(a,s),i||(a=s=null)):i||!1===o.trailing||(i=setTimeout(l,t))}},sidebarPaddingR:function(){var e=window.innerWidth,t=document.body.clientWidth,n=e-t;e!==t&&(document.body.style.paddingRight=n+"px")},snackbarShow:function(e,t,n){var r=void 0!==t&&t,o=void 0!==n?n:2e3,t=GLOBAL_CONFIG.Snackbar.position,n="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:e,backgroundColor:n,showAction:r,duration:o,pos:t})},initJustifiedGallery:function(e){(e=e instanceof jQuery?e:$(e)).each(function(e,t){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})},diffDate:function(e){var t,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=new Date,o=new Date(e),i=r.getTime()-o.getTime();return n?(t=i/864e5,e=i/36e5,r=i/6e4,12<(n=i/2592e6)?o.toLocaleDateString().replace(/\//g,"-"):1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.month:1<=t?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.day:1<=e?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=r?parseInt(r)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(i/864e5)},loadComment:function(e,t){var n;"IntersectionObserver"in window?(n=new IntersectionObserver(function(e){e[0].isIntersecting&&(t(),n.disconnect())},{threshold:[0]})).observe(e):t()},scrollToDest:function(r,o){var i,a;r<0||o<0||(i=window.scrollY||window.screenTop,r<i&&(r-=70),"CSS"in window&&CSS.supports("scroll-behavior","smooth")?window.scrollTo({top:r,behavior:"smooth"}):(a=null,o=o||500,window.requestAnimationFrame(function e(t){var n;a=a||t,i<r?(n=t-a,window.scrollTo(0,(r-i)*n/o+i),n<o?window.requestAnimationFrame(e):window.scrollTo(0,r)):(t-=a,window.scrollTo(0,i-(i-r)*t/o),t<o?window.requestAnimationFrame(e):window.scrollTo(0,r))})))},fadeIn:function(e,t){e.style.cssText="display:block;animation: to_show ".concat(t,"s")},fadeOut:function(t,e){t.addEventListener("animationend",function e(){t.style.cssText="display: none; animation: '' ",t.removeEventListener("animationend",e)}),t.style.animation="to_hide ".concat(e,"s")},getParents:function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:function(t,n){return _toConsumableArray(t.parentNode.children).filter(function(e){return n?e!==t&&e.matches(n):e!==t})},wrap:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"",t=document.createElement(t);n&&(t.id=n),r&&(t.className=r),e.parentNode.insertBefore(t,e),t.appendChild(e)},unwrap:function(e){var t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isJqueryLoad:function(e){"undefined"==typeof jQuery?getScript(GLOBAL_CONFIG.source.jQuery).then(e):e()},isHidden:function(e){return 0===e.offsetHeight&&0===e.offsetWidth},getEleTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t}};
=======
const btf = {
  debounce: function (func, wait, immediate) {
    let timeout
    return function () {
      const context = this
      const args = arguments
      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  },

  throttle: function (func, wait, options) {
    let timeout, context, args
    let previous = 0
    if (!options) options = {}

    const later = function () {
      previous = options.leading === false ? 0 : new Date().getTime()
      timeout = null
      func.apply(context, args)
      if (!timeout) context = args = null
    }

    const throttled = function () {
      const now = new Date().getTime()
      if (!previous && options.leading === false) previous = now
      const remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
    }

    return throttled
  },

  sidebarPaddingR: () => {
    const innerWidth = window.innerWidth
    const clientWidth = document.body.clientWidth
    const paddingRight = innerWidth - clientWidth
    if (innerWidth !== clientWidth) {
      document.body.style.paddingRight = paddingRight + 'px'
    }
  },

  snackbarShow: (text, showAction, duration) => {
    const sa = (typeof showAction !== 'undefined') ? showAction : false
    const dur = (typeof duration !== 'undefined') ? duration : 2000
    const position = GLOBAL_CONFIG.Snackbar.position
    const bg = document.documentElement.getAttribute('data-theme') === 'light' ? GLOBAL_CONFIG.Snackbar.bgLight : GLOBAL_CONFIG.Snackbar.bgDark
    Snackbar.show({
      text: text,
      backgroundColor: bg,
      showAction: sa,
      duration: dur,
      pos: position
    })
  },

  initJustifiedGallery: function (selector) {
    if (!(selector instanceof jQuery)) {
      selector = $(selector)
    }
    selector.each(function (i, o) {
      if ($(this).is(':visible')) {
        $(this).justifiedGallery({
          rowHeight: 220,
          margins: 4
        })
      }
    })
  },

  diffDate: (d, more = false) => {
    const dateNow = new Date()
    const datePost = new Date(d)
    const dateDiff = dateNow.getTime() - datePost.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30

    let result
    if (more) {
      const monthCount = dateDiff / month
      const dayCount = dateDiff / day
      const hourCount = dateDiff / hour
      const minuteCount = dateDiff / minute

      if (monthCount > 12) {
        result = datePost.toLocaleDateString().replace(/\//g, '-')
      } else if (monthCount >= 1) {
        result = parseInt(monthCount) + ' ' + GLOBAL_CONFIG.date_suffix.month
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + ' ' + GLOBAL_CONFIG.date_suffix.day
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + ' ' + GLOBAL_CONFIG.date_suffix.hour
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + ' ' + GLOBAL_CONFIG.date_suffix.min
      } else {
        result = GLOBAL_CONFIG.date_suffix.just
      }
    } else {
      result = parseInt(dateDiff / day)
    }
    return result
  },

  loadComment: (dom, callback) => {
    if ('IntersectionObserver' in window) {
      const observerItem = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback()
          observerItem.disconnect()
        }
      }, { threshold: [0] })
      observerItem.observe(dom)
    } else {
      callback()
    }
  },

  scrollToDest: (pos, time) => {
    if (pos < 0 || time < 0) {
      return
    }

    const currentPos = window.scrollY || window.screenTop
    if (currentPos > pos) pos = pos - 70

    if ('CSS' in window && CSS.supports('scroll-behavior', 'smooth')) {
      window.scrollTo({
        top: pos,
        behavior: 'smooth'
      })
      return
    }

    let start = null
    time = time || 500
    window.requestAnimationFrame(function step (currentTime) {
      start = !start ? currentTime : start
      if (currentPos < pos) {
        const progress = currentTime - start
        window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
        if (progress < time) {
          window.requestAnimationFrame(step)
        } else {
          window.scrollTo(0, pos)
        }
      } else {
        const progress = currentTime - start
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
        if (progress < time) {
          window.requestAnimationFrame(step)
        } else {
          window.scrollTo(0, pos)
        }
      }
    })
  },

  fadeIn: (ele, time) => {
    ele.style.cssText = `display:block;animation: to_show ${time}s`
  },

  fadeOut: (ele, time) => {
    ele.addEventListener('animationend', function f () {
      ele.style.cssText = "display: none; animation: '' "
      ele.removeEventListener('animationend', f)
    })
    ele.style.animation = `to_hide ${time}s`
  },

  getParents: (elem, selector) => {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem
    }
    return null
  },

  siblings: (ele, selector) => {
    return [...ele.parentNode.children].filter((child) => {
      if (selector) {
        return child !== ele && child.matches(selector)
      }
      return child !== ele
    })
  },

  /**
   *
   * @param {*} selector
   * @param {*} eleType the type of create element
   * @param {*} id id
   * @param {*} cn class name
   */
  wrap: function (selector, eleType, id = '', cn = '') {
    const creatEle = document.createElement(eleType)
    if (id) creatEle.id = id
    if (cn) creatEle.className = cn
    selector.parentNode.insertBefore(creatEle, selector)
    creatEle.appendChild(selector)
  },

  unwrap: function (el) {
    const elParentNode = el.parentNode
    if (elParentNode !== document.body) {
      elParentNode.parentNode.insertBefore(el, elParentNode)
      elParentNode.parentNode.removeChild(elParentNode)
    }
  },

  isJqueryLoad: (fn) => {
    if (typeof jQuery === 'undefined') {
      getScript(GLOBAL_CONFIG.source.jQuery).then(fn)
    } else {
      fn()
    }
  },

  isHidden: (ele) => ele.offsetHeight === 0 && ele.offsetWidth === 0,

  getEleTop: (ele) => {
    let actualTop = ele.offsetTop
    let current = ele.offsetParent

    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }

    return actualTop
  }

}
>>>>>>> 3e97763690f511fc231bb0afcd11232b307decb9
