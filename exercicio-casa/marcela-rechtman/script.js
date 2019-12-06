// Inicie o jQuery no seu documento

// Faça com que a lista de conteúdo apareça ao clicar em Confira

// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.

// Crie um botão Inscreva-se

// Ao clicar no botão, o formulário deve aparecer

// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery


$(function(){
    $(".product_list").hide();
$(".subtitle").click(function(){
    $(".product_list").show("slow");
});
$("#item1").click(function () {
    $("body").css("background", "#d65b13");
});
$("#item2").click(function () {
    $("body").css("background", "#d6bf13");
});
$("#item3").click(function () {
    $("body").css("background", "#82d613");
});
$("#item4").click(function () {
    $("body").css("background", "#13d698");
});
$("#item5").click(function () {
    $("body").css("background", "#6413d6");
});
$("#item6").click(function () {
    $("body").css("background", "#d61392");
});

$('<input type="button" class="btn" id="butn" value="Increva-se"> ').appendTo("#botao");
$('#form').hide();
$("#butn").click(function(){
    $(".formulario").show("slow");
});

$('#Enviar').click(function () {
    $('.formulario').html('Seu formulário foi enviado!');
});
});
