let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const header = document.querySelector('header');

window.addEventListener ("scroll", function() {
    header.classList.toggle ('sticky', window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

// tuve que sacar estos ScrollReveal porque mi navbar no quedaba fijo
// sr.reveal('.logo',{delay:250, origin: 'left'});
// sr.reveal('.navbar',{delay:350, origin: 'top'});
// sr.reveal('.menu-btn',{delay:480, origin: 'right'});

sr.reveal('.home-text span',{delay:520, origin: 'top'});
sr.reveal('.home-text h1',{delay:600, origin: 'left'});
sr.reveal('.home-text p',{delay:720, origin: 'right'});
sr.reveal('.main-btn',{delay:800, origin: 'left'});

sr.reveal('.share',{delay:910, origin: 'botton'});

sr.reveal('.home-img',{delay:990, origin: 'right'});