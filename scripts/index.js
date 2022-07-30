const swiper = new Swiper(".swiper", {

    slidesPerView: 2.27,
    centeredSlides: false,
    loopFillGroupWithBlank: false,
    scrollbar: {
        el: ".swiper-scrollbar"
    },
});





function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1.8,
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