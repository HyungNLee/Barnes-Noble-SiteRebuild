function initializeSlick() {
  console.log("Working!");
  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false
  });
}