var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3
});
function sliderResize(slider) {
    if (screen.width <= 640) {
        slider.params.slidesPerView = 1;
        slider.update();
    } else if (screen.width >= 640) {
        slider.params.slidesPerView = 3;
        slider.update();
    }
}
sliderResize(swiper);
window.onresize = function () {
    sliderResize(swiper);
};
