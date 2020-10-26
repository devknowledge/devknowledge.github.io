import { BaseStaticHtmlComponent } from "./component.interface";

export class WelcomeMessageHtmlComponent extends BaseStaticHtmlComponent {
  
  toHtml() {
    try {
      return /* html */ `
        <div class="welcome-message">
          <span class="first-message">Welcome to <span class="site-name">DEV Knowledge</span></span>
          <span class="second-message">We are happy to have you on board and hope you find our contents useful :)</span>
        </div>
      `;
    } catch (error) {
      console.error('error while executing WelcomeMessage.toHtml() method. error: ' + error);
    }
  }

}

