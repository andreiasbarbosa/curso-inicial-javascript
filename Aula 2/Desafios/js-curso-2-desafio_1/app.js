//Tag h1
let titulo = document.querySelector ('h1');
titulo.innerHTML = ('Hora do desafio');

//Verificar botão Console
function verificaBotaoConsole (){
    console.log ('O botão foi clicado');
}

//Botão alerta
function alertaNaTela () {
    alert ('Eu amo JS');
}

//Botão prompt pedir uma cidade
function qualSuaCidade () {
    let cidade = prompt('Cite uma cidade do Brasil');
    alert (`Estive em ${cidade} e lembrei de você`);
}

//Soma entre 2 números
function somaNumeros () {
    let n1 = parseInt (prompt ('Digite um número'));
    let n2 = parseInt (prompt ('Digite  mais um numero'));
    let soma = n1+n2;
    alert (`O resultado de ${n1}+${n2} é ${soma}`);
}