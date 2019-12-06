$(function(){

// Faça com que a lista de conteúdo apareça ao clicar em Confira

    $(".product_list").hide();
    $(".subtitle").hover(function(){
        $(this).css("background-color", "#D0C9EA");
    }, function(){
        $(this).css("background-color", "");
      });

    $(".subtitle").click(function(){
        $(".product_list").show("slow");
    })
    $(".subtitle").dblclick(function(){
        $(".product_list").hide("slow");
    })

// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.

    $(".product_list").click(
        function(){
            $(".product_item1").css
            ("background-color","#0000ff");
            $(".product_item2").css
            ("background-color","#00ffff");
            $(".product_item3").css
            ("background-color","#00ff00");
            $(".product_item4").css
            ("background-color","#ffff00");
            $(".product_item5").css
            ("background-color","#ff7f00");
            $(".product_item6").css
            ("background-color","#ff0000");
        })


// Crie um botão Inscreva-se


// Ao clicar no botão, o formulário deve aparecer

        $(".formulario").hide();
        $(".sub-subtitle").hover(function(){
            $(this).css("background-color", "#D0C9EA");
        }, function(){
            $(this).css("background-color", "");
          });
        $(".sub-subtitle").click(function(){
            $(".formulario").show("slow");
        })
        $(".sub-subtitle").dblclick(function(){
            $(".formulario").hide("slow");
        })

// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery

        $(".btn-enviar").click(function(){

            $(".formulario").hide("slow");
            $(".inscrevase_area").append("<p>Oba ! Sua inscrição foi encaminhada com sucesso! ;)</p>");
        })

    
    



});
