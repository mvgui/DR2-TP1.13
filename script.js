//Entrada
let numero = Number(prompt("Digite um número:"));

//Processamento
let numeroConvertido = Number(Math.floor(numero / 60));
let resto = Number(numero % 60);
//Função % pega apenas o resto da divisão
console.log("O número equivale a " + numeroConvertido + "h" + resto + "min.");

/*Crie um programa que receba um número digitado pelo usuário 
e exiba a quantidade equivalente de horas e minutos.
Ex: 131 equivalem a 2 horas e 11 minutos.
*/
