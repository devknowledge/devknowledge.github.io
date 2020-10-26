import { BaseStaticHtmlComponent } from "./component.interface";

export class PostCommentHtmlComponent extends BaseStaticHtmlComponent {

  constructor(private comment: any) {
    super();
  }
  
  toHtml() {
    try {
      return /* html */ `
        <div class="comment">
          <img class="comment__user-avatar" src="${this.comment.user.avatar_url}" alt="avatar">
          <div class="comment__container">
            <div class="comment__header">
              <p class="comment_user-name">${this.comment.user.login}</p>
              <p class="comment_created-since">${this.since(this.comment.created_at)}</p>
            </div>
            <p class="comment__body">${this.comment.body}</p>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('error while executing PostCommentHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  private since(date: string) {
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

}

