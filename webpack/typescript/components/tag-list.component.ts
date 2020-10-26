import { BaseStaticHtmlComponent } from "./component.interface";
import { TagHtmlComponent } from "./tag.component";

export class TagListHtmlComponent extends BaseStaticHtmlComponent {

  constructor(private tags: Array<string>) {
    super();
  }
  
  toHtml() {
    try {
      let res = '';
      this.tags.forEach((tag) => (res += new TagHtmlComponent(tag).toHtml()));
      return res;
    } catch (error) {
      console.error('error while executing TagListHtmlComponent.toHtml() method. error: ' + error);
    }
  }

}

