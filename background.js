// background.js
// var storedUrl = null;

// // Listener for forbidden website link
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action == "storeUrl") {
//         storedUrl = message.url;
//     }
// });

// // When requested, give stored URL to popup.js
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action == "getUrl") {
//         sendResponse({url: storedUrl});
//     }
// });

// // Chrome action listener
// chrome.action.onClicked.addListener((tab) => {
//     chrome.windows.create({
//         url: "toggle.html",
//         type: "popup",
//         width: 200,
//         height: 100
//     });
// });

// Listener for forbidden website link
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "storeUrl") {
        // Open a new tab with the forbidden page
        chrome.tabs.update(sender.tab.id, { url: chrome.runtime.getURL("forbidden.html") });
    }
});
