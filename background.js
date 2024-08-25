chrome.tabs.onCreated.addListener(function(tab) {
    console.log("Tab created with URL:", tab.url, "Pending URL:", tab.pendingUrl);
    setTimeout(() => {
        if (tab.url === 'chrome://newtab/' || (tab.pendingUrl === 'chrome://newtab/')) {
            chrome.tabs.update(tab.id, { url: "https://erudiasearch.com" });
        }
    }, 100); // 100 milliseconds delay
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("Tab updated with URL:", tab.url);
    if (changeInfo.status === 'complete') {
        if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-search://')) {
            return; // Don't redirect Chrome internal pages
        }
        if (tab.url === 'chrome://newtab/' || (tab.pendingUrl && tab.pendingUrl === 'chrome://newtab/')) {
            chrome.tabs.update(tabId, { url: "https://erudiasearch.com" });
        }
    }
});
