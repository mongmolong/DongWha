$(window).on('load', function() {
    // $('#loading').fadeOut();  
    // $('#myImage').fadeIn();   
});

$(document).ready(function () {
    // -------------------------indicator-----------------------------
    let pos1 = $("#move01").offset().top;
    let pos2 = $("#move02").offset().top;
    let pos3 = $("#move03").offset().top;
    let pos4 = $("#move04").offset().top;
    let pos5 = $("#move05").offset().top;
    let pos6 = $("#move06").offset().top;


    $(window).scroll(function () {
        let scroll = $(this).scrollTop();

        $(".indicator>li>a").removeClass("in_on");

        if (scroll >= pos1 && scroll < pos2) {
            $(".indicator>li").eq(0).find("a").addClass("in_on");
        } else if (scroll >= pos2 && scroll < pos3) {
            $(".indicator>li").eq(1).find("a").addClass("in_on");
        } else if (scroll >= pos3 && scroll < pos4) {
            $(".indicator>li").eq(2).find("a").addClass("in_on");
        } else if (scroll >= pos4 && scroll < pos5) {
            $(".indicator>li").eq(3).find("a").addClass("in_on");
        } else if (scroll >= pos5 && scroll < pos6) {
            $(".indicator>li").eq(4).find("a").addClass("in_on");
        } else {
            $(".indicator>li").eq(5).find("a").addClass("in_on");
        }
    });

    $(".indicator>li>a").click(function (e) {
        e.preventDefault();
        let indicator_list = $(this).attr("href");
        let distance = $(indicator_list).offset().top;
        $("body,html").stop().animate({ "scrollTop": distance }, 500);
    });


    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        var brandOffset = $('.brand').offset().top;

        if (scrollPosition >= brandOffset) {
            $('.indicator').fadeIn();
        } else {
            $('.indicator').fadeOut();
        }
    });

    // --------------------------top_btn-----------------------------
    $(".top_btn").hide();

    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        if (scroll > 937) {
            $(".top_btn").fadeIn();
            $(".bottom").addClass("current");

        } else {
            $(".top_btn").fadeOut();
            $(".bottom").removeClass("current");

        }
    });

    $(".top_btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });


    // ------------모달 스크롤-----------------------
    $("#gnb_modal").on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    $("#section").off('scroll touchmove mousewheel');

    // --------------------------모달----------------------

    $(".modal01>li").click(function () {
        let mo_index = 0;
        mo_index = $(this).index();

        $(".modal01>li").removeClass("modal01_on");
        $(".modal01>li").eq(mo_index).addClass("modal01_on");

        $(".modal02>ul").removeClass("modal02_on");
        $(".modal02>ul").eq(mo_index).addClass("modal02_on");
    });


    // ------------------------- 헤더 효과------------------------

    $(".gnb_list>li").mouseenter(function () {
        let gnb_list_conts = $(this).index();

        $(".bottom").stop().css({ "height": "400px" });
        $(".gnb_list>li").removeClass("gnb_list_on");

        $(".gnb_sub").removeClass("gnb_sub_on");
        $(".gnb_sub").eq(gnb_list_conts).addClass("gnb_sub_on");
    });


    $(".gnb_sub").mouseenter(function () {
        let gnb_list_conts02 = $(this).index();

        $(".gnb_list>li").removeClass("gnb_list_on");
        $(".gnb_list>li").eq(gnb_list_conts02).addClass("gnb_list_on");
    });


    $(".b_top").mouseleave(function () {
        $(".gnb_sub").removeClass("gnb_sub_on");
        $(".gnb_list>li").removeClass("gnb_list_on");

        $(".bottom").stop().css({ "height": "102px" });
    });


    // ----------------------------------메인 배너-----------------------------------------
    $(document).ready(function () {
        let main_list = 0;
        let main_count = $(".main_back > div").length;
        let main_wid = $(".main").width();
    
        $(".main_page > li").eq(main_list).addClass("page_on");
        $(".main_text").eq(main_list).children("h1").animate({ "opacity": "1", "margin-left": "14%" });
        $(".main_text").eq(main_list).children("p").animate({ "opacity": "1", "margin-left": "21%" });
    
        $(".main_page > li").click(function () {
            main_list = $(this).index();
            main_r();
        });
    
        $(".left_main_btn").click(function () {
            main_list = (main_list === 0) ? main_count - 1 : main_list - 1;
            main_r();
        });
    
        $(".right_main_btn").click(function () {
            main_list = (main_list === main_count - 1) ? 0 : main_list + 1;
            main_r();
        });
    
        let autoSlide01 = setInterval(function () {
            main_list = (main_list === main_count - 1) ? 0 : main_list + 1;
            main_r();
        }, 6000);
    
        function main_text() {
            $(".main_text").eq(main_list).children("h1").stop().animate({ "opacity": "0", "margin-left": "0%" });
            $(".main_text").eq(main_list).children("p").stop().animate({ "opacity": "0", "margin-left": "0%" });
    
            $(".main_text").eq(main_list).children("h1").stop().animate({ "opacity": "1", "margin-left": "14%" }, 1000);
            $(".main_text").eq(main_list).children("p").stop().animate({ "opacity": "1", "margin-left": "21%" }, 1500);
        }
    
        function main_r() {
            $(".main_page > li").removeClass("page_on");
            $(".main_page > li").eq(main_list).addClass("page_on");
    
            $(".main_back").stop().animate({
                "margin-left": -main_wid * main_list
            }, 500);
    
            main_text();
        }
    
        $(".main_btn > p").mouseenter(function () {
            clearInterval(autoSlide01);
        });
    
        $(".main_btn > p").mouseleave(function () {
            autoSlide01 = setInterval(function () {
                main_list = (main_list === main_count - 1) ? 0 : main_list + 1;
                main_r();
            }, 6000);
        });
    
        $(window).resize(function () {
            main_wid = $(".main").width();
            main_r();
        });
    });

    // ----------------------------brand---------------------
    let br_list = 0;
    let br_count = $(".brand_back>li").length;
    let br_hi = $(".brand>li").height();

    $(".left_brand_btn").click(function () {
        if (br_list == 0) {
            br_list = br_count - 1;
        } else {
            br_list--;
        }

        $(".brand_back").stop().animate({ "margin-top": br_hi * br_list });
        $('.brand_back').prepend($('.brand_back>li:last')).animate({ bottom: 0 });

        $(".brand_backAll>li").stop().fadeOut(300);
        $(".brand_backAll>li").eq(br_list).stop().fadeIn(300);
    });

    $(".right_brand_btn").click(function () {
        if (br_list == br_count - 1) {
            br_list = 0;
        } else {
            br_list++;
        }
        topTop();
    });

    let brSlide = setInterval(function () {
        if (br_list == br_count - 1) {
            br_list = 0;
        } else {
            br_list++;
        }
        topTop();
    }, 5000);

    // $(".brand_back>li").mouseenter(function () {
    //     clearInterval(brSlide);
    // });
    $(".brand_btn>p").mouseenter(function () {
        clearInterval(brSlide);
    });

    $(".brand_back>li").mouseleave(function () {
        brSlide = setInterval(function () {
            if (br_list == br_count - 1) {
                br_list = 0;
            } else {
                br_list++;
            }
            topTop();
        }, 5000);
    });


    $(".brand_btn>p").mouseleave(function () {
        brSlide = setInterval(function () {
            if (br_list == br_count - 1) {
                br_list = 0;
            } else {
                br_list++;
            }
            topTop()
        }, 5000);
    });

    function topTop() {
        $(".brand_back").stop().animate({ "margin-top": -br_hi * br_list });
        $('.brand_back').append($('.brand_back>li:first')).animate({ top: "-80px" });

        $(".brand_backAll>li").stop().fadeOut(300);
        $(".brand_backAll>li").eq(br_list).stop().fadeIn(300);
    }


    // ----------------------------new_product---------------------

    $(".right_new_text>li").click(function (e) {
        e.preventDefault();
    });
    $(".right_new_text>li").mouseenter(function () {
        let new_list = 0;
        new_list = $(this).index();
        $(".new_photos>li").removeClass("new_photoOn");
        $(".new_photos>li").eq(new_list).addClass("new_photoOn");
    });

    // ----------------------------media---------------------
    $(".left_media_list>li").click(function () {
        let media_list = 0;
        media_list = $(this).index();
        $(".left_media_list>li").removeClass("media_on01");
        $(".left_media_list>li").eq(media_list).addClass("media_on01");

        $(".right_media_list>li").removeClass("media_on02");
        $(".right_media_list>li").eq(media_list).addClass("media_on02");
    });

    // ---------------------------------------------------------

    $(".top_bar").click(function () {
        $("#gnb_modal").animate({ "right": "0" }, 300);
        $(".move_img").stop().fadeIn(1000);
    });
    $("#gnb_modal>p").click(function () {
        $("#gnb_modal").animate({ "right": "-2000px" }, 300);
        $(".move_img").stop().fadeOut(900);
    });
});