/* Elabore um algoritmo que tenha dois valores para as variáveis A e B,
efetue a troca dos valores de forma que a variável A passe a ter o valor da
variável B, e que a variável B passe a ter o valor da variável A. Ao final,
imprima os valores com a troca efetuada.*/

let a = 1;
const temp = a;
let c = 3;
console.log(` Valor do a = ${a} \n Valor do c = ${c}`);
console.log(" ");
a = c
c = temp;
console.log(` Valor do c = ${a} \n Valor do a = ${c}`)

/*Elabore um algoritmo que receba o salário de um funcionário, calcule e
mostre o novo salário,sabendo-se que este salário sofreu um aumento de 25%.*/

let salario = 1200;
const aumento = 25;
let Salario = ((salario*aumento)/100);
console.log(Salario);

/*Elabore um algoritmo que receba o salário de um funcionário, calcule e
mostre o novo salário,sabendo-se que este salário sofreu um aumento de 25%.*/

const NascAno = 2002
console.log(NascAno)
let date = new Date();
let AnoAtual = date.getFullYear()
let idade = AnoAtual - NascAno;
console.log(idade);

/*Elabore um algoritmo que receba o ano de nascimento de uma pessoa, e o ano atual, calcule e
mostre:
a. A idade dessa pessoa em anos
b. A idade dessa pessoa em meses
c. A idade dessa pessoa em dias
d. A idade dessa pessoa em semanas
Obs: Considere que o ano a ser informado deverá ser menor ou igual ao ano atual
*/
const ano_nascimento = 2000;
let data = new Date();
let AnoAtual = date.getFullYear();
let idade = AnoAtual - ano_nascimento;
console.log("Idade em anos", idade);
let MesesIdade = idade * 12;
console.log("Idade em meses", MesesIdade);
let DiasIdade = idade * 365;
console.log("Idade em dias", DiasIdade);
let SemanasIdades = idade * 52;
console.log("Idade semanas", SemanasIdades);

/*Faça um algoritmo que receba o peso e a altura de uma pessoa e
calcule o índice de massa corpórea. Ele mede a relação entre peso e altura Math.floor()*/

let kg = 50;
let H = 1.67;
let imc = kg/(H * H);
console.log("Indice de massa corporal = ", Math.floor(imc));

/*Alguns países medem temperaturas em graus Celsius, e outros em graus
Fahrenheit. Faça um algoritmo para ler uma temperatura em Celsius e imprimi-la em Fahrenheit.*/

let c = 40;
let conversao = c * 1.8 + 32;
console.log("Celsius :", c, " \n Fahrenheit :", conversao );

/*Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas.*/

let PesoQ = 50.7;
let PesoG = PesoQ * 10000;
console.log("Peso em gramas :", PesoG);

/*Faça um algoritmo que receba as horas e converta em minutos*/
let h = 5;
let min = h * 60;
console.log("Horas pra minutos: ",min);

let minHora = min/60;
console.log("Minutos para horas: ", minHora);

/*Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibirquantos dias de vida ela possui. 
Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoa com 19 anos possui 6935 dias de
vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS*/

nome = 'Maria';
idade = 23;
let conversor = idade * 365;
console.log(nome, "voce já viveu :", conversor );

// Faça um programa que receba a largura e a altura de uma parede em
// metros, e calcule a sua área e a quantidade de tinta necessária para
// pintá-la, sabendo que cada litro de tinta, pinta uma área de 2m2.

H = 5;
larg = 5;
area = H * larg;
tinta = area / 2;
console.log("A area da parede é : ", area);
console.log("É necessario ", tinta, "litros de tinta");
