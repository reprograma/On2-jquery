// Inicie o jQuery no seu documento
$(function(){
  
// Faça com que a lista de conteúdo apareça ao clicar em Confira    
$('.product_list').hide()
$('.subtitle').click(function(){
    $('.product_list').show();
})

//$('.subtitle').click(function(){
  //   $('.product_list').toggle('slow');
      
    //})
    
})


// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.

$('#html').click(function(){
    $('body').css('background', '#A5D8D7');
})
$('#css').click(function(){
    $('body').css('background', '#B4A5D8');
})
$('#logica').click(function(){
    $('body').css('background', '#D8BFA5');
})
$('#js').click(function(){
    $('body').css('background', '#D8A5A6');
})
$('#jq').click(function(){
    $('body').css('background', '#D8A5C7');
})
$('#react').click(function(){
    $('body').css('background', '#A5C6D8');
 
})

// Crie um botão Inscreva-se

$('.inscreva-se_area').prepend("<button class='inscrevaseBtn'>Inscreva-se</button>")

// Ao clicar no botão, o formulário deve aparecer

$('.formulario').hide()
$('.inscrevaseBtn').click(function(){
    $('.formulario').show();
})

// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de 
//"Seu formulário foi enviado" deve aparecer na tela. 
//Essa mensagem pode ser gerada dinamicamente em jQuery

$('.btnEnviar').click(function(){
    $('.formulario').hide()
    $('.inscreva-se_area').html("<p>Seu formulário foi enviado!</p>")
    
})