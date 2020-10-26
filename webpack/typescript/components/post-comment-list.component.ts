import { BaseHtmlComponent } from "./component.interface";
import { JoinGithubDiscussionHtmlComponent } from "./join-github-discussion.component";
import { PostCommentHtmlComponent } from "./post-comment.component";

const JOIN_GITHUB_DISCUSSION = 'JOIN_GITHUB_DISCUSSION';
const POST_COMMENTS_ID = 'POST_COMMENTS_ID';

export class PostCommentListHtmlComponent extends BaseHtmlComponent {

  private joinGithubDiscussionDomElement: HTMLElement;
  private postCommentsDomElement: HTMLElement;

  constructor() {
    super();
  }
  
  toHtml() {
    try {
      return /* html */ `
        <div class="comments-wrapper">
          <h2 class="comments-header">Comments</h2>
          <div id="${JOIN_GITHUB_DISCUSSION}"></div>
          <div id="${POST_COMMENTS_ID}"></div>
        </div>
      `;
    } catch (error) {
      console.error('error while executing PostCommentListHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postHtmlInsert(): void {
    this.joinGithubDiscussionDomElement = document.getElementById(JOIN_GITHUB_DISCUSSION);
    this.postCommentsDomElement = document.getElementById(POST_COMMENTS_ID);
    this.fetchCurrentPostAssociatedGithubIssue();
  }

  private fetchCurrentPostAssociatedGithubIssue() {
    try {
      const postTitle = location.pathname.replace(/^\//, '');
      const githubSearchIssuesUrl = `https://api.github.com/search/issues?q=${postTitle} is:issue+repo:devknowledge/devknowledge.github.io+in:title`;
      fetch(githubSearchIssuesUrl)
        .then((response) => response.text())
        .then(this.handleGithubSearchIssuesResponse.bind(this))
        .catch((error) => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }

  private handleGithubSearchIssuesResponse(responseText) {
    try {
      const response = JSON.parse(responseText);
      if (response.items.length == 1) {
        this.renderJoinPostDiscussionOnGithub(response.items[0].html_url);
        this.fetchCurrentPostComments(response.items[0].comments_url);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private renderJoinPostDiscussionOnGithub(url) {
    this.joinGithubDiscussionDomElement.outerHTML = new JoinGithubDiscussionHtmlComponent(url).toHtml();
  }

  private fetchCurrentPostComments(url) {
    try {
      fetch(url)
        .then((response) => response.text())
        .then((response) => this.renderPostsComments(JSON.parse(response)))
        .catch((error) => console.log('error', error));
    } catch (error) {
      console.log('error in fetchCurrentPostComments method: ' + error);
    }
  }

  private renderPostsComments(comments) {
    try {
      let html = '';
      comments.forEach(comment => html += new PostCommentHtmlComponent(comment).toHtml());
      this.postCommentsDomElement.outerHTML = html;
    } catch (error) {
      console.log('error in renderPostsComments method: ' + error);
    }
  }

}

