const swiperOne = new Swiper('.portfolio', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});

const swiperTwo = new Swiper('.slideshow__slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 3,       //add(how many slides to show)
    centeredSlides: true,
    initialSlide: 1,
    loopAddBlankSlides: true,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        scale: 1,
        stretch: -20,
        depth: 45,
        modifier: 1,

        // depth: 500,


    },



    // effect: 'cards',
    // cardsEffect: {
    //     perSlideOffset: 45,
    //     perSlideRotate: 0,
    //     slideShadows: false,
    //     rotate: true,
    //     initialSlide: 2,
    //     spaceBetween: 2,

    // },

    // If we need pagination
    // Navigation arrows
    navigation: {
        nextEl: '.slideshow__swiper-next',
        prevEl: '.slideshow__swiper-prev',

    },
    // And if we need scrollbar

});
