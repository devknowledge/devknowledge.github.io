renderRelatedPosts();

function renderRelatedPosts() {
  const relatedPosts = window.jekyll.relatedPosts;

  if (relatedPosts.length < 2) {
    document.getElementById('RelatedPostsWrapper').style.display = 'none';
    return;
  }

  const relatedPostsElement = document.getElementById('RelatedPosts');
  relatedPostsElement.innerHTML += /* html */ `
    <div class="related-posts-wrapper">
      <h2>Related posts</h2>
      <div class="related-posts">${getRelatedPostsHtml(relatedPosts)}</div>
    </div>
  `;
}

function getRelatedPostsHtml(relatedPosts) {
  let res = '';
  relatedPosts.forEach((relatedPost) => {
    res += /* html */ `
      <div class="post-summary">
        <a href="${relatedPost.url}">
          <div class="post-summary__top-section">
            <img class="post-summary__banner" src="${relatedPost.banner}" alt="banner" />
            <p class="post-summary__category">${relatedPost.category}</p>
            <p class="post-summary__date">${relatedPost.date}</p>
          </div>
          <div class="post-summary__bottom-section">
            <div>
              <h2 class="post-summary__title">${relatedPost.title}</h2>
              <p class="post-summary__extract">${relatedPost.excerpt}</p>
            </div>
            <div class="post-summary__author-wrapper">
              <span class="post-summary__icon iconify" data-icon="mdi:account-edit" data-inline="false"></span>
              <object><a target="_blank" class="post-summary__author" href="${relatedPost.author_profile}">${relatedPost.author}</a></object>
            </div>
          </div>
        </a>
      </div>
    `;
  });
  return res;
}
