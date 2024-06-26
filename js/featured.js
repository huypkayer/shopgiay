$(document).ready(function () {
  $(".featured").slick({
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1000,
    prevArrow:
      `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></i></button>`,
    nextArrow:
      `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
  });
});
