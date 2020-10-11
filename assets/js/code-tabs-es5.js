// generated using bable compiler
// https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=CYewxgrgtgpgdgFwHQEcIwE4E8DKMA2MYCIGAgvvgBQDkSYIwMAtAgIYBGAzgAQDUPCPhoBKJADNSAUTZgAFlSoMmAFU5cRPALwA-HgG8AUDx4JsB4yZ4M4XBKfUBhEIngIuASWDaeNdl2YbBDcAgEtgZhp-HgARNmCkOBAAdypNAQBZeLkJfBBSKiyEHIw2OFAoNJ4AKh4ARgAGBpEAbksTQnt2bgAZULgAa14tXwAeYFCAN2t8Ni4uLQAibuZ8fqHFnRo2qx5Oh25nV0RhngADcamdM52rZRg1blR0bDxCYlIKaho10QlpWQKJSMB6cTS6Cy7Ew2OwHABybFgPnuj2emFwBCIJAwtAADn9ggAPBBHYKIW67GFdTheHzdBFIgQ0SLRbpcUkhLwUu4uWHdDmIZEg1FodFvLEFGgTSZ_fpwTAACRUGR63JMbL6g14fBGFw4EAQJDgMzmC2WnFW60WPBcYDWYAGSxAuPgziYVBgkzcABpfAASfTdLwAXxovpoAbZAvcIdEm0jnAZMGDowA9PrDS5rmqDuyXGT3PxdZdpuElgmOCHrXbTUsVkE3PHA5xoynU9Ls-0eMHWl2NettSMaGmO9s-058yFosP21cx5TheokCADYrlT0fBdpTwy4sK3njjHgMGm_2tcH99GuG2Ozcu6BILBEGjXpiPjizgBiS-Tk4hnhICsayDGcYh2qEDppLcwbWPE8g8B6GAYKQmhGAutggIQSCYMhOI4Sh0GGD2bSGOIEBwMQoQuDaLpwG6MAel6iC-kGwAsROh6eMAqGWFSuZXj4D7QG4SAAOYwAgUiEE-CAAEJYF4VBRr-R69uqHEFlwL4Yu82JfLQgEWg2iB_JIGAyPIij8ip4J6EpLYqUgdhYFhExcLisxYD4NBJPKohqfxKlaaKr66Z8lAGUB6ymQCln2RwmoDLZByJfQszzH0dhIBgMBQCAXq0LICBTDA_m3EJMliRJUm5W48mKaxYjOa5oTuZ53kcHkDrzjwnoiZASFuGoGDicgNYZa1yBsMAwCFZRXqiG0waGEAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env%2Ces2015&prettier=false&targets=&version=7.11.6&externalPlugins=
'use strict';

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
