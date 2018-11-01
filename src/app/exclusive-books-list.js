$(document).ready(function() {
  console.log("Outer");
  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  console.log("Inner")
})