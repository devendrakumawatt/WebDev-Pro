document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const humidityDisplay = document.getElementById("humidity");
    const windSpeedDisplay = document.getElementById("windSpeed");
    const errorMsg = document.getElementById("error-message");
  
    const API_KEY = "11a63884f987dd54174855a1d1d1b552"; //env variable
    const IMG_API_KEY = "39324549-5c4a42030430c4abeb0cb9089"; //env variable
  
    getWeatherBtn.addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if (!city) return;
  
      // it may throw an error
      // server/database is always in another continent
  
      try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
      } catch (error) {
        showError();
      }
  
      const newImageUrl = await getRandomImage();
      if (newImageUrl) {
        document.body.style.backgroundImage = `url(${newImageUrl})`;
        document.body.style.backgroundSize = "cover";
      }
    });
  
    async function fetchWeatherData(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("City Not Found");
      }
      const data = await response.json();
      return data;
    }
  
    function displayWeatherData(data) {
      console.log(data);
      const { name, main, weather, wind } = data;
      cityNameDisplay.textContent = `City : ${name}`;
      temperatureDisplay.textContent = `Temperature : ${main.temp}`;
      descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
      humidityDisplay.textContent = `Humidity : ${main.humidity}`;
      windSpeedDisplay.textContent = `Wind Speed : ${wind.speed}`;
  
      // unlock the display
      weatherInfo.classList.remove("hidden");
      errorMsg.classList.add("hidden");
    }
  
    //   image
    const queryID = document.getElementById("description");
    const query = queryID.innerText;
  
    async function getRandomImage() {
      const url = `https://pixabay.com/api/?key=${IMG_API_KEY}&q=${query}&image_type=photo`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Image Not Found");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        return data.hits[randomIndex].largeImageURL; // Get a random image URL
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    function showError() {
      errorMsg.classList.add("hidden");
      weatherInfo.classList.remove("hidden");
    }
  });
  