// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // making references to buttons
    var continueBtn = document.getElementById('continueBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var websiteLink = document.getElementById('websiteLink');

    // ping background.js for the stored URL in case user continues
    chrome.runtime.sendMessage({action: "getUrl"}, function(response) {
        // setting reference for stored url
        websiteLink.textContent = response.url;
        websiteLink.href = response.url;
    });

    // Continue button listener
    continueBtn.addEventListener('click', function() {
        console.log("Continue button clicked");
        // redirect to user-intended website
        window.location.href = websiteLink.href;
    });

    // Cancel button listener
    cancelBtn.addEventListener('click', function() {
        console.log("Cancel button clicked");
        // go back to previous window
        window.history.back();
    });
});
