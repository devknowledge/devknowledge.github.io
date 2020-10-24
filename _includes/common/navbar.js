renderNavbar();
const lightTheme = 'light';
const darkTheme = 'dark';
const currentThemeKey = 'CURRENT_THEME';
const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const changeToDarkThemeIcon = document.getElementById('ChangeToDarkThemeIcon');
const changeToLightThemeIcon = document.getElementById('ChangeToLightThemeIcon');

initCurrentTheme();
changeToDarkThemeIcon.addEventListener('click', toggleTheme);
changeToLightThemeIcon.addEventListener('click', toggleTheme);
window.onscroll = onScroll;

function renderNavbar() {
  const nav = document.querySelector('nav');
  nav.innerHTML = /* html */ `
    <div class='left'>
      <a href='/'>
        <img src='/assets/img/logo.png' alt='logo' />
        <span>DEV Knowledge</span>
      </a>
    </div>
    <div class='right'>
      <span id='ChangeToDarkThemeIcon' class='change-theme-icon pointer'>
        <span class='iconify' data-icon='bx:bx-moon' data-inline='false'></span>
      </span>
      <span id='ChangeToLightThemeIcon' class='change-theme-icon pointer'>
        <span class='iconify' data-icon='heroicons-solid:sun' data-inline='false'></span>
      </span>
    </div>
  `;
}

function onScroll(event) {
  if (window.scrollY === 0) {
    navbar.classList.remove('shadow');
  } else {
    navbar.classList.add('shadow');
  }
}

function initCurrentTheme() {
  const currentTheme = localStorage.getItem(currentThemeKey) || darkTheme;
  body.classList.remove(lightTheme, darkTheme);
  body.classList.add(currentTheme);
  localStorage.setItem(currentThemeKey, currentTheme);
  if (currentTheme === lightTheme) {
    changeToDarkThemeIcon.style.display = 'flex';
  } else {
    changeToLightThemeIcon.style.display = 'flex';
  }
}

function toggleTheme(event) {
  event.stopPropagation();
  const currentTheme = localStorage.getItem(currentThemeKey);
  if (currentTheme === lightTheme) {
    body.classList.remove(lightTheme);
    body.classList.remove(darkTheme);
    body.classList.add(darkTheme);
    localStorage.setItem(currentThemeKey, darkTheme);
    changeToDarkThemeIcon.style.display = 'none';
    changeToLightThemeIcon.style.display = 'flex';
  } else {
    body.classList.remove(lightTheme);
    body.classList.remove(darkTheme);
    body.classList.add(lightTheme);
    localStorage.setItem(currentThemeKey, lightTheme);
    changeToDarkThemeIcon.style.display = 'flex';
    changeToLightThemeIcon.style.display = 'none';
  }
}
