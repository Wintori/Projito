const buttonClose = document.querySelector ('.popup__button_close');
const popup = document.querySelector('.popup');


function closePopup(popupElement) {    //ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
    popupElement.classList.add('popup_closed');
  }

buttonClose.addEventListener('click', function (){    //Закрытие попапа на кнопку
    closePopup(popup)
});
