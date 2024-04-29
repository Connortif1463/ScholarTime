// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to cancel button and message div
    var cancelBtn = document.getElementById('cancelBtn');
    var messageDiv = document.getElementById('message');

    // Cancel button listener
    cancelBtn.addEventListener('click', function() {
        console.log("Cancel button clicked");
        // Navigate to Google
        window.location.href = "https://www.google.com/";
    });

    // Set message
    function showMessage(msg) {
        if (messageDiv) {
            messageDiv.textContent = msg;
        }
    }

    showMessage("You can hit cancel to return to Google.");
});
