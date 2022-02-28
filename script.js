// Navbar Toggler //

bars.addEventListener("click", toggler);
function toggler() {
  var x = document.getElementById("items");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var y = document.getElementById("xmark");
  y.classList.toggle("fa-xmark");
}
// Thanks to geeksforgeeks.org and javascript.info intro events.

//Owl Carousel //
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
