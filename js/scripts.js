$(document).ready(function () {
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
