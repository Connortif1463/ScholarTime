// popup.js

document.addEventListener('DOMContentLoaded', function() {
    // Get reference to buttons
    var continueBtn = document.getElementById('continueBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var websiteLink = document.getElementById('websiteLink');

    // Ask background script for the stored URL
    chrome.runtime.sendMessage({action: "getUrl"}, function(response) {
        // Display the stored URL in the popup
        websiteLink.textContent = response.url;
        websiteLink.href = response.url;
    });

    // Adds event listener for continue button
    continueBtn.addEventListener('click', function() {
        // Handle continue action here
        console.log("Continue button clicked");
        // For example, you can redirect to the desired URL
        window.location.href = "https://example.com";
    });

    // Adds event listener for cancel button
    cancelBtn.addEventListener('click', function() {
        // Handle cancel action here
        console.log("Cancel button clicked");
        // Go back to previous window
        window.history.back();
    });
});
