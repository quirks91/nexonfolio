$(function () {
  $('.slider').slick({
    infinite: true,
  });


  $(window).scroll(function () {
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if (height > 0) {
      $('header').addClass('fixed');
    } else if (height == 0) {
      $('header').removeClass('fixed');
    }
  });

  // Trigger
  $('.trigger').click(function () {
    $(this).toggleClass('active')
  })
  $('.trigger').click(function () {
    $('.utility').toggleClass('active')
  })

});