async function getWeather() {
  const pincode = document.getElementById("pincodeInput").value.trim();
  const apiKey = "513ac8debfc21bad0d5e19eb15a4c8c3";
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&appid=${apiKey}&units=metric`;

  if (!pincode) {
    showError("Please enter a valid pincode.");
    return;
  }

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather data.");
    }

    document.getElementById(
      "cityName"
    ).textContent = `📍 ${data.name}, ${data.sys.country}`;
    document.getElementById(
      "temperature"
    ).textContent = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "humidity"
    ).textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById(
      "pressure"
    ).textContent = `🔽 Pressure: ${data.main.pressure} hPa`;

    let iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weatherIcon").src = iconUrl;
    document.getElementById("weatherIcon").style.display = "block";

    document.getElementById("weatherInfo").style.display = "block";
    document.getElementById("error").style.display = "none";
  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  const errorAlert = document.getElementById("error");
  errorAlert.textContent = `⚠ ${message}`;
  errorAlert.style.display = "block";
  document.getElementById("weatherInfo").style.display = "none";
}
