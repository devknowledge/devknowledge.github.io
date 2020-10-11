formatCodeTabs();
addCodeLineNumbers();
addCodeCopyIcon();

function formatCodeTabs() {
  document.querySelectorAll('.code-tabs + ul').forEach((codeTabs) => {
    try {
      const tabsContentsId = 'tas-contents-id-' + Date.now() + Math.floor(Math.random() * 100);
      let tabsLinks = '<div class="tab-links">';
      let tabsContents = `<div>`;
      codeTabs.querySelectorAll('li').forEach((codeTab) => {
        const tabName = codeTab.querySelector('p').textContent;
        const tabId = tabName + '-' + tabsContentsId;
        const tabContent = codeTab.querySelector('div').innerHTML;
        tabsLinks += `<button class="tab-link" onclick="openCode(event, '${tabId}', '${tabsContentsId}')">${tabName}</button>`;
        tabsContents += `<div id="${tabId}" class="tab-content">${tabContent}</div>`;
      });
      tabsLinks += '</div>';
      tabsContents + '</div>';
      codeTabs.outerHTML = `<div id="${tabsContentsId}">${tabsLinks}${tabsContents}</div>`;
      document.querySelector(`#${tabsContentsId} .tab-link`).click();
    } catch (error) {
      console.error(error);
    }
  });
}

function openCode(event, tabId, tabsContentsId) {
  try {
    const tabsContents = document.getElementById(tabsContentsId);
    tabsContents.querySelectorAll('.tab-content').forEach((tabContent) => (tabContent.style.display = 'none'));
    tabsContents.querySelectorAll('.tab-link').forEach((tabLink) => tabLink.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
  } catch (error) {
    console.error(error);
  }
}

function addCodeLineNumbers() {
  try {
    document.querySelectorAll('pre.highlight').forEach((code) => {
      try {
        const codeLineNumbers = (code.innerHTML.match(/\n/g) || []).length;
        let codeLineNumbersHtml = '<div class="code-line-number">';
        for (let i = 1; i <= codeLineNumbers; i++) {
          codeLineNumbersHtml += `<span>${i}</span>`;
        }
        codeLineNumbersHtml += '</div>';
        code.insertAdjacentHTML('afterbegin', codeLineNumbersHtml);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function addCodeCopyIcon() {
  try {
    document.querySelectorAll('pre.highlight code').forEach((code) => {
      const codeId = 'code-id-' + Date.now() + Math.floor(Math.random() * 100);
      code.id = codeId;
      const copyCodeIconHtml = /* html */ `
        <span 
          title="copy code" 
          onclick="onCodeCopyIconClick(event, '${codeId}')" 
          class="code-copy-icon iconify" 
          data-icon="carbon:copy" 
          data-inline="false"
        ></span>
      `;
      code.insertAdjacentHTML('beforebegin', copyCodeIconHtml);
    });
  } catch (error) {
    console.error(error);
  }
}

function onCodeCopyIconClick(event, codeId) {
  const code = document.getElementById(codeId);
  const codeText = code.innerText || code.contentText;
  const textarea = document.createElement('textarea');
  textarea.textContent = codeText;
  textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand('copy');
  } catch (error) {
    console.error('Copy to clipboard failed.', error);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}
