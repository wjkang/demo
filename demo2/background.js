chrome.tabs.onUpdated.addListener(function (tabId,changeInfo,tab){
    if(/https:\/\/www\.baidu\.com\/.*/.test(tab.url))
    chrome.browserAction.disable(tabId);
})