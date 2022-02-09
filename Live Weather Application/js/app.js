const condition = document.getElementById("condition");
const city = document.getElementById("city");
const country = document.getElementById("country");
const mainText = document.getElementById("main");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");

const cityInput = document.getElementById("city-input");
const historyElm = document.getElementById("history");
const masterHistory = document.getElementById("master-history");

const API_KEY = "6575b8ef0245e223e339c23e5c26e258";

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const ICON_URL = " http://openweathermap.org/img/wn/";

const DEFAULT_CITY = "comilla,bd";
window.onload = function () {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      getWeatherData(null, success.coords);
    },
    (failure) => {
      getWeatherData();
    }
  );

  cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (e.target.value) {
        getWeatherData(e.target.value);
        e.target.value = "";
      } else {
        alert("Please enter a valid city name");
      }
    }
  });
};

function getWeatherData(city = DEFAULT_CITY, coords) {
  let url = BASE_URL;
  city === null
    ? (url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}`)
    : (url = `${url}&q=${city}`);
  axios
    .get(url)
    .then(({ data }) => {
      console.log(data);
      let weather = {
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp - 273.15,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };
      setWeather(weather);
    })
    .catch((e) => {
      console.log(e.message);
      alert("City is not found");
    });
}
function setWeather(weather) {
  condition.src = `${ICON_URL}${weather.icon}.png`;
  city.innerHTML = weather.name;
  country.innerHTML = weather.country;
  mainText.innerHTML = weather.main;
  description.innerHTML = weather.description;
  temp.innerHTML = weather.temp.toFixed(2);
  pressure.innerHTML = weather.pressure;
  humidity.innerHTML = weather.humidity;
}
