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

$("#most-viewd-items").owlCarousel({
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
      items: 2,
      margin: 10,
    },
    600: {
      items: 4,
      margin: 15,
    },
    1000: {
      items: 6,
      margin: 20,
    },
  },
});

$("#top-brands").owlCarousel({
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
      items: 3,
      margin: 10,
    },
    600: {
      items: 4,
      margin: 15,
    },
    1000: {
      items: 7,
      margin: 20,
    },
  },
});
