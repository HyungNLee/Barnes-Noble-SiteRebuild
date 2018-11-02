function initializeSlick() {
  setTimeout(() => {
    $(".slider").not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: false
    });
    console.log("Working!");
  }, 1000);
}