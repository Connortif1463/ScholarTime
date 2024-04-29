// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to buttons
    var continueBtn = document.getElementById('continueBtn');
    var cancelBtn = document.getElementById('cancelBtn');

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
        // Go back to previous page not on the blacklist
        goBackToNonBlacklistedPage();
    });

    // Function to go back to previous page not on the blacklist
    function goBackToNonBlacklistedPage() {
        var previousUrl = "";
        // Loop through the browser history
        while (window.history.length > 0) {
            previousUrl = window.history.previous;
            // Check if the previous URL is not on the blacklist
            if (!isForbiddenWebsite(previousUrl)) {
                // If not, go back to that page
                window.location.href = previousUrl;
                return;
            }
            // If it's on the blacklist, go back further
            window.history.back();
        }
        // If there's no more history, navigate to Google
        window.location.href = "https://www.google.com/";
    }

    // Function to check if a URL is on the blacklist
    function isForbiddenWebsite(url) {
        const forbiddenWebsites = [
            "https://www.youtube.com/",
            "https://www.facebook.com/",
            "https://www.whatsapp.com/",
            "https://www.skype.com/",
            "https://www.netflix.com/",
            "https://www.x.com/",
            "https://www.amazon.com/",
            "https://instagram.com/",
            "https://snapchat.com/"
        ];
        return forbiddenWebsites.some(forbiddenUrl => url.startsWith(forbiddenUrl));
    }
});
