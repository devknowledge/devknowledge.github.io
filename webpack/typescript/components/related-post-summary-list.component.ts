import { BaseStaticHtmlComponent } from './component.interface';
import { RelatedPostSummaryHtmlComponent } from './related-post-summary.component';

export class RelatedPostSummaryListHtmlComponent extends BaseStaticHtmlComponent {
  toHtml() {
    try {
      return /* html */ `
        <div class="related-posts-wrapper">
          <h2>Related posts</h2>
          <div class="related-posts">${this.getRelatedPostsHtml()}</div>
        </div>
      `;
    } catch (error) {
      console.error('error while executing RelatedPostSummaryListHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postInsertHtml() {
    if (window.jekyll.relatedPosts.length == 0) {
      document.querySelector('.related-posts-wrapper').classList.add('hide');
    }
  }

  private getRelatedPostsHtml() {
    let res = '';
    window.jekyll.relatedPosts.forEach((relatedPost) => {
      res += new RelatedPostSummaryHtmlComponent(relatedPost).toHtml();
    });
    return res;
  }
}
