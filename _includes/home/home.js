const allPosts = getAllPosts();
const postSummaryListElement = document.getElementById('PostSummaryList');
document.addEventListener('filter-posts', handleFilterPostsEvent);

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
  let filteredPosts = filterBySelectedCategories(allPosts, postSearchQuery.selectedCategoriesLowerCase);
  filteredPosts = filterByTextInput(filteredPosts, postSearchQuery.searchInputText);
  postSummaryListElement.innerHTML = '';
  filteredPosts.forEach(post => {
    postSummaryListElement.insertAdjacentHTML('beforeend', renderPostSummary(post));
  });
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

function renderPostSummary(post) {
  return /*html*/ `
    <div class="post-summary">
      <a href="${post.url}">
        <div class="post-summary__top-section">
          <img class="post-summary__banner" src="${post.banner}" alt="banner" />
          <p class="post-summary__category">${post.category}</p>
          <div class="post-summary__date">
            <p class="post-summary__day">${post.day}</p>
            <p class="post-summary__month">${post.month}</p>
          </div>
        </div>
        <div class="post-summary__bottom-section">
          <div>
            <h2 class="post-summary__title">${post.title}</h2>
            <p class="post-summary__extract">${post.excerpt}</p>
          </div>
          <div>
            <div class="post-summary__tags-wrapper">
              <span class="post-summary__icon iconify" data-icon="ion:pricetags" data-inline="false"></span>
              ${renderPostTags(post)}
            </div>
            <div class="post-summary__author-wrapper">
              <span class="post-summary__icon iconify" data-icon="mdi:account-edit" data-inline="false"></span>
              <object><a target="_blank" class="post-summary__author" href="${post.author_profile}">${post.author}</a></object>
            </div>
          </div>
        </div>
      </a>
    </div>
  `
}

function renderPostTags(post) {
  let res = '';
  post.tags.forEach(tag => res += `<span class="tag">${tag}</span>`);
  return res;
}
