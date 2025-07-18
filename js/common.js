$(function(){
    const projectData = [
        {
            "title": "MAVEN - Responsive",
            "thumbImg": "./images/thumbs/maven.png",
            "describe": {
                "describeImg":"./images/describe/maven.jpg",
                "pageURL":"https://mavenbook.co.kr/"
            }
        },
        {
            "title": "강운공업 - Responsive",
            "thumbImg": "./images/thumbs/kangwoon.png",
            "describe": {
                "describeImg":"./images/describe/kangwoon.jpg",
                "pageURL":"http://www.kangwoon.co.kr/"
            }
        },
        {
            "title": "Vivienne - Mobile",
            "thumbImg": "./images/thumbs/vivienne.png",
            "describe": {
                "describeImg":"./images/describe/vivienne.webp",
                "pageURL":"./coding/VIVIENNE/index.html"
            }
        },
        {
            "title": "IWC - Responsive",
            "thumbImg": "./images/thumbs/iwc_mobile.png",
            "describe": {
                "describeImg":"./images/describe/iwc_mobile.webp",
                "pageURL":"./coding/IWC/index.html"
            }
        },
        {
            "title": "Webtrends - Responsive",
            "thumbImg": "./images/thumbs/webtrend.png",
            "describe": {
                "describeImg":"./images/describe/webtrend.webp",
                "pageURL":"./coding/Webtrend/index.html"
            }
        },
        {
            "title": "Twosome Place - PC",
            "thumbImg": "./images/thumbs/twosome.png",
            "describe": {
                "describeImg":"./images/describe/twosome.webp",
                "pageURL":"./coding/Twosomeplace/index.html"
            }
        },
        {
            "title": "Everland - PC",
            "thumbImg": "./images/thumbs/everland.png",
            "describe": {
                "describeImg":"./images/describe/everland.webp",
                "pageURL":"./coding/Everland/index.html"
            }
        },
        {
            "title": "SK Hynix Renewal - PC",
            "thumbImg": "./images/thumbs/skhynix2.png",
            "describe": {
                "describeImg":"./images/describe/skhynix-re.webp",
                "pageURL":"./coding/SKhynix_new/index.html"
            }
        },
        {
            "title": "Railbike - PC",
            "thumbImg": "./images/thumbs/railbike.png",
            "describe": {
                "describeImg":"./images/describe/railbike.webp",
                "pageURL":"./coding/Railbike/index.html"
            }
        },
        {
            "title": "CGV - PC",
            "thumbImg": "./images/thumbs/cgv.png",
            "describe": {
                "describeImg":"./images/describe/cgv.webp",
                "pageURL":"./coding/CGV/index.html"
            }
        },
        {
            "title": "SK Hynix - PC",
            "thumbImg": "./images/thumbs/skhynix.png",
            "describe": {
                "describeImg":"./images/describe/skhynix.webp",
                "pageURL":"./coding/SKhynix/index.html"
            }
        },
        {
            "title": "SK Chemicals - PC",
            "thumbImg": "./images/thumbs/skchemicals.png",
            "describe": {
                "describeImg":"./images/describe/chemicals.webp",
                "pageURL":"./coding/SKchemicals/index.html"
            }
        },
        {
            "title": "Moon - Photoshop",
            "thumbImg": "./images/thumbs/moon.png",
            "describe": {
                "describeImg":"./images/describe/moon.webp",
                "pageURL":"./images/picture/moon.html"
            }
        },
        {
            "title": "Reindeer - Photoshop",
            "thumbImg": "./images/thumbs/reindeer.png",
            "describe": {
                "describeImg":"./images/describe/reindeer.webp",
                "pageURL":"./images/picture/reindeer.html"
            }
        },
        {
            "title": "Promotion - Photoshop",
            "thumbImg": "./images/thumbs/promotion.png",
            "describe": {
                "describeImg":"./images/describe/promotion.webp",
                "pageURL":"./images/picture/promotion.html"
            }
        },
        {
            "title": "Panda - Illustrator",
            "thumbImg": "./images/thumbs/panda.png",
            "describe": {
                "describeImg":"./images/describe/panda.webp",
                "pageURL":"./images/picture/panda.html"
            }
        },
        {
            "title": "Heart - Illustrator",
            "thumbImg": "./images/thumbs/heart.png",
            "describe": {
                "describeImg":"./images/describe/heart.webp",
                "pageURL":"./images/picture/heart.html"
            }
        },
    ];

    const projectListNode = $(`<ul class="project_list"></ul>`);
    const thumbListNode = $(`<ul id="thumbs" class="thumb_list clear active"></ul>`);
    const describeListWrap = $(
        `<div class="describe_wrap">
            <div class="util_btns clear">
                <span class="close_btn">
                    <i class="fa fa-times"></i>
                </span>
                <a class="open_btn" target="_blank">
                    <i class="fa fa-external-link"></i>
                </a>
            </div>
        </div>`
    );
    const describeListNode = $(`<ul id="describe" class="describe_list"></ul>`);
    const topNode = $(
        `<div class="top">
            <a href="#">
                <i class="fa fa-angle-double-up"></i>
                <p>Back to Top</p>
            </a>
        </div>`
    );
    $.each(projectData, function(idx, val){
        const listLiNode = `<li data-thumb="thumb-${idx + 1}">${val.title}</li>`;
        projectListNode.append(listLiNode);
        
        const thumbLiNode =
            `<li data-thumb="thumb-${idx + 1}">
                <img src=${val.thumbImg}>
                <h2 class="title">${val.title.split("-")[0]}</h2>
            </li>`;

        thumbListNode.append(thumbLiNode);

        const describeLiNode = 
            `<li data-describe="describe-${idx + 1}">
                <img src="${val.describe.describeImg}"/>
            </li>`;
        describeListNode.append(describeLiNode)
    });

    $('.left_panel').append(projectListNode);
    $('.right_panel').append(thumbListNode);

    describeListWrap.append(describeListNode);
    $('.right_panel').append(describeListWrap);
    $('.right_panel').append(topNode);

    $('.menu li').on('click', function(){
        $('.right_panel > *').removeClass('active');
        $('.menu li').removeClass('active');
        $('.project_list li').removeClass('active');
        $('.describe_list li').removeClass('active');
        $('.describe_wrap .util_btns').removeClass('active');

        const dataAlt = $(this).attr('data-alt');
        $('#' + dataAlt).addClass('active').stop().hide().fadeIn();
        $(this).addClass('active');
    });

    $('.project_list li, .thumb_list li').on('click', function(){
        $('.right_panel > *').removeClass('active');
        $('.menu li').removeClass('active');
        $('.project_list li').removeClass('active');
        $('.describe_list li').removeClass('active');

        $('.menu li[data-alt="thumbs"]').addClass('active');
        $('.describe_wrap .util_btns').addClass('active');

        const dataThumb = $(this).attr('data-thumb');
        const dataThumbIdx = dataThumb.replace('thumb-','');
        $('.describe_list li[data-describe="describe-' + dataThumbIdx + '"]').addClass('active');
        $('.project_list li[data-thumb="thumb-' + dataThumbIdx + '"]').addClass('active');
        $('.describe_wrap .util_btns .open_btn').attr('href', projectData[dataThumbIdx - 1].describe.pageURL);

        $(window).scrollTop(0);
    });

    $(".describe_wrap .util_btns .close_btn, .logo").on('click',function(){
        $('.project_list li').removeClass("active");
        $('.describe_list li').removeClass("active");
        $('.describe_wrap .util_btns').removeClass('active');

        $('.thumb_list').addClass("active");
    });

    $(window).scroll(function(){
        const pos = $(this).scrollTop();
        $(".util_btns").css({top:pos - 20});
    });
    
    // 모바일 사이즈
    let width = $(window).width();
    if(width > 320 && width < 768){
        const triggerNode = $(
            `<div class="trigger">
                <span></span>
                <span></span>
                <span></span>
            </div>`
        );
        $("#wrap").append(triggerNode);

        $(".top").on('click',function(){
            $(".right_panel").animate({scrollTop:'0'});
        })

        $(".left_panel").stop().hide();
        $(".trigger").on('click',function(){
            $("html").stop().toggleClass('active');
            $(this).find("span").stop().toggleClass("active");
            $(".left_panel").stop().fadeToggle();
        });
    
        $('.project_list li, .thumb_list li, .menu li, .logo').on('click', function(){
            $("html").stop().removeClass('active');
            $(".trigger span").removeClass("active");
            $(".left_panel").hide();

            $(".right_panel").scrollTop(0);
        });
    
        $(".describe_wrap .util_btns .close_btn, .logo").on('click',function(){
            $(".right_panel").scrollTop(0);
        });
    } else{
        $(".left_panel").stop().show();
    }
});