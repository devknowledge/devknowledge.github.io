{% include home/post-summary.js %}

const allPosts = getAllPosts();
let filteredPosts = [];
let displayedPosts = [];
let currentMaxDisplayedPostsNumber = 3;
let loadMorePostMaxNumber = 3;
const postSummaryListElement = document.getElementById('PostSummaryList');
const loadMorePostsElement = document.getElementById('LoadMorePosts');

// add event listeners
document.addEventListener('filter-posts', handleFilterPostsEvent);
loadMorePostsElement.addEventListener('click', handleLoadMorePostsClickEvent);

function getAllPosts() {
  const res = [];
  {% for post in site.posts %}
    {% assign post_tags_raw = post.tags | join:' ' %}
    {% assign post_excerpt = post.excerpt | jsonify %}
    res.push({
      title: '{{ post.title }}',
      tags: getPostTags('{{ post_tags_raw }}'),
      category: '{{ post.category }}',
      date: new Date('{{ post.date }}'),
      day: "{{ post.date | date: '%d' }}",
      month: "{{ post.date | date: '%b' }}",
      excerpt: {{ post_excerpt }},
      author: '{{ post.author }}',
      banner: '{{ post.banner }}',
      url: '{{ post.url }}',
      author_profile: '{{ post.author_profile }}',
      search_key: '{{ post.title | append:' ' | append:post_tags_raw | append:' ' | append:post_excerpt }}'
    });
  {% endfor %}
  return res;
}

function getPostTags(postTagsRaw) {
  return postTagsRaw.split(' ');
}

function handleFilterPostsEvent(event) {
  const postSearchQuery = event.detail;
  filteredPosts = filterBySelectedCategories(allPosts, postSearchQuery.selectedCategoriesLowerCase);
  filteredPosts = filterByTextInput(filteredPosts, postSearchQuery.searchInputText);
  displayedPosts = filteredPosts.slice(0, currentMaxDisplayedPostsNumber);
  hideLoadMorePostsButtonWhenNoMorePostsToLoad();
  postSummaryListElement.innerHTML = '';
  displayedPosts.forEach(post => {
    postSummaryListElement.insertAdjacentHTML('beforeend', renderPostSummary(post));
  });
  postSummaryListElement.insertAdjacentHTML('beforeend', renderPostSummaryTemplate());
}

function filterBySelectedCategories(posts, selectedCategoriesLowerCase) {
  return posts.filter(post => selectedCategoriesLowerCase.includes(post.category));
}

function filterByTextInput(posts, textInput) {
  if (textInput) {
    const textInputWords = textInput.split(/\s+/).map(word => word.toLowerCase());
    return posts.filter(post => {
      for (const word of textInputWords) {
        if (post.search_key.toLowerCase().indexOf(word) > -1 ) {
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
  postSummaryListElement.innerHTML = '';
  displayedPosts.forEach(post => {
    postSummaryListElement.insertAdjacentHTML('beforeend', renderPostSummary(post));
  });
}

function hideLoadMorePostsButtonWhenNoMorePostsToLoad() {
  if (displayedPosts.length === filteredPosts.length) {
    loadMorePostsElement.classList.add('hide');
  } else {
    loadMorePostsElement.classList.remove('hide');
  }
}
