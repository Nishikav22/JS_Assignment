document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");
  const errorBox = document.getElementById("error");

  resultBox.innerHTML = "";
  errorBox.textContent = "";

  if (city === "") {
    errorBox.textContent = "Please enter a city name!";
    return;
  }

  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();

    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].description;

    resultBox.innerHTML = `
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
  } 
  catch (err) {
    errorBox.textContent = err.message;
  }
}
