

// overlay menu
const barsIkon = document.querySelector('.fa-bars');
const crossIkon = document.querySelector('.fa-circle-xmark');
const overlayMenu = document.querySelector('.overlay-menu');

barsIkon.addEventListener('click', openOverlayMenu);
crossIkon.addEventListener('click', closeOverlayMenu);

function openOverlayMenu(){
  overlayMenu.style.width='100%'
}

function closeOverlayMenu(){
  overlayMenu.style.width='0'
}


// Swiper Js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      710: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});


 // Scroll Reveal

 ScrollReveal({ reset: true });

window.sr=ScrollReveal();
sr.reveal('.anime-left',{
  origin:'left',
  duration:1000,
  distance:'10rem',
  delay:300
})

sr.reveal('.anime-right',{
  origin:'right',
  duration:1000,
  distance:'10rem',
  delay:300
})

sr.reveal('.anime-top',{
  origin:'top',
  duration:1000,
  distance:'10rem',
  delay:300
})
sr.reveal('.anime-bottom',{
  origin:'bottom',
  duration:1000,
  distance:'10rem',
  delay:300
})


 
 ScrollReveal().reveal('.anime',{delay:200});
 ScrollReveal().reveal('.anime2',{delay:400});
 ScrollReveal().reveal('.anime3',{delay:600});
 ScrollReveal().reveal('.anime4',{delay:800});





