const comments = document.getElementById('comments');
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
      renderJoinGithubCommentsLink(response.items[0].html_url);
      fetchCurrentPostComments(response.items[0].comments_url);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderJoinGithubCommentsLink(url) {
  const html = /* html */ `
    <p class="join-discussion">Join the discussion fir this article on <a href="${url}" target="_blank">this github ticket</a></p>  
  `;
  comments.insertAdjacentHTML('afterend', html);
}

function fetchCurrentPostComments(url) {
  fetch(url)
    .then((response) => response.text())
    .then(handleGithubGetCommentsResponse)
    .catch((error) => console.log('error', error));
}

function handleGithubGetCommentsResponse(responseText) {
  try {
    const response = JSON.parse(responseText);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
