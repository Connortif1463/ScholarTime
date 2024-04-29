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
            window.location.href = response.url;
        });
    });

    // Cancel button listener
    cancelBtn.addEventListener('click', function() {
        console.log("Cancel button clicked");
        // Navigate to Google
        window.location.href = "https://www.google.com/";
    });

    // Set professional message
    messageDiv.textContent = "You can go back to your last page or hit cancel and redirect to Google.";
});
