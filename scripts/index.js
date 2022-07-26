//-------------------------------------------------------------------------------------
let offsetSliderMaterials = 288;
const lineMaterial = document.querySelector('.materials__cards');
const sliderMaterialDots = document.querySelectorAll('.materials__slide');

sliderMaterialDots.forEach((el, index) => {
  el.addEventListener('click', () => {
    if(sliderMaterialDots[0] === el) {
      lineMaterial.style.left = '0';
    } else {
      lineMaterial.style.left = `-${offsetSliderMaterials * index}px`;
    }
    sliderMaterialDots.forEach(el => {
      if (el.childNodes[1].classList.contains('materials__slide-button_active')) {
        el.childNodes[1].classList.remove('materials__slide-button_active');
      }
    });
    el.childNodes[1].classList.add('materials__slide-button_active');
  });
});


//----------------------------------------------------------------------------------------------------------

let offset = 0;
const sliderLine = document.querySelector('.news__list'); // слайдер News
let sliderCount = sliderLine.childElementCount; // кол-во карточек в слайдере
const windowInnerWidth = document.documentElement.clientWidth // Считываем размер экрана

if (windowInnerWidth > 768) {
     sliderLenght = sliderCount * cardSizeWindow;
} else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
     sliderLenght = sliderCount * cardSizeTablet;
} else {
     sliderLenght = sliderCount * cardSizeTablet;
}

function setSliderSize(sliderLine) {
    sliderLine.style.width = sliderLenght + 'px';
}


document.querySelector('.button-next').addEventListener('click', function () {
    if (windowInnerWidth > 768){
        offset = offset + cardSizeWindow;


        if (offset > (sliderLenght - cardSizeWindow * 3)) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
        offset = offset + cardSizeTablet;


        if (offset > (sliderLenght - cardSizeTablet * 3)) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }

});

document.querySelector('.button-previous').addEventListener('click', function () {
    offset = offset - 330;
    if (offset < 0) {
        offset = sliderLenght - 330 * 3;
    }
    sliderLine.style.left = -offset + 'px';
});
setSliderSize(sliderLine);