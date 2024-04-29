// toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to buttons
    var toggleBtn = document.getElementById('toggleBtn');

    // Add event listener for toggle button
    toggleBtn.addEventListener('click', function() {
        // Send message to background script to toggle functionality
        chrome.runtime.sendMessage({ action: "toggleFunctionality" });
    });
});
