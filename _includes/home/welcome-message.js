renderWelcomeMessage();

function renderWelcomeMessage() {
  const element = document.getElementById('WelcomeMessage');
  element.innerHTML = /* html */ `
    <div class="welcome-message">
      <span class="first-message">Welcome to <span class="site-name">DEV Knowledge</span></span>
      <span class="second-message">We are happy to have you on board and hope you find our contents useful :)</span>
    </div>
  `;
}
