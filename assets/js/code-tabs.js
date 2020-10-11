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

function openCode(event, tabId, tabsContentsId) {
  const tabsContents = document.getElementById(tabsContentsId);
  tabsContents.querySelectorAll('.tab-content').forEach((tabContent) => (tabContent.style.display = 'none'));
  tabsContents.querySelectorAll('.tab-link').forEach((tabLink) => tabLink.classList.remove('active'));
  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.classList.add('active');
}
