//Responsive Owl Carousel 2 //
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsiveClass: true,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
      nav: true,
    },
    // breakpoint from 600 up
    600: {
      items: 2,
      nav: false,
    },
    // breakpoint from 700 up
    700: {
      items: 2,
      nav: false,
    },
    // breakpoint from 1200 up
    1200: {
      items: 3,
      nav: false,
    },
  },
});
