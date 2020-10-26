import { Post } from "../models/post.model";
import { BaseStaticHtmlComponent } from "./component.interface";

export class PostMarkdownHtmlComponent extends BaseStaticHtmlComponent {

  private post: Post;

  constructor() {
    super();
    this.post = window.jekyll.post;
  }

  toHtml() {
    try {
      return /* html */ `
        <div class="markdown">${this.post.content}</div>
      `;
    } catch (error) {
      console.error('error while executing PostMarkdownHtmlComponent.toHtml() method. error: ' + error);
    }
  }

}

