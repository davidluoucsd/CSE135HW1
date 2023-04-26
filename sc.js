
document.addEventListener("DOMContentLoaded", () => {
    
    const sections = document.querySelectorAll("section");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    

    const handleScroll = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.style.transform = "translateY(0)";
                section.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
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