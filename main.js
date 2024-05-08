const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador"); // Corrected selector
const tempoObjetivo1 = new Date("2025-12-28T23:59:59");
const tempoObjetivo2 = new Date("2025-12-28T23:59:59");
const tempoObjetivo3 = new Date("2025-12-28T23:59:59");
const tempoObjetivo4 = new Date("2025-12-28T23:59:59");

const tempos = [
    tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4
]

for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calcularTempo(tempos[i]);
}

function calcularTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let diferenca = tempoObjetivo - tempoAtual; // Renamed variable
    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dia(s), " + horas + " hora(s), " + minutos + " minuto(s), " + segundos + " segundo(s)";
}