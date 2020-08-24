$(document).ready(function () {
  const nav_offset_top = $(".header_area").height() + 300;
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  // filter gallery
  let $btns = $(".photo-gallery .button-gallery button");

  $btns.click(function (e) {
    // remove class from everything and add class ='active' to only clicked one
    $(".photo-gallery .button-gallery button").removeClass("active");
    e.target.classList.add("active");

    // make isotope filter to select the whole row that contains ohotos
    let selector = $(e.target).attr("data-filter");
    $(".photo-gallery .photo-row").isotope({
      filter: selector,
    });

    return false;
  });

  $(".photo-gallery .button-gallery #btn1").trigger("click");

  $(".photo-gallery .photo-row .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

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
