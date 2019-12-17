// Inicie o jQuery no seu documento
$(document).ready(function () {
    // Faça com que a lista de conteúdo apareça ao clicar em Confira
    $('.product_list').hide();
    $('#subtitle').click(function () {
        $('.product_list').toggle();
    });
    // Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.
    $('#product_itemA').click(function () {
        $('body').css('background', 'DeepPink');
    });
    $('#product_itemB').click(function () {
        $('body').css('background', 'Coral');
    });

    $('#product_itemC').click(function () {
        $('body').css('background', 'Gold');
    });

    $('#product_itemD').click(function () {
        $('body').css('background', 'MediumSlateBlue');
    });

    $('#product_itemE').click(function () {
        $('body').css('background', 'YellowGreen');
    });

    $('#product_itemF').click(function () {
        $('body').css('background', 'blue');
    });
    // Crie um botão Inscreva-se
    $('<input type="button" class="btn" id="botao2" value="Increva-se"> ').appendTo("#botao");
    $('#formulario').hide();
    // Ao clicar no botão, o formulário deve aparecer
    $('#botao2').click(function () {
        $('.formulario').toggle();
    })
    // Ao clicar em Enviar, o formulário deve desaparecer e uma mensagem de 'Seu formulário foi enviado' deve aparecer na tela. Essa mensagem pode ser gerada dinamicamente em jQuery
    $('#btn').click(function () {
        $('.formulario').hide(function(){
            alert('Seu formulário foi enviado');
        });

    });
});