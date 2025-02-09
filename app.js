let lista = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo').value;
    if (nomeDigitado != '' && !lista.includes(nomeDigitado)) {
        lista.push(nomeDigitado);
        console.log(lista);
        listaAmigos();
    } else {
        alert('digite um nome válido ou o nome já existe na lista')
    }
    limparCampo();
}

function listaAmigos(tag, texto) {
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = '<ul>' + lista.map(nome => `<li>${nome}</li>`).join('') + '</ul>';
}

function limparCampo() {
    nomeDigitado = document.getElementById('amigo');
    nomeDigitado.value = '';
}

function sortearAmigo() {
    if (lista.length === 0) {
        alert('A lista está vazia! Adicione amigos primeiro.');
        return;
    }
    let amigoSorteado = Math.floor(Math.random() * lista.length);
    console.log('Amigo sorteado: ', lista[amigoSorteado]);
    alert('Amigo sorteado: ' + lista[amigoSorteado]);
    window.location.reload(true);
}

