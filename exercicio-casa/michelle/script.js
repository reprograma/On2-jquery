// Inicie o jQuery no seu documento

// Faça com que a lista de conteúdo apareça ao clicar em Confira

// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.

// Crie um botão Inscreva-se

// Ao clicar no botão, o formulário deve aparecer

// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery




$(document).ready(function(){
    alert('DOM Carregado!');
});

$(function(){
$(".product_list").hide()

$(".subtitle").click(function(){
$(".product_list").show("slow");
});

});  

$(".product_item1").click(function(){
$("body").css("background", "#D8BFD8")
});
$(".product_item2").click(function(){
$("body").css("background", "#DDA0DD")
});
$(".product_item3").click(function(){
$("body").css("background", "#8B008B")
});
$(".product_item4").click(function(){
$("body").css("background", "#800080")
});
$(".product_item5").click(function(){
$("body").css("background", "#4B0082")
});
$(".product_item6").click(function(){
$("body").css("background", "#BA55D3")
});

$(function(){
$(".formulario").hide()

$(".inscrevaseBtn").click(function(){
$(".formulario").show("slow");
});
});

$(".inscrevase_area").prepend("<button class='inscrevaseBtn'>Inscreva-se</button>");

$(".btn-enviar").click(function(){
$(".formulario").hide("slow");
$(".inscrevase_area").append("<p class='msg-form'>Seu formulário foi enviado</p>");

});