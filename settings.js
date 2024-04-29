// settings.js
document.addEventListener('DOMContentLoaded', function() {
    var settingsForm = document.getElementById('settingsForm');

    // Listen for form submission
    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Save settings
        saveSettings();
    });

    // Function to save settings
    function saveSettings() {
        var youtubeCheckbox = document.getElementById('youtubeCheckbox');
        var youtubeSelect = document.getElementById('youtubeSelect');
        var facebookCheckbox = document.getElementById('facebookCheckbox');
        var facebookSelect = document.getElementById('facebookSelect');
        // Get the values of checkboxes and selects
        var youtubeValue = youtubeCheckbox.checked ? youtubeSelect.value : "";
        var facebookValue = facebookCheckbox.checked ? facebookSelect.value : "";
        // Save settings in Chrome storage
        chrome.storage.local.set({
            "youtube": youtubeValue,
            "facebook": facebookValue
            // Add more settings for other websites as needed
        }, function() {
            // Close the window after saving
            window.close();
        });
    }
});
