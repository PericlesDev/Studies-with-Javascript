var nome = window.prompt("Qual é o seu nome?");
window.alert('É um grande prazer em te conhecer, ' + nome); // Concatenação


var n1 = Number.parseInt(window.prompt("Digite um número: "));
var n2 = Number.parseFloat(window.prompt("Digite outro número: "));
var soma = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`) // Concatenação
// (number + number) para adição
// (string + string) para concatenação
// (parseInt) para números inteiros
// (parseFloat) para números reais
// (Number) para ambos números inteiros ou reais


// Formatando Strings

var s = 'Javascript'
'Eu estou aprendendo J' // não faz interpolaçao
'Eu estou aprendendo' + J // usa concatenação
`Eu estou aprendendo ${J}` // usa template string