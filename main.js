const form = document.getElementById(`form-lista`);

let linhas = ``;

form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();    
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById(`nome-contato`);
    const inputNumeroContato = document.getElementById(`numero-contato`);
    
    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td><img src="./imagens/OIP (1).jpg" alt="Desenho telefone"></td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = ``;
    inputNumeroContato.value = ``;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}