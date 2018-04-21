$(() => {



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

  
  $('#myModal').modal('show');


  $('a').on('click', scrollToSection);

  function scrollToSection () {
    const section = $(this).attr('href');
    $('body').animate({
      scrollTop: $(section).offset().top - 50
    }, 2000, () => {
      if($(window).width()<575) {
        $('.dropdown').slideToggle();
      }
    });
  }
});
