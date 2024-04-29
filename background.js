// background.js

// Variable to store whether the extension functionality is enabled or disabled
var isEnabled = true;

// Variable to store the URL of the forbidden website
var storedUrl = "";

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
        storedUrl = message.url;
        // Open popup.html when a forbidden website is detected
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 300,
            height: 200
        });
    }
});

// When requested, send the stored URL to popup.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "getUrl") {
        // Send the stored URL as response
        sendResponse({url: storedUrl});
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
