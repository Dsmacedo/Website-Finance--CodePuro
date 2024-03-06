const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let tempoTotalSegundos = 17 * 60 + 26; // 17 minutos e 26 segundos

const atualizaTempo = () => {
    let hrs = Math.floor(tempoTotalSegundos / 3600);
    let mins = Math.floor((tempoTotalSegundos - (hrs * 3600)) / 60);
    let segs = tempoTotalSegundos % 60;

    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (segs < 10) segs = '0' + segs;

    horas.textContent = hrs + ':';
    minutos.textContent = mins + ':';
    segundos.textContent = segs;

    if (tempoTotalSegundos > 0) {
        tempoTotalSegundos--;
    } else {
        // Quando o cronômetro chegar a 0, reinicie o tempo para 17 minutos e 26 segundos
        tempoTotalSegundos = 17 * 60 + 26;
    }
};

// Atualize o tempo a cada segundo
setInterval(atualizaTempo, 1000);