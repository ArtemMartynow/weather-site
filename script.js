const citySearch = document.querySelector('.search-box__search')
const citybtn = document.querySelector('.search-box__btn')
const weatherImg = document.querySelector('.weather__img')

const apiKey = '017dcca072c394e0cb168bf9aa4ad74c'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  const data = await response.json()

  document.querySelector('.weather__city').innerHTML = data.name
  document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp) + '&#8451'
  document.querySelector('.humidity__percent').innerHTML = data.main.humidity + '%'
  document.querySelector('.wind__percent').innerHTML = data.wind.speed + 'km/h'

  if(data.weather[0].main == 'Clouds') {
    weatherImg.src='./images/1.png'
  }
  if(data.weather[0].main == 'Clear') {
    weatherImg.src='./images/2.png'
  }
  if(data.weather[0].main == 'Rain') {
    weatherImg.src='./images/3.png'
  }
}

citybtn.addEventListener('click', () => {
  checkWeather(citySearch.value)
}) 

citySearch.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    citybtn.click();
    citySearch.value = ""
  }
});