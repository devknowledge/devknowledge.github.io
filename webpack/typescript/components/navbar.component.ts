import { BaseHtmlComponent } from "./component.interface";

const LIGHT_THEME_VALUE = 'light';
const DARK_THEME_VALUE = 'dark';
const CURRENT_THEME_KEY = 'CURRENT_THEME';
const CHANGE_TO_DARK_THEME_ICON_ID = 'CHANGE_TO_DARK_THEME_ICON_ID';
const CHANGE_TO_LIGHT_THEME_ICON_ID = 'CHANGE_TO_LIGHT_THEME_ICON_ID'

export class NavbarHtmlComponent extends BaseHtmlComponent {
  
  private changeToDarkThemeButtonDomElement: HTMLElement;
  private changeToLightThemeButtonDomElement: HTMLElement;
  private navbarDomElement: HTMLElement;
  private bodyDomElement: HTMLElement;

  constructor() {
    super();
    this.toHtml = this.toHtml.bind(this);
    this.postHtmlInsert = this.postHtmlInsert.bind(this);
    this.initDomElements = this.initDomElements.bind(this);
    this.onChangeThemeEvent = this.onChangeThemeEvent.bind(this);
    this.onWindowScrollEvent = this.onWindowScrollEvent.bind(this);
  }

  preHtmlInsert(): void {
    this.setThemeFromLocalStorage();
  }

  toHtml() {
    try {
      return /* html */ `
        <nav>
          <div class='left'>
            <a href='/'>
              <img src='/assets/logo.png' alt='logo' />
              <span>DEV Knowledge</span>
            </a>
          </div>
          <div class='right'>
            <span id='${CHANGE_TO_DARK_THEME_ICON_ID}' class='change-theme-icon pointer'>
              <span class='iconify' data-icon='bx:bx-moon' data-inline='false'></span>
            </span>
            <span id='${CHANGE_TO_LIGHT_THEME_ICON_ID}' class='change-theme-icon pointer'>
              <span class='iconify' data-icon='heroicons-solid:sun' data-inline='false'></span>
            </span>
          </div>
        </nav>
      `;
    } catch (error) {
      console.error('error while executing Navbar.toHtml() method. error: ' + error);
    }
  }

  postHtmlInsert() {
    try {
      this.initDomElements();
      this.showHideToggleThemeIcons();
      this.changeToDarkThemeButtonDomElement.addEventListener('click', this.onChangeThemeEvent);
      this.changeToLightThemeButtonDomElement.addEventListener('click', this.onChangeThemeEvent);
      window.addEventListener('scroll', this.onWindowScrollEvent);
    } catch (error) {
      console.error('error while executing Navbar.postHtmlInsert() method. error: ' + error);
    }
  }

  private initDomElements() {
    this.navbarDomElement = document.querySelector('nav');
    this.bodyDomElement = document.querySelector('body');
    this.changeToDarkThemeButtonDomElement = document.getElementById(CHANGE_TO_DARK_THEME_ICON_ID);
    this.changeToLightThemeButtonDomElement = document.getElementById(CHANGE_TO_LIGHT_THEME_ICON_ID);
  }

  private showHideToggleThemeIcons() {
    try {
      if (localStorage.getItem(CURRENT_THEME_KEY) === LIGHT_THEME_VALUE) {
        this.changeToDarkThemeButtonDomElement.style.display = 'flex';
      } else {
        this.changeToLightThemeButtonDomElement.style.display = 'flex';
      }
    } catch (error) {
      console.error('error while executing Navbar.showHideToggleThemeIcons() method. error: ' + error);
    }
  } 

  private setThemeFromLocalStorage() {
    this.bodyDomElement = document.querySelector('body');
    const currentTheme = localStorage.getItem(CURRENT_THEME_KEY) || DARK_THEME_VALUE;
    this.bodyDomElement.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);
    this.bodyDomElement.classList.add(currentTheme);
    localStorage.setItem(CURRENT_THEME_KEY, currentTheme);
  } 

  private onChangeThemeEvent(event: any) {
    event.stopPropagation();
    const currentTheme = localStorage.getItem(CURRENT_THEME_KEY);
    if (currentTheme === LIGHT_THEME_VALUE) {
      this.bodyDomElement.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);
      this.bodyDomElement.classList.add(DARK_THEME_VALUE);
      localStorage.setItem(CURRENT_THEME_KEY, DARK_THEME_VALUE);
      this.changeToDarkThemeButtonDomElement.style.display = 'none';
      this.changeToLightThemeButtonDomElement.style.display = 'flex';
    } else {
      this.bodyDomElement.classList.remove(DARK_THEME_VALUE, LIGHT_THEME_VALUE);
      this.bodyDomElement.classList.add(LIGHT_THEME_VALUE);
      localStorage.setItem(CURRENT_THEME_KEY, LIGHT_THEME_VALUE);
      this.changeToDarkThemeButtonDomElement.style.display = 'flex';
      this.changeToLightThemeButtonDomElement.style.display = 'none';
    }
  }

  private onWindowScrollEvent() {
    if (window.scrollY === 0) {
      this.navbarDomElement.classList.remove('shadow');
    } else {
      this.navbarDomElement.classList.add('shadow');
    }
  }
}

