const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationVar = document.getElementById("location");
const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");

async function getWeather (city) {
  try{
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    return data;
  }
  catch(e) {
    console.error(e);
    return null;
}
}

async function showWeather(city) {
  let data = await getWeather(city);
  if (!data){
    return alert("Something went wrong, please try again later")
  }

 
  mainTemperature.textContent = data.main?.temp !== undefined ? `${data.main.temp}°C` : 'N/A';
  
  feelsLike.textContent = data.main?.feels_like !== undefined ? `Feels like: ${data.main.feels_like}°C` : 'N/A';
  
  humidity.textContent = data.main?.humidity !== undefined ? `Humidity: ${data.main.humidity}%` : 'N/A';
  
  wind.textContent = data.wind?.speed !== undefined ? `Wind: ${data.wind.speed} m/s` : 'N/A';
  
  windGust.textContent = data.wind?.gust !== undefined ? `Gust: ${data.wind.gust} m/s` : 'N/A';
  
  weatherMain.textContent = data.weather?.[0]?.main !== undefined ? data.weather[0].main : 'N/A';
  
  
  locationVar.textContent = data.name !== undefined ? data.name : 'N/A';

  
  if (data.weather && data.weather[0]) {
    weatherIcon.src = data.weather[0].icon; 
    weatherIcon.alt = data.weather[0].description;
  }
}

getWeatherBtn.addEventListener("click",() => {showWeather(citySelect.value)})
