$(function(){

    $("h1").click(function(){

        $("body").css("background","purple");
        $("h1").css("color","orange");
    });

    $(window).scroll(function(){
        $(".product_list").fadeOut("1000");
    })



});