// content.js

// Check if the current URL matches any of the forbidden websites
function isForbiddenWebsite(url) {
    const forbiddenWebsites = [
        "https://www.youtube.com/",
        "https://www.facebook.com/",
        "https://www.whatsapp.com/",
        "https://www.skype.com/",
        "https://www.netflix.com/",
        "https://www.twitter.com/",
        "https://www.amazon.com/",
        "https://instagram.com/",
        "https://snapchat.com/",
        "https://www.x.com/"
    ];
    return forbiddenWebsites.some(forbiddenUrl => url.startsWith(forbiddenUrl));
}

// When the page is loaded, check if it's a forbidden website and send the URL to background script
window.addEventListener('load', function() {
    const currentUrl = window.location.href;
    if (isForbiddenWebsite(currentUrl)) {
        chrome.runtime.sendMessage({action: "storeUrl", url: currentUrl});
    }
});

