let offset = 0;
const sliderLine = document.querySelector('.news__list'); // слайдер News
let sliderCount = sliderLine.childElementCount; // кол-во карточек в слайдере
const windowInnerWidth = document.documentElement.clientWidth // Считываем размер экрана


const cardSizeWindow = 330;
const cardSizeTablet = 200;
let sliderLenght = 0;

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