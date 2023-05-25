window.addEventListener("DOMContentLoaded", function() {
    // Check if the "acceptCookies" item is in local storage
    var acceptCookies = localStorage.getItem("acceptCookies");
    var cookieConsentBanner = document.getElementById("cookieConsentBanner");

    if (acceptCookies === null) {
        // If there is no "acceptCookies" item, show the banner
        cookieConsentBanner.style.display = "block";
    }

    var cookieConsentAccept = document.getElementById("cookieConsentAccept");
    var cookieConsentReject = document.getElementById("cookieConsentReject");

    cookieConsentAccept.addEventListener("click", function() {
        // When the user clicks "Accept", hide the banner and store their choice in local storage
        cookieConsentBanner.style.display = "none";
        localStorage.setItem("acceptCookies", "yes");
    });

    cookieConsentReject.addEventListener("click", function() {
        // When the user clicks "Reject", hide the banner and store their choice in local storage
        cookieConsentBanner.style.display = "none";
        localStorage.setItem("acceptCookies", "no");
    });
});
