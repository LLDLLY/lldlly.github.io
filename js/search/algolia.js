<<<<<<< HEAD
"use strict";window.addEventListener("load",function(){function e(){document.body.style.cssText="width: 100%;overflow: hidden",document.querySelector("#algolia-search .search-dialog").style.display="block",document.querySelector("#algolia-search .ais-search-box--input").focus(),btf.fadeIn(document.getElementById("search-mask"),.5),document.addEventListener("keydown",function e(a){"Escape"===a.code&&(t(),document.removeEventListener("keydown",e))})}function a(){document.querySelector("#search-button > .search").addEventListener("click",e),document.getElementById("search-mask").addEventListener("click",t),document.querySelector("#algolia-search .search-close-button").addEventListener("click",t)}var t=function(){document.body.style.cssText="width: '';overflow: ''";var e=document.querySelector("#algolia-search .search-dialog");e.style.animation="search_close .5s",setTimeout(function(){e.style.cssText="display: none; animation: ''"},500),btf.fadeOut(document.getElementById("search-mask"),.5)};a(),window.addEventListener("pjax:complete",function(){"block"===getComputedStyle(document.querySelector("#algolia-search .search-dialog")).display&&t(),a()});var i=GLOBAL_CONFIG.algolia;if(!(i.appId&&i.apiKey&&i.indexName))return console.error("Algolia setting is invalid!");(i=instantsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,searchParameters:{hitsPerPage:i.hits.per_page||10},searchFunction:function(e){document.querySelector("#algolia-search-input input").value&&e.search()}})).addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:!1,magnifier:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder})),i.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(e){return'<a href="'+(e.permalink||GLOBAL_CONFIG.root+e.path)+'" class="algolia-hit-item-link">'+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}})),i.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(e){return"<hr>"+GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)+'<span class="algolia-logo pull-right">  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" /></span>'}}})),i.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirstLast:!1,labels:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})),i.start(),window.pjax&&i.on("render",function(){window.pjax.refresh(document.getElementById("algolia-hits"))})});
=======
window.addEventListener('load', () => {
  const openSearch = () => {
    document.body.style.cssText = 'width: 100%;overflow: hidden'
    document.querySelector('#algolia-search .search-dialog').style.display = 'block'
    document.querySelector('#algolia-search .ais-search-box--input').focus()
    btf.fadeIn(document.getElementById('search-mask'), 0.5)
    // shortcut: ESC
    document.addEventListener('keydown', function f (event) {
      if (event.code === 'Escape') {
        closeSearch()
        document.removeEventListener('keydown', f)
      }
    })
  }

  const closeSearch = () => {
    document.body.style.cssText = "width: '';overflow: ''"
    const $searchDialog = document.querySelector('#algolia-search .search-dialog')
    $searchDialog.style.animation = 'search_close .5s'
    setTimeout(() => { $searchDialog.style.cssText = "display: none; animation: ''" }, 500)
    btf.fadeOut(document.getElementById('search-mask'), 0.5)
  }

  const searchClickFn = () => {
    document.querySelector('#search-button > .search').addEventListener('click', openSearch)
    document.getElementById('search-mask').addEventListener('click', closeSearch)
    document.querySelector('#algolia-search .search-close-button').addEventListener('click', closeSearch)
  }

  searchClickFn()

  window.addEventListener('pjax:complete', function () {
    getComputedStyle(document.querySelector('#algolia-search .search-dialog')).display === 'block' && closeSearch()
    searchClickFn()
  })

  const algolia = GLOBAL_CONFIG.algolia
  const isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
  if (!isAlgoliaValid) {
    return console.error('Algolia setting is invalid!')
  }

  const search = instantsearch({
    appId: algolia.appId,
    apiKey: algolia.apiKey,
    indexName: algolia.indexName,
    searchParameters: {
      hitsPerPage: algolia.hits.per_page || 10
    },
    searchFunction: function (helper) {
      const searchInput = document.querySelector('#algolia-search-input input')

      if (searchInput.value) {
        helper.search()
      }
    }
  })

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#algolia-search-input',
      reset: false,
      magnifier: false,
      placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder
    })
  )
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#algolia-hits',
      templates: {
        item: function (data) {
          const link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
          return (
            '<a href="' + link + '" class="algolia-hit-item-link">' +
            data._highlightResult.title.value +
            '</a>'
          )
        },
        empty: function (data) {
          return (
            '<div id="algolia-hits-empty">' +
            GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
            '</div>'
          )
        }
      },
      cssClasses: {
        item: 'algolia-hit-item'
      }
    })
  )

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#algolia-stats',
      templates: {
        body: function (data) {
          const stats = GLOBAL_CONFIG.algolia.languages.hits_stats
            .replace(/\$\{hits}/, data.nbHits)
            .replace(/\$\{time}/, data.processingTimeMS)
          return (
            '<hr>' +
            stats +
            '<span class="algolia-logo pull-right">' +
            '  <img src="' + GLOBAL_CONFIG.root + 'img/algolia.svg" alt="Algolia" />' +
            '</span>'
          )
        }
      }
    })
  )

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#algolia-pagination',
      scrollTo: false,
      showFirstLast: false,
      labels: {
        first: '<i class="fas fa-angle-double-left"></i>',
        last: '<i class="fas fa-angle-double-right"></i>',
        previous: '<i class="fas fa-angle-left"></i>',
        next: '<i class="fas fa-angle-right"></i>'
      },
      cssClasses: {
        root: 'pagination',
        item: 'pagination-item',
        link: 'page-number',
        active: 'current',
        disabled: 'disabled-item'
      }
    })
  )
  search.start()

  window.pjax && search.on('render', () => {
    window.pjax.refresh(document.getElementById('algolia-hits'))
  })
})
>>>>>>> 3e97763690f511fc231bb0afcd11232b307decb9
