// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Making references to buttons
    var continueBtn = document.getElementById('continueBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var websiteLink = document.getElementById('websiteLink');
    var toggleBtn = document.getElementById('toggleBtn'); // Reference to toggle button

    // Add event listener for toggle button
    toggleBtn.addEventListener('click', function() {
        // Send message to background script to toggle functionality
        chrome.runtime.sendMessage({action: "toggleFunctionality"}, function(response) {
            // Update toggle button text based on response
            if (response.enabled) {
                toggleBtn.textContent = "Disable";
            } else {
                toggleBtn.textContent = "Enable";
            }
        });
    });

    // Ping background.js for the stored URL in case user continues
    chrome.runtime.sendMessage({action: "getUrl"}, function(response) {
        // Set reference for stored URL
        websiteLink.textContent = response.url;
        websiteLink.href = response.url;
    });

    // Continue button listener
    continueBtn.addEventListener('click', function() {
        console.log("Continue button clicked");
        // Redirect to user-intended website
        window.location.href = websiteLink.href;
    });

    // Cancel button listener
    cancelBtn.addEventListener('click', function() {
        console.log("Cancel button clicked");
        // Go back to previous window
        window.history.back();
    });
});
