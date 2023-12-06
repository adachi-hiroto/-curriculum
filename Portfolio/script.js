// ハンバーガーメニュー
$('.hamburger-menu').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});