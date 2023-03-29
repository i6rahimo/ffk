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
  
 let center = [55.66118241451574,37.86575145700828];

 function init() {
     let map = new ymaps.Map('contacts__map', {
         center: center,
         zoom: 17
     });
 
     map.controls.remove('geolocationControl'); // удаляем геолокацию
   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('typeSelector'); // удаляем тип
   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
   map.controls.remove('rulerControl'); // удаляем контрол правил
   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
 }
 
 ymaps.ready(init);




 function calculateForm() {
    const btn = document.querySelector('.calculate-btn');
    const contentFirst = document.querySelector('.content__first');
    const contentSecond = document.querySelector('.content__second');
    const contentThird = document.querySelector('.content__third');
    const contentFourt = document.querySelector('.content__four');
    const contentFive = document.querySelector('.content__five');
    const sumProgress = document.querySelector('.form__progress-text');
    const sum = 1;
    btn.addEventListener('click', (e)=> {
        // sumProgress.innerHTML = `Вопрос ${sum} из 4`;
        e.preventDefault();

        sumProgress.innerHTML = `Вопрос ${sum} из 4`;
        sum++;

        // console.log(sumProgress);
        if(contentFirst.classList.contains('visible')) {
            contentFirst.classList.remove('visible');
            contentSecond.classList.add('visible');
        } else if(contentSecond.classList.contains('visible')) {
            contentSecond.classList.remove('visible');
            contentThird.classList.add('visible');
        }
        console.log('erro');
        
 })
}

 calculateForm()