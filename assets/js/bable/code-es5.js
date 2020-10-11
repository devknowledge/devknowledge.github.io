'use strict';

formatCodeTabs();
addCodeLineNumbers();

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

function addCodeLineNumbers() {
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
}

function openCode(event, tabId, tabsContentsId) {
  var tabsContents = document.getElementById(tabsContentsId);
  tabsContents.querySelectorAll('.tab-content').forEach(function (tabContent) {
    return (tabContent.style.display = 'none');
  });
  tabsContents.querySelectorAll('.tab-link').forEach(function (tabLink) {
    return tabLink.classList.remove('active');
  });
  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.classList.add('active');
}
