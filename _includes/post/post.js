renderPost();

function renderPost() {
  const post = window.jekyll.post;
  const element = document.getElementById('Post');
  element.innerHTML = /* html */ `
    <div class="post__overview">
      <h1 class="post__title">${post.title}</h1>
      <div class="post__additional-info">
        <div class="post__tags">
          ${renderPostTags(post)}
        </div>
        <div class="post__date">
          <time>${post.date}</time>
        </div>
      </div>
    </div>
    <div class="markdown">${post.content}</div>
  `;
}

function renderPostTags(post) {
  let res = '';
  post.tags.forEach((tag) => (res += `<span class="tag">${tag}</span>`));
  return res;
}
