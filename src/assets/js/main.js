$(document).ready(()=>{
    $(".burger-menu").click((event)=>{
        $(".navigation, .burger-menu").toggleClass("active");
        $("body").toggleClass("lock");
    })
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 40,

});