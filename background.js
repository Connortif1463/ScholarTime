// background.js
var storedUrl = null;

// Listener for forbidden website link
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "storeUrl") {
        storedUrl = message.url;
    }
});

// When requested, give stored URL to popup.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "getUrl") {
        sendResponse({url: storedUrl});
    }
});

// Chrome action listener
chrome.action.onClicked.addListener((tab) => {
    chrome.windows.create({
        url: "toggle.html",
        type: "popup",
        width: 200,
        height: 100
    });
});
