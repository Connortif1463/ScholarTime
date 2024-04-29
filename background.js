// background.js

var isEnabled = true;

// listener for toggle of app functionality
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "toggleFunctionality") {
        isEnabled = !isEnabled;
        sendResponse({ enabled: isEnabled });
    } else if (message.action == "getEnabledStatus") {
        sendResponse({ enabled: isEnabled });
    }
});

// Rest of the code remains the same...
