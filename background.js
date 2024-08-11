chrome.tabs.onCreated.addListener(function(tab) {
    // Check if the tab is the default new tab (empty, undefined, or chrome://newtab/)
    if (tab.url === 'chrome://newtab/' || tab.url === '' || tab.url === undefined) {
        chrome.tabs.update(tab.id, { url: "https://erudiasearch.com" });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // If the tab is being updated and the URL is blank or undefined, redirect to ErudiaSearch.
    if (changeInfo.status === 'loading' && (tab.url === '' || tab.url === undefined)) {
        chrome.tabs.update(tabId, { url: "https://erudiasearch.com" });
    }
});

  
