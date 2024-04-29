// toggle.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to toggle button
    var toggleBtn = document.getElementById('toggleBtn');

    // Add event listener for toggle button
    toggleBtn.addEventListener('click', function() {
        // Open settings window
        chrome.windows.create({
            url: "settings.html",
            type: "popup",
            width: 400,
            height: 300
        });
    });
});
