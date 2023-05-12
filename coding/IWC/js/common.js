$(document).ready(function(){
  //콜렉션 리스트 클릭
  $(".coll_list .inner ul li").click(function(){
    const dataAlt = $(this).attr("data-alt");

    $(".coll_list .inner ul li").removeClass("active");
    $('#' + dataAlt).addClass("active");
    $('#' + dataAlt).siblings().removeClass("active");
    $(this).addClass("active");
  })

  let www = $(window).width();
  if(www < 768){
    $("footer .inner > ul .ft_title").on('click',function(){
      $("footer .inner > ul > .ft_title .ft_depth").hide();
      $(this).find(".ft_depth").stop().fadeIn();
    });
  } else{
    $("footer .inner > ul").off('click');
  };
  $(window).on('resize',function(){
    www = $(window).width();
    if(www < 768){
      location.reload();
    }
  });


  if(www < 1023){
    $(".trigger").click(function(){
      $("body").toggleClass("active");
      $(this).toggleClass("active");
      $("nav").stop().fadeToggle();
      $("nav > ul > li").stop().show();
      $("nav > ul > li > .depth").stop().hide();
      $("nav > ul > li > a > .material-symbols-outlined").removeClass("active");
      $("nav > ul > li > a > p").removeClass("active");
      $(this).siblings().fadeToggle();
    });
    $("nav > ul > li > a > p").click(function(){
      $("nav > ul > li").hide();
      $("nav > ul > li > .depth").stop().show();
      $(this).parents("li").fadeIn();
      $(this).addClass("active");
      $(this).siblings().addClass("active");
    });
    $("nav > ul > li > a > .material-symbols-outlined").click(function(){
      $("nav > ul > li").stop().hide().fadeIn();
      $(this).removeClass("active");
      $(this).siblings().removeClass("active");
      $("nav > ul > li > .depth").stop().hide();
    })
  }

  if(www > 1023){
    $("nav > ul > li > a").on('mouseenter',function(){
      let h = $(this).siblings(".depth");
      let hh = $(h).height();
      const bg = $(".depth_bg");
      
      $(bg).height(hh);
      $(".depth_bg").stop(true,true).slideDown();
      $(".depth").stop(true,true).hide();
      $(this).siblings(".depth").stop(true,true).show("slow");
    });
  
    $("header").on('mouseleave',function(){
      $(".depth").stop(true,true).slideUp();
      $(".depth_bg").stop(true,true).slideUp();
    });
  
    let navOffset = $("nav").offset();
    $(window).scroll(function(){
      if($(document).scrollTop() > navOffset.top){
        $("nav").addClass("active");
        $(".depth_bg").addClass("active");
      }else{
        $("nav").removeClass("active");
        $(".depth_bg").removeClass("active");
      }
    })
  }
  

})