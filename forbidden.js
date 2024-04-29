// Cancel button listener
document.getElementById('cancelBtn').addEventListener('click', function() {
    console.log("Cancel button clicked");
    // Navigate to Google
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: "https://www.google.com/"});
    });
});
