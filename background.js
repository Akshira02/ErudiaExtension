// background.js
chrome.tabs.onCreated.addListener(function(tab) {
    // Check if the new tab is the default new tab page
    chrome.tabs.update(tab.id, { url: "https://erudiasearch.com" });
    }
});
  
