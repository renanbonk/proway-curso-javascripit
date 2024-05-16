// obter o primeiro elemento que contenha o id "idioma-ingles"
const botaoIngles = document.querySelector("#idioma-ingles");

// obter o elemento que contenha o id "idioma-portugues"
const botaoPortugues = document.getElementById("idioma-portugues");

// obter o primeiro elemento que contenha o id "idioma-espanhol"
const botaoEspanhol = document.querySelector("#idioma-espanhol");

//obter os elementos da tag h1
const elementosH1 = document.getElementsByTagName("h1");

//obter a primeira tag h1
const h1 = elementosH1[0];

function removerClassesDeIdiomaDoTitulo(){
    h1.classList.remove("titulo-ingles");
    h1.classList.remove("titulo-portugues");
    h1.classList.remove("titulo-espanhol");
}


function alterarIdiomaIngles(){
    h1.innerHTML = "Hello World";
    removerClassesDeIdiomaDoTitulo();
    h1.classList.add("titulo-ingles");

}

function alterarIdiomaPortugues(){   
    //alterar o conteudo do elemento h1
    h1.innerHTML = "Olá mundo";
    removerClassesDeIdiomaDoTitulo();
    h1.classList.add("titulo-portugues");
}

function alterarIdiomaEspanhol(){
    h1.innerHTML = "Hola mundo";
    removerClassesDeIdiomaDoTitulo();
    h1.classList.add("titulo-espanhol");
}


botaoEspanhol.onclick = alterarIdiomaEspanhol;
botaoPortugues.onclick = alterarIdiomaPortugues;
botaoIngles.onclick = alterarIdiomaIngles;