// toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to buttons
    var enableBtn = document.getElementById('enableBtn');
    var settingsBtn = document.getElementById('settingsBtn');

    // Add event listener for enable button
    enableBtn.addEventListener('click', function() {
        // Open settings window
        chrome.windows.create({
            url: "settings.html",
            type: "popup",
            width: 400,
            height: 300
        });
    });

    // Add event listener for settings button
    settingsBtn.addEventListener('click', function() {
        // Open settings window
        chrome.windows.create({
            url: "settings.html",
            type: "popup",
            width: 400,
            height: 300
        }, function(window) {
            // Pause functionality until settings window is closed
            chrome.windows.onRemoved.addListener(function(windowId) {
                if (windowId === window.id) {
                    // Resume functionality
                    console.log("Settings window closed. Resuming functionality...");
                    // Now you can enable the functionality here
                }
            });
        });
    });
});
