var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3
});

if (screen.width <= 640) {
    swiper.params.slidesPerView = 1;
    swiper.update();
} else {
    swiper.params.slidesPerView = 3;
    swiper.update();
}

window.onresize = function () {
    var single_per = false;
    if (screen.width <= 640 && single_per == false) {
        swiper.params.slidesPerView = 1;
        swiper.update();
        single_per = true;
    } else if (screen.width >= 640 && single_per == true) {
        swiper.params.slidesPerView = 3;
        swiper.update();
        single_per = false;
    }
};
