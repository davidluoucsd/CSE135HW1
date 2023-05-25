window.addEventListener("DOMContentLoaded", function() {
  
  var acceptCookies = localStorage.getItem("acceptCookies");
  var cookieConsentBanner = document.getElementById("cookieConsentBanner");

  if (!acceptCookies) {

    cookieConsentBanner.style.display = "block";
  }

  var cookieConsentButton = document.getElementById("cookieConsentButton");

  cookieConsentButton.addEventListener("click", function() {

    cookieConsentBanner.style.display = "none";
    localStorage.setItem("acceptCookies", true);
  });
});
