import { BaseHtmlComponent } from "./component.interface";
import { DISPLAYED_POSTS_CHANGE_EVENT_NAME, LOAD_MORE_POSTS_EVENT_NAME } from "../constants/events.constants";

const LOAD_MORE_POSTS_WRAPPER_ID = 'LOAD_MORE_POSTS_WRAPPER_ID';
const LOAD_MORE_POSTS_PARAGRAPH_ID = 'LOAD_MORE_POSTS_PARAGRAPH_ID';
const LOAD_MORE_POSTS_COUNT_RULE_ID = 'LOAD_MORE_POSTS_COUNT_RULE_ID';
const LOAD_MORE_POSTS_BUTTON_ID = 'LOAD_MORE_POSTS_BUTTON_ID';

export class LoadMorePostsHtmlComponent extends BaseHtmlComponent {

  private loadMorePostsWrapperDomElement: HTMLElement;
  private loadMorePostsParagraphDomElement: HTMLElement;
  private loadMorePostsCountRuleDomElement: HTMLElement;
  private loadMorePostsButtonDomElement: HTMLElement;
  
  toHtml() {
    try {
      return /* html */ `
        <div id="${LOAD_MORE_POSTS_WRAPPER_ID}" class="load-more-posts-wrapper hide">
          <p id="${LOAD_MORE_POSTS_PARAGRAPH_ID}" class="displayed-posts-count"></p>
          <div class="displayed-posts-count-rule-wrapper">
            <div id="${LOAD_MORE_POSTS_COUNT_RULE_ID}" class="displayed-posts-count-rule"></div>
            <div class="displayed-posts-count-100-rule"></div>
          </div>
          <button id="${LOAD_MORE_POSTS_BUTTON_ID}" class="load-more-posts">Load more posts</button>
        </div>
      `;
    } catch (error) {
      console.error('error while executing LoadMorePostsHtmlComponent.toHtml() method. error: ' + error);
    }
  }

  postInsertHtml() {
    this.initClassAttributes();
    this.addCustomEventListener(DISPLAYED_POSTS_CHANGE_EVENT_NAME, this.handleDisplayedPostsChangeEvent.bind(this));
    this.loadMorePostsButtonDomElement.addEventListener('click', this.handleLoadMorePostsButtonClickEvent.bind(this));
  }

  private initClassAttributes() {
    this.loadMorePostsWrapperDomElement = document.getElementById(LOAD_MORE_POSTS_WRAPPER_ID);
    this.loadMorePostsParagraphDomElement = document.getElementById(LOAD_MORE_POSTS_PARAGRAPH_ID);
    this.loadMorePostsCountRuleDomElement = document.getElementById(LOAD_MORE_POSTS_COUNT_RULE_ID);
    this.loadMorePostsButtonDomElement = document.getElementById(LOAD_MORE_POSTS_BUTTON_ID);
  }

  private handleDisplayedPostsChangeEvent(event) {
    const filteredPostsCount = event.detail.filteredPostsCount;
    const displayedPostsCount = event.detail.displayedPostsCount;
    if (displayedPostsCount == 0) {
      this.loadMorePostsWrapperDomElement.classList.add('hide');
    } else {
      this.loadMorePostsWrapperDomElement.classList.remove('hide');
      this.loadMorePostsParagraphDomElement.innerHTML = `You are viewing ${displayedPostsCount} of ${filteredPostsCount} posts`;
      this.loadMorePostsCountRuleDomElement.style.width = `${(displayedPostsCount / filteredPostsCount) * 100}%`;
      if (filteredPostsCount == displayedPostsCount) {
        this.loadMorePostsButtonDomElement.classList.add('hide');
      } else {
        this.loadMorePostsButtonDomElement.classList.remove('hide');
      }
    }
  }

  private handleLoadMorePostsButtonClickEvent() {
    this.dispatchCustomEvent(LOAD_MORE_POSTS_EVENT_NAME);
  }

}

