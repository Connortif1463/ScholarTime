// background.js

// Variable to store whether the extension functionality is enabled or disabled
var isEnabled = true;

// Listener for toggle of app functionality
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "toggleFunctionality") {
        // Toggle the isEnabled variable
        isEnabled = !isEnabled;
        // Send response back to the sender
        sendResponse({ enabled: isEnabled });
    }
});

// Listener for storing the URL of the forbidden website
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "storeUrl") {
        // Store the URL received in the message
        var storedUrl = message.url;
        // Open popup.html when a forbidden website is detected
        if (isEnabled) {
            chrome.tabs.update(sender.tab.id, { url: "popup.html" });
        } else {
            // If the extension is disabled, continue with the original URL
            sendResponse({ enabled: isEnabled });
        }
    }
});

// Chrome action listener
chrome.action.onClicked.addListener((tab) => {
    // Open the toggle.html popup window when the extension icon is clicked
    chrome.windows.create({
        url: "toggle.html",
        type: "popup",
        width: 200,
        height: 100
    });
});
