var backToTopButton = document.querySelector('.link-nuv-up');

var timer;
function hideBackToTopButton() {
    backToTopButton.style.bottom = '-50px';
}
window.addEventListener('scroll', function() {   
    if (window.scrollY > 100) { 
        backToTopButton.style.bottom = '20px'; 
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(hideBackToTopButton, 2000); 
    } else {
        backToTopButton.style.bottom = '-50px'; 
    }
});

backToTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

