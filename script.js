// function showTemperature() {
//     const temperatureInput = document.getElementById('temperatureInput');
//     const temperatureOutput = document.getElementById('temperatureOutput');
  
//     // Get temperature from input
//     const temperature = temperatureInput.value;
  
//     // Check if temperature is valid
//     if (!temperature || isNaN(temperature)) {
//       temperatureOutput.textContent = 'Please enter a valid temperature.';
//       return;
//     }
  
//     // Calculate temperature in Fahrenheit
//     const fahrenheit = (temperature * 9/5) + 32;
  
//     // Display temperature in output element
//     temperatureOutput.textContent = `Temperature: ${fahrenheit}°F`;
//   }
   

// function getWeather() {
//   const cityInput = document.getElementById('cityInput');
//   const weatherOutput = document.getElementById('weatherOutput');

//   // Get city name from input
//   const city = cityInput.value;

//   // Check if city name is empty
//   if (!city) {
//     weatherOutput.textContent = 'Please enter a city name.';
//     return;
//   }

//   // Fetch weather data from API
//   // Replace 'YOUR_API_KEY' with your actual API key
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fdfa0abcd920b78667524d5a185678bY&units=metric`)
//     .then(response => response.json())
//     .then(data => {
//       // Check if API response is successful
//       if (data.cod === '404') {
//         weatherOutput.textContent = 'City not found. Please enter a valid city name.';
//       } else {
//         const temperature = data.main.temp;
//         const description = data.weather[0].description;
//         const output = `Temperature in ${city}: ${temperature}°C<br>Weather description: ${description}`;
//         weatherOutput.innerHTML = output;
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       weatherOutput.textContent = 'An error occurred. Please try again later.';
//     });
// }

  
document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const cityInput = document.getElementById('cityInput');
  const cityName = document.getElementById('cityName');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('windSpeed');

  const city = cityInput.value;
  const apiKey = '3a614c4163ebc87d3da3df3c61fa9746'; // Replace with your actual API key
  const apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiURl)
      .then(response => response.json())
      .then(data => {
          cityName.textContent = data.name;
          temperature.textContent = `Temperature: ${data.main.temp}°C`;
          description.textContent = `Description: ${data.weather[0].description}`;
          humidity.textContent = `Humidity: ${data.main.humidity}%`;
          windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
});
