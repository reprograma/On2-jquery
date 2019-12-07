// Inicie o jQuery no seu documento
$(function(){

    // Faça com que a lista de conteúdo apareça ao clicar em Confira
    $(".product_list").hide();
    
    $(".subtitle").click(function(){
        $(".product_list").show("slow");
    });


    // Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.
    let fundo = $('.container');  

    $('.product_item1').click(function(){
        fundo.css('background','#FF000060');
    });

    $('.product_item2').click(function(){
        fundo.css('background','#FF00FF60');
    });

    $('.product_item3').click(function(){
        fundo.css('background','#0000FF60');
    });

    $('.product_item4').click(function(){
        fundo.css('background','#00FFFF60');
    });

    $('.product_item5').click(function(){
        fundo.css('background','#00800060');
    });

    $('.product_item6').click(function(){
        fundo.css('background','#FFFF0060');
    });

    // Crie um botão Inscreva-se
    $(".area-inscricao").prepend("<button class='inscricaoBtn'>Inscreva-se</button>") 
    // $(".area-inscricao").append("<button class='inscricaoBtn'>Inscreva-se</button>")
   

    // Ao clicar no botão, o formulário deve aparecer
    $(".formulario").hide();

    $(".area-inscricao").click(function(){
        $(".formulario").show("slow");
    
    });

    // Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery
    $(".btn-enviar").click(function(){
        $(".formulario").hide("slow");
        $(".area-inscricao").append("<p>Seu formulário foi enviado!</p>");
    });

});