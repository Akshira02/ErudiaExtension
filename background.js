chrome.tabs.onCreated.addListener(function(tab) {
    // Check if the tab URL is undefined or the default new tab page, and not already on ErudiaSearch
    if ((tab.url === 'chrome://newtab/' || tab.url === '' || tab.url === undefined) &&
        (!tab.pendingUrl || !tab.pendingUrl.startsWith("https://erudiasearch.com"))) {
        chrome.tabs.update(tab.id, { url: "https://erudiasearch.com" });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Avoid redirection loop and only redirect if the tab is loading and not a Chrome internal page
    if (changeInfo.status === 'loading' &&
        (tab.url === 'chrome://newtab/' || tab.url === '' || tab.url === undefined) &&
        (!tab.pendingUrl || !tab.pendingUrl.startsWith("https://erudiasearch.com"))) {
        chrome.tabs.update(tabId, { url: "https://erudiasearch.com" });
    }
});
  
