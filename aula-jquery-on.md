O que é o Jquery e quando usá-lo
Como instalar no projeto via CDN
Seletores do Jquery X seletores do objeto document
Métodos para manipular e capturar atributos do HTML
Eventos do browser
Eventos do teclado e do mouse
Eventos em formulários
Efeitos (Ex: Toggle, Hide, FadeIn e FadeOut)
Sugestão: mostrar alguma outra biblioteca que use o Jquery para efeitos (ex: https://pixelcog.github.io/parallax.js/)



# jQuery é um framework de JavaScript
    É um compilado de métodos prontos em JavaScript para escrever menos código e fazer mais em menos tempo. 


### Alguns recursos que o jQuery oferece:

*Seleção e manipulação de elementos HTML
*Manipulação de CSS
*Efeitos e animações
*Navegação pelo DOM
*AJAX de forma simples
*Eventos

### Como instalar o jQuery via CDN

    Na instalação via CDN, usar o código compactado.

        npm install jquery

    Para incluir no código:

        <script src="jquery.min.js"></script>


        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Demo</title>
        </head>
        <body>
            <script src="jquery.js"></script>
            <script>
        
            // Aqui vai o código.
        
            </script>
        </body>
        </html>


### Seletores do Jquery X seletores do objeto document

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
            



