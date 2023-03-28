function showPopup() {
    const btn = document.querySelector('.header__popup-call');
    const popupClose = document.querySelector('.header__popup-close');
    const popup = document.querySelector('.header__popup-wrapper');
 
    btn.addEventListener('click', ()=> {
        popup.classList.add('show')
    })
    popupClose.addEventListener('click', ()=> {
        popup.classList.remove('show')
    })
}
showPopup();



function showMenu() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__wrapper');

    burger.addEventListener('click', ()=> {
        menu.classList.toggle('active');
        burger.classList.toggle('active')
    })
}
showMenu()

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // centeredSlides: true,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            centeredSlides: false,
        },
        480: {            
            slidesPerView: 3,
            centeredSlides: true,
        },
  
      }
 });
  
  