document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');

});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.tarjetas',{delay: 500});
ScrollReveal().reveal('.tarjeta-banner',{delay: 500});
ScrollReveal().reveal('.tarjeta-banner2',{delay: 500});