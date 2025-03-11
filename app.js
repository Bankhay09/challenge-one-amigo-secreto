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

