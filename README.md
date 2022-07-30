# Algoritmos
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Uma biblioteca baseadas em algoritmos!

Para importar em seu projeto seria...

```javascript
const algoritmos = require('algoritmos')
```

##Indice

* [Search](#Search)
* [Badges](#badges)

## Search

#### Busca binaria

Para implementar...

Caso voce queira procurar um numero com mais agilidade (quanto mais o array aumenta mais rapida a busca fica!) pode usar da forma abaixo :)

```javascript
const response = binarySearch(arrayOrdenado, elementoParaBuscar)
```

A busca binaria funciona da seguinte forma...
Se temos um array (sempre ordenado) e tentamos achar dado um numero em qualquer posicao, no pior dos cenarios teremos que percorrer o array por completo. Com a busca binaria a cada busca nos dividimos o array.

Se comecamos com 10 numeros em um array:

Antes da primeira busca nos ja sabemos o inicio (0) e o final que é o valor do array completo, durante a primeira busca nos cortamos o array ao meio e verificamos em qual das duas partes está nosso elemento de busca se estiver acima do meio nos podemos jogar do meio para baixo completamente fora, logo para achar o numero 6 com 10 numeros em um array iria acontecer da seguinte forma...

```javascript
const elemento = 6
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Busca simples ->

```javascript
if (array[0] === 6) {...
if (array[1] === 6) {...
if (array[2] === 7) {...
```

E assim por diante ate chegar ao 6 porem nos pior dos casos ele percorrerá o array ate o ultimo elemento.

Busca binaria ->
Diferente da busca simples, aqui temos que definir 4 valores, indice menor, indice maior, indice do meio e indice de chute.
Assim toda vez que descobrimos que nao esta em uma metade do array o nosso elemento nos iremos redefinir essas variaveis. Por exemplo:

```javascript
if (array[4] > 6) {...
```

O elemento do indice 4 é o valor 5 logo todos abaixo desse indice nao nos interessa entao nos iremos modificar a variavel de indice menor para 5 e caso fosse ao contrario nos mudariamos a variavel de indice maior, as variaveis de meio e chute tambem mudam conforme essas, agora nos vamos pegar a metade novamente...

```javascript
const array_depois_da_primeira_busca = [5, 6, 7, 8, 9, 10]

if (array[3] < 6) {...
```

Agora nos vamos remover do 3 para cima e vamos atualizar nossas variaveis novamente, o indice maior agora sera 2 e nossa metade e chute também muda!

```javascript
const array_depois_da_segunda_busca = [5, 6, 7]

if (array[1] === 6) {...
```

E aqui nossa busca acaba! Caso fosse o elemento 5 ou 7 nossa busca iria acabar na proxima busca pois iriamos verificar o meio novamente, e ali iriamos saber se fosse maior a verificacao array[1] > 6 entao temos o 7 e array[1] < 6 teriamos o 5...

OBS: A busca binaria só é possivel com arrays ordenados!

##Sort

####Quicksort

Para implementar...

Caso voce queira ordernar seu array com mais agilidade pode usar da forma abaixo :)

```javascript
const response = quicksort(arrayDesordenado)
```

O quicksort utiliza como base a recursividade, assim quando temos um array como por exemplo:

```javascript
const array = [2, 4, 3, 1, 5, 6, 9, 7. 8]
```

Nós decidimos um pivô, no caso podemos escolher a primeira posição do array (neste caso é 2), então nos verificamos o resto do array e adicionamos em outros arrays dividindo em maiores e menores que o pivô. Depois criamos um novo array, com os menores, o pivo ao meio, e os maiores por ultimo. E assim chamamos para os dois arrays a função novamente.

Nesse algoritmo nos utilizamos a logica de ir ate o caso-base ou de um jeito mais simples ainda, iremos dividir o array (não importa o tamanho) em 2, se começarmos com o array declarado nessa seção ele ficará da seguinte forma depois de filtrar os maiores e menores:

**Relembrando que nosso pivô é primeira posição!**

```javascript
const maiores = [4, 3, 5, 6, 9, 7, 8]
const menores = [1]
```
E assim o codigo funciona ate o final...

O pulo do gato desse algoritmo é que ele não executa de fato nada ate chegar ao final, quando chegamos ao final depois de dividir o array o maximo possivel, neste momento, ele executa de fato o codigo, ao contrario somando ordenadamente todos os arrays e agora sim temos nosso array ordenado!

##Agradecimento e Creditos

Agradeço totalmente ao _**Aditya Y. Bhargava**_ por escrever um livro tão necessario como _**Entendendo Algoritmos**_. Essa biblioteca serve como um estudo para mim que estou aprendendo a aplicar em meu dia a dia!

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

<a href="https://github.com/graxz/algoritmos/graphs/contributors"><img src="https://opencollective.com/algoritmos/contributors.svg?width=890&button=false" /></a>
