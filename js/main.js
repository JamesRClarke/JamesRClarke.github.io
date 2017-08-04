$(() => {
  console.log('hello world');

  $(window).scroll(updateHeader).trigger('scroll');

  function updateHeader () {
    const viewportHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= viewportHeight - $('header').height()) {
      $('header').addClass('translucent');
    } else {
      $('header').removeClass('translucent');
    }
  }

  $('nav a').on('click', scrollToSection);

  function scrollToSection () {
    const section = $(this).attr('href'); //#gallery
    $('body').animate({
      scrollTop: $(section).offset().top - 40
    }, 2000, () => {
      if($(window).width()<575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  $('.menu').on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

});
