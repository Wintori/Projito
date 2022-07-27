const buttonClose = document.querySelector ('.popup__button_close');
const popup = document.querySelector('.popup');


function closePopup(popupElement) {    //ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
    popupElement.classList.add('popup_closed');
  }

buttonClose.addEventListener('click', function (){    //Закрытие попапа на кнопку
    closePopup(popup)
});

const extraMenu = document.querySelector('.header__extra-menu'),
      menuButtonAbout = document.querySelector('#header-menu-about'),
      mobileMenu = document.querySelector('.header__mobile-menu'),
      mobileMenuButton = document.querySelector('.header__menu-button');

mobileMenuButton.addEventListener("click", function(){
    if (mobileMenu.classList.contains('header__mobile-menu_active')) {
       mobileMenu.classList.remove('header__mobile-menu_active');
       mobileMenuButton.style = "background-image: url('../blocks/header/images/mobile-menu.svg')";
    } else {
        mobileMenu.classList.add('header__mobile-menu_active');
        mobileMenuButton.style = "background-image: url('../blocks/header/images/close.svg')";
    }
});

menuButtonAbout.onmouseover = function(e) {
    extraMenu.classList.add('header__extra-menu_active');
};

extraMenu.addEventListener("mouseleave", function(e){
    extraMenu.classList.remove('header__extra-menu_active');
});
