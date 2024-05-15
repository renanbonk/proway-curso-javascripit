const elementoh1 = document.querySelector("h1");

function apresentarDados(){
    const elementoNome = document.querySelector("#nome")
    const elementoAltura = document.querySelector("#altura");
    const elementoPeso = document.querySelector("#peso");

    let nome = elementoNome.value;
    let altura = parseFloat(elementoAltura.value);
    let peso = parseFloat (elementoPeso.value);
    let imc = peso / (altura* altura);

    alert("nome: " + nome + "\nIMC: " + imc);

}

// parseInt ("2") => converte o texto "2" para número inteiro
// parseFloat ("2.90") => converte o texto "2,90" para numero real