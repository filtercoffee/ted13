var id = chrome.contextMenus.create({
  "title": "TED link in new tab", 
  "contexts":["link"], 
  "onclick": onclickCallback,
  "targetUrlPatterns": ["*://www.youtube.com/*watch*v=*"]
  });

function onclickCallback(info, tab) {
  chrome.tabs.create({ url: info.linkUrl + '#t=13' });
}
