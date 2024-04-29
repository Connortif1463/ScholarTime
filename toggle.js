// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to buttons
    var continueBtn = document.getElementById('continueBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var messageDiv = document.getElementById('message');

    // Continue button listener
    continueBtn.addEventListener('click', function() {
        console.log("Continue button clicked");
        // Redirect to user-intended website
        chrome.runtime.sendMessage({ action: "getUrl" }, function(response) {
            if (response && response.url) {
                window.location.href = response.url;
            } else {
                // If no URL is stored or response is undefined, show a message
                showMessage("No website to continue to.");
            }
        });
    });

    // Cancel button listener
    cancelBtn.addEventListener('click', function() {
        console.log("Cancel button clicked");
        // Navigate to Google
        window.location.href = "https://www.google.com/";
    });

    // Set professional message
    function showMessage(msg) {
        if (messageDiv) {
            messageDiv.textContent = msg;
        }
    }

    showMessage("You can hit cancel to return to Google.");
});
