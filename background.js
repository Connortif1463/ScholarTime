// background.js

var storedUrl = "";

// listener for forbidden website link
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "storeUrl") {
        storedUrl = message.url;
    }
});

// when requested, give stored url to popup.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "getUrl") {
        sendResponse({url: storedUrl});
    }
});
