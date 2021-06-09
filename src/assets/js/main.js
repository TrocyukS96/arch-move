$(document).ready(()=>{
    $(".burger-menu").click((event)=>{
        $(".navigation, .burger-menu").toggleClass("active");
        $("body").toggleClass("lock");
    })

})
$(document).ready(($) => {
    $('.examples__wrap').magnificPopup({
        type: 'inline'
    });
});