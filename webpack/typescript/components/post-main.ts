import { BuyMeCoffeeHtmlComponent } from "./buy-me-coffee.component";
import { BaseHtmlComponent } from "./component.interface";
import { PostCommentListHtmlComponent } from "./post-comment-list.component";
import { PostMarkdownHtmlComponent } from "./post-markdown.component";
import { PostOverviewHtmlComponent } from "./post-overview.component";
import { RelatedPostSummaryListHtmlComponent } from "./related-post-summary-list.component";

export class PostMainHtmlComponent extends BaseHtmlComponent {

  private postOverview: PostOverviewHtmlComponent;
  private postMarkdown: PostMarkdownHtmlComponent;
  private buyMeCoffeeComponent: BuyMeCoffeeHtmlComponent;
  private relatedPostsComponent: RelatedPostSummaryListHtmlComponent;
  private postCommentListComponent: PostCommentListHtmlComponent;

  constructor() {
    super();
    this.postOverview = new PostOverviewHtmlComponent();
    this.postMarkdown = new PostMarkdownHtmlComponent();
    this.relatedPostsComponent = new RelatedPostSummaryListHtmlComponent();
    this.buyMeCoffeeComponent = new BuyMeCoffeeHtmlComponent();
    this.postCommentListComponent = new PostCommentListHtmlComponent();
  }

  preHtmlInsert() {
    this.postOverview.preHtmlInsert();
    this.postMarkdown.preHtmlInsert();
    this.buyMeCoffeeComponent.preHtmlInsert();
    this.relatedPostsComponent.preHtmlInsert();
    this.postCommentListComponent.preHtmlInsert();
  }

  toHtml() {
    try {
      return /* html */ `
        <main>
          <div class="post">
            ${this.postOverview.toHtml()}
            ${this.postMarkdown.toHtml()}
            ${this.buyMeCoffeeComponent.toHtml()}
            ${this.relatedPostsComponent.toHtml()}
            ${this.postCommentListComponent.toHtml()}
          </div>
        </main>
      `;
    } catch (error) {
      console.error('error while executing PostMainHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postHtmlInsert() {
    this.postOverview.postHtmlInsert();
    this.postMarkdown.postHtmlInsert();
    this.buyMeCoffeeComponent.postHtmlInsert();
    this.relatedPostsComponent.postHtmlInsert();
    this.postCommentListComponent.postHtmlInsert();
  }


}

