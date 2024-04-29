// background.js

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
