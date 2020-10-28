import 'sass/post.scss';
import { HtmlComponent } from './typescript/components/component.interface';
import { FooterHtmlComponent } from './typescript/components/footer.component';
import { NavbarHtmlComponent } from "./typescript/components/navbar.component";
import { PostMainHtmlComponent } from './typescript/components/post-main';

const body = document.querySelector('body');

const components: HtmlComponent[] = [];
components.push(new NavbarHtmlComponent());
components.push(new PostMainHtmlComponent());
components.push(new FooterHtmlComponent());

components.forEach(component => component.preHtmlInsert());
components.forEach(component => component.insertHtml(body, 'beforeend'));
components.forEach(component => component.postHtmlInsert());