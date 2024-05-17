const campoTipoPJ = document.getElementById ("tipoPessoaJuridica");
const campoTipoPF = document.getElementById ("tipoPessoaFisica");
const botaoSalvar = document.getElementById ("botao-salvar");

function apresentarCamposPj(){
    apresentarCampos("campos-pj");
    removerCampos("campos-pf");
}

function apresentarCamposPf(){
    apresentarCampos("campos-pf");
    removerCampos("campos-pj");
}


function apresentarCampos(elementoParaRemoverClasse){
    const divs = document.getElementsByClassName (elementoParaRemoverClasse);
    let indice = 0;
    while (indice < divs.length){
        let div = divs[indice];
        div.classList.remove("inactive");
        indice = indice + 1;
    }
}

function removerCampos(tipoPessoa){
    const divs = document.getElementsByClassName (tipoPessoa);
    let indice = 0;
    while (indice < divs.length){
        let div = divs[indice];
        div.classList.add("inactive");
        indice = indice + 1;
    }
}

function salvarCliente(){
    debugger;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const apelido = document.getElementById("apelido").value;
    const razaoSocial = document.getElementById("razaoSocial").value;
    const cnpj = document.getElementById("cnpj").value;

   
    // Criar um elemento de tr no javascript
    const novaLinha = document.createElement("tr");
    
    // Criar um elemento de coluna para o código
    const novaCelulaCodigo = document.createElement("td");
    // Definir o conteúdo dessa coluna do código
    novaCelulaCodigo.innerHTML = "2";
    
    // Criar um elemento de coluna para o nome
    const novaCelulaNome = document.createElement("td");
    // Definir o conteúdo dessa coluna do nome com o nome que o usuário digitou
    novaCelulaNome.innerHTML = nome;

    // Adicionar as colunas na linha
    novaLinha.appendChild(novaCelulaCodigo);
    novaLinha.appendChild(novaCelulaNome);

    // Obter a tabela para adicionarmos a nova linha criada
    const tabela = document.getElementsByClassName("table")[0];
    // Adicionar a linha na tabela
    tabela.appendChild(novaLinha);

}

campoTipoPJ.onclick = apresentarCamposPj;
campoTipoPF.onclick = apresentarCamposPf;
botaoSalvar.onclick = salvarCliente;