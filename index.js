/* 
1.

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
  nesse código ele vai pedir um número para o usuário, após é testado esse número do usuário que se for par, ele vai ler o "if", "passsa no teste" se não, vai aparecer a mensagem que ele não passou no teste.

  2.

  let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

ele vai pedir para o usuário uma fruta, dependendo da resposta ele vai imprimir um preço diferente, formando uma frase que o preço da fruta com o nome e preço são... por exemplo: O preço da fruta, maçã, é , R$ 2.25. Caso tirasse o break do item pêra, seria dado o resultado do último item que é default.

3.

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a primeira linha está pedindo para o usuario atribua um valor a caixinha. Caso o usuário digite 10 o if vai ser lido e o usuário vai passar no teste pois 10 é maior que 0 mas, caso fosse um 10 negativo ele não leria pois é um número menor que 0. Não terá erros pois escopo só se aplica a funções. 
*/

//1.

let idade = Number(prompt("Qual é a sua idade?"))

if ( idade > 18 ) {
    console.log("Você está habilitado á dirigir")
} else {
    console.log("Você não está habilitado á dirigir")
}

//2.

let turno = prompt("Por favor, digite M (matutino), V (vespertino) ou N (noturno)")
if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
}

//3

let turnos = prompt("Por favor, digite M (matutino), V (vespertino) ou N (noturno):")

switch (turnos) {
case 'M' :
    console.log('Bom dia!')
 break
case 'V' :
    console.log('Boa tarde!')
 break
case 'N' :
    console.log('Boa noite!')
 break
default :
console.log('Turno não encontrado')
}

//4
/*
let genero = prompt("Escolha um gênero de filme para assistirmos:")
let preco = Number(prompt("Qual será o preço do ingresso?(em número)"))
if (preco < 15 && genero === 'Fantasia') {
    console.log("Bom filme :)")
} else {
    console.log("Escolha outro filme :(") 
}
 */
//DESAFIOS

let genero = prompt("Escolha um gênero de filme para assistirmos:")
let preco = Number(prompt("Qual será o preço do ingresso?(em número)"))

if (preco < 15 && genero === 'Fantasia') {
     console.log("Bom filme :)")
     let lanche = prompt("Qual lanchinho você vai escolher?")
     console.log("Aproveite o seu", lanche)
} else {
    console.log("Escolha outro filme :(")
}

