const horas = document.getElementById('horas');
const minutos = document.getElementById('min');
const segundos = document.getElementById('segundos');

function currentTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    horas.innerText = hours;
    minutos.innerText = minutes;
    segundos.innerText = seconds; 
}

setInterval(currentTime, 1000);