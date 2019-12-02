
$(document).ready(function () {

    //ESTRUTURAS

    $('h1').css("color", "#f66");
    $('h1').hide();
    $('h1').delay('1000');
    $('h1').fadeIn("slow");
    // $('h1').text('Pão Daora Padaria!');

    // Colocar uma função de Clique
    $('h1').click(function () {
        // alert("pão é o melhor alimento do mundo!")
        $('body').css('background', 'purple');
        $('h1').css('color', '#fff');
    });


    // SELECIONAR DUAS COISAS AO MESMO TEMPO
    $('h1, h2').css('border-bottom', 'solid 3x blue');


    //Encapsulamento de funções
    $('h1').css("color", "#f66").hide().delay('1000').fadeIn('slow').text('Pão Daora Padaria!');

    //Encadeamento em Bloco
    $('h1')
    .css("color", "#f66")
    .hide().delay('1000')
    .fadeIn('slow')
    .text('Pão Daora Padaria!');

    //Como adicionar mais de um atribute de CSS

    $('a').css({ color: 'red', display: 'block' })


    //SELETORES HIERÁRQUICOS

    //filhos

    $('.formulario label').hide().delay('1000').fadeIn(1000).css({color:'green', 'font-size': '15px'})

    //Evento de navegador

    $(window).scroll(function(){
        $('.logo').fadeOut('500');
    });

    //Evento de mouse

});

