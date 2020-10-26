import { BaseHtmlComponent } from "./component.interface";
import { LoadMorePostsHtmlComponent } from "./load-more-posts.component";
import { PostSearchHtmlComponent } from "./post-search.component";
import { PostSummaryListHtmlComponent } from "./post-summary-list.component";
import { WelcomeMessageHtmlComponent } from "./welcome-message.component";

export class HomeMainHtmlComponent extends BaseHtmlComponent {

  private welcomeMessageComponent: WelcomeMessageHtmlComponent;
  private postSearchComponent: PostSearchHtmlComponent;
  private postSummaryListComponent: PostSummaryListHtmlComponent;
  private loadMorePostsComponent: LoadMorePostsHtmlComponent;

  constructor() {
    super();
    this.welcomeMessageComponent = new WelcomeMessageHtmlComponent();
    this.postSearchComponent = new PostSearchHtmlComponent();
    this.postSummaryListComponent = new PostSummaryListHtmlComponent();
    this.loadMorePostsComponent = new LoadMorePostsHtmlComponent();
  }

  preHtmlInsert() {
    this.welcomeMessageComponent.preHtmlInsert();
    this.postSearchComponent.preHtmlInsert();
    this.postSummaryListComponent.preHtmlInsert();
    this.loadMorePostsComponent.preHtmlInsert();
  }

  toHtml() {
    try {
      return /* html */ `
        <main>
          ${this.welcomeMessageComponent.toHtml()}
          ${this.postSearchComponent.toHtml()}
          ${this.postSummaryListComponent.toHtml()}
          ${this.loadMorePostsComponent.toHtml()}
        </main>
      `;
    } catch (error) {
      console.error('error while executing HomeMainHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postHtmlInsert() {
    this.welcomeMessageComponent.postHtmlInsert();
    this.postSearchComponent.postHtmlInsert();
    this.postSummaryListComponent.postHtmlInsert();
    this.loadMorePostsComponent.postHtmlInsert();
  }


}

