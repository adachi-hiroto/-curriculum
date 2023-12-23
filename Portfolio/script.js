// ハンバーガーメニュー
$('.hamburger-menu').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});
$('.nav-container').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.hamburger-menu').toggleClass('cross');
    $('body').toggleClass('noscroll');
});

function fadeAnime(){
    $('.fadeInTrigger').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos -windowHeight){
            $(this).addClass('fadeIn');
        }
    })
}

$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });