// Constante para o total de números
const TOTAL_NUMEROS = 90;

// Estado do sorteador
const estado = {
    numerosDisponiveis: [],
    numerosSorteados: []
};

function inicializarNumeros() {
    estado.numerosDisponiveis = Array.from({ length: TOTAL_NUMEROS }, (_, i) => i + 1);
    estado.numerosSorteados = [];
    atualizarUI();
}

function atualizarUI() {
    const numeroDisplay = document.getElementById('numeroSorteado');
    const listaDisplay = document.getElementById('listaSorteados');
    const contadorDisplay = document.getElementById('contadorNumeros');
    
    numeroDisplay.textContent = estado.numerosSorteados[estado.numerosSorteados.length - 1] || '00';
    listaDisplay.innerHTML = estado.numerosSorteados
        .map((numero) => `<span class="bola">${numero}</span>`)
        .join('');
    contadorDisplay.textContent = `${estado.numerosSorteados.length} de ${TOTAL_NUMEROS}`;
}

function SortearNumero() {
    if (estado.numerosDisponiveis.length === 0) {
        alert('Todos os números já foram sorteados!');
        return;
    }

    const indice = Math.floor(Math.random() * estado.numerosDisponiveis.length);
    const numeroSorteado = estado.numerosDisponiveis.splice(indice, 1)[0];
    
    estado.numerosSorteados.push(numeroSorteado);
    atualizarUI();
}

function resetarNumero() {
    inicializarNumeros();
}

// Inicializar ao carregar a página
inicializarNumeros();

