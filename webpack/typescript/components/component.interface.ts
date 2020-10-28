export interface HtmlComponent {

  toHtml(): string;
  
  preHtmlInsert(): void;

  insertHtml(parentElement: HTMLElement, insertPosition: InsertPosition): void;

  postHtmlInsert(): void;

}

export abstract class BaseHtmlComponent implements HtmlComponent {

  abstract toHtml(): string;

  abstract postHtmlInsert(): void 

  preHtmlInsert(): void {
    // nothing to do!
  }

  insertHtml(parentElement: HTMLElement, insertPosition: InsertPosition): void {
    parentElement.insertAdjacentHTML(insertPosition, this.toHtml());
  }

  dispatchCustomEvent(eventName: string, eventDetail = {}) {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: eventDetail,
      })
    );
  }

  addCustomEventListener(eventName: string, listener: EventListener) {
    document.addEventListener(eventName, listener);
  }

  delay(fn, ms) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(fn.bind(this, ...args), ms || 0);
    };
  }

}

export abstract class BaseStaticHtmlComponent extends BaseHtmlComponent {
  postHtmlInsert(): void {
    // nothing to do!
  }
}
