# jQuery é um framework de JavaScript
    
É uma biblioteca open-source para facilitar o desenvolvimento com o lema "write less, do more". (Escreva menos, faça mais.)

É um compilado de métodos prontos em JavaScript para escrever menos código, criado em 2006. 

[Acesso à documentação](https://jquery.com/)


### Alguns recursos e vantagens que o jQuery oferece:

* Seleção e manipulação de elementos HTML
* Manipulação de CSS
* Efeitos e animações
* Navegação pelo DOM
* AJAX de forma simples
* Eventos
* Open-source
* Facilidade de leitura do código

### Como instalar o jQuery via Content Delivery Network(CDN)

Na instalação via CDN, usar o código compactado.

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

        (Google CDN)    
    
Para incluir no código:
    

        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Demo</title>
        </head>
        <body>
            <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
            <script>
        
            // Aqui vai o código.
        
            </script>
        </body>
        </html>

### Sintaxe 

    $("seletor").ação() 

O $ dá acesso ao jQuery Selector para encontrar no HTML o elemento desejado. 

Também podemos usar também uma função dentro da ação:

    $("seletor").ação(function(){}) 


### Exemplos de seletores do Jquery


* $("p") – seleciona todos os elementos **\<p>**
* $("[href]") – seleciona todos os elementos que possuem o **atributo** href
* $("#algumId") – seleciona todos os elementos onde **id="algumId"**
* $(".classes") – seleciona todos os elementos onde **class="classes"**
* $("p#algumId") – seleciona todos os elementos **\<p> onde id="algumId"**
* $("p.algumaClasse") – seleciona todos os elementos **\<p> onde class="algumaClasse"**
* $("p:first") – seleciona o primeiro elemento **\<p>**
* $(".algumaClasse + p") - seleciona o primeiro **\<p>** após o elemento com classe **.algumaClasse**
* $(".algumaClasse ~ p") - seleciona todos **\<p>** após o elemento com classe **.algumaClasse**
* $("ul li:first") – seleciona o primeiro elemento **\<li> de um elemento \<ul>**
* $(":even") – seleciona todos os **elementos pares** (utilizável em tabelas, listas e afins)
* $(":odd") – seleciona todos os **elementos ímpares** (utilizável em tabelas, listas e afins)
            

## Eventos 

Eventos são as ações disparadas no momento em que é escutada. No JavaScript Vanila usamos algo parecido: "addEventListener".  

Exemplo:

        $("p").text("Hello World")
    
        $("h1").addClass("titulo-principal")


### Métodos de Carregamento e Inicialização

Quando é preciso usar uma função antes mesmo de os elementos serem carregados, pode-se usar o primeiro método .ready() ou apenas $ + function

Quando é preciso usar uma função apenas depois que todos os documentos sejam carregados, usa-se o método load().

        <script type='text/javascript'>
            $(document).ready(function(){
                alert('DOM Carregado!');
            });

            $(function(){

            });


            $(window).load(funcion(){
                alert('Elementos Carregados');  
            });
        </script>


### Eventos de Navegador

Alguns eventos de navegador são conhecidos como **error**, **resize** ou **scroll**. 

#### Evento de **erro**:
    
        $('img').error(function(){
            $('img').attr('src', 'img/error.jpg');
        });

        $('img').error(function(){
            let imagem = $(this).attr('src');
            alert('imagem' +imagem+'indisponível');
            $('img').attr('src', 'img/error.jpg');
        });

#### Evento de **resize**, para aumentar ou diminuir uma imagem de acordo com as dimensões do navegador, por exemplo:

        $('img').width($(window).width()).height($(window).height); 
        // aqui acontecem dois eventos: a largura da imagem puxa a largura da janela, assim como a altura. 

Para esse evento ser disparado cada vez que a janela muda de tamanho, é necessário chamar o evento de resize:

        $('img').width($(window).width()).height($(window).height); 
        $(window).resize(function(){
            $('img').width($(window).width()).height($(window).height); 
        });
        

#### Evento de **scroll**

Evento disparado com o scroll da janela.

        $(window).scroll(function(){
            $('img').fadeOut('1000');
        });

OBS: Para decobrir o tamanho do scroll:

        $('body').css('height','2500px');
        
            $(window).scroll(function(){
                let topo = $(window).scrollTop();
                // alert(topo);
                // ou console.log(topo);

            if (topo > 400){
                $('img').fadeOut('1000');
            } else {
                $('img').fadeIn('1000');
            }
        });
    

### Eventos de mouse:

    $('.ev1').click(function(){ 
        $(this).css('background', '#ccc')
        ex.text('Você clicou!')
    });


    Alguns exemplos de Eventos de mouse:

* click() - evento de click
* dblclick() - evento de clique duplo
* focusin() - foco no elemento selecionado
* focusout() - tira o foco do elemento selecionado
* hover() - evento ao passar o mouse pelo elemento selecionado
* mousedown() - ao apertar o botão do mouse
* mouseup() - ao soltar o botão do mouse

### Eventos de teclado:

* keypress() - ao apertar a tecla (tem delay, só funciona com algumas teclas)
* keydown() - ao apertar a tecla (tem delay, funciona para todas as teclas)
* keyup() - ao soltar a tecla (funciona em tempo real)

### Eventos de Formulário

* focus() - focar o input
* blur() - usado quando um input deixa de receber o evento de focus()
* select() - selecionar o input ou valor do input
* submit() - para submeter ou prevenir o envio do formulário

### Métodos para adicionar e modificar atributos usando o .attr()

Recebe dois argumentos: o atributo e seu valor. 

    $('a').attr('href', 'https://www.google.com.br');

#### Show e hide:

    $("#show").click(function(){
        $("p").show()
    });

    $('#hide').click(function(){
    $('p').hide();
});

#### FadeIn

    $('#div1').fadeIn();

#### FadeOut

    $('#div2').fadeOut("slow");

#### FadeToggle

    $('#div3').fadeToggle(2000);

#### Toggle

    $('#toggle').click(function(){
        $('.dois').toggle();
    });

## Efeito de parallax usando o jQuery

[Parallax.js](https://pixelcog.github.io/parallax.js/)



