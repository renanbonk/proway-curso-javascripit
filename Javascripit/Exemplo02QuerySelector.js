//document.querySelector é ultilizado para encontrar o primeiro elemento que contenha o seletor
//document.querySelector("seletor";)
//Exemplos de seletores
//document.querySelector("idDoElemento"); selecionar o id
//document.querySelector(".nomeClassElemento"); selecionar o elemento que contenha a class
//document.querySelector("input"); Selecionar o elemento que contenha a tag

//criando uma constante elementoH1 que será atribuido o primeiro elemento que cotém a tag h1

const elementoh1 = document.querySelector("h1");

function apresentarNomeCompleto(){

//selecionar elemento que contenha o id nome
const elementoNome = document.querySelector("#nome");

//selecionar elemento que contenha o id sobrenome
const elementoSobrenome = document.querySelector("#sobrenome"); 

//Obter o valor digitado no campo que contém o id nome, ou seja, da constante elementoNome
let nome = elementoNome.value;
let sobrenome = elementoSobrenome.value;
let nomeCompleto = nome + " " + sobrenome;
alert ("Nome completo: " + nomeCompleto);
}