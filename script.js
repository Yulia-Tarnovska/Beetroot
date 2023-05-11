let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputValue');
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let displayWeather = document.querySelector('.displayWeater');
let closeWeather = document.querySelector('#close');

button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/3.0/onecall?${inputvalue.value}&exclude=hourly&units=metric&appid=30a0bf9396d57b3c12d1327ff27eb815')
  .then(response => response.json())
  .then(displayData)
  .catch(err => alert('Wrong city name'));
})

closeWeather.addEventListener('click', function() {
  displayWeather.style.display='none';
})

const displayData = (weather) => {
  if(weather.main.temp) {
  displayWeather.style.display = 'block';
  temp.innerHTML = `${weather.main.temp}℃`
  desc.innerHTML = `${weather.weather[0].description}`
  }
}