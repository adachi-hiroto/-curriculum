$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// ハンバーガーメニュー
$('.hamburger-menu').on('click',function(){
    $('.nav-container').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});
$('.nav-list').on('click',function(){
    $('.nav-container').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});