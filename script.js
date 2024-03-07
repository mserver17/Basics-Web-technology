const backToTopButton = document.querySelector('.link-nuv-up');

let timer;
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

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('.person-phone');
    const emailInput = document.querySelector('.person-email');

    phoneInput.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        const onlyDigits = inputValue.replace(/\D/g, '');
        event.target.value = onlyDigits;
    });

    emailInput.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        if (!isValidEmail(inputValue)) {
            event.target.setCustomValidity('Invalid email address');
        } else {
            event.target.setCustomValidity('');
        }
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
