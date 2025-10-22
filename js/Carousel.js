/* Manually initializing the carousel */
const CarouselElement = document.getElementById('main-carousel');
const carousel = new bootstrap.Carousel(CarouselElement, {
    interval: 7000,
});

/* Start the auto playing carousel */
carousel.cycle();