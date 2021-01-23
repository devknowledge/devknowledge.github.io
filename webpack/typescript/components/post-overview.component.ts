import { Post } from '../models/post.model';
import { BaseStaticHtmlComponent } from './component.interface';

export class PostOverviewHtmlComponent extends BaseStaticHtmlComponent {
  private post: Post;

  constructor() {
    super();
    this.post = window.jekyll.post;
  }

  toHtml() {
    try {
      return /* html */ `
        <div class="post__overview">
          <h1 class="post__title">${this.post.title}</h1>
          <div class="post__additional-info">
            <div class="post__additional-info__left">
              <span class="iconify" data-icon="mdi:account-edit" data-inline="false"></span>
              <a href="${this.post.authorProfile}" target="_blank">${this.post.author}</a>
            </div>
            <div class="post__additional-info__right">
              <span class="iconify" data-icon="clarity:date-line" data-inline="false"></span>
              <time>${this.post.date}</time>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('error while executing PostOverviewHtmlComponent.toHtml() method. error: ' + error);
    }
  }
}
