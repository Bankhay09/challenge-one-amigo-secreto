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

    amigos.forEach(function(nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um único amigo
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Por favor, adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }

    // Sorteia um amigo aleatório
    const aleatorio = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[aleatorio];

    // Exibe o nome da pessoa sorteada e oculta a lista de amigos
    exibirResultadoSorteio(sorteado);

    // Esconde a lista de amigos
    document.getElementById('listaAmigos').style.display = 'none';
}

