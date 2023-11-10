alert('Boas vindas ao jogo "Número Secreto"');
let numeroMaximo = 500;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//Infos do Console
console.log (numeroSecreto);
//console.log ('Valor do chute:',chute);
//console.log ('Comparar chute e número secreto:', chute, numeroSecreto);
//console.log ('Tentativas', tentativas); */

//enquanto chute Não for igual o número secreto
while (chute != numeroSecreto){
     chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

// Faça
     if (chute == numeroSecreto) {
          break;
     } else {
          if (chute > numeroSecreto) {
          alert (`O número secreto é menor que ${chute}`);
          } else {
          alert (`O número secreto é maior que ${chute}`);
          }
          //incrementar 1 : tentativas = tentativas + 1;
          tentativas++;
     }
}

// é a mesma coisa que o If abaixo. Esse : funciona como um "senão"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*if (tentativas > 1){
     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/

