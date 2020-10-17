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
  `;
}

function renderPostTags(post) {
  let res = '';
  post.tags.forEach((tag) => (res += `<span class="tag">${tag}</span>`));
  return res;
}

function renderPostSummaryTemplate() {
  return /*html*/ `
    <div class="post-summary-template">
      <div class="post-summary-template__top-section">
      </div>
      <div class="post-summary-template__bottom-section">
        <div>
          <div class="post-summary-template__title"></div>
          <div>
            <div class="post-summary-template__extract"></div>
            <div class="post-summary-template__extract"></div>
            <div class="post-summary-template__extract"></div>
          </div>
        </div>
        <div>
          <div class="post-summary-template__author"></div>
        </div>
      </div>
    </div>
  `;
}
