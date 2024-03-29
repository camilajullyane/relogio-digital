const horas = document.getElementById('horas');
const minutos = document.getElementById('min');
const segundos = document.getElementById('segundos');

function time() {
    const date = new Date();

    let hours = date.getHours().toString().padStart(2, 0);
    let minutes = date.getMinutes().toString().padStart(2, 0);
    let seconds = date.getSeconds().toString().padStart(2, 0);

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds; 
}

setInterval(time, 1000);