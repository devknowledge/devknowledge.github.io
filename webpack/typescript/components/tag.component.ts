import { BaseStaticHtmlComponent } from "./component.interface";

export class TagHtmlComponent extends BaseStaticHtmlComponent {

  constructor(private tag: string) {
    super();
  }
  
  toHtml() {
    try {
      return /* html */ `
        <span class="tag">${this.tag}</span>
      `;
    } catch (error) {
      console.error('error while executing TagHtmlComponent.toHtml() method. error: ' + error);
    }
  }

}

