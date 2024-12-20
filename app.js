/*Desculpe pelo atraso na entrega! 

No começo, pensei em usar o Set porque vi que ele utilizava um algoritmo de hashing internamente, 
mas não me aprofundei porque parecia uma solução comum, rs. 
Porém, depois de conversar com um amigo sobre o problema, ele sugeriu de 
gerar os números aleatórios com base em algum tipo de entropia. 
No início, achei a ideia super legal, mas me empolguei e me perdi um pouco no raciocínio! 
Aí, percebi que, na verdade, em primeiro momento não precisava gerar números aleatórios mais rápido, 
mas sim de ser mais eficiente, no meu caso, um array garantido de números não repetidos. Então,
acho que o certo é começando por um array de 1 a 60, no exemplo. Ainda, se quiser 6 números aleatórios,
basta embaralhar os 6 primeiros elementos do array com a troca de índices.*/

/*É uma solução simples, a complexidade tá mais em entender o algoritmo de embaralhamento, essencialmente
a própria computação e como o interpretador lida com os elementos do array.
Nunca me aprofundei muito em qualquer complexidade de algoritmos porque não tive interesse mesmo, mas 
gostei desse problema.*/

/*Não sei se a solução é essa, mas tá aqui a minha*/

function gerarNumerosNaoAleatorios(numero) {
  // Array com os números de 1 a 60 já sem repetição.
  var numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60,
  ];

  const inicio = performance.now();

  //Aqui, dentro de um espaço de 6 números, você embaralha os 60 usando a troca de índices.
  //Afeta só os 6 primeiros números do array, mas no intervalo de 0 a 59.
  for (let i = numero - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * 60);
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }
  // Finaliza o cronômetro
  const fim = performance.now();

  console.log(`Tempo de execução: ${fim - inicio}ms`);
  // Retornar os 6 primeiros números do array embaralhado.
  return numeros.slice(0, 6);
}
