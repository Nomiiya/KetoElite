$(document).ready(function() {
  $(".carousel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
