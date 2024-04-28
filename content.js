// content.js

// Get the URL of the current page
var currentUrl = window.location.href;

// Send message to background script with the URL
chrome.runtime.sendMessage({action: "storeUrl", url: currentUrl});
