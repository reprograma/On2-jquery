// Inicie o jQuery no seu documento
$(document).ready(function () {
    // Faça com que a lista de conteúdo apareça ao clicar em Confira
    $('.product_list').hide();
    $('#subtitle').click(function () {
        $('.product_list').toggle();
    });
    // Ao clicar em cada um dos conteúdos, mude a cor de fundo do site. Se quiser, pode trabalhar com transparências usando o rgba.
    $('#product_item1').click(function () {
        $('body').css('background', 'red');
    });
    $('#product_item2').click(function () {
        $('body').css('background', 'pink');
    });

    $('#product_item3').click(function () {
        $('body').css('background', 'violet');
    });

    $('#product_item4').click(function () {
        $('body').css('background', 'blue');
    });

    $('#product_item5').click(function () {
        $('body').css('background', 'green');
    });

    $('#product_item6').click(function () {
        $('body').css('background', 'orange');
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
        $('.formulario').hide();
        alert('Seu formulário foi enviado');
    });
});