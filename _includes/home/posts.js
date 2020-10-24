renderLoadMorePosts();

const allPosts = window.jekyll.posts;
const postsColumnsNumber = getPostsColumnsNumber();
const postSummaryListElement = document.getElementById('PostSummaryList');
const displayedPostsCountElement = document.getElementById('DisplayedPostsCount');
const loadMorePostsWrapperElement = document.getElementById('LoadMorePostsWrapper');
const displayedPostsCountRuleElement = document.getElementById('DisplayedPostsCountRule');
const loadMorePostsButtonElement = document.getElementById('LoadMorePostsButton');
let filteredPosts = [];
let displayedPosts = [];
let loadMorePostMaxNumber = getLoadMorePostMaxNumber();
let currentMaxDisplayedPostsNumber = getLoadMorePostMaxNumber();
let loadedPostsBanners = 0;

// add event listeners
document.addEventListener('filter-posts', handleFilterPostsEvent);
loadMorePostsButtonElement.addEventListener('click', handleLoadMorePostsClickEvent);

function renderLoadMorePosts() {
  const element = document.getElementById('LoadMorePosts');
  element.innerHTML = /* html */ `
    <div id="LoadMorePostsWrapper" class="load-more-posts-wrapper">
      <p id="DisplayedPostsCount" class="displayed-posts-count"></p>
      <div class="displayed-posts-count-rule-wrapper">
        <div id="DisplayedPostsCountRule" class="displayed-posts-count-rule"></div>
        <div class="displayed-posts-count-100-rule"></div>
      </div>
      <button id="LoadMorePostsButton" class="load-more-posts hide">Load more posts</button>
    </div>
  `;
}

function updateDisplayedPostsCountCount() {
  displayedPostsCountElement.innerHTML = `You are viewing ${displayedPosts.length} of ${filteredPosts.length} posts`;
  displayedPostsCountRuleElement.style.width = `${(displayedPosts.length / filteredPosts.length) * 100}%`;
}

function handleFilterPostsEvent(event) {
  const postSearchQuery = event.detail;
  filteredPosts = filterBySelectedCategories(allPosts, postSearchQuery.selectedCategoriesLowerCase);
  filteredPosts = filterByTextInput(filteredPosts, postSearchQuery.searchInputText);
  displayedPosts = filteredPosts.slice(0, currentMaxDisplayedPostsNumber);
  hideLoadMorePostsButtonWhenNoMorePostsToLoad();
  postSummaryListElement.innerHTML = '';
  displayPostsAfterLoadingImages(750);
  updateDisplayedPostsCountCount();
}

function displayPostsAfterLoadingImages(delay) {
  for (let i = 0; i < postsColumnsNumber; i++) {
    postSummaryListElement.insertAdjacentHTML('beforeend', renderPostSummaryTemplate());
  }
  loadedPostsBanners = 0;
  if (displayedPosts.length > 0) {
    displayedPosts.forEach((post) => {
      let image = document.createElement('img');
      image.src = post.banner;
      image.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
      image.style.visibility = 'hidden';
      document.body.appendChild(image);
      image.onload = () => onPostBannerLoad(delay);
    });
  } else {
    renderNoPostToDisplay(delay);
  }
}

function onPostBannerLoad(delay) {
  setTimeout(() => {
    loadedPostsBanners++;
    if (loadedPostsBanners == displayedPosts.length) {
      postSummaryListElement.innerHTML = '';
      displayedPosts.forEach((post) => {
        postSummaryListElement.insertAdjacentHTML('beforeend', renderPostSummary(post));
      });
      loadMorePostsWrapperElement.classList.remove('hide');
      updateDisplayedPostsCountCount();
    }
  }, delay);
}

function renderNoPostToDisplay(delay) {
  setTimeout(() => {
    postSummaryListElement.innerHTML = /*html*/ `
      <div class="no-post-to-display">
        <p>No posts to display!</p>
        <p>Please give us your suggestion in this <a target="_blank" href="https://github.com/devknowledge/devknowledge.github.io/issues/25">github discussion</a></p>
      </div>
    `;
    loadMorePostsWrapperElement.classList.add('hide');
  }, delay);
}

function filterBySelectedCategories(posts, selectedCategoriesLowerCase) {
  return posts.filter((post) => selectedCategoriesLowerCase.includes(post.category));
}

function filterByTextInput(posts, textInput) {
  if (textInput) {
    const textInputWords = textInput.split(/\s+/).map((word) => word.toLowerCase());
    return posts.filter((post) => {
      for (const word of textInputWords) {
        if (post.search_key.toLowerCase().indexOf(word) > -1) {
          return true;
        }
      }
      return false;
    });
  }
  return posts;
}

function handleLoadMorePostsClickEvent(event) {
  currentMaxDisplayedPostsNumber += loadMorePostMaxNumber;
  displayedPosts = filteredPosts.slice(0, currentMaxDisplayedPostsNumber);
  hideLoadMorePostsButtonWhenNoMorePostsToLoad();
  displayPostsAfterLoadingImages(2000);
}

function hideLoadMorePostsButtonWhenNoMorePostsToLoad() {
  if (displayedPosts.length === filteredPosts.length) {
    loadMorePostsButtonElement.classList.add('hide');
  } else {
    loadMorePostsButtonElement.classList.remove('hide');
  }
}

function getPostsColumnsNumber() {
  try {
    const posts = document.getElementById('PostSummaryList');
    return window.getComputedStyle(posts).gridTemplateColumns.split(' ').length;
  } catch (error) {
    console.error(error);
    return 3;
  }
}

function getLoadMorePostMaxNumber() {
  let divisor = postsColumnsNumber;
  if (postsColumnsNumber < 3) {
    divisor = 4;
  }
  return Math.floor(allPosts.length / divisor);
}
