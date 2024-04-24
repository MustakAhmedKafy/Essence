$("#textslider").owlCarousel({
  loop: true,
  autoplay: true,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


$("#brand-slider").owlCarousel({
  loop: true,
  autoplay: true,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 3.5,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 6.5,
    },
  },
});


