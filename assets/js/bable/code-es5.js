'use strict';

formatCodeTabs();
addCodeLineNumbers();
addCodeCopyIcon();

function formatCodeTabs() {
  document.querySelectorAll('.code-tabs + ul').forEach(function (codeTabs) {
    try {
      var tabsContentsId = 'tas-contents-id-' + Date.now() + Math.floor(Math.random() * 100);
      var tabsLinks = '<div class="tab-links">';
      var tabsContents = '<div>';
      codeTabs.querySelectorAll('li').forEach(function (codeTab) {
        var tabName = codeTab.querySelector('p').textContent;
        var tabId = tabName + '-' + tabsContentsId;
        var tabContent = codeTab.querySelector('div').innerHTML;
        tabsLinks += '<button class="tab-link" onclick="openCode(event, \''
          .concat(tabId, "', '")
          .concat(tabsContentsId, '\')">')
          .concat(tabName, '</button>');
        tabsContents += '<div id="'.concat(tabId, '" class="tab-content">').concat(tabContent, '</div>');
      });
      tabsLinks += '</div>';
      tabsContents + '</div>';
      codeTabs.outerHTML = '<div id="'.concat(tabsContentsId, '">').concat(tabsLinks).concat(tabsContents, '</div>');
      document.querySelector('#'.concat(tabsContentsId, ' .tab-link')).click();
    } catch (error) {
      console.error(error);
    }
  });
}

function openCode(event, tabId, tabsContentsId) {
  try {
    var tabsContents = document.getElementById(tabsContentsId);
    tabsContents.querySelectorAll('.tab-content').forEach(function (tabContent) {
      return (tabContent.style.display = 'none');
    });
    tabsContents.querySelectorAll('.tab-link').forEach(function (tabLink) {
      return tabLink.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
  } catch (error) {
    console.error(error);
  }
}

function addCodeLineNumbers() {
  try {
    document.querySelectorAll('pre.highlight').forEach(function (code) {
      try {
        var codeLineNumbers = (code.innerHTML.match(/\n/g) || []).length;
        var codeLineNumbersHtml = '<div class="code-line-number">';

        for (var i = 1; i <= codeLineNumbers; i++) {
          codeLineNumbersHtml += '<span>'.concat(i, '</span>');
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
    document.querySelectorAll('pre.highlight code').forEach(function (code) {
      var codeId = 'code-id-' + Date.now() + Math.floor(Math.random() * 100);
      code.id = codeId;
      var copyCodeIconHtml = '\n        <span \n          title="copy code" \n          onclick="onCodeCopyIconClick(event, \''.concat(
        codeId,
        '\')" \n          class="code-copy-icon iconify" \n          data-icon="mdi:content-copy" \n          data-inline="false"\n        ></span>\n      '
      );
      code.insertAdjacentHTML('beforebegin', copyCodeIconHtml);
    });
  } catch (error) {
    console.error(error);
  }
}

function onCodeCopyIconClick(event, codeId) {
  var code = document.getElementById(codeId);
  var codeText = code.innerText || code.contentText;
  var textarea = document.createElement('textarea');
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
