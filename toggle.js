// toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to toggle button
    var toggleBtn = document.getElementById('toggleBtn');

    // Update toggle button text based on initial state
    chrome.runtime.sendMessage({ action: "getEnabledStatus" }, function(response) {
        if (response.enabled) {
            toggleBtn.textContent = "Disable App";
        } else {
            toggleBtn.textContent = "Enable App";
        }
    });

    // Add event listener for toggle button
    toggleBtn.addEventListener('click', function() {
        // Send message to background script to toggle functionality
        chrome.runtime.sendMessage({ action: "toggleFunctionality" }, function(response) {
            if (response.enabled) {
                toggleBtn.textContent = "Disable App";
            } else {
                toggleBtn.textContent = "Enable App";
            }
        });
    });
});
