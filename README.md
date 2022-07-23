# Algoritm Search
Uma biblioteca que faz buscas baseadas em algoritmos!

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

elemento: 6
array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Busca simples -> 
array[0] === 6, array[1] === 6, array[2] === 7... E assim por diante ate chegar ao 6 porem nos pior dos casos ele percorrerá o array ate o ultimo elemento.

Busca binaria ->
Diferente da busca simples, aqui temos que definir 4 valores, indice menor, indice maior, indice do meio e indice de chute.
Assim toda vez que descobrimos que nao esta em uma metade do array o nosso elemento nos iremos redefinir essas variaveis. Por exemplo:

array[4] > 6... O elemento do indice 4 é o valor 5 logo todos abaixo desse indice nao nos interessa entao nos iremos modificar a variavel de indice menor para 5 e caso fosse ao contrario nos mudariamos a variavel de indice maior, as variaveis de meio e chute tambem mudam conforme essas, agora nos vamos pegar a metade novamente...

array_depois_da_primeira_busca: [5, 6, 7, 8, 9, 10]

array[3] < 6... Agora nos vamos remover do 3 para cima e vamos atualizar nossas variaveis novamente, o indice maior agora sera 2 e nossa metade e chute também muda!

array_depois_da_segunda_busca: [5, 6, 7]

array[1] === 6... E aqui nossa busca acaba! Caso fosse o elemento 5 ou 7 nossa busca iria acabar na proxima busca pois iriamos verificar o meio novamente, e ali iriamos saber se fosse maior a verificacao array[1] > 6 entao temos o 7 e array[1] < 6 teriamos o 5...

Caso o entendimento esteja ainda complicado, recomendo que veja o codigo e leia o livro "Entendendo Algoritmos" de Aditya Y. Bhargava.

OBS: A busca binaria só é possivel com arrays ordenados!