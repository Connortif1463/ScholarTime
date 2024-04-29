// settings.js
document.addEventListener('DOMContentLoaded', function() {
    var settingsForm = document.getElementById('settingsForm');

    // Load settings from Chrome storage and update checkboxes
    loadSettings();

    // Listen for form submission
    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Save settings
        saveSettings();
    });

    // Function to load settings from Chrome storage and update checkboxes
    function loadSettings() {
        chrome.storage.local.get(["youtube", "facebook"], function(result) {
            var youtubeCheckbox = document.getElementById('youtubeCheckbox');
            var facebookCheckbox = document.getElementById('facebookCheckbox');
            // Update checkboxes based on loaded settings
            youtubeCheckbox.checked = result.youtube !== "whitelist";
            facebookCheckbox.checked = result.facebook !== "whitelist";
            // Add more checkboxes for other websites as needed
        });
    }

    // Function to save settings
    function saveSettings() {
        var youtubeCheckbox = document.getElementById('youtubeCheckbox');
        var facebookCheckbox = document.getElementById('facebookCheckbox');
        // Get the values of checkboxes
        var youtubeValue = youtubeCheckbox.checked ? "blacklist" : "whitelist";
        var facebookValue = facebookCheckbox.checked ? "blacklist" : "whitelist";
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
