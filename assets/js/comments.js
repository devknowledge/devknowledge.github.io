const joinGithubDiscussionElement = document.getElementById('JoinGithubDiscussion');
const commentsElement = document.getElementById('Comments');
fetchCurrentPostAssociatedGithubIssue();

function fetchCurrentPostAssociatedGithubIssue() {
  try {
    const postTitle = location.pathname.replace(/^\//, '');
    const githubSearchIssuesUrl = `https://api.github.com/search/issues?q=${postTitle} is:issue+repo:devknowledge/devknowledge.github.io+in:title`;
    fetch(githubSearchIssuesUrl)
      .then((response) => response.text())
      .then(handleGithubSearchIssuesResponse)
      .catch((error) => console.log('error', error));
  } catch (error) {
    console.log(error);
  }
}

function handleGithubSearchIssuesResponse(responseText) {
  try {
    const response = JSON.parse(responseText);
    if (response.items.length == 1) {
      renderJoinPostDiscussionOnGithub(response.items[0].html_url);
      fetchCurrentPostComments(response.items[0].comments_url);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderJoinPostDiscussionOnGithub(url) {
  const html = /* html */ `
    <p class="comments-join-discussion">Join the discussion for this article on <a href="${url}" target="_blank">this github ticket</a></p>  
  `;
  joinGithubDiscussionElement.outerHTML = html;
}

function fetchCurrentPostComments(url) {
  try {
    fetch(url)
      .then((response) => response.text())
      .then((response) => renderPostsComments(JSON.parse(response)))
      .catch((error) => console.log('error', error));
  } catch (error) {
    console.log('error in fetchCurrentPostComments method: ' + error);
  }
}

function renderPostsComments(comments) {
  try {
    let html = '';
    comments.forEach((comment) => {
      const commentCreatedSince = since(comment.created_at);
      html += /* html */ `
        <div class="comment">
          <img class="comment__user-avatar" src="${comment.user.avatar_url}" alt="avatar">
          <div class="comment__container">
            <div class="comment__header">
              <p class="comment_user-name">${comment.user.login}</p>
              <p class="comment_created-since">${commentCreatedSince}</p>
            </div>
            <p class="comment__body">${comment.body}</p>
          </div>
        </div>
      `;
    });
    commentsElement.outerHTML = html;
  } catch (error) {
    console.log('error in renderPostsComments method: ' + error);
  }
}

function since(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
}
