chrome.tabs.onCreated.addListener(function(tab) {
    // Check if the new tab is the default new tab page
    if (tab.url === 'chrome://newtab/' || tab.url === '' || tab.url === undefined) {
        chrome.tabs.update(tab.id, { url: "https://erudiasearch.com" });
    }
});
