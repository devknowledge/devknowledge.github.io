import { BaseStaticHtmlComponent } from "./component.interface";

export class JoinGithubDiscussionHtmlComponent extends BaseStaticHtmlComponent {

  constructor(private url: string) {
    super();
  }
  
  toHtml() {
    try {
      return /* html */ `
        <p class="comments-join-discussion">
          Join the discussion for this article on 
          <a href="${this.url}" target="_blank">this github ticket</a>
        </p>
      `;
    } catch (error) {
      console.error('error while executing JoinGithubDiscussionHtmlComponent.toHtml() method. error: ' + error);
    }
  }

}

