function test(a, b) {
    return a + b
}

$(document).ready(()=>{
    $(".burger-menu").click((event)=>{
        $(".navigation, .burger-menu").toggleClass("active");
        $("body").toggleClass("lock");
    })
})

//# sourceMappingURL=script.js.map
