$(document).ready(function(){

  $(".trigger").on('click',function(){
    $(this).toggleClass("active");
    $("nav .gnb").show();
    $("nav .gnb").toggleClass("active");
  
  });
  
  $(".gnb li").on('click',function(){
    $(this).parent().toggleClass("active");
    $(".trigger").toggleClass("active");
  });

  const slideUl = $("#section1 ul");
  const slideLi = $("#section1 ul li");
  const slide_w = slideLi.width();
  const slide_n = slideLi.length;
  let idx = 0;
  let nidx = 0;

  function slidePlay(nidx){

    targetX = -(nidx*slide_w) //움직이는 거리(너비)

    slideUl.stop(true,true).animate({left:targetX},600); //위에서 계산한 거리만큼 움직임
    idx = nidx;
  };

  function slideAuto(){
  
    nidx++;
    if(nidx == slide_n){ 
      nidx = 0;
    }
    slidePlay(nidx);
  
  };

  auto = setInterval(slideAuto,5000);


})