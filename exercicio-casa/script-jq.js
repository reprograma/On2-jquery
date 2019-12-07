// Inicie o jQuery no seu documento

// Faça com que a lista de conteúdo apareça ao clicar em Confira

// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.

// Crie um botão Inscreva-se

// Ao clicar no botão, o formulário deve aparecer

// Ao clicar em Enviar,
    // o formulário deve desaparecer 
    // e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. 
    //Essa mensagem pode ser gerada dinamicamente em jQuery

$(function(){

    $(".product_list").hide()

    $(".subtitle").click(function(){
        $(".product_list").show("slow");
    });

    $(".product_item").click(function(){
        $("body").css("background","LightPink");
    })

    $(".inscrevase_area").prepend("<button class='inscrevaseBtn'>Inscreva-se</button>"); //fica no começo da div

    //$(".inscrevase_area").append("<button class='inscrevaseBtn'>Inscreva-se</button>"); // fica no final da div

    $(".btn-enviar").click(function(){
        $(".formulario").hide("slow");
        $(".inscrevase_area").append("<p>Seu formulário foi enviado</p>");
    })


});

