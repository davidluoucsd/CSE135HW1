document.addEventListener("DOMContentLoaded", function() {
    if (!getCookie('cookieConsent')) {
      var consentBanner = document.getElementById('cookieConsentBanner');
      var acceptButton = document.getElementById('cookieConsentAccept');
      var rejectButton = document.getElementById('cookieConsentReject');
      
      if(consentBanner && acceptButton && rejectButton) {
        consentBanner.style.display = 'block';
  
        acceptButton.addEventListener('click', function() {
          consentBanner.style.display = 'none';
          setCookie('cookieConsent', 'yes', 30);
        });
  
        rejectButton.addEventListener('click', function() {
          consentBanner.style.display = 'none';
          setCookie('cookieConsent', 'no', 30);
        });
      }
    }
  });
  
