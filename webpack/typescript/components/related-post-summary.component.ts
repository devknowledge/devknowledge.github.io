import { RelatedPostSummary } from "../models/related-post.model";
import { BaseStaticHtmlComponent } from "./component.interface";

export class RelatedPostSummaryHtmlComponent extends BaseStaticHtmlComponent {

  constructor(private relatedPost: RelatedPostSummary) {
    super();
  }
  
  toHtml() {
    try {
      return /* html */ `
        <div class="post-summary">
          <a href="${this.relatedPost.url}">
            <div class="post-summary__top-section">
              <img class="post-summary__banner" src="${this.relatedPost.banner}" alt="banner" />
              <p class="post-summary__category">${this.relatedPost.category}</p>
              <p class="post-summary__date">${this.relatedPost.date}</p>
            </div>
            <div class="post-summary__bottom-section">
              <div>
                <h2 class="post-summary__title">${this.relatedPost.title}</h2>
                <p class="post-summary__extract">${this.relatedPost.excerpt}</p>
              </div>
              <div class="post-summary__author-wrapper">
                <span class="post-summary__icon iconify" data-icon="mdi:account-edit" data-inline="false"></span>
                <object><a target="_blank" class="post-summary__author" href="${this.relatedPost.author_profile}">${this.relatedPost.author}</a></object>
              </div>
            </div>
          </a>
        </div>
      `;
    } catch (error) {
      console.error('error while executing RelatedPostSummaryHtmlComponent.toHtml() method. error: ' + error);
    }
  }

}

