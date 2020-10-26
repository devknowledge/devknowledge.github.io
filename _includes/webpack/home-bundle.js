(()=>{"use strict";var t,e=(t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)},function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),o=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<o;e++)for(var r=arguments[e],i=0,a=r.length;i<a;i++,s++)n[s]=r[i];return n},n=function(){function t(){}return t.prototype.preHtmlInsert=function(){},t.prototype.dispatchCustomEvent=function(t,e){void 0===e&&(e={}),document.dispatchEvent(new CustomEvent(t,{detail:e}))},t.prototype.addCustomEventListener=function(t,e){document.addEventListener(t,e)},t.prototype.delay=function(t,e){var n=null;return function(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];clearTimeout(n),n=setTimeout(t.bind.apply(t,o([this],s)),e||0)}},t}(),s=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.postHtmlInsert=function(){},o}(n),r=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.toHtml=function(){try{return'\n        <footer>\n          <p>© 2020 devknowledge.github.io</p>\n          <a href="https://github.com/devknowledge/devknowledge.github.io" target="_blank">\n            <span class="iconify" data-icon="codicon:github-inverted" data-inline="false"></span>\n          </a>\n        </footer>\n      '}catch(t){console.error("error while executing Footer.toHtml() method. error: "+t)}},e}(s),a="filter-posts",l="load-more-posts",c="displayed-posts-change",p=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.toHtml=function(){try{return'\n        <div id="LOAD_MORE_POSTS_WRAPPER_ID" class="load-more-posts-wrapper hide">\n          <p id="LOAD_MORE_POSTS_PARAGRAPH_ID" class="displayed-posts-count"></p>\n          <div class="displayed-posts-count-rule-wrapper">\n            <div id="LOAD_MORE_POSTS_COUNT_RULE_ID" class="displayed-posts-count-rule"></div>\n            <div class="displayed-posts-count-100-rule"></div>\n          </div>\n          <button id="LOAD_MORE_POSTS_BUTTON_ID" class="load-more-posts">Load more posts</button>\n        </div>\n      '}catch(t){console.error("error while executing LoadMorePostsHtmlComponent.toHtml() method. error: "+t)}},e.prototype.postHtmlInsert=function(){this.initClassAttributes(),this.addCustomEventListener(c,this.handleDisplayedPostsChangeEvent.bind(this)),this.loadMorePostsButtonDomElement.addEventListener("click",this.handleLoadMorePostsButtonClickEvent.bind(this))},e.prototype.initClassAttributes=function(){this.loadMorePostsWrapperDomElement=document.getElementById("LOAD_MORE_POSTS_WRAPPER_ID"),this.loadMorePostsParagraphDomElement=document.getElementById("LOAD_MORE_POSTS_PARAGRAPH_ID"),this.loadMorePostsCountRuleDomElement=document.getElementById("LOAD_MORE_POSTS_COUNT_RULE_ID"),this.loadMorePostsButtonDomElement=document.getElementById("LOAD_MORE_POSTS_BUTTON_ID")},e.prototype.handleDisplayedPostsChangeEvent=function(t){var e=t.detail.filteredPostsCount,o=t.detail.displayedPostsCount;0==o?this.loadMorePostsWrapperDomElement.classList.add("hide"):(this.loadMorePostsWrapperDomElement.classList.remove("hide"),this.loadMorePostsParagraphDomElement.innerHTML="You are viewing "+o+" of "+e+" posts",this.loadMorePostsCountRuleDomElement.style.width=o/e*100+"%",e==o?this.loadMorePostsButtonDomElement.classList.add("hide"):this.loadMorePostsButtonDomElement.classList.remove("hide"))},e.prototype.handleLoadMorePostsButtonClickEvent=function(){this.dispatchCustomEvent(l)},e}(n),u=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.toHtml=function(){try{return'\n        <div class="search-wrapper">\n          <span class="iconify" data-icon="ic:outline-search" data-inline="false"></span>\n          <input id="SEARCH_POSTS_INPUT_ID" type="text" placeholder="Search..." />\n          <span id="CLOSE_ADVANCED_SEARCH_PANEL_BUTTON_ID" class="hide">\n            <span class="iconify pointer" data-icon="eva:arrow-ios-upward-outline" data-inline="false"></span>\n          </span>\n          <span id="OPEN_ADVANCED_SEARCH_PANEL_BUTTON_ID">\n            <span class="iconify pointer" data-icon="eva:arrow-ios-downward-outline" data-inline="false"></span>\n          </span>\n          <div id="ADVANCED_SEARCH_PANEL_ID" class="advanced-search-inputs-wrapper hide">\n            <div class="section-title-wrapper">\n              <p class="section-title">Selected categories</p>\n              <span id="UNSELECT_ALL_CATEGORIES_BUTTON_ID" class="iconify-wrapper">\n                <span class="iconify pointer" title="unselect all categories" data-icon="gg:remove-r" data-inline="false"></span>\n              </span>\n              <span id="SELECT_ALL_CATEGORIES_BUTTON_ID" class="hide iconify-wrapper">\n                <span class="iconify pointer" title="select all categories" data-icon="feather:plus-square" data-inline="false"></span>\n              </span>\n            </div>\n            '+this.renderCategories()+"\n          </div>\n        </div>\n      "}catch(t){console.error("error while executing WelcomeMessage.toHtml() method. error: "+t)}},e.prototype.postHtmlInsert=function(){this.initClassAttributes(),this.addEventListeners()},e.prototype.renderCategories=function(){var t="";return window.jekyll.categories.forEach((function(e){return t+='<span class="category">'+e+"</span>"})),t},e.prototype.initClassAttributes=function(){this.searchPostsInputDomElement=document.getElementById("SEARCH_POSTS_INPUT_ID"),this.advancedSearchPanelDomElement=document.getElementById("ADVANCED_SEARCH_PANEL_ID"),this.closeAdvancedSearchPanelButtonDomElement=document.getElementById("CLOSE_ADVANCED_SEARCH_PANEL_BUTTON_ID"),this.openAdvancedSearchPanelButtonDomElement=document.getElementById("OPEN_ADVANCED_SEARCH_PANEL_BUTTON_ID"),this.selectAllCategoriesButtonDomElement=document.getElementById("SELECT_ALL_CATEGORIES_BUTTON_ID"),this.unselectAllCategoriesButtonDomElement=document.getElementById("UNSELECT_ALL_CATEGORIES_BUTTON_ID"),this.allCategoriesDomElements=document.querySelectorAll(".search-wrapper .category"),this.allCategoriesLowercase=this.getAllCategoriesLowerCase(),this.selectedCategoriesLowercase=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<o;e++)for(var r=arguments[e],i=0,a=r.length;i<a;i++,s++)n[s]=r[i];return n}(this.allCategoriesLowercase),this.styleSelectedCategories()},e.prototype.addEventListeners=function(){var t=this;this.openAdvancedSearchPanelButtonDomElement.addEventListener("click",this.handleOpenAdvancedSearchPanelClickEvent.bind(this)),this.selectAllCategoriesButtonDomElement.addEventListener("click",this.handleSelectAllCategoriesButtonClickEvent.bind(this)),this.unselectAllCategoriesButtonDomElement.addEventListener("click",this.handleUnselectAllCategoriesButtonClickEvent.bind(this)),this.advancedSearchPanelDomElement.addEventListener("click",this.handleAdvancedSearchPanelClickEvent.bind(this)),this.allCategoriesDomElements.forEach((function(e){return e.addEventListener("click",t.toggleCategory.bind(t))})),this.searchPostsInputDomElement.addEventListener("keyup",this.delay(this.dispatchFilterPostsEvent.bind(this),500)),document.addEventListener("click",this.closeAdvancedSearchPanel.bind(this))},e.prototype.getAllCategoriesLowerCase=function(){return window.jekyll.categories.map((function(t){return t.toLowerCase()}))},e.prototype.styleSelectedCategories=function(){var t=this;this.allCategoriesDomElements.forEach((function(e){t.selectedCategoriesLowercase.includes(e.innerText)?e.classList.add("selected"):e.classList.remove("selected")}))},e.prototype.handleOpenAdvancedSearchPanelClickEvent=function(t){t.stopPropagation(),this.openAdvancedSearchPanelButtonDomElement.classList.add("hide"),this.closeAdvancedSearchPanelButtonDomElement.classList.remove("hide"),this.advancedSearchPanelDomElement.classList.remove("hide")},e.prototype.handleSelectAllCategoriesButtonClickEvent=function(t){var e=this;this.selectAllCategoriesButtonDomElement.classList.add("hide"),this.unselectAllCategoriesButtonDomElement.classList.remove("hide"),this.allCategoriesDomElements.forEach((function(t){t.classList.add("selected"),e.selectedCategoriesLowercase.push(t.innerText.toLowerCase())})),this.dispatchFilterPostsEvent()},e.prototype.handleUnselectAllCategoriesButtonClickEvent=function(t){this.selectAllCategoriesButtonDomElement.classList.remove("hide"),this.unselectAllCategoriesButtonDomElement.classList.add("hide"),this.selectedCategoriesLowercase=[],this.allCategoriesDomElements.forEach((function(t){return t.classList.remove("selected")})),this.dispatchFilterPostsEvent()},e.prototype.handleAdvancedSearchPanelClickEvent=function(t){t.stopPropagation()},e.prototype.closeAdvancedSearchPanel=function(){this.openAdvancedSearchPanelButtonDomElement.classList.remove("hide"),this.closeAdvancedSearchPanelButtonDomElement.classList.add("hide"),this.advancedSearchPanelDomElement.classList.add("hide")},e.prototype.toggleCategory=function(t){var e=t.target,o=e.innerText.toLowerCase();this.selectedCategoriesLowercase.includes(o)?(this.selectedCategoriesLowercase=this.selectedCategoriesLowercase.filter((function(t){return t!==o})),e.classList.remove("selected")):(this.selectedCategoriesLowercase.push(o),e.classList.add("selected")),this.dispatchFilterPostsEvent()},e.prototype.dispatchFilterPostsEvent=function(){this.dispatchCustomEvent(a,{selectedCategoriesLowercase:this.selectedCategoriesLowercase,searchInputText:this.searchPostsInputDomElement.value})},e}(n),h=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.prototype.toHtml=function(){try{return'\n        <div class="post-summary-template">\n          <div class="post-summary-template__top-section shimmer">\n          </div>\n          <div class="post-summary-template__bottom-section">\n            <div>\n              <div class="post-summary-template__title shimmer"></div>\n              <div>\n                <div class="post-summary-template__extract shimmer"></div>\n                <div class="post-summary-template__extract shimmer"></div>\n                <div class="post-summary-template__extract shimmer"></div>\n              </div>\n            </div>\n            <div>\n              <div class="post-summary-template__author shimmer"></div>\n            </div>\n          </div>\n        </div>\n      '}catch(t){console.error("error while executing PostSummaryTemplateHtmlComponent.toHtml() method. error: "+t)}},e}(s),f=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),_=function(t){function e(e){var o=t.call(this)||this;return o.post=e,o}return f(e,t),e.prototype.toHtml=function(){try{return'\n      <div class="post-summary">\n        <a href="'+this.post.url+'">\n          <div class="post-summary__top-section">\n            <img class="post-summary__banner" src="'+this.post.banner+'" alt="banner" />\n            <p class="post-summary__category">'+this.post.category+'</p>\n            <p class="post-summary__date">'+this.post.date+'</p>\n          </div>\n          <div class="post-summary__bottom-section">\n            <div>\n              <h2 class="post-summary__title">'+this.post.title+'</h2>\n              <p class="post-summary__extract">'+this.post.excerpt+'</p>\n            </div>\n            <div>\n              <div class="post-summary__tags-wrapper">\n                <span class="post-summary__icon iconify" data-icon="ion:pricetags" data-inline="false"></span>\n                '+this.renderPostTags()+'\n              </div>\n              <div class="post-summary__author-wrapper">\n                <span class="post-summary__icon iconify" data-icon="mdi:account-edit" data-inline="false"></span>\n                <object><a target="_blank" class="post-summary__author" href="'+this.post.author_profile+'">'+this.post.author+"</a></object>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      "}catch(t){console.error("error while executing PostSummary.toHtml() method. error: "+t)}},e.prototype.renderPostTags=function(){var t="";return this.post.tags.forEach((function(e){return t+='<span class="tag">'+e+"</span>"})),t},e}(s),v=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e.prototype.toHtml=function(){try{return'\n        <div id="POST_SUMMARY_LIST_ID" class="post-summary-list"></div>\n      '}catch(t){console.error("error while executing PostSummary.toHtml() method. error: "+t)}},e.prototype.postHtmlInsert=function(){this.initClassAttributes(),this.loadPosts(1500),this.addCustomEventListener(l,this.handleLoadMorePostsEvent.bind(this)),this.addCustomEventListener(a,this.handleFilterPostsEvent.bind(this))},e.prototype.handleFilterPostsEvent=function(t){var e=t.detail;this.filteredPosts=this.filterBySelectedCategories(this.allPosts,e.selectedCategoriesLowercase),this.filteredPosts=this.filterByTextInput(this.filteredPosts,e.searchInputText),this.displayedPosts=this.filteredPosts.slice(0,this.maxDisplayedPostsNumber),this.postSummaryListDomElement.innerHTML="",this.loadPosts(750)},e.prototype.filterBySelectedCategories=function(t,e){return t.filter((function(t){return e.includes(t.category)}))},e.prototype.filterByTextInput=function(t,e){if(e){var o=e.split(/\s+/).map((function(t){return t.toLowerCase()}));return t.filter((function(t){for(var e=0,n=o;e<n.length;e++){var s=n[e];if(t.search_key.toLowerCase().indexOf(s)>-1)return!0}return!1}))}return t},e.prototype.handleLoadMorePostsEvent=function(){this.maxDisplayedPostsNumber=this.displayedPosts.length+this.loadPostsMaxNumber,this.displayedPosts=this.filteredPosts.slice(0,this.maxDisplayedPostsNumber),this.loadPosts(2e3)},e.prototype.initClassAttributes=function(){this.postSummaryTemplate=new y,this.postSummaryListDomElement=document.getElementById("POST_SUMMARY_LIST_ID"),this.allPosts=window.jekyll.posts,this.filteredPosts=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<o;e++)for(var r=arguments[e],i=0,a=r.length;i<a;i++,s++)n[s]=r[i];return n}(this.allPosts),this.postsColumnsNumber=this.getPostsColumnsNumber(),this.loadPostsMaxNumber=this.getLoadPostsMaxNumber(),this.maxDisplayedPostsNumber=this.loadPostsMaxNumber,this.displayedPosts=this.filteredPosts.slice(0,this.loadPostsMaxNumber)},e.prototype.getPostsColumnsNumber=function(){try{return window.getComputedStyle(this.postSummaryListDomElement).gridTemplateColumns.split(" ").length}catch(t){return console.error("error while executing PostSummaryListHtmlComponent.getPostsColumnsNumber method. error: "+t),3}},e.prototype.getLoadPostsMaxNumber=function(){var t=this.postsColumnsNumber<3?4:this.postsColumnsNumber;return Math.floor(this.allPosts.length/t)},e.prototype.loadPosts=function(t){for(var e=this,o=0;o<this.postsColumnsNumber;o++)this.postSummaryListDomElement.insertAdjacentHTML("beforeend",this.postSummaryTemplate.toHtml());this.loadedPostsBanners=0,this.displayedPosts.length>0?this.displayedPosts.forEach((function(o){var n=document.createElement("img");n.src=o.banner,n.style.position="fixed",n.style.visibility="hidden",document.body.appendChild(n),n.onload=function(){return e.handlePostBannerLoadEvent(t)}})):this.renderNoPostToDisplay(t),this.dispatchDisplayedPostsChangeEvent()},e.prototype.handlePostBannerLoadEvent=function(t){var e=this;setTimeout((function(){if(e.loadedPostsBanners++,e.loadedPostsBanners==e.displayedPosts.length){var t="";e.displayedPosts.forEach((function(e){return t+=new _(e).toHtml()})),e.postSummaryListDomElement.classList.add("on-change"),setTimeout((function(){e.postSummaryListDomElement.innerHTML=t,e.postSummaryListDomElement.classList.remove("on-change")}),800)}}),t)},e.prototype.renderNoPostToDisplay=function(t){var e=this;setTimeout((function(){e.postSummaryListDomElement.innerHTML='\n        <div class="no-post-to-display">\n          <p>No posts to display!</p>\n          <p>\n            Please give us your suggestion in this \n            <a target="_blank" href="https://github.com/devknowledge/devknowledge.github.io/issues/25">github discussion</a>\n          </p>\n        </div>\n      '}),t)},e.prototype.dispatchDisplayedPostsChangeEvent=function(){var t=this;setTimeout((function(){t.dispatchCustomEvent(c,{displayedPostsCount:t.displayedPosts.length,filteredPostsCount:t.filteredPosts.length})}),0)},e}(n),g=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return g(e,t),e.prototype.toHtml=function(){try{return'\n        <div class="welcome-message">\n          <span class="first-message">Welcome to <span class="site-name">DEV Knowledge</span></span>\n          <span class="second-message">We are happy to have you on board and hope you find our contents useful :)</span>\n        </div>\n      '}catch(t){console.error("error while executing WelcomeMessage.toHtml() method. error: "+t)}},e}(s),C=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),L=function(t){function e(){var e=t.call(this)||this;return e.welcomeMessageComponent=new P,e.postSearchComponent=new m,e.postSummaryListComponent=new E,e.loadMorePostsComponent=new d,e}return C(e,t),e.prototype.preHtmlInsert=function(){this.welcomeMessageComponent.preHtmlInsert(),this.postSearchComponent.preHtmlInsert(),this.postSummaryListComponent.preHtmlInsert(),this.loadMorePostsComponent.preHtmlInsert()},e.prototype.toHtml=function(){try{return"\n        <main>\n          "+this.welcomeMessageComponent.toHtml()+"\n          "+this.postSearchComponent.toHtml()+"\n          "+this.postSummaryListComponent.toHtml()+"\n          "+this.loadMorePostsComponent.toHtml()+"\n        </main>\n      "}catch(t){console.error("error while executing HomeMainHtmlComponent.toHtml() method. error: "+t)}},e.prototype.postHtmlInsert=function(){this.welcomeMessageComponent.postHtmlInsert(),this.postSearchComponent.postHtmlInsert(),this.postSummaryListComponent.postHtmlInsert(),this.loadMorePostsComponent.postHtmlInsert()},e}(n),D=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),T="light",w="dark",S="CURRENT_THEME",A=function(t){function e(){var e=t.call(this)||this;return e.toHtml=e.toHtml.bind(e),e.postHtmlInsert=e.postHtmlInsert.bind(e),e.initDomElements=e.initDomElements.bind(e),e.onChangeThemeEvent=e.onChangeThemeEvent.bind(e),e.onWindowScrollEvent=e.onWindowScrollEvent.bind(e),e}return D(e,t),e.prototype.preHtmlInsert=function(){this.setThemeFromLocalStorage()},e.prototype.toHtml=function(){try{return"\n        <nav>\n          <div class='left'>\n            <a href='/'>\n              <img src='/assets/logo.png' alt='logo' />\n              <span>DEV Knowledge</span>\n            </a>\n          </div>\n          <div class='right'>\n            <span id='CHANGE_TO_DARK_THEME_ICON_ID' class='change-theme-icon pointer'>\n              <span class='iconify' data-icon='bx:bx-moon' data-inline='false'></span>\n            </span>\n            <span id='CHANGE_TO_LIGHT_THEME_ICON_ID' class='change-theme-icon pointer'>\n              <span class='iconify' data-icon='heroicons-solid:sun' data-inline='false'></span>\n            </span>\n          </div>\n        </nav>\n      "}catch(t){console.error("error while executing Navbar.toHtml() method. error: "+t)}},e.prototype.postHtmlInsert=function(){try{this.initDomElements(),this.showHideToggleThemeIcons(),this.changeToDarkThemeButtonDomElement.addEventListener("click",this.onChangeThemeEvent),this.changeToLightThemeButtonDomElement.addEventListener("click",this.onChangeThemeEvent),window.addEventListener("scroll",this.onWindowScrollEvent)}catch(t){console.error("error while executing Navbar.postHtmlInsert() method. error: "+t)}},e.prototype.initDomElements=function(){this.navbarDomElement=document.querySelector("nav"),this.bodyDomElement=document.querySelector("body"),this.changeToDarkThemeButtonDomElement=document.getElementById("CHANGE_TO_DARK_THEME_ICON_ID"),this.changeToLightThemeButtonDomElement=document.getElementById("CHANGE_TO_LIGHT_THEME_ICON_ID")},e.prototype.showHideToggleThemeIcons=function(){try{localStorage.getItem(S)===T?this.changeToDarkThemeButtonDomElement.style.display="flex":this.changeToLightThemeButtonDomElement.style.display="flex"}catch(t){console.error("error while executing Navbar.showHideToggleThemeIcons() method. error: "+t)}},e.prototype.setThemeFromLocalStorage=function(){this.bodyDomElement=document.querySelector("body");var t=localStorage.getItem(S)||w;this.bodyDomElement.classList.remove(w,T),this.bodyDomElement.classList.add(t),localStorage.setItem(S,t)},e.prototype.onChangeThemeEvent=function(t){t.stopPropagation(),localStorage.getItem(S)===T?(this.bodyDomElement.classList.remove(w,T),this.bodyDomElement.classList.add(w),localStorage.setItem(S,w),this.changeToDarkThemeButtonDomElement.style.display="none",this.changeToLightThemeButtonDomElement.style.display="flex"):(this.bodyDomElement.classList.remove(w,T),this.bodyDomElement.classList.add(T),localStorage.setItem(S,T),this.changeToDarkThemeButtonDomElement.style.display="flex",this.changeToLightThemeButtonDomElement.style.display="none")},e.prototype.onWindowScrollEvent=function(){0===window.scrollY?this.navbarDomElement.classList.remove("shadow"):this.navbarDomElement.classList.add("shadow")},e}(n),b=document.querySelector("body"),O=[];O.push(new A),O.push(new L),O.push(new i),O.forEach((function(t){return t.preHtmlInsert()})),O.forEach((function(t){return b.insertAdjacentHTML("beforeend",t.toHtml())})),O.forEach((function(t){return t.postHtmlInsert()}))})();