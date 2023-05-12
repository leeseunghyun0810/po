// 제이쿼리
$(function(){
  $('.gnb_wrap > .gnb > li > a').on('mouseenter', function(){
    $('.gnb_wrap > .gnb > li > .sub_gnb').removeClass('on'); // 초기화 (가리기)
    //$(this).siblings('.sub_gnb').show(); // display block이랑 flex 동시 사용 불가
    $(this).siblings('.sub_gnb').addClass('on');
  })
  $('.gnb_wrap > .gnb').on('mouseleave', function(){
    $('.sub_gnb').removeClass('on'); // 초기화 (가리기)
  })

  $('.pauseBtn').on('click', function(){
    $('.main > video').get(0).pause();
    $('.pauseBtn').hide();
    $('.playBtn').show();
  })
  $('.playBtn').on('click', function(){
    $('.main > video').get(0).play();
    $('.playBtn').hide();
    $('.pauseBtn').show();
  })
  $('.main > div').on('mouseenter', function(){
    $(this).css('backgroundColor','#ff6600')
  })
  $('.main > div').on('mouseleave', function(){
    $(this).css('backgroundColor','rgba(0, 0, 0, 0.4')
  })

  //메뉴 모달창
  // depth창
  $("#modal .depth1 > li").on('click',function(){
    $(this).find('.depth2').stop().slideToggle('on'); 
    $(this).find('a > span').toggleClass('on');

    return false
  })
  // hover 했을 때
  $("#modal .allMenu").hover(function(){
    $(this).css({backgroundColor:'white'}); 
    $(this).children('a:first').children('span').show();
  },function(){
    $(this).css({background:'none'});
    $(this).children('a:first').children('span').hide();
  });
  //버튼 클릭
  $(".modalBtn").on('click',function(){
    $(this).find('span').stop().toggleClass("on");
    $("#modal").stop().fadeToggle();
    $('body').stop().toggleClass('on');
  })


})
