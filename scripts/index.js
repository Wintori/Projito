const swiper = new Swiper(".swiper", {
    slidesPerView: 2.27,
    centeredSlides: false,
    loopFillGroupWithBlank: true,
    scrollbar: {
        el: ".swiper-scrollbar"
    },
});


//----------------------------------------------------------------------------------------------------------

let offsetNews = 0;
let offsetMagazine = 0;
const news = document.querySelector('.news');
const sliderLineNews = news.querySelector('.news-list'); // слайдер News
const magazine = document.querySelector('.magazine');
const sliderLineMagazine = magazine.querySelector('.news-list');

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
    if (windowInnerWidth > 768) {
        offsetNews = offsetNews + 330;


        if (offsetNews > (sliderLenght - 330 * 3)) {
            offsetNews = 0;
        }
        sliderLineNews.style.left = -offsetNews + 'px';
        sliderLineMagazine.style.left = -offsetNews + 'px';
    } else if (windowInnerWidth <= 768 && windowInnerWidth > 360) {
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


function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2.7,
            centeredSlides: false,

            loopFillGroupWithBlank: true,
            scrollbar: {
                el: ".swiper-scrollbar"

            },
        });
    }
}

const x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Вызов функции прослушивателя во время выполнения