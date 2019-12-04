// Inicie o jQuery no seu documento

/*No html, acrescentar no final do <body>:  <script type='text/javascript' src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
sendo este um código retirado do site da documentação do Jquery, instalação via CDN*/

$(document).ready(function(){

// Faça com que a lista de conteúdo apareça ao clicar em Confira

   
       $(".product_list").hide();  

    $(".subtitle").click(function(){
       $(".product_list").show("1000");
    })


// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.
   $(".product_list").click(function(){
       $("body").css("background", "pink");
   });


// Crie um botão Inscreva-se
    $(".sub-subtitle").html('<button type="button">Inscreva-se!</button>');

// Ao clicar no botão, o formulário deve aparecer
        $("h3").click(function(){
            $(".formulario").show("2000");   
        });

// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery
    $(".btn").click(function(){
        $(".formulario").hide();
        alert('Seu formulário foi enviado');

    });

})






