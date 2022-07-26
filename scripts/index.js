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
const news = document.querySelector('.news');
const sliderLineNews = news.querySelector('.news__list'); // слайдер News
const magazine = document.querySelector('.magazine');
const sliderLineMagazine = magazine.querySelector('.news__list');

let sliderCountNews = sliderLineNews.childElementCount; // кол-во карточек в слайдере
let sliderCountMagazine = sliderLineMagazine.childElementCount;

const windowInnerWidth = document.documentElement.clientWidth // Считываем размер экрана

if (windowInnerWidth > 768) {
     sliderLenght = sliderCountNews * 330;
} else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
     sliderLenght = sliderCountNews * 180;
} else {
     sliderLenght = sliderCountNews * 180;
}

function setSliderSize(sliderLine) {
    sliderLine.style.width = sliderLenght + 'px';
}


document.querySelector('.button-next').addEventListener('click', function () {
    if (windowInnerWidth > 768){
        offset = offset + 330;


        if (offset > (sliderLenght - 330 * 3)) {
            offset = 0;
        }
        sliderLineNews.style.left = -offset + 'px';
        sliderLineMagazine.style.left = -offset + 'px';
    }else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
        offset = offset + 180;


        if (offset > (sliderLenght - 180 * 3)) {
            offset = 0;
        }
        sliderLineNews.style.left = -offset + 'px';
        sliderLineMagazine.style.left = -offset + 'px';
    }

});

document.querySelector('.button-previous').addEventListener('click', function () {
    offset = offset - 330;
    if (offset < 0) {
        offset = sliderLenght - 330 * 3;
    }
    sliderLineNews.style.left = -offset + 'px';
    sliderLineMagazine.style.left = -offset + 'px';
});
setSliderSize(sliderLineNews);
setSliderSize(sliderLineMagazine);
