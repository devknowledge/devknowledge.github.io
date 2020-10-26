import 'sass/home.scss';
import { HtmlComponent } from './typescript/components/component.interface';
import { FooterHtmlComponent } from './typescript/components/footer.component';
import { HomeMainHtmlComponent } from './typescript/components/home-main';
import { NavbarHtmlComponent } from "./typescript/components/navbar.component";

const body = document.querySelector('body');

const components: HtmlComponent[] = [];
components.push(new NavbarHtmlComponent());
components.push(new HomeMainHtmlComponent());
components.push(new FooterHtmlComponent());

components.forEach(component => component.preHtmlInsert());
components.forEach(component => body.insertAdjacentHTML('beforeend', component.toHtml()));
components.forEach(component => component.postHtmlInsert());