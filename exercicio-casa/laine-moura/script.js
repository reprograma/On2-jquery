// Inicie o jQuery no seu documento
$(document).ready(function(){


// Faça com que a lista de conteúdo apareça ao clicar em Confira

    const ex = $('.listadecursos')

        $('.subtitle').click(function(){
        ex.show('slow')
          });

// Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.
        const container=$('.container')

        $('#pih').click(function(){
            $('body').css('background','#ccf');
        });
        $('#pic').click(function(){
            $('body').css('background','#cce');
        });
        $('#pil').click(function(){
            $('body').css('background','#ccd');
        });
        $('#pijs').click(function(){
            $('body').css('background','#ccc');
        });
        $('#pijq').click(function(){
            $('body').css('background','#ccb');
        });
        $('#pirjs').click(function(){
            $('body').css('background','#cca');
        });
// Crie um botão Inscreva-se // criado no html

// Ao clicar no botão, o formulário deve aparecer
        const formulario = $('.formulario')
        $('.button-inscricao').click(function(){
            formulario.show('slow')

        })
// Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de "Seu formulário foi enviado" deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery
            $('.btn').click(function(){
                $('.formulario').hide('slow');
                $('.inscreva-se_area').append('<p>Seu formulário foi enviado</p>')
            })
           

})
