let temporizador = document.getElementById("temporizador");
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;

function iniciar() {
    cronometro = setInterval(() => {
        _timer();
    }, 1000)
}

function pausar() {
    clearInterval(cronometro);
}

function zerar() {
    pausar();
    segundos = 0;
    minutos = 0;
    horas = 0;
    _atualizarTempoNaTela();
}

function _timer() {
    segundos++;

    if(segundos == 60) {
        minutos++;
        segundos = 0;
    }
    
    if(minutos == 60) {
        horas++;
        minutos = 0;
    }

    if(horas == 24) {
        horas = 0;
    }

    _atualizarTempoNaTela();
}

function _atualizarTempoNaTela() {
    let ss = (segundos < 10) ? "0" + segundos : segundos;
    let mm = (minutos < 10) ? "0" + minutos : minutos;
    let hh = (horas < 10) ? "0" + horas : horas;

    temporizador.textContent = `${hh}:${mm}:${ss}`;
}