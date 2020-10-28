import { BuyMeCoffeeHtmlComponent } from "./buy-me-coffee.component";
import { BaseHtmlComponent, HtmlComponent } from "./component.interface";
import { PostCommentListHtmlComponent } from "./post-comment-list.component";
import { PostMarkdownHtmlComponent } from "./post-markdown.component";
import { PostOverviewHtmlComponent } from "./post-overview.component";
import { RelatedPostSummaryListHtmlComponent } from "./related-post-summary-list.component";

export class PostMainHtmlComponent extends BaseHtmlComponent {

  private components: Array<HtmlComponent>;

  constructor() {
    super();
    this.components = [];
    this.components.push(new PostOverviewHtmlComponent());
    this.components.push(new PostMarkdownHtmlComponent());
    this.components.push(new RelatedPostSummaryListHtmlComponent());
    this.components.push(new BuyMeCoffeeHtmlComponent());
    this.components.push(new PostCommentListHtmlComponent());
  }

  preInsertHtml() {
    this.components.forEach(component => component.preInsertHtml());
  }

  toHtml() {
    try {
      return /* html */ `
        <main>
          <div class="post">
            ${this.components.map(component => component.toHtml()).join(' ')}
          </div>
        </main>
      `;
    } catch (error) {
      console.error('error while executing PostMainHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postInsertHtml() {
    this.components.forEach(component => component.postInsertHtml());
  }


}

