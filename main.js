const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for( let i = 0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");

        }
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new Date("2025-12-28T23:59:59");
let tempoAtual = new Date();


for(let i=0; i< contadores.length; i++){
    contadores[i].textContent = calcularTempo(Tempo[i]);
}
contadores[0].textContent = calcularTempo(tempoObjetivo1);

function calcularTempo(tempoObjetivo1){
    let tempoAtual = new Date();
    let tempoAtual = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempofinal / 1000)
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + "dias"
    + horas + "horas"
    + minutos + "minutos"
    + segundos + "segundos";
}