$(document).ready(function () {
  $(".image_slider").slick({
    slideToShow: 3,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    prevArrow:
      `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-circle-outline"></ion-icon></button>`,
    nextArrow:
      `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-circle-outline"></ion-icon></button>`,
  });
});
