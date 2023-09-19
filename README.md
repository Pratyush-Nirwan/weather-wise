# Weather Application

<video src="2023-09-17%2020-29-45.mp4" controls title="Title"></video>

This is a simple weather application that allows users to check the current weather conditions for a specified city. Users can enter the name of a city, and the application will display the temperature, weather description, humidity, and wind speed for that location. Additionally, the application provides weather condition icons for a more visual representation.

## Getting Started

Before you can use this weather application, you will need to obtain your own API key from OpenWeatherMap. The API key is required to fetch weather data for the specified city.

Due to security reasons on GitHub, which prevent us from requesting data from an insecure resource, the website does not function properly when published on GitHub. Therefore, I am unable to provide a demo for this website. 

### Obtaining an API Key

Follow these steps to obtain your API key:

1. **Visit the OpenWeatherMap website**: Go to [OpenWeatherMap](https://openweathermap.org/).

2. **Sign Up or Log In**: If you don't have an account, sign up for a free account. If you already have one, log in.

3. **Generate an API Key**: After logging in, go to your account settings or dashboard. Look for an option to generate an API key. This key will be used to authenticate your requests to the OpenWeatherMap API.

4. **Copy Your API Key**: Once generated, copy your API key. You will need to paste it into the weather application code.

### Adding Your API Key to the Code

1. Open the `javascript.js` file in a text editor.

2. Locate the following line in the code:

   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
3. Replace "YOUR_API_KEY_HERE" with the API key you obtained from OpenWeatherMap.

4. Save the file.

### Using the Weather Application

1. **Open the HTML File**: To use the weather application, open the `index.html` file in a web browser. You can do this by right-clicking the file and selecting "Open with" or by simply double-clicking the file.

2. **Enter a City**: In the search input box, type the name of the city for which you want to check the weather.

3. **Press Enter or Click "Search"**: You can either press the "Enter" key after typing the city name or click the "Search" button to retrieve the weather information.

4. **View Weather Data**: If the city name is valid, the weather information for the specified city will be displayed, including temperature, weather description, humidity, wind speed, and a weather condition icon. If the city name is invalid, an error message will be displayed.

### Author

This weather application was created with ❤️ by Pratyush.
