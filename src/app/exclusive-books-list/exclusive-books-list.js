$(document).ready(function() {
  console.log("Outer");
  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false
  });
  console.log("Inner")
})