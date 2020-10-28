import { BaseHtmlComponent, HtmlComponent } from "./component.interface";
import { LoadMorePostsHtmlComponent } from "./load-more-posts.component";
import { PostSearchHtmlComponent } from "./post-search.component";
import { PostSummaryListHtmlComponent } from "./post-summary-list.component";
import { WelcomeMessageHtmlComponent } from "./welcome-message.component";

export class HomeMainHtmlComponent extends BaseHtmlComponent {

  private components: Array<HtmlComponent>;

  constructor() {
    super();
    this.components = [];
    this.components.push(new WelcomeMessageHtmlComponent());
    this.components.push(new PostSearchHtmlComponent());
    this.components.push(new PostSummaryListHtmlComponent());
    this.components.push(new LoadMorePostsHtmlComponent());
  }

  preHtmlInsert() {
    this.components.forEach(component => component.preHtmlInsert());
  }

  toHtml() {
    try {
      return /* html */ `
        <main>
          ${this.components.map(component => component.toHtml()).join(' ')}
        </main>
      `;
    } catch (error) {
      console.error('error while executing HomeMainHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postHtmlInsert() {
    this.components.forEach(component => component.postHtmlInsert());
  }


}

