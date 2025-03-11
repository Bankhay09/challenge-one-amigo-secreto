// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo ao array e exibir a lista
function adicionarAmigo() {
    // Obtém o valor digitado no campo de entrada
    const nome = document.getElementById('amigo').value.trim();

    // Verifica se o campo não está vazio
    if (nome === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';

    // Exibe a lista de amigos
    exibirListaDeAmigos();
}

// Função para exibir os amigos na tela
function exibirListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

}