// Inicie o jQuery no seu documento

// Faça com que a lista de conteúdo apareça ao clicar em Confira

// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.

// Crie um botão Inscreva-se

// Ao clicar no botão, o formulário deve aparecer

// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery





$(function(){

  

    $(".product_list").hide();
    
    $(".subtitle").click(function(){
        $(".product_list").toggle("slow");

    });


   
    $("#html").click(function(){
        $("body").css("background", "#CDB7B5"); 
    })

    $("#css").click(function(){
        $("body").css("background", "#9370DB"); 
    })

    $("#logica").click(function(){
        $("body").css("background", "#7CCD7C"); 
    })

    $("#js").click(function(){
        $("body").css("background", "#DAA520"); 
    })

    $("#jquery").click(function(){
        $("body").css("background", "#3CB371"); 
    })

    $("#react").click(function(){
        $("body").css("background", "#E9967A"); 
    })

    $(".formulario").hide();
  
    $(".inscrevase_area").append("<button class='inscrevaseBtn'>Inscreva-se</button>"); 

    $(".inscrevaseBtn").click(function(){
        $(".formulario").show("slow");
    })

    $(".btn-enviar").click(function(){
        $(".formulario").hide("slow");
        $(".inscrevase_area").append("<p>Seu formulário foi enviado</p>");

    })
  

   



})










