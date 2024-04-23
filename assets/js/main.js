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
