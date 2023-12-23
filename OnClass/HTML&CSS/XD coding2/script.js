AOS.init();

// ハンバーガーメニュー
$('.hamburger').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});

// スライダー
$(function(){
    $('#js-slider').slick({
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "8%",
        slidesToShow: 3,
        responsive:[{
            breakpoint:820,
            settings:{
                slidesToShow:1,
                centerPadding: '20%'
            }
        }],
        respondTo:'slider'
    });
});