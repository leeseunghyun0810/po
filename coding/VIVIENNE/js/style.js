$(function(){
    //header
    $(".menu_open").on('click',function(){
        $(".search_wrap").stop().hide();
        $(".menu_wrap").stop().fadeToggle();
        $(".menu_wrap .menu > ul > li").each(function(index){
            $(this).delay(index*200).css({"opacity":"0"}).animate({opacity:"1"});
        });
        $("html").toggleClass("active")
    });
    $(".close").on('click',function(){
        $(".menu_wrap").stop().fadeOut();
        $(".search_wrap").stop().fadeOut();
        $("html").css({overflowY:"auto"});
    });
    $(".search_open").on('click',function(){
        $(".menu_wrap").stop().hide();
        $(".search_wrap").stop().fadeIn("fast");
        $("html").css({overflowY:"hidden"});
    });
    
    //footer
    $(".ft_info .ft_show").on('click',function(){
        $(this).find("span").toggleClass("active");
        $(".ft_info .ft_business").stop().fadeToggle();
    })

    
    //main
    let $img = $(".changeimg ul li");
    let $text = $(".changeimg ul li .des .bg");
    let oldImg = 0;  
    let newImg = 0; 
    let oldText = 0;  
    let newText = 0;
    let count = $img.length;

    //이미지&텍스트 전환 효과
    function changeImg(newImg){ 

        if(oldImg != newImg){
            $img.eq(oldImg).removeClass("imgVisible");
            $img.eq(newImg).addClass("imgVisible"); 
        };
        oldImg = newImg;
    };
    function changeText(newText){ 

        if(oldText != newText){
            $text.eq(oldText).removeClass("textVisible");
            $text.eq(newText).addClass("textVisible"); 
        }
        oldText = newText;
    };
    //auto
    function autoImg(){

        newImg++;
        if(newImg > count-1){ 
            newImg = 0;
        }
        changeImg(newImg);
    };
    function autoText(){

        newText++;
        if(newText > count-1){ 
            newText = 0;
        }
        changeText(newText)
    }

    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000); 

    
    //faq
    $("#faq .question").on('click',function(){
        $("#faq .answer").stop().slideUp();
        $(this).siblings(".answer").stop().slideToggle();
        $(this).parent("li").siblings().find(".question > span").removeClass("active");
        $(this).find("span").stop().toggleClass("active");
    });


    //diffuser
    $("#diffuser .list_title").on('click',function(){
        $(this).find('span').toggleClass('active');
        $(this).find('ul').stop().slideToggle();       
    });
    $("#diffuser .list_title > ul > li").on('click',function(){
        const text = $(this).attr('data-alt');
        const text2 = $(this).attr('id');

        $("#diffuser .sub_title").html(text);
        $("#diffuser .list_title p").html(text);
        $("#diffuser .diffuser_items > li").hide();
        $(`.${text2}`).show();
    }); 
    $("#diffuser .list_style .one").on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#diffuser .diffuser_items").css({"grid-template-columns":"repeat(1, 1fr)"});
        $("#diffuser .main_name").css({fontSize:'13px'});
        $("#diffuser .sub_name").css({fontSize:'17px'});
        $("#diffuser .price").css({fontSize:'17px'});
    });
    $("#diffuser .list_style .grid").on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#diffuser .diffuser_items").css({"grid-template-columns":"repeat(2, 1fr)"});
        $("#diffuser .main_name").css({fontSize:'11px'});
        $("#diffuser .sub_name").css({fontSize:'14px'});
        $("#diffuser .price").css({fontSize:'14px'});
    });

    //구매 페이지 갤러리
    $("#buy .thumb img").on('click',function(){
        const att = $(this).attr('src');
        $("#buy #largeImg img").attr('src',att);
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });
    $("#buy form select").on('click',function(){
        $("#buy form span").toggleClass('active');
    });

    //장바구니 페이지
    const chkList = $("input[name=item]");
    const length = chkList.length;

    $(".selectChk").each(function(){
        let inputVal = $(this).find("input[name=item]").val();
        let valNum = parseInt(inputVal);
        let persent = parseInt(inputVal) + parseInt(inputVal * 5/100);

        $(this).find(".info_price span:first-child").text(valNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//할인 후 금액
        $(this).find(".info_price span:last-child").text(persent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//할인 전 금액
        $(this).find(".price").text(valNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//상품금액
    })

    $(".all_selectChk").on("click",function(){
        if($(this).is(":checked")){
            chkList.prop("checked",true);
            
            const allLength = $("#shopping input[name=item]:checked").length;
            $("#shopping .total").text(allLength); 
        } else {
            chkList.prop("checked",false);
            $("#shopping .total").text(0); 
        };

        //체크박스 금액 더하기
        let sum = 0;
        let per = 0;
        let per2 = 0;
        $('#shopping input[name=item]').each(function(){
            const val = $(this).val();//체크된 체크박스 값
            const num = parseInt(val);//그 값을 정수로 변환
            const noDc = parseInt(val) + parseInt(val * 5/100);//할인 전 금액
            const dc = parseInt(val * 5/100);//할인율

            if($(this).is(':checked') == true){//체크박스 체크됐을 때
                per = per + noDc;
                per2 = per2 + dc;
                sum = sum + num;
                
                $("#shopping .total_price p:nth-child(1) span").text(per.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//선택상품금액
                $("#shopping .total_price p:nth-child(3) span").text(per2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//할인예상금액
                $("#shopping .total_price p:nth-child(4) span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//주문금액
            } else {
                $("#shopping .total_price p:nth-child(1) span").text(per.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                $("#shopping .total_price p:nth-child(3) span").text(per2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                $("#shopping .total_price p:nth-child(4) span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
            };
        }); 
    });
    $(".selectChk input[name=item]").on('click',function(){
        const allLength = $("input[name=item]:checked").length;
        const length = $("input[name=item]").length;

        $("#shopping .total").text(allLength);

        //개별 선택 시 전체 선택 해제
        if(allLength != length){
            $("#shopping .all_selectChk").prop('checked',false);
        } else {
            $("#shopping .all_selectChk").prop('checked',true);
        };

        //체크박스 금액 더하기
        let sum = 0;
        let per = 0;
        let per2 = 0;
        $('#shopping input[name=item]').each(function(){
            const val = $(this).val();//체크된 체크박스 값
            const num = parseInt(val);//그 값을 정수로 변환
            const noDc = parseInt(val) + parseInt(val * 5/100);//할인 전 금액
            const dc = parseInt(val * 5/100);//할인율

            if($(this).is(':checked') == true){//체크박스 체크됐을 때
                per = per + noDc;
                per2 = per2 + dc;
                sum = sum + num;

                $("#shopping .total_price p:nth-child(1) span").text(per.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//선택상품금액
                $("#shopping .total_price p:nth-child(3) span").text(per2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//할인예상금액
                $("#shopping .total_price p:nth-child(4) span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//주문금액
            } else {
                $("#shopping .total_price p:nth-child(1) span").text(per.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                $("#shopping .total_price p:nth-child(3) span").text(per2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                $("#shopping .total_price p:nth-child(4) span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
            };
        }); 
    });
    $("#shopping .order_btn .del").on('click',function(){
        //삭제 버튼
        $(this).parents(".selectChk").detach();

        let sum = 0;
        let per = 0;
        let per2 = 0;
        $('#shopping input[name=item]').each(function(){
            const val = $(this).val();//체크된 체크박스 값
            const num = parseInt(val);//그 값을 정수로 변환
            const noDc = parseInt(val) + parseInt(val * 5/100);//할인 전 금액
            const dc = parseInt(val * 5/100);//할인율


            if($(this).is(':checked') == true){
                per = per + noDc;
                per2 = per2 + dc;
                sum = sum + num;

                $("#shopping .total_price p:nth-child(1) span").text(per.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//선택상품금액
                $("#shopping .total_price p:nth-child(3) span").text(per2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//할인예상금액
                $("#shopping .total_price p:nth-child(4) span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");//주문금액
            } else if($(this).is(":checked") == false){
                $("#shopping .total_price p:nth-child(1) span").text(per.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                $("#shopping .total_price p:nth-child(3) span").text(per2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                $("#shopping .total_price p:nth-child(4) span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
            }
        });
        const allLength = $("#shopping input[name=item]:checked").length;
        const length = $("#shopping input[name=item]").length;

        $("#shopping .total").text(allLength);

        if(length == 0){
            $("#shopping .total_price p span").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
            $("#shopping .all_select .all_selectChk").prop("checked", false);
            $("#shopping .all_select .all_selectChk").attr("disabled", true);
        };
    });
})
