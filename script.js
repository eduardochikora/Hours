setInterval(() => { 
    let hora = document.querySelector('#hora')
    let minutos = document.querySelector('#minutos')
    let segundos = document.querySelector('#segundos')
    let date = new Date();
    hr = date.getHours();
    hora.textContent = formatTime(hr);
    min = date.getMinutes();
    minutos.textContent = formatTime(min);
    seg = date.getSeconds();
    segundos.textContent = formatTime(seg);
    
}, 100)

function formatTime(segundos) {
    return segundos < 10 ? `0${segundos}` : segundos;
}

function formatTime(minutos) {
    return minutos < 10 ? `0${minutos}` : minutos;
}

function formatTime(hora) {
    return hora < 10 ? `0${hora}` : hora;
}

