// toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to buttons
    var enableBtn = document.getElementById('enableBtn');
    var settingsBtn = document.getElementById('settingsBtn');

    // Add event listener for enable button
    enableBtn.addEventListener('click', function() {
        console.log("Enable button clicked");
        // Send message to background script to toggle functionality
        chrome.runtime.sendMessage({ action: "toggleFunctionality" }, function(response) {
            if (response && response.enabled) {
                enableBtn.textContent = "Disable";
            } else {
                enableBtn.textContent = "Enable";
            }
        });
    });

    // Add event listener for settings button
    settingsBtn.addEventListener('click', function() {
        console.log("Settings button clicked");
        // Open extension options page
        chrome.runtime.openOptionsPage();
    });
});

