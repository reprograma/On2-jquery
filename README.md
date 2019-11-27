# On2-jquery
Turma Online 2 | Front-end | 2019 | Semana 6 | Jquery


# jQuery é um framework de JavaScript
    
É uma biblioteca open-source para facilitar o desenvolvimento com o lema "write less, do more". (Escreva menos, faça mais.)

É um compilado de métodos prontos em JavaScript criado em 2006. 


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

Também é possível usar uma função dentro da ação:

    $("seletor").ação(function(){}) 


### Exemplos de seletores do Jquery


* $("p") – seleciona todos os elementos **\<p>**
* $("[href]") – seleciona todos os elementos que possuem o **atributo** href
* $("#algumId") – seleciona todos os elementos onde **id="algumId"**
* $(".classes") – seleciona todos os elementos onde **class="classes"**
* $("p#algumId") – seleciona todos os elementos **\<p> onde id="algumId"**
* $("p.algumaClasse") – seleciona todos os elementos **\<p> onde class="algumaClasse"**
* $("p:first") – seleciona o primeiro elemento **\<p>**
* $("ul li:first") – seleciona o primeiro elemento **\<li> de um elemento \<ul>**
* $(":even") – seleciona todos os **elementos pares** (utilizável em tabelas, listas e afins)
* $(":odd") – seleciona todos os **elementos ímpares** (utilizável em tabelas, listas e afins)
            

## Eventos 

Eventos são as ações disparadas no momento em que é escutada. No JavaScript Vanila usamos algo parecido: "addEventListener".  

Exemplo:

        $("p").text("Hello World")
    
        $("h1").addClass("titulo-principal")


# Métodos de Carregamento e Inicialização

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

### Métodos para adicionar e modificar atributos usando o .attr()

    Recebe dois argumentos: o atributo e seu valor. 

    $('a').attr('href', 'https://www.google.com.br');

#### Eventos de mouse:

    $("h1").on("mouseenter", function(){
        alert("mouse no h1");
    })

    $("p").one("mouseenter", function(){
        alert("mouse no li");
    })

#### Eventos de click, show e hide:

    $("#show").click(function(){
        $("p").show()
    });

    $('#hide').click(function(){
    $('p').hide();
});

#### Toggle

    $('#toggle').click(function(){
        $('.dois').toggle();
    });

#### FadeIn

    $('#div1').fadeIn();

#### FadeOut

    $('#div2').fadeOut("slow");

#### FadeToggle

    $('#div3').fadeToggle(2000);


