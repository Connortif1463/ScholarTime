console.log("forbidden.js loaded");

// Function to handle cancel button click
function handleCancel() {
    console.log("Cancel button clicked");
    // Navigate to Google
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: "https://www.google.com/" });
    });
}

// Add event listener to the cancel button
document.addEventListener('DOMContentLoaded', function() {
    var cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', handleCancel);
        console.log("Cancel button event listener attached");
    } else {
        console.log("Cancel button not found");
    }
});
