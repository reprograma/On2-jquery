// Inicie o jQuery no seu documento

/*
<script type='text/javascript' src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
<script type='text/javascript' src="./script-jq.js"></script>
*/

// Faça com que a lista de conteúdo apareça ao clicar em Confira
$(function(){
   
    $('.subtitle').click(function(){
        $('#lista').show('slow');
    })

 
// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.   

    $('#lista1').click(function(){
        $("body").css('background','blue');
        
    })

    $('#lista2').click(function(){
        $("body").css('background','yellow');
    })

    $('#lista3').click(function(){
        $("body").css('background','purple');
    })

    $('#lista4').click(function(){
        $("body").css('background', 'black');
    })

    $('#lista5').click(function(){
        $("body").css('background','white');
    })

    $('#lista6').click(function(){
        $("body").css('background','red');
    })


// Crie um botão Inscreva-se
//  <button>Inscreva-se</button>

// Ao clicar no botão, o formulário deve aparecer
/* .formulario{
    display: none;
} */


// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery

$('button').click(function(){

    $('.formulario').show('slow');
    $('.formenviado').css('color', 'white').show('slow');
    
   
})


})


