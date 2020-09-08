$(document).ready(function () {
  function onScroll(event){
    console.log('am i being called')
    var scrollPos = $(document).scrollTop();
    $('#navbarNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbarNav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
$(document).on("scroll", onScroll);
    
//smoothscroll
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
  
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});


  const nav_offset_top = $(".header_area").height() + 300;
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          console.log("entered");

          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  // owl carousel
  $(".site-main .my-hobbies .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });

  navbarFixed();
});



