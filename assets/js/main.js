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