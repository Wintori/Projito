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

let offsetNews = 0;
let offsetMagazine = 0;
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


news.querySelector('.button-next').addEventListener('click', function () {
    if (windowInnerWidth > 768){
        offsetNews = offsetNews + 330;


        if (offsetNews > (sliderLenght - 330 * 3)) {
            offsetNews = 0;
        }
        sliderLineNews.style.left = -offsetNews + 'px';
        sliderLineMagazine.style.left = -offsetNews + 'px';
    }else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
        offsetNews = offsetNews + 180;


        if (offsetNews > (sliderLenght - 180 * 3)) {
            offsetNews = 0;
        }
        sliderLineNews.style.left = -offsetNews + 'px';
    }

});

news.querySelector('.button-previous').addEventListener('click', function () {
    offsetNews = offsetNews - 330;
    if (offsetNews < 0) {
        offsetNews = sliderLenght - 330 * 3;
    }
    sliderLineNews.style.left = -offsetNews + 'px';
});



magazine.querySelector('.button-next').addEventListener('click', function () {
    if (windowInnerWidth > 768){
        offsetMagazine = offsetMagazine + 330;


        if (offsetMagazine > (sliderLenght - 330 * 3)) {
            offsetMagazine = 0;
        }
        sliderLineNews.style.left = -offsetMagazine + 'px';
        sliderLineMagazine.style.left = -offsetMagazine + 'px';
    }else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
        offsetMagazine = offsetMagazine + 180;


        if (offsetMagazine > (sliderLenght - 180 * 3)) {
            offsetMagazine = 0;
        }
        sliderLineMagazine.style.left = -offsetMagazine + 'px';
    }

});

magazine.querySelector('.button-previous').addEventListener('click', function () {
    offsetMagazine = offsetMagazine - 330;
    if (offsetMagazine < 0) {
        offsetMagazine = sliderLenght - 330 * 3;
    }
    sliderLineMagazine.style.left = -offsetMagazine + 'px';
    console.log('click');
});


setSliderSize(sliderLineNews);
setSliderSize(sliderLineMagazine);
