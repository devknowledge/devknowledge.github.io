import { BaseStaticHtmlComponent } from "./component.interface";

export class FooterHtmlComponent extends BaseStaticHtmlComponent {
  
  toHtml() {
    try {
      return /* html */ `
        <footer>
          <p>© 2020 devknowledge.github.io</p>
          <a href="https://github.com/devknowledge/devknowledge.github.io" target="_blank">
            <span class="iconify" data-icon="codicon:github-inverted" data-inline="false"></span>
          </a>
        </footer>
      `;
    } catch (error) {
      console.error('error while executing Footer.toHtml() method. error: ' + error);
    }
  }

}

