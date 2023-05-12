$(function(){
  
  // 메인 비쥬얼 스와이프
  var swiper = new Swiper(".mySwiper.first-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //collection 스와이프
  var swiper = new Swiper(".mySwiper.second-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      280: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  
  // 모바일일 때 journal 스와이프 호출
  let ww = $(window).width();
  let mySwiper = undefined;

  function initSwiper(){
    if(ww < 768 && mySwiper == undefined){
      mySwiper = new Swiper(".mySwiper.third-swiper",{
        slidePerView:1,
        spaceBetween:20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });      
    }else if(ww >= 768 && mySwiper != undefined){
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }  
  initSwiper();
});


  