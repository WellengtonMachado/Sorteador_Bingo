
var listaNumeros = [];
var listaSorteados = [];

for (let index = 1; index <= 90; index++) {
    listaNumeros.push(index);
}

function SortearNumero() {
    var visualizarNumero = document.getElementById('numeroSorteado');
    var jaSorteados = document.getElementById('listaSorteados');

    var indiceSorteado = Math.floor(Math.random() * listaNumeros.length);

    var numeroSorteado = listaNumeros[indiceSorteado];

    listaNumeros.splice(indiceSorteado, 1);

    listaSorteados.push(numeroSorteado);

    visualizarNumero.innerHTML = numeroSorteado;
    jaSorteados.innerHTML = listaSorteados.join(' - ');
}

