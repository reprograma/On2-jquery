//$(function(){

//$ ("p").
    

//});

$(function(){

//$("h1").css("color","purple");
//$("p").css("font-size", "34px");
//$("h1").css({'color':'green', 'font-size': '24px'});
//$("p").addClass("texto-inicial");

//$("p").click(function(){
  // $("h1").css("color","red");

//})


$("h1").click(function(){
    $("body").css("background", "purple");
    $("h1").css("color", "orange")


});


// $(window).scroll(function(){
//     $(".product_list").fadeOut("1000");

//});

$(window).resize(function(){
    $(".logo").width($(window).width()).height($(window).height())
})


});