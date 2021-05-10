'use strict'

const horaContainer = document.querySelector('.hora');
const fechaContainer = document.querySelector('.fecha');
const mensajeContainer = document.querySelector('.text');
const updateHora = setInterval(function() {
    const date = new Date();
    let time = (date.getHours >= 12) ? "PM" : "AM"
    horaContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${time}`
    fechaContainer.innerHTML = `${date.toDateString()}`

    if (date.toDateString()[8] === "2" && date.toDateString()[9] === "0") {
        mensajeContainer.innerHTML = "Hoy es tu aniversario"
    }
}, 1000);