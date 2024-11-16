/*Desculpe pelo atraso na entrega! 

No começo, pensei em usar o Set porque vi que ele utilizava um algoritmo de hashing internamente, 
mas não me aprofundei porque parecia uma solução comum, rs. 
Porém, depois de conversar com um amigo sobre o problema, ele sugeriu de 
gerar os números aleatórios com base em algum tipo de entropia. 
No início, achei a ideia super legal, mas me empolguei e me perdi um pouco no raciocínio! 
Aí, percebi que, na verdade, em primeiro momento não precisava gerar números aleatórios mais rápido, 
mas sim de ser mais eficiente, no meu caso, um array garantido de números não repetidos. Então,
acho que o certo é começando por um array de 1 a 60, neste exemplo.

Agora o math.random vai gerar um número aleatório entre 0 e 1 e multiplicar pelo tamanho do array. 
Nesse processo do algoritmo Fisher-Yates, há a troca de elementos no array com base nos índices 
gerados aleatoriamente, e não diretamente nos valores dos números. Acho que isso reduz o tempo de execução
porque o interpretador já tem acesso direto aos endereços de memória de cada elemento e não precisa buscar por
valores diretamente.*/

/*É uma solução simples, mas acho que resolve um pouco o problema de eficiência.
Nunca me aprofundei muito em qualquer complexidade de algoritmos porque não tive interesse mesmo, mas 
gostei desse problema.*/

function gerarNumerosNaoAleatorios() {
  // Array com os números de 1 a 60 já sem repetição.
  var numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60,
  ];

  const inicio = performance.now();

  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }
  // Finaliza o cronômetro
  const fim = performance.now();

  console.log(`Tempo de execução: ${fim - inicio}ms`);
  // Retornar os 6 primeiros números do array embaralhado.
  return numeros.slice(0, 6);
}
