import { BaseHtmlComponent } from './component.interface';
import { FILTER_POSTS_EVENT_NAME } from '../constants/events.constants';

const SEARCH_POSTS_INPUT_ID = 'SEARCH_POSTS_INPUT_ID';
const ADVANCED_SEARCH_PANEL_ID = 'ADVANCED_SEARCH_PANEL_ID';
const CLOSE_ADVANCED_SEARCH_PANEL_BUTTON_ID = 'CLOSE_ADVANCED_SEARCH_PANEL_BUTTON_ID';
const OPEN_ADVANCED_SEARCH_PANEL_BUTTON_ID = 'OPEN_ADVANCED_SEARCH_PANEL_BUTTON_ID';
const SELECT_ALL_CATEGORIES_BUTTON_ID = 'SELECT_ALL_CATEGORIES_BUTTON_ID';
const UNSELECT_ALL_CATEGORIES_BUTTON_ID = 'UNSELECT_ALL_CATEGORIES_BUTTON_ID';
const ALL_CATEGORIES_QUERY_SELECTOR = '.search-wrapper .category';

export class PostSearchHtmlComponent extends BaseHtmlComponent {
  private searchPostsInputDomElement: HTMLInputElement;
  private advancedSearchPanelDomElement: HTMLElement;
  private closeAdvancedSearchPanelButtonDomElement: HTMLElement;
  private openAdvancedSearchPanelButtonDomElement: HTMLElement;
  private selectAllCategoriesButtonDomElement: HTMLElement;
  private unselectAllCategoriesButtonDomElement: HTMLElement;
  private allCategoriesDomElements: NodeListOf<HTMLElement>;
  private allCategoriesLowercase: Array<string>;
  private selectedCategoriesLowercase: Array<string>;

  toHtml() {
    try {
      return /* html */ `
        <div class="search-wrapper">
          <span class="iconify" data-icon="ic:outline-search" data-inline="false"></span>
          <input id="${SEARCH_POSTS_INPUT_ID}" type="text" placeholder="Search..." />
          <span id="${CLOSE_ADVANCED_SEARCH_PANEL_BUTTON_ID}" class="hide">
            <span class="iconify pointer" data-icon="eva:arrow-ios-upward-outline" data-inline="false"></span>
          </span>
          <span id="${OPEN_ADVANCED_SEARCH_PANEL_BUTTON_ID}">
            <span class="iconify pointer" data-icon="eva:arrow-ios-downward-outline" data-inline="false"></span>
          </span>
          <div id="${ADVANCED_SEARCH_PANEL_ID}" class="advanced-search-inputs-wrapper hide">
            <div class="section-title-wrapper">
              <p class="section-title">Selected categories</p>
              <span id="${UNSELECT_ALL_CATEGORIES_BUTTON_ID}" class="iconify-wrapper">
                <span class="iconify pointer" title="unselect all categories" data-icon="gg:remove-r" data-inline="false"></span>
              </span>
              <span id="${SELECT_ALL_CATEGORIES_BUTTON_ID}" class="hide iconify-wrapper">
                <span class="iconify pointer" title="select all categories" data-icon="feather:plus-square" data-inline="false"></span>
              </span>
            </div>
            ${this.renderCategories()}
          </div>
        </div>
      `;
    } catch (error) {
      console.error('error while executing WelcomeMessage.toHtml() method. error: ' + error);
    }
  }

  postInsertHtml() {
    this.initClassAttributes();
    this.addEventListeners();
  }

  private renderCategories() {
    let res = '<span class="categories-wrapper">';
    window.jekyll.categories.forEach((category) => (res += `<span class="category">${category}</span>`));
    return res + '</span>';
  }

  private initClassAttributes() {
    this.searchPostsInputDomElement = document.getElementById(SEARCH_POSTS_INPUT_ID) as HTMLInputElement;
    this.advancedSearchPanelDomElement = document.getElementById(ADVANCED_SEARCH_PANEL_ID);
    this.closeAdvancedSearchPanelButtonDomElement = document.getElementById(CLOSE_ADVANCED_SEARCH_PANEL_BUTTON_ID);
    this.openAdvancedSearchPanelButtonDomElement = document.getElementById(OPEN_ADVANCED_SEARCH_PANEL_BUTTON_ID);
    this.selectAllCategoriesButtonDomElement = document.getElementById(SELECT_ALL_CATEGORIES_BUTTON_ID);
    this.unselectAllCategoriesButtonDomElement = document.getElementById(UNSELECT_ALL_CATEGORIES_BUTTON_ID);
    this.allCategoriesDomElements = document.querySelectorAll(ALL_CATEGORIES_QUERY_SELECTOR);
    this.allCategoriesLowercase = this.getAllCategoriesLowerCase();
    this.selectedCategoriesLowercase = [...this.allCategoriesLowercase];
    this.styleSelectedCategories();
  }

  private addEventListeners() {
    this.openAdvancedSearchPanelButtonDomElement.addEventListener('click', this.handleOpenAdvancedSearchPanelClickEvent.bind(this));
    this.selectAllCategoriesButtonDomElement.addEventListener('click', this.handleSelectAllCategoriesButtonClickEvent.bind(this));
    this.unselectAllCategoriesButtonDomElement.addEventListener('click', this.handleUnselectAllCategoriesButtonClickEvent.bind(this));
    this.advancedSearchPanelDomElement.addEventListener('click', this.handleAdvancedSearchPanelClickEvent.bind(this));
    this.allCategoriesDomElements.forEach((category) => category.addEventListener('click', this.toggleCategory.bind(this)));
    this.searchPostsInputDomElement.addEventListener('keyup', this.delay(this.dispatchFilterPostsEvent.bind(this), 500));
    document.addEventListener('click', this.closeAdvancedSearchPanel.bind(this));
  }

  private getAllCategoriesLowerCase() {
    return window.jekyll.categories.map((category) => category.toLowerCase());
  }

  private styleSelectedCategories() {
    this.allCategoriesDomElements.forEach((category) => {
      if (this.selectedCategoriesLowercase.includes(category.innerText)) {
        category.classList.add('selected');
      } else {
        category.classList.remove('selected');
      }
    });
  }

  private handleOpenAdvancedSearchPanelClickEvent(event) {
    event.stopPropagation();
    this.openAdvancedSearchPanelButtonDomElement.classList.add('hide');
    this.closeAdvancedSearchPanelButtonDomElement.classList.remove('hide');
    this.advancedSearchPanelDomElement.classList.remove('hide');
  }

  private handleSelectAllCategoriesButtonClickEvent(event) {
    this.selectAllCategoriesButtonDomElement.classList.add('hide');
    this.unselectAllCategoriesButtonDomElement.classList.remove('hide');
    this.allCategoriesDomElements.forEach((category) => {
      category.classList.add('selected');
      this.selectedCategoriesLowercase.push(category.innerText.toLowerCase());
    });
    this.dispatchFilterPostsEvent();
  }

  private handleUnselectAllCategoriesButtonClickEvent(event) {
    this.selectAllCategoriesButtonDomElement.classList.remove('hide');
    this.unselectAllCategoriesButtonDomElement.classList.add('hide');
    this.selectedCategoriesLowercase = [];
    this.allCategoriesDomElements.forEach((category) => category.classList.remove('selected'));
    this.dispatchFilterPostsEvent();
  }

  private handleAdvancedSearchPanelClickEvent(event) {
    event.stopPropagation();
  }

  private closeAdvancedSearchPanel() {
    this.openAdvancedSearchPanelButtonDomElement.classList.remove('hide');
    this.closeAdvancedSearchPanelButtonDomElement.classList.add('hide');
    this.advancedSearchPanelDomElement.classList.add('hide');
  }

  private toggleCategory(event) {
    const categoryDomElement = event.target;
    const categoryValueLowercase = categoryDomElement.innerText.toLowerCase();
    if (this.selectedCategoriesLowercase.includes(categoryValueLowercase)) {
      this.selectedCategoriesLowercase = this.selectedCategoriesLowercase.filter((t) => t !== categoryValueLowercase);
      categoryDomElement.classList.remove('selected');
    } else {
      this.selectedCategoriesLowercase.push(categoryValueLowercase);
      categoryDomElement.classList.add('selected');
    }
    this.dispatchFilterPostsEvent();
  }

  private dispatchFilterPostsEvent() {
    this.dispatchCustomEvent(FILTER_POSTS_EVENT_NAME, {
      selectedCategoriesLowercase: this.selectedCategoriesLowercase,
      searchInputText: this.searchPostsInputDomElement.value,
    });
  }
}
