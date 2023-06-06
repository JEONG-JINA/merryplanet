AOS.init();

jQuery(document).ready(function(){
    $(".btn_wrap").stop().hide();


    // 헤더
    $(window).scroll(function(){
        var scr_top = $(window).scrollTop();
        
        if( scr_top > 10 ) {
            $("header").addClass("fixed");
        }
        else {
            $("header").removeClass("fixed");
        }
        move_top();
    });

    $("header .ham-btn").click(function(){
        $(this).toggleClass("on");
        $("body").toggleClass("on");
        $("header").toggleClass("color-change");
    });

    if( $("header .ham-btn").hasClass("on") ) {
        $("header .ham-btn").insertAfter("header .menu");
    }else {
        $("header .ham-btn").insertBefore("header .menu");
    };


    // 반응형
    var win_w = $(window).outerWidth();

    if( win_w > 1023 ) {
        pc();
    }else {
        mobile();
    };

    $(window).resize(function(){
        var win_w = $(window).outerWidth();

        if( win_w > 1023 ) {
            pc();
        }else {
            mobile();
        };
    });

    function pc() {
        $("header ._my").insertAfter("header .logo");
        $("header ._my li .txt").addClass("blind");
    }

    function mobile() {
        $("header ._my").insertAfter("header .menu .gnb");
        $("header ._my li .txt").removeClass("blind");
    }
    

    // special
    $('.section-special .content').slick({
        dots: true,
        dotsClass: 'slick-custom-dots',
        arrows: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        pauseOnFocus: false,
        pauseOnHover: false
    });


    // review
    $(".section-review .content").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });


    // insta
    $(".section-insta .content").slick({
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $(".section-insta .content").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var calc = ((nextSlide+1) / (slick.slideCount)) * 100;
        $(".section-insta .progress_bar").css('background-size', calc + '% 100%');
    });
    

    // 버튼
    function move_top(){
        var scr_top = $(window).scrollTop();

        if( scr_top > 300) {
            $(".btn_wrap").stop().fadeIn();
        }
        else {
            $(".btn_wrap").stop().fadeOut();
        }
    }

    $(".top_btn").click(function(){
        $("html").stop().animate({scrollTop: 0}, 500);
        move_top();
    });
});


// btn (section-special)
var button = document.querySelectorAll(".btn"),
    background = document.querySelectorAll(".backgroundHover"),
    firstWord = document.querySelectorAll(".first"),
    secondWord = document.querySelectorAll(".second");

var tl = new TimelineMax({ paused:true });
tl.staggerTo(firstWord, 1, {color: "rgba(255,255,255)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.staggerTo(secondWord, 1, {color: "rgba(255,255,255)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.from(background, 0.25, {scaleX:"0%", transformOrigin:"left center", ease: Quad.easeImOut}, "#start");


for ( var i = 0; i < button.length; i++ ) {
    button[i].addEventListener("mouseenter",function(){
        tl.play();
    });
      
    button[i].addEventListener("mouseleave",function(){
        tl.reverse();
    });
};