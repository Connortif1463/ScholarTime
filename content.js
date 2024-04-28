// content.js

// get the URL of the current page
var currentUrl = window.location.href;

// send message to background script with the URL
chrome.runtime.sendMessage({action: "storeUrl", url: currentUrl});
