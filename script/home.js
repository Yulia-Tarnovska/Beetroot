let reserveButton = document.getElementById('reserveButton');
let reserveCloseButton = document.getElementById('reserveCloseButton');
let reserveAlert = document.getElementsByClassName('reserve-alert')[0];
let body = document.getElementById('home');

reserveButton.addEventListener('click', (e) => {
    e.preventDefault();
    reserveAlert.style.display = 'block';
    });


reserveCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    reserveAlert.style.display = 'none';
    });


let timeInput = document.getElementById('time');
let timeSlot = document.getElementById('timeOption');

let startTime = timeSlot.value;
for(let slot = 2; slot <= 24; slot++){
    let tSlot = document.createElement('option');
    tSlot.value = slot;
    tSlot.innerHTML = `${slot}:00`
    tSlot.style.color = 'white';
    timeInput.appendChild(tSlot);
}