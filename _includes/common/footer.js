setTimeout(renderFooter);
function renderFooter() {
  const footer = document.querySelector('footer');
  footer.innerHTML = /*html*/ `
    <p>© 2020 devknowledge.github.io</p>
    <a href="https://github.com/devknowledge/devknowledge.github.io" target="_blank"
      ><span class="iconify" data-icon="codicon:github-inverted" data-inline="false"></span
    ></a>
  `;
}
