const botaoNumeroPositivo = document.getElementById("numeroPositivo");
const botaoNumeroPar = document.getElementById("numeroPar")
const botaoNumeroNumeroMaior8000 = document.getElementById("numeroMaior8000")
const textareaResultado = document.getElementById("resultado");
const inputNumero1 = document.getElementById("numero1");
const imagem = document.getElementsByTagName("img")[0];


function verificarNumeroPositivo() {
    const numero1 = parseInt(inputNumero1.value);
    //se número1 for maior que 0 então apresentará número positivo
    if (numero1 > 0) {
        textareaResultado.value = textareaResultado.value + numero1 + (" Número positivo\n");

        //se número1 for menor que 0 então apresentará número negativo
    } else if (numero1 < 0) {
        textareaResultado.value = textareaResultado.value + numero1 + (" Número não é positivo\n");
    } else {
        textareaResultado.value = textareaResultado.value + numero1 + (" Número neutro\n");
    }
}

function verificarNumeroPar(){
    const numero1 = parseInt(inputNumero1.value);
    if (numero1 % 2 === 0) {
        textareaResultado.value = textareaResultado.value + numero1 + (" Número é Par\n");
    } else {
        textareaResultado.value = textareaResultado.value + numero1 + (" Número não é Par\n");
    }
}

function verificarNumeroMaior8000(){
    const numero1 = parseInt(inputNumero1.value);
    if (numero1 === 8001){

        //ocultar o botão de numero maior que 800
        botaoNumeroNumeroMaior8000.style.display = "none";

        //alterar a refencia da imagem da tag img para o gif do vegeta
        imagem.setAttribute("src", "https://i.giphy.com/MvedbKot538WY.webp");
      
    }
}

function reseyButtonNumeroMaior8000(){
    const numero1 = parseInt(inputNumero1.value);
    if (numero1 !== 8001){

        //apresentar o de numero maior que 8000
        botaoNumeroNumeroMaior8000.style.display = "inline-block";

        //alterar a refencia da imagem da tag img para nenhuma imagem
        imagem.setAttribute("src", "");
      
    }
}
// Quando o usuário soltar a tecla apertada irá fazer a verificação se o código é 8001 e ocultar o gif
inputNumero1.onkeyup = reseyButtonNumeroMaior8000;

botaoNumeroPositivo.onclick = verificarNumeroPositivo;
botaoNumeroPar.onclick = verificarNumeroPar;
botaoNumeroNumeroMaior8000.onclick = verificarNumeroMaior8000; 
