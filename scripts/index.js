
const swiper = new Swiper(".swiper", {
    slidesPerView: 2.5,
    centeredSlides: false,
    loopFillGroupWithBlank: true,
    scrollbar: {
        el: ".swiper-scrollbar"
      },
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



