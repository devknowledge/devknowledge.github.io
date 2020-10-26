import { Post } from "../models/post.model";
import { BaseStaticHtmlComponent } from "./component.interface";
import { TagListHtmlComponent } from "./tag-list.component";

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
            <div class="post__tags">
              ${new TagListHtmlComponent(this.post.tags).toHtml()}
            </div>
            <div class="post__date">
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

