// background.js

// Initialize variable to store URL
var storedUrl = "";

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "storeUrl") {
        // Store the URL sent from content script
        storedUrl = message.url;
    }
});

// Provide stored URL to popup when requested
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "getUrl") {
        // Send the stored URL to the popup
        sendResponse({url: storedUrl});
    }
});
