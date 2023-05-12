$(document).ready(function(){

  // 메인 스와이프___________
  var swiper = new Swiper(".mySwiper", {
    effect: 'fade',
    loop:true,
    autoplay: {
      delay: 4300,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      renderBullet: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
      '<span class="barSpace"></span>' +
      '<span class="' + totalClass + '"></span>';
      },
    },
    on:{
      slideChange: function(){
        let num = $("#main_visual .number > span:first-child");
        num.html(`${swiper.realIndex + 1}`); 
        swiper.autoplay.start();
        $("#main_visual .play").hide();
        $("#main_visual .pause").show();
        $(".swiper-pagination-bullet-active").removeClass("on");
      },
    },
  });
  $("#main_visual .pause").on('click',function(){
    swiper.autoplay.stop();
    $(".swiper-pagination-bullet-active").addClass("on");
    $(this).hide();
    $("#main_visual .play").show();
    return false;
  })
  $(".play").on('click',function(){
    $(".swiper-pagination-bullet-active").removeClass("on");
    swiper.autoplay.start();
    $(this).hide();
    $("#main_visual .pause").show();
    return false;
  })

  // 즐길거리 hover
  $(".funny > .funny_bg > div").hover(function(){
    $(this).stop(true,true).css({"backgroundSize":"1440px"}).animate({backgroundSize:"1500px"},200);
  }, function(){
    $(this).stop().animate({backgroundSize:"1440px"},200);
  })

  //헤더 드롭다운
  $(".gnb").hover(function(){
    $(this).find(".depth1").stop().slideDown("fast");
    $(".depth1_bg").stop().slideDown("fast");
  },function(){
    $(this).find(".depth1").stop().slideUp("fast");
    $(".depth1_bg").stop().slideUp("fast");
  })


  //검색창
  $("header  .util  .search").click(function(){
    $(".search_box").slideDown();
  })
  $(".closeBtn").click(function(){
    $(".search_box").slideUp();
  })

  //패밀리 사이트
  $(".select > ul > li").on('click',function(){ 
    $(this).toggleClass("on");
    $(this).children(".select_dep").slideToggle();
  })

  //퀵메뉴
  $(".click").click(function(){
    $(this).toggleClass("on");
    $(this).siblings().slideToggle();
  })
  $(window).scroll(function(){
    let sbtm = $(this).scrollTop();
    if(sbtm >= 3050){
      $(".quickMenu").css(({bottom:"190px",transition:".3s"}));
    } else{
      $(".quickMenu").css(({bottom:"50px"}));
    }
  })

  //breadcrumb
  $("#breadcrumb .location").click(function(){
    $("#breadcrumb .location").find("ol").stop().slideUp("fast");
    $(this).find("ol").stop().slideToggle("fast");
    $(this).siblings().children("span").removeClass("on");
    $(this).find(".material-symbols-outlined").toggleClass("on");
  })


  //공지사항 검색창
  $(".select_box").click(function(){
    $(this).siblings(".select_list").stop().toggle();
    $(this).children().find("span").toggleClass("on");
  })

  //오시는 길 슬라이드 영역
  let parkingNum = 0;

  $("#information3 .parking_btn .rbtn").click(function(){
    if(parkingNum < 2){
      $(".slide_area ul").stop(true,true).animate({marginLeft:"-=305px"},400);
      parkingNum++;

      if(parkingNum == 0){
        $(".parking_btn .lbtn span").css({"color":"#888"});
      } else{
        $(".parking_btn .lbtn span").css({"color":"#3954a5"});
      }
      if(parkingNum == 2){
        $(".parking_btn .rbtn span").css({"color":"#888"});
      } else{
        $(".parking_btn .rbtn span").css({"color":"#3954a5"});
      }
    }
  })
  $("#information3 .parking_btn .lbtn").click(function(){
    if(parkingNum > 0){
      $(".slide_area ul").stop(true,true).animate({marginLeft:"+=305px"},400);
      parkingNum--;

      if(parkingNum == 0){
        $(".parking_btn .lbtn span").css({"color":"#888"});
      } else{
        $(".parking_btn .lbtn span").css({"color":"#3954a5"});
      }
      if(parkingNum == 2){
        $(".parking_btn .rbtn span").css({"color":"#888"});
      } else{
        $(".parking_btn .rbtn span").css({"color":"#3954a5"});
      }
    }
  })

  //어트랙션 호버 이미지
  $("#tabs .item li").hover(function(){
    $(this).find(".text span img").attr({"src":"./images/label_on.png"}).stop().hide().fadeIn();
  },function(){
    $(this).find(".text span img").attr({"src":"./images/label.png"});
  })


  //스피드웨이 탭메뉴
  $("#membership3 .btn li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active"); 
  });
  //스피드웨이 게이지
  $(window).scroll(function(){
    let scrollpro = $(this).scrollTop();;
    if(scrollpro > 500){
      $("#tab1 .progress .bar").addClass("on");
    } else{
      $("#tab1 .progress .bar").removeClass("on");
    }
  })

  //제휴사 혜택
  $("#membership2 ul li").hover(function(){
    $(this).find(".img_box").css({"height":"150px",});
  },function(){
    $(this).find(".img_box").css({"height":"200px"});
  })



  //스페셜프로모션 더보기 
  $(".tab-contents > div > ul > li").hide();//전체 li 가리기
  $(".tab-contents > div > ul > li").slice(0,8).css({"display":"block"});//0~8번째 li만 보여주기
  
  $(".moreBtn").click(function(){
    $(".tab-contents > div.active > ul > li:hidden").slice(0,4).fadeIn(200).css('display','block');
    if($(".tab-contents > div.active > ul > li:hidden").length == 0){
      $(".moreBtn").hide();
    }
  })
  
  //스페셜프로모션 탭메뉴
  $(".tab li").click(function(){
    $(".tab li").removeClass("active");//탭메뉴 활성화 취소
    $(this).addClass("active");//탭메뉴 활성화
    $(".moreBtn").show(); //버튼 보이기
    
    let result = $(this).attr("data-alt");
    $(".tab-contents > div").removeClass("active");//div 가리기
    $("#" + result).addClass("active");//div 보이기
    $(".tab-contents > div > ul > li").hide();//전체 li 가리기
    $("#" + result).addClass("active").find("li").slice(0,8).css({"display":"block"});//활성화된 div 안의 li 0~8번까지 보여주기
  })

  //5번째 li클릭 시 버튼 가리기
  $(".tab li:nth-child(5)").click(function(){
    $(".moreBtn").css({"display":"none"});
  });

  //체험프로그램
  $(".tab-contents .program").slice(3,6).hide();
  
  $(window).scroll(function(){
    let program = $(this).scrollTop();
    console.log(program);

    if(program > 100 && program < 300){
      $(".program").slice(3,4).stop().fadeIn("slow");
    } 
    if(program > 300 && program < 500){
      $(".program").slice(4,5).stop().fadeIn("slow");
    } 
    if(program > 500 && program < 700){
      $(".program").slice(5,6).stop().fadeIn("slow");
    } 
    if(program == 0){
      $(".tab-contents .program").slice(3,6).hide();
    }
  })

  //체험 프로그램 팝업
  $(".t_box > button").click(function(){ 
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"}); 
    $(".pop").scrollTop(0); // 클릭하면 항상 맨위
    return false;
  });

  //close버튼과 검정배경영역을 클릭할때.....
  $(".close, .pop").click(function(){
    $(".pop").hide(); 
    $("html").css({"overflow-y":"scroll"}); 
  });
})