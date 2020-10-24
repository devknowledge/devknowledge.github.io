renderBuyMeCoffee();

function renderBuyMeCoffee() {
  const element = document.getElementById('BuyMeCoffee');
  element.innerHTML = /* html */ `
    <div class="buy-me-coffee__hr"></div>
    <div class="buy-me-coffee">
      <p>If you like our content, please consider buying us a coffee.</p>
      <p>Thank you for your support!</p>
      <a class="buy-me-coffee__button" href="#">
        <div class="buy-me-coffee__button-container">
          <span class="iconify" data-icon="cib:buy-me-a-coffee" data-inline="false"></span>
          Buy me a coffee
        </div>
      </a>
    </div>
  `;
}
