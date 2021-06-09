$(document).ready(()=>{
    $(".burger-menu").click((event)=>{
        $(".navigation, .burger-menu").toggleClass("active");
        $("body").toggleClass("lock");
    })
})
