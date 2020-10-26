import { BaseStaticHtmlComponent } from "./component.interface";

export class PostSummaryTemplateHtmlComponent extends BaseStaticHtmlComponent {

  toHtml() {
    try {
      return /* html */ `
        <div class="post-summary-template">
          <div class="post-summary-template__top-section shimmer">
          </div>
          <div class="post-summary-template__bottom-section">
            <div>
              <div class="post-summary-template__title shimmer"></div>
              <div>
                <div class="post-summary-template__extract shimmer"></div>
                <div class="post-summary-template__extract shimmer"></div>
                <div class="post-summary-template__extract shimmer"></div>
              </div>
            </div>
            <div>
              <div class="post-summary-template__author shimmer"></div>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('error while executing PostSummaryTemplateHtmlComponent.toHtml() method. error: ' + error);
    }
  }

}

