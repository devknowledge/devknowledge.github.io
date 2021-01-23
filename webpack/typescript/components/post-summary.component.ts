import { PostSummary } from '../models/post-summary.model';
import { BaseStaticHtmlComponent } from './component.interface';

export class PostSummaryHtmlComponent extends BaseStaticHtmlComponent {
  constructor(private post: PostSummary) {
    super();
  }

  toHtml() {
    try {
      return /* html */ `
      <div class="post-summary">
        <a href="${this.post.url}">
          <div class="post-summary__top-section">
            <img class="post-summary__banner" src="${this.post.banner}" alt="banner" />
            <p class="post-summary__category">${this.post.category}</p>
            <p class="post-summary__date">${this.post.date}</p>
          </div>
          <div class="post-summary__bottom-section">
            <div>
              <h2 class="post-summary__title">${this.post.title}</h2>
              <p class="post-summary__extract">${this.post.excerpt}</p>
            </div>
            <div>
              <div class="post-summary__tags-wrapper">
                <span class="post-summary__icon iconify" data-icon="ion:pricetags" data-inline="false"></span>
                ${this.renderPostTags()}
              </div>
              <div class="post-summary__author-wrapper">
                <span class="post-summary__icon iconify" data-icon="mdi:account-edit" data-inline="false"></span>
                <object><a target="_blank" class="post-summary__author" href="${this.post.author_profile}">${this.post.author}</a></object>
              </div>
            </div>
          </div>
        </a>
      </div>
      `;
    } catch (error) {
      console.error('error while executing PostSummary.toHtml() method. error: ' + error);
    }
  }

  private renderPostTags() {
    let res = '';
    this.post.tags.forEach((tag) => (res += `<span class="tag">${tag}</span>`));
    return res;
  }
}
