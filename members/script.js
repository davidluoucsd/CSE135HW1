document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('email');
    emailLink.addEventListener('click', function() {
        alert('You clicked the email link!');
    });
});
LogRocket.init('e8zsxt/cse135');
// This is an example script - don't forget to change it!
LogRocket.identify('75', {
    name: 'Junzhe Luo',
    email: 'j5luo@ucsd.edu',
  
    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
  });

  // This is an example script - don't forget to change it!
LogRocket.identify('77', {
    name: 'Lejia Zhang',
    email: 'lez002@ucsd.edu',
  
    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
  });
