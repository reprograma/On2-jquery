$(document).ready(function () {


$(".product_list").hide();

$(".subtitle").click(function(){
    $(".product_list").show("slow");
})


$("#product_list1").click(function(){
    $("body").css("background","pink");
});

$("#product_list2").click(function(){
    $("body").css("background","purple");
});

$("#product_list3").click(function(){
    $("body").css("background","violet");
});

$("#product_list4").click(function(){
    $("body").css("background", "gray");
});

$("#product_list5").click(function(){
    $("body").css("background","white");
});

$("#product_list6").click(function(){
    $("body").css("background","red");
});


$(".inscrevase_area").prepend("<button class='InscrevaseBtn'>Inscreva-se</button>");

$(".btn-enviar").click(function(){
    $(".formulario").hide("slow");
    $(".inscrevase_area").append("<p>seu formulário foi enviado</p>");
})


});