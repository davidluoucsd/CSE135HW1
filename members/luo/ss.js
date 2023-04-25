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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const typeWriter = (element, text, i = 0) => {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 100);
    }
};

const headerTitle = document.querySelector('.header-content h1');
const headerTitleText = headerTitle.textContent;
headerTitle.textContent = "";
typeWriter(headerTitle, headerTitleText);

const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = 'Back to Top';
backToTopBtn.style.display = 'none';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 20px';
backToTopBtn.style.backgroundColor = '#333';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.border = 'none';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.zIndex = '1000';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
