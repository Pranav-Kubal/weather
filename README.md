# Weather App

## Description
This is a simple weather application that fetches real-time weather data based on the input PIN code. It retrieves details such as temperature, humidity, and air pressure using a weather API.

## Features
- Fetches weather details based on the PIN code.
- Displays temperature, humidity, and air pressure.
- Uses an API key for real-time data retrieval.
- Simple and user-friendly interface.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** JavaScript (Fetch API)  
- **API:** [OpenWeather API](https://openweathermap.org/api)  

## API Configuration
1. Sign up for an API key from [OpenWeather](https://home.openweathermap.org/users/sign_up).  
2. Replace `YOUR_API_KEY` in the script file with your actual API key.  

## API Example Usage
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?zip=YOUR_PIN_CODE,COUNTRY_CODE&appid=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error fetching weather data:', error));
```

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the MIT License.

## Author

Pranav Kubal
